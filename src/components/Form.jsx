import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import axios from 'axios'; 

// eslint-disable-next-line react/prop-types
const Form = ({ apiUrl }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    university: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/submit-form`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        navigate('/submitted');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorList = error.response.data.errors;
        const formattedErrors = {};

        errorList.forEach((err) => {
          formattedErrors[err.path] = err.msg;
        });

        setErrors(formattedErrors);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="container">
      <form className="responsive-form" onSubmit={handleSubmit}>
        <h1>Form</h1>
        <FormField
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        
        <FormField
          id="phoneNumber"
          label="Phone Number"
          type="text"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={errors.phoneNumber}
        />
        
        <FormField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        
        <FormField
          id="address"
          label="Address"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
          error={errors.address}
        />
        
        <FormField
          id="university"
          label="University"
          type="text"
          value={formData.university}
          onChange={handleInputChange}
          error={errors.university}
        />
        
        <FormField
          id="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          error={errors.message}
        />
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
