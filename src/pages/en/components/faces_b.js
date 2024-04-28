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
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman CYNTHIA</span><br />Age 43, mother of 14<br />Twenty-five years of fishing<br />◉ KADUTU
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>I am the first woman to become a fisherwoman in my small coastal village in South Kivu. Paving the way for other women, I have been in this profession for over 25 years, inspired and trained by my husband. I am the mother of 14 children, including 9 from my late husband's marriage. I'm finding it hard to send them to school because of my life in the fishing sector. When my husband died doing this work, which was feeding the whole family, I set off in the hope of finding a better life, but I found myself without any financial support. I come from a traditional fishing community, where it's the men who go out on the water and make the important decisions.  So I took the plunge. I was very motivated because I could see that my fisherman husband was earning more money before he died. The men in my community said I couldn't fish because I'm a woman and the fish wouldn't take the bait of a menstruating woman. I told them that I'd already gone through menopause, so they didn't need to worry about that. One day I decided to try my hand at the net.<br />
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
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Maman MUTOMBO</span><br />Age 35, mother of 8<br />Ten years of fishing<br />◉ KADUTU
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>When my husband died, I decided to go into fishing. I sold small sundries, but that didn't allow me to feed my eight children and send them to school. Maman Cynthia showed me how a woman can provide for her family despite the death or abandonment of her husband, without giving her body over to debauchery. I did it with courage, strength and without shame. When my husband died, I had to return the nets to his family. Now I hire them out to fish, because I can't afford to buy better ones.<br />
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
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>Madame BINTU</span><br />Age 25, mother of 2<br />Three years of fishing<br /> ◉ KADUTU
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>My husband abandoned me and my two children. My parents are both dead. I chose to fish so that I wouldn't have to prostitute myself. This way I can feed my children and my two younger sisters, but I can't afford to send them to school.<br />
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