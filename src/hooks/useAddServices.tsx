import { useState } from "react";
import { useDispatch } from "react-redux";
import { addService } from "@store/services/services.slice";
import { MdWeb, MdOutlineBuildCircle, MdDesignServices, MdOutlineDevicesOther } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";

const useAddServices = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    icon: <MdWeb className="text-5xl text-main-color my-2" />,
    titleAr: "",
    titleEn: "",
    descriptionAr: "",
    descriptionEn: "",
  });

  const icons = [
    { name: "MdWeb", icon: <MdWeb className="text-5xl text-main-color my-2" /> },
    { name: "MdOutlineBuildCircle", icon: <MdOutlineBuildCircle className="text-5xl text-main-color my-2" /> },
    { name: "FiSmartphone", icon: <FiSmartphone className="text-5xl text-main-color my-2" /> },
    { name: "TbWorld", icon: <TbWorld className="text-5xl text-main-color my-2" /> },
    { name: "MdDesignServices", icon: <MdDesignServices className="text-5xl text-main-color my-2" /> },
    { name: "MdOutlineDevicesOther", icon: <MdOutlineDevicesOther className="text-5xl text-main-color my-2" /> },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIconChange = (icon: JSX.Element) => {
    setFormData((prevFormData) => ({ ...prevFormData, icon }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addService(formData));
    setFormData({
      icon: <MdWeb className="text-5xl text-main-color my-2" />,
      titleAr: "",
      titleEn: "",
      descriptionAr: "",
      descriptionEn: "",
    });
  };

  return { icons, formData, handleChange, handleIconChange, handleSubmit }
}

export default useAddServices