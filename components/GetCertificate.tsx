"use client"
import { useDisabilityContext } from '@/context/DisabilityContext'
import React from 'react'

const GetCertificate = () => {
    const Data = useDisabilityContext()
    return (
        <div>
            {Data.disabilityTestDetails.hearingTest}
            {Data.disabilityTestDetails.speechTest}
        </div>
    )
}

export default GetCertificate