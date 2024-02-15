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
                                    height="250"
                                    image={FC}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>LE TRIMARAN AVEC FILET CARRELET - FC<br />11 pêcheuses // mailles 6-10 mm
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
                                <Box sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="Le trimaran avec filet carrelet - FC"
                                        height="300"
                                        image={FC}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Cette technique utilise le filet carrelet appelé « lift net », une nappe en fil de nylon multifilament, de forme carrée, d’une aire de 400 m2 avec des mailles de 5 et 6 mm de noeud à noeud. Au niveau des angles, sont attachées 4 longues cordes en nylon, de 3 à 4 cm de diamètre. Elle emploie 3 pirogues (« trimaran ») non motorisées séparées mais attachées entre elles par deux longues perches appelées « rails » et quatre autres perches appelées « polé » pour relier les aussières attachées aux extrémités du lift net lors de la pêche. Quatre lampes sont portées par la pirogue du milieu et tout le système est assisté par une pirogue motorisée, petite et indépendante, nommée « renfort ». La pêche au trimaran est une technique de pêche utilisée au lac Kivu avec un système d’attraction lumineux. En effet, les poissons sont attirés dans le filet à l’aide de l’éclairage généré par 4 lampes de marque Coleman ou « Anchor » qui restent allumées pendant toute l’activité de pêche à l’exception des moments de relèvement du filet. L’embarquement de l’équipage, composé de 11 pêcheurs dont 2 professionnels et 9 autres occasionnels, commence aux environs de 18h. Une fois sur la zone de pêche, en milieu pélagique, le trimaran est orienté dans la direction du vent. Les pêcheurs jettent l’ancre, puis procèdent au premier jet du filet pour ensuite allumer les lampes. Le premier relèvement intervient à 21h, le deuxième à 23h30, le troisième à 2h, et le quatrième parfois vers 4h30 du matin. Lors du relèvement, le filet est sorti de l’eau sous forme de poche conique avec l’ouverture tournée vers le haut.
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
                                    height="250"
                                    image={SP}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>LA SENNE DE PLAGE - <span style={{ borderWidth: 3, borderColor: "#2e2a7a", borderStyle: "solid" }}>SP</span><br />2-5 pêcheuses // mailles 4-8 mm
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
                                <Box sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="La senne de plage - SP"
                                        height="300"
                                        image={SP}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>La pêche à la senne de plage se pratique généralement à partir d’une pirogue monoxyle de 4 à 5 m de longueur. De forme rectangulaire et attachée à des longues cordes (aussières) de halage de chaque côté, elle est formée d’une nappe en fil de nylon multifilament, souvent associée aux nappes des carrelets usés. Sa dimension est de quelque trentaine de mètres de longueur et de quelque dizaine de mètres de chute, les mailles variant entre 4 mm et 8 mm d’entre noeuds. La ralingue supérieure du filet est munie des flotteurs tandis que la ralingue inférieure est lestée au moyen soit des morceaux de briques en terre cuite, soit des cailloux ou même des morceaux des barres de fer. L’équipage, composé de 2 à 5 pêcheurs y compris le propriétaire et de son aide-pêcheur, exerce l’activité essentiellement en zone littorale à partir de 4h du matin jusqu’à 10h (au plus tard). Lors de l’activité, l’une des aussières attachées aux extrémités du filet est tenue par un pêcheur se trouvant sur la plage tandis que les autres, à l’aide de la pirogue s’embarquent avec l’autre partie de l’aussière qu’ils déroulent et jettent dans l’eau, chaque fois en avançant vers le large du lac. Ils font un arc de cercle et regagnent la plage pour tirer le filet par les bouts des aussières tout en balayant le substrat. La durée de l’activité est très variable, allant d’une demi-heure à cinq heures par sortie et par unité de pêche.
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
                                    height="200"
                                    image={FM}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>LES FILETS MAILLANTS - <span style={{ borderWidth: 3, borderColor: "#df8f44", borderStyle: "solid" }}>FM</span><br />3-4 pêcheuses // mailles 20-30 mm
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
                                <Box sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="Les filets maillants - FM"
                                        height="300"
                                        image={FM}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>Les filets maillants sont constitués par une nappe rectangulaire en fil de nylon monofilament, dont la longueur varie entre 60 et 180 m et la largeur varie entre 4 et 12 m. La taille des mailles varie entre 6 et 10 mm d’entre noeuds. Il n’est pas exclu de rencontrer occasionnellement des filets à grandes mailles pouvant atteindre 20 à 30 mm, destinés à la capture des poissons de grande taille, tels que les tilapias. La nappe de filet est montée sur deux ralingues, une supérieure munie de flotteurs et une autre inférieure munie de lest, soit des morceaux de plomb, ou de pierre. Au lac Kivu, la tendance est à la diversification des techniques d’exploitation des ressources au filet maillant, partant de la pêche à la frappe à l’usage des petites clochettes pour inciter les poissons à la mobilité, ou bien même à l’usage des petites torches accrochées au filet et restant allumées durant le temps d’immersion pour l’attrait des poissons chasseurs à vue. La pêche au filet maillant se pratique à la tombée de la nuit au lever du jour. Un équipage se compose de 3 à 4 pêcheurs dont un est professionnel et les autres sont occasionnels, utilisant une pirogue en planche non motorisée de 3 à 5 m de long, 2 cordes attachées au filet et 3 à 4 rames en bois. Les pêcheurs pratiquent leurs activités de pêche entre 17h et 18h près du littoral ou dans les eaux pélagiques, tout en tenant compte des mouvements des vents. Les filets sont posés vers 18h30’ et relevés aux environs de 21h. Les pêcheurs retournent soit directement ou le lendemain sur la plage de débarquement pour commencer le démaillage qui peut prendre plusieurs heures par filet en cas de bonne capture. La pêche matinale se fait à partir de 3h30. Les filets sont relevés vers 6h du matin et le démaillage a lieu entre 7h et 8h, heures auxquelles les mareyeurs viennent acheter les produits frais de la pêche pour les revendre soit sur la plage ou aux marchés locaux.
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
                                    height="200"
                                    image={LS}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>LA LIGNE SIMPLE - <span style={{ borderWidth: 3, borderColor: "#cb4d37", borderStyle: "solid" }}>LS</span><br />1 pêcheuses
                                    </Typography>
                                </CardContent>
                            </Button>
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
                                <Box sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="La ligne simple - LS"
                                        height="300"
                                        image={LS}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>La ligne simple, couramment appelée « hameçon », elle se compose d’un fil en nylon (monofilament) de longueur variant entre 3 et 6 m, attaché à une canne mince et flexible, et muni d’un seul ou de 3 hameçons au plus. La méthode consiste à jeter la ligne dans l’eau et à remonter celle-ci petit à petit à une même vitesse. La pêche à la ligne simple est également utilisée par les enfants le long de berges, les lignes sont souvent laissées dans l’eau jusqu’à la capture d’un poisson.
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
                                    height="200"
                                    image={MO}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>LE TULLE MOUSTIQUAIRE - <span style={{ borderWidth: 3, borderColor: "#c53c6a", borderStyle: "solid" }}>Mo</span><br />2 pêcheuses // mailles 0.3-1.7 mm // <span style={{ borderWidth: 1, borderColor: "#c53c6a", borderStyle: "solid" }}>identifié comme illicite</span>
                                    </Typography>
                                </CardContent>
                            </Button>
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
                                <Box sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="Le tulle moustiquaire - MO"
                                        height="300"
                                        image={MO}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>C’est une nappe moustiquaire de forme rectangulaire, de 0,3 à 1,7 mm de mailles, faisant 2 à 4 m de long et 1 à 2 m de chute. Cet engin est souvent utilisé clandestinement car identifié comme pêche illicite au lac Kivu. La technique est pratiquée à une profondeur de moins de 2 m le long des berges colonisées par des plantes aquatiques non ligneuses. Vers 5h du matin, les 2 pêcheurs se trouvent dans l’eau et tirent ensemble le filet vers la côte en touchant légèrement le substrat, les quatre angles de l’engin étant fortement tenus, chacun par une main.
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
                                    height="200"
                                    image={MOL}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>LA MOUSTIQUAIRE ASSOCIÉE AU LUSENGA - <span style={{ borderWidth: 3, borderColor: "#2b5f43", borderStyle: "solid" }}>MoL</span><br />2 pêcheuses // <span style={{ borderWidth: 1, borderColor: "#c53c6a", borderStyle: "solid" }}>identifié comme illcite</span>
                                    </Typography>
                                </CardContent>
                            </Button>
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
                                <Box sx={stylemodal} style={{ backgroundColor: "rgba(247, 245, 251, 1)" }}>
                                    <CardMedia
                                        component="img"
                                        alt="La moustiquaire associée au Lusenga -MOL"
                                        height="300"
                                        image={MOL}
                                        sx={{ objectFit: "contain" }} />
                                    <CardContent>
                                        <Typography component='div' className="boatdescr" color="text.secondary" gutterBottom>La moustiquaire associée au Lusenga est un engin de forme rectangulaire, d’une superficie moyenne de 250 m2, soit 25 m de longueur sur 10 m de largeur. Sa fabrication demeure archaïque et consiste en une couture plaçant clandestinement dans la partie centrale d’un filet carrelet usé (localement appelé « Lusenga »), un tulle moustiquaire à dimensions très variables. L’engin ainsi fabriqué, les quatre angles sont reliés chacun à une corde en nylon dont se servent les pêcheurs, souvent à deux pour tirer le filet de l’eau, formant un arc comme celui de la senne de plage. L’activité se passe dans la zone littorale et se déroule tôt le matin pour une durée maximale d’environ 1h avec possibilité des répétitions.
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