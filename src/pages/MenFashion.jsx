import React, { useEffect, useReducer } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import api from "../Config/Api";
import FashionCard from "../components/FashionCard";
import CircleProgress from "../components/CircularProgress";


const initialState={
  data:[],
  loading:null,
  success:null,
  error:null
}

function reducer(state,action){

  switch(action.type){
    case 'loading':
    return {...initialState,loading:true}

    case 'success':
      return {...initialState,loading:false,error:false,data:action.payload}

    case 'error':
      return {...initialState,loading:false,error:true,data:[],success:false}
  }

}

const MenFashion = () => {
  const [sortBy, setSortBy] = React.useState("");
 
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
 
  const [state,dispatch]=useReducer(reducer,initialState);

  useEffect(()=>{

   (async()=>{

    dispatch({type:'loading'});
    try {
      const {data}=await api.get("/api/products");
      dispatch({type:'success',payload:data.content})
      
    } catch (error) {
      dispatch({type:'error'})
      
    }

   
   })()



  },[])

  console.log(state.data);

  return (

    <div className="mt-18">
      <div className="h-[40rem]">
        <img
          src="https://images.unsplash.com/photo-1676145643391-82c6ba5a4ed3?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="px-10 py-12">
        <div className=" grid grid-cols-4 gap-4">
          {/* Filter Component */}
          <div className="">
            <h4 className="mb-2">Filter by</h4>
            <hr />
          </div>
          <div className="col-span-3">
            <div className="flex flex-row-reverse">
              <div className="w-[12rem]">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    label="SortBy"
                    onChange={handleChange}
                  > 
                    
                    <MenuItem value={10}>Sort by</MenuItem>
                    <MenuItem value={20}>Price (low to high)</MenuItem>
                    <MenuItem value={30}>Price (high to low)</MenuItem>
                  </Select>
                </FormControl>
               
                
              </div>
            </div>
            <div className="grid grid-cols-3 mt-2 gap-1">
           {state.data.length>0 ? state.data.map(product=><FashionCard key={product._id} product={product}/>):<div className="flex justify-center"><CircleProgress/></div>}
                  
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenFashion;
