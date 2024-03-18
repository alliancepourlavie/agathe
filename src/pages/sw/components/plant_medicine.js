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


const Plant_medicine = () => {

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
        createData('Phragmites australis', 'Racine - crue ou cuite comme les pommes de terre. La saveur et la texture sont meilleures lorsque la racine est jeune et en pleine croissance. Elle peut être séchée, moulue grossièrement et utilisée comme bouillie. Jeunes pousses - crues ou cuites. Elles sont meilleures si elles sont utilisées avant la formation des feuilles, lorsqu\'elles sont vraiment délicieuses. Elles peuvent être utilisées comme des pousses de bambou. Les feuilles partiellement dépliées peuvent être utilisées comme herbe à pot. Graines - crues ou cuites. Elle peut être réduite en poudre et utilisée comme farine. La graine est plutôt petite et difficile à retirer de l\'enveloppe, mais on dit qu\'elle est très nutritive. Un sucre est extrait des tiges ou des tiges blessées. D\'un goût sucré semblable à celui de la réglisse, il peut être consommé cru ou cuit. Les tiges peuvent être bouillies dans l\'eau et l\'eau bouillie pour obtenir le sucre. La gomme sucrée qui s\'échappe des tiges peut être roulée en boules et consommée comme un bonbon. Une poudre extraite des tiges séchées peut être humidifiée et grillée.', 'Les feuilles sont utilisées dans le traitement de la bronchite et du choléra, la cendre des feuilles est appliquée sur les plaies fétides. Une décoction des fleurs est utilisée dans le traitement du choléra et des intoxications alimentaires. Les cendres sont styptiques. La tige est antidote, antiémétique, antipyrétique et réfrigérante. La racine est antiasthmatique, antiémétique, antipyrétique, antitussive, dépurative, diurétique, fébrifuge, lithontripique, sédative, sialagogue et stomachique. Elle est utilisée en usage interne dans le traitement des diarrhées, des fièvres, des vomissements, des toux accompagnées de mucosités épaisses et foncées, des abcès pulmonaires, des infections urinaires et des intoxications alimentaires (en particulier celles dues aux produits de la mer). En usage externe, elle est mélangée à du gypse et utilisée pour traiter l\'halitose et les maux de dents. La racine est récoltée à l\'automne et mise en jus ou séchée pour être utilisée dans des décoctions.'),
        createData('Spathodea campanulata', '-', 'Réputée pour contrôler l\'épilepsie et les convulsions, contre les maladies rénales, l\'urétrite et comme antidote contre les poisons animaux. Les décoctions de la tige de la plante sont également utilisées contre les eczémas, les maladies fongiques de la peau, l\'herpès, les maux d\'estomac et la diarrhée. La décoction de feuilles est utilisée dans le traitement de la douleur, de l\'inflammation, de la constipation et de la dysenterie. L\'extrait a également provoqué une diminution de la prise de nourriture et d\'eau, une émaciation, une faiblesse musculaire et une léthargie chez les rats traités à l\'extrait. Cependant, ces changements se sont complètement rétablis après 28 jours de traitement.'),
        createData('Cedrela serrata', '-', 'Utilisé en médecine conventionnelle pour le traitement de diverses maladies telles que le diabète, la jaunisse, les maladies du foie, la diarrhée, la fièvre, la dysenterie infantile chronique, les vers intestinaux, l\'hypertension, les maladies de la peau et du sang.'),
        createData('Markhamia lutea', '-', 'L\'arbre est considéré comme un traitement efficace pour les affections cutanées, les plaies et les démangeaisons. Les feuilles et l\'écorce sont pilées avec du jus de cédrat jusqu\'à l\'obtention d\'une pâte dont le liquide est exprimé pour être utilisé comme lotion, tandis que la lie résiduelle peut être utilisée en frottant vigoureusement. En cas de plaies, la lie est appliquée comme un pansement humide sous un bandage. La plante est également utilisée comme rajeunissant et diurétique, et est administrée [méthodes non indiquées] pour l\'œdème des jambes et l\'éléphantiasis du scrotum, pour traiter les chancres et les douleurs rhumatismales, et est prise pour le traitement des voies respiratoires et de la fièvre des marais. Les feuilles et l\'écorce sont utilisées pour soigner les maux de dents (en gargarisme) et les convulsions chez les enfants. Les racines sont également utilisées contre les maladies vénériennes et pour prévenir l\'avortement.'),
    ];



    return (

        <>
            <div className="pirogueflex" style={{ display: "flex" }}>

                <Accordion defaultExpanded className="pirogueaccordion" style={{ width: "100%", padding: 2 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="accordion">LA NATURE QUI SOIGNE</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <TableContainer className="pirogueTableContainer" component={Paper} sx={{ maxHeight: 550, overflow: 'scroll' }}>
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

            </div></>
    )
}

export default Plant_medicine;