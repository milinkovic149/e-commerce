import { defineStore } from "pinia";
import { groupBy } from "lodash"
export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: [],
            isCartOpen: false,
            isCheckout: false,
        }
    },
    getters: {
      count: (state) => state.items.length,
      isEmpty: (state) => state.count === 0,
      grouped: (state) => {
          const grouped = groupBy(state.items, (item) => item.name);
          const sorted = Object.keys(grouped).sort();
          let inOrder = {}
          sorted.forEach((key) => (inOrder[key] = grouped[key]))
          return inOrder
      },
      groupCount: (state) => (name) => state.grouped[name].length,
      total: (state) => state.items.reduce((p, c) => p + c.price, 0),
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.items.push(item);
            }
        },
        openCart() {
            this.isCartOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeCart() {
            this.isCartOpen = false;
            document.body.style.overflow = '';
        },
        clearItem(itemName) {
            this.items = this.items.filter((item) => item.name !== itemName);
        },
        clearItems () {
            this.items = [];
        },
        setItemCount(item, count) {
            this.clearItem(item.name);
            this.addItems(count, item);
        },
        checkout() {
            this.isCheckout = true;
            this.isCartOpen = false;
        },
        closeCheckout() {
            this.isCheckout = false;
            this.items = [];
        }
    }
});