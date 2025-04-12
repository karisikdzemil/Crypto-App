export default function Login() {
  return (
      <form className="w-full max-w-md bg-[#23272Eff]  p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">
          Login to Your Account
        </h2>

        <div>
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition cursor-pointer"
        >
          Login
        </button>
      </form>
  );
}
