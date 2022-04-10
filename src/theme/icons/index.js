import React from "react";
import Python from "./Python";
import Webpack from "./Webpack";


const Icon = props => {
    switch(props.name) {
        case 'Python':
            return <Python {...props} />;
        case 'Webpack':
            return <Webpack {...props} />
        default:
            return;
    }
}

export default Icon;