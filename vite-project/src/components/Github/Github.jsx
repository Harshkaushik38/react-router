
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
   const data = useLoaderData()
//   useEffect(()=>{
//   fetch('https://api.github.com/users/harshkaushik38')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     setData(data)
//   })
  


//   },[])


 return(
    <div className="text-center m-5 bg-gray-700 text-white p-4 text-3xl">GitHub followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300} className="text-center" />

    
    </div>
 )
}


export default GitHub;


export const githubInfoLoader = async ()=>{
    const response = await fetch ('https://api.github.com/users/harshkaushik38')
    return response.json()
}