import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import { CircularProgress } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

import OTPInput, { ResendOTP } from "otp-input-react";
import ButtonComponent from "../Button";
import "./style.css";

export default function OTPDialog({ otp_modal, onClick, otp_value, setState, isLoading, errorMessage, error, action }) {


    return (
        <Fragment>

            <Dialog open={otp_modal}>
                <DialogBody className="text-center">
                    <div className="flex items-center justify-center">
                        <img src="http://localhost:5173/src/assets/checked.png" />
                    </div>
                    <Typography variant="h3" color="blue" className="self-center">
                        Verify Code
                    </Typography>

                    <p className="sub-text">We sent an OTP code on your Email.</p>

                    <div className="flex justify-center">
                        <OTPInput 
                        value={otp_value} 
                        onChange={(data)=> setState(data)} 
                        autoFocus 
                        OTPLength={5} 
                        otpType="number" 
                        disabled={false} 
                        // secure
                         />

                    </div>


                    <div className="flex items-center justify-center">
                       {isLoading ? <CircularProgress />  : <ButtonComponent style={{backgroundColor: "#1A97D4", color: "white"}} classes="self-center" name="Validate" icon={false} onClick={onClick} />}
                    </div>
                </DialogBody>

                <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={()=> setError(false)}
        message={errorMessage}
        action={action}
      />
            </Dialog>
           
        </Fragment>
    );
}