import { PerlinNoise, type PerlinNoiseProps } from '@paper-design/shaders-react';

export default function PerlinNoiseBackground(props: PerlinNoiseProps) {
    const defaultProps = {
        style: { width: '100%', height: '100%' }
    };

    return (
        <PerlinNoise {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
