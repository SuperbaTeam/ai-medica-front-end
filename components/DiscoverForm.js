
export default function DiscoverForm({ selectedDisease }) {


    if (selectedDisease==0) {
        return <h1>not Yet</h1>
        
    }else if(selectedDisease==1) {
        return <Stroke/>
        
    }else{
        return <h1>MUSAB Look >> Here You Can add your Component instance after defention below </h1>
    }

}

function Stroke() {
    return (
        <div className="md:grid md:grid-cols-1 md:gap-6 w-4/12 bg-clip-padding   rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 bg-white mt-32">

            <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6 ">
                        <div className="grid grid-cols-1 gap-6 ">
                            <div className="col-span-6 sm:col-span-5">
                                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input style={{ height: 50 }} type="text" name="name" id="name" className="
        mt-1
        focus: ring-indigo-500 focus: border-indigo-500
        block
        w-full
        shadow-sm
        sm: text-sm
        border-gray-300
y
        p-4
        rounded-md
        " />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input style={{ height: 50 }} type="text" name="email" id="email" className="
        mt-1
        focus: ring-indigo-500 focus: border-indigo-500
        block
        w-full
        shadow-sm
        sm: text-sm
        border-gray-300
        p-4
        rounded-md
        " />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                                <label for="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <input style={{ height: 50 }} type="text" name="mobile" id="mobile" className="
        mt-1
        focus: ring-indigo-500 focus: border-indigo-500
        block
        w-full
        shadow-sm
        sm: text-sm
        border-gray-300
        p-4
        rounded-md
        " />
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
                                    <input style={{ height: 50 }} type="text" name="age" id="age" className="
        mt-1
        focus: ring-indigo-500 focus: border-indigo-500
        block
        w-full
        shadow-sm
        sm: text-sm
        border-gray-300
        p-4
        rounded-md
        " />
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
                                    <input style={{ height: 50 }} type="text" name="bmi" id="bmi" className="
        mt-1
        focus: ring-indigo-500 focus: border-indigo-500
        block
        w-full
        shadow-sm
        sm: text-sm
        border-gray-300
        p-4
        rounded-md
        " />
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
                                    <input style={{ height: 50 }} type="text" name="avg_glucose_level" id="avg_glucose_level" className="
        mt-1
        focus: ring-indigo-500 focus: border-indigo-500
        block
        w-full
        shadow-sm
        sm: text-sm
        border-gray-300
        p-4
        rounded-md
        " />
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
                                            <input style={{ height: 50 }} type="radio" id="gender" name="gender" value="1" className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="gender" className="ml-3 block text-sm font-medium text-gray-700">
                                                Male
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="gender" name="gender" value="0" className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="gender" className="ml-3 block text-sm font-medium text-gray-700">
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
                                            <input style={{ height: 50 }} type="radio" id="residence_type" name="residence_type" value="1"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="residence_type" className="ml-3 block text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="residence_type" name="residence_type" value="0"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="residence_type" className="ml-3 block text-sm font-medium text-gray-700">
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
                                            <input style={{ height: 50 }} type="radio" id="ever_married" name="ever_married" value={1} className="
                        focus: ring-indigo-500
                        h-4
                        w-4
                        text-indigo-600
                        border-gray-300
                                    "/>
                                            <label for="ever_married" className="ml-3 block text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="ever_married" name="ever_married" value={0} className="
                        focus: ring-indigo-500
                        h-4
                        w-4
                        text-indigo-600
                        border-gray-300
                            " />
                                            <label for="ever_married" className="ml-3 block text-sm font-medium text-gray-700">
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
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value="1,0,0,0,0"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="work_type" className="ml-3 block text-sm font-medium text-gray-700">
                                                Goverment Job
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value="0,1,0,0,0"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="work_type" className="ml-3 block text-sm font-medium text-gray-700">
                                                Never Worked
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value="0,0,1,0,0"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="work_type" className="ml-3 block text-sm font-medium text-gray-700">
                                                Private
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value="0,0,0,1,0"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="work_type" className="ml-3 block text-sm font-medium text-gray-700">
                                                Self Employed
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="work_type" name="work_type" type="radio" value="0,0,0,0,1"
                                                className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="work_type" className="ml-3 block text-sm font-medium text-gray-700">
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
                                                value="1,0,0,0" className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="smoking_status" className="ml-3 block text-sm font-medium text-gray-700">
                                                Unknown
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="smoking_status" name="smoking_status" value="0,1,0,0"
                                                type="radio" className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="smoking_status" className="ml-3 block text-sm font-medium text-gray-700">
                                                Formerly Smoked
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="smoking_status" name="smoking_status" value="0,0,1,0"
                                                type="radio" className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="smoking_status" className="ml-3 block text-sm font-medium text-gray-700">
                                                Never smoked
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} id="smoking_status" name="smoking_status" type="radio"
                                                value="0,0,0,1" className="
        focus: ring-indigo-500
        h-4
        w-4
        text-indigo-600
        border-gray-300
        " />
                                            <label for="smoking_status" className="ml-3 block text-sm font-medium text-gray-700">
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
                                            <label for="hypertension" className="ml-3 block text-sm font-medium text-gray-700">
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
                                            <label for="hypertension-False" className="ml-3 block text-sm font-medium text-gray-700">
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
                                            <input style={{ height: 50 }} type="radio" id="heart_disease" name="heart_disease" value={1} className="
                            focus: ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
            " />
                                            <label for="heart_disease" className="ml-3 block text-sm font-medium text-gray-700">
                                                True
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input style={{ height: 50 }} type="radio" id="heart_disease" name="heart_disease" value={0} className="
                            focus: ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
            " />
                                            <label for="heart_disease" className="ml-3 block text-sm font-medium text-gray-700">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="
        col-span-32
        sm:col-span-6

        bg-gray-50
        text-center
        sm:px-6
      ">
                                <button type="submit" className="

            justify-around
          py-2
          px-4
          w-3/4
          border border-transparent
          shadow-sm
          text-sm
          font-medium
          p-4
          rounded-md
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        ">
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