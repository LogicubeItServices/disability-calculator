export type getPationDataType = Partial<{

    hearing: {
        leftear: number,
        rightear: number,
        result: number
    },
    speech: {
        speechTest: number,
        voiceTest: number,
        result: number
    },
    language: {
        wabScore: number,
        result: number
    }

}>