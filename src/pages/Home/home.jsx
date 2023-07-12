import React from "react";
import {
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import {  Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { Footer } from "@/components/layout";
import ButtonComponent from "@/components/Button";
import BestPlaces from "./components/BestPlaces";
import Experience from "./components/Experience";
import Packages from "./components/pakackes";
import TravelViews from "./components/TravelViews";
import { search_flights } from "@/DAL/booking";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Home() {
    const navigate = useNavigate();
    const[isLoading, setIsLoading]= React.useState(false);
    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")

    const handleSearchFlight = async (data)=>{
      setIsLoading(true);
        const response = await search_flights(data);
        console.log(response,"response flight data")
        if(response.status === true){
            navigate("/booking", {
                state: response.data
              });
              setIsLoading(false);
        }else{
            setErrorMessage(response.message);
      setError(true);
            setIsLoading(false);
        }

    }

    const action = (
      <React.Fragment>
        {/* <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button> */}
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
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('http://localhost:5173/src/assets/banner_image.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-5 mr-auto w-full px-4 lg:w-4/12">
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-black global_font_family"
              >
                Just seconds away from
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black global_font_family"
              >
                A WORLD OF LUXURY
              </Typography>
              <Typography variant="lead" color="black" className="opacity-80 text-base global_font_family">
                Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
              </Typography>
              <ButtonComponent style={{backgroundColor: "#1A97D4", color: "white", alignItems: "center"}} name="Let’s Start Now" icon={true} iconName="http://localhost:5173/src/assets/images/arrow.png" />

            </div>
          </div>
        </div>
      </div>

      <Experience handleSearchFlight={handleSearchFlight}
      isLoading={isLoading}
       />
      <BestPlaces />
      <Packages />
      <TravelViews />

     

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
    </>
  );
}

export default Home;
