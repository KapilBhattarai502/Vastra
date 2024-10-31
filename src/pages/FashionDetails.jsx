import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import api from "../Config/Api";
import CircleProgress from "../components/CircularProgress";

const initialState = {
  data: [],
  loading: null,
  success: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };

    case "success":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };

    case "error":
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
        success: false,
      };

      default:
        return initialState
  }
}

const FashionDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      dispatch({ type: "loading" });
      try {
        const { data } = await api.get(`/api/products/id/${id}`);
        dispatch({ type: "success", payload: data });
        console.log(data);
      } catch (error) {
        dispatch({ type: "error" });
      }
    })();
  }, []);

  if (state.loading) {
    return (
      <div className=" h-lvh w-lvh flex justify-center items-center">
        <CircleProgress />
      </div>
    );
  }
  return (
    <div className="mt-20 grid grid-cols-2 p-4 gap-28">
      {/* image */}
      <div>
        <img
          src="https://static.wixstatic.com/media/563de8_0f97ae028ecc464fb140f79418afedab~mv2.jpg/v1/fill/w_940,h_1201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/file.jpg"
          className="object-cover h-full w-full"
        />
      </div>
      {/* content */}
      <div>
        <h1 className="font-semibold opacity-65">{state.data?.title}</h1>
        <h1 className="font-semibold opacity-65 mt-2">
          Brand:{state.data?.brand}
        </h1>

        <p className=" font-light opacity-80">{state.data?.description}</p>

        <p className=" mt-4 font-light opacity-80">Fabric:100% cotton</p>
        <p className=" font-light opacity-80">Fit:Body fit</p>
        <p className=" font-light opacity-80">Made in Nepal</p>
        <p className=" font-light opacity-80">
          Wash Care: wash with Cold water & gentle wash
        </p>
    
      </div>
    </div>
  );
};

export default FashionDetails;
