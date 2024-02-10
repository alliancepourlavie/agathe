import '../../../App.css';
import * as React from "react"

import Amphilius from "../../../data/img/Amphilius_cf_uranoscopus.png";
import Apleurogramma from "../../../data/img/Barbus_apleurogramma.png";
import Kerstenii from "../../../data/img/Barbus_kerstenii.png";
import Gariepinus from "../../../data/img/Clarias_gariepinus.png";
import Liocephalus from "../../../data/img/Clarias_liocephalus.png";
import Adolphifrederici from "../../../data/img/Haplochromis_adolphifrederici.png";
import Astatodon from "../../../data/img/Haplochromis_astatodon.png";
import Crebridens from "../../../data/img/Haplochromis_crebridens.png";
import Gracilior from "../../../data/img/Haplochromis_gracilior.png";
import Graueri from "../../../data/img/Haplochromis_graueri.png";
import Insidiae from "../../../data/img/Haplochromis_insidiae.png";
import Kamiranzovu from "../../../data/img/Haplochromis_kamiranzovu.png";
import Microchrysomelas from "../../../data/img/Haplochromis_microchrysomelas.png";
import Nigroides from "../../../data/img/Haplochromis_nigroides.png";
import Occultidens from "../../../data/img/Haplochromis_occultidens.png";
import Olivaceus from "../../../data/img/Haplochromis_olivaceus.png";
import Paucidens from "../../../data/img/Haplochromis_paucidens.png";
import Rubescens from "../../../data/img/Haplochromis_rubescens.png";
import Scheffersi from "../../../data/img/Haplochromis_scheffersi.png";
import Vittatus from "../../../data/img/Haplochromis_vittatus.png";
import Labeobarbus from "../../../data/img/Labeobarbus_altianalis.png";
import Lamprichthys from "../../..//data/img/Lamprichthys_tanganicanus.png";
import Limnothrissa from "../../..//data/img/Limnothrissa_miodon.png";
import Leucostictus from "../../../data/img/Oreochromis_leucostictus.png";
import Macrochir from "../../../data/img/Oreochromis_macrochir.png";
import Niloticus from "../../../data/img/Oreochromis_niloticus.png";
import Raiamas from "../../../data/img/Raiamas_moorii.png";
import Tilapia from "../../../data/img/Tilapia_rendalli.png";

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



const Fishyes = () => {


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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Limnothrissa"
                                height="200"
                                image={Limnothrissa}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>LIMNOTHRISSA<br /><i>Limnothrissa miodon</i><br />SYMBOL FISHING METHOD</Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Tilapia"
                                height="200"
                                image={Tilapia}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>TILAPIA<br /><i>Tilapia rendalli</i><br />SYMBOL FISHING METHOD</Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Fishyes;