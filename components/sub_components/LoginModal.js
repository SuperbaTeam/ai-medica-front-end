export default function LoginModal(props) {

    const loginUser = (event) =>{
        event.preventDefault();
        const username = event.target.username.value;
        const pass = event.target.password.value;
        try{
            props.login(username,pass)
        }
        catch{

        }
        finally{
            props.hide()
        }

    }

  return (
    <>
      <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p class="font-semibold text-gray-800 text-4xl">Login</p>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={props.hide}
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <form action="/" onSubmit={loginUser}>
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            <p class="mb-2 font-semibold text-gray-700">Username</p>
            <input type="text"class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10" id="username" name="username"/>
          </div>
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            <p class="mb-2 font-semibold text-gray-700">Password</p>
            <input type="password"class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-10" id="password" name="password" />
          </div>
          <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <button class="font-semibold text-gray-600" onClick={props.hide} >Cancel</button>
            <button class="px-4 py-2 text-black font-semibold bg-lime-300 rounded" type="submit">
              Login
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
