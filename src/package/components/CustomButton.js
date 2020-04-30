import React from "react";

class CustomButton extends React.Component {
    static defaultProps = {
        color: 'blue',
        borderRadius: '15px',
        type: 'button',
        onClick: handleClick()
    };
    render() {
        const { color, borderRadius, type, children } = this.props;

        return (
            <button type={type}   style={{ color, borderRadius }} onClick={handleClick}>
                {children}
            </button>
        )
        //const { theme, label, color, ...props } = this.props;
        //return <button className={`btn btn-${theme}`} {...props}>{ label }</button>
    }
}

function handleClick() {
    console.log("Clicked, but no cigar! Try adding a feature when you click the button!")
}

/*CustomButton.defaultProps = {
    theme: "secondary",
    label: "Button Text",
    color: "red"
};*/

export default CustomButton;