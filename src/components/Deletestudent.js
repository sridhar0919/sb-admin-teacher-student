import React, { useState } from 'react';
import './Content.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Deletestudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email_id);
        setMobileNumber(res.data.mobile_number);
      })
      .catch((err) => toast.error('User not found. Enter valid id'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${id}`)
      .then((res) => toast.success('User deleted'))
      .catch((err) => toast.error(err));
  };
  return (
    <div className="container-home">
      <ToastContainer />
      <h1 className="main-heading1">DELETE STUDENT</h1>
      <form class="form-inline mb-3 ml-5" onSubmit={handleSearch}>
        <div class="form-group mx-sm-3 mb-2 ">
          <input
            type="text"
            class="form-control"
            value={id}
            id="id"
            placeholder="Enter ID"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <button class="btn btn-primary mb-2">Search</button>
      </form>
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
                e.preventDefault();
                setName(e.target.value);
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
                e.preventDefault();
                setMobileNumber(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            DELETE
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
