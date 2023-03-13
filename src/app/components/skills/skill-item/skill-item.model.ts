export class Skill {
    id: number = 0;
    name: string = "Habilidad";
    type: string = "hard";
    percentage: number = 70;

    constructor(obj: Partial<Skill>){
        Object.assign(this, obj);
    }
}