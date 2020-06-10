import React from "react";

class CustomLayout extends React.Component {
    static defaultProps = {
        backgroundColor: '#eee',
        borderRadius: '12px',
        width: '30%',
        height: '100%',
        padding: '15px',
        margin: 'auto',
        boxShadow: '3px 3px #999'
    };

    render() {

        const { backgroundColor, borderRadius, width, height, padding, margin, boxShadow, children } = this.props;
        return (
            <div style={{backgroundColor, borderRadius, width, height, padding, boxShadow, margin}} >
                {children}
            </div>
        );
    }
}

export default CustomLayout;