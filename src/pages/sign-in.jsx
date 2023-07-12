import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Footer, SimpleFooter } from "@/components/layout";
import InputField from "@/components/input";
import { loginOtp, Signin } from "@/DAL/authentication";
import ButtonComponent from "@/components/Button";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OTPDialog from "@/components/otpModal";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [otp_modal, setOTP_Modal] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [otp_value, setOtp_Value] = React.useState("")

  const handleSubmit = async ()=> {
    setIsLoading(true)
    const data = {
      email,
      password,
    }

    const response = await Signin(data);
    console.log(response, "response");
    if(response.status === true){
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("email", response.data.registered_email);
      setOTP_Modal(true);
      setIsLoading(false)
      // navigate("/home");
    }else{
      setIsLoading(false)
      setErrorMessage(response.message);
      setError(true);
    }
  }

  const handleVerifyOTP = async ()=> {
    setIsLoading(true)
    const data = {
      user_id: localStorage.getItem("user_id"),
      otp: otp_value,
      app: "mobile",
      device_type: "android"
    }

    const response = await loginOtp(data);
    console.log(response, "response");
    if(response.status === true){
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("email", response.data.registered_email);
      setIsLoading(false)
      navigate("/home");
    }else{
      setIsLoading(false)
      setErrorMessage(response.message);
      setError(true);
    }
  }

  let _arr = [];
  const handleOtp = (value)=> {
    console.log(value)
    _arr.push(value)
    console.log(_arr)
    var realDigits = _arr.map((x)=> {
      return parseInt(x, 10);
    })
    setOtp_Value(Number(realDigits.join('')))

    console.log(Number(realDigits.join('')),"realDigits")
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=> setError(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <img
        src="http://localhost:5173/src/assets/images/auth_bg.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 pl-8 pr-8">
          
          <CardBody className="flex flex-col gap-4 pl-0 pr-0">
          <Typography variant="h4" color="blue" className="self-center">
          Login to Existing User
            </Typography>
          <InputField label="Email *" type="email" placeholder="example@gmail.com" setState={setEmail} />
            <InputField classes="password-field" label="Password *" type="password" placeholder="***********" setState={setPassword} />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
          <div className="flex justify-center">
            {isLoading ? <CircularProgress />  : <ButtonComponent style={{backgroundColor: "#1A97D4", color: "white"}} name="Login" onClick={handleSubmit} />}
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>

      

        <OTPDialog otp_modal={otp_modal} otp_value={otp_value} setState={handleOtp} isLoading={isLoading} onClick={handleVerifyOTP}
        errorMessage={errorMessage} error={error} action={action}
        />
<Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={()=> setError(false)}
        // message={errorMessage}
        action={action}
      >
        <Alert onClose={()=> setError(false)} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
        </Snackbar>

    </>
  );
}

export default SignIn;
