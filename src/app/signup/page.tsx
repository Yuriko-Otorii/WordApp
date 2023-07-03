"use client"

import Link from "next/link"
import { useRef } from "react"
import { signupRequest } from "./signupFunction"

const Signup = () => {
  
  const usernameInput = useRef<HTMLInputElement | null>(null)
  const emailInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)
  const confirmPasswordInput = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async () => {
    const username = usernameInput.current?.value
    const email = emailInput.current?.value
    const password = passwordInput.current?.value
    const confirmPassword = confirmPasswordInput.current?.value

    signupRequest({username, email, confirmPassword})
  }

  return (
    <div className="relative overflow-hidden">
      <div className="w-[28rem] h-[28rem] rounded-full bg-[#4289A7] absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
      <p className="text-[40px] text-white font-bold absolute top-[8%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        Sign up
      </p>
      <div className="relative flex justify-center w-screen h-screen">
        <form 
          className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70%] z-50 w-[70%] bg-white/[.935] p-5 rounded-lg drop-shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              ref={usernameInput}
              type="text"
              className="peer block min-h-[auto] w-full mb-[1.5rem] rounded border-b border-gray-500 bg-transparent py-[0.32rem] leading-[1.8] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Username"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Username
            </label>
          </div>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              ref={emailInput}
              type="text"
              className="peer block min-h-[auto] w-full mb-[1.5rem] rounded border-b border-gray-500 bg-transparent py-[0.32rem] leading-[1.8] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
            <label
              htmlFor="exampleFormControlInput2"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              ref={passwordInput}
              type="password"
              className="peer block min-h-[auto] w-full mb-[1.5rem] rounded border-b border-gray-500 bg-transparent py-[0.32rem] leading-[1.8] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="Password"
            />
            <label
              htmlFor="exampleFormControlInput3"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div className="relative mb-[2rem]" data-te-input-wrapper-init>
            <input
              ref={confirmPasswordInput}
              type="password"
              className="peer block min-h-[auto] w-full mb-[1.5rem] rounded border-b border-gray-500 bg-transparent py-[0.32rem] leading-[1.8] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput4"
              placeholder="Confirm password"
            />
            <label
              htmlFor="exampleFormControlInput4"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Confirm password
            </label>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="inline-block rounded bg-[#4289A7] px-7 pb-2.5 pt-3 mb-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign up
            </button>

            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-[#4D4D4D]">
              {`Don't have an account?`}
              <Link
                href="/login"
                className="ml-3 text-[#4289A7] underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
        <div className="w-[28rem] h-[28rem] rounded-full bg-[#C1EDF3] absolute bottom-[-35%] left-[30%]"></div>
        <div className="w-[25rem] h-[25rem] rounded-full bg-[#4289A7] absolute bottom-[-20%] right-[30%] z-30"></div>
      </div>
    </div>
  )
}

export default Signup