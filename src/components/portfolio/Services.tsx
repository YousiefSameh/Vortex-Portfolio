import Heading from "@components/shared/Heading";
import { IServices } from "@customTypes/services.types";
import useAppTranslate from "@hooks/useAppTranslate";
import { getImageUrl } from "@utils/getImageUrl";
import { motion } from "framer-motion";
import { memo } from "react";

const Services = memo(({ services }: { services: IServices[] }) => {
  const { t } = useAppTranslate({
    path: "services"
  });
  return (
    <section className="services py-12 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Heading
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
      </motion.div>
      <div className="container w-[90%] mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {services.map((service) => (
          <div key={service._id} className="card relative before:rounded-2xl bg-[#fff] dark:bg-[#222] py-4 px-4  rounded-2xl border-t-[6px] border-main-color hover:scale-105 transition-all cursor-pointer">
            <img src={getImageUrl(service.image)} alt={service.title} />

            <h3 className="text-3xl font-bold dark:text-white my-3">
              { service.title }
            </h3>
            <p className="dark:text-white">
              { service.description }
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Services;