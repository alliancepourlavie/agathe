import * as React from "react"
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


const ENEN = () => {

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
      <Button className="translation" component={Link} to="/">SW</Button>
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
                <Typography component='div' className="agathe" sx={{ mt: 2 }}>AGATHE,<br />THE MATRIARCH ABOVE THE WATER<br /><br /><br /></Typography>
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
              <Typography component='div' className="title_3"><br />My name is Agathe, a matriarch from the Lake Kivu in the Democratic Republic of Congo.<br />I went fishing to feed my eight children. I acquired the ancestral knowledge of customary fishers and passed it on to a group of women who, like me, found themselves unable to sustain their families<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />We joined hands to meet the challenges. Please do not speak of customary and artisanal fishing in Lake Kivu without us, the courageous fisherwomen who are struggling for their empowerment in a male-dominated environment that makes us invisible<br />
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
              <Typography component='div' className="title_3"><br />If you travel by boat from Goma to Bukavu, passing Idjwi Island to the left, you can see some of us fishing above the waters and along the shores of the southern bays of Lake Kivu, in small villages as close to the city<br />
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
                  <Link to="/en-GB-carte">
                    <CardMedia
                      className='pirogueimg'
                      component="img"
                      alt="Carte"
                      height="400"
                      image={Carte}
                      sx={{ objectFit: "contain" }} /></Link>
                </div>
                <Typography component='div' className="title_3"><br /><Link to="/en-GB-carte">We collectively sketched a map to explain about where we live and which places are most important to us as fisherwomen</Link><br />
                </Typography>
                <Typography component='div' className="title_5" ><br />
                  <Link to="/en-GB-carte">Find out more⇸</Link><br />
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
              <Typography component='div' className="title_3">We rent pirogues and nets for fishing trips, as none of us own the requisite equipment. Early in the morning we take to the water with seines, remaining in the coastal areas of the small peninsulas around Bagira and Kadutu<br />
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>FISHING GEAR AND FISHING TECHNIQUES<br />
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>FISHING GROUNDS AND LANDING SITES<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
            }}>
              <Basemap />
            </FullpageSection>
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
              <Typography component='div' className="title_3">As customary fisherwomen<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="A customary fishing unit is defined in the DRC as a pirogue using traditional gear including seine nets or drift nets whose combined length does not exceed 1,000m or a Lusenga (wooden frame supporting the mosquito net). In the DRC, an individual fisherman who does not use a pirogue is also recognised"
                  action={action} />, we regularly pay an annual fishing permit<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="The cost of the licence varies according to the fishing category, the three main ones being: gillnetting, plaice netting and beach seining. For other fishing gears, the cost is relatively lower and very variable"
                  action={action} />, which is conditional on membership of a fishing association. In our case, the Association pour le Développement des Pécheurs Analphabètes du Sud Kivu (Association for the Development of Illiterate Fishermen of South Kivu)<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="It doesn't protect us from harassment by other fishermen, the naval forces and the national army who control fishing activities. On the basis of gender-based stigmatisation, they consider us to be illegitimate"
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
              <Typography component='div' className="title_3">Our lake is poor in abundance and diversity of fish fauna. There are not even 30 species, many of which were introduced in the last century in an attempt to create a fishing industry to meet local and regional needs<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Fish diversity is intrinsically linked to the lake's geological history. The lake has undergone hydrothermal events that have had serious consequences for its ecosystem and therefore for the fish fauna. Between the north and south, there is a difference in the distribution of fish that is echoed in the landscape between the two parts of the lake. The north is covered by a rocky substratum that favours a wide diversity of species. The southern part, where we are, is populated by macrophytes and the shoreline is covered irregularly with rocky habitats that also harbour a wide diversity of fish where the riparian vegetation has not been cleared and far from populated centres. In addition, the northern part is more intact than the southern part"
                  action={action} />. Furthermore, catches are declining as a result of habitat loss resulting from human activities in the coastal areas and recent developments such as the expansion of cage fish farming<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Several anthropogenic activities are likely to have negative effects on the lake's ecosystem, particularly along the littoral zone, including: methane gas exploitation, the expansion of cage fish farming since 2018, farming activities and recent urbanisation in the catchment, the effects of human population growth (including the discharge of wastewater along the catchment due to a lack of sustainable management policies combined with weak law enforcement), and climate change."
                  action={action} /><br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '10vh',
            padding: '1em',
          }}>
            <CardContent className="boxpostit" >
              <Typography component='div' className="postit" sx={{ mt: 2 }}>CHECKLIST OF FISH ENCOUNTERED ON THE BAGIRA AND KADUTU SHORES<br />
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
                  <Link to="/en-GB-dessin">
                    <CardMedia
                      className='pirogueimg'
                      component="img"
                      alt="Child"
                      height="300"
                      image={Child}
                      sx={{ objectFit: "contain" }} /></Link>
                </div>
                <Typography component='div' className="title_3"><Link to="/en-GB-dessin">In order to build a lasting memory of our lake and its living species, we have asked our daughters and sons to portray them, with the aim of raising awareness of the importance of preserving the ecosystem to ensure the survival of traditional fishing as a means of subsistence</Link><br />
                </Typography>
                <Typography component='div' className="title_5" ><br />
                  <Link to="/en-GB-dessin">Find out more⇸</Link><br />
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
              <Typography component='div' className="postit" sx={{ mt: 2 }}>OUR STORIES<br />
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
              <Typography component='div' className="title_3"><br />Maman Agathe and Maman Cynthia taught us that, as women, we can make a living from fishing, autonomously, against all the taboos and social stigma. We face financial difficulties and we have inadequate equipment, but we are fighting to sustain our families through fishing<br />
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
              <Typography component='div' className="title_3">We, maman, have learnt that if our people want to fish, we must take care of the water and the shores of the lake. Otherwise there will be no fish left<br />
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
              <Typography component='div' className="title_3">We know the role of emergent plants for the propagation of fish in breeding areas, we monitor areas of over-reproduction of submerged plants such as <i>Hydrilla verticillata</i> by removing them when they cover the water surface, we clean the shores from plastic debris and litter, we monitor the water reporting the presence of sources of contamination<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">Our health and that of the fish depends on it. Without a sewage system in place, homes, markets and industrial establishments overlooking the lake<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="Order no. 40/013/BUR/BKV/2006 of 5 February 2006 on shoreline protection in Bukavu stipulates that it is forbidden to build within 10 metres of the shoreline. It is also forbidden to fill in the shoreline of Lake Kivu with sacking, mud, iron, fencing, wood, planks or earth. This happens regularly around the landing sites and in the areas where we fish"
                  action={action} /> discharge their wastewater directly into it, together with toxic waste - solid, liquid and domestic. The lake is exploited by the local population because of the limited access to water<Button onClick={handleClick} className="snack" ><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="The regional department of the Régie de distribution d'eau (REGIDESO) in South Kivu has announced that it needs USD 1.5 million to resolve the water shortage in the city of Bukavu and the surrounding area. The water treatment plant at Murhundu was built in 1950 to serve the 6 million inhabitants of Bukavu. Today, it serves around 20 million people. And the lack of drinking water is having an impact on the lake's water quality, which is used for all domestic purposes. It is alarming to note that cases of women and children drowning are on the increase, and occur just at the time when the service is interrupted"
                  action={action} /> for washing clothes and dishes, as well as for other domestic functions, thus becoming a public health problem<br />
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
              <Typography component='div' className="title_3">Water-borne diseases spread rapidly. Malaria, stomach ache, itching, scabies, typhoid fever, amoebic dysentery, intestinal worms and cholera. In addition to these illnesses, there are those typically associated with the fishing industry, such as hernias caused by lifting loads and equipment, and infections caused by constant physical contact with water and organic matter<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center",
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">For geomorphological and hydraulic reasons, the Bagira and Kadutu landing sites near the mouths of the Wesha and Tshula rivers accumulate waste and debris. We periodically clean up the bay by collecting it with our nets, in the manner of beach seining<br /><br />
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
              <Typography component='div' className="title_3">The water distribution pipes and power lines at the Kadutu landing site are threatened by the risk of landslides in the catchment area of the river Wesha. The slopes bordering the lake are already known for hydrogeological risks and serious accidents due to landslides, but with the intensification of human presence since 1950 and the effects of climate change with exceptionally heavy and intense rainfall, the risks are increasing<Button onClick={handleClick} className="snack" ><u>MAP</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="The map reveals the areas that have been subject to landslides since 1959 in the catchment area of the river Wesha. The proximity of these landslides to the places we usually visit is obvious. The population living on those slopes is in constant danger. The presence of infrastructure serving the area also accentuates this problem. Unwise development on the slopes and the extraction of materials at the foot of certain escarpments are human interventions that contribute to instability"
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

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <Mapillary />
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3"><br />Landing sites and markets have inadequate and poor sanitation facilities. Water shortages and a lack of financial resources are making the health situation critical. Hygiene during the menstrual period remains a real challenge. Women expose themselves to numerous risks of life-threatening urogenital infections. Organisations like the <i>Alliance pour la Vie</i> supply us with dignity kits and notions of menstrual hygiene<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">"Fish don't take the bait of women who are menstruating". This form of stigmatisation, along with other sources of gender-based stigmatisation<Button onClick={handleClick} className="snack"><u>⎈</u></Button>
                <Snackbar
                  open={open}
                  autoHideDuration={250000}
                  onClose={handleCloseNote}
                  message="As well as the cultural concerns linked to certain backward customs, in particular early marriage and marriage by abduction, the obligation to bear the financial burden of the family, the refusal by the family-in-law to inherit a share of the husband's succession, and accusations of witchcraft against widows"
                  action={action} />, often defended and promoted by local, military and customary authorities, is one of the causes of the daily harassment to which we are subjected. Maritime harassment resulting in the theft of nets, which means not being able to sustain our families<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <div className="notepad">
            <FullpageSection style={{
              height: '90vh',
              padding: '1em',
              alignItems: "center"
            }}>
              <Collective />
            </FullpageSection>
          </div>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">The risks and occurrences of physical, economic and psychological violence proliferate against our female bodies, at the landing site (between looting, rape, theft, vicious destruction, murder), at the market (where illegal taxes are imposed, insalubrity is rampant, and spots can run out), on the roads leading back to our shelters (where extortion and physical violence occur at illegal barriers), at water distribution points (where access requires a long journey, with insufficient containers and the risk of being robbed and raped), and inside our homes where we have already suffered domestic violence<br />
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '90vh',
            padding: '1em',
            alignItems: "center"
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="title_3">For us, being safe means living in peace, moving freely everywhere without being worried by anyone, and being listened to, in other words expressing our opinions and being consulted when decisions are taken within the family and the community. Being safe means being able to feed our daughters and sons, send them to school and care for them when necessary. Being safe means being able to access economic (inherit, buy, own), social and cultural rights prohibited on the basis of gender. Organizations like the <i>Alliance pour la Vie</i> offer us a space for dialogue where we can build our collective security<br />
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
              <Typography component='div' className="title_3">Keep listening to us, support our actions and help us achieve our dreams<br />
              </Typography>
              <hr></hr>
            </CardContent>
            <CardContent sx={{ maxWidth: 630 }}>
              <Typography component='div' className="footer">
                "Agathe, la matriarche au dessus de l'eau" is a project undertaken by ALLIANCE POUR LA VIE ASBL from a concept by Rosine NSIMIRE HAMULI and Alessandro MUSETTA. Created between January and April 2024, this multimedia story promotes self-determination, awareness and empowerment among fisherwomen at the Kadutu and Bagira landing sites in the South Kivu province of the DRC.<br /><br />
              </Typography>
              <Typography component='div' className="footer1" >
                <br />Contact<br />
                <Link to="mailto:alliancevie.rdc@gmail.com" >alliancevie.rdc@gmail.com</Link>
              </Typography>
              <Typography component='div' className="footer1">
                <br /> TEAM of ALLIANCE pour la VIE ASBL<br />
                Alice KAMWENGE, Regina Sifa NKUNZIMWAMI, Dieudonné MANGO<br /><br />
              </Typography>
              <Typography component='div' className="footer">
                A special mention goes to PARDICOLOR, whose financial support has helped fisherwomen in South Kivu province to amplify their voices.<br />
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
                KNOWLEDGE SOURCES<br />
                <i>Fishing equipment and fishing techniques</i><br />
                Désiré AKONKWA BALAGIZI (Bukavu), Simon AHOUANSOU MONTCHO (Kétou, Bénin), Muderhwa NSHOMBO (Uvira), Philippe LALÈYÈ (Cotonou, Bénin)<br /><br />
                <i>Ecology of the Lake Kivu</i><br />
                Boniface KANINGINI (Bukavu), Pascal MASILYA (Butare, Rwanda), Laetitia NYINA-WAMWIZA (Butare, Rwanda), Tête BAKENGULA MUCHINDIGIRI (Bukavu), Jean Augustin RUBABURA (Bukavu), Lagrisi NDATABAYE (Bukavu), Théophile NGOTULY MANA (Bukavu), Benjamin NCANGU BAHINDWA (Bukavu), Aganze BIRHAHEKA (Bukavu), Isaac AHANA MUNGU MAKELELE (Bukavu), Gérard IMANI (Bukavu), Kaliza TCHANGABOBA (Bukavu), Désiré AKONKWA BALAGIZI (Bukavu), Lushombo MATABARO (Bukavu), Lina ALEKE (Bukavu), Mbalassa MULONGAIBALU (Bukavu), Nshombo MUDERHWA (Bukavu)<br /><br />
                <i>Pollution and contamination of Lake Kivu waters</i><br />
                Dieudonné WAFULA MIFUNDU (Bukavu), Désiré AKONKWA BALAGIZI (Bukavu), Dieu-Merci AMANI BADOSA (Bukavu), Vedaste CITULI ALINIRHU (Bukavu / Louvain), Kelly YENE KARHAKUBWA (Bukavu)<br /><br />
                <i>Climate change and environmental risks</i><br />
                Sylvain MATABARO KULIMUSHI (Bukavu), Toussaint BIBENTYO MUGARUKA (Bukavu), Walère SAHANI MUHINDO (Butembo)<br /><br />
                <i>Public health</i><br />
                Lumami KAPEPULA (Uvira), Lutili MATESO (Bukavu), Amundala SHEKANI (Uvira), Séverin MUYISA (Bukavu), Théophile NDIKUMANA (Bujumbura, Burundi)
              </Typography>
              <br /><br /><br />
              <Typography component='div' className="footer1">AVAILABLE LANGUAGES<br /></Typography>
              <Button className="translation" component={Link} to="https://alliancepourlavie.github.io/agathe/#sw-SW">KISWAHILI</Button>
              <Button className="translation" component={Link} to="https://alliancepourlavie.github.io/agathe/#en-GB">ENGLISH</Button>
              <Button className="translation" component={Link} to="https://alliancepourlavie.github.io/agathe/#fr-CD">FRANÇAIS</Button>
            </CardContent>
          </FullpageSection>


        </FullPageSections>

      </Fullpage ></>
  )
}


export default ENEN;