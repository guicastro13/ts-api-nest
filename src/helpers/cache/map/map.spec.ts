import { MapMemory } from "./map";

describe("MapMemory", () => {
    let mapMemory: MapMemory;

    beforeEach(() => {
        mapMemory = new MapMemory();
    });

    afterEach(() => {
        mapMemory.clear();
    });

    test("should set and get a value", () => {
        mapMemory.set("key", "value");
        expect(mapMemory.get("key")).toBe("value");
    });

    test("should return undefined for non-existing key", () => {
        expect(mapMemory.get("nonExistingKey")).toBeUndefined();
    });

    test("should check if a key exists", () => {
        mapMemory.set("key", "value");
        expect(mapMemory.has("key")).toBe(true);
        expect(mapMemory.has("nonExistingKey")).toBe(false);
    });

    test("should delete a key", () => {
        mapMemory.set("key", "value");
        expect(mapMemory.delete("key")).toBe(true);
        expect(mapMemory.has("key")).toBe(false);
    });

    test("should clear all keys", () => {
        mapMemory.set("key1", "value1");
        mapMemory.set("key2", "value2");
        mapMemory.clear();
        expect(mapMemory.has("key1")).toBe(false);
        expect(mapMemory.has("key2")).toBe(false);
    });
});