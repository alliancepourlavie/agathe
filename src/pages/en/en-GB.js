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


const ENGB = () => {

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
      <Button className="translation" component={Link} to="/sw-SW">SW</Button>
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
                <Typography component='div' className="agathe" sx={{ mt: 2 }}>AGATHE,<br />THE MATRIARCH ABOVE THE WATER<br /><Button onClick={handleClick} style={{ fontFamily: "YuwoteCharvet-Fat", fontSize: 14 }}><u>1</u></Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={250000}
                    onClose={handleCloseNote}
                    message="Agathe est l'une des pêcheuses artisanales les plus respectées et les plus expertes du lac Kivu. Elle est la matriarche de la communauté de pêcheurs de Bukavu et Goma. Elle connaît chaque goutte du lac Kivu et chaque espèce vivante qui l'habite. Elle a navigué sur cette masse d'eau toute sa vie, comme le faisaient ses ancêtres. Elle a enseigné la pêche à ses neuf enfants en même temps que le leadership et le mentorat d'un groupe de pêcheuses avec lesquels elle a créé une coopérative oeuvrant à Bukavu."
                    action={action} /><br /><br /></Typography>
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

      </Fullpage ></>
  )
}


export default ENGB;