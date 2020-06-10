import React from "react";

class CustomTextField extends React.Component {
    static defaultProps = {
        borderRadius: '5px',
        width: '45%'
    }

    render() {
    const {borderRadius, width} = this.props;
        return (
            <input style={{borderRadius, width}}/>
        );
    }
}

export default CustomTextField;