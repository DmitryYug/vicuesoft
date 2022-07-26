import {Pagination} from "@mui/material"
import React from "react"
import style from './Pagination.module.css'

type MyPaginationPropsType = {
    pageNumber: number
    disabled: boolean
    onChangePage: (value: number) => void
}

export const MyPagination = (props: MyPaginationPropsType) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.onChangePage(value)
    };

    let totalPages = Math.ceil(325 / 20)

    return (
        <div className={style.paginationContainer}>
            <Pagination
                size="large"
                disabled={props.disabled}
                count={totalPages}
                page={props.pageNumber}
                onChange={handleChange}
            />
        </div>
    )
}