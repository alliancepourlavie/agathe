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

    function createData(plan, edib, med ) {
        return { plan, edib, med };
    }

    const rowsBoat = [
        createData('Phragmites australis', 'Root - raw or cooked like potatoes. It contains up to 5% sugar. The flavour and texture are best when the root is young and still growing. It can be dried, ground coarsely and used as a porridge. Young shoots - raw or cooked. They are best if used before the leaves form, when they are really delicious. They can be used like bamboo shoots. The partly unfolded leaves can be used as a potherb and the Japanese dry young leaves, grind them into a powder and mix them with cereal flour when making dumplings. The stems are reported to contain 4.8 g protein, 0.8 g fat, 90.0 g total carbohydrate, 41.2 g fibre, and 4.4 g ash. Seed - raw or cooked. It can be ground into a powder and used as a flour. The seed is rather small and difficult to remove from the husk but it is said to be very nutritious. A sugar is extracted from the stalks or wounded stems. A sweet liquorice-like taste, it can be eaten raw or cooked. The stems can be boiled in water and then the water boiled off in order to obtain the sugar. A sugary gum that exudes from the stems can be rolled into balls and eaten as sweets. A powder extracted from the dried stems can be moistened and roasted like marshmallow.', 'The leaves are used in the treatment of bronchitis and cholera, the ash of the leaves is applied to foul sores. A decoction of the flowers is used in the treatment of cholera and food poisoning. The ashes are styptic. The stem is antidote, antiemetic, antipyretic and refrigerant. The root is antiasthmatic, antiemetic, antipyretic, antitussive, depurative, diuretic, febrifuge, lithontripic, sedative, sialagogue and stomachic. It is taken internally in the treatment of diarrhoea, fevers, vomiting, coughs with thick dark phlegm, lung abscesses, urinary tract infections and food poisoning (especially from sea foods). Externally, it is mixed with gypsum and used to treat halitosis and toothache. The root is harvested in the autumn and juiced or dried for use in decoctions.' ),
        createData('Spathodea campanulata', '-', 'Spathodea campanulata is commonly known as the African tulip tree. The plant is widely distributed in Nigeria and other West African countries and is reputedly used for epilepsy and convulsion control, against kidney disease, urethritis, and as antidote against animal poisons. Decoctions of the plant stem are also employed against eczemas, fungal skin disease, herpes, stomach ache, and diarrhea. Its leaf decoction is used in the treatment of pain, inflammation, constipation, and dysentery. The plant is also reported to exhibit antiplasmodial activity and analgesic and anti-inflammatory actions. Its subchronic toxicity study showed that oral administration of 750, 1000, and 3000 mg/kg/day of the ethanol leaf extract of the plant to Sprague-Dawley rats for 90 days caused dose and time-dependent hepatotoxicity marked by elevations in the serum liver enzyme markers (aminotransferase and alkaline phosphatase). Its use also improved hemograms in the treated rats while causing no effects on other measured hematological and biochemical parameters. The extract also caused decreased food and water intake, emaciation, muscle weakness, and sluggishness in the extract-treated rats. However, these changes showed complete recovery after 28 days posttreatment (oral toxicity reversibility study)' ),
        createData('Eucalyptus spp', '-', '-' ),
        createData('Cedrela serrata', '-', 'medicinal plant not only used for constructions but also an important conventional medicine for the treatment of various diseases such as; diabetes, jaundice, liver diseases, diarrhea, fever, chronic infantile dysentery, intestinal worms, hypertension, skin and blood diseases.' ),
        createData('Markhamia lutea', '-', 'The tree is considered to be an effective treatment for skin-affections, sores and itch. The leaves and bark are pounded up with citron juice to a paste, and the liquid is expressed for use as a lotion, while the residual lees may be used with vigorous rubbing. In the case of sores, the lees are applied as a wet dressing under a bandag. The plant is also used as a rejuvenator and diuretic, and is given [methods not stated] for oedema of the legs and elephantiasis of the scrotum, to treat chancres and rheumatic pain, and is taken for treatment of the respiratory tract and in swamp-fever. The leaves and bark are used as medicine for tooth-ache(as a gargle) and for convulsion in children. Roots are also used against venereal diseases and for preventing abortion.' ),
    ];



    return (

        <>
            <div className="pirogueflex" style={{ display: "flex" }}>

                <Accordion defaultExpanded className="pirogueaccordion" style={{ width: "100%", padding: 2}}>
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