import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Navbar } from '../../components/Navbar'
import { HotelCard } from '../../components/HotelCard'

import useStyles from './useStyles'
import useFetch from './useFetch'

import mockupData from './data/mockupData.json'

const List = () => {
  const {
    location: { cityCode, country },
    guests,
    checkIn,
    checkOut,
  } = mockupData

  let results = []

  const { root } = useStyles()

  const { status, data, error } = useFetch()

  if (status === 'error') return <span>{error.message}</span>
  if (status === 'loading') return <span>...loading</span>

  if (status === 'success') {
    results = data.data.body.searchResults.results
  }
  return (
    <>
      <Container>
        <Typography variant='h6'>
          {`${cityCode}, ${country} - ${guests} guests - ${checkIn} to ${checkOut}`}
        </Typography>

        <Button>Order</Button>

        <div className={root}>
          {results.map(hotel => (
            <HotelCard hotelInfo={hotel} />
          ))}
        </div>
      </Container>

      <Navbar />
    </>
  )
}

export default List
