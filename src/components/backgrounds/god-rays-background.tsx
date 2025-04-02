import { GodRays, type GodRaysProps } from '@paper-design/shaders-react';

export default function GodRaysBackground(props: GodRaysProps) {

    const defaultProps = {
        style: { width: '100%', height: '100%' }
    };

    return (
        <GodRays {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }}  />
    );
}
