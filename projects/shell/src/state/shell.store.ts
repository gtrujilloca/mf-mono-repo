import { Product } from "@/checkout/src/domain"
import { computed, signal } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"

export interface ShellState {
  cartProducts: Map<number, Product>;
  // cartQuantity: number;
  isLoading: boolean;
}

const initialState: ShellState = {
  cartProducts: new Map<number, Product>(),
  // cartQuantity: 0,
  isLoading: false
}

function updateCartQuantity(products: Map<number, Product>) {
  let count = 0;
  products.forEach((product) => count += product.quantity);
  return count;
}

function saveInLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export const shellStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(state => ({
    cartQuantity: computed(() => updateCartQuantity(state.cartProducts()))
  })),
  withMethods( (store) => ({
    addProduct(product: Omit<Product, 'quantity'>) {
      const tempProduct: Product = store.cartProducts().get(product.id) || {...product, quantity: 0};
      tempProduct.quantity += 1;
      store.cartProducts().set(product.id, tempProduct);
      patchState(store, {cartProducts: new Map(store.cartProducts())})
    },

    removeProduct(productId: number) {
      store.cartProducts().delete(productId);
      patchState(store, {cartProducts: new Map(store.cartProducts())})
    }
  }),
)
);
