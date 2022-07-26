import React from 'react'
import {SearchForm} from "../search-panel/SearchForm";
import {MyPagination} from "../pagination/Pagination";
import {BerrCard} from "../beer-card/BerrCard";
import {Preloader} from "../preloader/Preloader";
import {BeerCardType} from "../../reducers/app-reducer";
import style from './StartPage.module.css'

type StartPagePropsType = {
    beerCards: BeerCardType[]
    searchValue: string
    pageNumber: number
    isFetching: boolean
    onChangePage: (value: number) => void
    onChangeSearchInput: (value: string) => void
}


export const StartPage: React.FC<StartPagePropsType> = (props) => {

    const beerCardsToRender = props.beerCards.map(card =>
        <BerrCard key={card.id} card={card}/>)

    const isFetchingCheck = props.isFetching ? <Preloader/> : beerCardsToRender
    const searchMatchCheck = props.beerCards.length === 0
        ? <h2>No matches</h2>
        : isFetchingCheck
    const paginationDisabled: boolean = props.isFetching || props.searchValue ? true : false

    return (
        <div>
            <SearchForm
                value={props.searchValue}
                labelText={'search by name'}
                onChangeCallback={props.onChangeSearchInput}
            />
            <MyPagination
                disabled={paginationDisabled}
                pageNumber={props.pageNumber}
                onChangePage={props.onChangePage}
            />
            <div className={style.cardContainer}>
                {searchMatchCheck}
            </div>
            <MyPagination
                disabled={paginationDisabled}
                pageNumber={props.pageNumber}
                onChangePage={props.onChangePage}
            />
        </div>
    )
}