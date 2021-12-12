
export default function DiscoverForm({ selectedDisease, deleteResource, createResource }) {
    const handleStrokeDetection = (event) => {
        event.preventDefault()
        const standInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            mobile: event.target.mobile.value,
            age: event.target.age.value,
            bmi: event.target.bmi.value,
            avg_glucose_level: event.target.avg_glucose_level.value,
            residence_type: event.target.residence_type.value,
            gender: event.target.gender.value,
            ever_married: event.target.ever_married.value,
            work_type: event.target.work_type.value,
            smoking_status: event.target.smoking_status.value,
            hypertension: event.target.hypertension.value,
            heart_disease: event.target.heart_disease.value
        }
        console.log(standInfo)
        createResource(standInfo)
        // event.target.reset();
    }

    if (selectedDisease == 0) {
        return <h1>not Yet</h1>

    } else if (selectedDisease == 1) {
        return <Stroke handleStrokeDetection={handleStrokeDetection} />

    } else {
        return <h1>MUSAB Look >> Here You Can add your Component instance after defention below </h1>
    }

}

function Stroke({ handleStrokeDetection }) {
    return (
        <div className="w-4/12 mt-32 bg-white border-b border-gray-200 md:grid md:grid-cols-1 md:gap-6 bg-clip-padding rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30">

            <form action="/discover" onSubmit={handleStrokeDetection}>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6 ">
                        <div className="grid grid-cols-1 gap-6 ">
                            <div className="col-span-6 sm:col-span-5">
                                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input style={{ height: 50 }} type="text" name="name" id="name" className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y" />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input style={{ height: 50 }} type="text" name="email" id="email" className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:" />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <label for="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <input style={{ height: 50 }} type="text" name="mobile" id="mobile" className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:" />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <div>
                                    <legend className="text-base font-medium text-gray-900">
                                        What is Your Age?
                                    </legend>
                                    <p className="text-sm text-gray-500">Type Your Age: </p>
                                </div>
                                <div className="col-span-6 sm:col-span-5">
                                    <label for="age" className="block text-sm font-medium text-gray-700">Age</label>
                                    <input style={{ height: 50 }} type="text" name="age" id="age" className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:" />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <div>
                                    <legend className="text-base font-medium text-gray-900">
                                        What is Your Body Mass Index?
                                    </legend>
                                    <p className="text-sm text-gray-500">Type Your BMI: </p>
                                </div>
                                <div className="col-span-6 sm:col-span-5">
                                    <label for="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                                    <input style={{ height: 50 }} type="text" name="bmi" id="bmi" className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:" />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <div>
                                    <legend className="text-base font-medium text-gray-900">
                                        What is avgarage glucose level?
                                    </legend>
                                    <p className="text-sm text-gray-500">
                                        Type your avgarage glucose level:
                                    </p>
                                </div>
                                <div className="col-span-6 sm:col-span-5">
                                    <label for="avg_glucose_level" className="block text-sm font-medium text-gray-700">Avarage
                                        Glucose</label>
                                    <input style={{ height: 50 }} type="text" name="avg_glucose_level" id="avg_glucose_level" className="block w-full p-4 mt-1 text-sm border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:" />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            What is Your Gender?
                                        </legend>
                                        <p className="text-sm text-gray-500">Choose Your Gender: </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="gender" name="gender" value={1} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="gender" className="block ml-3 text-sm font-medium text-gray-700">
                                                Male
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="gender" name="gender" value={0} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="gender" className="block ml-3 text-sm font-medium text-gray-700">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            Do You have permanent residence type?
                                        </legend>
                                        <p className="text-sm text-gray-500">
                                            Answer by the following choices:
                                        </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="residence_type" name="residence_type" value={1}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="residence_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="residence_type" name="residence_type" value={0}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="residence_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            I have ever married Before..?
                                        </legend>
                                        <p className="text-sm text-gray-500">
                                            Answer by the following choices:
                                        </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="ever_married" name="ever_married" value={1} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="ever_married" className="block ml-3 text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="ever_married" name="ever_married" value={0} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="ever_married" className="block ml-3 text-sm font-medium text-gray-700">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            What is the type of your work?
                                        </legend>
                                        <p className="text-sm text-gray-500">
                                            Answer by the following choices:
                                        </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value={"1, 0, 0, 0, 0"}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="work_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                Goverment Job
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value={"0, 1, 0, 0, 0"}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="work_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                Never Worked
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value={"0, 0, 1, 0, 0"}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="work_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                Private
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value={"0, 0, 0, 1, 0"}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="work_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                Self Employed
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value={"0, 0, 0, 0, 1"}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="work_type" className="block ml-3 text-sm font-medium text-gray-700">
                                                No work I have Children
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            Do I smoke?
                                        </legend>
                                        <p className="text-sm text-gray-500">
                                            Answer by the following choices:
                                        </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input type="radio" style={{ height: 50 }} id="smoking_status" name="smoking_status"
                                                value={"1, 0, 0, 0"} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="smoking_status" className="block ml-3 text-sm font-medium text-gray-700">
                                                Unknown
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="smoking_status" name="smoking_status" value={"0, 1, 0, 0"}
                                                type="radio" className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="smoking_status" className="block ml-3 text-sm font-medium text-gray-700">
                                                Formerly Smoked
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="smoking_status" name="smoking_status" value={"0, 0, 1, 0"}
                                                type="radio" className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="smoking_status" className="block ml-3 text-sm font-medium text-gray-700">
                                                Never smoked
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="smoking_status" name="smoking_status" type="radio"
                                                value={"0, 0, 0, 1"} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="smoking_status" className="block ml-3 text-sm font-medium text-gray-700">
                                                Smokes
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            I have a hypertension?
                                        </legend>
                                        <p className="text-sm text-gray-500">
                                            Answer by the following:
                                        </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="hypertension" name="hypertension" value={1} class="
                            focus: ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
            " />
                                            <label for="hypertension" className="block ml-3 text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="hypertension" name="hypertension" value={0} class="
                            focus: ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
            " />
                                            <label for="hypertension-False" className="block ml-3 text-sm font-medium text-gray-700">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <fieldset>
                                    <div>
                                        <legend className="text-base font-medium text-gray-900">
                                            I have a Heart Disease?
                                        </legend>
                                        <p className="text-sm text-gray-500">
                                            Answer by the following:
                                        </p>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="heart_disease" name="heart_disease" value={1} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="heart_disease" className="block ml-3 text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="heart_disease" name="heart_disease" value={0} className="w-4 h-4 text-indigo-600 border-gray-300 focus: ring-indigo-500" />
                                            <label for="heart_disease" className="block ml-3 text-sm font-medium text-gray-700">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="text-center col-span-32 sm:col-span-6 bg-gray-50 sm:px-6">
                                <button type="submit" className="justify-around w-3/4 p-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>




        </div>
    );
}