import React from 'react'

import Typography from '@material-ui/core/Typography'

import useStyles from './useStyles'

const HotelCard = ({ hotelInfo }) => {
  const { name } = hotelInfo

  const classes = useStyles()
  const { root } = classes

  return (
    <div className={root}>
      <Typography variant='h6'>{name}</Typography>
    </div>
  )
}

export default HotelCard
