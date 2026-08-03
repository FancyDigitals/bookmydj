"use client";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10">

      <h1 className="text-4xl font-bold">
        Create Account
      </h1>

      <div className="grid md:grid-cols-2 gap-5 mt-10">

        <input
          placeholder="First Name"
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        />

        <input
          placeholder="Last Name"
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        />

      </div>

      <input
        placeholder="Email"
        className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 p-4"
      />

      <input
        placeholder="Password"
        type="password"
        className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 p-4"
      />

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 hover:bg-blue-500">
        Create Account
      </button>

    </div>
  );
}