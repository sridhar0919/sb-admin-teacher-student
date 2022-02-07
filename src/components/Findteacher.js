import React, { useState } from 'react';
import './Content.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Findstudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [id, setId] = useState(null);
  const [idNo, setIdNo] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${idNo}`)
      .then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setEmail(res.data.email_id);
        setMobileNumber(res.data.mobile_number);
      })
      .catch((err) => toast.error('User not found. Enter valid id'));
  };

  return (
    <div>
      <div className="container-home">
        <ToastContainer />
        <h1 className="main-heading1">FIND TEACHER</h1>
        <form class="form-inline mb-3 ml-5" onSubmit={handleSearch}>
          <div class="form-group mx-sm-3 mb-2">
            <input
              type="text"
              class="form-control"
              value={idNo}
              id="idNo"
              placeholder="Enter ID"
              onChange={(e) => {
                setIdNo(e.target.value);
              }}
            />
          </div>
          <button class="btn btn-primary mb-2">Search</button>
        </form>
        <div className="mt-5 ml-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{mobileNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-primary mt-5"
            onClick={(e) => {
              navigate('/teachers');
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
