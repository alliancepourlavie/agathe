import '../../../App.css';
import * as React from "react"

import FC from "../../../data/img/FC.png";
import FM from "../../../data/img/FM.png";
import LS from "../../../data/img/LS.png";
import MO from "../../../data/img/MO.png";
import MOL from "../../../data/img/MOL.png";
import SP from "../../../data/img/SP.png";

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



const Boats = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);


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
                        <Item sx={{ height: '100%' }}>
                            <Button onClick={() => setOpen1(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Le trimaran avec filet carrelet - FC"
                                    height="230"
                                    image={FC}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>TRIMARAN WITH LIFT NET -<br />crew of 11 fisherwomen • mesh size 6-10 mm
                                    </Typography>
                                </CardContent>
                            </Button>
                            <span style={{ backgroundColor: "rgba(0,0,0,0)", padding: 3, fontFamily: "Nehanda-SpiritMedium", fontSize: "0.9em", fontWeight: 600, borderColor: "black", borderWidth: 1, borderStyle: "solid" }}>TR</span>
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
                                        alt="Le trimaran avec filet carrelet - FC"
                                        height="300"
                                        image={FC}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>This technique uses lift net, a square-shaped sheet of multifilament nylon yarn with a surface area of 400 m2 and 5 and 6 mm knot-to-knot mesh. At the corners, 4 long nylon ropes, 3 to 4 cm in diameter, are attached. It employs 3 separate non-motorised pirogues ("trimaran") attached to each other by two long poles called "rails" and four other poles called "polé" to connect the hawsers attached to the ends of the net lift when fishing. Four lamps are carried by the middle pirogue and the whole system is assisted by a small, independent, motorised pirogue called a "reinforcement". Trimaran fishing is a technique used in Lake Kivu with a light attraction system. The fish are drawn into the net by the light generated by 4 Coleman or "Anchor" lamps, which remain lit throughout the fishing activity, except when the net is being hauled in. The crew, made up of 11 fisherwoman/fishermen, including 2 professionals and 9 occasional fisherwoman/fishermen, embarked at around 6pm. Once on the fishing zone, in a pelagic environment, the trimaran is pointed into the wind. The fisherwoman/fishermen cast anchor, then throw the first net and switch on the lights. The first haul takes place at 9pm, the second at 11.30pm, the third at 2am and the fourth sometimes around 4.30am. During the haul, the net is taken out of the water in the form of a conical bag with the opening facing upwards.
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <Button onClick={() => setOpen2(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="La senne de plage - SP"
                                    height="230"
                                    image={SP}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>BEACH SEINE-<br />2-5 fisherwomen • mesh size 4-8 mm
                                    </Typography>
                                </CardContent>
                            </Button>
                            <span style={{ backgroundColor: "#2e2a7a", color: "#df8f44", padding: 3, fontFamily: "Nehanda-SpiritMedium", fontSize: "0.9em", fontWeight: 600, padding: 4 }}>BS</span>
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
                                        alt="La senne de plage - SP"
                                        height="300"
                                        image={SP}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Beach seine fishing is generally carried out from a monoxyle pirogue 4 to 5 m long. Rectangular in shape and attached to long ropes "hawsers" on each side, it is made from a sheet of multifilament nylon thread, often used in conjunction with the sheets of worn-out plaice nets. It is around thirty metres long and has a drop of around ten metres, with meshes varying between 4 mm and 8 mm between knots. The upper selvedge of the net is fitted with floats, while the lower selvedge is weighted down either with pieces of clay brick, pebbles or even pieces of iron bars. The crew, made up of 2 to 5 fishermen/fisherwomen, operate mainly in coastal areas from 4am until 10am (at the latest). During the activity, one of the hawsers attached to the ends of the net is held by a fisher on the beach while the others, using the pirogue, embark with the other part of the hawser which they unroll and throw into the water, each time moving towards the lake. They make an arc and return to the beach to pull the net by the ends of the hawsers while sweeping the substrate. The duration of the activity is highly variable, ranging from half an hour to five hours per trip and per fishing unit.
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <Button onClick={() => setOpen3(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Les filets maillants - FM"
                                    height="150"
                                    image={FM}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>GILLNETS -<br />3-4 fisherwomen • mesh size 20-30 mm
                                    </Typography>
                                </CardContent>
                            </Button>
                            <span style={{ backgroundColor: "#df8f44", padding: 3, fontFamily: "Nehanda-SpiritMedium", fontSize: "0.9em", fontWeight: 600, padding: 4 }}>GN</span>
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
                                        alt="Les filets maillants - FM"
                                        height="300"
                                        image={FM}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Gillnets are made up of a rectangular sheet of monofilament nylon yarn, varying in length from 60 to 180 m and width from 4 to 12 m. The mesh size varies between 6 and 10 mm between knots. Occasionally, large-mesh nets with mesh sizes of up to 20 to 30 mm are used to catch large fish such as tilapia. The netting is mounted on two selvedges, an upper one fitted with floats and a lower one fitted with ballast, either pieces of lead or stone. In Lake Kivu, there is a trend towards diversification in the techniques used to exploit gillnet resources, ranging from strike fishing to the use of small bells to encourage the fish to move, or even the use of small torches attached to the net and left lit while the net is immersed to attract sight-hunting fish. Gillnet fishing takes place from dusk to dawn. A crew consists of 3 to 4 fishers, one of whom is a professional and the others occasional, using a non-motorised plank pirogue 3 to 5 m long, 2 ropes attached to the net and 3 to 4 wooden oars. The fishers operate between 5pm and 6pm close to the coast or in the pelagic waters, taking into account wind movements. The nets are set around 6.30pm and hauled in around 9pm. The fishermen return either directly or the next day to the landing beach to begin the stripping process, which can take several hours per net if the catch is good. Early morning fishing starts at 3.30am. The nets are hauled in around 6am and the fish are taken off between 7am and 8am.
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>

                    <Grid item xs={2}>
                        <Item sx={{ height: '100%' }}>
                            <Button onClick={() => setOpen4(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="La ligne simple - LS"
                                    height="150"
                                    image={LS}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>SINGLE LINE -<br />1 fisherwoman
                                    </Typography>
                                </CardContent>
                            </Button>
                            <span style={{ backgroundColor: "#cb4d37", color: "#df8f44", padding: 3, fontFamily: "Nehanda-SpiritMedium", fontSize: "0.9em", fontWeight: 600, padding: 4 }}>SL</span>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open4}
                                onClose={() => setOpen4(false)}
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
                                        alt="La ligne simple - LS"
                                        height="300"
                                        image={LS}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>The single line, commonly known as a "hook", consists of a nylon line (monofilament) between 3 and 6 m long, attached to a thin, flexible rod and fitted with one or at most 3 hooks. The method involves casting the line into the water and reeling it in gradually at the same speed. Single-line fishing is also used by children along riverbanks, with the lines often left in the water until a fish is caught.
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>

                    <Grid item xs={2}>
                        <Item sx={{ height: '100%' }}>
                            <Button onClick={() => setOpen5(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="Le tulle moustiquaire - MO"
                                    height="150"
                                    image={MO}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>MOSQUITO NETTING -<br />2 fisherwomen • mesh size 0.3-1.7 mm • <span style={{ borderWidth: 1, borderColor: "#c53c6a", borderStyle: "solid" }}>illcite</span>
                                    </Typography>
                                </CardContent>
                            </Button>
                            <span style={{ backgroundColor: "#c53c6a", color: "#df8f44", padding: 3, fontFamily: "Nehanda-SpiritMedium", fontSize: "0.9em", fontWeight: 600, padding: 4 }}>Mo</span>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open5}
                                onClose={() => setOpen5(false)}
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
                                        alt="Le tulle moustiquaire - MO"
                                        height="300"
                                        image={MO}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>It is a rectangular mosquito netting with 0.3 to 1.7 mm mesh, 2 to 4 m long and 1 to 2 m high. This gear is often used clandestinely, as it has been identified as illegal fishing in Lake Kivu. The technique is used at a depth of less than 2 m along banks colonised by non-woody aquatic plants. At around 5am, the 2 fishers stand in the water and together pull the net towards the shore, lightly touching the substrate, with the four corners of the net held tightly in one hand each.
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Modal>
                        </Item>
                    </Grid>

                    <Grid item xs={2}>
                        <Item sx={{ height: '100%' }}>
                            <Button onClick={() => setOpen6(true)} className='boatmodal'>
                                <CardMedia
                                    component="img"
                                    alt="La moustiquaire associée au Lusenga -MOL"
                                    height="150"
                                    image={MOL}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>MOSQUITO NET ATTACHED TO LUSENGA -<br />2 fisherwomen • <span style={{ borderWidth: 1, borderColor: "#c53c6a", borderStyle: "solid" }}>illcite</span>
                                    </Typography>
                                </CardContent>
                            </Button>
                            <span style={{ backgroundColor: "#2b5f43", color: "#df8f44", padding: 3, fontFamily: "Nehanda-SpiritMedium", fontSize: "0.9em", fontWeight: 600, padding: 4 }}>MoL</span>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open6}
                                onClose={() => setOpen6(false)}
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
                                        alt="La moustiquaire associée au Lusenga -MOL"
                                        height="300"
                                        image={MOL}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>The mosquito net used with the Lusenga is rectangular in shape, with an average surface area of 250 m2, i.e. 25 m long by 10 m wide. It is made in an unsophisticated way, by sewing a piece of mosquito netting of highly variable dimensions into the central part of a worn square net (known locally as the "Lusenga"). The four corners of the net are connected to a nylon rope, which is used by fishermen and fisherwomen, often in pairs, to pull the net out of the water, forming a bow like a beach seine. The activity takes place in the coastal area early in the morning and lasts a maximum of around 1 hour, with the possibility of rehearsals.
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


export default Boats;