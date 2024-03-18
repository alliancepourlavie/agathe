import '../../../App.css';
import * as React from "react"

import Acacia from "../../../data/img/Acacia_mearnsii.png";
import Casuarina from "../../../data/img/Casuarina_equisetifolia .png";
import Eleocharis from "../../../data/img/Eleocharis_interstincta.png";
import Grevillea from "../../../data/img/Grevillea_robusta.png";


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';



const Plants = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }

        setOpen(false)
    }

    const handleCloseNote = () => setOpen(false);

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    function createData(plan, edib, med) {
        return { plan, edib, med };
    }

    const rowsBoat = [
        createData('Casuarina equisetifolia', '-', 'Les extraits de racines sont utilisés pour le traitement de la dysenterie, de la diarrhée et des maux d\'estomac. Une décoction des rameaux est utilisée pour traiter les gonflements. L\'écorce fraîche est un excellent astringent. Elle est utilisée dans le traitement de la diarrhée chronique et de la dysenterie. Une décoction de l\'écorce interne, combinée à l\'écorce interne de Terminalia catappa, est utilisée pour traiter l\'asthme et l\'essoufflement. L\'écorce réduite en poudre est utilisée pour traiter les boutons sur le visage. La couche de cambium située sous l\'écorce est pressée et utilisée pour calmer les malades mentaux ou les patients agressifs.'),
        createData('Grevillea robusta', 'Les fleurs sont l\'une des sources les plus riches en nectar. Celui-ci peut être aspiré directement des fleurs, secoué dans un bol ou lavé dans une petite quantité d\'eau. Le nectar tombe en pluie lorsqu\'on agite les fleurs.', '-'),
        createData('Acacia mearnsii', '-', 'L\'écorce est riche en tanins et peut donc être utilisée dans les nombreux cas où les astringents peuvent être employés, par exemple pour traiter la diarrhée et la dysenterie, pour traiter les hémorroïdes, pour arrêter les hémorragies internes, pour baigner les coupures et les écorchures, comme bain de bouche pour resserrer les dents dans les gencives, etc. L\'écorce de toutes les espèces d\'Acacia contient des quantités plus ou moins importantes de tanins et est astringente. En application externe, souvent sous forme de bain, elles sont utilisées pour traiter les plaies et autres problèmes de peau, les hémorroïdes, la transpiration des pieds, certains problèmes oculaires, comme bain de bouche, etc. De nombreux acacias produisent également des quantités plus ou moins importantes d\'une gomme provenant du tronc et des tiges. Cette gomme est parfois utilisée en usage interne pour traiter la diarrhée et les hémorroïdes.'),
    ];



    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>

                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    alt="Eleocharis"
                                    height="200"
                                    image={Eleocharis}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE ÉMERGENTE<br /><i>Eleocharis interstincta</i><br />
                                    </Typography>
                                </CardContent>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    alt="Casuarina"
                                    height="200"
                                    image={Casuarina}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE ORNEMENTALE ET MÉDICINALE<br /><i>Casuarina equisetifolia</i><br />
                                    </Typography>
                                </CardContent>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    alt="Grevillea"
                                    height="200"
                                    image={Grevillea}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE DE FORÊT<br /><i>Grevillea robusta</i><br />
                                    </Typography>
                                </CardContent>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    alt="Acacia"
                                    height="200"
                                    image={Acacia}
                                    sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>PLANTE DE FORÊT<br /><i>Acacia mearnsii</i><br />
                                    </Typography>
                                </CardContent>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                <Accordion defaultExpanded className="pirogueaccordion" style={{ width: "100%", padding: 0, marginTop: 30 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="accordion"></Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <TableContainer className="pirogueTableContainer" component={Paper} sx={{ maxHeight: 200, overflow: 'scroll' }}>
                            <Table className="pirogueTable" sx={{ minWidth: 200, fontSize: 15 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>NOM SCIENTIFIQUE</TableCell>
                                        <TableCell align="center">UTILISATION DES PLANTES COMESTIBLES</TableCell>
                                        <TableCell align="center">USAGE MÉDICAL</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsBoat.map((row) => (
                                        <TableRow
                                            key={rowsBoat.item}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ fontSize: "11px !important" }}>
                                                {row.plan}
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontSize: "11px !important" }}>{row.edib}</TableCell>
                                            <TableCell align="center" sx={{ fontSize: "11px !important" }}>{row.med}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

            </div>

        </>
    )
}


export default Plants;