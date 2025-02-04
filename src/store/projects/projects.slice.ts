import { TLoading } from "@customTypes/general";
import { IProject } from "@customTypes/projects.types";
import { createSlice } from "@reduxjs/toolkit";

interface ProjectsState {
  projects: IProject[];
  loading: TLoading;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع تيكنو باي",
        en: "TechnoBay Website",
      },
      projectDescription: {
        ar: "تيكنو باي هو متجر إلكتروني يقدم مجموعة واسعة من الإلكترونيات، الأدوات، والإكسسوارات.",
        en: "Technobay is an online store that offers a wide range of electronics, gadgets, and accessories.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737303488/uxokum62b0rmg26upjvu.png",
      category: {
        ar: "ريأكت",
        en: "react",
      },
      _id: "678d25c191ada6bf1da20ffa",
      projectURL: "https://techno-bay.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/TechnoBay",
      createdAt: "2025-01-19T16:18:09.471Z",
      updatedAt: "2025-01-19T16:18:09.471Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع فيوري",
        en: "Fiore Website",
      },
      projectDescription: {
        ar: "فيوري هو موقع لمحل زهور يقدم باقات زهور وترتيبات زهرية جميلة وطازجة لكل المناسبات",
        en: "Fiore is a flower shop website that offers beautiful and fresh flower bouquets and arrangements for all occasions.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737303822/owtdiksa5dbxqtk4dlrv.png",
      category: {
        ar: "ريأكت",
        en: "react",
      },
      _id: "678d270f91ada6bf1da20ffc",
      projectURL: "https://fiore-one.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/Fiore",
      createdAt: "2025-01-19T16:23:43.021Z",
      updatedAt: "2025-01-19T16:23:43.021Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع ميدستار",
        en: "Medstart Website",
      },
      projectDescription: {
        ar: "ميدستار: رعاية صحية متعاطفة، وعلاجات متقدمة، وخبرة طبية موثوقة.",
        en: "Medstar: Compassionate healthcare, advanced treatments, trusted medical expertise.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737322788/a0i2p4xywm0m5o6wwhu8.png",
      category: {
        ar: "ريأكت",
        en: "react",
      },
      _id: "678d7124b2e400df0cb5f26c",
      projectURL: "https://medstarwebiste.web.app/",
      projectGithubURL: "https://github.com/YousiefSameh/MedstarWebsite",
      createdAt: "2025-01-19T21:39:48.944Z",
      updatedAt: "2025-01-19T21:39:48.944Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع التجارة الإلكترونية (توبيكو)",
        en: "Ecommerce Website (Topico)",
      },
      projectDescription: {
        ar: "توبيكو هو موقع للتجارة الإلكترونية يقدم مجموعة واسعة من المنتجات، من الإلكترونيات إلى السلع المنزلية.",
        en: "Topico is an e-commerce website offering a wide range of products, from electronics to home goods.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737322954/igsde8qf28p0fe1nyxyc.png",
      category: {
        ar: "جافا سكريبت",
        en: "javascript",
      },
      _id: "678d71cbb2e400df0cb5f26f",
      projectURL: "https://ecommerce-wheat-eta.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/Ecommerce",
      createdAt: "2025-01-19T21:42:35.510Z",
      updatedAt: "2025-01-19T21:42:35.510Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع الاختبارات",
        en: "Quizes Website",
      },
      projectDescription: {
        ar: "موقع اختبارات يقدم اختبارات ممتعة وتفاعلية حول مواضيع مختلفة لاختبار وتحسين معرفتك.",
        en: "A quiz website offering fun, interactive quizzes on various topics to test and improve your knowledge.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737323078/aiwatr4nzwvgxxuyir75.png",
      category: {
        ar: "جافا سكريبت",
        en: "javascript",
      },
      _id: "678d7247b2e400df0cb5f272",
      projectURL: "https://quiz-app-ecru-six.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/QuizApp",
      createdAt: "2025-01-19T21:44:39.306Z",
      updatedAt: "2025-01-19T21:44:39.306Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "اديداس للتجاره الالكترونيه",
        en: "Adidas E-commerce",
      },
      projectDescription: {
        ar: "متجر نايكي الإلكتروني لتصفح وشراء المنتجات بسهولة مع حساب الأسعار وإرسال الطلبات عبر واتساب",
        en: "Nike Store e-commerce for easy browsing, purchasing, price calculation, and WhatsApp orders.",
      },
      projectImage:
        "https://66b85c98712ea1fb5dd763f2--friendly-bonbon-d2fb73.netlify.app/images/Nike-Store-E-commerce.WebP",
      category: {
        ar: "جافا سكريبت",
        en: "javascript",
      },
      _id: "678d72b5b2e400df0cb5f276",
      projectURL: "https://nike-store-e-commerce-flax.vercel.app/",
      projectGithubURL: "https://github.com/anaswail/Nike-Store-e-commerce",
      createdAt: "2025-01-19T21:46:29.949Z",
      updatedAt: "2025-01-19T21:46:29.949Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "لعبة تخمين الكلمة",
        en: "Guess The Word Game",
      },
      projectDescription: {
        ar: "لعبة تخمين الكلمة هي موقع ويب ممتع وتفاعلي حيث يقوم اللاعبون بحل ألغاز الكلمات والتحديات.",
        en: "Guess the Word Game is a fun and interactive website where players solve word puzzles and challenges.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737323344/kctanr7p9vur4vzg53zp.png",
      category: {
        ar: "جافا سكريبت",
        en: "javascript",
      },
      _id: "678d7351b2e400df0cb5f278",
      projectURL: "https://guess-the-word-neon-two.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/GuessTheWord",
      createdAt: "2025-01-19T21:49:05.028Z",
      updatedAt: "2025-01-19T21:49:05.028Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع كودزوكا",
        en: "Kudzoka Website",
      },
      projectDescription: {
        ar: "كودزوكا هي منصة توصيل تضمن نقل البضائع والطرود بشكل سريع وموثوق وآمن.",
        en: "Kudzoka is a delivery platform that ensures fast, reliable, and secure transport of goods and packages.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737323417/l8qcbeijomlt2j2ib3mg.png",
      category: {
        ar: "html & css",
        en: "html & css",
      },
      _id: "678d7399b2e400df0cb5f27a",
      projectURL: "https://kudzokawebsite.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/KudzokaWebsite",
      createdAt: "2025-01-19T21:50:17.744Z",
      updatedAt: "2025-01-19T21:50:17.744Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "موقع كرياتيفو",
        en: "Criativo Website",
      },
      projectDescription: {
        ar: "كرياتيفو هو موقع ويب لوكالة إبداعية ديناميكية تقدم تصميمًا مبتكرًا وحلول العلامات التجارية والتسويق.",
        en: "Criativo is a dynamic creative agency website offering innovative design, branding, and marketing solutions.",
      },
      projectImage:
        "https://res.cloudinary.com/dvt8gcjej/image/upload/v1737323495/aeilebarn1e2mqaeplzi.png",
      category: {
        ar: "html & css",
        en: "html & css",
      },
      _id: "678d73e7b2e400df0cb5f27c",
      projectURL: "https://criativitio-portofolio.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/CriativoWebsite",
      createdAt: "2025-01-19T21:51:35.587Z",
      updatedAt: "2025-01-19T21:51:35.587Z",
      technologies: "hello world",
    },
    {
      projectLang: {
        ar: "ar",
        en: "en",
      },
      projectTitle: {
        ar: "بورتفوليو بتحكم في التصميم",
        en: "Portfolio with control in design",
      },
      projectDescription: {
        ar: "قالب بورتفوليو أنيق وعصري لعرض الأعمال والمهارات بشكل احترافي..",
        en: "A sleek and modern portfolio template for showcasing work and skills professionally.",
      },
      projectImage:
        "https://66b85c98712ea1fb5dd763f2--friendly-bonbon-d2fb73.netlify.app/images/Portofolio%20Templet.WebP",
      category: {
        ar: "html & css",
        en: "html & css",
      },
      _id: "678d73e7b2e400df0cb5f27c",
      projectURL: "https://portofolio-templet.vercel.app/",
      projectGithubURL: "https://github.com/YousiefSameh/CriativoWebsite",
      createdAt: "2025-01-19T21:51:35.587Z",
      updatedAt: "2025-01-19T21:51:35.587Z",
      technologies: "hello world",
    },
  ],
  loading: "idle",
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
