import {useState,useEffect} from "react";

function posts(){
 const[posts ,setposts] = useState([])
 const[loading ,setloading]=useState(true)

 useEffect(() =>{
 const controller = new AbortController();
 fetch("https://jsonplaceholder.typicode.com/posts",{signal:controller.signal})
 .then((res) => res.json())
 .then((data) =>{setposts(data);setloading(false);})
 .catch((err)=>{
    if (err.name === "abortError"){
        console.log("fetch request ")
    }
    else{
        console.log(err);
    } 
 });
 return()=>{
    console.log("cleanup :abborting fetch....");
    controller.abort();
 };

 },[]);


 return(
<div>
    <h2>fectch data</h2>
    {loading && <p>loading..........</p>}
    {!loading && 
    posts.slice(0,1).map((post)=>(
        <p key={post.id}>* {post.title}</p>
    ))}
</div>
 );
}
export default posts;


