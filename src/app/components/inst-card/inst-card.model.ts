import { ICard } from "src/app/ICard";

export class Card {
    title: string;
    iconUrl: string;
    content?: string;

    constructor(obj: ICard) {
        this.title = obj.title;
        this.iconUrl = obj.iconUrl;
        this.content = obj.content;
    }
}