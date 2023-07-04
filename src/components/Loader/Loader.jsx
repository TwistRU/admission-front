import React from 'react';
import atomLoader from "../../assets/images/atom.gif";

const defaultProps = {
    height: 100,
    width: 100,
    style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-85px",
        marginLeft: "-50px",
    }
}

const Loader = props => {
    return (
        <div className='loader'>
            <img
                src={atomLoader}
                alt={"Atom Loader"}
                {...defaultProps}
                {...props}
            />
        </div>
    )
};


export default Loader;