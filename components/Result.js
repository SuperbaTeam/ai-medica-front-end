import TestResult from './sub_components/TestResult'


export default function Results() {
    let fakeData = [
        {
            name: "fake name1",
            age: "fake age1_2",
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

    ]
    return (
    <>
        <div class="text-center content-center bg-neutral-300 w-4/6 p-20 m-auto my-20 rounded-md">
        {fakeData.map(result=>{
            return (
                <TestResult result={result} testNumber={fakeData.indexOf(result)+1}/>
            )
        })}
        </div>
    </>
    );
}