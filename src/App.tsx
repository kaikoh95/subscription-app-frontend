import { FC, ReactElement, useEffect, useState } from 'react';
import './App.css';
import { deleteSubscriptionProduct, getSubscription } from './services/services';
import { AxiosResponse } from "axios";


const App: FC<CustomerSubscriptionProps> = ({customerId, subscriptionId}): ReactElement => { 
  const [customer, setCustomer] = useState<CustomerData>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
      getSubscription(customerId, subscriptionId)
      .then((res: AxiosResponse) => {
          if (res?.data?.data) {
              let totalPrice:number = 0
              res.data.data.subscription.products.forEach((product: Product) => {
                totalPrice += (product.quantity || 1) * product.price
              })
              setCustomer(res.data.data)
              setTotalPrice(totalPrice)
          }
      });
  }, [customerId, subscriptionId]);

  const handleRemove = (product_id: number) => {
    deleteSubscriptionProduct(customerId, subscriptionId, product_id.toString())
    .then((res: any) => {
        if (res?.data?.data) {
            let totalPrice:number = 0
            res.data.data.subscription.products.forEach((product: Product) => {
              totalPrice += (product.quantity || 1) * product.price
            })
            setCustomer(res.data.data)
            setTotalPrice(totalPrice)
        }
    });
  }

  return (
      <div className="App">
          <div className="customerDetailsWrapper">
              Hi <span>{customer?.firstName}</span>
          </div>
          <div className="customerDetailsWrapper subscriptionWrapper">
              Subscription - <span>{customer?.subscription.id}</span>:
          </div>
          Products:
          <div className="productsListWrapper">
            {
              customer?.subscription.products.map((product: Product) => {
                return (
                  <div className="productWrapper">
                    <img className="productWrapper--image" src={product.imageLink} alt={product.name}/>
                    <div className="productWrapper--details">
                      <p>{product.name}</p>
                      <p>${product.price.toFixed(2)}</p>
                    </div>
                    <div className="productWrapper--action">
                      <div onClick={(e) => handleRemove(product.id)}>Remove</div>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="totalPriceWrapper">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
      </div>
  )
}

export default App;
