'use client'

import { Grid } from '@mui/material'

import * as S from './styles'

import Card from '~/atoms/Card/page'
import Footer from '~/common/Footer/page'
import Header from '~/common/Header/page'
const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Grid container height="100%" spacing={1}>
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
      </S.MainContainer>
      <Footer />
    </S.Container>
  )
}

export default Home
