import axios, { AxiosError } from 'axios';
// import { BASE_URL } from '../utils/api';
// import { CONSTANTS } from '../utils/constants';
import { CollectionModelProps } from '../models/CollectionModelProps';
import { TOKEN_KEY } from '../contexts/AuthContext';
import { UserProps } from '../models/UserProps';
import { BASE_URL } from '@/utils/api';
import { CONSTANTS } from '@/utils/constants';
// import { BASE_URL } from '@/utils/api';
// import { CONSTANTS } from '@/utils/constants';
// import { CollectionModelProps } from '../models/CollectionModelProps';


  const collectionsApi = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //    // Authorization: TOKEN_KEY,
    //     'Content-Type': 'application/json',
    // },
    params: {
      store_id: CONSTANTS.store_id,
      // email: "", // user?.email ?? "",
      tableName: 'prof-website-collection-table', 
      showFilteredItems: true
    },
  });


// GET
  export const getCollections = async (storeID: string, email: string) => {
    return await collectionsApi.get(`/collections`, {
      params: { 
        store_id: storeID, // CONSTANTS.store_id,// storeID,
        email: email,
      },
      headers: { 
        Authorization: TOKEN_KEY ,
        'Content-Type': 'application/json',

      
      },

    });
   
  };
  

export const getCollection = async (id: any) => {
  return await collectionsApi.get(`/collection?id=${id}`);
};



export const postCollection = async (collection: CollectionModelProps, storeID: string, email: string, token: string) => {
  console.log(`email:::::::: ${email}`)
  
  return await collectionsApi.post(`/collection`, collection, {
    params: { 
      store_id: storeID, // The store ID as a query parameter
      email: email,      // The email as a query parameter
    },
    headers: { 
      Authorization: token ,
      'Content-Type': 'application/json',

    
    },
});
};



export const updateCollection = async (collection: CollectionModelProps) => {
  return await collectionsApi.patch(`/collection?id=${collection.id}`, collection);
};

export const deleteCollection = async ({ id }: { id: any }) => {
  console.log(id);
  return await collectionsApi.delete(`/collection?id=${id}`, id);
};


export default collectionsApi;




















// import axios, { AxiosError } from 'axios';
// // import { BASE_URL } from '../utils/api';
// // import { CONSTANTS } from '../utils/constants';
// import { CollectionModelProps } from '../models/CollectionModelProps';
// import { BASE_URL } from '@/utils/api';
// // import { CollectionModelProps } from '../models/CollectionModelProps';


//   const collectionsApi = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         Authorization: "token",
//         'Content-Type': 'application/json',
//     },
//     params: {
//       tableName: 'prof-website-collection-table', 
//       showFilteredItems: true
//     },
//   });



//   export const getClientCollections = async (storeID: string, email: string) => {
//     return await collectionsApi.get(`/collections`, {
//       params: {
//         store_id: storeID,
//         email: email // "", // user?.email ?? "",
    
//       },
//     });
//   };
    
//   // export const getClientCollections = async (storeID: string, email: string) => {
//   //   return await collectionsApi.get(`/collections`, {
//   //     params: {
//   //       store_id: storeID, // CONSTANTS.store_id,// storeID,
//   //       email: email,
//   //     },
  
//   //   });
//   // };
  


// export const getCollection = async (id: any) => {
//   return await collectionsApi.get(`/collection?id=${id}`);
// };




// export const postCollection = async (collection: CollectionModelProps) => {
//   return await collectionsApi.post(`/collection`, collection);
// };


// export const postClientCollection = async (collection: CollectionModelProps) => {
//   return await collectionsApi.post(`/collection`, collection, {
//     params: {
//       store_id: collection.store_id,
//       // email: "", // user?.email ?? "",
//     }
//   });

// };




// export const updateCollection = async (collection: CollectionModelProps) => {
//   return await collectionsApi.patch(`/collection?id=${collection.id}`, collection);
// };

// export const deleteCollection = async ({ id }: { id: any }) => {
//   console.log(id);
//   return await collectionsApi.delete(`/collection?id=${id}`, id);
// };


// export default collectionsApi;
