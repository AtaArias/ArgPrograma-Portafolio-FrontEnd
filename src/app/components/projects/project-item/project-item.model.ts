export class Project {
    name: String = "Proyecto";
    fecha: Date = new Date(2022, 1, 4);
    description: String = "Descripción de mi proyecto";
    sourceUrl: String = "https://github.com/AtaArias";
    imageUrl: String = "https://static.vecteezy.com/system/resources/previews/000/400/962/original/vector-capital-letter-r-vintage-typography-style.jpg"

    constructor(obj: Partial<Project>){
        Object.assign(this, obj);
    }
}