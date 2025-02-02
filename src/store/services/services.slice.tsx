import { createSlice } from "@reduxjs/toolkit";
import { IServices, TLoading } from "@customTypes/index";
import { MdWeb, MdOutlineBuildCircle, MdDesignServices, MdOutlineDevicesOther } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";

interface ServicesState {
	services: IServices[];
	loading: TLoading;
	error: string | null;
}

const initialState: ServicesState = {
	services: [
		{
			id: "0",
			icon: <MdWeb className="text-5xl text-main-color my-2" />,
			titleAr: "تصميم المواقع الإلكترونية",
			titleEn: "Website design",
			descriptionAr:
				"موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة",
			descriptionEn:
				"Your website is the ideal medium to showcase your ideas, products, and tell your story. To achieve this, its design must be attractive and user-friendly to provide an exceptional experience.",
		},
		{
			id: "1",
			icon: <MdOutlineBuildCircle className="text-5xl text-main-color my-2" />,
			titleAr: "بناء مواقع ذات منطق برمجي",
			titleEn: "Build websites with advanced logic",
			descriptionAr:
				"إذا كنت بحاجة إلى موقع ديناميكي يتفاعل مع المستخدمين ويعتمد على منطق برمجي متقدم، فنحن نقدم حلولًا برمجية متكاملة لضمان أداء متميز وتجربة مستخدم سلسة.",
			descriptionEn:
				"If you need a dynamic website that interacts with users and relies on advanced programming logic, we provide integrated software solutions to ensure outstanding performance and a seamless user experience.",
		},
		{
			id: "2",
			icon: <FiSmartphone className="text-5xl text-main-color my-2" />,
			titleAr: "موقع بتصميم متجاوب",
			titleEn: "Responsive website design",
			descriptionAr:
				"نضمن لك تصميماً متجاوباً يعمل بسلاسة على جميع الأجهزة، مما يوفر تجربة مستخدم مثالية سواء على الهواتف الذكية، الأجهزة اللوحية، أو شاشات الكمبيوتر.",
			descriptionEn:
				"We guarantee a responsive design that works seamlessly on all devices, providing an optimal user experience whether on smartphones, tablets, or computer screens.",
		},
		{
			id: "3",
			icon: <TbWorld className="text-5xl text-main-color my-2" />,
			titleAr: "نبني موقعك من التصميم للدومين",
			titleEn: "From design to domain",
			descriptionAr:
				"نقدم لك حلاً متكاملاً يشمل تصميم الموقع، تطويره، وربطه بالدومين، لنضمن لك حضوراً رقمياً قوياً يعكس هويتك بأفضل صورة.",
			descriptionEn:
				"We offer a comprehensive solution that includes website design, development, and domain integration to ensure a strong digital presence that reflects your identity in the best way.",
		},
		{
			id: "4",
			icon: <MdDesignServices className="text-5xl text-main-color my-2" />,
			titleAr: "مساعدتك في التخطيط لموقعك",
			titleEn: "Helping you plan your website",
			descriptionAr:
				"نساعدك في وضع خطة واضحة لموقعك الإلكتروني، بدءًا من تحديد الأهداف والمتطلبات وصولًا إلى التصميم والتنفيذ، لضمان نجاح مشروعك الرقمي.",
			descriptionEn:
				"We help you develop a clear plan for your website, starting from defining goals and requirements to design and implementation, ensuring the success of your digital project.",
		},
		{
			id: "5",
			icon: <MdOutlineDevicesOther className="text-5xl text-main-color my-2" />,
			titleAr: "نستطيع تنفيذ جميع أنواع المواقع",
			titleEn: "We can build all types of websites",
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
	reducers: {
		addService: (state, action) => {
			const newService = {
				id: state.services.length.toString(),
				icon: action.payload.icon,
				titleAr: action.payload.titleAr,
				titleEn: action.payload.titleEn,
				descriptionAr: action.payload.descriptionAr,
				descriptionEn: action.payload.descriptionEn,
			};
			state.services.push(newService);
		},
		deleteService: (state, action) => {
			state.services = state.services.filter(service => service.id !== action.payload.id);
		},
		editService: (state, action) => {
			const { id, icon, titleAr, titleEn, descriptionAr, descriptionEn } = action.payload;
			const existingService = state.services.find(service => service.id === id);
			if (existingService) {
				existingService.icon = icon;
				existingService.titleAr = titleAr;
				existingService.titleEn = titleEn;
				existingService.descriptionAr = descriptionAr;
				existingService.descriptionEn = descriptionEn;
			}
		},
	},
});

export const { addService, deleteService, editService } = servicesSlice.actions;
export default servicesSlice.reducer;