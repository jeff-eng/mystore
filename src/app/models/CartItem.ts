import { Product } from './Product';

export interface CartItem {
    quantity: number;
    product?: Product;

    // constructor(product: Product, qty: number) {
    //     this.quantity = qty;
    //     this.product = new Product(
    //         product.id,
    //         product.name,
    //         product.price,
    //         product.url,
    //         product.description
    //     );
    // }
}