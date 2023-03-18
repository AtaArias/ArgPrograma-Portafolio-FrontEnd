import { Chip } from "../chip.model";

export class Project {
    name: String = "Proyecto";
    date: String = "2003-01-04";
    description: String = "Descripción de mi proyecto";
    sourceUrl: String = "https://github.com/AtaArias";
    imageUrl: String = "https://static.vecteezy.com/system/resources/previews/000/400/962/original/vector-capital-letter-r-vintage-typography-style.jpg"
    chips: Chip[] = [];
    id: number = 0;

    constructor(obj: Partial<Project>){
        Object.assign(this, obj);
    }
}