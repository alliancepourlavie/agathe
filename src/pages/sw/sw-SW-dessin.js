import '../../App.css';
import * as React from "react"
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import dessin_A from "../../data/img/dessin_A.jpg";
import dessin_B from "../../data/img/dessin_B.jpg";
import dessin_D from "../../data/img/dessin_D.jpg";
import dessin_E from "../../data/img/dessin_E.jpg";
import dessin_F from "../../data/img/dessin_F.jpg";
import dessin_G from "../../data/img/dessin_G.jpg";
import dessin_H from "../../data/img/dessin_H.jpg";
import dessin_J from "../../data/img/dessin_J.jpg";
import dessin_K from "../../data/img/dessin_K.jpg";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const SWdessin = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <>

            <Typography component='div' className="title_5" /* style={{fontSize:"0.8rem !important" }} */><br />
                <Link to="/sw-SW" ><br />⇷ Retour à la page d'accueil</Link><br />
            </Typography>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="agathe" style={{ textTransform: "uppercase" }}>ECOSYSTEM YA MACHO ZIWA NA KUPITIA MICHORO YA MABINTI NA WANA WA WAVUVI WA ZIWA KIVU<br /><br /><br />
                </Typography>
            </CardContent>

            <div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="A"
                                    height="220"
                                    image={dessin_A}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="B"
                                    height="220"
                                    image={dessin_B}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="D"
                                    height="220"
                                    image={dessin_D}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="E"
                                    height="220"
                                    image={dessin_E}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="F"
                                    height="220"
                                    image={dessin_F}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="G"
                                    height="220"
                                    image={dessin_G}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="H"
                                    height="220"
                                    image={dessin_H}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="J"
                                    height="220"
                                    image={dessin_J}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    className='dessin_enfant'
                                    alt="K"
                                    height="220"
                                    image={dessin_K}
                                    sx={{ objectFit: "contain" }} />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title_3"><br /><br /><br />Tulileta pamoja binti zetu 24 na wana wetu kwa ajili ya zoezi la kuchora. kwa kuwafahamisha mazoezi ya kujieleza kisanii, tuliwafahamisha umuhimu wa kulinda mazingira ya ziwa ili kujihakikishia usalama wa chakula kupitia uvuvi<br />
                </Typography>
            </CardContent>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="mutombodescr"><br />Masomo anayopenda zaidi ni samaki, uoto wa pwani na shughuli za uvuvi ndani ya mitumbwi. Kwa wengine, shughuli hii ya kuchora ni uanzishwaji wa kisanii. Wengi wao hawako shuleni kwa sababu rasilimali zetu ni chache, kwa hivyo hii ni fursa ya kipekee<br />
                </Typography>
            </CardContent>

        </>
    )
}

export default SWdessin;