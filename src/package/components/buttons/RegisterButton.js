import React from "react";
import CustomDialogBox from "../layouts/CustomDialogBox";

class RegisterButton extends React.Component {

    static defaultProps = {
        color: 'blue',
        backgroundColor: 'lightgreen',
        border: '1px solid black',
        borderRadius: '12px',
        width: '80%',
        padding: '10px',
        margin: '10px',

        type: 'button',
    };
    render() {
        const { color, backgroundColor, border, borderRadius, width, padding, margin, type, children } = this.props;

        return (
            <div>
                <button className={'registerButton'} type={type}   style={{ color, backgroundColor, border, borderRadius, width, padding, margin }} onClick={openDialogBox} onMouseEnter={enterMessage} onMouseLeave={exitMessage}>
                    {children}
                </button>
                <CustomDialogBox className={'dialogBox'}></CustomDialogBox>
            </div>
        )
    }
}

function enterMessage() {
    console.log("I'M ON THE BUTTON!");
    document.getElementsByClassName('registerButton')[0].style.backgroundColor = "gray";
}

function exitMessage() {
    console.log("I'M OUT OF THE BUTTON!");
    document.getElementsByClassName('registerButton')[0].style.backgroundColor = "lightgreen";
}

function openDialogBox() {
    console.log("Start");

    document.getElementsByClassName("dialogBox")[0].style.display = "block";

    console.log("Exit");
}

export default RegisterButton;

/*
export const RegisterButton = ({ children, type, onClick}) => {

    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
};
*/
