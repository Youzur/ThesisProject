import React from "react";

class CustomButton extends React.Component {

    static defaultProps = {
        color: 'blue',
        backgroundColor: 'lightblue',
        border: '1px solid black',
        borderRadius: '12px',
        width: '80%',
        padding: '10px',
        margin: '10px',

        type: 'button',
        //onClick: handleClick()
    };
    render() {
        const { color, backgroundColor, border, borderRadius, width, padding, margin, type, children, onClick } = this.props;

        return (
            <button className={'customButton'} type={type}   style={{ color, backgroundColor, border, borderRadius, width, padding, margin }} onClick={onClick} onMouseEnter={enterMessage} onMouseLeave={exitMessage}>
                {children}
            </button>
        )
    }
}

function handleClick() {
    console.log("Clicked, but no cigar! Try adding a feature when you click the button with the help of onClick() function!")
}

function enterMessage() {
    console.log("I'M ON THE BUTTON!");
    //document.getElementById('customButton').style.backgroundColor = "gray";
    document.getElementsByClassName('customButton')[0].style.backgroundColor = "gray";
    //let x = document.getElementsByClassName('customButton');
    /*let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = 'gray';
    }*/
}

function exitMessage() {
    console.log("I'M OUT OF THE BUTTON!");
    document.getElementsByClassName('customButton')[0].style.backgroundColor = "lightblue";
    //let x = document.getElementsByClassName('customButton');
    /*let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = 'lightblue';
    }*/
}

export default CustomButton;