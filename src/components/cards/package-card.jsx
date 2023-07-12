import React from 'react'
import {
    StarIcon,
  } from "@heroicons/react/24/solid";
import ButtonComponent from "../Button";

import "./style.css";
   
  export default function PackageCard() {
    return (
        <>
      {/* <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray"> */}
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
            className="package_card_image mt-5"
          />
          <div 
        //   className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 "
           />
           {/* <div className="relative" style={{ bottom: 320 }}>
           <IconButton
            size="sm"
            color="red"
            variant="text"
            className="rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
           </div> */}
            {/* <div className="relative" >
                    <div className="p-5 flex justify-between">
                      <div className="flex pl-3 pr-3 rounded-xl" style={{ backgroundColor: "rgba(3, 16, 23, 0.30)", }}>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/star.png" />
                        <p className="text-white pl-2">4.3</p>
                      </div>
                      <div>
                        <img width="24" height="24" src="http://localhost:5173/src/assets/images/heart.png" />
                      </div>
                    </div>
                  </div> */}
          
        {/* </CardHeader>
        <CardBody> */}
          <div className="mb-3 flex items-center justify-between ">
            <p className="card_heading pt-3">
              Wooden House, Florida
            </p>
            
          </div>
          <div className="flex">

          <p
              color="blue-gray"
              className="flex items-center gap-1.5 rating_text pt-3"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              5.0
            </p>
            <p color="blue-gray" className="flex items-center gap-1.5 rating_text pl-3 pt-3">{"("}2.5k Review{")"}</p>
          
            </div>
            <p className="sub_heading pt-3">
            Enter a freshly updated and thoughtfully furnished peaceful home
            surrounded by ancient trees, stone walls, and open meadows.
          </p>
         
        {/* </CardBody> */}
        {/* <CardFooter className="pt-3"> */}
        <div className="pt-5">
          <ButtonComponent style={{backgroundColor: "#1A97D4", color: "white"}} name="Book now" icon={false} />
          </div>
        {/* </CardFooter> */}
      {/* </Card> */}
      </>
    );
  }