import HearingForm from '@/components/HearingForm'
import { DisabilityContextProvider } from '@/context/DisabilityContext'
import React from 'react'

const page = () => {
  return (
    <DisabilityContextProvider>
      <HearingForm />
    </DisabilityContextProvider>
  )
}

export default page