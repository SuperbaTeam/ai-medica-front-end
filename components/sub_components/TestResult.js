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


    let buttonClass = "bg-lime-300 p-4 mx-2 rounded-md text-xl w-32"
    return (
    <>
    {modalState && <TestModal disable={hideModal} testNumber={props.testNumber} result={props.result}/>}
    <div class="flex flex-auto bg-slate-50 w-full m-12 p-2 h-20 rounded-md">
        <div class="float-left m-auto">
            <h1 class="font-bold text-xl">Test Number #{props.testNumber}</h1>
        </div>

        <div class="float-right inline-flex m-auto">
            <button class={buttonClass} onClick={showModal}>Result</button>
            <button class={buttonClass}>Delete</button>   
        </div>
    </div>
    </>
    );
}