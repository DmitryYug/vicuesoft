import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import React from 'react'

type BeerCardPropsType = {
    header: string
}

export const BeerCard: React.FC<BeerCardPropsType> = ({
    header
                                                      }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt={header}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}