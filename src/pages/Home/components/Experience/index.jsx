import React from 'react'
import {
  Typography,
} from "@material-tailwind/react";
import { Divider, Grid } from '@mui/material';
import { FeatureCard, TeamCard } from "@/components/cards";
import { featuresData, teamData, contactData } from "@/data";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
export default function Experience({handleSearchFlight, isLoading}) {
  return (
    <>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                tabs={true}
                handleSearchFlight={handleSearchFlight}
                isLoading={isLoading}
              />
            ))}
          </div>
          <div className="mt-5">
            <Grid container spacing={2}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={2}>
                <img src="http://localhost:5173/src/assets/logos/logo-bg.png" width="234px" height="90px" />
              </Grid>
              <Grid item xs={2}>
                <img src="http://localhost:5173/src/assets/logos/logo-bg-1.png" width="234px" height="90px" />
              </Grid>
              <Grid item xs={2}>
                <img src="http://localhost:5173/src/assets/logos/logo-bg-2.png" width="234px" height="90px" />
              </Grid>
              <Grid item xs={2}>
                <img src="http://localhost:5173/src/assets/logos/logo-bg-3.png" width="234px" height="90px" />
              </Grid>
              <Grid item xs={2}>
                <img src="http://localhost:5173/src/assets/logos/logo-bg-4.png" width="234px" height="90px" />
              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>
          </div>

          <div className="mt-20 flex flex-wrap items-center">
            <div className="mx-auto mt-24 w-full justify-center px-4 md:w-4/12 lg:mt-0">
              
              <img
                alt="Card Image"
                src="http://localhost:5173/src/assets/unsplash.png"
                className="h-full w-full "
              />
             
              <Typography
                variant="h1"
                color="blue-gray"
                className="mb-3 font-bold mt-4"
              >
                Get Experience In
                We are Expert
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
              </Typography>
              
            </div>

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12 pt-5">
              <List sx={{ width: '100%', }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "rgba(26, 151, 212, 0.05)" }}>
                      <img src="http://localhost:5173/src/assets/logos/plane.png" width="30px" height="30px" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Flight" secondary="We provide some very affordable prices compared to others." />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "rgba(26, 151, 212, 0.05)" }}>
                      <img src="http://localhost:5173/src/assets/logos/hotel.png" width="30px" height="30px" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Hotels" secondary="Stay in style with our luxurious hotels." />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "rgba(26, 151, 212, 0.05)" }}>
                      <img src="http://localhost:5173/src/assets/logos/home-modern.png" width="30px" height="30px" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Homestay" secondary="Experience local living at its finest with our homestays." />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "rgba(26, 151, 212, 0.05)" }}>
                      <img src="http://localhost:5173/src/assets/logos/car.png" width="30px" height="30px" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Car Rental" secondary="Hit the road with ease and convenience with our car rental service." />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "rgba(26, 151, 212, 0.05)" }}>
                      <img src="http://localhost:5173/src/assets/logos/business-center.png" width="30px" height="30px" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Business" secondary="Indulge in the ultimate luxury of private travel with our charter booking service." />
                </ListItem>
              </List>
             
            </div>

          </div>
        </div>
      </section>


      <section>
        <div style={{ backgroundImage: `url("http://localhost:5173/src/assets/experience-background.png")`, }}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={5} xl={5} style={{ textAlign: "-webkit-right" }}>
              <img src="http://localhost:5173/src/assets/traveller.png" width="382px" height="435px" />
            </Grid>
            <Grid item xs={12} md={7} xl={7} >
              <div className="pt-8 pr-10">
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="mb-3 font-bold mt-4 lg:w-9/12"
                >
                  With Our Experience
                  We will Serve You
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat. Diren den eftersom sojaren, men poligam.
                </Typography>
                <Grid container spacing={2}>

                  <Grid item xs={3} style={{}}>
                    <Typography
                      variant="h3"
                      color="blue"
                      className="mb-3 font-bold mt-4"
                    >
                      24k
                    </Typography>
                    <Typography
                      // variant="h6"
                      color="blue"
                      className="font-normal text-blue-gray-500"
                    >
                      Travel Experience
                    </Typography>
                  </Grid>
                  <Grid item xs={3} style={{}}>
                    <Typography
                      variant="h3"
                      color="blue"
                      className="mb-3 font-bold mt-4"
                    >
                      55+
                    </Typography>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="font-normal text-blue-gray-500"
                    >
                      Countries serve
                    </Typography>
                  </Grid>
                  <Grid item xs={3} style={{}}>
                    <Typography
                      variant="h3"
                      color="blue"
                      className="mb-3 font-bold mt-4"
                    >
                      50M
                    </Typography>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="font-normal text-blue-gray-500"
                    >
                      Overall USS discount
                    </Typography>
                  </Grid>
                  <Grid item xs={3} style={{}}>
                    <Typography
                      variant="h3"
                      color="blue"
                      className="mb-3 font-bold mt-4"
                    >
                      88M
                    </Typography>
                    <Typography
                      // variant="h3"
                      color="blue"
                      className="font-normal text-blue-gray-500"
                    >
                      User per year
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  )
}
