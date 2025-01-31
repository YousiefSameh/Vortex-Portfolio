import { createSlice } from "@reduxjs/toolkit";
import { IServices, TLoading } from "@customTypes/index";
import IconWrapper from "@components/portfolio/IconWrapper";
import { lazy } from "react";

const MdWeb = lazy(() => import("react-icons/md").then(module => ({ default: module.MdWeb })));
const MdOutlineBuildCircle = lazy(() => import("react-icons/md").then(module => ({ default: module.MdOutlineBuildCircle })));
const TbWorld = lazy(() => import("react-icons/tb").then(module => ({ default: module.TbWorld })));
const FiSmartphone = lazy(() => import("react-icons/fi").then(module => ({ default: module.FiSmartphone })));
const MdDesignServices = lazy(() => import("react-icons/md").then(module => ({ default: module.MdDesignServices })));
const MdOutlineDevicesOther = lazy(() => import("react-icons/md").then(module => ({ default: module.MdOutlineDevicesOther })));

interface ServicesState {
	services: IServices[];
	loading: TLoading;
	error: string | null;
}

const initialState: ServicesState = {
	services: [
		{
			id: 0,
			icon: <IconWrapper><MdWeb className="text-5xl text-[var(--main-color)] my-2" /></IconWrapper>,
			title: "تصميم المواقع الإلكترونية",
			description:
				"موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة",
		},
		{
			id: 1,
			icon: (
				<IconWrapper><MdOutlineBuildCircle className="text-5xl text-[var(--main-color)] my-2" /></IconWrapper>
			),
			title: "بناء مواقع ذات منطق برمجي",
			description:
				"إذا كنت بحاجة إلى موقع ديناميكي يتفاعل مع المستخدمين ويعتمد على منطق برمجي متقدم، فنحن نقدم حلولًا برمجية متكاملة لضمان أداء متميز وتجربة مستخدم سلسة.",
		},
		{
			id: 2,
			icon: <IconWrapper><FiSmartphone className="text-5xl text-[var(--main-color)] my-2" /></IconWrapper>,
			title: "موقع بتصميم متجاوب",
			description:
				"نضمن لك تصميماً متجاوباً يعمل بسلاسة على جميع الأجهزة، مما يوفر تجربة مستخدم مثالية سواء على الهواتف الذكية، الأجهزة اللوحية، أو شاشات الكمبيوتر..",
		},
		{
			id: 3,
			icon: <IconWrapper><TbWorld className="text-5xl text-[var(--main-color)] my-2" /></IconWrapper>,
			title: "نبني موقعك من التصميم للدومين",
			description:
				"نقدم لك حلاً متكاملاً يشمل تصميم الموقع، تطويره، وربطه بالدومين، لنضمن لك حضوراً رقمياً قوياً يعكس هويتك بأفضل صورة...",
		},
		{
			id: 4,
			icon: (
				<IconWrapper><MdDesignServices className="text-5xl text-[var(--main-color)] my-2" /></IconWrapper>
			),
			title: "مساعدتك في التخطيط لموقعك",
			description:
				"نساعدك في وضع خطة واضحة لموقعك الإلكتروني، بدءًا من تحديد الأهداف والمتطلبات وصولًا إلى التصميم والتنفيذ، لضمان نجاح مشروعك الرقمي....",
		},
		{
			id: 5,
			icon: (
				<IconWrapper><MdOutlineDevicesOther className="text-5xl text-[var(--main-color)] my-2" /></IconWrapper>
			),
			title: "نستطيع تنفيذ جميع أنواع المواقع",
			description:
				"نقدم لك حلولًا مخصصة لتنفيذ جميع أنواع المواقع الإلكترونية، سواء كانت مواقع شخصية، تجارية، أو حتى معقدة بتقنيات متقدمة، مع ضمان الجودة والأداء المتميز.",
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
