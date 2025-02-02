import Heading from "@components/shared/Heading";
import useContact from "@hooks/useContact";
import { motion } from "framer-motion";
import { memo } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="contact py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading title={t("contact.title")} subtitle={t("contact.subtitle")} />
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
            {t("contact.fullName")}
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder={t("contact.fullNamePlaceholder")}
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
            {t("contact.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
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
              {t("contact.whatsapp")}
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder={t("contact.phonePlaceholder")}
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
              {t("contact.phone")}
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder={t("contact.phonePlaceholder")}
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
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder={t("contact.messagePlaceholder")}
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
          {isSubmitting ? t("contact.sending") : t("contact.send")}{" "}
        </motion.button>
        {isSubmitted && (
          <p className="text-green-500 text-center text-xl mt-4">
            {t("contact.successMessage")}
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center text-xl mt-4">{error}</p>
        )}
      </motion.form>
    </section>
  );
});

export default Contact;
