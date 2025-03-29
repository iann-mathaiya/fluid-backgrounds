import { SmokeRing, type SmokeRingProps } from '@paper-design/shaders-react';

export default function SmokeRingBackground(props: SmokeRingProps) {
    const defaultProps = {
        scale: 0.9,
        speed: 1,
        style: { width: '100%', height: '100%' }
    };

    return (
        <SmokeRing {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
