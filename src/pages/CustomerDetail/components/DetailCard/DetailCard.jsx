import React from 'react'
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  Input,
  IconButton,
} from "@material-tailwind/react";
import { Divider, Grid } from '@mui/material';
import { Button } from "@material-tailwind/react";
import {
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import "./style.css";
import ButtonComponent from '@/components/Button';
import InputField from '@/components/input';

export function DetailCard() {

  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10 mt-10">
      <CardBody className="">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <p>Traveler 1: Adult (Lead)</p>

           </Grid>
           
           <Grid item xs={12} md={12} xl={12}>
           <Divider />
           </Grid>
<Grid item xs={12} md={12} xl={12}>
<div>
    <p>Gender *</p>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        
        <FormControlLabel value="end" control={<Radio />} label="Male" />
        <FormControlLabel value="end" control={<Radio />} label="Female" />
      </RadioGroup>
</div>
</Grid>


<Grid item xs={4} md={4} xl={4}>
            <InputField label="First name *" />

           </Grid>
           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Middle name *" />

           </Grid>
           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Last name *" />

           </Grid>

           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Birthday *" />

           </Grid>
           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Mationality *" />

           </Grid>
           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Phone number *" />

           </Grid>

           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Email *" />

           </Grid>

           <Grid item xs={12} md={12} xl={12}>
            <Typography variant="h5" className='text-blue'>
            Passport Details
            </Typography>
            <p>Please enter details exactly as they appear on your passport/travel document.</p>
           </Grid>

           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Passport number *" />

           </Grid>

           <Grid item xs={4} md={4} xl={4}>
            <InputField label="Passport expiration *" />

           </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
}


export default DetailCard;
