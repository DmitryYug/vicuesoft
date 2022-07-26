import React, {useEffect, useState} from "react";
import {AppApi} from "../../api/api";
import {BeerCardType} from "../../reducers/app-reducer";
import {useParams} from "react-router-dom";
import {Preloader} from "../../preloader/Preloader";
import style from './BeerProfile.module.css'


export const BeerProfile: React.FC = () => {

    let id = useParams().id

    let [card, setCard] = useState<BeerCardType>()

    useEffect(() => {
        if (id) {
            AppApi.getCurrentCardApi(id).then(res => {
                setCard(res[0])
            })
        }
    }, [])

    return (
        card
            ? <div className={style.profileContainer}>
                <div>
                    <img className={style.img} src={card.image_url} alt=""/>
                </div>
                <div>
                    <h1 className={style.header}>{card.name}</h1>
                    <h2 className={style.header}>{card.tagline}</h2>
                    <div className={style.subtitle}>ABV:{card.abv}</div>
                    <h3 className={style.subtitle}>{card.description}</h3>
                    <h3 className={style.subtitle}>Food Pairing:{card.food_pairing}</h3>
                </div>
            </div>
            : <Preloader/>
    )
}

