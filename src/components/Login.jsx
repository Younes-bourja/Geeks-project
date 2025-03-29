import Header from "./Header";
import { useRef } from "react";
import "../styles/Login.css";
function Login (){
    const refContainer=useRef();
    function switchToSignUp(){
        refContainer.current.classList.remove('logShow');
        refContainer.current.classList.add("signShow");

    }
      function switchToLogIn() {
        refContainer.current.classList.add("logShow");
        refContainer.current.classList.remove("signShow");
      }
    return (
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-center "
        style={{
          backgroundImage: `url('https://cdn.visualwilderness.com/wp-content/uploads/2019/12/Norway-Landscape-Photography-3.jpg')`,
        }}
      >
        <div
          className="logShow flex w-full   justify-between transition-all duration-700"
          ref={refContainer}
        >
          <div className="flex min-h-screen transform  items-center">
            <div className="w-full max-w-md rounded-lg border-2 border-white border-opacity-30 bg-white bg-opacity-10 p-8 shadow-md backdrop-blur-lg">
              <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
              <p className="mb-4 text-center text-gray-900">
                Idon't have account
                <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500">
                  <span
                    class="relative cursor-pointer text-white dark:text-gray-950"
                    onClick={() => switchToSignUp()}
                  >
                    Sign up
                  </span>
                </span>
              </p>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-80 rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-pink-400 py-2 text-white transition duration-300 hover:bg-pink-600"
                >
                  SIGN IN
                </button>
                <div className="mt-4 flex justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="flex min-h-screen    items-center justify-center transition-all">
            <div className="w-full max-w-md rounded-lg border-2 border-white border-opacity-30 bg-white bg-opacity-10 p-8 shadow-md backdrop-blur-lg">
              <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
              <p className="mb-4 text-center text-gray-900">
                Idon't have account
                <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500">
                  <span
                    class="relative cursor-pointer text-white dark:text-gray-950"
                    onClick={() => switchToLogIn()}
                  >
                    Sign up
                  </span>
                </span>
              </p>
              <form>
                <div className="mb-4 flex gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <input
                    type="text"
                    placeholder="Family Name"
                    className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Confirme Password"
                    className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-pink-400 py-2 text-white transition duration-300 hover:bg-pink-600"
                >
                  SIGN UP
                </button>
                <div className="mt-4 flex justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Login;