import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


export const Icons = {
    Ionicons,
}
const Icon = ({ type, name, color, size = 24, style }) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

export default Icon