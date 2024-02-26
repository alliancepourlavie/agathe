import '../../../App.css';
import * as React from "react"

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

import Pirogueimg from "../../../data/img/pirogue.png";



const Pirogue = () => {

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

    function createData(item, quan, nomb, amount) {
        return { item, quan, nomb, amount };
    }

    const rowsBoat = [
        createData('1. Pirogue', '-', '1', 1),
        createData('2. Materiel', '-', '-', 1),
        createData('3. Engin de peche', '-', '-', 1),
        createData('4. Reparations pirogue', '-', '-', 1),
        createData('5. Reparations filet', '-', '-', 1),
        createData('6. Permis de pêche', '-', '-', 1),
    ];



    return (

        <>
            <div className="pirogueflex" style={{ display: "flex" }}>

                <Accordion defaultExpanded className="pirogueaccordion" style={{ width: "40%", padding: 2}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="accordion">APERCU DES COUTS D'UNE CAMPAGNE DE PECHE</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <TableContainer className="pirogueTableContainer" component={Paper} sx={{ maxHeight: 500, overflow: 'scroll' }}>
                            <Table className="pirogueTable" sx={{ minWidth: 200, fontSize: 15 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>DESIGNATION</TableCell>
                                        <TableCell align="center">QUANTITE</TableCell>
                                        <TableCell align="center">NOMBRE</TableCell>
                                        <TableCell align="center">MONTANT [USD]</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsBoat.map((row) => (
                                        <TableRow
                                            key={rowsBoat.item}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.item}
                                            </TableCell>
                                            <TableCell align="right">{row.quan}</TableCell>
                                            <TableCell align="right">{row.nomb}</TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

                <div style={{ padding:30, margin:"auto", width: "40%" }}>
                    <CardMedia
                        className='pirogueimg'
                        component="img"
                        alt="Pirogue"
                        height="600"
                        image={Pirogueimg}
                        sx={{ objectFit: "contain" }} />
                </div>

            </div></>
    )
}

export default Pirogue;