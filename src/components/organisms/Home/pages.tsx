'use client'

import { Grid } from '@mui/material'

import Card from '~/atoms/Card/page'

const Home = () => {
  return (
    <>
      <main className="mt-10 flex min-h-screen flex-col items-center justify-between">
        <div className="mt-24 flex h-auto items-center justify-center">
          <Grid container height="100vh" spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Card />
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  )
}

export default Home
