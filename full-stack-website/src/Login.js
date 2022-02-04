import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Login.css';

const Login = () => {

    return (
        <div className="login-background">
            <p className="login-logo">Foodlux</p>
            <Box
                component="form"
                sx={{
                    border: "1px solid black",
                    borderRadius: "25px 25px",
                    backgroundColor: "white",
                    boxShadow: "black 0px 0px 20px",
                    maxWidth: "250px",
                    width: "75%",
                    margin: "0 auto",
                    padding:"30px",
                }}
                action="/"
                method="post"
                target="_blank"
                autocomplete="on"
            >
            <p className="login-header">Login</p>
            <TextField className="login-fields" label="Username" margin="dense" variant="outlined" />
                <br></br>
                <br></br>
            <TextField className="login-fields" label="Email" type="email" margin="dense" variant="outlined" />
                <br></br>
                <br></br>
            <TextField required className="login-fields" label="Password" type="password" margin="dense" variant="filled" />
            <br></br>
                <br></br>
            <Button color="error" sx={{'&:hover': {backgroundColor: 'red', color: 'white'}}} variant="outlined" endIcon={<SendIcon />}>Log In</Button>
            <br></br>
            <br></br>
            <p className="registration-login">don't have an account? <a>Register</a></p>
            </Box>
        </div>
    )
}

export default Login