import { MeshGradient } from '@paper-design/shaders-react';

type MeshBackgroundProps = {
    color1: string;
    color2: string;
    color3?: string;
    color4?: string;
    speed?: number;
}

export default function MeshBackground({ color1, color2, color3, color4, speed = 0.4 }: MeshBackgroundProps) {
    return (
        <MeshGradient
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
            speed={speed}
            style={{ width: '100%', height: '100%' }}
        />
    );
}
