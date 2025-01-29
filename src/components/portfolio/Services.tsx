import Heading from "@components/shared/Heading";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    rotate: "180deg",
    scale: 0,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {
  return (
    <section className="services py-12">
      <div className="container mx-auto">
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
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container w-[90%] mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12"
        >
          <motion.div
            variants={variants}
            className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer"
          >
            <DotLottieReact
              src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
              className="w-[130px] h-[130px]"
              width={"130px"}
              height={"130px"}
              loop
              autoplay
            />
            <h5 className="text-2xl font-bold text-white -mt-4">
              تصميم المواقع الإلكترونية
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer"
          >
            <DotLottieReact
              src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
              className="w-[130px] h-[130px]"
              width={"130px"}
              height={"130px"}
              loop
              autoplay
            />
            <h5 className="text-2xl font-bold text-white -mt-4">
              تصميم المواقع الإلكترونية
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer"
          >
            <DotLottieReact
              src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
              className="w-[130px] h-[130px]"
              width={"130px"}
              height={"130px"}
              loop
              autoplay
            />
            <h5 className="text-2xl font-bold text-white -mt-4">
              تصميم المواقع الإلكترونية
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer"
          >
            <DotLottieReact
              src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
              className="w-[130px] h-[130px]"
              width={"130px"}
              height={"130px"}
              loop
              autoplay
            />
            <h5 className="text-2xl font-bold text-white -mt-4">
              تصميم المواقع الإلكترونية
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer"
          >
            <DotLottieReact
              src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
              className="w-[130px] h-[130px]"
              width={"130px"}
              height={"130px"}
              loop
              autoplay
            />
            <h5 className="text-2xl font-bold text-white -mt-4">
              تصميم المواقع الإلكترونية
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer"
          >
            <DotLottieReact
              src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
              className="w-[130px] h-[130px]"
              width={"130px"}
              height={"130px"}
              loop
              autoplay
            />
            <h5 className="text-2xl font-bold text-white -mt-4">
              تصميم المواقع الإلكترونية
            </h5>
            <p className="text-white py-2">
              موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث
              عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير
              تجربة مميزة
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
