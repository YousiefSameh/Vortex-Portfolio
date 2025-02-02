import about from "@assets/about.webp";
import Heading from "@components/shared/Heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="services py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading title="من نحن" subtitle="" />
      </motion.div>
      <div className="content flex items-center justify-center w-full gap-10 ">
        <motion.div
          className="img-content w-1/2 flex justify-center items-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <img src={about} alt="about us" className="w-[80%]" />
        </motion.div>
        <motion.div
          className="text-content w-[60%]"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="title text-main-color text-5xl font-bold ">
            لماذا vortex ؟
          </h1>
          <p className="description text-black font-semibold dark:font-normal dark:text-white w-[75%] md:text-lg text-sm mt-2 ">
            نحن فريق متكامل من المطورين والمصممين، نقدم خدمات متكاملة لإنشاء
            مواقع ويب احترافية تلبي احتياجات عملك وتساعدك على تحقيق أهدافك.
            بدءًا من التصميم الجذاب باستخدام Figma و Adobe XD، وصولًا إلى تطوير
            مواقع متكاملة بأحدث التقنيات مثل HTML, CSS, JavaScript, TypeScript,
            React, TailwindCSS, Bootstrap للواجهات الأمامية، و Node.js, Express,
            Nest.js, MongoDB للواجهات الخلفية. نضمن لك موقعًا يجسد رؤيتك، ويعكس
            هويتك، ويجذب جمهورك المستهدف بسلاسة واحترافية. انضم إلينا اليوم،
            ودعنا نكون شريكك في رحلتك الرقمية نحو النجاح!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
