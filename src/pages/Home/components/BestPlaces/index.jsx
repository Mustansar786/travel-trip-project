import React from 'react'
import {
    Typography,
  } from "@material-tailwind/react";
  import { Grid } from '@mui/material';
import Carousel from 'react-grid-carousel'
import ButtonComponent from "@/components/Button";

export default function BestPlaces() {
  return (
    <>
      <section>
        <div className="mt-10 pl-24 pr-24">
          <Grid container spacing={2}>

            <Grid item  xs={12} md={8} style={{}}>
              <Carousel cols={3} rows={1} gap={10} loop>
                <Carousel.Item>
                  <img width="291" style={{ borderRadius: 10, height: 315 }} src="https://picsum.photos/800/600?random=1" />
                  <div className="relative" style={{ bottom: 320 }}>
                    <div className="p-5 flex justify-between">
                      <div className="flex pl-3 pr-3 rounded-xl" style={{ backgroundColor: "rgba(3, 16, 23, 0.30)", }}>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/star.png" />
                        <p className="text-white pl-2">4.3</p>
                      </div>
                      <div>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/heart.png" />
                      </div>
                    </div>
                  </div>
                  <div className="relative" style={{ bottom: 130 }}>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="pl-3 font-bold text-white global_font_family"
                    >
                      Burj Khalifa
                    </Typography>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img width="291" style={{ borderRadius: 10, height: 315 }} src="https://picsum.photos/800/600?random=2" />
                  <div className="relative" style={{ bottom: 320 }}>
                    <div className="p-5 flex justify-between">
                      <div className="flex pl-3 pr-3 rounded-xl" style={{ backgroundColor: "rgba(3, 16, 23, 0.30)", }}>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/star.png" />
                        <p className="text-white pl-2">4.3</p>
                      </div>
                      <div>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/heart.png" />
                      </div>
                    </div>
                  </div>
                  <div className="relative" style={{ bottom: 130 }}>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="pl-3 font-bold text-white"
                    >
                      Queen’s Gambit
                    </Typography>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="pl-3 font-bold text-white"
                    >
                      $238
                    </Typography>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img width="291" style={{ borderRadius: 10, height: 315 }} src="https://picsum.photos/800/600?random=3" />
                  <div className="relative" style={{ bottom: 320 }}>
                    <div className="p-5 flex justify-between">
                      <div className="flex pl-3 pr-3 rounded-xl" style={{ backgroundColor: "rgba(3, 16, 23, 0.30)", }}>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/star.png" />
                        <p className="text-white pl-2">4.3</p>
                      </div>
                      <div>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/heart.png" />
                      </div>
                    </div>
                  </div>
                  <div className="relative" style={{ bottom: 130 }}>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="pl-3 font-bold text-white"
                    >
                      Queen’s Gambit
                    </Typography>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="pl-3 font-bold text-white"
                    >
                      $38
                    </Typography>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid item xs={12} md={4} style={{}}>
              <Typography
                variant="h1"
                color="blue-gray"
                className="mb-3 font-bold mt-4 lg:w-8/12 global_font_family"
              >
                Best Places
                For You
              </Typography>
              <Typography className="font-normal text-blue-gray-500 global_font_family">
                Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
              </Typography>
              <ButtonComponent style={{backgroundColor: "#1A97D4", color: "white"}} name="View More" icon={false} />

            </Grid>

          </Grid>
        </div>
      </section>
    </>
  )
}
