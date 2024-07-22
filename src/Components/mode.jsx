import { useState} from "react";
import './mode.css'
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../store/modeSlice";


function Mode(){
  
  const dispatch=useDispatch()
  const modeActive=useSelector((store)=>store.mode)
  
    const [toggle,setToggle]=useState(true)
    const [active,setActive]=useState("-light-mode");
  
    const handleMode=()=>{
      setToggle(!toggle)
      if(toggle){
        dispatch(modeActions.light())
            setActive("-"+modeActive.mode)
          }
          else{
            dispatch(modeActions.dark())
            setActive("-"+modeActive.mode)
          }
    }


    return (
        <>
         <div className="mode">
                  <div onClick={handleMode} className={"model"+active}></div>
                  <div onClick={handleMode} className={"moded"+active}></div>
                </div>
        </>
    )
}


export default Mode
