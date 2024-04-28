import '../../../App.css';
import * as React from "react"

import Insidiae from "../../../data/img/Haplochromis_insidiae.png";
import Kamiranzovu from "../../../data/img/Haplochromis_kamiranzovu.png";
import Microchrysomelas from "../../../data/img/Haplochromis_microchrysomelas.png";
import Nigroides from "../../../data/img/Haplochromis_nigroides.png";
import Occultidens from "../../../data/img/Haplochromis_occultidens.png";
import Olivaceus from "../../../data/img/Haplochromis_olivaceus.png";
import Paucidens from "../../../data/img/Haplochromis_paucidens.png";
import Rubescens from "../../../data/img/Haplochromis_rubescens.png";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const Fishyesb = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Insidiae"
                                height="200"
                                image={Insidiae}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis insidiae</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Kamiranzovu"
                                height="200"
                                image={Kamiranzovu}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis kamiranzovu</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Microchrysomelas"
                                height="200"
                                image={Microchrysomelas}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis microchrysomelas</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Nigroides"
                                height="200"
                                image={Nigroides}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis nigroides</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Occultidens"
                                height="200"
                                image={Occultidens}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis occultidens</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Olivaceus"
                                height="200"
                                image={Olivaceus}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis olivaceus</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Paucidens"
                                height="200"
                                image={Paucidens}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis paucidens</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Rubescens"
                                height="200"
                                image={Rubescens}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis rubescens</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Fishyesb;