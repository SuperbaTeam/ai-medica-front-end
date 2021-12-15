import TestResult from './sub_components/TestResult'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ResultComponent() {
    const stroke_api = process.env.NEXT_PUBLIC_API_URL_1;
    const hepatitis_api = process.env.NEXT_PUBLIC_API_URL_2;
    let userEmail = "";
    if (typeof window !== "undefined") {
        userEmail = JSON.parse(localStorage.getItem("Auth")).email;
    }
    let [resultsSection, setResultsSection] = useState(0)
    let [strokeResultData, setStrokeResultData] = useState([])
    let [hepatitisResultData, setHepatitisResultData] = useState([])

    useEffect(() => {
        axios
        .get(stroke_api)
        .then(result=>{
            setStrokeResultData(result.data)
        })
        .catch(error=>{
            console.log(error)
        })

        axios
        .get(hepatitis_api)
        .then(result=>{
            setHepatitisResultData(result.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, []);


    if(resultsSection == 0)
    {
        return (
        <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
          {strokeResultData.length > 0 ?<>
            <h1 class="text-3xl text-center font-bold text-black-500">Your Test Results:</h1>
            <div class="border-l-2 mt-10">
            {strokeResultData.map(result=>{
                    if(result.email == userEmail)
                    {
                        return (
                            <TestResult result={result} testNumber={strokeResultData.indexOf(result)+1}/>
                        )
                    }
                })}
            </div>
          </> : <h1 class="text-3xl text-center font-bold text-black-500">No Test Results To Be Viewed Yet.</h1>}
        </div>
        );
    }
    else if (resultsSection == 1)
    {
        return (
            <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
              {hepatitisResultData.length > 0 ?<>
                <h1 class="text-3xl text-center font-bold text-black-500">Your Test Results:</h1>
                <div class="border-l-2 mt-10">
                {hepatitisResultData.map(result=>{
                        if(result.email == userEmail)
                        {
                            return (
                                <TestResult result={result} testNumber={hepatitisResultData.indexOf(result)+1}/>
                            )
                        }
                    })}
                </div>
              </> : <h1 class="text-3xl text-center font-bold text-black-500">No Test Results To Be Viewed Yet.</h1>}
            </div>
            );
    }
}