export class Project {
    name: String = "Proyecto";
    fecha: Date = new Date(2022, 1, 4);
    description: String = "Descripción de mi proyecto";
    sourceUrl: String = "https://github.com/AtaArias";

    constructor(obj: Partial<Project>){
        Object.assign(this, obj);
    }
}