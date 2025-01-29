import { useState } from "react";
import { sendEmail } from "@services/email.services";
import Heading from "@components/shared/Heading";
import { motion } from "framer-motion";

interface FormElements extends HTMLFormControlsCollection {
  fullname: HTMLInputElement;
  email: HTMLInputElement;
  whatsapp: HTMLInputElement;
  telephone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements;
}

const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<ContactForm>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail(e.currentTarget);
      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading
          title="تواصل معنا"
          subtitle="نحن في شركة فورتكس نؤمن بأهمية التواصل الفعّال والمباشر مع عملائنا. إذا كانت لديك أي استفسارات أو كنت بحاجة إلى دعم، فريقنا جاهز للاستماع إليك وتقديم أفضل الحلول."
        />
      </motion.div>
      <motion.form
        variants={variants}
        initial="initial"
        whileInView="animate"
        onSubmit={handleSubmit}
        className="container w-[90%] mx-auto mt-8 space-y-8 overflow-x-hidden"
      >
        <motion.div className="fullname" variants={variants}>
          <label
            htmlFor="fullname"
            className="text-xl font-bold text-white mb-4 block"
          >
            الأسم بالكامل
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="أكتب الأسم الكامل هنا ..."
            autoComplete="off"
            className="w-full bg-[#dedede] :bg-[#dedede] dark:bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl dark:placeholder:text-white dark:text-white text-black placeholder:text-black outline-none font-bold rounded-2xl focus:border-white"
            required
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.div className="email" variants={variants}>
          <label
            htmlFor="email"
            className="text-xl font-bold text-white mb-4 block"
          >
            البريد الالكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="أكتب البريد الالكتروني هنا ..."
            autoComplete="off"
            className="w-full bg-[#dedede] :bg-[#dedede] :bg-[#dedede] dark:bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl dark:placeholder:text-white dark:text-white text-black placeholder:text-black outline-none font-bold rounded-2xl focus:border-white"
            required
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.div
          className="phone flex flex-col md:flex-row items-center gap-6 w-full"
          variants={variants}
        >
          <div className="whatsapp w-full">
            <label
              htmlFor="whatsapp"
              className="text-xl font-bold text-white mb-4 block"
            >
              رقم الواتساب
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="أكتب رقم الهاتف هنا ..."
              autoComplete="off"
              className="w-full bg-[#dedede] :bg-[#dedede] :bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl dark:placeholder:text-white dark:text-white text-black placeholder:text-black outline-none font-bold rounded-2xl focus:border-white"
              disabled={isSubmitting}
            />
          </div>
          <div className="telephone w-full">
            <label
              htmlFor="telephone"
              className="text-xl font-bold text-white mb-4 block"
            >
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="أكتب رقم الهاتف هنا ..."
              autoComplete="off"
              className="w-full bg-[#dedede] :bg-[#dedede] :bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl dark:placeholder:text-white dark:text-white text-black placeholder:text-black outline-none font-bold rounded-2xl focus:border-white"
              disabled={isSubmitting}
            />
          </div>
        </motion.div>
        <motion.div className="message" variants={variants}>
          <label
            htmlFor="message"
            className="text-xl font-bold text-white mb-4 block"
          >
            رسالتك
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder="أكتب رسالتك هنا ..."
            autoComplete="off"
            className="w-full bg-[#dedede] :bg-[#dedede] dark:bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl dark:placeholder:text-white dark:text-white text-black placeholder:text-black outline-none font-bold rounded-2xl focus:border-white"
            required
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.button
          variants={variants}
          type="submit"
          className="primary-btn w-full font-bold"
          disabled={isSubmitting}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {isSubmitting ? "جاري الإرسال..." : "أرسال"}
        </motion.button>
        {isSubmitted && (
          <p className="text-green-500 text-center text-xl mt-4">
            تم إرسال الرسالة بنجاح!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center text-xl mt-4">{error}</p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
