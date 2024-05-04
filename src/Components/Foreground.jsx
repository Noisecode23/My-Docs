import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "I work hard to become full stack web developer.",
      fileSize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "Green"}
    },
    {
      desc: "Do your work daily.",
      fileSize: ".5mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "red"}
    },
    {
      desc: "New Ai tools lists.",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "Green"}
    },
  ]
  return (
    <>
    <div ref={ref} className='w-full z-[3]  h-full fixed flex top-0 left-0 flex-wrap gap-5 p-5'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
    </>
  )
}

export default Foreground
