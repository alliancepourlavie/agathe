import '../../App.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Cartecarte from './components/carte';
import Cartemob from './components/carte_b';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const ENcarte = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>

            <Typography component='div' className="title_5" /* style={{fontSize:"0.8rem !important" }} */><br />
                <Link to="/en-GB" ><br />⇷ Retour à la page d'accueil</Link><br />
            </Typography>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="agathe" style={{ textTransform: "uppercase" }}>La carte du lac Kivu d'après les pêcheuses<br /><br />
                </Typography>
            </CardContent>



            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title_3"><br /><br />Nous nous sommes réunis pour dessiner une carte de notre terre ancestrale et des eaux sur lesquelles nous naviguons. Notre objectif était de comprendre quelles sont les adresses les plus importantes pour nous, où sont concentrées les ressources dont dépend notre survie, et comment elles sont reliées et éloignées les unes des autres<br />
                </Typography>
            </CardContent>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="mutombodescr"><br />Le résultat visible est un réseau de zones de pêche ancestrales insinué entre les îles et les baies du bassin sud du lac Kivu, ponctué par les marchés auxquels nous vendons notre poisson. Autour de nous, nous observons les immenses forêts qui couvrent les collines du bassin du Congo, d'où émergent des volcans, éléments naturels respectés qui nous permettent de nous orienter<br />
                </Typography>
            </CardContent>

            <div className='cartedesktop'>
                <Cartecarte />
            </div>

            <div className='cartemobile'>
                <Cartemob />
            </div>
        </>
    )
}


export default ENcarte;