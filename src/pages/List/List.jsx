import React, { Fragment } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Navbar } from '../../components/Navbar'
import { HotelCard } from '../../components/HotelCard'

import useStyles from './useStyles'

import hotelList from './data/hotelList.json'
import mockupData from './data/mockupData.json'

const List = () => {
  const results = hotelList.data.body.searchResults.results

  const {
    location: { cityCode, country },
    guests,
    checkIn,
    checkOut,
  } = mockupData

  const { root } = useStyles()

  console.log(results)

  return (
    <Fragment>
      <Typography variant='h6'>
        {`${cityCode}, ${country} - ${guests} guests - ${checkIn} to ${checkOut}`}
      </Typography>

      <Button>Order</Button>

      <div className={root}>
        {results.map(hotel => (
          <HotelCard hotelInfo={hotel} />
        ))}
      </div>

      <Navbar />
    </Fragment>
  )
}

export default List
