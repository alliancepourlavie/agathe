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

import Cynthiaimg from "../../../data/img/faces_2.png";
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
    const [open3, setOpen3] = React.useState(false);


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

                    <Grid item xs={4}>
                        <Item sx={{ height: '100%', outline: "none" }}>
                            <Button onClick={() => setOpen1(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Maman CYNTHIA"
                                    height="300"
                                    image={Cynthiaimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman CYNTHIA</span><br />Âgé de 43 ans, mère de 14ans<br />Vingt-cinq ans de pêche<br />◉ KADUTU
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
                                        alt="Maman CYNTHIA"
                                        height="300"
                                        image={Cynthiaimg}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Je suis la première femme à devenir pêcheuse dans mon petit village côtier du Sud-Kivu. Ouvrant la voie à d’autres femmes, j’ai plus de 25 ans dans ce métier, j’étais inspirée et formée par mon mari. Je suis une mère de 14 enfants parmi lesquels 9 issus du mariage de mon feu mari. J’ai du mal à les scolariser suite à cette vie de pèche. Quand mon mari est mort en faisant ce travail qui nourrissait toute la famille, je me suis lancé dans l’espoir d’y trouver une vie meilleure, je me suis retrouvée sans aucun soutien financier. Je viens d’une communauté traditionnelle de pêcheurs, Ici, ce sont les hommes qui vont en mer et prennent les décisions importantes. Alors je me suis lancée. J’étais très motivée parce que je voyais que mon mari pêcheur gagnait plus d’argent avant sa mort. Les hommes de ma communauté disaient que je ne pouvais pas pêcher car je suis une femme et que le poisson ne mordrait pas à l’hameçon d’une femme qui a ses règles. Je leur ai répondu que j’étais déjà ménopausée et qu’ils n’avaient donc pas à s’inquiéter de ça. Un jour j’ai décidé d’essayer de manier le filet.<br />
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>


                    <Grid item xs={4}>
                        <Item sx={{ height: '100%', outline: "none" }}>
                            <Button onClick={() => setOpen2(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Maman Mutombo"
                                    height="300"
                                    image={Mutomboimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman MUTOMBO</span><br />Âgé de 35 ans, mère de 8ans<br />Dix ans de pêche<br />◉ KADUTU
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
                                        alt="Maman Mutombo"
                                        height="300"
                                        image={Mutomboimg}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Lorsque mon mari est mort, j'ai décidé de me lancer dans la pêche. Je vendais de petits divers mais cela ne me permettait pas de nourrir mes huit enfants et de les scolariser. Maman Cynthia m'a montré comment une femme peut subvenir aux besoins de sa famille malgré la mort ou l'abandon de son mari, sans pour cela livrer son corps à la débauche. Je l'ai fait avec courage, force et sans honte. A la mort de mon mari, j'ai dû rendre les filets à sa famille. Aujourd'hui, je les loue pour pêcher, car je n'ai pas les moyens d'en acheter de meilleurs.<br />
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>


                    <Grid item xs={4}>
                        <Item sx={{ height: '100%', outline: "none" }}>
                            <Button onClick={() => setOpen3(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Maman Bintu"
                                    height="300"
                                    image={Bintuimg}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Madame BINTU</span><br />Âgé de 25 ans, mère de 2ans<br />Trois ans de pêche<br /> ◉ KADUTU
                                    </Typography>
                                </CardContent>
                            </Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open3}
                                onClose={() => setOpen3(false)}
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Mon mari nous a abandonnés, moi et mes deux enfants. Mes parents sont tous deux morts. J'ai choisi de pêcher pour ne pas avoir à me prostituer. Je peux ainsi nourrir mes enfants et mes deux jeunes sœurs, mais je n'ai pas les moyens de les scolariser.<br />
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