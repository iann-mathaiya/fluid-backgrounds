import { MeshGradient, type MeshGradientProps } from '@paper-design/shaders-react';

export default function MeshBackground(props: MeshGradientProps) {

    const defaultProps = {
        speed: 0.4,
        style: { width: '100%', height: '100%' }
    };

    return <MeshGradient {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
}
