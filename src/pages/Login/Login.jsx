import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { pattern1 } from "../../assets";

const Login = () => {

  const [loginData, setLoginData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true); // Start the loading state

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false); // Stop the loading state
      setLoginData("Please register first."); // Display the message after login
    }, 2500);
  };


  return (
    <div className='bg-[#444] text-white'
      style={{ backgroundImage: `url(${pattern1})` }}>


      {/* <!-- login --> */}
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden bg-[#333]">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-white-600 mb-6 text-sm">
            {loginData === "" ? "Welcome back customer" : loginData}
          </p>
          {/* <form action="" method="post" autocomplete="off"> */}
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="text-white-600 mb-2 block">
                  Email address
                </label>
                <input type="email" name="email" id="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-white-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="youremail@domain.com" />
              </div>
              <div>
                <label htmlFor="password" className="text-white-600 mb-2 block">Password</label>
                <input type="password" name="password" id="password"
                  className="block w-full border border-gray-300 px-4 py-3 text-white-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input type="checkbox" name="remember" id="remember"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label htmlFor="remember" className="text-white-600 ml-3 cursor-pointer">Remember me</label>
              </div>
              <a href="#" className="text-primary hidden">Forgot password</a>
            </div>
            <div className="mt-4">
              <button
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                onClick={handleLogin}
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          {/* </form> */}

          {/* <!-- login with --> */}
          <div className="mt-6 flex justify-center relative hidden">
            <div className="text-white-600 px-3 bg-black z-10 relative">Or login with</div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="mt-4 flex gap-4 hidden">
            <a href="#"
              className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
            <a href="#"
              className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
          </div>
          {/* <!-- ./login with --> */}

          <p className="mt-4 text-center text-white-600">Don't have account? <Link to="/register"
            className="text-primary">
            Register now
          </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login