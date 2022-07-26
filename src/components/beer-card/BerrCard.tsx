import React from 'react'
import {BeerCardType} from "../../reducers/app-reducer";
import {Button, Paper} from '@mui/material'
import {Link} from "react-router-dom";
import noImage from '../../assets/137351.png'
import styles from './BeerCard.module.css'

type BeerCardPropsType = {
    card: BeerCardType
}

export const BerrCard: React.FC<BeerCardPropsType> = ({card}) => {

    const cardDescriptionLengthCheck = card.description.length < 140
        ? card.description.slice(0, 140)
        : `${card.description.slice(0, 140)}...`

    return (
        <Paper className={styles.itemCardContainer} elevation={10}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.cardImage}
                         src={card.image_url ? card.image_url : noImage}
                         alt={card.name}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{card.name}</h2>
                    <h3 className={styles.subtitle}>
                        {cardDescriptionLengthCheck}
                    </h3>
                </div>
            </div>
            <Link to={`/profile/${card.id}`} className={styles.card}>
                <Button size="small">Learn More</Button>
            </Link>
        </Paper>
    )
}