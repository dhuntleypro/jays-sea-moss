import axios, { AxiosError } from 'axios';
// import { BASE_URL } from '../utils/api';
import { ProductModelProps } from '../models/ProductModelProps';
import { CONSTANTS } from '@/utils/constants';
import { BASE_URL } from '@/utils/api';
// import { BASE_URL } from '@/utils/api';
// import { CONSTANTS } from '@/utils/constants';
// import { CONSTANTS } from '../utils/constants';


interface PaymentJsonProps  {
  amount: number, // Example value, replace with your actual data
  currency: string, // Example value, replace with your actual data
  shipping_fee: number, // Example value, replace with your actual data
  stripe_id: string, // Example value, replace with your actual data
  app_name: string // Example value, replace with your actual data
};


  const paymentApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: "token",
        'Content-Type': 'application/json',
    },
    params: {
      store_id: CONSTANTS.store_id,
      email: "", // user?.email ?? "",
      tableName: 'prof-website-payment-table', 
      stripe_id: "acct_1NVCh3JEHBX7gOQA", // Example value, replace with your actual data
      showFilteredItems: true
    },
  });


export const getpayment = async () => {
  return await paymentApi.get(`/payment`);
};



export const createPaymentIntent = async (paymentJsonProps: PaymentJsonProps) => {
  try {
    const response = await paymentApi.post('/create-payment-intent', paymentJsonProps);
    return response.data; // Assuming you want to return the response data
  } catch (error) {
    throw error; // Rethrow the error to handle it outside
  }
};


export const showStripeHostedPage = async (priceID: string) => {
  try {
    const response = await paymentApi.post('/pay/stripe-hosted-page', { priceID });
    return response.data; // Assuming you want to return the full response data
  } catch (error : any) {
    console.error('Error:', error.response?.data || error.message);
    // console.log(error.response.data)

    throw error.response?.data || error.message; // Rethrow the error with more context
  }
};


export default paymentApi;