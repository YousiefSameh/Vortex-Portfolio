import Sidebar from "@components/dashboard/Sidebar";
import useAddServices from "@hooks/useAddServices";

const AddService = () => {
	const { icons, formData, handleChange, handleIconChange, handleSubmit } =
		useAddServices();
	return (
		<div className="min-h-screen bg-dark-color text-light-color flex">
			{/* Sidebar */}
			<Sidebar />
			{/* Main Content */}
			<div className="container mx-auto flex-1 p-8">
				<div className="flex items-center justify-between">
					<h1 className="text-7xl font-bold mb-2">الخدمات</h1>
				</div>

				<div className="p-6 rounded-lg shadow-lg">
					<h2 className="text-xl font-bold mb-4 text-light-color">
						إضافة خدمة جديدة
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-ligth-color mb-2">
								اختر أيقونة
							</label>
							<div className="flex space-x-4">
                {icons.map((el, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleIconChange(el.icon)}
                    className={`px-2 py-1 border rounded-lg cursor-pointer transition-transform duration-200 focus:border-main-color ${
                      formData.icon === el.icon
                        ? "border-main-color transform scale-110"
                        : "border-gray-300"
                    }`}
                  >
                    {el.icon}
                  </button>
                ))}
							</div>
						</div>

						<div className="mb-4">
							<label className="block text-light-color mb-2">
								العنوان (بالعربية)
							</label>
							<input
								type="text"
								name="titleAr"
								value={formData.titleAr}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-light-color mb-2">
								العنوان (بالإنجليزية)
							</label>
							<input
								type="text"
								name="titleEn"
								value={formData.titleEn}
								onChange={handleChange}
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
								value={formData.descriptionAr}
								onChange={handleChange}
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
								value={formData.descriptionEn}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
							/>
						</div>

						<button
							type="submit"
							className="primary-btn w-full h-fit"
						>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
							إضافة الخدمة
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddService;
