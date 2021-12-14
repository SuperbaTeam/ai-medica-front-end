import TestResult from './sub_components/TestResult'


export default function ResultComponent() {
    let fakeData = [
        {
            name: "fake name1",
            age: "fake age1_",
            disease_name: "disease name 1",
            status: "fake status1",
        },
        {
            name: "fake name2",
            age: "fake age2",
            disease_name: "disease name 2",
            status: "fake status2",
        },
        {
            name: "fake name3",
            age: "fake age3",
            disease_name: "disease name 3",
            status: "fake status3",
        },
        {
            name: "fake name4",
            age: "fake age4",
            disease_name: "disease name 4",
            status: "fake status4",
        },

    ]
    return (
    <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
      {fakeData.length > 0 ?<>
        <h1 class="text-3xl text-center font-bold text-black-500">Your Test Results:</h1>
        <div class="border-l-2 mt-10">
        {fakeData.map(result=>{
                return (
                    <TestResult result={result} testNumber={fakeData.indexOf(result)+1}/>
                )
            })}
        </div>
      </> : <h1 class="text-3xl text-center font-bold text-black-500">No Test Results To Be Viewed Yet.</h1>}
    </div>
    );
}