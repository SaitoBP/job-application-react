import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    height: '50px',

    backgroundColor: '#E3E6EC',

    position: 'sticky',
    bottom: '0',
  },

  linksContainer: {
    display: 'flex',
  },

  link: {
    textDecoration: 'none',
  },
})

export default useStyles
