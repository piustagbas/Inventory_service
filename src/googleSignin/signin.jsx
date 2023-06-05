// import React, { useEffect, useState } from "react";
// import {auth} from "./config";
// import { signInWithPopup } from "firebase/auth";
// import User from "../components/User";


// function signin(){
//     const [value, setValue] = useState('')
//     const handleClick = () => {
//         signInWithPopup(auth, provider).then((data) => {
//             setValue(data.user.email)
//             localStorage.setItem("email", data.user.email)
//         })
//     } 

//     useEffect(() => {
//         setValue(localStorage.getItem('email'))
//     })

//     return (
//         <div>
//             {value?<User /> :
//             <button onClick={handleClick}>Sigin With Google</button>
// }
//         </div>
//     )
// }
// export default signin;