import { Warp, type WarpProps } from '@paper-design/shaders-react';

type MeshBackgroundProps = WarpProps

export default function WarpBackground({ color1, color2, color3, speed = 0.4, rotation= 0.5 }: MeshBackgroundProps) {
    return (
        <Warp
            color1={color1}
            color2={color2}
            color3={color3}
            speed={speed}
            rotation={rotation}
            style={{ width: '100%', height: '100%' }}
        />
    );
}
