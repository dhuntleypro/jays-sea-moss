// import { getUserCookie, getUserToken } from '@/config/cookieUtils';
// import { API_ID, AWS_BASE_URL, BASE_URL } from '../utils/api';
import axios from 'axios';
import { StoreModelProps } from '../models/StoreModelProps';
import { BASE_URL } from '@/utils/api';
import { CONSTANTS } from '@/utils/constants';


const clientStoresApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "token",
      'Content-Type': 'application/json',
  },
  params: {
    id: CONSTANTS.store_id,
    tableName: 'prof-website-store-table', 
    showFilteredItems: true

    // store_id: CONSTANTS.store_id,
    // email: "", // user?.email ?? "",
    // tableName: 'prof-website-product-table', 
    // showFilteredItems: true
  },
});

export const getStoreAttributes = async () => {
  const response = await clientStoresApi.get('/stores');

  // Get the name of attributes in the API response
  const attributeNames = Object.keys(response.data[0]);

  return attributeNames;
};







// -----------------
// GET SINGLE ITEM
// -----------------
export const getStore = async (id: any) => {
  console.log('Fetching Mankind store...');
  const response = await clientStoresApi.get(`/store?id=${id}`);
  
  const store = response.data;
  // console.log('Store:', response.data);
  // console.log('Store:', store);

  if (store === 'undefined' || !store) {
    return null;
  } else {
    return store;
  }
};




// -------------
// GET ITEMS
// -------------
export const getStores = async () => {
    const response = await clientStoresApi.get('');
    return response.data as StoreModelProps[]; 
  };
  
// -------------
// POST
// -------------
export const postStore = async (store: StoreModelProps) => {
  return await clientStoresApi.post('/store', store);
};

// -------------
// PATCH
// -------------
export const updateStore = async (store: any) => {
  return await clientStoresApi.patch(`/store?id=${store.id}`, store);
};

// -------------
// DELETE
// -------------
export const deleteStore = async ({ id }: { id: any }) => {
  console.log(id);
  return await clientStoresApi.delete(`/store?id=${id}`, id);
  // return await storesApi.delete(`/store/${id}`);
  // D_a_r_r_i_e_n H_u_n_t_l_e_y - o_w_n_e_r
};

export default clientStoresApi;
