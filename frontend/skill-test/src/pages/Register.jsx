import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const REGISTER = gql`
  mutation Register($username: String!, $password: String!, $role: String!) {
    register(username: $username, password: $password, role: $role) {
      token
    }
  }
`;

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', role: 'employee' });
  const [registerMutation] = useMutation(REGISTER);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await registerMutation({ variables: form });
    login(data.register.token);
    navigate('/');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-green-600 text-white rounded p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
