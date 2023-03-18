export class Chip {
    id: number = 0;
    projectId: number = 0;
    name: string = "name";

    constructor(obj: Partial<Chip>) {
        Object.assign(this, obj);
    }
}