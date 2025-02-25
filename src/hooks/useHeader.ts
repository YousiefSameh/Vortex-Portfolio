import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import API from "@services/api.services";

interface useHeaderProps {
  darkMood: boolean;
  setDarkMood: React.Dispatch<React.SetStateAction<boolean>>;
}

const useHeader = ({ darkMood, setDarkMood }: useHeaderProps) => {
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

  const changeLanguage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    try {
      await API.get(`/lang/change-lang/${language}`);
    } catch (error) {
      console.error("Error changing language on backend:", error);
    }
    i18n.changeLanguage(language);
    if (language === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };

  return { t, i18n, toggleDarkMode, toggleMenu, isMenuOpen, hidden, changeLanguage };
};

export default useHeader;