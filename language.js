function onPageLoad() {
	function changeLanguage(selectedLanguage) {
		var downloadButton = document.getElementById("download-button");
		var readyButton = document.getElementById("ready-button");
		
		var heroTitle = document.getElementById("hero-title");
		var heroParagraph = document.getElementById("hero-paragraph");
		
		var aboutTitle = document.getElementById("about-title");
		var aboutParagraph = document.getElementById("about-paragraph");
		
		var descTitle = document.getElementById("desc-title");
		var ossTitle = document.getElementById("oss-title");
		var ossParagraph = document.getElementById("oss-paragraph");
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
		
		var readyTitle = document.getElementById("ready-title");
		var readyParagraph1 = document.getElementById("ready-paragraph1");
		var readyParagraph2 = document.getElementById("ready-paragraph2");

		if (selectedLanguage === "en") {
			readyButton.textContent = downloadButton.textContent = "Download Now";
			
			heroTitle.textContent = "Thunder Engine: Unleash Your Game Development Creativity";
			heroParagraph.textContent = "Welcome to Thunder Engine, your gateway to limitless game development possibilities!";
			
			aboutTitle.textContent = "What is Thunder Engine?";
			aboutParagraph.textContent = "Thunder Engine is a game-changer in the world of game development. It's a free and open-source multi-functional lightweight game engine that empowers creators to craft stunning 2D and 3D games effortlessly. Our mission is to simplify game development so that you can focus on what you do best - creating captivating games!";
			
			descTitle.textContent = "Why Thunder Engine?";
			ossTitle.textContent = "Free Open Source Game Engine";
			ossParagraph.textContent = "Say goodbye to licensing fees and restrictions! Thunder Engine is completely free for all purposes. Whether you're a hobbyist, indie developer, or part of a game studio, you can harness the full power of Thunder Engine without breaking the bank.";
			
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
			
			readyTitle.textContent = "Ready to Get Started?";
			readyParagraph1.textContent = "Don't miss out on the opportunity to revolutionize your game development journey. Join the Thunder Engine community today and unlock the full potential of your creativity!";
			readyParagraph2.textContent = "Download Now and embark on your game development adventure with Thunder Engine.";
		} else if (selectedLanguage === "ru") {
			readyButton.textContent = downloadButton.textContent = "Скачать";
			
			heroTitle.textContent = "Thunder Engine: Раскрой свой потенциал в создании игр";
			heroParagraph.textContent = "Добро пожаловать в мир Thunder Engine - вашего ключа к бескрайним возможностям в разработке игр!";
			
			aboutTitle.textContent = "Что такое Thunder Engine?";
			aboutParagraph.textContent = "Thunder Engine - это настоящая революция в мире создания игр. Это бесплатный и открытый исходный код многофункциональный легкий игровой движок, который дарит разработчикам способность создавать потрясающие 2D и 3D игры без труда. Наша миссия - упростить разработку игр, чтобы вы могли сосредотачиваться на том, в чем вы действительно сильны - на создании увлекательных игр!";
			
			descTitle.textContent = "Почему Thunder Engine?";
			ossTitle.textContent = "Бесплатный и открытый исходный код";
			ossParagraph.textContent = "Попрощайтесь с лицензионными платежами и ограничениями! Thunder Engine полностью бесплатен для любых целей. Будь вы хобби-разработчиком, инди-разработчиком или частью игровой студии, вы можете использовать все преимущества Thunder Engine, не задумываясь о финансовых затратах.";
			
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
			
			readyTitle.textContent = "Готовы начать?";
			readyParagraph1.textContent = "Не упустите шанс изменить свой путь в мире разработки игр. Присоединяйтесь к сообществу Thunder Engine уже сегодня и разблокируйте полный потенциал вашей творческой силы!";
			readyParagraph2.textContent = "Скачайте сейчас и отправьтесь в путешествие в мир разработки игр с Thunder Engine.";
		} else if (selectedLanguage === "es") {
			readyButton.textContent = downloadButton.textContent = "Descarga Ahora";
			
			heroTitle.textContent = "Thunder Engine: Libera tu Creatividad en el Desarrollo de Juegos";
			heroParagraph.textContent = "¡Bienvenido a Thunder Engine, tu puerta de entrada a posibilidades ilimitadas en el desarrollo de juegos!";
			
			aboutTitle.textContent = "¿Qué es Thunder Engine?";
			aboutParagraph.textContent = "Thunder Engine es una revolución en el mundo del desarrollo de juegos. Es un motor de juegos gratuito y de código abierto, multifuncional y ligero, que permite a los creadores diseñar fácilmente juegos 2D y 3D impresionantes. Nuestra misión es simplificar el desarrollo de juegos para que puedas centrarte en lo que mejor haces: ¡crear juegos cautivadores!";
			
			descTitle.textContent = "¿Por qué Thunder Engine?";
			ossTitle.textContent = "Motor de Juegos Gratuito y de Código Abierto";
			ossParagraph.textContent = "Dile adiós a las tarifas de licencia y las restricciones. Thunder Engine es completamente gratuito para todos los propósitos. Ya seas un aficionado, un desarrollador independiente o formes parte de un estudio de juegos, puedes aprovechar todo el poder de Thunder Engine sin gastar un centavo.";
			
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
			
			readyTitle.textContent = "¿Listo para Empezar?";
			readyParagraph1.textContent = "No te pierdas la oportunidad de revolucionar tu trayectoria en el desarrollo de juegos. Únete a la comunidad de Thunder Engine hoy mismo y desbloquea todo el potencial de tu creatividad.";
			readyParagraph2.textContent = "Descarga Ahora y embárcate en la aventura del desarrollo de juegos con Thunder Engine.";
		} else if (selectedLanguage === "fr") {
			readyButton.textContent = downloadButton.textContent = "Téléchargez maintenant";
			
			heroTitle.textContent = "Thunder Engine : Libérez votre créativité dans le développement de jeux";
			heroParagraph.textContent = "Bienvenue dans l'univers de Thunder Engine, votre porte d'entrée vers des possibilités de développement de jeux illimitées !";
			
			aboutTitle.textContent = "Qu'est-ce que Thunder Engine ?";
			aboutParagraph.textContent = "Thunder Engine révolutionne le monde du développement de jeux. Il s'agit d'un moteur de jeu gratuit et open source, multifonctionnel et léger, qui permet aux créateurs de concevoir facilement des jeux 2D et 3D époustouflants. Notre mission est de simplifier le développement de jeux pour que vous puissiez vous concentrer sur ce que vous faites de mieux : créer des jeux captivants !";
			
			descTitle.textContent = "Pourquoi Thunder Engine ?";
			ossTitle.textContent = "Moteur de jeu gratuit et open source";
			ossParagraph.textContent = "Dites adieu aux frais de licence et aux restrictions ! Thunder Engine est entièrement gratuit pour toutes les utilisations. Que vous soyez un amateur, un développeur indépendant ou membre d'un studio de jeux, vous pouvez exploiter toute la puissance de Thunder Engine sans vous ruiner.";
			
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
			
			readyTitle.textContent = "Prêt à commencer ?";
			readyParagraph1.textContent = "Ne manquez pas l'opportunité de révolutionner votre parcours de développement de jeux. Rejoignez la communauté Thunder Engine dès aujourd'hui et débloquez tout le potentiel de votre créativité !";
			readyParagraph2.textContent = "Téléchargez maintenant et lancez-vous dans l'aventure du développement de jeux avec Thunder Engine.";
		} else if (selectedLanguage === "zh") {
			readyButton.textContent = downloadButton.textContent = "立即下载";
			
			heroTitle.textContent = "Thunder Engine ：释放你的游戏开发创造力";
			heroParagraph.textContent = "欢迎来到 Thunder Engine 的世界，这里是您无限游戏开发可能性的门户！";
			
			aboutTitle.textContent = "什么是 Thunder Engine？";
			aboutParagraph.textContent = "Thunder Engine 是游戏开发世界的一次革命。它是一个免费开源、多功能轻量级的游戏引擎，可让创作者轻松创建令人惊叹的2D和3D游戏。我们的使命是简化游戏开发，让您可以专注于做您最擅长的事情 - 创造引人入胜的游戏！";
			
			descTitle.textContent = "为什么选择 Thunder Engine？";
			ossTitle.textContent = "免费开源游戏引擎";
			ossParagraph.textContent = "告别许可费用和限制！Thunder Engine 完全免费，无论您是业余爱好者、独立开发者还是游戏工作室的一部分，您都可以充分利用 Thunder Engine 的全部功能，而不必花费一分钱。";
			
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
			
			readyTitle.textContent = "准备好开始了吗？";
			readyParagraph1.textContent = "不要错过改变游戏开发之旅的机会。立即加入 Thunder Engine 社区，解锁您创造力的全部潜力！";
			readyParagraph2.textContent = "立即下载，并开始使用 Thunder Engine 踏上您的游戏开发之旅。";
		}
	}

	function changeLanguageOnClick(event) {
		var selectedLanguage = event.target.getAttribute("data-lang");
		
		changeLanguage(selectedLanguage);
	}

	var languageLinks = document.querySelectorAll("[data-lang]");

	languageLinks.forEach(function(link) {
		link.addEventListener("click", changeLanguageOnClick);
	});
}

document.addEventListener("DOMContentLoaded", onPageLoad);
