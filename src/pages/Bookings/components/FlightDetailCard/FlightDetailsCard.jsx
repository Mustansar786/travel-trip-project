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

import "./style.css";
import ButtonComponent from '@/components/Button';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export function FlightDetailsCard({ tabs, flightDetail, filterCategories }) {
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = React.useState(false);

  console.log(flightDetail,filterCategories)

  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10 mt-10">
      <CardBody className="">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <div className='flex justify-between' style={{ width: "100%" }} >
              <div className='flex'>
                <img src="http://localhost:5173/src/assets/logos/emirates.png" />
                <p className='airline-name global_font_family ml-3 pt-4'>{flightDetail?.tours[0]?.tourSegments[0]?.AirlineName}</p>
              </div>
              <div className=''>
                <p className='ticket-price global_font_family pt-4'>{flightDetail?.fareTotal?.Total}</p>
              </div>
            </div>

          </Grid>
          <Grid item xs={9} md={9} xl={9}>
            <div className='flex justify-between'>
              <p className='font-bold'>{flightDetail?.tours[0]?.tourSegments[0]?.DepartureAirportCode}</p>
              <div className='flex ml-5 pt-2'>
                <img src="http://localhost:5173/src/assets/images/ellipse.png" className='ellipse' />
                <img src="http://localhost:5173/src/assets/images/vector.png" className='vector' />
                <img src="http://localhost:5173/src/assets/images/ellipse.png" className='ellipse' />
              </div>
              <p className='pl-10 font-bold'>{flightDetail?.tours[0]?.tourSegments[0]?.ArrivalAirportCode}</p>
            </div>

            <div className='flex justify-between'>
              <p>{moment(flightDetail?.tours[0]?.tourSegments[0]?.DepartureDateTime).format("DD MMM")}</p>
              <div className='flex ml-5'>
                <p>8 hours 25 minutes (1 stop)</p>
              </div>
              <p className='pl-10'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.ArrivalDateTime).format("DD MMM")}</p>
            </div>

            <div className='flex justify-between'>
              <p>{moment(flightDetail?.tours[0]?.tourSegments[0]?.DepartureDateTime).format("hh:mm")}</p>
              {/* <div className='flex ml-5'>
             <p>8 hours 25 minutes (1 stop)</p>
              </div> */}
              <p className='pl-10'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.ArrivalDateTime).format("hh:mm")}</p>
            </div>

          </Grid>
          <Grid item xs={3} md={3} xl={2} style={{textAlign: "-webkit-center"}}>
            <ButtonComponent name="Select Flight" icon={false} 
            style={{backgroundColor: "#1A97D4", color: "white", fontSize:12}}
            onClick={()=> navigate("/customer_detail")}
             />
          </Grid>


          <Grid item xs={12} md={12} xl={12}>
           <Divider />
           </Grid>
          {!showDetail && <Grid item xs={12} md={12} xl={12}>
          <div className='flex justify-between'>
            <div className='flex'>
              <ButtonComponent name="Economy Light" icon={false} classes="bg-gray text-black" />
              <ButtonComponent name="Carry-on bag included" icon={false} classes="bg-gray text-black ml-3" />
            </div>
              <div className='pt-3'>
              <Button variant="text" className="flex items-center gap-2 float-right" onClick={()=>setShowDetail(true)}>
                Show Detail <img src="http://localhost:5173/src/assets/images/show-detail.png" />
                {/* <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" /> */}
              </Button>
            </div>
              </div>
            

          </Grid>}
         {showDetail && <>
          <Grid item xs={12} md={12} xl={12}>
          <div className='flex'>
            <img src="http://localhost:5173/src/assets/logos/calender.png" />
            <p className='pl-3 font-bold'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.DepartureDateTime).format("DD MMM YYYY")}</p>
          </div>
          </Grid>
          
          <Grid item xs={8} md={8} xl={8}>
            <div className='flex'>

              <div className='flex items-center	' >
                <img src="http://localhost:5173/src/assets/images/ellipse.png" className='ellipse' />

                <p className='pl-5 font-bold'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.DepartureDateTime).format("hh:mm")} Lahore Allama Iqbal International (LHE)</p>
              </div>

            </div>
            <div className='flex'>
            <img src="http://localhost:5173/src/assets/images/vector-long.png"  />
