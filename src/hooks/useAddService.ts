import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import actAddService from "@store/services/act/actAddService";
import { IUseAddServices } from "@customTypes/index";

const useAddServices = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<IUseAddServices>({
    title: {
      ar: "",
      en: "",
    },
    description: {
      ar: "",
      en: "",
    },
    image: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parentKey]: {
          ...(prev[parentKey as keyof IUseAddServices] as object),
          [childKey]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(actAddService(formData));

    setFormData({
      title: {
        ar: "",
        en: "",
      },
      description: {
        ar: "",
        en: "",
      },
      image: "",
    });
  };

  return { formData, handleInputChange, handleFileChange, handleSubmit };
};

export default useAddServices;