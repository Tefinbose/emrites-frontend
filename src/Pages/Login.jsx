import React from 'react'

function Login() {
  return (
    <div className="flex min-h-[calc(100vh-76px)] items-center justify-center bg-WHITE px-6">

      <div className="w-full max-w-md rounded-2xl border border-orange-900/60 bg-black p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-white">
          Login to continue
        </p>

        <form
        //   onSubmit={}
          className="mt-8 flex flex-col gap-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            
            required
            className="rounded-lg border border-gray-600 bg-white px-4 py-3 text-black outline-none focus:border-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            
            required
            className="rounded-lg border border-gray-600 bg-white px-4 py-3 text-black outline-none focus:border-orange-400"
          />

          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-yellow-500 to-orange-400 py-3 font-bold text-white"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login