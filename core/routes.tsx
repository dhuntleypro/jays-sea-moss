import register from "@/app/(auth)/register";
import Welcome from "@/app/(auth)/welcome";
import appearance from "@/app/(tabs)/(settings)/appearance";
import { HomeDesignTwo, AppearanceSelection, LoginComponentTwo, ProductDetailsPageVThree, ProductSearchScreen, RegisterComponentTwo, WelcomePageTwo, CollectionPageVTwo, CollectionProductSearchScreen, CartPageVOne, CookiesPage, FAQPage, ProfilePage, FavoritesPageVOne, ProductDetailsPageVThreeProps, ProductGridCardVOne, ProductHScrollCardVOne, ProductCardProps} from "@dhuntleypro/afm-library";
import { FunctionComponent } from "react";


// Define the interface for pages
interface PagesInterface {
    // (auth)
    login: FunctionComponent;
    register: FunctionComponent;
    welcome: FunctionComponent;
  
    // (aux)
    cookie_policy: FunctionComponent;
  
    // (tabs) - home
    homePage: FunctionComponent
    products: FunctionComponent
    productDetailsPage: React.FC<ProductDetailsPageVThreeProps>
  
    // (tabs) - collections
    collections: FunctionComponent;
    collectionProducts: FunctionComponent;
  
    // (tabs) - cart
    cart: FunctionComponent;
  
    // (tabs) - Settings
    appearance: FunctionComponent;
    faq: FunctionComponent;
    profile: FunctionComponent;
    favorites: FunctionComponent;

    productCardForGrid:  React.FC<ProductCardProps>;
    productCardForHScroll:  React.FC<ProductCardProps>;

  }


const Pages: PagesInterface = {
    // (auth)
    login: LoginComponentTwo,
    register: RegisterComponentTwo,
    welcome: WelcomePageTwo,


    // (aux)
    cookie_policy: CookiesPage,

   

    
    // (tabs) - home
    homePage: HomeDesignTwo,
    products : ProductSearchScreen,
    // productDetailsPage: ProductDetailsPageVThree<ProductDetailsPageVThreeProps>, // Not valid
    productDetailsPage: ProductDetailsPageVThree, // Reference the component, not the JSX

    // (tabs) - collections
    collections: CollectionPageVTwo,
    collectionProducts: CollectionProductSearchScreen,


    // (tabs) - cart
    cart: CartPageVOne,


    // (tabs) - Settings
    appearance: AppearanceSelection,
    faq: FAQPage,
    profile: ProfilePage,
    favorites: FavoritesPageVOne ,

    // Grid card
    productCardForGrid: ProductGridCardVOne,

    // Horizontal card
    productCardForHScroll: ProductHScrollCardVOne



    
}


export default Pages;