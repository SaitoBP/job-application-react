import React, { Fragment, useState } from 'react'

import { Route } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Navbar } from '../components/Navbar'

const Teste = ({ name }) => {
  return <h1>{name}</h1>
}

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

    return <Route path={'/search'} component={Teste} />
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
  return (
    <Fragment>
      <Container>
        <Typography variant='h4'>Find a place that gives you the ultimate calm</Typography>

        <Form />
      </Container>
      <Navbar />
    </Fragment>
  )
}

export default LandingPage
