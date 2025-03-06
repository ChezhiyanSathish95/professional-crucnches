import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    competencies: "",
    experience: "",
    city: "",
    state: "",
    address: "",
    referral: "",
    languages: "",
    computerskills: "",
    native: "",
    laptop: "",
    bike: "",
    resume: null,
    marksheet: null,
    aadhar: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
  
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });
  
    console.log("FormData before sending:");
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    try {
      const response = await axios.post("http://localhost/backend/server.php", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response Data:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="register-form-container" encType="multipart/form-data">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="date" name="dob" onChange={handleChange} required />
      <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required />
      <input type="text" name="competencies" placeholder="Competencies" onChange={handleChange} required />
      <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" onChange={handleChange} required />
      <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea>
      <input type="text" name="referral" placeholder="Referral" onChange={handleChange} required />
      <input type="text" name="languages" placeholder="Languages" onChange={handleChange} required />
      <input type="text" name="computerskills" placeholder="Computer Skills" onChange={handleChange} required />
      <input type="text" name="native" placeholder="Native Place" onChange={handleChange} required />

      <label>
        Laptop:
        <input type="radio" name="laptop" value="yes" onChange={handleChange} required /> Yes
        <input type="radio" name="laptop" value="no" onChange={handleChange} required /> No
      </label>

      <label>
        Bike:
        <input type="radio" name="bike" value="yes" onChange={handleChange} required /> Yes
        <input type="radio" name="bike" value="no" onChange={handleChange} required /> No
      </label>

      <input type="file" name="resume" onChange={handleFileChange}  />
      <input type="file" name="aadhar" onChange={handleFileChange}  />
      <input type="file" name="marksheet" onChange={handleFileChange}  />
      <input type="file" name="photo" onChange={handleFileChange}  />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
