import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type propsTypes = {
    icon: string
    title: string
    progressLineCN?: string
    href: string
}

const StepProgressBarUnit = (props:propsTypes) => {
  return (
    <Link href={props.href} className='flex flex-col gap-1'>
        <div className='flex gap-2 items-center'>
            <div className='text-white bg-black p-1  rounded-full '> <Image className='invert' src={props.icon} alt='icon' width={30} height={30}/> </div>
            <p className='text-white'>{props.title}</p>
        </div>
        <div className={`w-[0.5rem] h-[5rem] bg-black rounded-full ml-[0.95rem] ${props.progressLineCN}`}></div>
    </Link>
  )
}

export default StepProgressBarUnit