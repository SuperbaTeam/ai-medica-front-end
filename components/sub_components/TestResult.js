



export default function TestResult(props) {
    let buttonClass = "bg-green-400 p-2 mx-2"
    return (
    <>
    <div class="flex flex-1 bg-slate-50 w-full m-12 p-2">
        <div class="float-left m-auto">
            <h1>Test Number {props.testNumber}</h1>
        </div>

        <div class="float-right inline-flex m-auto">
            <button class={buttonClass}>View Result</button>
            <button class={buttonClass}>Delete Result</button>   
        </div>
    </div>
    </>
    );
}