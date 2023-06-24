'use client'

import {
  Button,
  Card as CardContainer,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import bannerImage from '#/banner.jpg'
const Card = () => {
  return (
    <CardContainer sx={{ maxWidth: 345 }} className="ml-5">
      <CardMedia
        sx={{ height: 200 }}
        image={bannerImage.src}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CardContainer>
  )
}

export default Card
