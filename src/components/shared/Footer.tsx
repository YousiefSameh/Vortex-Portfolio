import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // استيراد useTranslation

const Footer = () => {
  const { t } = useTranslation("footer"); // استخدام useTranslation

  return (
    <footer className="bg-transparent">
      <div className="container mx-auto w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-6 gap-12">
        <div className="col">
          <div>
            <div className="flex items-center">
              <h5 className="text-2xl font-bold dark:text-white text-black mb-2">
                {t("footer.companyName")}
              </h5>
            </div>
            <p className="dark:text-white text-black text-sm">
              {t("footer.companyDescription")}
            </p>
          </div>
          <div className="social-media flex items-center gap-8 mt-5">
            <a
              href="#"
              className="dark:text-white text-black text-2xl hover:scale-105 hover:text-main-color transition-all"
              aria-label="social media link"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="dark:text-white text-black text-2xl hover:scale-105 hover:text-main-color transition-all"
              aria-label="social media link"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="dark:text-white text-black text-2xl hover:scale-105 hover:text-main-color transition-all"
              aria-label="social media link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="col dark:text-white text-black">
          <h4 className="text-xl font-bold mb-3">
            {t("footer.quickLinks")}
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="hover:-translate-x-1 transition-all">
              <a href="#" className="hover:text-main-color transition-all">
                {t("footer.home")}
              </a>
            </li>
            <li className="hover:-translate-x-1 transition-all">
              <a href="#" className="hover:text-main-color transition-all">
                {t("footer.about")}
              </a>
            </li>
            <li className="hover:-translate-x-1 transition-all">
              <a href="#" className="hover:text-main-color transition-all">
                {t("footer.services")}
              </a>
            </li>
            <li className="hover:-translate-x-1 transition-all">
              <a href="#" className="hover:text-main-color transition-all">
                {t("footer.projects")}
              </a>
            </li>
            <li className="hover:-translate-x-1 transition-all">
              <a href="#" className="hover:text-main-color transition-all">
                {t("footer.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="col dark:text-white text-black">
          <h4 className="text-xl font-bold mb-3">
            {t("footer.contactUs")}
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="hover:-translate-x-1 transition-all">
              <a
                href="#"
                className="hover:text-main-color transition-all flex items-center gap-2"
              >
                <FaPhone /> {t("footer.phone")}
              </a>
            </li>
            <li className="hover:-translate-x-1 transition-all">
              <a
                href="mailto:yousief.sameh@outlook.com"
                className="hover:text-main-color transition-all flex items-center gap-2"
              >
                <FaMailBulk /> {t("footer.email1")}
              </a>
            </li>
            <li className="hover:-translate-x-1 transition-all">
              <a
                href="mailto:anaswail246@gmail.com"
                className="hover:text-main-color transition-all flex items-center gap-2"
              >
                <FaMailBulk /> {t("footer.email2")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights">
        <div className="container mt-6 mx-auto w-[90%] border-t-2 border-main-color dark:text-white text-black text-center py-4 transition-all">
          <span
            dangerouslySetInnerHTML={{
              __html: t("footer.copyright"),
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;