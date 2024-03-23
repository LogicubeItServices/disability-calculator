import React from 'react'
import StepProgressBarUnit from './StepProgressBarUnit'

const StepProgressBar = () => {
    const DataOfSPB = [
        {
            id: 1,
            icon: '/static/SVGs/ear-svgrepo-com.svg',
            name: 'Hearing'
        },
        {
            id: 2,
            icon: '/static/SVGs/voice-svgrepo-com.svg',
            name: 'Speech'
        },
        {
            id: 3,
            icon: '/static/SVGs/language-svgrepo-com.svg',
            name: 'Language',
            href: '/'
        }
    ]
  return (
    <div className='flex flex-col gap-1'>
        {
            DataOfSPB.map((e,i)=>(
                <div key={i} className=''>
                <StepProgressBarUnit icon={e.icon} title={e.name}  progressLineCN={`${e.id === DataOfSPB.length? "h-0 w-0" : ""}`}/>
                </div>
            ))
        }
    </div>
  )
}

export default StepProgressBar