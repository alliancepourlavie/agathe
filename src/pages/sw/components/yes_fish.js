import '../../../App.css';
import * as React from "react"

import Amphilius from "../../../data/img/Amphilius_cf_uranoscopus.png";
import Adolphifrederici from "../../../data/img/Haplochromis_adolphifrederici.png";
import Astatodon from "../../../data/img/Haplochromis_astatodon.png";
import Crebridens from "../../../data/img/Haplochromis_crebridens.png";
import Gracilior from "../../../data/img/Haplochromis_gracilior.png";
import Lamprichthys from "../../..//data/img/Lamprichthys_tanganicanus.png";
import Limnothrissa from "../../..//data/img/Limnothrissa_miodon.png";
import Niloticus from "../../../data/img/Oreochromis_niloticus.png";

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
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Limnothrissa"
                                height="200"
                                image={Limnothrissa}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Limnothrissa miodon</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#df8f44", borderStyle: "solid" }}>FM</span>
                                    <span style={{ borderWidth: 3, borderColor: "#2b5f43", borderStyle: "solid" }}>MoL</span>
                                    <span style={{ borderWidth: 3, borderColor: "#c53c6a", borderStyle: "solid" }}>Mo</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Lamprichthys"
                                height="200"
                                image={Lamprichthys}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Lamprichthys tanganicanus</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#df8f44", borderStyle: "solid" }}>FM</span>
                                    <span style={{ borderWidth: 3, borderColor: "#2b5f43", borderStyle: "solid" }}>MoL</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Niloticus"
                                height="200"
                                image={Niloticus}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Oreochromis niloticus</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span>
                                    <span style={{ borderWidth: 3, borderColor: "#cb4d37", borderStyle: "solid" }}>LS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Amphilius"
                                height="200"
                                image={Amphilius}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Oreochromis amphilius</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span>
                                    <span style={{ borderWidth: 3, borderColor: "#df8f44", borderStyle: "solid" }}>FM</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Gracilior"
                                height="200"
                                image={Gracilior}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Haplochromis gracilior</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span>
                                    <span style={{ borderWidth: 3, borderColor: "#df8f44", borderStyle: "solid" }}>FM</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Adolphifrederici"
                                height="200"
                                image={Adolphifrederici}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Haplochromis adolphifrederici</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Astatodon"
                                height="200"
                                image={Astatodon}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Haplochromis astatodon</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Crebridens"
                                height="200"
                                image={Crebridens}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>DÉNOMINATION LOCALE<br /><i>Haplochromis crebridens</i><br />
                                    <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Fishyes;