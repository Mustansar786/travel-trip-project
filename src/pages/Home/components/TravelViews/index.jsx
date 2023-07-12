import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import { Grid } from '@mui/material';
import Carousel from 'react-grid-carousel'
import ButtonComponent from "@/components/Button";

export default function TravelViews() {
  return (
    <>
      <section>
        <div className="mt-10 pl-24 pr-24">
          <Grid container spacing={2}>

            <Grid item xs={4} style={{}}>
              <Typography
                variant="h1"
                color="blue-gray"
                className="mb-3 font-bold mt-4 lg:w-8/12"
              >
                Top view of
                mountains
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Lörem ipsum fotobomba minynat. Göra en pudel masar fadogon heteroktigt holatt.                 </Typography>


              <ButtonComponent name="View More" icon={false} />
            </Grid>

            <Grid item xs={8} style={{}}>
              <Carousel cols={3} rows={1} gap={10} loop>
                <Carousel.Item>
                  <img width="291" style={{ borderRadius: 10, height: 315 }} src="https://picsum.photos/800/600?random=4" />

                </Carousel.Item>
                <Carousel.Item>
                  <img width="291" style={{ borderRadius: 10, height: 315 }} src="https://picsum.photos/800/600?random=5" />

                </Carousel.Item>
                <Carousel.Item>
                  <img width="291" style={{ borderRadius: 10, height: 315 }} src="https://picsum.photos/800/600?random=6" />

                </Carousel.Item>
                <Carousel.Item>
                </Carousel.Item>
              </Carousel>
            </Grid>


          </Grid>
        </div>
      </section>




      <section>
        <div className="pt-10" style={{ backgroundImage: `url("http://localhost:5173/src/assets/experience-background.png")`, height: 580, textAlign: "-webkit-center" }}>
          <img width="1170" height="408" src="http://localhost:5173/src/assets/images/testi.png" />
        </div>
      </section>
    </>
  )
}
