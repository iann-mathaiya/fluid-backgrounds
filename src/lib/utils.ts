export function getColorPalettesByRange<T>(array: T[], start: number, end: number): T[] {
    // Ensure start and end are within array bounds
    const safeStart = Math.max(0, Math.min(start, array.length - 1));
    const safeEnd = Math.max(0, Math.min(end, array.length - 1));

    // Swap if start is greater than end
    const actualStart = Math.min(safeStart, safeEnd);
    const actualEnd = Math.max(safeStart, safeEnd) + 1;

    return array.slice(actualStart, actualEnd);
}