import '../../../App.css';
import * as React from "react"

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Mapillary = () => {

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



    return (

        <>
            <CardContent sx={{ maxWidth: 800 }}>
                <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important", marginBottom: 3 }} className="accordion">ENTRÉE AU SITE DE DÉBARQUEMENT DE KADUTU PAR LA ROUTE NATIONALE RN2</Typography>
            </CardContent>
            <iframe title="Mapillary" width={"100%"} height={"90%"} src="https://www.mapillary.com/embed?map_style=Mapillary%20streets&image_key=1691588814561910&x=0.5183665400846057&y=0.6741471460882543&style=classic" frameBorder="0"></iframe>
        </>
    )
}

export default Mapillary;