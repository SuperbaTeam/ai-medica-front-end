export default function ChoiceRadio(props) {

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.setResultsSection(event.target.disease.value)

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div class="transform transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 bg-gray-100  text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        {/* <div class="w-5 h-5 bg-lime-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div> */}

        {/* <div class="w-10 h-1 bg-lime-400 absolute -left-10 z-0"></div> */}
        <div className="flex-auto">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-6 w-6 appearance-none checked:bg-lime-500 rounded-xl"
                  name="disease"
                  value="0"
                />
                <span className="text-xl font-bold text-black m-1">Stroke</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-6 w-6 appearance-none checked:bg-lime-500 rounded-xl"
                  name="disease"
                  value="1"
                />
                <span className="text-xl font-bold text-black m-1">Hepatitis</span>
              </label>
            </div>
        <button className="text-center bg-lime-300 p-2 px-4 m-4 text-black rounded-md hover:bg-lime-400" type="submit" >
          Filter
        </button>
        {/* <button className="text-center text-white bg-red-500 py-2 px-4 m-4 text-black rounded-md hover:bg-red-400">Delete</button> */}
      </div>
    </form>
    </>
  );
}
