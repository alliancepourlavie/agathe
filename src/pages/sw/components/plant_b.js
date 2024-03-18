import '../../../App.css';
import * as React from "react"

import Cedrela from "../../../data/img/Cedrela_serrata.png";
import Eucalyptus from "../../../data/img/Eucalyptus_spp.png";
import Markhamia from "../../../data/img/Markhamia_lutea.png";
import Phragmites from "../../../data/img/Phragmites_australis.png";
import Spathodea from "../../../data/img/Spathodea_campanulata.png";


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const Plants_b = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



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
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Phragmites"
                                height="200"
                                image={Phragmites}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE ÉMERGENTE<br /><i>Phragmites australis</i><br />
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Spathodea"
                                height="200"
                                image={Spathodea}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE ORNEMENTALE ET MÉDICINALE<br /><i>Spathodea campanulata</i><br />
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Eucalyptus "
                                height="200"
                                image={Markhamia}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE D'AGROFORESTERIE<br /><i>Eucalyptus spp</i><br />
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Cedrela"
                                height="200"
                                image={Eucalyptus}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE D'AGROFORESTERIE<br /><i>Cedrela serrata</i><br />
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Markhamia"
                                height="200"
                                image={Markhamia}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE D'AGROFORESTERIE<br /><i>Markhamia lutea</i><br />
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    {/* <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                        </Item>
                    </Grid> */}
                </Grid>
            </Box></>
    )
}


export default Plants_b;