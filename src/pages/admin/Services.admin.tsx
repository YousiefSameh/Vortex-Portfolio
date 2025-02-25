import { useState } from "react";
import ServicesTable from "@components/dashboard/ServicesTable";
import AddServiceForm from "@components/dashboard/AddServiceForm";
import EditServiceForm from "@components/dashboard/EditServiceForm";

const ServicesAdmin = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <div className="container mx-auto flex-1 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-7xl font-bold mb-2">الخدمات</h1>
        <button className="primary-btn h-fit" onClick={openAddModal}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          أضف خدمة
        </button>
      </div>

      <ServicesTable openEditModal={openEditModal}/>

      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-dark-color text-light-color p-8 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={closeAddModal}
              className="absolute top-0 right-4 text-white text-3xl cursor-pointer"
            >
              &times;
            </button>
            <h1 className="text-4xl font-bold mb-4">إضافة خدمة جديدة</h1>
            <AddServiceForm />
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-dark-color text-light-color p-8 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={closeEditModal}
              className="absolute top-0 right-4 text-white text-3xl cursor-pointer"
            >
              &times;
            </button>
            <h1 className="text-4xl font-bold mb-4">تعديل خدمة جديدة</h1>
            <EditServiceForm />
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicesAdmin;