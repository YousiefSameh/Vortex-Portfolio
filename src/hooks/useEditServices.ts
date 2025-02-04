import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actEditService from "@store/services/act/actEditService";
import { IServices } from "@customTypes/index";
import { useParams } from "react-router-dom";

const useEditServices = () => {
  const dispatch = useAppDispatch();

  const { serviceId } = useParams<{ serviceId: string }>();
  const service = useAppSelector((state) =>
    state.services.services.find((service) => service._id === serviceId)
  );

  const [formData, setFormData] = useState<IServices>({
    _id: service ? service._id : "0",
    image: {
      url: (typeof service?.image === 'object' && service?.image !== null && 'url' in service.image) ? service.image.url : ""
    },
    title: {
      ar: service?.title?.ar || "",
      en: service?.title?.en || "",
    },
    description: {
      ar: service?.description?.ar || "",
      en: service?.description?.en || "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actEditService(formData));
  };

  return { formData, handleChange, handleSubmit };
}

export default useEditServices;
