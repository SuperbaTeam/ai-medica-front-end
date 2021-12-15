export default function LoginModal(props) {
  const loginUser = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      props.login(username, email, password)

    }
    catch {

    }
    finally {
      props.hide()
    }
  }


  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center h-screen antialiased bg-gray-200">
          <div className="flex flex-col w-11/12 max-w-2xl mx-auto border border-gray-300 rounded-lg shadow-xl sm:w-5/6 lg:w-1/2">
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="text-4xl font-semibold text-gray-800">Login</p>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={props.hide}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <form action="/" onSubmit={loginUser}>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Username</p>
                <input
                  type="text"
                  className="h-10 p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  id="username"
                  name="username"
                />
              </div>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Email</p>
                <input type="text" className="h-10 p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm" id="email" name="email" />
              </div>
              <div className="flex flex-col px-6 py-5 bg-gray-50">
                <p className="mb-2 font-semibold text-gray-700">Password</p>
                <input
                  type="password"
                  className="h-10 p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  id="password"
                  name="password"
                />
              </div>
              <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                <button
                  className="font-semibold text-gray-600"
                  onClick={props.hide}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 font-semibold text-black rounded bg-lime-300"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}