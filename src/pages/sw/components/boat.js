import '../../../App.css';
import * as React from "react"

import FC from "../../../data/img/FC.png";
import FM from "../../../data/img/FM.png";
import LS from "../../../data/img/LS.png";
import MO from "../../../data/img/MO.png";
import MOL from "../../../data/img/MOL.png";
import SP from "../../../data/img/SP.png";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const Boats = () => {


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
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Le trimaran avec filet carrelet - FC"
                                height="300"
                                image={FC}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LE TRIMARAN AVEC FILET CARRELET - FC<br />11 pêcheuses // mailles 6-10 mm
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="La senne de plage - SP"
                                height="300"
                                image={SP}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LA SENNE DE PLAGE - <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span><br />2-5 pêcheuses // mailles 4-8 mm
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Les filets maillants - FM"
                                height="200"
                                image={FM}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LES FILETS MAILLANTS - <span style={{ borderWidth: 3, borderColor: "#df8f44", borderStyle: "solid" }}>FM</span><br />3-4 pêcheuses // mailles 20-30 mm
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="La ligne simple - LS"
                                height="200"
                                image={LS}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LA LIGNE SIMPLE - <span style={{ borderWidth: 3, borderColor: "#cb4d37", borderStyle: "solid" }}>LS</span><br />1 pêcheuses
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Le tulle moustiquaire - MO"
                                height="200"
                                image={MO}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LE TULLE MOUSTIQUAIRE - <span style={{ borderWidth: 3, borderColor: "#c53c6a", borderStyle: "solid" }}>Mo</span><br />2 pêcheuses // mailles 0.3-1.7 mm // <span style={{ borderWidth: 1, borderColor: "#c53c6a", borderStyle: "solid" }}>identifié comme illicite</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="La moustiquaire associée au Lusenga -MOL"
                                height="200"
                                image={MOL}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LA MOUSTIQUAIRE ASSOCIÉE AU LUSENGA - <span style={{ borderWidth: 3, borderColor: "#2b5f43", borderStyle: "solid" }}>MoL</span><br />2 pêcheuses // <span style={{ borderWidth: 1, borderColor: "#c53c6a", borderStyle: "solid" }}>identifié comme illcite</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Boats;