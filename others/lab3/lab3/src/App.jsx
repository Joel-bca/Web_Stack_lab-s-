import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    plantName: "",
    plantType: "",
    wateringDays: "",
  });

  const [plants, setPlants] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.plantName.trim())
      tempErrors.plantName = "Plant name is required";
    if (!formData.plantType.trim())
      tempErrors.plantType = "Plant type is required";
    if (!formData.wateringDays)
      tempErrors.wateringDays = "Watering interval is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPlants([...plants, formData]);
      setFormData({ plantName: "", plantType: "", wateringDays: "" });
      setErrors({});
    }
  };

  return (
    <div className="app-container">
      <h2>Plant Care & Watering Reminder</h2>

      <form onSubmit={handleSubmit} className="plant-form">
        <label>Plant Name</label>
        <input
          type="text"
          name="plantName"
          value={formData.plantName}
          onChange={handleChange}
          placeholder="e.g. Aloe Vera"
        />
        {errors.plantName && <p className="error">{errors.plantName}</p>}

        <label>Plant Type</label>
        <input
          type="text"
          name="plantType"
          value={formData.plantType}
          onChange={handleChange}
          placeholder="Indoor / Outdoor"
        />
        {errors.plantType && <p className="error">{errors.plantType}</p>}

        <label>Water Every (Days)</label>
        <input
          type="number"
          name="wateringDays"
          value={formData.wateringDays}
          onChange={handleChange}
          placeholder="e.g. 3"
        />
        {errors.wateringDays && <p className="error">{errors.wateringDays}</p>}

        <button type="submit">Add Plant</button>
      </form>

      {plants.length > 0 && (
        <div className="plant-list">
          <h3>🌿 My Plants</h3>
          <table>
            <thead>
              <tr>
                <th>Plant Name</th>
                <th>Type</th>
                <th>Water Every (Days)</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant, index) => (
                <tr key={index}>
                  <td>{plant.plantName}</td>
                  <td>{plant.plantType}</td>
                  <td>{plant.wateringDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
