import React, { useEffect, useState } from 'react'
import HeroImage from "../assets/portfolio/IMG_20180118_123603.jpg"
import warningImage from "../assets/portfolio/istockphoto-894875516-612x612.jpg"
import { useNavigate } from 'react-router-dom'
import {auth, provider} from "../googleSignin/config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const User = () => {
    const navigate = useNavigate()
    const [loginUser, setLoginUser] = useState({})
    const [loading, setLoading] = useState(false)

  

    const handleClick = async() => {
        try{
            await signInWithPopup(auth, provider)
            navigate("/user")
        }catch(error){
            console.log(error);
        }
    }




    const logout = () => {
        localStorage.clear()
        window.location.href="/"
    }

    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            setLoading(false)
            setLoginUser(user)
        })

    
    }, [loginUser])
    

  return (
  <div>
     {!loginUser ? <div name="user" 
    className='h-screen w-full bg-gradient-to-b 
    from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-7xl font-bold 
                text-white">
                    You're not a user yet please login
                </h2>
                 <p className='text-gray-500 py-4 max-w-md'>
                 Xcene Research is a leading Contract Research Organization 
                 (CRO) providing full-service and support to pharmaceutical, 
                 biotechnology, and medical device companies, as well as 
                 academic research institutions across Sub- Saharan Africa.
                 </p>

                 <p className='text-gray-500 py-4 max-w-md'>
                 We specialize in management, execution, and analysis of 
                 Phase I-IV clinical trials, ranging from small trials to 
                 complex multi-national trials. We strive to change the 
                 landscape of global clinical trials on the continent 
                 of Africa by placing emphasis on productivity and development.
                 </p>
                <div>
                <button
                    className='group text-white w-fit px-6 py-3 
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer' 
                    onClick={handleClick}>Sigin With Google</button>
                </div>
            </div>

            <div>
                <img src={warningImage} alt="my profile" 
                className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>

    </div> : <div name="user" 
    className='h-screen w-full bg-gradient-to-b 
    from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-7xl font-bold 
                text-white">
                    I'm a User and I love Medics
                </h2>
                 <p className='text-gray-500 py-4 max-w-md'>
                 Xcene Research is a leading Contract Research Organization 
                 (CRO) providing full-service and support to pharmaceutical, 
                 biotechnology, and medical device companies, as well as 
                 academic research institutions across Sub- Saharan Africa.
                 </p>

                 <p className='text-gray-500 py-4 max-w-md'>
                 We specialize in management, execution, and analysis of 
                 Phase I-IV clinical trials, ranging from small trials to 
                 complex multi-national trials. We strive to change the 
                 landscape of global clinical trials on the continent 
                 of Africa by placing emphasis on productivity and development.
                 </p>
                <div>
                    <button 
                    className='group text-white w-fit px-6 py-3 
                    my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer' onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" 
                className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>

    </div>}
    </div>
  )
}

export default User 

