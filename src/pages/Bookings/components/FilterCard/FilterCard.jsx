import React from 'react'
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Divider, Grid } from '@mui/material';
import { Button } from "@material-tailwind/react";
import {
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import "./style.css";
import ButtonComponent from '@/components/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export function FilterCard({ tabs }) {
  const [showDetail, setShowDetail] = React.useState(false);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10 mt-10">
      <CardBody className="">
       <div>
        <p> Stop</p>

        <div className='pt-5'>
        <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Any" />
      <FormControlLabel required control={<Checkbox />} label="Direct" />
      <FormControlLabel control={<Checkbox />} label="1 Stop" />
      <FormControlLabel control={<Checkbox />} label="2+ Stop" />
    </FormGroup>
        </div>

        <p> Price</p>

        <Grid container>
<Grid item xs={12}>
<Box>
<Slider
getAriaLabel={() => 'Temperature range'}
value={value}
onChange={handleChange}
valueLabelDisplay="auto"
getAriaValueText={valuetext}
/>
</Box>
</Grid>
</Grid>

      <p> Time</p>

      <p> Departure:  00:00 - 23:59</p>

      <Grid container>
<Grid item xs={12}>
<Box>
<Slider
getAriaLabel={() => 'Temperature range'}
value={value}
onChange={handleChange}
valueLabelDisplay="auto"
getAriaValueText={valuetext}
/>
</Box>
</Grid>
</Grid>
      <p> Arrival:  00:00 - 23:59</p>

      <Grid container>
<Grid item xs={12}>
<Box>
<Slider
getAriaLabel={() => 'Temperature range'}
value={value}
onChange={handleChange}
valueLabelDisplay="auto"
getAriaValueText={valuetext}
/>
</Box>
</Grid>
</Grid>

      <p> Duration</p>
<Grid container>
<Grid item xs={12}>
<Box>
<Slider
getAriaLabel={() => 'Temperature range'}
value={value}
onChange={handleChange}
valueLabelDisplay="auto"
getAriaValueText={valuetext}
/>
</Box>
</Grid>
</Grid>


<p> Airlines</p>

<div className='pt-5'>
<FormGroup>
<FormControlLabel control={<Checkbox defaultChecked />} label="Air Arabia Abu Dhabi" />
<FormControlLabel required control={<Checkbox />} label="Air India Limited" />
<FormControlLabel control={<Checkbox />} label="Emirates" />
<FormControlLabel control={<Checkbox />} label="Etihad Airways" />
<FormControlLabel control={<Checkbox />} label="Fly Dubai" />
</FormGroup>
</div>
       </div>
      </CardBody>
    </Card>
  );
}


export default FilterCard;
