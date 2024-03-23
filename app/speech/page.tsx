import SpeechForm from '@/components/SpeechForm'
import { DisabilityContextProvider } from '@/context/DisabilityContext'
import React from 'react'

const page = () => {
  return (
    <DisabilityContextProvider>
      <SpeechForm />
    </DisabilityContextProvider>
  )
}

export default page