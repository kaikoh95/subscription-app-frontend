 
interface Product {
    id: number
    name: string,
    imageLink?: string,
    price: number,
    quantity?: number
}

interface Subscription {
    frequency: number,
    id: number,
    products: Product[]
}

interface CustomerData {
    customerId: string,
    firstName: string,
    subscription: Subscription,
}

type CustomerSubscriptionProps = {
    customerId: string,
    subscriptionId: string,
}

type CustomerSubscriptionResponse = {
    message?: string,
    data: CustomerData,
}