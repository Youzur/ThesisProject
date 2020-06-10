import React from "react";
import CustomLayout from "./CustomLayout";
import CustomTextField from "../textfields/CustomTextField";
import CustomButton from "../buttons/CustomButton";

class CustomDialogBoxContent extends React.Component{
    static defaultProps = {
        backgroundColor: '#fefefe',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%'
    }

    render() {

        const { backgroundColor, margin, padding, border, width, children } = this.props;
        return (
            <div style={{backgroundColor, margin, padding, border, width}}>
                {children}
                <CustomLayout>
                    <h2>Creating account</h2>
                    <label>Enter Name</label>
                    <br/>
                    <CustomTextField></CustomTextField>
                    <br/>
                    <label>Enter Password</label>
                    <br/>
                    <CustomTextField></CustomTextField>
                    <br/>
                    <br/>
                    <CustomButton>Create Account</CustomButton>
                </CustomLayout>
            </div>
        );
    }
}

export default CustomDialogBoxContent;