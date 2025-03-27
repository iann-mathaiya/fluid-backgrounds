import { MeshGradient, Warp } from "@paper-design/shaders-react";

export default function FluidWarpLogo() {
    return (
        <div className="min-w-32 w-32 min-h-20 h-20 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-xl shadow-2xl overflow-hidden">
            <Warp
                color1="#bae6fd"
                color2="#60a5fa"
                color3="#312e81"
                speed={0.4}
                rotation={0.5}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
