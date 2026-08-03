"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10">

      <h1 className="text-4xl font-bold">
        Welcome Back
      </h1>

      <p className="mt-4 text-white/60">
        Login to manage bookings.
      </p>

      <div className="space-y-5 mt-10">

        <input
          placeholder="Email"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
        />

        <button className="w-full rounded-xl bg-blue-600 py-4 hover:bg-blue-500 transition">
          Login
        </button>

      </div>

      <p className="mt-8 text-center text-white/60">

        Don't have an account?

        <Link
          href="/register"
          className="ml-2 text-blue-400"
        >
          Register
        </Link>

      </p>

    </div>
  );
}