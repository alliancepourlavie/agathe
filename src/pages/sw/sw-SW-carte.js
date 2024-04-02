import '../../App.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Cartecarte from './components/carte';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const SWcarte = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>

            <Typography component='div' className="title_5" /* style={{fontSize:"0.8rem !important" }} */><br />
                <Link to="/sw-SW" ><br />⇷ Retour à la page d'accueil</Link><br />
            </Typography>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="agathe" style={{ textTransform: "uppercase" }}>La carte du lac Kivu d'après les pêcheuses<br /><br />
                </Typography>
            </CardContent>



            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title_3"><br /><br />Nous avons réuni 24 filles et fils de pêcheuses du site de débarquement de Bagira pour un exercice de dessin. Ceci afin de les familiariser avec la pratique de l'expression artistique, en prenant pour sujet le système écologique dans lequel elles et ils vivent.<br />
                </Typography>
            </CardContent>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="mutombodescr"><br />Enfin, notre activité a été clôturé par la prise d’une photo de famille et le partage du remboursement de transport pour tous les participant dans l’activité et l’eau à boire pour les enfants. Cette activité a été marqué par la présence de AGATH sous la coordination et la supervision de Madame Rosine NSIMIRE et la facilitation de Mademoiselle  Regina  Sifa  NKUNZIMWAMI tous deux membre d’ALLIANCE POUR LA VIE. <br />
                </Typography>
            </CardContent>

            <Cartecarte />
        </>
    )
}


export default SWcarte;