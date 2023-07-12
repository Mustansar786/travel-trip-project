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

export function PriceDetailCard() {

  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10 mt-10">
      <CardBody className="">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <p>Booking Price</p>
           </Grid>
           <Grid item xs={12} md={12} xl={12}>
           <Divider />
           </Grid>
           <Grid item xs={12} md={12} xl={12}>
            <div className='flex justify-between'>
            <p>3 x Passengers</p>
            <p>$1,566.05</p>
            </div>
            <div className='flex justify-between mt-5'>
            <p>3 x Passengers</p>
            <p>$1,566.05</p>
            </div>
           </Grid>
           <Grid item xs={12} md={12} xl={12}>
           <Divider />
           </Grid>

           <Grid item xs={12} md={12} xl={12}>
            <div className='flex justify-between'>
            <p>Total</p>
            <p>$920.43</p>
            </div>
          
           </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
}


export default PriceDetailCard;
