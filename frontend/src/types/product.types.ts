
export interface Product {
    id: number;
    title: string;
    shortDescription: string;
    image: string;
    category: string;
    platform: string;
    price: number;
    priceBefore?: number;
}
