import {useState , useCallback} from 'react';
function Memo(){
    const[num, setNum] = useState(0);
    
    const handleClick = useCallback(()=> {
        console.log("child button clickd");
    },[]);

    
return(
 <div>
<h1> result:{num}</h1>

<button onClick={()=> setNum(num+1)}> increace </button>
<ChildComponenet onClick={handleClick} />
 </div>
);
}
function ChildComponenet({onClick}){
    console.log("child rendered ONLY")
    return<button onClick={onClick}> cild component </button>
}

export default Memo;