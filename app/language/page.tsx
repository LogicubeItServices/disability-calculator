import LanguageForm from '@/components/LanguageForm'
import { DisabilityContextProvider } from '@/context/DisabilityContext'
import React from 'react'

const page = () => {
  return (
    <DisabilityContextProvider>
      <LanguageForm />
    </DisabilityContextProvider>
  )
}

export default page