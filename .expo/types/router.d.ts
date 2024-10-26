/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/login` | `/(auth)/register` | `/(auth)/welcome` | `/(aux)` | `/(aux)/cookies-policy` | `/(aux)/disclaimer` | `/(aux)/privacy-policy` | `/(aux)/terms-of-use` | `/(component-library)` | `/(component-library)/component-library-dashboard` | `/(component-library)/lib-buttons` | `/(component-library)/lib-buttons/button-controller` | `/(component-library)/lib-orders` | `/(component-library)/lib-orders/controller` | `/(component-library)/lib-products` | `/(component-library)/lib-products/controller` | `/(component-library)/lib-views` | `/(component-library)/lib-views/view-controller` | `/(component-library)/testingImageNavSlider` | `/(drawer)` | `/(drawer)/(component-library)` | `/(drawer)/(component-library)/component-library-dashboard` | `/(drawer)/(component-library)/lib-buttons` | `/(drawer)/(component-library)/lib-buttons/button-controller` | `/(drawer)/(component-library)/lib-orders` | `/(drawer)/(component-library)/lib-orders/controller` | `/(drawer)/(component-library)/lib-products` | `/(drawer)/(component-library)/lib-products/controller` | `/(drawer)/(component-library)/lib-views` | `/(drawer)/(component-library)/lib-views/view-controller` | `/(drawer)/(component-library)/testingImageNavSlider` | `/(drawer)/component-library-dashboard` | `/(drawer)/home` | `/(drawer)/lib-buttons` | `/(drawer)/lib-buttons/button-controller` | `/(drawer)/lib-orders` | `/(drawer)/lib-orders/controller` | `/(drawer)/lib-products` | `/(drawer)/lib-products/controller` | `/(drawer)/lib-views` | `/(drawer)/lib-views/view-controller` | `/(drawer)/store` | `/(drawer)/testingImageNavSlider` | `/(drawer)/wallet` | `/(home)` | `/(home)/` | `/(home)/(component-library)` | `/(home)/(component-library)/component-library-dashboard` | `/(home)/(component-library)/lib-buttons` | `/(home)/(component-library)/lib-buttons/button-controller` | `/(home)/(component-library)/lib-orders` | `/(home)/(component-library)/lib-orders/controller` | `/(home)/(component-library)/lib-products` | `/(home)/(component-library)/lib-products/controller` | `/(home)/(component-library)/lib-views` | `/(home)/(component-library)/lib-views/view-controller` | `/(home)/(component-library)/testingImageNavSlider` | `/(home)/(drawer)` | `/(home)/(drawer)/(component-library)` | `/(home)/(drawer)/(component-library)/component-library-dashboard` | `/(home)/(drawer)/(component-library)/lib-buttons` | `/(home)/(drawer)/(component-library)/lib-buttons/button-controller` | `/(home)/(drawer)/(component-library)/lib-orders` | `/(home)/(drawer)/(component-library)/lib-orders/controller` | `/(home)/(drawer)/(component-library)/lib-products` | `/(home)/(drawer)/(component-library)/lib-products/controller` | `/(home)/(drawer)/(component-library)/lib-views` | `/(home)/(drawer)/(component-library)/lib-views/view-controller` | `/(home)/(drawer)/(component-library)/testingImageNavSlider` | `/(home)/(drawer)/component-library-dashboard` | `/(home)/(drawer)/home` | `/(home)/(drawer)/lib-buttons` | `/(home)/(drawer)/lib-buttons/button-controller` | `/(home)/(drawer)/lib-orders` | `/(home)/(drawer)/lib-orders/controller` | `/(home)/(drawer)/lib-products` | `/(home)/(drawer)/lib-products/controller` | `/(home)/(drawer)/lib-views` | `/(home)/(drawer)/lib-views/view-controller` | `/(home)/(drawer)/store` | `/(home)/(drawer)/testingImageNavSlider` | `/(home)/(drawer)/wallet` | `/(home)/component-library-dashboard` | `/(home)/home` | `/(home)/lib-buttons` | `/(home)/lib-buttons/button-controller` | `/(home)/lib-orders` | `/(home)/lib-orders/controller` | `/(home)/lib-products` | `/(home)/lib-products/controller` | `/(home)/lib-views` | `/(home)/lib-views/view-controller` | `/(home)/products` | `/(home)/products/` | `/(home)/search` | `/(home)/store` | `/(home)/testingImageNavSlider` | `/(home)/wallet` | `/(settings)` | `/(settings)/appearance` | `/(settings)/faq` | `/(settings)/favorites` | `/(settings)/profile` | `/(settings)/report-an-issue` | `/(settings)/settings` | `/(tabs)` | `/(tabs)/` | `/(tabs)/(component-library)` | `/(tabs)/(component-library)/component-library-dashboard` | `/(tabs)/(component-library)/lib-buttons` | `/(tabs)/(component-library)/lib-buttons/button-controller` | `/(tabs)/(component-library)/lib-orders` | `/(tabs)/(component-library)/lib-orders/controller` | `/(tabs)/(component-library)/lib-products` | `/(tabs)/(component-library)/lib-products/controller` | `/(tabs)/(component-library)/lib-views` | `/(tabs)/(component-library)/lib-views/view-controller` | `/(tabs)/(component-library)/testingImageNavSlider` | `/(tabs)/(drawer)` | `/(tabs)/(drawer)/(component-library)` | `/(tabs)/(drawer)/(component-library)/component-library-dashboard` | `/(tabs)/(drawer)/(component-library)/lib-buttons` | `/(tabs)/(drawer)/(component-library)/lib-buttons/button-controller` | `/(tabs)/(drawer)/(component-library)/lib-orders` | `/(tabs)/(drawer)/(component-library)/lib-orders/controller` | `/(tabs)/(drawer)/(component-library)/lib-products` | `/(tabs)/(drawer)/(component-library)/lib-products/controller` | `/(tabs)/(drawer)/(component-library)/lib-views` | `/(tabs)/(drawer)/(component-library)/lib-views/view-controller` | `/(tabs)/(drawer)/(component-library)/testingImageNavSlider` | `/(tabs)/(drawer)/component-library-dashboard` | `/(tabs)/(drawer)/home` | `/(tabs)/(drawer)/lib-buttons` | `/(tabs)/(drawer)/lib-buttons/button-controller` | `/(tabs)/(drawer)/lib-orders` | `/(tabs)/(drawer)/lib-orders/controller` | `/(tabs)/(drawer)/lib-products` | `/(tabs)/(drawer)/lib-products/controller` | `/(tabs)/(drawer)/lib-views` | `/(tabs)/(drawer)/lib-views/view-controller` | `/(tabs)/(drawer)/store` | `/(tabs)/(drawer)/testingImageNavSlider` | `/(tabs)/(drawer)/wallet` | `/(tabs)/(home)` | `/(tabs)/(home)/` | `/(tabs)/(home)/(component-library)` | `/(tabs)/(home)/(component-library)/component-library-dashboard` | `/(tabs)/(home)/(component-library)/lib-buttons` | `/(tabs)/(home)/(component-library)/lib-buttons/button-controller` | `/(tabs)/(home)/(component-library)/lib-orders` | `/(tabs)/(home)/(component-library)/lib-orders/controller` | `/(tabs)/(home)/(component-library)/lib-products` | `/(tabs)/(home)/(component-library)/lib-products/controller` | `/(tabs)/(home)/(component-library)/lib-views` | `/(tabs)/(home)/(component-library)/lib-views/view-controller` | `/(tabs)/(home)/(component-library)/testingImageNavSlider` | `/(tabs)/(home)/(drawer)` | `/(tabs)/(home)/(drawer)/(component-library)` | `/(tabs)/(home)/(drawer)/(component-library)/component-library-dashboard` | `/(tabs)/(home)/(drawer)/(component-library)/lib-buttons` | `/(tabs)/(home)/(drawer)/(component-library)/lib-buttons/button-controller` | `/(tabs)/(home)/(drawer)/(component-library)/lib-orders` | `/(tabs)/(home)/(drawer)/(component-library)/lib-orders/controller` | `/(tabs)/(home)/(drawer)/(component-library)/lib-products` | `/(tabs)/(home)/(drawer)/(component-library)/lib-products/controller` | `/(tabs)/(home)/(drawer)/(component-library)/lib-views` | `/(tabs)/(home)/(drawer)/(component-library)/lib-views/view-controller` | `/(tabs)/(home)/(drawer)/(component-library)/testingImageNavSlider` | `/(tabs)/(home)/(drawer)/component-library-dashboard` | `/(tabs)/(home)/(drawer)/home` | `/(tabs)/(home)/(drawer)/lib-buttons` | `/(tabs)/(home)/(drawer)/lib-buttons/button-controller` | `/(tabs)/(home)/(drawer)/lib-orders` | `/(tabs)/(home)/(drawer)/lib-orders/controller` | `/(tabs)/(home)/(drawer)/lib-products` | `/(tabs)/(home)/(drawer)/lib-products/controller` | `/(tabs)/(home)/(drawer)/lib-views` | `/(tabs)/(home)/(drawer)/lib-views/view-controller` | `/(tabs)/(home)/(drawer)/store` | `/(tabs)/(home)/(drawer)/testingImageNavSlider` | `/(tabs)/(home)/(drawer)/wallet` | `/(tabs)/(home)/component-library-dashboard` | `/(tabs)/(home)/home` | `/(tabs)/(home)/lib-buttons` | `/(tabs)/(home)/lib-buttons/button-controller` | `/(tabs)/(home)/lib-orders` | `/(tabs)/(home)/lib-orders/controller` | `/(tabs)/(home)/lib-products` | `/(tabs)/(home)/lib-products/controller` | `/(tabs)/(home)/lib-views` | `/(tabs)/(home)/lib-views/view-controller` | `/(tabs)/(home)/products` | `/(tabs)/(home)/products/` | `/(tabs)/(home)/search` | `/(tabs)/(home)/store` | `/(tabs)/(home)/testingImageNavSlider` | `/(tabs)/(home)/wallet` | `/(tabs)/(settings)` | `/(tabs)/(settings)/appearance` | `/(tabs)/(settings)/faq` | `/(tabs)/(settings)/favorites` | `/(tabs)/(settings)/profile` | `/(tabs)/(settings)/report-an-issue` | `/(tabs)/(settings)/settings` | `/(tabs)/appearance` | `/(tabs)/cart` | `/(tabs)/collections` | `/(tabs)/collections/` | `/(tabs)/collections/[collectionId]/products/` | `/(tabs)/component-library-dashboard` | `/(tabs)/faq` | `/(tabs)/favorites` | `/(tabs)/home` | `/(tabs)/lib-buttons` | `/(tabs)/lib-buttons/button-controller` | `/(tabs)/lib-orders` | `/(tabs)/lib-orders/controller` | `/(tabs)/lib-products` | `/(tabs)/lib-products/controller` | `/(tabs)/lib-views` | `/(tabs)/lib-views/view-controller` | `/(tabs)/products` | `/(tabs)/products/` | `/(tabs)/profile` | `/(tabs)/report-an-issue` | `/(tabs)/search` | `/(tabs)/settings` | `/(tabs)/store` | `/(tabs)/testingImageNavSlider` | `/(tabs)/wallet` | `/_sitemap` | `/appearance` | `/cart` | `/collections` | `/collections/` | `/collections/[collectionId]/products/` | `/component-library-dashboard` | `/cookies-policy` | `/disclaimer` | `/faq` | `/favorites` | `/home` | `/lib-buttons` | `/lib-buttons/button-controller` | `/lib-orders` | `/lib-orders/controller` | `/lib-products` | `/lib-products/controller` | `/lib-views` | `/lib-views/view-controller` | `/login` | `/modal` | `/privacy-policy` | `/products` | `/products/` | `/profile` | `/register` | `/report-an-issue` | `/search` | `/settings` | `/store` | `/terms-of-use` | `/testingImageNavSlider` | `/wallet` | `/welcome`;
      DynamicRoutes: `/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(drawer)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(drawer)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(drawer)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(drawer)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(drawer)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(drawer)/lib-orders/${Router.SingleRoutePart<T>}` | `/(drawer)/lib-products/${Router.SingleRoutePart<T>}` | `/(drawer)/lib-views/${Router.SingleRoutePart<T>}` | `/(home)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(home)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(home)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(home)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/lib-orders/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/lib-products/${Router.SingleRoutePart<T>}` | `/(home)/(drawer)/lib-views/${Router.SingleRoutePart<T>}` | `/(home)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(home)/lib-orders/${Router.SingleRoutePart<T>}` | `/(home)/lib-products/${Router.SingleRoutePart<T>}` | `/(home)/lib-views/${Router.SingleRoutePart<T>}` | `/(home)/products/${Router.SingleRoutePart<T>}` | `/(tabs)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(drawer)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/(component-library)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/(component-library)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/(component-library)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/(component-library)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/(drawer)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/(home)/products/${Router.SingleRoutePart<T>}` | `/(tabs)/collections/${Router.SingleRoutePart<T>}/products` | `/(tabs)/collections/${Router.SingleRoutePart<T>}/products/${Router.SingleRoutePart<T>}` | `/(tabs)/lib-buttons/${Router.SingleRoutePart<T>}` | `/(tabs)/lib-orders/${Router.SingleRoutePart<T>}` | `/(tabs)/lib-products/${Router.SingleRoutePart<T>}` | `/(tabs)/lib-views/${Router.SingleRoutePart<T>}` | `/(tabs)/products/${Router.SingleRoutePart<T>}` | `/collections/${Router.SingleRoutePart<T>}/products` | `/collections/${Router.SingleRoutePart<T>}/products/${Router.SingleRoutePart<T>}` | `/lib-buttons/${Router.SingleRoutePart<T>}` | `/lib-orders/${Router.SingleRoutePart<T>}` | `/lib-products/${Router.SingleRoutePart<T>}` | `/lib-views/${Router.SingleRoutePart<T>}` | `/products/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(component-library)/lib-buttons/[roundedButton]` | `/(component-library)/lib-orders/[id]` | `/(component-library)/lib-products/[id]` | `/(component-library)/lib-views/[roundedButton]` | `/(drawer)/(component-library)/lib-buttons/[roundedButton]` | `/(drawer)/(component-library)/lib-orders/[id]` | `/(drawer)/(component-library)/lib-products/[id]` | `/(drawer)/(component-library)/lib-views/[roundedButton]` | `/(drawer)/lib-buttons/[roundedButton]` | `/(drawer)/lib-orders/[id]` | `/(drawer)/lib-products/[id]` | `/(drawer)/lib-views/[roundedButton]` | `/(home)/(component-library)/lib-buttons/[roundedButton]` | `/(home)/(component-library)/lib-orders/[id]` | `/(home)/(component-library)/lib-products/[id]` | `/(home)/(component-library)/lib-views/[roundedButton]` | `/(home)/(drawer)/(component-library)/lib-buttons/[roundedButton]` | `/(home)/(drawer)/(component-library)/lib-orders/[id]` | `/(home)/(drawer)/(component-library)/lib-products/[id]` | `/(home)/(drawer)/(component-library)/lib-views/[roundedButton]` | `/(home)/(drawer)/lib-buttons/[roundedButton]` | `/(home)/(drawer)/lib-orders/[id]` | `/(home)/(drawer)/lib-products/[id]` | `/(home)/(drawer)/lib-views/[roundedButton]` | `/(home)/lib-buttons/[roundedButton]` | `/(home)/lib-orders/[id]` | `/(home)/lib-products/[id]` | `/(home)/lib-views/[roundedButton]` | `/(home)/products/[id]` | `/(tabs)/(component-library)/lib-buttons/[roundedButton]` | `/(tabs)/(component-library)/lib-orders/[id]` | `/(tabs)/(component-library)/lib-products/[id]` | `/(tabs)/(component-library)/lib-views/[roundedButton]` | `/(tabs)/(drawer)/(component-library)/lib-buttons/[roundedButton]` | `/(tabs)/(drawer)/(component-library)/lib-orders/[id]` | `/(tabs)/(drawer)/(component-library)/lib-products/[id]` | `/(tabs)/(drawer)/(component-library)/lib-views/[roundedButton]` | `/(tabs)/(drawer)/lib-buttons/[roundedButton]` | `/(tabs)/(drawer)/lib-orders/[id]` | `/(tabs)/(drawer)/lib-products/[id]` | `/(tabs)/(drawer)/lib-views/[roundedButton]` | `/(tabs)/(home)/(component-library)/lib-buttons/[roundedButton]` | `/(tabs)/(home)/(component-library)/lib-orders/[id]` | `/(tabs)/(home)/(component-library)/lib-products/[id]` | `/(tabs)/(home)/(component-library)/lib-views/[roundedButton]` | `/(tabs)/(home)/(drawer)/(component-library)/lib-buttons/[roundedButton]` | `/(tabs)/(home)/(drawer)/(component-library)/lib-orders/[id]` | `/(tabs)/(home)/(drawer)/(component-library)/lib-products/[id]` | `/(tabs)/(home)/(drawer)/(component-library)/lib-views/[roundedButton]` | `/(tabs)/(home)/(drawer)/lib-buttons/[roundedButton]` | `/(tabs)/(home)/(drawer)/lib-orders/[id]` | `/(tabs)/(home)/(drawer)/lib-products/[id]` | `/(tabs)/(home)/(drawer)/lib-views/[roundedButton]` | `/(tabs)/(home)/lib-buttons/[roundedButton]` | `/(tabs)/(home)/lib-orders/[id]` | `/(tabs)/(home)/lib-products/[id]` | `/(tabs)/(home)/lib-views/[roundedButton]` | `/(tabs)/(home)/products/[id]` | `/(tabs)/collections/[collectionId]/products` | `/(tabs)/collections/[collectionId]/products/[productId]` | `/(tabs)/lib-buttons/[roundedButton]` | `/(tabs)/lib-orders/[id]` | `/(tabs)/lib-products/[id]` | `/(tabs)/lib-views/[roundedButton]` | `/(tabs)/products/[id]` | `/collections/[collectionId]/products` | `/collections/[collectionId]/products/[productId]` | `/lib-buttons/[roundedButton]` | `/lib-orders/[id]` | `/lib-products/[id]` | `/lib-views/[roundedButton]` | `/products/[id]`;
    }
  }
}
