import '../../App.css';
import React from "react";
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
                <Link to="/en-GB" ><br />⇷ Back to main page</Link><br />
            </Typography>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="agathe" style={{ textTransform: "uppercase" }}>Map of Lake Kivu as seen by fisherwomen<br /><br />
                </Typography>
            </CardContent>



            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title_3"><br /><br />We got together to draw a map of our ancestral land and the waters we navigate. Our aim was to understand which places are most important to us, where the resources on which our survival depends are found, and how they are connected and far apart<br />
                </Typography>
            </CardContent>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="mutombodescr"><br />The visible result is a network of ancestral fishing grounds woven between the islands and bays of the southern basin of Lake Kivu, punctuated by the markets where we sell our fish. All around us, we can see the immense forests that cover the hills of the Congo basin, from which volcanoes emerge, natural features that help us to find our bearings<br />
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