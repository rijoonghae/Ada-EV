'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Login gagal');
        return;
      }

      const data = await res.json();
      // Simpan token di localStorage atau cookie sesuai kebutuhan
      localStorage.setItem('token', data.token);

      // Redirect ke halaman admin dashboard (ganti sesuai rute dashboard)
      router.push('/admin-home');
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi.');
    }
  };

  return (
    <main className="min-h-screen bg-[#FBD9CD] flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full bg-[#FBD9CD]">
        <h1 className="mb-8 text-center text-2xl font-semibold">Welcome back, Admin</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
              username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border border-gray-300 p-3"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-gray-300 p-3"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-center text-sm">{error}</p>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-gray-900 px-6 py-2 text-white hover:bg-gray-800 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
