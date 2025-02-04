import useEditServices from "@hooks/useEditServices";
import Sidebar from "@components/dashboard/Sidebar";

const EditService = () => {
  const { formData, handleChange, handleSubmit } = useEditServices();
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
						تعديل الخدمة
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-light-color mb-2">
								العنوان (بالعربية)
							</label>
							<input
								type="text"
								name="titleAr"
								value={formData.title.ar}
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
								value={formData.title.en}
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
								value={formData.description.ar}
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
								value={formData.description.ar}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
							/>
						</div>

						<button type="submit" className="primary-btn w-full h-fit">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							حفظ التعديلات
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditService;
