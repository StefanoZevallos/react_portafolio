import React from 'react'
import Slider from "@/app/components/Slider"
import {data} from '@/app/data/data.json'
const page = () => {
  return (
    <div className='h-[500px] w-[100%] bg-red-400'>
    <Slider data={data}></Slider>
    </div>
  )
}

export default page