const Login = () => {
  
    return (
      <section className="min-h-screen bg-[#F9FAFC] flex flex-col justify-between mb-20">
        {/* Header */}
        <header className="py-6 text-center">
          <h1 className="text-2xl font-bold text-[#242565]">My Account</h1>
          <p className="text-sm text-gray-500">Home / Pages / My Account</p>
        </header>
  
        {/* Login Box */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
            <h2 className="text-xl font-bold text-center mb-4">Login</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Please log in using account details below.
            </p>
  
            {/* Login Form */}
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#242565]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#242565]"
                />
              </div>
              <p className="text-right text-sm text-[#242565] mb-4 cursor-pointer hover:underline">
                Forgot your password?
              </p>
              <button
                type="submit"
                className="w-full bg-[#E70FAA] text-white rounded-md py-2 font-bold hover:bg-[#d00e9b]"
              >
                Sign-In
              </button>
            </form>
  
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an Account?{' '}
              <span className="text-[#242565] cursor-pointer hover:underline">
                Create account
              </span>
            </p>
          </div>
        </div>  
      </section>
    );
  };
  
  export default Login;
  