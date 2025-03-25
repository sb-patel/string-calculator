import { add } from './stringCalculator';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test("returns sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("handles new line as a separator", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|4")).toBe(9);
});

test("throws error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});