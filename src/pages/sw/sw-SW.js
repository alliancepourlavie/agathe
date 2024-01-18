import App from "../../App";
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../App.css'

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import Basemap from './components/basemap';


const SWSW = () => {

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleCloseNote = () => setOpen(false);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <><div className='boxheader'>
      <div className='logo'></div><br />
      <Button className="translation" component={Link} to="/en-GB">EN</Button>
    </div>


      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

        <FullpageSection className="notepad" style={{
            height: '90vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>Swahili<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message=""
                  action={action} /><br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(247, 245, 251, 1)',
            height: '100vh',
            // padding: '1em',
          }}>
            <Basemap />
          </FullpageSection>

        </FullPageSections>

      </Fullpage></>
  )
}


export default SWSW;