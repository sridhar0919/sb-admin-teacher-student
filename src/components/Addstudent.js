import React, { useState } from 'react';
import './Content.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Addstudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users', {
        name: name,
        email_id: email,
        mobile_number: mobileNumber,
      })
      .then((res) => toast.success('User added successfully'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-home">
      <ToastContainer />
      <h1 className="main-heading1">ADD STUDENT</h1>
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              value={name}
              id="name"
              placeholder="Name *"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              value={email}
              id="email"
              placeholder="Email *"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile Number</label>
            <input
              type="tel"
              class="form-control"
              value={mobileNumber}
              id="mobile_number"
              placeholder="Mobile No *"
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add
          </button>
          <div>
            <button
              type="submit"
              class="btn btn-primary mt-5"
              onClick={(e) => {
                navigate('/');
              }}
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
