import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference}  whileDrag={{scale:1.25}} className='relative rounded-[50px] text-white font-TexGyreAdventor w-60 h-72 bg-amber-950 px-5 py-10 overflow-hidden'>
        <FaRegFileLines />
        <p className='text-sm mt-5 font-semibold leading tight'>{data.desc}</p>
        <div className='footer absolute w-full bottom-0 left-0'>
            <div className='flex justify-between mb-5 items-center py-3 px-8'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 flex justify-center rounded-full bg-zinc-600 items-center'>
                    {data.close? <IoClose />: <LuDownload size='.8em' color='#fff' />}
                </span>
            </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-4 flex justify-center items-center ${data.tag.tagColor === "Green"? "bg-green-400": "bg-blue-700"}`}>
                  <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>
                </div>
              )
            }
        </div>
    </motion.div>
    </>
  )
}

export default Card
