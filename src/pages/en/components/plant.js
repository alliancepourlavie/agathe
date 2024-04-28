import '../../../App.css';
import * as React from "react"

import Acacia from "../../../data/img/Acacia_mearnsii.png";
import Casuarina from "../../../data/img/Casuarina_equisetifolia .png";
import Eleocharis from "../../../data/img/Eleocharis_interstincta.png";
import Grevillea from "../../../data/img/Grevillea_robusta.png";


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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

    function createData(plan, edib, med) {
        return { plan, edib, med };
    }

    const rowsBoat = [
        createData('Casuarina equisetifolia', '-', 'Root extracts are used to treat dysentery, diarrhoea and stomach upsets. A decoction of the twigs is used to treat swelling. Fresh bark is an excellent astringent. It is used in the treatment of chronic diarrhoea and dysentery. A decoction of the inner bark, combined with Terminalia catappa inner bark, is used to treat asthma and shortness of breath. The powdered bark is used to treat pimples on the face. The cambium layer beneath the bark is pressed and used to calm mentally ill or aggressive patients.'),
        createData('Grevillea robusta', 'Flowers are one of the richest sources of nectar. Nectar can be sucked directly from the flowers, shaken into a bowl or washed in a small amount of water. The nectar rains down when the flowers are shaken.', '-'),
        createData('Acacia mearnsii', '-', 'The bark is rich in tannins and can therefore be used in the many cases where astringents can be used, for example, to treat diarrhoea and dysentery, to treat haemorrhoids, to stop internal bleeding, to bathe cuts and abrasions, as a mouthwash to tighten teeth in the gums, etc. The bark of all Acacia species contains varying amounts of tannin and is astringent. Applied externally, often in the form of a bath, it is used to treat wounds and other skin problems, haemorrhoids, sweating feet, certain eye problems, as a mouthwash, etc. Many acacias also produce gum in varying quantities from the trunk and stems. This gum is sometimes used internally to treat diarrhoea and haemorrhoids.'),
    ];



    return (
        <>
            <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important", marginBottom:3 }} className="accordion">IDENTIFIABLE BIOLOGICAL HERITAGE WITHIN 2 KM OF THE KADUTU AND BAGIRA LANDING SITES</Typography>

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
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>EMERGENT PLANT<br /><i>Eleocharis interstincta</i><br />
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
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>ORNAMENTAL AND MEDICINAL PLANT<br /><i>Casuarina equisetifolia</i><br />
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
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>FOREST PLANT<br /><i>Grevillea robusta</i><br />
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
                                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>FOREST PLANT<br /><i>Acacia mearnsii</i><br />
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
                                    <TableRow >
                                        <TableCell>SCIENTIFIC NAME</TableCell>
                                        <TableCell align="center">USE OF EDIBLE PLANTS</TableCell>
                                        <TableCell align="center">MEDICAL USE</TableCell>
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