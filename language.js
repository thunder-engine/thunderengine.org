class LanguageSwitcher {
	constructor() {
		this.supportedLanguages = ['en', 'ru', 'es', 'fr', 'zh'];
		this.defaultLanguage = 'en';
		this.currentLanguage = this.getLanguageFromStorage() || this.detectLanguage();
		this.translations = {};
	}

	detectLanguage() {
		const browserLanguage = navigator.language || navigator.userLanguage;
		const languages = navigator.languages || [browserLanguage];

		for (let lang of languages) {
			const simplifiedLang = lang.split('-')[0].toLowerCase();

			if (this.supportedLanguages.includes(simplifiedLang)) {
				return simplifiedLang;
			}
		}

		return this.defaultLanguage;
	}

	getLanguageFromStorage() {
		try {
			return localStorage.getItem('userLanguage');
		} catch (e) {
			return null;
		}
	}

	saveLanguage() {
		let meta = document.querySelector('meta[http-equiv="content-language"]');
		if (!meta) {
			meta = document.createElement('meta');
			meta.httpEquiv = "content-language";
			document.head.appendChild(meta);
		}
		meta.content = this.currentLanguage;

		try {
			localStorage.setItem('userLanguage', this.currentLanguage);
		} catch (e) {
			console.warn('Unable to save current language');
		}
	}

	switchLanguage(lang) {
		if (this.supportedLanguages.includes(lang)) {
			this.currentLanguage = lang;
			this.saveLanguage();
			this.applyLanguage();
		}
	}

	bindEvents() {
		const languageSwitcher = document.querySelector('.language-selection');
		const languageBtn = document.querySelector('.language-btn');

		var languageLinks = document.querySelectorAll("[data-lang]");

		languageLinks.forEach(button => {
			button.addEventListener("click", (e) => {
				var selectedLanguage = e.target.getAttribute("data-lang");

				languageSwitcher.classList.toggle('active');

				this.switchLanguage(selectedLanguage);
			});
		});

		languageBtn.addEventListener('click', function(e) {
			e.stopPropagation();
			languageSwitcher.classList.toggle('active');
		});
	}

	async loadTranslations(lang) {
		const pageName = this.getPageName();
		const files = ['common.json'];
		if (pageName) {
			files.push(pageName + '.json');
		}

		const results = await Promise.allSettled(
			files.map(file =>
				fetch(`/i18n/${lang}/${file}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`Failed to load ${file}: ${response.status}`);
						}
						return response.json();
					})
			)
		);

		const translations = {};
		results.forEach(result => {
			if (result.status === 'fulfilled') {
				Object.assign(translations, result.value);
			} else {
				console.warn('Translation file not loaded:', result.reason);
			}
		});

		return translations;
	}

	getPageName() {
		const path = window.location.pathname;
		const segments = path.split('/').filter(s => s.length > 0);
		const lastSegment = segments[segments.length - 1];

		if (!lastSegment || lastSegment === 'index.html') {
			return 'index';
		}

		const name = lastSegment.replace(/\.html$/, '');
		return name;
	}

	applyLanguage() {
		this.loadTranslations(this.currentLanguage).then(translations => {
			this.translations = translations;
			this.applyTranslations();
		});
	}

	applyTranslations() {
		document.querySelectorAll('[data-i18n]').forEach(element => {
			const key = element.getAttribute('data-i18n');
			const value = this.translations[key];
			if (value !== undefined) {
				element.textContent = value;
			}
		});
	}

	t(key, params) {
		let value = this.translations[key];
		if (value === undefined) {
			return key;
		}
		if (params) {
			for (const [name, replacement] of Object.entries(params)) {
				value = value.replace(new RegExp('\\{' + name + '\\}', 'g'), replacement);
			}
		}
		return value;
	}
}

const languageSwitcher = new LanguageSwitcher();

function t(key, params) {
	return languageSwitcher.t(key, params);
}

document.addEventListener('DOMContentLoaded', () => {
	languageSwitcher.applyLanguage();
	languageSwitcher.bindEvents();
});
