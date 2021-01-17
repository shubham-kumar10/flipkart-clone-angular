export interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    hasDiscount: boolean;
    discountPercent: number;
    seller: string;
    deliveryTime: number;
    deliveryCost: number;
}