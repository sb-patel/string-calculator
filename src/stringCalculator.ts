export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter: RegExp = /,|\n/;
    const match = numbers.match(/^\/\/(.+)\n/);

    if (match) {
        const rawDelimiter = match[1];
        const escapedDelimiter = rawDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Escape special characters
        delimiter = new RegExp(escapedDelimiter);
        numbers = numbers.slice(match[0].length);
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
