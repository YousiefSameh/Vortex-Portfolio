import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { IServices } from "@customTypes/services.types";
import actAddService from "@store/services/act/actAddService";

const useAddServices = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<IServices>({
    title: {
      ar: "",
      en: "",
    },
    description: {
      ar: "",
      en: "",
    },
    image: { url: "" },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name !== "_id") {
      if (name.includes(".")) {
        const [parentKey, childKey] = name.split(".");
        setFormData((prevData) => ({
          ...prevData,
          [parentKey]: {
            ...(prevData[parentKey as keyof IServices] as object || {}),
            [childKey]: value,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceData = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof IServices];

      if (typeof value === "object" && !(value instanceof File)) {
        Object.keys(value).forEach((subKey) => {
          serviceData.append(`${key}.${subKey}`, value[subKey as keyof typeof value]);
        });
      } else if (value instanceof File) {
        serviceData.append(key, value);
      } else {
        serviceData.append(key, value as string);
      }
    });

    dispatch(actAddService(serviceData));

    setFormData({
      title: {
        ar: "",
        en: "",
      },
      description: {
        ar: "",
        en: "",
      },
      image: { url: "" },
    });
  };

  return { formData, handleInputChange, handleFileChange, handleSubmit };
};

export default useAddServices;
