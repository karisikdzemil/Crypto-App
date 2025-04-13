import { Form, useActionData } from "react-router-dom";

export default function Singup() {
  const data = useActionData();

  return (
    <Form method="post" className="w-full max-w-md bg-[#23272Eff] p-8 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-white text-center">Create Your Account</h2>
      <input type="hidden" name="formType" value="signup" />

      {data?.error && <p className="text-red-400 text-center">{data.error}</p>}

      <div>
        <label className="block text-white mb-1">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-amber-400"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Create a password"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-amber-400"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-1">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-amber-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition"
      >
        Sign Up
      </button>
    </Form>
  );
}
