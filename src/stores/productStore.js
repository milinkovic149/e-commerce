import { defineStore } from 'pinia'
import {products} from "@/data/products.js"

export const useProductStore = defineStore("ProductStore",{
    state: () => {
        return {
            products,
        }
    }
})