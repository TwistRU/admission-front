import React from 'react';
import { isValidData } from '../../common/functions';
import Skeleton from "../Skeleton/Skeleton";

const SkeletonWrapper = (props) => {

    const { validationData, size } = props;

    console.log(validationData)
    return (
        isValidData(validationData)
            ? props.children
            : <Skeleton size={size} />
    )
}

export default SkeletonWrapper;