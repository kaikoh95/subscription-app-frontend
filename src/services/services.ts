import axios, { AxiosInstance } from "axios";

const BACKEND_ENDPOINT: string = "http://localhost:5000" // TODO: Refactor into .env file when using webpack

const client: AxiosInstance = axios.create({
  baseURL: BACKEND_ENDPOINT,
});

export const getSubscription = (customerId:string, subscriptionId:string) => {
  return client
  .get<CustomerSubscriptionResponse>(`/customers/${customerId}/subscriptions/${subscriptionId}`)
}

export const deleteSubscriptionProduct = (customerId:string, subscriptionId:string, ids:string) => {
  return client
  .delete<CustomerSubscriptionResponse>(`/customers/${customerId}/subscriptions/${subscriptionId}`, {data: {ids}})
}

// export const addSubscriptionProduct = (customerId:string, subscriptionId:string, products: Product[]) => {
//   return client
//   .put<CustomerSubscriptionResponse>(`/customers/${customerId}/subscriptions/${subscriptionId}`, {products})
// }