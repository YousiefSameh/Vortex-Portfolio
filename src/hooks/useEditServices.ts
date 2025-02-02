import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { editService } from "@store/services/services.slice";
import { IServices } from "@customTypes/index";
import { useParams } from "react-router-dom";

const useEditServices = () => {
  const dispatch = useAppDispatch();

  const { serviceId } = useParams<{ serviceId: string }>();
	const service = useAppSelector((state) =>
		state.services.services.find((service) => service.id === serviceId)
	);

	const [formData, setFormData] = useState<IServices>({
		id: service?.id || "0",
		icon: service?.icon || null,
		titleAr: service?.titleAr || "",
		titleEn: service?.titleEn || "",
		descriptionAr: service?.descriptionAr || "",
		descriptionEn: service?.descriptionEn || "",
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
		dispatch(editService(formData));
	};
  return { formData, handleChange, handleSubmit }
}

export default useEditServices