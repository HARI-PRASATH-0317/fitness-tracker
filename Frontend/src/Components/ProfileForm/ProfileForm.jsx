import React, { useState } from 'react';
import './ProfileForm.css';
import axios from 'axios'

function ProfileForm() {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('Weight:', weight);
    console.log('Height (feet):', heightFeet);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Pincode:', pincode);
    console.log('Location:', location);
    
    try {
      const result = await axios.post('https://fitness-tracker-1.onrender.com/ProfileForm', {
        weight,
        heightFeet,
        city,
        state,
        pincode,
        location
      });
      console.log('Profie-up successful:', result.data);
    } catch (error) {
      console.log('profile-up failed:', error);
    }
  };



  return (
    <div className="profile-form-container">
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <label>
          Height (ft):
          <input
            type="number"
            value={heightFeet}
            onChange={(e) => setHeightFeet(e.target.value)}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          Pincode:
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

export default ProfileForm;
