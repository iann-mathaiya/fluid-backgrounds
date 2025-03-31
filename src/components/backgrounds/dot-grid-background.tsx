import { DotGrid, type DotGridProps } from '@paper-design/shaders-react';

export default function DotGridBackground(props: DotGridProps) {
    const defaultProps = {
        dotSize: 1,
        gridSpacingX: 20, 
        gridSpacingY: 20,
        style: { width: '100%', height: '100%' }
    };

    return (
        <DotGrid {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />
    );
}
