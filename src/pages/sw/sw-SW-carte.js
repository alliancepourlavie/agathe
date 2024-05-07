import '../../App.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Cartecarte from './components/carte';
import Cartemob from './components/carte_b';

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
                <Typography component='div' className="agathe" style={{ textTransform: "uppercase" }}>RAMANI YA ZIWA KIVU KWA MUJIBU WA WAVUVI<br /><br />
                </Typography>
            </CardContent>



            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title_3"><br /><br />Tulikusanyika ili kuchora ramani ya ardhi ya mababu zetu na maji tunayopitia. .lengo letu lilikuwa kuelewa ni anwani zipi ambazo ni muhimu zaidi kwetu, ambapo rasilimali ambazo kuishi kwetu kunategemea zimejilimbikizia, na jinsi zinavyounganishwa na kutengwa kutoka kwa kila mmoja<br />
                </Typography>
            </CardContent>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="mutombodescr"><br />Matokeo yanayoonekana ni mtandao wa maeneo ya uvuvi wa mababu uliosingiziwa kati ya visiwa na ghuba za bonde la kusini la Ziwa Kivu, zilizoangaziwa na masoko ambayo tunauza samaki wetu. karibu nasi, tunaona misitu mikubwa inayofunika vilima vya bonde la Kongo, ambamo volkano hutoka, vitu vya asili vinavyoheshimiwa ambavyo huturuhusukujielekezawenyewe<br />
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


export default SWcarte;