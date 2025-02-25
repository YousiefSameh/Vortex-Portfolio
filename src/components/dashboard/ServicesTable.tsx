import { useAppDispatch, useAppSelector } from "@store/hooks";
import { IServices } from "@customTypes/index";
import { actDeleteService } from "@store/services/act/actDeleteService";
import { useEffect } from "react";
import actGetServices from "@store/services/act/actGetServices";
import { useNavigate } from "react-router";

const ServicesTable = ({ openEditModal }: { openEditModal: () => void }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { services } = useAppSelector((state) => state.services);

  useEffect(() => {
    dispatch(actGetServices());
  }, [dispatch])

  const handleEdit = (id: string) => {
    const serviceToEdit = services.find(service => service._id === id);
    if (serviceToEdit) {
      navigate(`/dashboard/services/${id}`);
      openEditModal();
    }
  };

  const handleDelete = (id: string) => {
    dispatch(actDeleteService(id));
  };

  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-main-color text-white">
          <tr>
            <th className="py-3 px-6 text-right font-semibold uppercase tracking-wider">العنوان</th>
            <th className="py-3 px-6 text-right font-semibold uppercase tracking-wider">الوصف</th>
            <th className="py-3 px-6 text-right font-semibold uppercase tracking-wider">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service: IServices, index: number) => (
            <tr
              key={service._id}
              className={`${
                index % 2 === 0 ? "bg-main-color/10" : "bg-main-color/30"
              } hover:bg-main-color/40 transition-colors duration-200`}
            >
              <td className="py-3 px-6 border-b border-gray-200 text-gray-700 text-right">{service.title}</td>
              <td className="py-3 px-6 border-b border-gray-200 text-gray-700 text-right">{service.description}</td>
              <td className="py-3 px-6 border-b border-gray-200 text-gray-700 text-right">
                <button
                  onClick={() => handleEdit(service._id)}
                  className="text-yellow-300 hover:text-yellow-500 mx-2 cursor-pointer font-bold"
                >
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="text-red-500 hover:text-red-700 mx-2 cursor-pointer font-bold"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;