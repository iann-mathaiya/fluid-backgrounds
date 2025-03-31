import { DotGrid, type DotGridProps } from '@paper-design/shaders-react';

export default function DotGridBackground(props: DotGridProps) {
    const defaultProps = {
        speed: 0.4,
        style: { width: '100%', height: '100%' }
    };

    return (
        <DotGrid {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
