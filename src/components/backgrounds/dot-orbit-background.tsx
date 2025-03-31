import { DotOrbit, type DotOrbitProps } from '@paper-design/shaders-react';

export default function DotOrbitBackground(props: DotOrbitProps) {
    const defaultProps = {
        speed: 3,
        scale: 0.4,
        dotSize: 0.7,
        spreading: 1,
        dotSizeRange: 0.4,
        style: { width: '100%', height: '100%' }
    };

    return (
        <DotOrbit {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
