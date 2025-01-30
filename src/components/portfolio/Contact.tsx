import Heading from "@components/shared/Heading";
import useContact from "@hooks/useContact";
import { motion } from "framer-motion";
import { memo } from "react";
import { useTranslation } from "react-i18next"; // استيراد مكتبة الترجمة

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

const Contact = memo(() => {
  const { isSubmitting, isSubmitted, error, handleSubmit } = useContact();
  const { t } = useTranslation("contact"); // استخدام الترجمة

  return (
    <section className="contact py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading
          title={t("contact.title")} // استخدام الترجمة للعنوان
          subtitle={t("contact.subtitle")} // استخدام الترجمة للوصف
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
            className="text-xl font-bold dark:text-white mb-4 block"
          >
            {t("contact.labels.fullname")} {/* استخدام الترجمة للتسمية */}
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder={t("contact.placeholders.fullname")} // استخدام الترجمة للنص البديل
            autoComplete="off"
            className="input"
            required
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.div className="email" variants={variants}>
          <label
            htmlFor="email"
            className="text-xl font-bold dark:text-white mb-4 block"
          >
            {t("contact.labels.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact.placeholders.email")}
            autoComplete="off"
            className="input"
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
              className="text-xl font-bold dark:text-white mb-4 block"
            >
              {t("contact.labels.whatsapp")}
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder={t("contact.placeholders.whatsapp")}
              autoComplete="off"
              className="input"
              disabled={isSubmitting}
            />
          </div>
          <div className="telephone w-full">
            <label
              htmlFor="telephone"
              className="text-xl font-bold dark:text-white mb-4 block"
            >
              {t("contact.labels.telephone")}
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder={t("contact.placeholders.telephone")}
              autoComplete="off"
              className="input"
              disabled={isSubmitting}
            />
          </div>
        </motion.div>
        <motion.div className="message" variants={variants}>
          <label
            htmlFor="message"
            className="text-xl font-bold dark:text-white mb-4 block"
          >
            {t("contact.labels.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder={t("contact.placeholders.message")}
            autoComplete="off"
            className="input"
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
          {isSubmitting
            ? t("contact.buttons.submitting")
            : t("contact.buttons.submit")}
        </motion.button>
        {isSubmitted && (
          <p className="text-green-500 text-center text-xl mt-4">
            {t("contact.messages.success")}
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center text-xl mt-4">
            {t("contact.messages.error")}
          </p>
        )}
      </motion.form>
    </section>
  );
});

export default Contact;
