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
import Basemap from "./components/basemap";
import Bukavumap from "./components/bukavumap";
import Glissement from "./components/glissement";
import Mapillary from "./components/mapillary";
import Collective from "./components/collective";
import Maman from "./components/maman";


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
                <Typography component='div' className="agathe" sx={{ mt: 2 }}>AGATHE,<br /> MATRIARCH JUU YA MAJI<br /><br /><br /></Typography>
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
              <Typography component='div' className="title_3"><br />Jina langu ni Agathe na mimi ni mmoja wa mababa wa Ziwa Kivu, katika Jamhuri ya Kidemokrasia ya Kongo.<br />Nilienda kuvua samaki ili kulisha watoto wangu wanane. Nilipata ujuzi wa mababu kutoka kwa wavuvi wa kitamaduni na kuupitisha kwa kikundi cha wanawake ambao, kama mimi, walijikuta hawawezi kutunza familia zao<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />Tulikuja pamoja ili kukabiliana na changamoto. usizungumzie uvuvi wa kimila na kienyeji katika Ziwa Kivu bila sisi wavuvi jasiri wanaopigania uwezeshaji wao katika mazingira ya wanaume wengi ambayo yanatufanya tusionekane<br />
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
              <Typography component='div' className="title_3"><br />Ukichukua mashua kutoka Goma hadi Bukavu, ukiacha kisiwa cha Idjwi upande wa kushoto, unaweza kuona baadhi yetu tukivua samaki kwenye maji na kwenye mwambao wa ghuba za kusini za Ziwa Kivu, katika vijiji vidogo karibu na jiji<br />
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
                <Typography component='div' className="title_3"><br /><Link to="/sw-SW-carte">Kwa pamoja tulichora ramani kueleza tunapoishi na ni maeneo gani muhimu kwetu sisi wavuvi</Link><br />
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
              <Typography component='div' className="title_3">Tuna kopeshaka mitubwi nama fillet kwaku fanya kazi yetu ya uvuvikwania kuna kati yetu mwenyianakuwaka na filet. Tuna vuwa kwa jumla magaribi kando la bahari ya bagira pa Bukavu<br />
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>VIFAHA NAMA MBINU ZA UVUVI<br />
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>MAENEO YA UVUVI NA MAENEO YA KUTUA<br />
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

          {/* <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Pirogue />
            </FullpageSection>
          </div> */}

          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Kama wavuvi wa kitamaduni<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Une unité de pêche coutumière est définie au Congo a comme une pirogue utilisant les engins traditionnels incluant la senne de plage ou des filets dormants dont la longueur combinée n'excède pas 1.000m ou un Lusenga (cadre en bois supportant le filet moustiquaire). Au Congo un pêcheur “Individuel” qui n'utilise pas une pirogue est aussi reconnu"
                  action={action} />, tunalipia mara kwa mara leseni ya uvuvi ya kila mwaka<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Le coût du permis varie en fonction de la catégorie de pêche dont les trois principales sont: la pêche au filet maillant, la pêche au filet carrelet et la pêche à la senne de plage. Pour les autres engins de pêche, le coût est relativement moindre et très variable"
                  action={action} />, ambayo inategemea uanachama katika chama cha wavuvi. Kwa upande wetu, Chama cha Maendeleo ya Wavuvi Wasiojua Kusoma na Kuandika wa Kivu Kusini<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
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
              <Typography component='div' className="title_3">Ziwa letu ni duni kwa wingi na utofauti wa wanyama wa samaki. Hakuna hata spishi 30, ambazo nyingi zilianzishwa katika karne iliyopita katika jaribio la kuunda tasnia ya uvuvi ambayo ilikidhi mahitaji ya ndani na ya kikanda<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="La diversité des poissons est intrinsèquement liée à l'histoire géologique du lac. Le lac a connu des événements hydrothermaux qui ont eu de graves conséquences sur son écosystème et donc sur la faune piscicole. Entre le nord et le sud, il y a une différence dans la répartition des poissons qui rappelle la différence de paysage entre les deux parties du lac. Le nord est recouvert d'un substrat rocheux qui favorise une grande diversité d'espèces. La partie sud, où nous nous trouvons, est peuplée de macrophytes et la rive est couverte de manière irrégulière d'habitats rocheux abritant également une grande diversité de poissons là où la végétation riveraine n'a pas été défrichée et loin des centres habités. En outre, la partie nord est plus intacte que la partie sud."
                  action={action} />. Zaidi ya hayo, samaki wanaovuliwa wanapungua kutokana na upotevu wa makazi kutokana na shughuli za kibinadamu katika maeneo ya pwani na matukio ya hivi karibuni kama vile upanuzi wa ufugaji wa samaki kwenyengome<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>ORODHA YA SAMAKI WALIOPATIKANA PWANI ZA BAGIRA NA KADUTU<br />
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
                <Typography component='div' className="title_3"><Link to="/sw-SW-dessin">Ili kujenga kumbukumbu ya ziwa na viumbe hai wake, tuliwaomba mabinti zetu na wana wetu wa kiume kuwawakilisha ili kuwafahamisha umuhimu wa kuhifadhi mazingira ili kuhakikisha uhai wa uvuvi wa kimila kama njia ya kujikimu</Link><br />
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>HADITHIZETU<br />
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
              <Typography component='div' className="title_3"><br />Maman Agathe na Maman Cynthia walitufundisha kwamba kama wanawake, tunaweza kujikimu kutokana na uvuvi, kwa uhuru kamili, dhidi ya miiko yote na unyanyapaa wa kijamii. tunakabiliwa na matatizo ya kifedha, vifaa duni, lakini tunapambana ili kuhudumia familia zetu kupitia uvuvi<br />
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
              <Typography component='div' className="title_3">Mama zetu walitufundisha kwamba ili kuvua samaki, lazima utunze maji na mwambao wa ziwa. vinginevyo hatutakuwa na samaki tena<br />
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
              <Typography component='div' className="title_3">Tunajua jukumu la mimea inayochipuka kwa kuenea kwa samaki katika maeneo ya kuzaliana, tunafuatilia maeneo ya kuzaliana kupita kiasi kwa mimea iliyo chini ya maji kama vile Hydrilla verticillata kuiondoa inapofunika uso wa maji, tunaisafishabenki za uchafu wa plastiki na taka, tunafuatilia maji kwa kuripoti uwepo wa vyanzo vya uchafuzi<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Afya zetu na za samaki ziko hatarini. Kwa kukosekana kwa mfumo wa usafi wa mazingira, nyumba, soko na viwanda vinavyoangalia ziwa hutiririsha maji yao machafu moja kwa moja ndani yake<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="L'ordonnance n° 40/013/BUR/BKV/2006 du 5 février 2006 relative à la protection des berges de la rive de Bukavu stipule qu'il est interdit de bâtir à moins de 10 mètres de la berge. Et qu'il est interdit le remblayage par sac, boue, fer; clôture, bois ou planche et par la terre dans le littoral du lac Kivu. Ce qui se produit régulièrement autour des sites de débarquement et dans les zones où nous pêchons."
                  action={action} />, pamoja na taka zenye sumu, ngumu, kioevu na za nyumbani. Ziwa linatumiwa na wenyeji kutokana na upatikanaji mdogo wa maji ya kufulia na kuosha vyombo<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="La direction régionale de la Régie de distribution d'eau (REGIDESO) au Sud-Kivu a annoncé qu'elle avait besoin de 1,5 million USD pour résoudre la pénurie d'eau dans la ville de Bukavu et ses environs. L’usine de traitement d’eau située à Murhundu existe depuis 1950, conçue pour desservir 6 millions d’habitants de la ville de Bukavu. A ce jour, elle dessert à peu près 20 millions d’habitants. Et le manque d'eau potable a des conséquences sur la qualité de l'eau du lac, qui est utilisée pour tous les usages domestiques. Il est alarmant de constater que les cas de noyade de femmes et d'enfants se multiplient et qu'ils surviennent précisément au moment des interruptions de service."
                  action={action} />, pamoja na kazi nyingine za nyumbani, hivyo kuwa tatizo la afya ya umma<br />
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
              <Typography component='div' className="title_3">Magonjwa yanayotokana na maji yanaenea haraka. malaria, tumbo kuumwa, kuwasha, kipele, homa ya matumbo, kuhara damu, minyoo ya matumbo, kipindupindu. magonjwa haya yanaongezwa yale ambayo kwa kawaida yanahusishwa na sekta ya uvuvi, kama vile ngiri kutokana na kunyanyua mizigo na vifaa na maambukizo kutokana na mguso wa kudumu wa maji na viumbe hai<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center",
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Maeneo ya kutua ya Bagira na Kadutu, ambayo yapo karibu na midomo ya mito ya Wesha na Tsula, kwa sababu ya kijiografia na majimaji, ni sehemu za mkusanyiko wa taka na uchafu. mara kwa mara safisha ghuba kwa kuzikusanya kwa nyavu zetu, kama vile uvuvi wa samaki aina ya beach seine<br /><br />
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
              <Typography component='div' className="title_3">Mabomba ya kusambaza maji na njia za umeme katika eneo la kutua la Kadutu yanatishiwa na hatari ya maporomoko ya ardhi katika vyanzo vya Mto Wesha. miteremko inayopakana na ziwa tayari inajulikana kwa hatari za kijiolojia na ajali mbaya kutokana na maporomoko ya ardhi, lakini kwa kuongezeka kwa uwepo wa binadamu tangu 1950 na athari za mabadiliko ya hali ya hewa kwa mvua ya ukubwa na nguvu ya kipekee,hatari zinaongezeka<Button onClick={handleClick} className="snack" ><u>RAMANI</u></Button>
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
              <Typography component='div' className="title_3"><br />Maeneo ya kutua na masoko yana vifaa duni vya usafi wa mazingira na havitoshi. Uhaba wa maji na ukosefu wa rasilimali hufanya hali ya afya kuwa mbaya. usafi wakati wa kipindi cha hedhi bado ni changamoto halisi. Wanawake wako katika hatari kubwa ya kuhatarisha maisha ya maambukizo ya urogenital. Ni mashirika kama Alliance for Life ambayo hutupa vifaa vya heshima na dhana za usafi wa hedhi<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">"Samaki hawachukui chambo cha wanawake walio na hedhi."Aina hii ya unyanyapaa, pamoja na vyanzo vingine vya unyanyapaa unaozingatia jinsia<Button onClick={handleClick} className="snack"><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Comme toutes les considérations culturelles liées à certaines coutumes rétrogrades, en particulier le mariage précoce et le mariage par rapt, l'obligation de supporter la charge financière de la famille, le refus de la belle-famille d'hériter d'une partie de la succession du mari, les accusations de sorcellerie à l'encontre des veuves."
                  action={action} />, ambayo mara nyingi hutetewa na kukuzwa na mamlaka za mitaa, kijeshi na kimila, ni moja ya sababu za unyanyasaji wa kila siku ambao sisi ni waathirika. unyanyasaji wa baharini unaosababisha wizi wa vyandarua, maana yake kutozihudumia familia zetu<br />
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
              <Typography component='div' className="title_3">Hatari na kesi za unyanyasaji wa kimwili, kiuchumi na kisaikolojia huongezeka kwa miili yetu ya wanawake, kwenye tovuti ya kutua (kati ya uporaji, ubakaji, wizi, uharibifu mbaya, mauaji), sokoni (ambapo ushuru haramu hutolewa, hali zisizo za usafi zinatambaa; na inaweza kukosamaeneo), kwenye barabara zinazoturudisha kwenye makazi yetu (ambapo unyang'anyi na unyanyasaji wa kimwili hutokea kwenye vizuizi visivyo halali), kwenye vituo vya kusambaza maji (ambapo ufikiaji unahitaji safari ndefu, kuteseka kwa vyombo vya kutosha na hatari ya kuibiwa na kukiukwa) , na kwandani ya nyumba zetu ambapo tayari tumekumbwa na unyanyasaji wa nyumbani<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Kwetu sisi kuwa salama maana yake ni kuishi kwa amani, kutembea kwa uhuru kila mahali bila kusumbuliwa na mtu yeyote na kusikilizwa, yaani kutoa maoni yetu na kushauriwa wakati maamuzi yanapotolewa ndani ya familia na kutoka katika jamii. Kuwa salama kunamaanisha kuweza kulisha binti zetu na wana wetu, kuwaelimisha na kuwatunza inapohitajika. Kuwa salama kunamaanisha kuwa na uwezo wa kupata haki za kiuchumi (kurithi, kununua, kumiliki), kijamii na kitamaduni zilizopigwa marufuku kwa misingi ya jinsia. mashirika kama vile Alliance for Life hutupatia nafasi ya mazungumzo ambapo tunaweza kujenga usalama wetu wa pamoja<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          {/* ///////////////////////////// */}
          {/* //////////END CARE/////////// */}
          <FullpageSection style={{
            height: '60vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <hr></hr>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Endelea kutusikiliza, kuunga mkono matendo yetu, kutusaidia kutimiza ndotozetu<br />
              </Typography>
              <hr></hr>
            </CardContent>
            <CardContent sx={{ maxWidth: 630 }}>
              <Typography component='div' className="footer">
                « Agathe, matriarch juu ya maji » ni mradi unaofanywa na ALLIANCE POUR LA VIE ASBL kulingana na dhana ya Rosine NSIMIRE HAMULI na Alessandro MUSETTA. Hadithi hii ya medianuwai iliundwa kati ya Januari na Aprili 2024 kwa ajili ya kujitawala, kusikiliza na kujifunza na wanawake wavuvi kutoka maeneo ya kutua ya Kadutu na Bagira, katika jimbo la Kivu Kusini, DRC.<br /><br />
              </Typography>
              <Typography component='div' className="footer1" >
                <br />Contact<br />
                <Link to="mailto:alliancevie.rdc@gmail.com" >alliancevie.rdc@gmail.com</Link>
              </Typography>
              <Typography component='div' className="footer1">
                <br />ALLIANCE pour la VIE ASBL TIMU<br />
                Alice KAMWENGE, Regina Sifa NKUNZIMWAMI, Dieudonné MANGO<br /><br />
              </Typography>
              <Typography component='div' className="footer">
                Shukrani kubwa kwa PARDICOLOR ambayo, kupitia msaada wake wa kifedha, ilisaidia wavuvi wa jimbo la Kivu Kusini kuongeza sauti zao.<br />
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
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="footer2">
                VYANZO VYA MAARIFA<br />
                <i>Nyavu na mbinu za uvuvi</i><br />
                Désiré AKONKWA BALAGIZI (Bukavu), Simon AHOUANSOU MONTCHO (Kétou, Bénin), Muderhwa NSHOMBO (Uvira), Philippe LALÈYÈ (Cotonou, Bénin)<br /><br />
                <i>Ikolojia ya Ziwa Kivu</i><br />
                Boniface KANINGINI (Bukavu), Pascal MASILYA (Butare, Rwanda), Laetitia NYINA-WAMWIZA (Butare, Rwanda), Tête BAKENGULA MUCHINDIGIRI (Bukavu), Jean Augustin RUBABURA (Bukavu), Lagrisi NDATABAYE (Bukavu), Théophile NGOTULY MANA (Bukavu), Benjamin NCANGU BAHINDWA (Bukavu), Aganze BIRHAHEKA (Bukavu), Isaac AHANA MUNGU MAKELELE (Bukavu), Gérard IMANI (Bukavu), Kaliza TCHANGABOBA (Bukavu), Désiré AKONKWA BALAGIZI (Bukavu), Lushombo MATABARO (Bukavu), Lina ALEKE (Bukavu), Mbalassa MULONGAIBALU (Bukavu), Nshombo MUDERHWA (Bukavu)<br /><br />
                <i>Uchafuzi na uchafuzi wa maji ya Ziwa Kivu</i><br />
                Dieudonné WAFULA MIFUNDU (Bukavu), Désiré AKONKWA BALAGIZI (Bukavu), Dieu-Merci AMANI BADOSA (Bukavu), Vedaste CITULI ALINIRHU (Bukavu / Louvain), Kelly YENE KARHAKUBWA (Bukavu)<br /><br />
                <i>Mabadiliko ya hali ya hewa na hatari za mazingira</i><br />
                Sylvain MATABARO KULIMUSHI (Bukavu), Toussaint BIBENTYO MUGARUKA (Bukavu), Walère SAHANI MUHINDO (Butembo)<br /><br />
                <i>Afya ya umma</i><br />
                Lumami KAPEPULA (Uvira), Lutili MATESO (Bukavu), Amundala SHEKANI (Uvira), Séverin MUYISA (Bukavu), Théophile NDIKUMANA (Bujumbura, Burundi)
              </Typography>
              <br /><br /><br />
              <Typography component='div' className="footer1">LANGUES DISPONIBLES<br /></Typography>
              <Button className="translation"><a href="https://alliancepourlavie.github.io/agathe/#sw-SW">KISWAHILI</a></Button>
              <Button className="translation"><a href="https://alliancepourlavie.github.io/agathe/#en-GB">ENGLISH</a></Button>
              <Button className="translation"><a href="https://alliancepourlavie.github.io/agathe/#fr-CD">FRANÇAIS</a></Button>
            </CardContent>
          </FullpageSection>


        </FullPageSections>

      </Fullpage ></>
  )
}


export default SWSW;