export interface Bookings {
    destination: string;
    description: string;
    imageURL: string;
    price: number;
    discount: number;
}


export interface BookingsWithID extends Bookings {
    id: number;
}