import { Voronoi, type VoronoiProps } from "@paper-design/shaders-react";

export default function VoronoiBackground(props: VoronoiProps) {
    
    const defaultProps = {
        speed: 0.4,
        rotation: 0.5,
        style: { width: '100%', height: '100%' }
    };

    return <Voronoi {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}
