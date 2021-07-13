import React, { useState } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Navbar } from '../../components/Navbar'

import useStyles from './useStyles'

const Form = () => {
  const [form, setForm] = useState({
    place: '',
    guests: '',
    date: '',
    nights: '',
  })

  const { place, guests, date, nights } = form

  const handleSubmit = _e => {
    _e.preventDefault()

    console.table(form)
  }

  const handleChange = ({ target: { name, value } }) =>
    setForm({
      ...form,
      [name]: value,
    })

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label='Place'
            name='place'
            variant='outlined'
            fullWidth
            type='text'
            value={place}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label='Guests'
            name='guests'
            variant='outlined'
            fullWidth
            type='number'
            value={guests}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            label='Date'
            InputLabelProps={{ shrink: true }}
            name='date'
            variant='outlined'
            fullWidth
            type='date'
            value={date}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label='Nights'
            name='nights'
            variant='outlined'
            fullWidth
            type='number'
            value={nights}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type='submit' variant='contained' fullWidth>
            Search Room
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

const LandingPage = () => {
  const { root } = useStyles()

  return (
    <>
      <Container className={root}>
        <Typography variant='h4'>Find a place that gives you the ultimate calm</Typography>

        <Form />
      </Container>

      <Navbar />
    </>
  )
}

export default LandingPage
