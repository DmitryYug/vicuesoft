import React, {useEffect} from 'react';
import './App.css';
import {AppApi} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    BeerCardType,
    isFetchingToggle,
    setPageNumber,
    setProfile,
    setSearchValue
} from "./reducers/app-reducer";
import {Route, Routes} from "react-router-dom";
import {StartPage} from "./components/start-page/StartPage";
import {BeerProfile} from "./components/beer-profile/BeerProfile";
import styles from "./App.module.css";


function App() {


    const beerCards = useSelector<AppRootStateType, BeerCardType[]>(state => state.appReducer.beerCards)
    const searchValue = useSelector<AppRootStateType, string>(state => state.appReducer.searchValue)
    const pageNumber = useSelector<AppRootStateType, number>(state => state.appReducer.pageNumber)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.appReducer.isFetching)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(isFetchingToggle(true))
        AppApi.getBeerCardsApi(pageNumber).then(beerCards => {
            dispatch(setProfile(beerCards))
            dispatch(isFetchingToggle(false))
        })
    }, [pageNumber, searchValue])
    useEffect(() => {
        if (searchValue) {
            AppApi.getBeersByName(searchValue).then(beerCards => dispatch(setProfile(beerCards)))
        }
    }, [searchValue])


    const onChangeSearchInput = (value: string) => {
        dispatch(setSearchValue(value))
    }
    const onChangePage = (value: number) => {
        dispatch(isFetchingToggle(true))
        dispatch(setPageNumber(value))
    }

    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={
                    <StartPage
                        beerCards={beerCards}
                        searchValue={searchValue}
                        pageNumber={pageNumber}
                        isFetching={isFetching}
                        onChangeSearchInput={onChangeSearchInput}
                        onChangePage={onChangePage}
                    />
                }/>
                <Route path='/profile/:id' element={<BeerProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
