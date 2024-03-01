import request from "supertest";
import { start } from "../../app";

const app = start();

interface System {
    name: string;
    ensembles: [Ensemble];
    deleted: boolean;
}

interface Ensemble {
    name: string;
    elements: [Element];
    deleted: boolean;
}

interface Element {
    name: string;
    operations: [Operation];
    deleted: boolean;
}

interface Operation {
    name: string;
    type: string;
    level: number;
    deleted: boolean;
}

describe("GET /checklist", () => {
    const levels = [1, 2];
    const types = ["nettoyage", "inspection", "réglage"];

    levels.forEach((level) => {
        types.forEach((type) => {
            it(`should return level ${level} and type ${type} checklist`, async () => {
                const res = await request(app).get(
                    `/checklist/${level}/${type}`,
                );
                if (Object.keys(res.body).length !== 0) {
                    expect(res.status).toBe(200);
                    expect(res.body).toHaveProperty("systems");
                    res.body.systems.forEach((system: System) => {
                        expect(system).toHaveProperty("ensembles");
                        expect(system.deleted).toEqual(false);
                        system.ensembles.forEach((ensemble: Ensemble) => {
                            expect(ensemble).toHaveProperty("elements");
                            expect(ensemble.deleted).toEqual(false);
                            ensemble.elements.forEach((element: Element) => {
                                expect(element).toHaveProperty("operations");
                                expect(element.deleted).toEqual(false);
                                element.operations.forEach(
                                    (operation: Operation) => {
                                        expect(operation).toHaveProperty(
                                            "level",
                                            level,
                                        );
                                        expect(operation).toHaveProperty(
                                            "type",
                                            type,
                                        );
                                        expect(operation).toHaveProperty(
                                            "deleted",
                                            false,
                                        );
                                    },
                                );
                            });
                        });
                    });
                }
            });
        });
    });
});
