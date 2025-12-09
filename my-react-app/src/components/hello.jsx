// src/components/Hello.jsx

function Hello() {
   const role =16;
   let msg;
   
    if (role>=18){
      msg=<p>you can vote</p>
     }
      else{
        msg=<p>you can not vote</p>
      }

    return <div>{msg}</div>
}

export default Hello;
