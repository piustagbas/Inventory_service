import React from 'react'
import a from "../assets/792-7926621_eyewash-1724-kb-eye-wash-symbol-dwg.png"
import b from "../assets/4-48170_love-heart-png-image-pngpix-love-clipart.png"
import c from "../assets/111-1118747_directions-comments-google-maps-directions-icon.png"
import d from "../assets/40-407701_open-strong-arm-emoji-png.png"
import e from "../assets/354-3548424_capsule-png-capsule-clipart-png.png"
import f from "../assets/124-1249458_definition-von-innovation-easy-definition-of-innovation-innovation.png"
import g from "../assets/272-2725652_vision-mission-values-business-vision-icon-png.png"
import h from "../assets/351-3519695_castle-rock-pharmacy-mortar-and-pestle-pharmacy.png"



const Values = () => {

    const techs = [
        {
            id: 1,
            src: a,
            title: 'focus',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: b,
            title: 'love',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: c,
            title: 'intentional',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: d,
            title: 'rescilince',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: h,
            title: 'practitioners',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: e,
            title: 'innovative',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: f,
            title: 'brilliant',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: g,
            title: 'achievers',
            style: 'shadow-gray-400'
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b
    from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 
                border-gray-500 p-2 inline'>
                    Values
                    </p>
                <p className='py-6'>These are our values</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 
            gap-8 text-center py-8 px-12 sm:px-0'> 

                {
                    techs.map(({id, src, title, style}) => (
                        <div
                            key={id}
                        className='shadow-md hover:scale-105 duration-500
                            py-2 rounded-lg'>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Values