import React from 'react'

import { CircularProgress, Divider, Grid,Pagination } from '@mui/material';
import { FeatureCard, TeamCard } from "@/components/cards";
import { featuresData, teamData, contactData } from "@/data";
import "./style.css";
import ButtonComponent from '@/components/Button';
import FlightDetailsCard from './components/FlightDetailCard/FlightDetailsCard';
import FilterCard from './components/FilterCard/FilterCard';
import { Footer } from '@/components/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { search_flights } from '@/DAL/booking';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Bookings(props) {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "props");
  const[data, setData]= React.useState(state)
  const[isLoading, setIsLoading]= React.useState(false);
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  const handleSearchFlight = async (data)=>{
    setIsLoading(true);
    const response = await search_flights(data);
    console.log(response,"response flight data")
    if(response.status === true){
        
          setData(response.data)
          setIsLoading(false);
    }else{
      setErrorMessage(response.message);
      setError(true);
        setIsLoading(false);
    }

}

const action = (
  <React.Fragment>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={()=> setError(false)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

  return (
    <div>
      <img
        src="http://localhost:5173/src/assets/logos/travel.png"
        className="absolute inset-0 z-0 w-full"
      />
      <div className="absolute inset-0 z-0 w-full bg-black/50" style={{height: 290}} />
      <section className="bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
      <div className="mt-48 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                tabs={false}
                handleSearchFlight={handleSearchFlight}
                isLoading={isLoading}
              />
            ))}
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} md={8} >
                <div className='flex justify-between pt-10'>
                <p className='pt-2'>{data.flights.length > 0 ? data.flights.length : 0} flights available from Dubai (DXB) to Lahore (LHE)</p>
                <div className='main-filter'>Top pick from your search</div>
                </div>

                <div>
                <Grid container spacing={2}>
                <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{fontSize:12}} name="Best Flight" icon={false} classes="ml-2" />
            </Grid>
  <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{fontSize:12}}  name="Best Price" icon={false} classes="bg-white text-black border-2"  />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{fontSize:12}}  name="Duration" icon={false} classes="bg-white text-black border-2 ml-2"  />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{fontSize:12}} name="Departure" icon={false} classes="bg-white text-black border-2 ml-2"  />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{fontSize:12}} name="Arrival" icon={false} classes="bg-white text-black border-2 ml-2"  />
            </Grid>
            
            </Grid>


{isLoading ? <CircularProgress style={{marginLeft: "50%", marginTop: "10%"}} />
:
  <>
  {data.flights.map((x,i)=> (
<FlightDetailsCard flightDetail={x} 
filterCategories={data.filterCategories} 
 />
))}
</>
          }
          <div className='pt-10 flex justify-center'>
          <Pagination count={10} color="primary" />
          </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <FilterCard />
            </Grid>
          </Grid>

          </div>
          </section>
          <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={()=> setError(false)}
        // message={errorMessage}
        action={action}
      >
        <Alert onClose={()=> setError(false)} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
        </Snackbar>
    </div>
  )
}
