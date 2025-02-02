import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface useHeaderProps {
  darkMood: boolean;
  setDarkMood: React.Dispatch<React.SetStateAction<boolean>>;
}

const useHeader = ({darkMood, setDarkMood}: useHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("header");

  const toggleDarkMode = () => {
    setDarkMood(!darkMood);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = previousScrollY.current;
    previousScrollY.current = latest;
    if (previous < latest && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // تغيير اللغة عند اختيار لغة جديدة
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    if (language === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };
  return {t, i18n, toggleDarkMode, toggleMenu, isMenuOpen, hidden, changeLanguage}
}

export default useHeader