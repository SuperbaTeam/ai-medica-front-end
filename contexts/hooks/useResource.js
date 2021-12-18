import axios from "axios";
import useSWR from "swr";
import { useAuth } from "../auth";
const stroke_url = process.env.NEXT_PUBLIC_API_URL_1;
const hepatitis_url = process.env.NEXT_PUBLIC_API_URL_2;
const cancer_url = process.env.NEXT_PUBLIC_API_URL_3;

export default function useResource() {
  const { tokens, logout } = useAuth();
  if (typeof window !== "undefined") {
    tokens = JSON.parse(localStorage.getItem("Tokens"));
  }
  const { stroke_data, error1 } = useSWR([stroke_url, tokens], fetchResource);
  const { hepatitis_data, error2 } = useSWR(
    [hepatitis_url, tokens],
    fetchResource
  );
  const { cancer_data, error3 } = useSWR([cancer_url, tokens], fetchResource);

  async function fetchResource(url) {
    if (!tokens) {
      return;
    }

    try {
      const response = await axios.get(customURL, config());
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  async function createResource(info, customURL) {
    try {
      await axios.post(customURL, info, config());
    } catch (error) {
      handleError(error);
    }
  }

  // async function deleteResource(id) {

  //     try {
  //         const url = apiUrl + id;
  //         await axios.delete(url, config());
  //
  //     } catch (error) {
  //         handleError(error);
  //     }
  // }

  // async function updateResource() {
  //     // STRETCH
  //     // Add ability for user to update an existing resource
  // }

  function config() {
    return {
      headers: {
        Authorization: "Bearer " + tokens.access,
      },
    };
  }

  function handleError(error) {
    console.error(error);
  }

  return {
    stroke_resources: stroke_data,
    hepatitis_resources: hepatitis_data,
    cancer_resources: cancer_data,
    error1,
    error2,
    error3,
    loading:
      (tokens && !error1) ||
      (!error1 && !stroke_data) ||
      (!error2 && !hepatitis_data) ||
      (!error3 && !cancer_data),
    createResource,
    // deleteResource,
    // updateResource,
  };
}
