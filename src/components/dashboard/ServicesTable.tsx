import { useAppSelector } from "@store/hooks";
import { IServices } from "@customTypes/index";
// import { deleteService } from "@store/services/services.slice";
import { useNavigate } from "react-router";

const ServicesTable = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const { services } = useAppSelector((state) => state.services);

  const handleEdit = (id: string) => {
    const serviceToEdit = services.find(service => service._id === id);
    if (serviceToEdit) {
      navigate(`/dashboard/services/edit/${id}`);
    }
  };

  // const handleDelete = (id: string) => {
  //   dispatch(deleteService({ id }));
  // };

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
              <td className="py-3 px-6 border-b border-gray-200 text-gray-700 text-right">{service.title.ar}</td>
              <td className="py-3 px-6 border-b border-gray-200 text-gray-700 text-right">{service.description.ar}</td>
              <td className="py-3 px-6 border-b border-gray-200 text-gray-700 text-right">
                <button
                  onClick={() => handleEdit(service._id as string)}
                  className="text-yellow-300 hover:text-yellow-500 mx-2 cursor-pointer font-bold"
                >
                  تعديل
                </button>
                <button
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