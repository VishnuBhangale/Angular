import { rating } from "./rating";

export class Product{
    id!: number;
    title!: string;
    price!: number;
    description!: string;
    category!: string;
    rating!: rating;

    image!: string;

}