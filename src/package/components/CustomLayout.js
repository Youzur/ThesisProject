import React from "react";
import CustomButton from "./CustomButton";

class CustomLayout extends React.Component {
    static defaultProps = {
        backgroundColor: '#123123',
        width: '900px',
        height: '900px'
    };

    render() {

        const { backgroundColor, width, height } = this.props;
        return (
            <div style={{backgroundColor, width, height}} >
                <CustomButton>Custom Button</CustomButton>
            </div>
        );
    }
}

export default CustomLayout;