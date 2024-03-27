import '../../../App.css';
import * as React from "react"
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const Maman = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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

            <div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <ReactPlayer
                                    width='100%'
                                    height='250px'
                                    controls volume={0.1}
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: "nofullscreen",
                                            },
                                        },
                                    }}
                                    light='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman1.png'
                                    url='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman1.mp4'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <ReactPlayer
                                    width='100%'
                                    height='250px'
                                    controls volume={0.1}
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: "nofullscreen",
                                            },
                                        },
                                    }}
                                    light='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman2.png'
                                    url='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman2.mp4'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <ReactPlayer
                                    width='100%'
                                    height='250px'
                                    controls volume={0.1}
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: "nofullscreen",
                                            },
                                        },
                                    }}
                                    light='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman3.png'
                                    url='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman3.mp4'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <ReactPlayer
                                    width='100%'
                                    height='250px'
                                    controls volume={0.1}
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: "nofullscreen",
                                            },
                                        },
                                    }}
                                    light='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman4.png'
                                    url='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman4.mp4'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <ReactPlayer
                                    width='100%'
                                    height='250px'
                                    controls volume={0.1}
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: "nofullscreen",
                                            },
                                        },
                                    }}
                                    light='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman5.png'
                                    url='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman5.mp4'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '100%' }}>
                                <ReactPlayer
                                    width='100%'
                                    height='250px'
                                    controls volume={0.1}
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: "nofullscreen",
                                            },
                                        },
                                    }}
                                    light='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman6.png'
                                    url='https://www.alessandromusetta.com/geo/tiles/agathe/data/maman6.mp4'
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        </>
    )
}

export default Maman;