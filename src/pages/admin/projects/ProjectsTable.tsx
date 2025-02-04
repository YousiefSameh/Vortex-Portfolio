import Sidebar from "@components/dashboard/Sidebar";
import { useState } from "react";
import { FaArrowCircleDown, FaImage } from "react-icons/fa";

const ProjectsTable = () => {
  const [closeDash, setCloseDash] = useState(false);
  return (
    <div className="bg-dark-color text-light-color flex">
      <Sidebar />

      {/* Main Content */}
      <div className="container mx-auto flex-1 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-7xl font-bold mb-2 ">المشاريع</h1>
          <FaArrowCircleDown
            onClick={() => setCloseDash(!closeDash)}
            className={`text-2xl cursor-pointer hover:text-main-color transition-all duration-200 ${
              closeDash ? "rotate-180 " : "rotate-0"
            }`}
          />
        </div>
        {closeDash ? (
          <form className="flex w-full justify-between">
            {/* Right Side */}
            <div className="right-side w-[48%]">
              <div className="mb-4">
                <label className="block text-light-color mb-2">
                  العنوان (بالعربية)
                </label>
                <input
                  type="text"
                  name="titleAr"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="mb-4">
                <label className="block text-light-color mb-2">
                  الوصف (بالعربية)
                </label>
                <textarea
                  name="descriptionAr"
                  required
                  className="w-full h-28 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="mb-4 h-1/2">
                <label className="block text-ligth-color mb-2">
                  أضف الصورة
                </label>
                <div className="flex justify-center items-center border-[1px] hover:border-main-color hover:scale-[1.01] transition-all duration-200 rounded-md h-full relative cursor-pointer">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaImage className="text-white text-4xl" /> اختر صورة
                  </h1>
                  <input
                    type="file"
                    required
                    className="w-full cursor-pointer outline-none border-none absolute h-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                  />
                </div>
              </div>
            </div>

            {/* Left Side */}
            <div className="left-side w-[48%]">
              <div className="mb-4">
                <label className="block text-light-color mb-2">
                  العنوان (بالإنجليزية)
                </label>
                <input
                  type="text"
                  name="titleEn"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="mb-4">
                <label className="block text-light-color mb-2">
                  الوصف (بالإنجليزية)
                </label>
                <textarea
                  name="descriptionEn"
                  required
                  className="w-full h-28 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="mb-4">
                <label className="block text-light-color mb-2">التقنيات</label>
                <input
                  type="text"
                  name="technologies"
                  required
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="mb-4">
                <label className="block text-light-color mb-2">GitHub</label>
                <input
                  type="text"
                  name="github"
                  required
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="mb-4">
                <label className="block text-light-color mb-2">Demo</label>
                <input
                  type="text"
                  name="demo"
                  required
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                />
              </div>
            </div>
          </form>
        ) : (
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full mt-10 border-collapse table-fixed">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 w-1/7 text-center">اللغه</th>
                  <th className="p-4 w-1/7 text-center">عنوان المشروع</th>
                  <th className="p-4 w-1/7 text-center">وصف المشروع</th>
                  <th className="p-4 w-1/7 text-center">صورة الموقع</th>
                  <th className="p-4 w-1/7 text-center">التقنيات</th>
                  <th className="p-4 w-1/7 text-center">GitHub</th>
                  <th className="p-4 w-1/7 text-center">Demo</th>
                </tr>
              </thead>
              <tbody className="bg-zinc-800 h-[50vh]  ">
                <tr>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    ar
                  </td>

                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    en
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Dogs
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    ar
                  </td>

                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    en
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Dogs
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    ar
                  </td>

                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    en
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Dogs
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    ar
                  </td>

                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    en
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Dogs
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    ar
                  </td>

                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    en
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Dogs
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Cats
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Birds
                  </td>
                  <td className="p-4 text-center truncate whitespace-nowrap">
                    Fish
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      GitHub Link
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <a href="#" className="text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTable;
