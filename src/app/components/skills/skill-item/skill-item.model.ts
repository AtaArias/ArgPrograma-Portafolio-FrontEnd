export class Skill {
    id: number = 0;
    name: string = "Habilidad";
    percentage: number = 70;

    constructor(obj: Partial<Skill>){
        Object.assign(this, obj);
    }
}