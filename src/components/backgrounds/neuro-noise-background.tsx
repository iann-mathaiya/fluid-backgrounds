import { NeuroNoise, type NeuroNoiseProps } from '@paper-design/shaders-react';
import React from 'react';

export default function NeuroNoiseBackground(props: NeuroNoiseProps) {
    const defaultProps = {
        style: { width: '100%', height: '100%' }
    };

    return (
        <NeuroNoise  {...defaultProps}  {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
