import { createSlice } from "@reduxjs/toolkit";
import { IServices, TLoading } from "@customTypes/index";

interface ServicesState {
	services: IServices[];
	loading: TLoading;
	error: string | null;
}

const initialState: ServicesState = {
	services: [
		{
			id: 0,
			icon: "https://placehold.co/600x400",
			title: "تصميم المواقع الإلكترونية",
			description:
				"موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة",
		},
		{
			id: 1,
			icon: "https://placehold.co/600x400",
			title: "بناء مواقع ذات منطق برمجي",
			description:
				"إذا كنت بحاجة إلى موقع ديناميكي يتفاعل مع المستخدمين ويعتمد على منطق برمجي متقدم، فنحن نقدم حلولًا برمجية متكاملة لضمان أداء متميز وتجربة مستخدم سلسة.",
		},
		{
			id: 2,
			icon: "https://placehold.co/600x400",
			title: "موقع بتصميم متجاوب",
			description:
				"نضمن لك تصميماً متجاوباً يعمل بسلاسة على جميع الأجهزة، مما يوفر تجربة مستخدم مثالية سواء على الهواتف الذكية، الأجهزة اللوحية، أو شاشات الكمبيوتر..",
		},
		{
			id: 3,
			icon: "https://placehold.co/600x400",
			title: "نبني موقعك من التصميم للدومين",
			description:
				"نقدم لك حلاً متكاملاً يشمل تصميم الموقع، تطويره، وربطه بالدومين، لنضمن لك حضوراً رقمياً قوياً يعكس هويتك بأفضل صورة...",
		},
		{
			id: 4,
			icon: "https://placehold.co/600x400",
			title: "مساعدتك في التخطيط لموقعك",
			description:
				"نساعدك في وضع خطة واضحة لموقعك الإلكتروني، بدءًا من تحديد الأهداف والمتطلبات وصولًا إلى التصميم والتنفيذ، لضمان نجاح مشروعك الرقمي....",
		},
		{
			id: 5,
			icon: "https://placehold.co/600x400",
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