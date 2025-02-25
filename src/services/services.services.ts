import API from "./api.services";
import { IUseAddServices } from "@customTypes/index";

export const fetchServices = async () => {
  const response = await API.get('/v1/services');
  return response.data;
};

export const addService = async (project: IUseAddServices): Promise<IUseAddServices> => {
  const formData = new FormData();
  formData.append('title[ar]', project.title.ar);
  formData.append('title[en]', project.title.en);
  formData.append('description[ar]', project.description.ar);
  formData.append('description[en]', project.description.en);
  if (project.image instanceof File) {
    formData.append('image', project.image);
  }

  const response = await API.post('/v1/services', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateService = async (project: IUseAddServices): Promise<IUseAddServices> => {
  const formData = new FormData();
  formData.append('title[ar]', project.title.ar);
  formData.append('title[en]', project.title.en);
  formData.append('description[ar]', project.description.ar);
  formData.append('description[en]', project.description.en);
  if (project.image instanceof File) {
    formData.append('image', project.image);
  }

  const response = await API.put(`/v1/services/${project._id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteService = async (projectId: string): Promise<void> => {
  await API.delete(`/v1/services/${projectId}`);
};