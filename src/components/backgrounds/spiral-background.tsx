import { Spiral, type SpiralProps } from "@paper-design/shaders-react";
import React from 'react';

export default function SpiralBackground(props: SpiralProps) {
    
    const defaultProps = {
        speed: 0.4,
        rotation: 0.5,
        style: { width: '100%', height: '100%' }
    };

    return (
        <Spiral {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
