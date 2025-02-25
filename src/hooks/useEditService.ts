import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actEditService from "@store/services/act/actEditService";
import { IUseAddServices, IServices } from "@customTypes/index";
import { useParams } from "react-router";

const transformService = (service: IServices): IUseAddServices => ({
  _id: service._id,
  title: { ar: service.title, en: service.title },
  description: { ar: service.description, en: service.description },
  image: "",
});

const useEditServices = () => {
  const dispatch = useAppDispatch();
  const { serviceId } = useParams<{ serviceId: string }>();
  const { services } = useAppSelector((state) => state.services);

  const defaultFormData: IUseAddServices = {
    _id: serviceId || "",
    title: { ar: "", en: "" },
    description: { ar: "", en: "" },
    image: "",
  };

  const existingService = services.find(
    (service) => service._id === serviceId
  );

  const initialData: IUseAddServices = existingService
    ? transformService(existingService)
    : defaultFormData;

  const [formData, setFormData] = useState<IUseAddServices>(initialData);

  useEffect(() => {
    if (existingService) {
      setFormData(transformService(existingService));
    }
  }, [existingService]);

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
    dispatch(actEditService(formData));
  };

  return { formData, setFormData, handleInputChange, handleFileChange, handleSubmit };
};

export default useEditServices;