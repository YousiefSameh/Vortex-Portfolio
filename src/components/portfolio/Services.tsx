import Heading from "@components/shared/Heading";
import { motion } from "framer-motion";
import allWebsites from "@assets/all websites.webp";
import portfolio from "@assets/portfolio.webp";
import responsiveDesign from "@assets/Responsive design.webp";
import webHosting from "@assets/web hosting.webp";
import webBuilding from "@assets/website building.webp";
import webDesign from "@assets/website design.webp";

interface servicesType {
  id: number;
  img: string;
  title: string;
  description: string;
}

const servicesElement: servicesType[] = [
  {
    id: 0,
    img: webDesign,
    title: "تصميم المواقع الإلكترونية",
    description:
      "موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة",
  },
  {
    id: 1,
    img: webBuilding,
    title: "بناء مواقع ذات منطق برمجي",
    description:
      "إذا كنت بحاجة إلى موقع ديناميكي يتفاعل مع المستخدمين ويعتمد على منطق برمجي متقدم، فنحن نقدم حلولًا برمجية متكاملة لضمان أداء متميز وتجربة مستخدم سلسة.",
  },
  {
    id: 2,
    img: responsiveDesign,
    title: "موقع بتصميم متجاوب",
    description:
      "نضمن لك تصميماً متجاوباً يعمل بسلاسة على جميع الأجهزة، مما يوفر تجربة مستخدم مثالية سواء على الهواتف الذكية، الأجهزة اللوحية، أو شاشات الكمبيوتر..",
  },
  {
    id: 3,
    img: webHosting,
    title: "نبني موقعك من التصميم للدومين",
    description:
      "نقدم لك حلاً متكاملاً يشمل تصميم الموقع، تطويره، وربطه بالدومين، لنضمن لك حضوراً رقمياً قوياً يعكس هويتك بأفضل صورة...",
  },
  {
    id: 4,
    img: portfolio,
    title: "مساعدتك في التخطيط لموقعك",
    description:
      "نساعدك في وضع خطة واضحة لموقعك الإلكتروني، بدءًا من تحديد الأهداف والمتطلبات وصولًا إلى التصميم والتنفيذ، لضمان نجاح مشروعك الرقمي....",
  },
  {
    id: 5,
    img: allWebsites,
    title: "نستطيع تنفيذ جميع أنواع المواقع",
    description:
      "نقدم لك حلولًا مخصصة لتنفيذ جميع أنواع المواقع الإلكترونية، سواء كانت مواقع شخصية، تجارية، أو حتى معقدة بتقنيات متقدمة، مع ضمان الجودة والأداء المتميز.",
  },
];

const Services = () => {
  return (
    <section className="services py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading
          title="خدماتنا"
          subtitle="من خلال حلول برمجية وتصميمات إبداعية، نقدم خدمات تطوير المواقع، تصميم المواقع، والدعم الفني، لمساعدتكم على النمو والتفوق في مجالاتكم."
        />
      </motion.div>
      <div className="container w-[90%] mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {servicesElement.map((service) => (
          <div className="card relative before:rounded-2xl bg-[#222] py-4 px-4  rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer">
            <img
              src={service.img}
              alt={service.title}
              className="w-[100px] h-[100px] my-5"
            />

            <h5 className="text-2xl font-bold text-white my-3">
              {service.title}{" "}
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
