import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
        id
        name
        role
      }
    }
  }
`;

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login({ variables: form });
    localStorage.setItem('token', data.login.token);
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
