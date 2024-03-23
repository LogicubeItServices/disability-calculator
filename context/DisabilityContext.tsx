'use client'
import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from 'react'

type disabilityTestDetails = Partial<{
    hearingTest: number
    speechTest: number
    languageTest: number
}>

type DisabilityContextType = {
    disabilityTestDetails: disabilityTestDetails
    setDisabilityTestDetails: Dispatch<SetStateAction<disabilityTestDetails>>
}
const DisabilityContext = createContext<DisabilityContextType | null>(null)

export const DisabilityContextProvider = ({
    children
}: {
    children: ReactNode
}) => {
    const [disabilityTestDetails, setDisabilityTestDetails] =
        useState<disabilityTestDetails>({
            hearingTest: 0,
            languageTest: 0,
            speechTest: 0
        })

    return (
        <DisabilityContext.Provider
            value={{
                disabilityTestDetails,
                setDisabilityTestDetails,
            }}
        >
            {children}
        </DisabilityContext.Provider>
    )
}
export const useDisabilityContext = (): DisabilityContextType => {
    const context = useContext(DisabilityContext)
    if (context === undefined) {
        throw new Error(
            'useDisabilityContext must be used within a DisabilityContextProvider'
        )
    }
    if (context === null) {
        throw new Error('DisabilityContext is null')
    }
    return context


}
