import * as React from "react"
import { Suspense } from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../App.css'

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import CardMedia from '@mui/material/CardMedia';

import Fishyes from "./components/fish";
import Fishyesb from "./components/fish_b";
import Boats from "./components/boat";
import Pirogue from "./components/pirogue";
import Facesb from "./components/faces_b";
import PlantsB from "./components/plant_b";
import Plants from "./components/plant";
import PlantMedicine from "./components/plant_medicine";

import Child from "../../data/img/cover_child.png";

const Basemap = React.lazy(() => import('./components/basemap'));
const Bukavumap = React.lazy(() => import('./components/bukavumap'));
const Glissement = React.lazy(() => import('./components/glissement'));
const Mapillary = React.lazy(() => import('./components/mapillary'));
const Collective = React.lazy(() => import('./components/collective'));
const Maman = React.lazy(() => import('./components/maman'));


const SWSW = () => {

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
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )


  return (
    <><div className='boxheader'>
      <Button className="translation" component={Link} to="/en-GB">EN</Button>
      <div className='logo'></div><br />
    </div>


      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <div className="agathenotepad">
            <FullpageSection className="agathepng" style={{
              height: '90vh',
              padding: '1em',
            }}>
              <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="agathe" sx={{ mt: 2 }}>AGATHE,<br />LA MATRIARCHE AU DESSUS DE L'EAU<br /><br /><br /></Typography>
              </CardContent>
            </FullpageSection>
          </div>

          {/* ///////START INTRODUCTION//// */}
          {/* ///////////////////////////// */}

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <CardContent sx={{ maxWidth: 800 }}>
              </CardContent>
            </FullpageSection>
          </div>
          {/* ///////////////////////////// */}
          {/* //////END INTRODUCTION/////// */}



          {/* START BAGIRA LANDSITE SECTION */}
          {/* ///////////////////////////// */}
          <FullpageSection style={{
            backgroundColor: 'rgba(247, 245, 251, 1)',
            height: '100vh',
          }}>
            <ReactPlayer
              width='100%'
              height='100%'
              controls volume={0.1}
              light='https://www.alessandromusetta.com/geo/tiles/agathe/data/bagiralight.png'
              url='https://www.alessandromusetta.com/geo/tiles/agathe/data/bagira_from_water.mp4'
            />
          </FullpageSection>

          <div className="notepad">
            <Suspense fallback={<div> Please Wait... </div>} >
              <FullpageSection style={{
                height: '90vh',
                padding: '1em',
              }}>
                <Suspense fallback={<div> Please Wait... </div>} ><Basemap /></Suspense>
              </FullpageSection>
            </Suspense>
          </div>

          {/* //////START CARTOGRAPHY////// */}
          {/* ///////////////////////////// */}
          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="agathe" sx={{ mt: 2, fontSize: 1 }}><br /><br /><br />Lien vers la section de cartographie sociale<br />
              </Typography>
            </CardContent>
          </FullpageSection>
          {/* ///////////////////////////// */}
          {/* ///////END CARTOGRAPHY/////// */}

          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>ENGINS ET TECHNIQUES DE PECHE<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Boats />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Nous louons des pirogues et des filets pour les sorties de pêche, car aucun d'entre nous ne possède l' équipement requis. Nous pêchons généralement à la senne de plage à partir de l'aube, dans les zones littorales des petites péninsules autour de Bagira et de Kadutu<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Pirogue />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">En tant que pêcheuses coutumière<Button onClick={handleClick} className="snack" ><u>SSS</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Une unité de pêche coutumière est définie au Congo a comme une pirogue utilisant les engins traditionnels incluant la senne de plage ou des filets dormants dont la longueur combinée n'excède pas 1.000m ou un Lusenga (cadre en bois supportant le filet moustiquaire). Au Congo un pêcheur “Individuel” qui n'utilise pas une pirogue est aussi reconnu"
                  action={action} />, nous payons régulièrement un permis de pêche annuel<Button onClick={handleClick} className="snack" ><u>HHH</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Le coût du permis varie en fonction de la catégorie de pêche dont les trois principales sont: la pêche au filet maillant, la pêche au filet carrelet et la pêche à la senne de plage. Pour les autres engins de pêche, le coût est relativement moindre et très variable"
                  action={action} />, qui est subordonné à l'appartenance à une association de pêche. Dans notre cas, l'Association pour le Développement des Pécheurs Analphabètes du Sud Kivu<Button onClick={handleClick} className="snack" ><u>QQQ</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Cela ne nous protège pas du harcèlement des autres pêcheurs, des forces navales et de l'armée nationale qui contrôlent les activités de pêche. Sur la base d'une stigmatisation fondée sur le genre, ils nous considèrent comme clandestines"
                  action={action} />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(247, 245, 251, 1)',
            height: '100vh',
          }}>
            <ReactPlayer
              width='100%'
              height='100%'
              controls volume={0.1}
              light='https://www.alessandromusetta.com/geo/tiles/agathe/data/trimaranelight.png'
              url='https://www.alessandromusetta.com/geo/tiles/agathe/data/trimarane.mp4'
            />
          </FullpageSection>

          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>LISTE DES POISSONS RENCONTRES SUR LA COTE DE BAGIRA ET KADUTU<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Fishyes />
            </FullpageSection>
          </div>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Fishyesb />
            </FullpageSection>
          </div>
          {/* /////////////////////////// */}
          {/* END BAGIRA LANDSITE SECTION */}

          {/* ////////START DRAWING//////// */}
          {/* ///////////////////////////// */}
          <FullpageSection className='dessin' style={{
            height: '90vh',
            padding: '1em',
            backgroundColor: 'rgba(46, 42, 107, 1)'
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <div style={{ padding: 10, width: "40%" }}>
                <Link to="/sw-SW-dessin">
                  <CardMedia
                    className='pirogueimg'
                    component="img"
                    alt="Child"
                    height="400"
                    image={Child}
                    sx={{ objectFit: "contain" }} /></Link>
              </div>
              <Typography component='div' className="title_3" style={{ textTransform: "uppercase" }}><br /><Link to="/sw-SW-dessin">L'ecosysteme du lac aux yeux et a travers les dessins des filles et fils des pecheuses du lac Kivu</Link><br />
              </Typography>
              <Typography component='div' className="title_5" ><br />
                <Link to="/sw-SW-dessin">En savoir plus⇸</Link><br />
              </Typography>
            </CardContent>
          </FullpageSection>
          {/* ///////////////////////////// */}
          {/* /////////END DRAWING///////// */}


          {/* /////////START FACES///////// */}
          {/* ///////////////////////////// */}
          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>NOS HISTOIRES<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
              display: "flex",
              alignItems: "center"
            }}>
              <Facesb />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Maman Agathe et Maman Cynthia nous ont appris qu'en tant que femmes, nous pouvons vivre de la pêche, en toute autonomie, contre tous les tabous et la stigmatisation sociale. Nous sommes confrontées à des difficultés financières, à un équipement inadéquat, mais nous nous battons pour subvenir aux besoins de nos familles par la pêche<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '70vh',
            padding: '1em',
          }}>
            <Maman />
          </FullpageSection>

          {/* <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Marchemap />
            </FullpageSection>
          </div> */}
          {/* ///////////////////////////// */}
          {/* //////////END FACES////////// */}

          {/* /////////START CARE////////// */}
          {/* ///////////////////////////// */}
          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>SOINS ET MEMOIRE DE L'ENVIRONNEMENT<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
              display: "flex",
              alignItems: "center"
            }}>
            </FullpageSection>
          </div>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
              // display: "flex",
              alignItems: "center"
            }}>
              <PlantsB />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
          }}>
            <PlantMedicine />
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
              // display: "flex",
              alignItems: "center"
            }}>
              <Plants />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Nous connaissons le rôle des plantes émergentes pour la propagation des poissons dans les zones de reproduction, nous surveillons les zones de surreproduction des plantes submergées telles que <i>Hydrilla verticillata</i> en les éliminant lorsqu'elles couvrent la surface de l'eau, nous nettoyons les banques des débris de plastique et des déchets, nous surveillons l'eau en rapportant la présence de sources de contamination<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Il en va de notre santé et de celle des poissons. En l'absence de système d'assainissement, les habitations, les marchés et les établissements industriels qui donnent sur le lac<Button onClick={handleClick} className="snack" ><u>ZZZ</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="(((non rispetto dei 10m + scarico delle terre e rocce intorno ai landing sites)))."
                  action={action} /> y déversent directement leurs eaux usées, ainsi que des déchets toxiques, solides, liquides et domestiques. Le lac est exploité par la population locale en raison de l'accès limité à l'eau<Button onClick={handleClick} className="snack" ><u>YYY</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="(((polemica REGIDESO)))"
                  action={action} /> pour la lessive et la vaisselle, ainsi que pour d'autres fonctions domestiques, devenant ainsi un problème de santé publique<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Bukavumap />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Les maladies hydriques se propagent rapidement. Le paludisme, les maux de ventre, les démangeaisons, la gale, la fièvre typhoïde, la dysenterie amibienne, les vers intestinaux, le choléra. À ces maladies s'ajoutent celles qui sont typiquement liées au secteur de la pêche, comme les hernies dues au soulèvement de charges et d'équipements et les infections dues au contact physique permanent avec l'eau et les matières organiques<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center",
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />Les sites d'atterrissage de Bagira et Kadutu, qui se trouvent près des embouchures des rivières Wesha et Tshula, sont, pour des raisons géomorphologiques et hydrauliques, des points d'accumulation des déchets et débris. Périodiquement nettoyons la baie en les ramassant avec nos filets, à la manière d'une pêche à la senne de plage<br /><br />
              </Typography>
            </CardContent>
            <div style={{ display: "flex" }}><ReactPlayer
              width='30%'
              height='200px'
              controls volume={0.1}
              config={{
                file: {
                  attributes: {
                    controlsList: "nofullscreen",
                  },
                },
              }}
              light='https://www.alessandromusetta.com/geo/tiles/agathe/data/debris_plastic.png'
              url='https://www.alessandromusetta.com/geo/tiles/agathe/data/debris_plastic.mp4'
            />
              <ReactPlayer
                width='30%'
                height='200px'
                controls volume={0.1}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nofullscreen",
                    },
                  },
                }}
                light='https://www.alessandromusetta.com/geo/tiles/agathe/data/debris_plastic-2.png'
                url='https://www.alessandromusetta.com/geo/tiles/agathe/data/debris_plastic-2.mp4'
              /></div>
          </FullpageSection>

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Les conduites de distribution d'eau et les lignes électriques du site de débarquement de Kadutu sont menacées par les risques de glissements dans le bassin versant de la rivière Wesha. Les versants bordant le lac sont déjà connus pour les risques hydrogéologiques et les accidents graves dus aux glissements, mais avec l'intensification de la présence humaine depuis 1950 et les effets du changement climatique avec des précipitations d'une ampleur et d'une intensité exceptionnelles, les risques s'accroissent<Button onClick={handleClick} className="snack" ><u>MAP</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="(((polemica REGIDESO)))"
                  action={action} /><br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <Glissement />
          </FullpageSection>

          <Suspense fallback={<div> Please Wait... </div>} >
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
              alignItems: "center"
            }}>
              <Suspense fallback={<div> Please Wait... </div>} ><Mapillary /></Suspense>
            </FullpageSection>
          </Suspense>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Les sites de débarquement et les marchés sont dotés d'installations sanitaires inadéquates et insuffisantes. Les pénuries d'eau et le manque de moyens rendent la situation sanitaire critique. L'hygiène pendant la période menstruelle reste un véritable défi. Les femmes s'exposent à de nombreux risques d'infections urogénitales potentiellement mortelles. Ce sont des organisations comme l'<i>Alliance pour la Vie</i> qui nous fournissent des kits d'hygiène et des notions d'hygiène menstruelle<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">"Les poissons ne mordent pas à l'hameçon des femmes en période menstruelle". Cette forme de stigmatisation, ainsi que les autres sources de stigmatisation fondées sur le genre<Button onClick={handleClick} style={{ fontFamily: "Nehanda-SpiritMedium", fontSize: 14 }}><u>XXX</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="(((Considération culturelle liée à certaines coutumes rétrogrades, mariage précoce + mariage par rapt, le fait de porter le poids économique du ménage, refus par sa belle-famille d'hériter d'une partie du patrimoine de son mari - - le reti sono requisite dalla famiglia del marito morto o che l’ha abbandonata, accusée de sorcellerie)))"
                  action={action} />, souvent défendue et promue par les autorités locales, militaires et coutumières, sont l'une des causes du harcèlement quotidien dont nous sommes victimes. Tracasseries maritimes entraînant le vol de filets, ce qui signifie ne pas subvenir aux besoins de nos familles<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <Suspense fallback={<div> Please Wait... </div>} >
              <FullpageSection style={{
                height: '90vh',
                padding: '1em',
                alignItems: "center"
              }}>
                <Suspense fallback={<div> Please Wait... </div>} ><Collective /></Suspense>
              </FullpageSection>
            </Suspense>
          </div>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Les risques et les cas de violence physique, économique et psychologique prolifèrent sur nos corps féminins, au site de débarquement (entre pillages, viols, vols, destructions méchantes, tueries), au marché (où des taxes illégales sont imposées, l'insalubrité est rampante, et peut manquer des places), sur les routes qui nous ramènent à nos abris (où l'extorsion et la violence physique se produisent aux barrières illégales), aux points de distribution d'eau (où l'accès requiert un long trajet, souffrant de l'insuffisance des contenants et du risque d'être volées et violées), et à l'intérieur de nos maisons où nous avons déjà souffert de violence domestique<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Pour nous, être en sécurité signifie vivre en paix, circuler librement partout sans être inquiétée par qui que ce soit et être écouté, c'est-à-dire exprimer nos opinions et être consultés lorsque des décisions sont prises au sein de la famille et de la communauté. Être en sécurité signifie être en mesure de nourrir nos filles et nos fils, les scolariser et les soigner au besoin. Être en sécurité, signifie être en mesure d'accéder aux droits économiques (hériter, acheter, posséder), sociaux et culturels interdites sur la base du genre. Des organisations comme l'<i>Alliance pour la Vie</i> nous offrent un espace de dialogue où nous pouvons construire notre sécurité collective<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          {/* ///////////////////////////// */}
          {/* //////////END CARE/////////// */}


        </FullPageSections>

      </Fullpage ></>
  )
}


export default SWSW;