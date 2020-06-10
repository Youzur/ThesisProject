import React from "react";
import CustomLayout from "./components/layouts/CustomLayout";
import CustomButton from "./components/buttons/CustomButton";
import CustomTextField from "./components/textfields/CustomTextField";
import RegisterButton from "./components/buttons/RegisterButton";

class CustomLogIn extends React.Component {
    render() {
        return (
            <CustomLayout>
                <label>Enter Name</label>
                <br/>
                <CustomTextField></CustomTextField>
                <br/>
                <label>Enter Password</label>
                <br/>
                <CustomTextField></CustomTextField>
                <br/>
                <br/>
                <CustomButton>Log In</CustomButton>
                <RegisterButton>Register</RegisterButton>
                {/*<CustomButton onClick={() => {
                    console.log("You clicked me")}}>Register
                </CustomButton>*/}
                <br />
                <a href={'https://en.wikipedia.org/wiki/Self-service_password_reset'}>Forgot password?</a>
            </CustomLayout>
        );
    }
}

export default CustomLogIn;