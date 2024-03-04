import '../../../App.css';
import * as React from "react"

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

import Mutomboimg from "../../../data/img/faces_3.png";
import Bintuimg from "../../../data/img/faces_4.png";




const Facesb = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


    const stylemodal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380,
        bgcolor: 'background.paper',
        border: '1px solid rgba(146, 145, 145, 0.4)',
        boxShadow: 0,
        p: 2,
    };


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={6}>
                        <Item sx={{ height: '100%', outline: "none" }}>
                            <Button onClick={() => setOpen1(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Maman Mutombo"
                                    height="300"
                                    image={Mutomboimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman MUTOMBO</span><br />Âgé de 35ans, mère de 8ans<br />Dix ans de pêche<br />
                                    </Typography>
                                </CardContent>
                            </Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open1}
                                onClose={() => setOpen1(false)}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Box className="boatboxmodal" sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="Maman Mutombo"
                                        height="300"
                                        image={Mutomboimg}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Nous a montré que lors de la mort de son mari qui fut aussi pêcheur, elle a choisi de faire la pêche vu qu’elle vendait des petit divers mais sans trouvé un revenu suffisant pour faire nourrir et faire scolarisé ces enfants.  Elle s’était uni à maman Cynthia qui lui a montré comment une femme peut subvenir au besoin familiale malgré l’absence ou la mort du mari et sans livrer son corps à la débauche. Elle a exercé cette activité avec courage, force et sans honte et jusque-là elle nous a dit qu’elle a besoin de trouvé ses propres filets vus qu’après la mort de son mari elle avait été délaissé par la famille de son mari et les filets quelle a, elle le prend en location par manque de moyens pour acheter ses mieux.<br />
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>


                    <Grid item xs={6}>
                        <Item sx={{ height: '100%', outline: "none" }}>
                            <Button onClick={() => setOpen2(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Maman Bintu"
                                    height="300"
                                    image={Bintuimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Madame BINTU</span><br />Âgé de 25ans, mère de 2ans<br />Trois ans de pêche<br />
                                    </Typography>
                                </CardContent>
                            </Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open2}
                                onClose={() => setOpen2(false)}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Box className="boatboxmodal" sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="Maman Bintu"
                                        height="300"
                                        image={Bintuimg}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Cette femme nous a montré son parcours de vie qui a été très difficile a géré avec ces deux enfants, dont leur père les avait abandonné et dont tous ces deux parents sont déjà morts, elle avait décidé de se lancer dans la pêche au lieu de faire la prostitution. « 3ans déjà que j’effectue cette activité et sa m’aide à nourrir mes deux enfants et mes deux petites sœurs malgré qu’elles ne sont pas scolarisées vu mes moyens qui sont trop bas »<br />
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>

                </Grid>
            </Box></>
    )
}


export default Facesb;