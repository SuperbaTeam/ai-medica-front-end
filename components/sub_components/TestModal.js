export default function TestModal(props) {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3
                  className="text-xl font-bold leading-6 text-black"
                  id="modal-title"
                >
                  Test #{props.testNumber} Results:
                </h3>
                <hr className="w-full my-4" />
                <div className="mt-2">
                  <div className="flex m-2">
                    <h1 className="text-black font-bold">Name: </h1>
                    <h1 className="mx-4 text-black"> {props.result.name}</h1>
                  </div>
                  <div className="flex m-2">
                    <h1 className="text-black font-bold">Age:</h1>
                    <h1 className="mx-4 text-black"> {props.result.age}</h1>
                  </div>
                  <div className="flex m-2">
                    <h1 className="text-black font-bold">Disease: </h1>
                    <h1 className="mx-4 text-black">
                      {" "}
                      {props.result.disease_name}
                    </h1>
                  </div>
                  <div className="flex m-2">
                    <h1 className="text-black font-bold">Status: </h1>
                    <h1 className="mx-4 text-black"> {props.result.status}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="text-xl w-full inline-flex justify-center rounded-md px-4 py-2 bg-lime-300"
              onClick={props.disable}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
