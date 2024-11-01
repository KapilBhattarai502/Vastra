import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import api from "../Config/Api";
import CircleProgress from "../components/CircularProgress";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const initialState = {
  data: [],
  loading: null,
  success: null,
  error: null,
  quantity: 1,
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
        error: true,
      };
    case "increaseQuantity":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "decreaseQuantity":
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return initialState;
  }
}

const FashionDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state is", state);

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
  console.log(state.quantity);

  if (state.loading) {
    return (
      <div className=" h-lvh w-lvh flex justify-center items-center">
        <CircleProgress />
      </div>
    );
  }
  const handleChange = () => {};
  return (
    <div className="mt-20 grid grid-cols-2 p-4 gap-28">
      {/* image */}
      <div>
        <img
        src={state.data?.imageUrl}
          // src="https://static.wixstatic.com/media/563de8_0f97ae028ecc464fb140f79418afedab~mv2.jpg/v1/fill/w_940,h_1201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/file.jpg"
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
        <p className=" opacity-80 mt-10 font-bold">
          Rs {state.data?.discountedPrice}
        </p>
        <p className="font-thin line-through">Rs {state.data?.price}</p>

        <button className="font-thin  mt-10 border border-slate-500 py-2 px-20">
          ADD TO CART{" "}
        </button>
        <br />
        <div className="mt-2">
          <div>
            <label for="cars">Size:</label>
            <select
              name="cars"
              id="cars"
              className="px-10 py-2 opacity-60 text-sm font-light"
            >
              <option className=" opacity-60 text-sm font-light">
                Select Size
              </option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
            <div className="flex gap-7 mt-2">
              <p>Colors:</p>
              <span className="opacity-60 text-sm items-center">
                {state.data?.color}
              </span>
            </div>
            <div className="flex gap-4 mt-4 items-center">
              <p>Quantity:</p>
              <div className="flex gap-2 items-center">

                <button disabled={state.quantity===1}  onClick={()=>{dispatch({type:'decreaseQuantity'})}}><RemoveCircleIcon sx={state.quantity===1?{color:"#bbb7b6"}:null}/></button>
                <span className="opacity-60 text-sm">{state.quantity}</span>
                <button  onClick={()=>{dispatch({type:'increaseQuantity'})}}><AddCircleIcon /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionDetails;
