import { createSlice } from "@reduxjs/toolkit";
import { IServices, TLoading } from "@customTypes/index";
import IconWrapper from "@components/portfolio/IconWrapper";
import { lazy } from "react";

const MdWeb = lazy(() =>
	import("react-icons/md").then((module) => ({ default: module.MdWeb }))
);
const MdOutlineBuildCircle = lazy(() =>
	import("react-icons/md").then((module) => ({
		default: module.MdOutlineBuildCircle,
	}))
);
const TbWorld = lazy(() =>
	import("react-icons/tb").then((module) => ({ default: module.TbWorld }))
);
const FiSmartphone = lazy(() =>
	import("react-icons/fi").then((module) => ({ default: module.FiSmartphone }))
);
const MdDesignServices = lazy(() =>
	import("react-icons/md").then((module) => ({
		default: module.MdDesignServices,
	}))
);
const MdOutlineDevicesOther = lazy(() =>
	import("react-icons/md").then((module) => ({
		default: module.MdOutlineDevicesOther,
	}))
);

interface ServicesState {
	services: IServices[];
	loading: TLoading;
	error: string | null;
}

const initialState: ServicesState = {
	services: [
		{
			id: 0,
			icon: (
				<IconWrapper>
					<MdWeb className="text-5xl text-main-color my-2" />
				</IconWrapper>
			),
			titleAr: "تصميم المواقع الإلكترونية",
			titleEn: "Website Design",
			descriptionAr:
				"موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة",
			descriptionEn:
				"Your website is the ideal medium to showcase your ideas, products, and tell your story. To achieve this, its design must be attractive and user-friendly to provide an exceptional experience.",
		},
		{
			id: 1,
			icon: (
				<IconWrapper>
					<MdOutlineBuildCircle className="text-5xl text-main-color my-2" />
				</IconWrapper>
			),
			titleAr: "بناء مواقع ذات منطق برمجي",
			titleEn: "Building Websites with Advanced Logic",
			descriptionAr:
				"إذا كنت بحاجة إلى موقع ديناميكي يتفاعل مع المستخدمين ويعتمد على منطق برمجي متقدم، فنحن نقدم حلولًا برمجية متكاملة لضمان أداء متميز وتجربة مستخدم سلسة.",
			descriptionEn:
				"If you need a dynamic website that interacts with users and relies on advanced programming logic, we provide integrated software solutions to ensure outstanding performance and a seamless user experience.",
		},
		{
			id: 2,
			icon: (
				<IconWrapper>
					<FiSmartphone className="text-5xl text-main-color my-2" />
				</IconWrapper>
			),
			titleAr: "موقع بتصميم متجاوب",
			titleEn: "Responsive Website Design",
			descriptionAr:
				"نضمن لك تصميماً متجاوباً يعمل بسلاسة على جميع الأجهزة، مما يوفر تجربة مستخدم مثالية سواء على الهواتف الذكية، الأجهزة اللوحية، أو شاشات الكمبيوتر.",
			descriptionEn:
				"We guarantee a responsive design that works seamlessly on all devices, providing an optimal user experience whether on smartphones, tablets, or computer screens.",
		},
		{
			id: 3,
			icon: (
				<IconWrapper>
					<TbWorld className="text-5xl text-main-color my-2" />
				</IconWrapper>
			),
			titleAr: "نبني موقعك من التصميم للدومين",
			titleEn: "From Design to Domain: We Build Your Website",
			descriptionAr:
				"نقدم لك حلاً متكاملاً يشمل تصميم الموقع، تطويره، وربطه بالدومين، لنضمن لك حضوراً رقمياً قوياً يعكس هويتك بأفضل صورة.",
			descriptionEn:
				"We offer a comprehensive solution that includes website design, development, and domain integration to ensure a strong digital presence that reflects your identity in the best way.",
		},
		{
			id: 4,
			icon: (
				<IconWrapper>
					<MdDesignServices className="text-5xl text-main-color my-2" />
				</IconWrapper>
			),
			titleAr: "مساعدتك في التخطيط لموقعك",
			titleEn: "Helping You Plan Your Website",
			descriptionAr:
				"نساعدك في وضع خطة واضحة لموقعك الإلكتروني، بدءًا من تحديد الأهداف والمتطلبات وصولًا إلى التصميم والتنفيذ، لضمان نجاح مشروعك الرقمي.",
			descriptionEn:
				"We help you develop a clear plan for your website, starting from defining goals and requirements to design and implementation, ensuring the success of your digital project.",
		},
		{
			id: 5,
			icon: (
				<IconWrapper>
					<MdOutlineDevicesOther className="text-5xl text-main-color my-2" />
				</IconWrapper>
			),
			titleAr: "نستطيع تنفيذ جميع أنواع المواقع",
			titleEn: "We Can Build All Types of Websites",
			descriptionAr:
				"نقدم لك حلولًا مخصصة لتنفيذ جميع أنواع المواقع الإلكترونية، سواء كانت مواقع شخصية، تجارية، أو حتى معقدة بتقنيات متقدمة، مع ضمان الجودة والأداء المتميز.",
			descriptionEn:
				"We offer tailored solutions to build all types of websites, whether personal, commercial, or even complex ones with advanced technologies, ensuring quality and outstanding performance.",
		},
	],
	loading: "idle",
	error: null,
};

const servicesSlice = createSlice({
	name: "services",
	initialState,
	reducers: {},
});

export default servicesSlice.reducer;
