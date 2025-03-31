import { DotOrbit, type DotOrbitProps } from '@paper-design/shaders-react';

export default function DotOrbitBackground(props: DotOrbitProps) {
    const defaultProps = {
        style: { width: '100%', height: '100%' }
    };

    return (
        <DotOrbit {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
