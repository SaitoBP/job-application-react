import React, { Fragment } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Navbar } from '../components/Navbar'

const LandingPage = () => {
  const handleSubmit = _e => {
    _e.preventDefault()
    console.log('teste')
  }

  return (
    <Fragment>
      <Container>
        <Typography variant='h4'>Find a place that gives you the ultimate calm</Typography>

        <form onSubmit={handleSubmit}>
          <TextField label='Place' variant='outlined' type='text' />
          <TextField label='Guests' variant='outlined' type='number' />
          <TextField label='Date' variant='outlined' type='text' />
          <TextField label='Nights' variant='outlined' type='number' />

          <Button type='submit' variant='contained'>
            Search Room
          </Button>
        </form>
      </Container>

      <Navbar />
    </Fragment>
  )
}

export default LandingPage
