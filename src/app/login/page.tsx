import Link from "next/link";

const Login = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-[28rem] h-[28rem] rounded-full bg-[#4289A7] absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
      <p className="text-[40px] text-white font-bold absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        Login
      </p>
      <div className="relative flex justify-center w-screen h-screen">
        <form 
          className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 w-[70%] bg-white/[.935] p-5 rounded-lg drop-shadow-md"
          
        >
          <div className="relative mb-4" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full mb-[1.5rem] rounded border-b border-gray-500 bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
          <div className="relative mb-[3rem]" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-b border-gray-500 bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password"
            />
            <label
              htmlFor="exampleFormControlInput22"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block rounded bg-[#4289A7] px-7 pb-2.5 pt-3 mb-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Login
            </button>

            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-[#4D4D4D]">
              {`Don't have an account?`}
              <Link
                href="/signup"
                className="ml-3 text-[#4289A7] underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
        <div className="w-[28rem] h-[28rem] rounded-full bg-[#4289A7] absolute bottom-[-25%] left-[30%] z-30"></div>
        <div className="w-[20rem] h-[20rem] rounded-full bg-[#C1EDF3] absolute bottom-[-20%] right-[50%]"></div>
      </div>
    </div>
  );
};

export default Login;
