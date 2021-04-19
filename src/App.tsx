import {useEffect, useState} from 'react';
// import HotelContext from './context/hotelContext';
import {getHotels} from './services/hotel.service'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// Card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import { ImageCard } from './components/ImageCard';
import { Bgcolor } from './components/BgColors';
// import HotelCard from './components/HotelCard'
import './App.css';
import { BgButtoncolor } from './components/BgButtonColor';

const useStyles = makeStyles((theme) => ({ 
  root: {
    textTransform: 'none',
    flexGrow: 1
  },
  paper: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      padding: 0
    },
    padding: theme.spacing(3),    
    color: theme.palette.text.secondary,
  },
  button: {    
    '& > *': {
      margin: theme.spacing(1),      
      ['@media (max-width:959px)']: { // eslint-disable-line no-useless-computed-key
        marginTop: 10,
      },
      ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        margin: 0,
        marginTop: 7,
      },
      marginTop: 128,
      textTransform: 'none'
    }    
  },
  buttonOne: {
    backgroundColor: '#dfe9fb',
    color: '#126aff',
    // margin: 0;
    border: 'none',
  },
  buttonTwo: {
    backgroundColor: '#f9d7e3',
    color: '#f50057',
    // margin: 0;
    border: 'none',
  },
  title: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: 18,
    },
    fontSize: 25,
    fontWeight: 'bold'
  },
  subTitle: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: 14
    }
  },
  chip: {
    backgroundColor: '#69a13b',
    color: '#ffff',
    width: 85,
    fontSize: 17
  },
  offer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  total: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: 18
    },
    fontSize: 23,
    fontWeight: 'bold'
  },
  totalDescription: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: 12
    },
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
       marginTop: 1
    },
    marginTop: 60
  },
  buttonShow: {
    backgroundColor: '#126AFF',
    textTransform: 'none',
    fontSize: 18
  },
  priceContainer: {
    margin: '0.5em'
  },
  containerDetails: {
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   flexDirection: 'column'
    // },
    justifyContent: 'space-between',
    ['@media (max-width:959px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column'
    },
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column'
    }
  },
  cardContainer: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      paddingTop: 0,
    },
    paddingTop: 24,
    paddingLeft: 24
  },
  boxContainer: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column'      
    }
  },
  boxBgcolor: {
    width: '50%'
  },
  boxtButtons: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      flexDirection: 'column'
    }    
  },
  containerBgStyle: {
    ['@media (max-width:425px)']: { // eslint-disable-line no-useless-computed-key
      paddingTop: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: '30%'
    },
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 24
  },
  boxBgStyle: {
    width: '50%'    
  }
}));

function App() {
  const classes = useStyles();

  // Card
  // const theme = useTheme();
  let isRefundable = false;

  const [ hotels, setHotels ] = useState<any[]>();
  
  const [ bgColor, setBgColor ] = useState('');

  const [ bgButtonColor, setBgButtonColor ] = useState('');

  const handleBgChange = (event: any) => {
    setBgColor(event.target.value);
  };

  const handleBgButtonChange = (event: any) => {
    setBgButtonColor(event.target.value);
  };

  const fetchApi = async () => {
    const responseJson = await getHotels();
    setHotels(responseJson.clusters);
    console.log('responseJson: ', responseJson);
  }
  useEffect( () => {
    fetchApi()
  }, [])

  return (   
  // <HotelContext.Provider value={hotels}>
    <div className={classes.root}>
      <div className={classes.containerBgStyle}>
        <div className={classes.boxBgStyle}>
          <Bgcolor color = {bgColor} handleChange = {handleBgChange} />
        </div>
        <div className={classes.boxBgStyle}>
          <BgButtoncolor color = {bgButtonColor} handleChange = {handleBgButtonChange} />
        </div>        
      </div>
      
      { 
                hotels?.map((data: any) => (
                  <Paper className={classes.paper}>
                  <Card>
                      <CardContent style={{ backgroundColor: bgColor }} className={classes.cardContainer}>
                      <Grid container spacing={2} className={classes.boxContainer}>
                        <Grid item xs={12} md={3}>
                          <ImageCard data = {data} />
                        </Grid>
                      
                        <Grid item xs={12} md={9} >                         
                          <div className={classes.containerDetails}>
                            <Grid item xs={12} md={5}>                              
                                <Typography className={classes.title} component="legend">{ data.name }</Typography>                           
                                <Typography component="legend" className={classes.subTitle}>{ data.address }</Typography>
                                <Rating name="read-only" value={ data.stars } readOnly />
                                
                                <div className={classes.boxtButtons}>                                  

                                  <div className={classes.button}>
                                    <Button className={classes.buttonOne} variant="outlined">
                                      Recomendado
                                    </Button>
                                    <Button className={classes.buttonTwo} variant="outlined">
                                      {                                  
                                        data.rates.forEach((item: any) => {
                                          isRefundable = item.refundable
                                        })                                  
                                      }
                                      { isRefundable ? 'Reembolsable' : 'No reembolsable' }
                                    </Button>
                                  </div>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4}>                          
                            <Card>
                              <CardContent>
                                <div className="flex-container">
                                  <div>                                    
                                    <Typography className={classes.total} component="legend">Total final</Typography>                                    
                                    <Typography className={classes.totalDescription} component="legend">6 noches, 2 personas</Typography>
                                  </div>                                  
                                  <div className={classes.offer}>
                                    <Chip className={classes.chip} size="small" label="10% OFF" />
                                  </div>
                                </div>
                                <div className={classes.priceContainer}>                                  
                                  <Typography className={classes.total} component="legend">{ data.rates[0].currency } { data.rates[0].total.toFixed() }</Typography>
                                  <Typography className={classes.totalDescription} component="legend">Impuestos y tasas incluidos</Typography>
                                </div>
                                <div className={classes.containerButton}>

                                  <Button style={{ backgroundColor: bgButtonColor }} className={classes.buttonShow} variant="contained" color="primary" disableElevation>
                                    Ver Hotel
                                  </Button>
                                  
                                </div>                             
                                
                              </CardContent>                              
                            </Card>                            
                          
                        </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                  </Paper>
                ))
              }
            
      
    </div>     
    // </HotelContext.Provider>
  );
}

export default App;