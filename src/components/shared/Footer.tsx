import Logo from "@assets/logo.webp";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--dark-color)]">
      <div className="container mx-auto w-[90%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-6 gap-12">
        <div className="col">
          <div>
            <div className="flex items-center -mr-4">
              <img src={Logo} alt="vortex Logo" width={"60px"} height={"60px"} />
              <h5 className="text-2xl font-bold text-white">
                فورتكس للبرمجيات
              </h5>
            </div>
            <p className="text-white text-sm">
              شركتنا واحدة من أفضل الشركات الرائدة في مجال تطوير وتصميم المواقع
              الإلكترونية في مصر والعالم العربي.
            </p>
          </div>
          <div className="social-media flex items-center gap-8 mt-5">
            <a
              href="#"
              className="text-white text-2xl hover:scale-105 hover:text-[var(--main-color)] transition-all"
              aria-label="social media link"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:scale-105 hover:text-[var(--main-color)] transition-all"
              aria-label="social media link"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:scale-105 hover:text-[var(--main-color)] transition-all"
              aria-label="social media link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="col text-white">
          <h4 className="text-xl font-bold mb-3">روابط سريعة</h4>
          <ul className="flex flex-col gap-3">
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="#"
                className="hover:text-[var(--main-color)] transition-all"
              >
                الرئيسية
              </a>
            </li>
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="#"
                className="hover:text-[var(--main-color)] transition-all"
              >
                من نحن
              </a>
            </li>
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="#"
                className="hover:text-[var(--main-color)] transition-all"
              >
                خدماتنا
              </a>
            </li>
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="#"
                className="hover:text-[var(--main-color)] transition-all"
              >
                أعمالنا
              </a>
            </li>
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="#"
                className="hover:text-[var(--main-color)] transition-all"
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        <div className="col text-white">
          <h4 className="text-xl font-bold mb-3">تواصل عمنا عبر:</h4>
          <ul className="flex flex-col gap-3">
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="#"
                className="hover:text-[var(--main-color)] transition-all flex items-center gap-2"
              >
                <FaPhone /> +(20) 123-456-789
              </a>
            </li>
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="mailto:yousief.sameh@outlook.com"
                className="hover:text-[var(--main-color)] transition-all flex items-center gap-2"
              >
                <FaMailBulk /> yousief.sameh@outlook.com
              </a>
            </li>
            <li
              className="
            hover:-translate-x-1 transition-all"
            >
              <a
                href="mailto:anaswail246@gmail.com"
                className="hover:text-[var(--main-color)] transition-all flex items-center gap-2"
              >
                <FaMailBulk /> anaswail246@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights">
        <div className="container mt-6 mx-auto w-[90%] border-t-2 border-[var(--main-color)] text-white text-center py-4 transition-all">
          &copy; 2025{" "}
          <span className="text-[var(--main-color)] font-bold">vortex</span>. كل
          الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

export default Footer;
