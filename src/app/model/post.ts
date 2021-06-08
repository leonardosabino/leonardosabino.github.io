import { GridsterItem } from "angular-gridster2";

export class Post {
    id!: string;
    title!: string;
    html!: string;
    createdDate!: Date;
    lastModifiedDate!: Date;
    layout!: GridsterItem;
}