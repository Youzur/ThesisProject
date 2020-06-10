import React from "react";
import CustomDialogBoxContent from "./CustomDialogBoxContent";

class CustomDialogBox extends React.Component {
    static defaultProps = {
        backgroundColor: 'rgb(0,0,0,0.4)',
        width: '100%',
        height: '100%',
        display: 'none',
        position: 'fixed',
        zIndex: '1',
        paddingTop: '100px',
        left: '0',
        top: '0',
        overflow: 'auto',

        color: '#aaa',
        float: 'right',
        borderRadius: '25px',
        fontSize: '28px',
        fontWeight: '80%',
        cursor: 'pointer'
    }

    render() {

        const { backgroundColor, width, height, display, position, zIndex,paddingTop, left, top, overflow, color, float, borderRadius, fontSize, fontWeight, cursor } = this.props;
        return (
            <div className={'dialogBox'} style={{ backgroundColor, width, height, display, position, zIndex, paddingTop, left, top, overflow }}>
                <CustomDialogBoxContent>
                    <button style={{backgroundColor: 'Transparent',color, float, borderRadius, fontSize, fontWeight, cursor}} onClick={closeDialogBox}>x</button>
                </CustomDialogBoxContent>
            </div>
        );
    }
}

function closeDialogBox() {
    console.log("Start closeDialogBox()");

    document.getElementsByClassName("dialogBox")[0].style.display = "none";

    console.log("Exit closeDialogBox()");
}

export default CustomDialogBox;