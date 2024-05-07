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
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>MamaCYNTHIA</span><br />Âgé de 43 ans, mère de 14ans<br />Vingt-cinq ans de pêche<br />◉ KADUTU
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Mimi ndiye mwanamke wa kwanza kuwa mvuvi katika kijiji changu kidogo cha pwani huko Kivu Kusini. Kufungua njia kwa wanawake wengine, nina zaidi ya miaka 25 katika taaluma hii, nilitiwa moyo na kufunzwa na mume wangu. Mimi ni mama wa watoto 14, 9 kati yao ni wa ndoa ya marehemu mume wangu. Nina shida kuwaelimisha baada ya maisha haya ya dhambi. mume wangu alipofariki akifanya kazi hii ambayo ililisha familia nzima, nilianza kwa matumaini ya kupata maisha bora, nilijikuta bila msaada wowote wa kifedha. Ninatoka kwa jamii ya jadi ya wavuvi hapa, ni wanaume ambao huenda baharini na kufanya maamuzi muhimu. Kwa hivyo nilianza. Nilihamasika sana kwa sababu niliona kwamba mume wangu mvuvi alikuwa akipata pesa zaidi kabla hajafa. wanaume katika jamii yangu walisema siwezi kuvua kwa sababu mimi ni mwanamke na kwamba samaki hawezi kuchukua chambo cha mwanamke ambaye yuko kwenye hedhi. Niliwaambia kwamba tayari nilikuwa katika ukomo wa hedhi kwa hiyo hawakuwa na wasiwasi kuhusu hilo. siku moja niliamua kujaribu kushikawavu.<br />
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
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>MamaMUTOMBO</span><br />Âgé de 35 ans, mère de 8ans<br />Dix ans de pêche<br />◉ KADUTU
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Mume wangu alipokufa, niliamua kuanza uvuvi. Niliuza vitu vidogo lakini hilo halikuniruhusu kulisha watoto wangu wanane na kuwapeleka shule. mama Cynthia alinionyesha jinsi mwanamke anavyoweza kuhudumia familia yake licha ya kifo au kuachwa na mumewe, bila kuusalimisha mwili wake kwenye ufisadi. Nilifanya kwa ujasiri, nguvu na bila aibu. Mume wangu alipokufa, ilinibidi kurudisha nyavu kwa familia yake. Leo nazikodisha kwa ajili ya kuvua samaki, kwa sababu siwezi kumudu bora.<br />
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
                                    <Typography component='div' className="fish" color="text.secondary" style={{ paddingTop: 10 }} gutterBottom><span style={{ fontWeight: 200, fontSize: "2.3em", letterSpacing: 3, lineHeight: "1.1em" }}>MadameBINTU</span><br />Âgé de 25 ans, mère de 2ans<br />Trois ans de pêche<br /> ◉ KADUTU
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
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Mume wangu alinitelekeza mimi na watoto wangu wawili. Wazazi wangu wote wamekufa. Nilichagua kuvua samaki ili nisilazimike kufanya ukahaba. Hivyo ninaweza kulisha watoto wangu na dada zangu wawili wadogo, lakini sina uwezo wa kuwapeleka shule.<br />
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