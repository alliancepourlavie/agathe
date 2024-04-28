import '../../../App.css';
import * as React from "react"

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Mapillary = () => {

    return (

        <>
            <CardContent sx={{ maxWidth: 800 }}>
                <Typography sx={{ WebkitTextFillColor: "rgb(105, 105, 105) !important", marginBottom: 3 }} className="accordion">ACCESS TO THE KADUTU LANDING SITE VIA THE RN2 NATIONAL ROAD</Typography>
            </CardContent>
            <iframe title="Mapillary" width={"100%"} height={"90%"} src="https://www.mapillary.com/embed?map_style=Mapillary%20streets&image_key=1691588814561910&x=0.5183665400846057&y=0.6741471460882543&style=classic" frameBorder="0"></iframe>
        </>
    )
}

export default Mapillary;