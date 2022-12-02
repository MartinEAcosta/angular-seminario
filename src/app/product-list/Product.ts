export interface Product {
    forEach(arg0: (item: { stock: any; quantity: any; }) => void): unknown;

    name: string;
    stock: number;
    price: number;
    image: string;
    offer: boolean;
    quantity: number;

}
