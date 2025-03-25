
import { twMerge } from "tailwind-merge";
import colorPalettes from "../lib/color-palettes/100.json";

export default function ColorPalettes() {

    function getGradientClass(palette: string[]) {
        return `bg-gradient-to-r from-[${palette[0]}] via-25% via-[${palette[1]}] via-50% via-[${palette[2]}] to-[${palette[3]}]`;
  };

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                colorPalettes.map((palette) => (
                    <li key={`${palette[0]}-${palette[1]}-${palette[2]}-{${palette[3]}}`}
                        className="rounded-xl overflow-hidden border border-zinc-200"
                        style={{ background: `linear-gradient(to right, ${palette[0]} 0%, ${palette[1]} 25%, ${palette[2]} 50%, ${palette[3]} 100%)`}}
                    >
                        <ul className="flex">
                            {palette.map((color) => (
                                <li key={color} className="w-1/4 h-64 text-zinc-600">
                                    {color}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
            }
        </ul>
    );
}
