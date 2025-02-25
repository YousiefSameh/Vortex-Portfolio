import useEditServices from "@hooks/useEditService";

const EditServiceForm = () => {
  const { formData, handleInputChange, handleFileChange, handleSubmit } = useEditServices();

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-light-color mb-2">أضف أيقونة</label>
        <input
          type="file"
          name="image.url"
          onChange={handleFileChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
        />
      </div>

      <div className="mb-4 flex items-center gap-12">
        <div className="w-[500px]">
          <label className="block text-light-color mb-2">العنوان (بالعربية)</label>
          <input
            type="text"
            name="title.ar"
            value={formData.title.ar}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
          />
        </div>
        <div className="w-[500px]">
          <label className="block text-light-color mb-2">العنوان (بالإنجليزية)</label>
          <input
            type="text"
            name="title.en"
            value={formData.title.en}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-light-color mb-2">الوصف (بالعربية)</label>
        <textarea
          name="description.ar"
          value={formData.description.ar}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
        />
      </div>

      <div className="mb-4">
        <label className="block text-light-color mb-2">الوصف (بالإنجليزية)</label>
        <textarea
          name="description.en"
          value={formData.description.en}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
        />
      </div>

      <button type="submit" className="primary-btn w-full h-fit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        تعديل الخدمة
      </button>
    </form>
  );
};

export default EditServiceForm;