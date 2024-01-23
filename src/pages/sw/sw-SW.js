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
      <Button className="translation" component={Link} to="/en-GB">EN</Button>
      <div className='logo'></div><br />
    </div>


      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <div className="agathenotepad">
            <FullpageSection className="agathepng" style={{
              height: '90vh',
              padding: '1em',
            }}>
              <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="agathe" sx={{ mt: 2 }}>AGATHE,<br />MATRIARCH JUU YA MAJI<br /><Button onClick={handleClick} style={{ fontFamily: "YuwoteCharvet-Fat", fontSize: 14 }}><u>1</u></Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={250000}
                    onClose={handleCloseNote}
                    message="Agathe ni mmoja wa wavuvi wanaoheshimika na waliobobea kwenye Ziwa Kivu. Yeye ndiye mama mkuu wa jumuiya ya wavuvi ya Bukavu na Goma. Anajua kila tone la Ziwa Kivu na kila viumbe hai vinavyoishi humo. Amekuwa akizunguka eneo hili la maji maisha yake yote, kama mababu zake walivyofanya. Aliwafundisha watoto wake tisa uvuvi huku akiongoza na kushauri kikundi cha wanawake wavuvi ambao aliunda nao ushirika wa kufanya kazi huko Bukavu."
                    action={action} /><br /><br /></Typography>
              </CardContent>
            </FullpageSection>
          </div>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <CardContent sx={{ maxWidth: 800 }}>
              </CardContent>
            </FullpageSection>
          </div>

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