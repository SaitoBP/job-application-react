import { useQuery, useQueryClient } from 'react-query'

let url = new URL('https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com')

const params = {
  lat: '37.788719679657554',
  lon: '-122.40057774847898',
  checkIn: '2021-01-27',
  checkOut: '2021-01-28',
  rooms: '1',
  locale: 'en_US',
  currency: 'USD',
  pageNumber: '1',
}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

const useFetch = () => {
  const queryClient = useQueryClient()

  const { status, data, error } = useQuery('hotels', async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': '5a4c8eb413msh89fbb982d9c1314p1855ffjsn0158238daf4e',
        'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com',
        useQueryString: true,
      },
    })

    return response.json()
  })

  return { status, data, error }
}

export default useFetch
