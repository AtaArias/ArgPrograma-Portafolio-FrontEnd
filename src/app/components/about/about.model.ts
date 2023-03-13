export class About {
    title: string = "About me";
    content: string = "Info about me";
    iconUrl: string = "url";
    iconDescription: string = "icon description";

    titleEdit: boolean = false;
    contentEdit: boolean = false;
    iconUrlEdit: boolean = false;
    iconDescriptionEdit: boolean = false;

    constructor(obj: Partial<About>){
        Object.assign(this, obj)
    }
}