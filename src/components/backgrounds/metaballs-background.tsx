import { Metaballs, type MetaballsProps } from '@paper-design/shaders-react';

export default function MetaballsBackground(props: MetaballsProps) {
    
    const defaultProps = {
        scale: 0.9,
        ballSize: 0.3,
        // visibilityRange: 0.4,
        speed: 0.6,
        frame: 0.3,
        style: { width: '100%', height: '100%' }
    };

    return <Metaballs {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}