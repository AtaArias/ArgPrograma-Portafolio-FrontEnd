export class About {
    title: string;
    content: string;
    iconUrl: string;
    iconDescription: string;

    titleEdit: boolean = false;
    contentEdit: boolean = false;
    iconUrlEdit: boolean = false;
    iconDescriptionEdit: boolean = false;

    constructor(obj: {
        title?:string, 
        content?: string, 
        iconUrl?: string, 
        iconDescription?: string,
        }
        ){

        this.title = obj.title || "About me";
        this.content = obj.content || "Info about me";
        this.iconUrl = obj.iconUrl || "";
        this.iconDescription = obj.iconDescription || "icon description";   
    }

    
}