import React, { useState } from 'react';

function ABC() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      return (
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
        </div>
      );
}

export default ABC;
