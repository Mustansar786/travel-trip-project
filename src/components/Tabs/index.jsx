import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Grid, InputLabel, CircularProgress} from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonComponent from '../Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./style.css";
import CustomButton from '../CustomButton/CustomButton';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({tabs, handleSearchFlight, isLoading}) {
    const [value, setValue] = React.useState(0);
    const [arrival, setArrival] = React.useState("");
    const [departure, setDeparture] = React.useState("");
    const [departure_date, setDeparture_Date] = React.useState();
  const [arrival_date, setArrival_Date] = React.useState();
  const [adult, setAdult] = React.useState(0);
  const [child, setChild] = React.useState(0);
  const [type, setType] = React.useState("Business");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    console.log(departure_date)
    const data = {
        type: type,
    class : "Economy",
    adults : adult,
    childs : child,
    infants : 1,
    tours: [
        {
        departureDate: "2023-08-12",
        returnDate: "2023-08-29",
        airportOriginCode: departure,          
        airportDestinationCode: arrival
         }
        ] 
    }
    handleSearchFlight(data)
  }

  return (
    <Box sx={{ width: '100%' }}>
     {!tabs ? 
     <>
       <Grid container spacing={2}>
  <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent 
            style={{backgroundColor: type == "Business" && "#1A97D4", color: type == "Business" &&  "white"}} 
            name="Business" icon={false} classes="" 
            onClick={()=> setType("Business")} 
            />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{backgroundColor: type=="One Way" &&  "#1A97D4", color: type=="One Way" &&  "white"}} name="One Way" icon={false} classes="ml-2"  
            onClick={()=> setType("One Way")}
            />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{backgroundColor: type=="Return" && "#1A97D4", color: type=="Return" && "white"}} name="Round Trip" icon={false} classes="ml-2" 
            onClick={()=> setType("Return")}
             />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
  <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family'>Flying form</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img src="http://localhost:5173/src/assets/logos/plane-departure.png" width="20px" height="20px" className='pb-3' />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={departure}
          onChange={(e)=> setDeparture(e.target.value)}
          placeholder="Dubai (DXB)"
        >
          <MenuItem value="DXB">Dubai</MenuItem>
          <MenuItem value="IST">Islamabad</MenuItem>
          <MenuItem value="LHR">Lahore</MenuItem>
          <MenuItem value="SHJ">Sharjah</MenuItem>
          <MenuItem value="BOM">Mumbai</MenuItem>
          <MenuItem value="RUH">Riyadh</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family'>Flying to</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img src="http://localhost:5173/src/assets/logos/plane-arrival.png" width="20px" height="20px" className='pb-3' />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={arrival}
          onChange={(e)=> setArrival(e.target.value)}
          placeholder="Sharjah (SJH)"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="DXB">Dubai</MenuItem>
          <MenuItem value="IST">Islamabad</MenuItem>
          <MenuItem value="LHR">Lahore</MenuItem>
          <MenuItem value="SHJ">Sharjah</MenuItem>
          <MenuItem value="BOM">Mumbai</MenuItem>
          <MenuItem value="RUH">Riyadh</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family pl-2'>Departure</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', px:2, py:1 }}>
        <TextField id="input-with-sx" type="date" placeholder='Dubai (DXB)' variant="standard"
        value={departure_date}
        onChange={(e)=> setDeparture_Date(e.target.value)}
        />
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family pl-2'>Arrival</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', px:2, py:1 }}>
        <TextField id="input-with-sx" type="date" placeholder='Dubai (DXB)' variant="standard" 
        value={arrival_date}
        onChange={(e)=> setArrival_Date(e.target.value)}
         />
      </Box>
      </Grid>

      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family'>Traveller</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img src="http://localhost:5173/src/assets/logos/users.png" width="20px" height="20px" className='pb-3' />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Adult
  </InputLabel> */}
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={adult}
          onChange={(e)=> setAdult(e.target.value)}
          // inputProps={{
          //   name: 'Adult',
          //   id: 'uncontrolled-native',
          // }}
        >
          <MenuItem value="">
            <em>Adult</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Child
  </InputLabel> */}
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={child}
          onChange={(e)=> setChild(e.target.value)}
          // placeholder="Child"
          // inputProps={{
          //   name: 'Child',
          //   id: 'uncontrolled-native',
          // }}
        >
          <MenuItem value="">
            <em>Child</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
      {isLoading ? 
      <CircularProgress className='ml-8 mt-5' /> 
      : 
      <CustomButton style={{backgroundColor: "#1A97D4", color: "white"}} name="Search" 
      // classes="search-button mt-5"
      onClick={()=> handleSubmit()}
    //   icon="true" 
    classes="mt-5"
    iconStart={true}
    iconName="http://localhost:5173/src/assets/logos/search.png"
       />}
       </Grid>
       </Grid>
     </>
     :
     <> <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<img src="http://localhost:5173/src/assets/logos/plane.png" width="20px" height="20px" />} iconPosition="start" label="Flights" {...a11yProps(0)} />
          <Tab icon={<img src="http://localhost:5173/src/assets/logos/hotel.png" width="20px" height="20px" />} iconPosition="start" label="Hotels" {...a11yProps(1)} />
          <Tab icon={<img src="http://localhost:5173/src/assets/logos/car.png" width="20px" height="20px" />} iconPosition="start" label="Car Rental" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent 
            style={{backgroundColor: type == "Business" && "#1A97D4", color: type == "Business" &&  "white"}} 
            name="Business" icon={false} classes="" 
            onClick={()=> setType("Business")} 
            />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{backgroundColor: type=="One Way" &&  "#1A97D4", color: type=="One Way" &&  "white"}} name="One Way" icon={false} classes="ml-2"  
            onClick={()=> setType("One Way")}
            />
            </Grid>
            <Grid item xs={6} md={2} xl={2}>
            <ButtonComponent style={{backgroundColor: type=="Return" && "#1A97D4", color: type=="Return" && "white"}} name="Round Trip" icon={false} classes="ml-2" 
            onClick={()=> setType("Return")}
             />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
  <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family'>Flying form</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img src="http://localhost:5173/src/assets/logos/plane-departure.png" width="20px" height="20px" className='pb-3' />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={departure}
          onChange={(e)=> setDeparture(e.target.value)}
          placeholder="Dubai (DXB)"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="DXB">Dubai</MenuItem>
          <MenuItem value="IST">Islamabad</MenuItem>
          <MenuItem value="LHR">Lahore</MenuItem>
          <MenuItem value="SHJ">Sharjah</MenuItem>
          <MenuItem value="BOM">Mumbai</MenuItem>
          <MenuItem value="RUH">Riyadh</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family'>Flying to</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img src="http://localhost:5173/src/assets/logos/plane-arrival.png" width="20px" height="20px" className='pb-3' />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={arrival}
          onChange={(e)=> setArrival(e.target.value)}
          placeholder="Sharjah (SJH)"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="DXB">Dubai</MenuItem>
          <MenuItem value="IST">Islamabad</MenuItem>
          <MenuItem value="LHR">Lahore</MenuItem>
          <MenuItem value="SHJ">Sharjah</MenuItem>
          <MenuItem value="BOM">Mumbai</MenuItem>
          <MenuItem value="RUH">Riyadh</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family pl-2'>Departure</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', px:2, py:1 }}>
        <TextField id="input-with-sx" type="date" placeholder='Dubai (DXB)' variant="standard" 
        value={departure_date} onChange={(e)=> setDeparture_Date(e.target.value)}
        />
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family pl-2'>Arrival</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', px:2, py:1 }}>
            {/* <img src="http://localhost:5173/src/assets/logos/calender.png" width="20px" height="20px" className='pb-1' /> */}
        <TextField id="input-with-sx" type="date" placeholder='Dubai (DXB)' variant="standard"
        value={arrival_date} onChange={(e)=> setArrival_Date(e.target.value)} />
      </Box>
      </Grid>

      <Grid item xs={6} md={2} xl={2}>
                <label className='pt-5 textfield-label global_font_family'>Traveller</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img src="http://localhost:5173/src/assets/logos/users.png" width="20px" height="20px" className='pb-3' />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Adult
  </InputLabel> */}
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={adult}
          onChange={(e)=> setAdult(e.target.value)}
          // inputProps={{
          //   name: 'Adult',
          //   id: 'uncontrolled-native',
          // }}
        >
          <MenuItem value="">
            <em>Adult</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Child
  </InputLabel> */}
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={child}
          onChange={(e)=> setChild(e.target.value)}
          // inputProps={{
          //   name: 'Child',
          //   id: 'uncontrolled-native',
          // }}
        >
          <MenuItem value="">
            <em>Child</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </FormControl>
      </Box>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
      {isLoading ? 
      <CircularProgress className='ml-8 mt-5' /> 
      : 
   
    <CustomButton style={{backgroundColor: "#1A97D4", color: "white"}} name="Search" 
      // classes="search-button mt-5"
      onClick={()=> handleSubmit()}
    //   icon="true" 
    classes="mt-5"
    iconStart={true}
    iconName="http://localhost:5173/src/assets/logos/search.png"
       />
       }
       </Grid>
       </Grid>
            
      </CustomTabPanel>
      </>
      }
    </Box>
  );
}