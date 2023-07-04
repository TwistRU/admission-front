import React from 'react'
import { Skeleton as AntSkeleton } from "antd";

const Skeleton = ({ size }) => {
    const style = { width: '100%' };

    return (
        <div className="skeleton-wrapper">
            <AntSkeleton.Input className="theme-dark" active style={style} size={size}/>
        </div>
    )
};

export default Skeleton;