import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateHoot, show } from "../../services/hootService";

const HootEditForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "News",
  });

  const { hootId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoot = async () => {
      const hoot = await show(hootId);
      setFormData(hoot);
    };
    fetchHoot();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHoot(hootId, formData);
    navigate(`/hoots/${hootId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          id="text"
          value={formData.text}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Hoot</button>
    </form>
  );
};

export default HootEditForm;
