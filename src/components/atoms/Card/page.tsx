'use client'

import { useEffect, useState } from 'react'

import {
  Button,
  Card as CardContainer,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import bannerImage from '#/banner.jpg'
const Card = ({ props }: any) => {
  return (
    <CardContainer sx={{ maxWidth: 345 }} className="ml-5">
      <CardMedia
        sx={{ height: 200 }}
        image={bannerImage.src}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.full_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {props.topics.length > 0
            ? props.topics.map(item => {
                return <Chip label={item}></Chip>
              })
            : ''}
        </Stack>
      </CardActions>
    </CardContainer>
  )
}

export default Card
