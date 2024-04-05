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

import Agatheimg from "../../../data/img/faces_1.png";
import Cynthiaimg from "../../../data/img/faces_2.png";




const Faces = () => {


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
                                    alt="Maman Agathe"
                                    height="300"
                                    image={Agatheimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman AGATHE</span><br />Âgé de  ans, mère de  9ans<br /> ans de pêche<br />◉ GOMA
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
                                        alt="Maman Agathe"
                                        height="300"
                                        image={Agatheimg}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom> <br />
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
                                    alt="Maman CYNTHIA"
                                    height="300"
                                    image={Cynthiaimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman CYNTHIA</span><br />Âgé de 43ans, mère de 14ans<br />Vingt cinq ans de pêche<br />◉ KADUTU
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
                                        alt="Maman CYNTHIA"
                                        height="300"
                                        image={Cynthiaimg}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Son mari ne travaille pas il y’a plus de 10ans suite à son handicape. Cette femme nous a dit qu’elle elle a un seul filet qui fait nourrir sa famille, faire payer la scolarité de quelques enfants vues qu’il y a d’autre qui ne sont pas scolarisé par manque de moyen, les taxes de l’état et les frais de soin de santé en cas de la maladie. Elle nous a dit qu’elle a déjà enseigné ces deux enfants quand elle s’était trouvé dans l’impossibilité de le faire tous étudier.<br />
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


export default Faces;