import { ICard } from "src/app/ICard";

export class Card {
    id: number;
    title: string;
    iconUrl: string;
    content: string;

    constructor(obj: ICard) {
        this.id = obj.id || 0;
        this.title = obj.title;
        this.iconUrl = obj.iconUrl;
        this.content = obj.content;
    }
}