export type BeerCardType = {
    id: string
    image_url: string
    name: string
    tagline: string
    description: string
    abv: string
    food_pairing: string[]
}

export type RootStateType = {
    beerCards: BeerCardType[]
    searchValue: string
    pageNumber: number
    isFetching: boolean
}
type SetProfileType = ReturnType<typeof setProfile>
type SetSearchValueType = ReturnType<typeof setSearchValue>
type SetPageNumberType = ReturnType<typeof setPageNumber>
type IsFetchingToggleType = ReturnType<typeof isFetchingToggle>
type AppReducerType = SetProfileType
    | SetSearchValueType
    | SetPageNumberType
    | IsFetchingToggleType

const initialState: RootStateType = {
    beerCards: [],
    searchValue: '',
    pageNumber: 1,
    isFetching: false
}

export const appReducer = (state = initialState, action: AppReducerType) => {
    switch (action.type) {
        case "SET-PROFILE":
            return {
                ...state,
                beerCards: action.beerCards
            }
        case "SET-SEARCH-VALUE":
            return {
                ...state,
                searchValue: action.value
            }
        case "SET-PAGE-NUMBER":
            return {
                ...state,
                pageNumber: action.value
            }
        case "SET-ISFETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setProfile = (beerCards: BeerCardType[]) => {
    return {
        type: 'SET-PROFILE',
        beerCards
    } as const
}
export const setSearchValue = (value: string) => {
    return {
        type: 'SET-SEARCH-VALUE',
        value
    } as const
}
export const setPageNumber = (value: number) => {
    return {
        type: 'SET-PAGE-NUMBER',
        value
    } as const
}
export const isFetchingToggle = (isFetching: boolean) => {
    return {
        type: 'SET-ISFETCHING',
        isFetching
    } as const
}

