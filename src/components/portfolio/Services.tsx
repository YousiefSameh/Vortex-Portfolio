import Heading from "@components/shared/Heading";
import { useAppSelector } from "@store/hooks";
import { motion } from "framer-motion";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const Services = memo(() => {
  const { services } = useAppSelector((state) => state.services);
  const { t, i18n } = useTranslation("services");

  return (
    <section id="services" className="services py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
      </motion.div>
      <div className="container w-[90%] mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="card relative before:rounded-2xl bg-[#fff] dark:bg-[#222] py-4 px-4 rounded-2xl border-t-[6px] border-main-color hover:scale-105 transition-all cursor-pointer"
          >
            {service.icon}

            <h3 className="text-2xl font-bold dark:text-white my-3">
              {i18n.language === "ar" ? service.titleAr : service.titleEn}{" "}
            </h3>
            <p className="dark:text-white py-2">
              {i18n.language === "ar"
                ? service.descriptionAr
                : service.descriptionEn}{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Services;