<div className='pl-5 pt-10'>
<p className='font-bold'>Emirates</p>
<p>Travel time: 1h 45m</p>
</div>
              
            </div>


            <div className='flex'>

              <div className='flex items-center'>
                <img src="http://localhost:5173/src/assets/images/ellipse.png" className='ellipse' />

                <p className='pl-3 font-bold'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.ArrivalDateTime).format("hh:mm")} Karachi Jinnah International (KHI)</p>
              </div>

            </div>
          </Grid>
          {/* <Grid item xs={8} md={8} xl={8}>
          </Grid> */}
          <Grid item xs={4} md={4} xl={4}>
            <div>

              <p className='pl-5 font-bold'>Flight Details</p>
              <p>Operated by: Emirates</p>
              <p>Flight no: {flightDetail?.tours[0]?.tourSegments[0]?.FlightNumber}</p>
              <p>Cabin: Business</p>
              <p>Fare type: Economy Plus</p>
            </div>
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <div className='duration-tickets'>
              <p>3h 50m layover - Jinnah International (KHI)</p>
            
            </div>
          </Grid>

         {flightDetail?.type === "Return" &&
         <>
          <Grid item xs={12} md={12} xl={12}>
          <div className='flex'>
            <img src="http://localhost:5173/src/assets/logos/calender.png" />
            <p className='pl-3 font-bold'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.ArrivalDateTime).format("DD MMM YYYY")}</p>
          </div>
          </Grid>
          
          <Grid item xs={8} md={8} xl={8}>
            <div className='flex'>

              <div className='flex items-center	' >
                <img src="http://localhost:5173/src/assets/images/ellipse.png" className='ellipse' />

                <p className='pl-5 font-bold'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.DepartureDateTime).format("hh:mm")} Lahore Allama Iqbal International (LHE)</p>
              </div>

            </div>
            <div className='flex'>
            <img src="http://localhost:5173/src/assets/images/vector-long.png"  />
<div className='pl-5 pt-10'>
<p className='font-bold'>Emirates</p>
<p>Travel time: 1h 45m</p>
</div>
              
            </div>

            <div className='flex'>

              <div className='flex items-center'>
                <img src="http://localhost:5173/src/assets/images/ellipse.png" className='ellipse' />

                <p className='pl-3 font-bold'>{moment(flightDetail?.tours[0]?.tourSegments[0]?.ArrivalDateTime).format("hh:mm")} Karachi Jinnah International (KHI)</p>
              </div>

            </div>
          </Grid>
          <Grid item xs={4} md={4} xl={4}>
            <div>

              <p className='pl-5 font-bold'>Flight Details</p>
              <p>Operated by: Emirates</p>
              <p>Flight no: EK2113</p>
              <p>Cabin: Business</p>
              <p>Fare type: Economy Plus</p>
            </div>
          </Grid>


          <Grid item xs={12} md={12} xl={12}>
           <Divider />
           </Grid>
           </>
           }
          <Grid item xs={12} md={12} xl={12}>
            <div className='flex justify-between'>
            <div className='flex'>
              <ButtonComponent name="Economy Light" icon={false} classes="bg-gray text-black" />
              <ButtonComponent name="Carry-on bag included" icon={false} classes="bg-gray text-black ml-3" />
            </div>
              <div className='pt-3'>
              <Button variant="text" className="flex items-center gap-2 float-right" onClick={()=>setShowDetail(false)}>
                Hide Detail <img src="http://localhost:5173/src/assets/images/show-detail.png" />
                {/* <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" /> */}
              </Button>
            </div>
              </div>

          </Grid>
          </>
          }
        </Grid>
      </CardBody>
    </Card>
  );
}


export default FlightDetailsCard;
