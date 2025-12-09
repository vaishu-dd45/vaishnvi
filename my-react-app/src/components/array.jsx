import React from 'react';
import {useState,useEffect} from "react";

function Array(){
const [ count ,setCount] =useState(0);
const [ name ,setName] =useState("");

useEffect(() =>{
    console.log("render hotoy")
});

useEffect(() =>{
    console.log("fkt ekdach honara")
},[]);

useEffect(()=>{
    console.log("count changed :" ,count)
    console.log("name changed :" ,name)
},[count,name]);



return(
    <>
    <button onClick={() => setCount(count + 1)}> count :{count}</button>
    <input value={name}
    onChange = {(e) => setName(e.target.value)}/>
    </>
);

}
export default Array;