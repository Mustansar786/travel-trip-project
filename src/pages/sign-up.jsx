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
import ButtonComponent from "@/components/Button";
import InputField from "@/components/input";
import { Signup } from "@/DAL/authentication";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SignUp() {
  const navigate = useNavigate();
  const [first_name, setFirst_Name] = React.useState("")
  const [last_name, setLast_Name] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone_number, setPhone_Number] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async ()=> {
    setIsLoading(true)
    const data = {
      email,
      firstName: first_name,
      lastName: last_name,
      phone: phone_number,
      password,
      refer_user: "12345",
    }

    const response = await Signup(data);
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

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
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
    <div>
      
      <img
        src="http://localhost:5173/src/assets/images/auth_bg.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full" />
      <div className="container mx-auto p-4">
        <Card className="absolute signup-card-class left-2/4 w-full max-w-[32rem] -translate-y-2/4 -translate-x-2/4 pl-8 pr-8">
         
            
          <CardBody className="flex flex-col gap-2">

          <Typography variant="h4" color="blue" className="self-center">
          Register for New User
            </Typography>
            <InputField label="Fist Name *" placeholder="Fist Name" value={first_name} setState={setFirst_Name} />
            <InputField label="Last Name *" placeholder="Last Name" setState={setLast_Name} />
            <InputField label="Email *" placeholder="example@gmail.com" setState={setEmail} />
            <InputField label="Phone Number *" placeholder="Phone Number" setState={setPhone_Number} />
            <InputField classes="password-field" label="Password *" type="password" placeholder="***********" setState={setPassword} />
           
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex justify-center">
            {isLoading ? <CircularProgress />  : <ButtonComponent style={{backgroundColor: "#1A97D4", color: "white"}} name="Register" onClick={handleSubmit} />}
            </div>
            
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
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
    </div>
      {/* <div className="bg-blue-gray-50/50">
        <Footer />
      </div> */}
    </>
  );
}

export default SignUp;
