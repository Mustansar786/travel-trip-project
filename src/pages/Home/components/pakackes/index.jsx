import React from 'react'
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { Grid } from '@mui/material';

import PackageCard from "@/components/cards/package-card";

export default function Packages() {
  return (
    <>
      <section>
      <div className="pt-5 pl-24 pr-24 pb-5" style={{ backgroundColor: "rgba(242, 251, 255, 0.70)", }}>
        <Grid container spacing={2}>
        
          <Grid item xs={4} style={{}}>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-3 font-bold mt-4 lg:w-8/12"
            >
              Best Packages
              For You
            </Typography>
          </Grid>
          <Grid item xs={4} style={{}}>
            <Typography
              // variant="h1"
              color="blue-gray"
              className="mb-3 font-normal mt-4 lg:w-8/12"
            >
              Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{paddingTop: 50, textAlign: "-webkit-right"}}>
            <Button style={{width: 50, height: 50}} className="rounded-3xl p-3">
              <img src="http://localhost:5173/src/assets/images/arrow-left-white.png" />
            </Button>
            <Button style={{width: 50, height: 50}} className="rounded-3xl ml-2 p-3">
              <img src="http://localhost:5173/src/assets/images/arrow-right-white.png" />
            </Button>
          </Grid>
            

        </Grid>


        <div>
        <Grid container spacing={2}>
        <Grid item xs={12} md={3} style={{}}>
            <PackageCard />
        </Grid>
        <Grid item xs={12} md={3} style={{}}>
            <PackageCard />
        </Grid>
        <Grid item xs={12} md={3} style={{}}>
            <PackageCard />
        </Grid>
        <Grid item xs={12} md={3} style={{}}>
            <PackageCard />
        </Grid>
        </Grid>

        </div>
        </div>
      </section>
    </>
  )
}
