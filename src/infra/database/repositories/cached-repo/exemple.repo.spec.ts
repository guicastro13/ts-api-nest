import { ExempleEntity, ExempleEntityAttributes } from "../../../../entity/exemple";
import { ExempleRepository } from "./exemple.repo";

describe("ExempleRepository", () => {
    let exempleRepo: ExempleRepository;

    beforeEach(() => {
        exempleRepo = new ExempleRepository();
    });

    afterEach(() => {
        exempleRepo['cache'].clear();
    });

    describe("create", () => {
        it("should create a new exemple and add it to the cache", async () => {
            const data: ExempleEntityAttributes = { name: "Example", description: "This is an example"};
            const exemple = await exempleRepo.create(data);

            expect(exemple).toBeInstanceOf(ExempleEntity);
            expect(exemple.name).toBe("Example");
            expect(exempleRepo['cache'].get(exemple.id)).toBe(exemple);
        });

        it("should not be able to create a user without description", async () => {
            const data: ExempleEntityAttributes = { name: "Example", description: "" };

            await expect(exempleRepo.create(data)).rejects.toThrow("Name and description are required");
        });

        it("should not be able to create a user without name", async () => {
            const data: ExempleEntityAttributes = { name: "", description: "This is an example" };

            await expect(exempleRepo.create(data)).rejects.toThrow("Name and description are required");
        });

        it("should throw an error if name and description are empty", async () => {
            const data: ExempleEntityAttributes = { name: "", description: "" };

            await expect(exempleRepo.create(data)).rejects.toThrow("Name and description are required");
        });
    });

    describe("update", () => {
        it("should update an existing exemple in the cache", async () => {
            const data: ExempleEntityAttributes = { name: "Example", description: "This is an example"};
            await exempleRepo.create(data);

            const updatedData: ExempleEntityAttributes = { name: "Updated Example", description: "This is an example" };
            const updatedExemple = await exempleRepo.update(updatedData);

            expect(updatedExemple).toBeInstanceOf(ExempleEntity);
            expect(updatedExemple.name).toBe("Updated Example");
            expect(exempleRepo['cache'].get(updatedExemple.id)).toBe(updatedExemple);
        });
    });

    describe("findById", () => {
        it("should find an existing exemple by id in the cache", async () => {
            const data: ExempleEntityAttributes = { name: "Example", description: "This is an example" };
            const exemple = await exempleRepo.create(data);

            const foundExemple = await exempleRepo.findById(exemple.id);

            expect(foundExemple).toBeInstanceOf(ExempleEntity);
            expect(foundExemple.name).toBe("Example");
        });

        it("should throw an error if the exemple is not found", async () => {
            const id = "nonexistent-id";

            await expect(exempleRepo.findById(id)).rejects.toThrow("Exemple not found");
        });
    });

    describe("findAll", () => {
        it("should return an array of all exemples in the cache", async () => {
            const data1: ExempleEntityAttributes = { name: "Example 1", description: "This is an example" };
            const data2: ExempleEntityAttributes = { name: "Example 2", description: "This is an example" };
            await exempleRepo.create(data1);
            await exempleRepo.create(data2);

            const exemples = await exempleRepo.findAll();

            expect(exemples).toBeInstanceOf(Array);
            expect(exemples.length).toBe(2);
            expect(exemples[0]).toBeInstanceOf(ExempleEntity);
            expect(exemples[0].name).toBe("Example 1");
            expect(exemples[1]).toBeInstanceOf(ExempleEntity);
            expect(exemples[1].name).toBe("Example 2");
        });

        it("should return an empty array if there are no exemples in the cache", async () => {
            const exemples = await exempleRepo.findAll();

            expect(exemples).toBeInstanceOf(Array);
            expect(exemples.length).toBe(0);
        });
    });

    describe("delete", () => {
        it("should delete an existing exemple from the cache", async () => {
            const data: ExempleEntityAttributes = { name: "Example", description: "This is an example" };
            const exemple = await exempleRepo.create(data);

            await exempleRepo.delete(exemple.id);

            expect(exempleRepo['cache'].get(exemple.id)).toBeUndefined();
        });
    });
});