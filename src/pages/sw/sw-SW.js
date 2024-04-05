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
import Carte from "../../data/img/cover_carte.png";
import Pardicolor from "../../data/img/pardicolor.png";

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

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />Je m'appelle Agathe et je suis l'une des matriarches du lac Kivu, en République Démocratique du Congo.<br />Je suis partie pêcher pour nourrir mes huit enfants. J'ai acquis le savoir ancestral des pêcheurs coutumiers et je l'ai transmis à un groupe de femmes qui, comme moi, se sont retrouvées dans l'incapacité de subvenir aux besoins de leur famille<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />Nous nous sommes unis pour relever les défis. Ne parlez pas de pêche coutumière et artisanale au lac Kivu sans nous, les courageuses pêcheuses qui se battent pour leur autonomisation dans un environnement à majorité masculine qui nous invisibilise<br />
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
              light='https://www.alessandromusetta.com/geo/tiles/agathe/data/bagiralight.png'
              url='https://www.alessandromusetta.com/geo/tiles/agathe/data/bagira_from_water.mp4'
            />
          </FullpageSection>

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />En prenant le bateau de Goma à Bukavu, laissant l'île d'Idjwi sur la gauche, vous pouvez voir certaines d'entre nous pêcher dans les eaux et sur les rives des baies méridionales du lac Kivu, dans de petits villages aussi proches de la ville<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          {/* //////START CARTOGRAPHY////// */}
          {/* ///////////////////////////// */}
          <div className="notepad">
            <FullpageSection className='dessin' style={{
              height: '90vh',
              padding: '1em',
              // backgroundColor: 'rgba(46, 42, 107, 1)'
            }}>
              <CardContent sx={{ maxWidth: 800 }}>
                <div style={{ padding: 10, width: "40%" }}>
                  <Link to="/sw-SW-carte">
                    <CardMedia
                      className='pirogueimg'
                      component="img"
                      alt="Carte"
                      height="400"
                      image={Carte}
                      sx={{ objectFit: "contain" }} /></Link>
                </div>
                <Typography component='div' className="title_3"><br /><Link to="/sw-SW-carte">Nous avons dessiné collectivement une carte pour expliquer où nous vivons et quels sont les endroits les plus importants pour nous, les pêcheuses</Link><br />
                </Typography>
                <Typography component='div' className="title_5" ><br />
                  <Link to="/sw-SW-carte">En savoir plus⇸</Link><br />
                </Typography>
              </CardContent>
            </FullpageSection>
          </div>
          {/* ///////////////////////////// */}
          {/* ///////END CARTOGRAPHY/////// */}

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

          {/* ///////////////////////////// */}
          {/* //////END INTRODUCTION/////// */}

          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>LES ENGINS ET TECHNIQUES DE PÊCHE<br />
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
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>ZONES DE PÊCHE ET SITES DE DÉBARQUEMENT<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <Suspense fallback={<div><h2>🌀 Loading...</h2></div>} >
              <FullpageSection style={{
                height: '90vh',
                padding: '1em',
              }}>
                <Suspense fallback={<div> Please Wait... </div>} ><Basemap /></Suspense>
              </FullpageSection>
            </Suspense>
          </div>

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
              <Typography component='div' className="title_3">En tant que pêcheuses coutumière<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Une unité de pêche coutumière est définie au Congo a comme une pirogue utilisant les engins traditionnels incluant la senne de plage ou des filets dormants dont la longueur combinée n'excède pas 1.000m ou un Lusenga (cadre en bois supportant le filet moustiquaire). Au Congo un pêcheur “Individuel” qui n'utilise pas une pirogue est aussi reconnu"
                  action={action} />, nous payons régulièrement un permis de pêche annuel<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Le coût du permis varie en fonction de la catégorie de pêche dont les trois principales sont: la pêche au filet maillant, la pêche au filet carrelet et la pêche à la senne de plage. Pour les autres engins de pêche, le coût est relativement moindre et très variable"
                  action={action} />, qui est subordonné à l'appartenance à une association de pêche. Dans notre cas, l'Association pour le Développement des Pécheurs Analphabètes du Sud Kivu<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
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
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Notre lac est pauvre en abondance et en diversité de la faune ichtyologique. Il n'y a même pas 30 espèces, dont beaucoup ont été introduites au siècle dernier pour tenter de créer une industrie de la pêche répondant aux besoins locaux et régionaux<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="La diversité des poissons est intrinsèquement liée à l'histoire géologique du lac. Le lac a connu des événements hydrothermaux qui ont eu de graves conséquences sur son écosystème et donc sur la faune piscicole. Entre le nord et le sud, il y a une différence dans la répartition des poissons qui rappelle la différence de paysage entre les deux parties du lac. Le nord est recouvert d'un substrat rocheux qui favorise une grande diversité d'espèces. La partie sud, où nous nous trouvons, est peuplée de macrophytes et la rive est couverte de manière irrégulière d'habitats rocheux abritant également une grande diversité de poissons là où la végétation riveraine n'a pas été défrichée et loin des centres habités. En outre, la partie nord est plus intacte que la partie sud."
                  action={action} />. De plus, les captures diminuent en raison de la perte d'habitat due aux activités humaines dans les zones littorales et de phénomènes récents tels que l'expansion de la pisciculture en cage<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Plusieurs activités anthropiques sont susceptibles d'avoir des effets négatifs sur l'écosystème du lac, en particulier le long de la zone littorale, notamment : l'exploitation du gaz méthane, l'expansion de la pisciculture en cage depuis 2018, les activités agricoles et la construction de bâtiments dans le bassin versant, les effets de la croissance de la population humaine (y compris le rejet d'eaux usées le long du bassin versant en l'absence de politiques de gestion durable associées à une faible application de la loi), et le changement climatique."
                  action={action} /><br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>LISTE DES POISSONS RENCONTRÉS SUR LES CÔTES DE BAGIRA ET KADUTU<br />
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
          <div className="notepad">
            <FullpageSection className='dessin' style={{
              height: '90vh',
              padding: '1em',
              // backgroundColor: 'rgba(46, 42, 107, 1)'
            }}>
              <CardContent sx={{ maxWidth: 800 }}>
                <div style={{ padding: 10, width: "50%" }}>
                  <Link to="/sw-SW-dessin">
                    <CardMedia
                      className='pirogueimg'
                      component="img"
                      alt="Child"
                      height="300"
                      image={Child}
                      sx={{ objectFit: "contain" }} /></Link>
                </div>
                <Typography component='div' className="title_3"><Link to="/sw-SW-dessin">Afin de construire une mémoire du lac et de ses espèces vivantes, nous avons demandé à nos filles et fils de les représenter dans le but de les sensibiliser à l'importance de la préservation de l'écosystème pour assurer la survie de la pêche coutumière en tant que moyen de subsistance</Link><br />
                </Typography>
                <Typography component='div' className="title_5" ><br />
                  <Link to="/sw-SW-dessin">En savoir plus⇸</Link><br />
                </Typography>
              </CardContent>
            </FullpageSection>
          </div>
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
              <Typography component='div' className="title_3"><br />Maman Agathe et Maman Cynthia nous ont appris qu'en tant que femmes, nous pouvons vivre de la pêche, en toute autonomie, contre tous les tabous et la stigmatisation sociale. Nous sommes confrontées à des difficultés financières, à un équipement inadéquat, mais nous nous battons pour subvenir aux besoins de nos familles par la pêche<br />
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
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Nos mamans nous ont appris que pour pêcher, il faut prendre soin des eaux et des rives du lac. Sinon, nous n'aurons plus de poissons<br />
              </Typography>
            </CardContent>
          </FullpageSection>

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
              <Typography component='div' className="title_3">Il en va de notre santé et de celle des poissons. En l'absence de système d'assainissement, les habitations, les marchés et les établissements industriels qui donnent sur le lac<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="L'ordonnance n° 40/013/BUR/BKV/2006 du 5 février 2006 relative à la protection des berges de la rive de Bukavu stipule qu'il est interdit de bâtir à moins de 10 mètres de la berge. Et qu'il est interdit le remblayage par sac, boue, fer; clôture, bois ou planche et par la terre dans le littoral du lac Kivu. Ce qui se produit régulièrement autour des sites de débarquement et dans les zones où nous pêchons."
                  action={action} /> y déversent directement leurs eaux usées, ainsi que des déchets toxiques, solides, liquides et domestiques. Le lac est exploité par la population locale en raison de l'accès limité à l'eau<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="La direction régionale de la Régie de distribution d'eau (REGIDESO) au Sud-Kivu a annoncé qu'elle avait besoin de 1,5 million USD pour résoudre la pénurie d'eau dans la ville de Bukavu et ses environs. L’usine de traitement d’eau située à Murhundu existe depuis 1950, conçue pour desservir 6 millions d’habitants de la ville de Bukavu. A ce jour, elle dessert à peu près 20 millions d’habitants. Et le manque d'eau potable a des conséquences sur la qualité de l'eau du lac, qui est utilisée pour tous les usages domestiques. Il est alarmant de constater que les cas de noyade de femmes et d'enfants se multiplient et qu'ils surviennent précisément au moment des interruptions de service."
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
              <Typography component='div' className="title_3">Les sites d'atterrissage de Bagira et Kadutu, qui se trouvent près des embouchures des rivières Wesha et Tshula, sont, pour des raisons géomorphologiques et hydrauliques, des points d'accumulation des déchets et débris. Périodiquement nettoyons la baie en les ramassant avec nos filets, à la manière d'une pêche à la senne de plage<br /><br />
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
            height: '70vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Les conduites de distribution d'eau et les lignes électriques du site de débarquement de Kadutu sont menacées par les risques de glissements dans le bassin versant de la rivière Wesha. Les versants bordant le lac sont déjà connus pour les risques hydrogéologiques et les accidents graves dus aux glissements, mais avec l'intensification de la présence humaine depuis 1950 et les effets du changement climatique avec des précipitations d'une ampleur et d'une intensité exceptionnelles, les risques s'accroissent<Button onClick={handleClick} className="snack" ><u>MAP</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="La carte montre les zones qui ont été sujettes à des glissements de terrain depuis 1959 dans le bassin versant de la rivière Wesha. Et l'on peut constater la proximité des lieux que nous fréquentons habituellement. La population installée sur ces glissements est constamment en danger. La présence d’infrastructures de desserte accentue aussi ce problème. L’aménagement peu raisonné sur les versants, l’extraction de matériaux sur le pied de certains escarpements sont des interventions anthropiques favorisant les instabilités."
                  action={action} /><br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '70vh',
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
              <Typography component='div' className="title_3"><br />Les sites de débarquement et les marchés sont dotés d'installations sanitaires inadéquates et insuffisantes. Les pénuries d'eau et le manque de moyens rendent la situation sanitaire critique. L'hygiène pendant la période menstruelle reste un véritable défi. Les femmes s'exposent à de nombreux risques d'infections urogénitales potentiellement mortelles. Ce sont des organisations comme l'<i>Alliance pour la Vie</i> qui nous fournissent des kits de dignité et des notions d'hygiène menstruelle<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">"Les poissons ne mordent pas à l'hameçon des femmes en période menstruelle". Cette forme de stigmatisation, ainsi que les autres sources de stigmatisation fondées sur le genre<Button onClick={handleClick} className="snack"><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Comme toutes les considérations culturelles liées à certaines coutumes rétrogrades, en particulier le mariage précoce et le mariage par rapt, l'obligation de supporter la charge financière de la famille, le refus de la belle-famille d'hériter d'une partie de la succession du mari, les accusations de sorcellerie à l'encontre des veuves."
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
          <FullpageSection style={{
            height: '100vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <hr></hr>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Continuez à nous écouter, soutenez nos actions, aidez-nous à réaliser nos rêves<br />
              </Typography>
              <hr></hr>
            </CardContent>
            <CardContent sx={{ maxWidth: 630 }}>
              <Typography component='div' className="footer">
                « Agathe, la matriarche au dessus de l'eau » est un projet réalisé par ALLIANCE POUR LA VIE ASBL à partir d'un concept de Rosine NSIMIRE HAMULI et Alessandro MUSETTA. Cette histoire multimédia a été créée entre janvier et avril 2024 pour l'autodétermination, l'écoute et l'apprentissage par des pêcheuses des sites de débarquement de Kadutu et Bagira, dans la province du Sud-Kivu, en RDC.<br /><br />
                Un grand merci à PARDICOLOR qui, par son soutien financier, a aidé les pêcheuses de la province du Sud-Kivu à amplifier leur voix.<br />
              </Typography>
              <div style={{ padding: 5, width: "20%" }}>
                <Link to="https://www.pardicolor.org/">
                  <CardMedia
                    className='pardicolorimg'
                    component="img"
                    alt="Pardicolor"
                    height="50"
                    image={Pardicolor}
                    sx={{ objectFit: "contain" }} /></Link>
              </div>
              <Typography component='div' className="footer1">
                <br /> ÉQUIPE de l'ALLIANCE pour la VIE ASBL<br />
                Alice KAMWENGE, Regina Sifa NKUNZIMWAMI, Dieudonné MANGO<br /><br />
              </Typography>
              <Typography component='div' className="footer2">
                SOURCES DE CONNAISSANCES<br />
                <i>Filets et techniques de pêche</i><br />
                Désiré AKONKWA BALAGIZI (Bukavu), Simon AHOUANSOU MONTCHO (Kétou, Bénin), Muderhwa NSHOMBO (Uvira), Philippe LALÈYÈ (Cotonou, Bénin)<br /><br />
                <i>Écologie du lac Kivu</i><br />
                Boniface KANINGINI (Bukavu), Pascal MASILYA (Butare, Rwanda), Laetitia NYINA-WAMWIZA (Butare, Rwanda), Tête BAKENGULA MUCHINDIGIRI (Bukavu), Jean Augustin RUBABURA (Bukavu), Lagrisi NDATABAYE (Bukavu), Théophile NGOTULY MANA (Bukavu), Benjamin NCANGU BAHINDWA (Bukavu), Aganze BIRHAHEKA (Bukavu), Isaac AHANA MUNGU MAKELELE (Bukavu), Gérard IMANI (Bukavu), Kaliza TCHANGABOBA (Bukavu), Désiré AKONKWA BALAGIZI (Bukavu), Lushombo MATABARO (Bukavu), Lina ALEKE (Bukavu), Mbalassa MULONGAIBALU (Bukavu), Nshombo MUDERHWA (Bukavu)<br /><br />
                <i>Pollution et contamination des eaux du lac Kivu</i><br />
                Dieudonné WAFULA MIFUNDU (Bukavu), Désiré AKONKWA BALAGIZI (Bukavu), Dieu-Merci AMANI BADOSA (Bukavu), Vedaste CITULI ALINIRHU (Bukavu / Louvain), Kelly YENE KARHAKUBWA (Bukavu)<br /><br />
                <i>Changement climatique et risques environnementaux</i><br />
                Sylvain MATABARO KULIMUSHI (Bukavu), Toussaint BIBENTYO MUGARUKA (Bukavu), Walère SAHANI MUHINDO (Butembo)<br /><br />
                <i>Santé publique</i><br />
                Lumami KAPEPULA (Uvira), Lutili MATESO (Bukavu), Amundala SHEKANI (Uvira), Séverin MUYISA (Bukavu), Théophile NDIKUMANA (Bujumbura, Bénin)
              </Typography>
            </CardContent>

          </FullpageSection>


        </FullPageSections>

      </Fullpage ></>
  )
}


export default SWSW;