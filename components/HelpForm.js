import { useState } from "react";
import React from "react";
import useResource from "../contexts/hooks/useResource";
const cancer_url = process.env.NEXT_PUBLIC_RESOURCE_URL_3;

export default function HelpForm() {
  const { createResource, resources } = useResource();
  // const [Data, setData] = React.useState();
  const dataHandler = async (event) => {
    event.preventDefault();

    const cancer = {
      name: event.target.name.value,
      email: event.target.email.value,
      age: event.target.age.value,
      texture_mean: event.target.texture_mean.value,
      area_mean: event.target.area_mean.value,
      smoothness_mean: event.target.smoothness_mean.value,
      compactness_mean: event.target.compactness_mean.value,
      concavity_mean: event.target.concavity_mean.value,
      concave_points_mean: event.target.concave_points_mean.value,
      state: event.target.state.value,
    };
    // const cancer = {
    //   name: "jehad",
    //   email: "test@test.com",
    //   age: "24",
    //   texture_mean: "1.0",
    //   area_mean: "1.0",
    //   smoothness_mean: "1.0",
    //   compactness_mean: "1.0",
    //   concavity_mean: "1.0",
    //   concave_points_mean: "1.0",
    //   state: "1.0",
    // };
    await createResource(cancer, cancer_url);
    // event.target.reset();
  };
  return (
    <>
      <div className="w-6/12 mt-32 bg-white border-b border-gray-200 md:grid md:grid-cols-1 md:gap-6 bg-clip-padding rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30">
        <form action="/help_others" onSubmit={dataHandler}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="px-4 py-5 sm:p-6 ">
              <div className="grid grid-cols-1 gap-6 ">
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="name"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is your name?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="email"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is your E-mail?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="age"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is your age?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="number"
                    name="age"
                    id="age"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="texture_mean"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the texture mean value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="texture_mean"
                    id="texture_mean"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm: y"
                  />
                </div>

                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="area_mean"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the area mean value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="area_mean"
                    id="area_mean"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>

                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="smoothness_mean"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the smoothness mean value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="smoothness_mean"
                    id="smoothness_mean"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="compactness_mean"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the compactness mean value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="compactness_mean"
                    id="compactness_mean"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="concavity_mean"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the concavity mean value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="concavity_mean"
                    id="concavity_mean"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="concave_points_mean"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the concave points mean value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="concave_points_mean"
                    id="concave_points_mean"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>
                <div className="col-span-6 sm:col-span-5">
                  <label
                    for="state"
                    className="block text-xl font-medium text-gray-700"
                  >
                    What is the state value?
                  </label>
                  <input
                    style={{ height: 50 }}
                    type="float"
                    name="state"
                    id="state"
                    className="block w-full p-4 mt-1 text-xl border-gray-300 border-indigo-500 rounded-md shadow-sm focus: ring-indigo-500 sm:"
                  />
                </div>

                <div className="text-center col-span-32 sm:col-span-6 bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="justify-around w-3/4 p-4 px-4 py-2 text-xl font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
