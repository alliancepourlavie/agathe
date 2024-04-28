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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>SAMBAZA<br /><i>Limnothrissa miodon</i><br />
                                    <span style={{ backgroundColor: "#df8f44", padding: 3 }}>GN</span>
                                    <span style={{ backgroundColor: "#2b5f43", padding: 3, WebkitTextFillColor: "#df8f44" }}>MoL</span>
                                    <span style={{ backgroundColor: "#c53c6a", padding: 3, WebkitTextFillColor: "#df8f44" }}>Mo</span>
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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>MSHIA (Tanzania, Swahili)<br /><i>Lamprichthys tanganicanus</i><br />
                                    <span style={{ backgroundColor: "#df8f44", padding: 3 }}>GN</span>
                                    <span style={{ backgroundColor: "#2b5f43", padding: 3, WebkitTextFillColor: "#df8f44" }}>MoL</span>
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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>IGIHONDA, ISAKE (Rwanda, Kinyarwanda)<br /><i>Oreochromis niloticus</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                    <span style={{ backgroundColor: "#cb4d37", padding: 3 }}>SL</span>
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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Oreochromis amphilius</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                    <span style={{ backgroundColor: "#df8f44", padding: 3 }}>GN</span>
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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>INDUGU<br /><i>Haplochromis gracilior</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                    <span style={{ backgroundColor: "#df8f44", padding: 3 }}>GN</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Graueri"
                                height="200"
                                image={Adolphifrederici}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis graueri</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>IFURO (Rwanda,Kinyarwanda)<br /><i>Haplochromis astatodon</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
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
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom> <br /><i>Haplochromis crebridens</i><br />
                                    <span style={{ backgroundColor: "#2e2a7a", padding: 3, WebkitTextFillColor: "#df8f44" }}>BS</span>
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Fishyes;