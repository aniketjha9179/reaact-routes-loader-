import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data =useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/aniketjha9179")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className=" text-center m-4 bg-gray-400 text-3xl text-white">
      <div>
        github name:{data.name}
        <img
          className=" rounded-2xl justify-center flex mx-5"
          src={data.avatar_url}
          alt="Github profile"
          width={200}
        />
        <div>github followers:{data.followers}</div>
      </div>
    </div>
  );
}


export default Github;


export const githubInfoLoader= async ()=>{
   const response = await fetch('https://api.github.com/users/aniketjha9179')
    return response.json()

}