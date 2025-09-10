class LanguageSwitcher {
	constructor() {
        this.supportedLanguages = ['en', 'ru', 'es', 'fr', 'zh'];
        this.defaultLanguage = 'en';
        this.currentLanguage = this.getLanguageFromStorage() || this.detectLanguage();
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
		try {
			let meta = document.querySelector('meta[http-equiv="content-language"]');
			if (!meta) {
				meta = document.createElement('meta');
				meta.httpEquiv = "content-language";
				document.head.appendChild(meta);
			}
			meta.content = this.currentLanguage;
			
            localStorage.setItem('userLanguage', lang);
        } catch (e) { 
			console.warn('Unable to save current language');
		}
    }
	
	switchLanguage(lang) {
		if (this.supportedLanguages.includes(lang)) {
			this.currentLanguage = lang;
			this.saveLanguage();
			this.applyLanguage();
			//this.updateLanguageSelector();
		}
	}
	
	bindEvents() {
		const languageSwitcher = document.querySelector('.language-selection');
		const languageBtn = document.querySelector('.language-btn');

		var languageLinks = document.querySelectorAll("[data-lang]");

		languageLinks.forEach(button => {
			button.addEventListener("click", (e) => {
				var selectedLanguage = event.target.getAttribute("data-lang");
			
				languageSwitcher.classList.toggle('active');
			
				this.switchLanguage(selectedLanguage);
			});
		});
		
		languageBtn.addEventListener('click', function(e) {
			e.stopPropagation();
			languageSwitcher.classList.toggle('active');
		});
	}
	
	applyLanguage() {
		// Hero section
		var downloadButton = document.getElementById("download-button");
		
		var heroTitle = document.getElementById("hero-title");
		var heroParagraph = document.getElementById("hero-paragraph");
		
		// About section
		var aboutTitle = document.getElementById("about-title");
		var aboutParagraph = document.getElementById("about-paragraph");
		
		// Description section
		var descTitle = document.getElementById("desc-title");
		var freeTitle = document.getElementById("free-title");
		var freeParagraph = document.getElementById("free-paragraph");
		var crossTitle = document.getElementById("cross-title");
		var crossParagraph = document.getElementById("cross-paragraph");
		var editorTitle = document.getElementById("editor-title");
		var editorParagraph = document.getElementById("editor-paragraph");
		var modTitle = document.getElementById("mod-title");
		var modParagraph = document.getElementById("mod-paragraph");
		var docTitle = document.getElementById("doc-title");
		var docParagraph = document.getElementById("doc-paragraph");
		var gitTitle = document.getElementById("git-title");
		var gitParagraph = document.getElementById("git-paragraph");
		
		// Contribute section
		var ossTitle = document.getElementById("oss-title");
		var ossParagraph = document.getElementById("oss-paragraph");
		
		var statContributors = document.getElementById("stat-contributors");
		var statStars = document.getElementById("stat-stars");
		var statPulls = document.getElementById("stat-pulls");
		
		var codeTitle = document.getElementById("code-title");
		var codeParagraph = document.getElementById("code-paragraph");
		
		var writeTitle = document.getElementById("write-title");
		var writeParagraph = document.getElementById("write-paragraph");
		
		var reportTitle = document.getElementById("report-title");
		var reportParagraph = document.getElementById("report-paragraph");
		
		if (this.currentLanguage === "en") {
			// Hero section
			downloadButton.textContent = "Download Now";
			
			heroTitle.textContent = "Thunder Engine: Unleash Your Game Development Creativity";
			heroParagraph.textContent = "Welcome to Thunder Engine, your gateway to limitless game development possibilities!";
			
			aboutTitle.textContent = "What is Thunder Engine?";
			aboutParagraph.textContent = "Thunder Engine is a game-changer in the world of game development. It's a free and open-source multi-functional lightweight game engine that empowers creators to craft stunning 2D and 3D games effortlessly. Our mission is to simplify game development so that you can focus on what you do best - creating captivating games!";
			
			// Description section
			descTitle.textContent = "Why Thunder Engine?";
			freeTitle.textContent = "Free Open Source Game Engine";
			freeParagraph.textContent = "Say goodbye to licensing fees and restrictions! Thunder Engine is completely free for all purposes. Whether you're a hobbyist, indie developer, or part of a game studio, you can harness the full power of Thunder Engine without breaking the bank.";
			
			crossTitle.textContent = "Cross-Platform";
			crossParagraph.textContent = "Thunder Engine provides the ability to create games for various platforms, including Windows, macOS, Linux, iOS, Android, and more. Our powerful game engine ensures that your game will work on any device.";
			
			editorTitle.textContent = "Embedded Editor";
			editorParagraph.textContent = "Thunder Engine comes with an integrated editor that offers a wide range of tools for game content development. Edit graphics, fine-tune audio, and create unique worlds with ease, all in one place.";
			
			modTitle.textContent = "Modular Architecture";
			modParagraph.textContent = "Thunder Engine offers a versatile and modular architecture that adapts to your project's unique needs. Customize your game development workflow by choosing the components that suit your creative vision. With Thunder Engine, you're in control!";
			
			docTitle.textContent = "Extensive Documentation";
			docParagraph.textContent = "We understand that every developer's journey starts with learning. That's why Thunder Engine provides comprehensive and user-friendly documentation. Whether you're a seasoned pro or a newbie, our resources will guide you every step of the way.";
			
			gitTitle.textContent = "GitHub Integration";
			gitParagraph.textContent = "Collaboration is at the heart of Thunder Engine. Our GitHub integration allows you to connect with a vibrant community of developers, share your projects, and access a treasure trove of open-source resources. Together, we can elevate game development to new heights!";
			
			// Contribute section
			ossTitle.textContent = "Become a part of Thunder Engine";
			ossParagraph.textContent = "Join a community of innovators and like-minded creators! Here, every idea is valued and your initiatives will be supported. Together, we are building the future of game technology.";
			
			statContributors.textContent = "Contributors";
			statStars.textContent = "Stars on GitHub";
			statPulls.textContent = "Pull requests";
			
			codeTitle.textContent = "Code";
			codeParagraph.textContent = "Bring your ideas to life and leave your mark on the engine's evolution! Your code could become the foundation for future games created by thousands of developers worldwide. Don't just fix bugs — create new possibilities.";
			
			writeTitle.textContent = "Document";
			writeParagraph.textContent = "Help other developers easily harness the power of the Thunder Engine! Your clear explanations and guides will save others countless hours and help the community grow faster. Become a guide into the world of game development technology.";
			
			reportTitle.textContent = "Report";
			reportParagraph.textContent = "Be a pioneer — find issues first and propose enhancements! Your keen eye makes the engine more stable and user-friendly for everyone. Help us craft the perfect development tool.";

		} else if (this.currentLanguage === "ru") {
			// Hero section
			downloadButton.textContent = "Скачать";
			
			heroTitle.textContent = "Thunder Engine: Раскрой свой потенциал в создании игр";
			heroParagraph.textContent = "Добро пожаловать в мир Thunder Engine - вашего ключа к бескрайним возможностям в разработке игр!";
			
			aboutTitle.textContent = "Что такое Thunder Engine?";
			aboutParagraph.textContent = "Thunder Engine - это настоящая революция в мире создания игр. Это бесплатный и открытый исходный код многофункциональный легкий игровой движок, который дарит разработчикам способность создавать потрясающие 2D и 3D игры без труда. Наша миссия - упростить разработку игр, чтобы вы могли сосредотачиваться на том, в чем вы действительно сильны - на создании увлекательных игр!";
			
			// Description section
			descTitle.textContent = "Почему Thunder Engine?";
			freeTitle.textContent = "Бесплатный и открытый исходный код";
			freeParagraph.textContent = "Попрощайтесь с лицензионными платежами и ограничениями! Thunder Engine полностью бесплатен для любых целей. Будь вы хобби-разработчиком, инди-разработчиком или частью игровой студии, вы можете использовать все преимущества Thunder Engine, не задумываясь о финансовых затратах.";
			
			crossTitle.textContent = "Кросс-платформенный";
			crossParagraph.textContent = "Thunder Engine обеспечивает возможность создавать игры для множества платформ, включая Windows, macOS, Linux, iOS, Android и другие. Наш мощный игровой движок гарантирует, что ваша игра будет работать на любом устройстве.";
			
			editorTitle.textContent = "Встроенный Редактор";
			editorParagraph.textContent = "Thunder Engine поставляется с интегрированным редактором, который предоставляет широкий спектр инструментов для разработки игрового контента. Редактируйте графику, настраивайте звук и создавайте уникальные миры с легкостью, все в одном месте.";
			
			modTitle.textContent = "Модульная архитектура";
			modParagraph.textContent = "Thunder Engine предлагает гибкую и модульную архитектуру, которая приспосабливается под уникальные потребности вашего проекта. Настройте ваш рабочий процесс разработки, выбирая компоненты, которые соответствуют вашей творческой задаче. С Thunder Engine вы в полном контроле!";
			
			docTitle.textContent = "Обширная документация";
			docParagraph.textContent = "Мы понимаем, что каждое начинание разработчика начинается с обучения. Именно поэтому Thunder Engine предоставляет полную и доступную документацию. Будь вы опытным профессионалом или новичком, наши ресурсы будут вас сопровождать на каждом этапе.";
			
			gitTitle.textContent = "Интеграция с GitHub";
			gitParagraph.textContent = "Сотрудничество - это основа Thunder Engine. Наша интеграция с GitHub позволяет вам связаться с активным сообществом разработчиков, делиться своими проектами и получить доступ к сокровищнице ресурсов с открытым исходным кодом. Вместе мы поднимем разработку игр на новый уровень!";

			// Contribute section
			ossTitle.textContent = "Стань частью Thunder Engine";
			ossParagraph.textContent = "Присоединяйтесь к сообществу инноваторов и единомышленников! Здесь ценят каждую идею и поддержат ваши начинания. Вместе мы создаем будущее игровых технологий.";
			
			statContributors.textContent = "Контрибьюторов";
			statStars.textContent = "Звёзд на GitHub";
			statPulls.textContent = "Pull requests";
			
			codeTitle.textContent = "Пиши";
			codeParagraph.textContent = "Реализуйте свои идеи и оставьте след в развитии движка! Ваш код может стать основой для будущих игр тысяч разработчиков по всему миру. Не просто исправляйте ошибки — создавайте новые возможности.";
			
			writeTitle.textContent = "Документируй";
			writeParagraph.textContent = "Помогите другим разработчикам легко освоить мощь Thunder Engine! Ваши пояснения и руководства сэкономят часы времени другим и помогут сообществу расти быстрее. Станьте проводником в мир технологий.";
			
			reportTitle.textContent = "Сообщай";
			reportParagraph.textContent = "Станьте первопроходцем, находите недочеты первыми и предлагайте улучшения! Ваша внимательность делает движок стабильнее и удобнее для всех. Помогите создать идеальный инструмент для разработки.";

		} else if (this.currentLanguage === "es") {
			// Hero section
			downloadButton.textContent = "Descarga Ahora";
			
			heroTitle.textContent = "Thunder Engine: Libera tu Creatividad en el Desarrollo de Juegos";
			heroParagraph.textContent = "¡Bienvenido a Thunder Engine, tu puerta de entrada a posibilidades ilimitadas en el desarrollo de juegos!";
			
			aboutTitle.textContent = "¿Qué es Thunder Engine?";
			aboutParagraph.textContent = "Thunder Engine es una revolución en el mundo del desarrollo de juegos. Es un motor de juegos gratuito y de código abierto, multifuncional y ligero, que permite a los creadores diseñar fácilmente juegos 2D y 3D impresionantes. Nuestra misión es simplificar el desarrollo de juegos para que puedas centrarte en lo que mejor haces: ¡crear juegos cautivadores!";
			
			// Description section
			descTitle.textContent = "¿Por qué Thunder Engine?";
			freeTitle.textContent = "Motor de Juegos Gratuito y de Código Abierto";
			freeParagraph.textContent = "Dile adiós a las tarifas de licencia y las restricciones. Thunder Engine es completamente gratuito para todos los propósitos. Ya seas un aficionado, un desarrollador independiente o formes parte de un estudio de juegos, puedes aprovechar todo el poder de Thunder Engine sin gastar un centavo.";
			
			crossTitle.textContent = "Cross-Platform";
			crossParagraph.textContent = "Thunder Engine brinda la capacidad de crear juegos para diversas plataformas, incluyendo Windows, macOS, Linux, iOS, Android y m谩s. Nuestro poderoso motor de juegos garantiza que su juego funcione en cualquier dispositivo.";
			
			editorTitle.textContent = "Editor Incorporado";
			editorParagraph.textContent = "Thunder Engine viene con un editor integrado que ofrece una amplia gama de herramientas para el desarrollo de contenido de juegos. Edite gr谩ficos, ajuste el audio y cree mundos 煤nicos con facilidad, todo en un solo lugar.";
			
			modTitle.textContent = "Arquitectura Modular";
			modParagraph.textContent = "Thunder Engine ofrece una arquitectura versátil y modular que se adapta a las necesidades únicas de tu proyecto. Personaliza tu flujo de trabajo de desarrollo de juegos eligiendo los componentes que se ajusten a tu visión creativa. ¡Con Thunder Engine, tienes el control!";
			
			docTitle.textContent = "Documentación Completa";
			docParagraph.textContent = "Entendemos que el viaje de cada desarrollador comienza con el aprendizaje. Por eso, Thunder Engine proporciona una documentación completa y fácil de usar. Ya seas un profesional experimentado o un principiante, nuestros recursos te guiarán en cada paso.";
			
			gitTitle.textContent = "Integración con GitHub";
			gitParagraph.textContent = "La colaboración está en el corazón de Thunder Engine. Nuestra integración con GitHub te permite conectarte con una comunidad vibrante de desarrolladores, compartir tus proyectos y acceder a un tesoro de recursos de código abierto. ¡Juntos podemos elevar el desarrollo de juegos a nuevas alturas!";
			
			// Contribute section
			ossTitle.textContent = "¡Sé Parte de Thunder Engine";
			ossParagraph.textContent = "¡Únete a una comunidad de innovadores y creadores con ideas afines! Aquí cada idea es valorada y tus iniciativas serán apoyadas. Juntos, estamos construyendo el futuro de la tecnología de videojuegos.";
			
			statContributors.textContent = "Contribuyentes";
			statStars.textContent = "Estrellas en GitHub";
			statPulls.textContent = "Pull requests";
			
			codeTitle.textContent = "Programa";
			codeParagraph.textContent = "¡Da vida a tus ideas y deja tu huella en la evolución del motor! Tu código podría convertirse en la base de videojuegos futuros creados por miles de desarrolladores en todo el mundo. No solo corrijas errores, ¡crea nuevas posibilidades!";
			
			writeTitle.textContent = "Documenta";
			writeParagraph.textContent = "¡Ayuda a otros desarrolladores a aprovechar fácilmente el poder de Thunder Engine! Tus explicaciones claras y guías les ahorrarán incontables horas y ayudarán a que la comunidad crezca más rápido. Conviértete en un guía en el mundo del desarrollo de videojuegos.";
			
			reportTitle.textContent = "Reporta";
			reportParagraph.textContent = "¡Sé un pionero: encuentra problemas primero y propone mejoras! Tu ojo crítico hace que el motor sea más estable y fácil de usar para todos. Ayúdanos a crear la herramienta de desarrollo perfecta.";
			
		} else if (this.currentLanguage === "fr") {
			// Hero section
			downloadButton.textContent = "Téléchargez maintenant";
			
			heroTitle.textContent = "Thunder Engine : Libérez votre créativité dans le développement de jeux";
			heroParagraph.textContent = "Bienvenue dans l'univers de Thunder Engine, votre porte d'entrée vers des possibilités de développement de jeux illimitées !";
			
			aboutTitle.textContent = "Qu'est-ce que Thunder Engine ?";
			aboutParagraph.textContent = "Thunder Engine révolutionne le monde du développement de jeux. Il s'agit d'un moteur de jeu gratuit et open source, multifonctionnel et léger, qui permet aux créateurs de concevoir facilement des jeux 2D et 3D époustouflants. Notre mission est de simplifier le développement de jeux pour que vous puissiez vous concentrer sur ce que vous faites de mieux : créer des jeux captivants !";
			
			// Description section
			descTitle.textContent = "Pourquoi Thunder Engine ?";
			freeTitle.textContent = "Moteur de jeu gratuit et open source";
			freeParagraph.textContent = "Dites adieu aux frais de licence et aux restrictions ! Thunder Engine est entièrement gratuit pour toutes les utilisations. Que vous soyez un amateur, un développeur indépendant ou membre d'un studio de jeux, vous pouvez exploiter toute la puissance de Thunder Engine sans vous ruiner.";
			
			crossTitle.textContent = "Cross-Platform";
			crossParagraph.textContent = "Thunder Engine offre la possibilité de créer des jeux pour différentes plateformes, notamment Windows, macOS, Linux, iOS, Android et bien d'autres. Notre puissant moteur de jeu garantit que votre jeu fonctionnera sur n'importe quel appareil.";
			
			editorTitle.textContent = "Éditeur Intégré";
			editorParagraph.textContent = "Thunder Engine est livré avec un éditeur intégré qui propose une large gamme d'outils pour le développement de contenu de jeu. Modifiez des graphiques, peaufinez l'audio et créez des mondes uniques en toute simplicité, le tout en un seul endroit.";
			
			modTitle.textContent = "Architecture modulaire";
			modParagraph.textContent = "Thunder Engine offre une architecture modulaire polyvalente qui s'adapte aux besoins uniques de votre projet. Personnalisez votre flux de travail de développement de jeu en choisissant les composants qui correspondent à votre vision créative. Avec Thunder Engine, c'est vous qui avez le contrôle !";
			
			docTitle.textContent = "Documentation complète";
			docParagraph.textContent = "Nous comprenons que le voyage de chaque développeur commence par l'apprentissage. C'est pourquoi Thunder Engine propose une documentation complète et conviviale. Que vous soyez un professionnel chevronné ou un novice, nos ressources vous guideront à chaque étape.";
			
			gitTitle.textContent = "Intégration GitHub";
			gitParagraph.textContent = "La collaboration est au cœur de Thunder Engine. Notre intégration avec GitHub vous permet de vous connecter à une communauté dynamique de développeurs, de partager vos projets et d'accéder à une mine de ressources open source. Ensemble, nous pouvons élever le développement de jeux à de nouveaux sommets !";
			
			// Contribute section
			ossTitle.textContent = "Devenez Partie Intégrante de Thunder Engine";
			ossParagraph.textContent = "Rejoignez une communauté d'innovateurs et de créateurs passionnés ! Ici, chaque idée est valorisée et vos initiatives seront soutenues. Ensemble, nous bâtissons l'avenir de la technologie du jeu vidéo.";
			
			statContributors.textContent = "Contributeurs";
			statStars.textContent = "Étoiles sur GitHub";
			statPulls.textContent = "Pull requests";
			
			codeTitle.textContent = "Codez";
			codeParagraph.textContent = "Donnez vie à vos idées et laissez votre empreinte dans l'évolution du moteur ! Votre code pourrait devenir la fondation de jeux futurs créés par des milliers de développeurs à travers le monde. Ne vous contentez pas de corriger des bugs — créez de nouvelles possibilités !";
			
			writeTitle.textContent = "Documentez";
			writeParagraph.textContent = "Aidez les autres développeurs à exploiter facilement la puissance de Thunder Engine ! Vos explications claires et guides leur feront gagner un temps précieux et aideront la communauté à grandir plus vite. Devenez un guide dans le monde de la technologie de développement de jeux.";
			
			reportTitle.textContent = "Signalez";
			reportParagraph.textContent = "Soyez un pionnier — trouvez les problèmes en premier et proposez des améliorations ! Votre œil averti rend le moteur plus stable et convivial pour tous. Aidez-nous à forger l'outil de développement parfait.";
			
		} else if (this.currentLanguage === "zh") {
			// Hero section
			downloadButton.textContent = "立即下载";
			
			heroTitle.textContent = "Thunder Engine ：释放你的游戏开发创造力";
			heroParagraph.textContent = "欢迎来到 Thunder Engine 的世界，这里是您无限游戏开发可能性的门户！";
			
			aboutTitle.textContent = "什么是 Thunder Engine？";
			aboutParagraph.textContent = "Thunder Engine 是游戏开发世界的一次革命。它是一个免费开源、多功能轻量级的游戏引擎，可让创作者轻松创建令人惊叹的2D和3D游戏。我们的使命是简化游戏开发，让您可以专注于做您最擅长的事情 - 创造引人入胜的游戏！";
			
			// Description section
			descTitle.textContent = "为什么选择 Thunder Engine？";
			freeTitle.textContent = "免费开源游戏引擎";
			freeParagraph.textContent = "告别许可费用和限制！Thunder Engine 完全免费，无论您是业余爱好者、独立开发者还是游戏工作室的一部分，您都可以充分利用 Thunder Engine 的全部功能，而不必花费一分钱。";
			
			crossTitle.textContent = "跨平台";
			crossParagraph.textContent = "Thunder Engine 提供了在各种平台上创建游戏的能力，包括Windows、macOS、Linux、iOS、Android等等。我们强大的游戏引擎确保您的游戏在任何设备上都能运行。";
			
			editorTitle.textContent = "内嵌编辑器";
			editorParagraph.textContent = "Thunder Engine 配备了一个集成的编辑器，提供了广泛的工具，用于游戏内容的开发。轻松编辑图形，微调音频，并在一个地方创建独特的世界。";
			
			modTitle.textContent = "模块化架构";
			modParagraph.textContent = "Thunder Engine 提供了灵活的模块化架构，适应您项目的独特需求。通过选择适合您创意愿景的组件来定制您的游戏开发工作流程。有了 Thunder Engine，您完全掌握了局面！";
			
			docTitle.textContent = "全面的文档";
			docParagraph.textContent = "我们明白每位开发者的学习之路都是从学习开始的。这就是为什么 Thunder Engine 提供全面且用户友好的文档。无论您是老手还是新手，我们的资源都会在每一步引导您。";
			
			gitTitle.textContent = "GitHub集成";
			gitParagraph.textContent = "合作是 Thunder Engine 的核心。我们的GitHub集成允许您与充满活力的开发者社区联系，分享您的项目并访问丰富的开源资源。一起，我们可以将游戏开发推向新的高度！";
			
			// Contribute section
			ossTitle.textContent = "成为Thunder Engine的一员"; 
			ossParagraph.textContent = "加入创新者和志同道合的创造者的社区！在这里，每个想法都被重视，您的倡议将得到支持。携手共建游戏技术的未来。";
			
			statContributors.textContent = "贡献者";
			statStars.textContent = "GitHub星标"; 
			statPulls.textContent = "拉取请求"; 
			
			codeTitle.textContent = "编写代码"; 
			codeParagraph.textContent = "将您的想法变为现实，在引擎的演进中留下您的印记！您的代码可能成为全球数千名开发者未来游戏的基础。不要只是修复错误——创造新的可能性！";
			
			writeTitle.textContent = "编写文档"; 
			writeParagraph.textContent = "帮助其他开发者轻松掌握Thunder Engine的强大功能！您清晰的解释和指南将为他人节省无数时间，并帮助社区更快发展。成为游戏开发技术世界的引路人。";
			
			reportTitle.textContent = "报告问题"; 
			reportParagraph.textContent = "成为先锋——率先发现问题并提出改进建议！您敏锐的目光使引擎对每个人来说更加稳定和友好。帮助我们打造完美的开发工具。";
		}
	}
}

const languageSwitcher = new LanguageSwitcher();

document.addEventListener('DOMContentLoaded', () => {
	languageSwitcher.applyLanguage();
	languageSwitcher.bindEvents();
});
