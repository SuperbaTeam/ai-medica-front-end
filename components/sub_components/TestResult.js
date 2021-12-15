import TestModal from "./TestModal";
import React, { useState } from 'react';


export default function TestResult(props) {

    const [modalState, setModalState] = useState(false);

    const showModal = () => {
        setModalState(true)
    }
    const hideModal = () => {
        setModalState(false)
    }
    return (
    <>
    {modalState && <TestModal disable={hideModal} testNumber={props.testNumber} result={props.result}/>}
      <div class="border-l-2 mt-10">

        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

          <div class="w-5 h-5 bg-lime-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

          <div class="w-10 h-1 bg-lime-400 absolute -left-10 z-0"></div>


          <div class="flex-auto">
            <h1 class="text-xl font-bold text-black">Test Number #{props.testNumber}</h1>
            <h1 class="text-lg text-black">View your results for test number #{props.testNumber}</h1>
          </div>
          <button className="text-center bg-lime-300 p-2 px-4 m-4 text-black rounded-md hover:bg-lime-400" onClick={showModal}>Result</button>
          {/* <button className="text-center text-white bg-red-500 py-2 px-4 m-4 text-black rounded-md hover:bg-red-400">Delete</button> */}
        </div>
    </div>
    </>
    );
}