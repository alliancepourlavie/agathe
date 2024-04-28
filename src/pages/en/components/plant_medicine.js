import '../../../App.css';
import * as React from "react"

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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


const PlantMedicine = () => {

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
        createData('Phragmites australis', 'Root - raw or cooked like potatoes. The flavour and texture are best when the root is young and growing. It can be dried, coarsely ground and used as a porridge. Young shoots - raw or cooked. These are best used before the leaves have formed, when they are truly delicious. They can be used in the same way as bamboo shoots. Partially unfolded leaves can be used as a pot herb. Seeds - raw or cooked. They can be ground into powder and used as flour. The seed is rather small and difficult to remove from the husk, but is said to be highly nutritious. A sugar is extracted from the stalks or injured stems. With a sweet taste similar to liquorice, it can be eaten raw or cooked. The stalks can be boiled in water to obtain the sugar. The sweet gum that escapes from the stalks can be rolled into balls and eaten like a sweet. A powder extracted from the dried stalks can be moistened and toasted.', 'The leaves are used to treat bronchitis and cholera, and the ash from the leaves is applied to infected wounds. A decoction of the flowers is used to treat cholera and food poisoning. The ashes are styptic. The stem is antidotal, antiemetic, antipyretic and cooling. The root is antiasthmatic, antiemetic, antipyretic, antitussive, depurative, diuretic, febrifuge, lithontripic, sedative, sialagogue and stomachic. It is used internally to treat diarrhoea, fevers, vomiting, coughs accompanied by thick, dark mucus, lung abscesses, urinary tract infections and food poisoning (particularly from seafood). Externally, it is mixed with gypsum and used to treat halitosis and toothache. The root is harvested in autumn and juiced or dried for use in decoctions.'),
        createData('Spathodea campanulata', '-', 'Renowned for controlling epilepsy and convulsions, kidney disease, urethritis and as an antidote to animal poisons. Decoctions of the plant\'s stem are also used against eczema, fungal skin diseases, herpes, stomach upsets and diarrhoea. A decoction of the leaves is used to treat pain, inflammation, constipation and dysentery. The extract also caused reduced food and water intake, emaciation, muscle weakness and lethargy in rats treated with the extract. However, these changes completely recovered after 28 days of treatment.'),
        createData('Cedrela serrata', '-', 'Used in conventional medicine for the treatment of a variety of illnesses including diabetes, jaundice, liver disease, diarrhoea, fever, chronic infantile dysentery, intestinal worms, hypertension, skin and blood disorders.'),
        createData('Markhamia lutea', '-', 'The tree is considered an effective treatment for skin conditions, wounds and itching. The leaves and bark are crushed with citron juice until a paste is obtained, the liquid of which is expressed for use as a lotion, while the residual dregs can be used by rubbing vigorously. In the case of wounds, the dregs are applied as a moist dressing under a bandage. The plant is also used as a rejuvenator and diuretic, and is administered [methods not indicated] for oedema of the legs and elephantiasis of the scrotum, to treat cankers and rheumatic pain, and is taken for the treatment of respiratory tract and swamp fever. The leaves and bark are used to treat toothache (as a gargle) and convulsions in children. The roots are also used against venereal diseases and to prevent abortion.'),
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
                        <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="accordion">NATURE THAT HEALS. IDENTIFIABLE BIOLOGICAL HERITAGE AROUND THE KADUTU AND BAGIRA LANDING SITES</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <TableContainer className="pirogueTableContainer" component={Paper} sx={{ maxHeight: 550, overflow: 'scroll' }}>
                            <Table className="pirogueTable" sx={{ minWidth: 200, fontSize: 15 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
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

            </div></>
    )
}

export default PlantMedicine;