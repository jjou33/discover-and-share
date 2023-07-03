'use client'

import { useEffect, useState } from 'react'

import { Grid, Skeleton } from '@mui/material'

import * as S from './styles'

import { fetchModule } from '&/fetch-module'
import Card from '~/atoms/Card/page'
import Footer from '~/common/Footer/page'
import Header from '~/common/Header/page'
const Home = () => {
  const [response, setResponse] = useState([])
  const [mount, setMount] = useState(false)
  const fetchRepositories = async (query: string) => {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
      query,
    )}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'token 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',
      },
    }

    try {
      const data = await fetchModule(url, options)
      // 데이터 활용
      return data
    } catch (error) {
      // 오류 처리
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchRepositories('react').then(res => {
      setResponse(res.items)
    })
    setMount(true)
  }, [])
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        {mount ? (
          <Grid container height="100%" spacing={1}>
            {response
              ? response.map((item, index) => {
                  return (
                    <>
                      <Grid
                        key={index}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        container
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Card props={item} key={item.id} />
                      </Grid>
                    </>
                  )
                })
              : ''}
            {/* <Grid
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
          </Grid> */}
          </Grid>
        ) : (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={345}
            height={200}
          ></Skeleton>
        )}
      </S.MainContainer>
      <Footer />
    </S.Container>
  )
}

export default Home
