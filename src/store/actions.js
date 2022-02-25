import { SET_NAME_INPUT, SET_SALE_INPUT, SET_PRICE_INPUT, SET_DESCRIPTION_INPUT,SET_QUANTILY_INPUT,SET_BARCODE_INPUT, DELETE_PORDUCT,UPDATE_PRODUCT, ADD_PRODUCT, SET_PRODUCT_BUY,ADD_PRODUCT_CART_LIST, DELETE_PRODUCT_CART_LIST, UPDATE_PRODUCT_CART_LIST   } from './constans'

export const setNameInput = payload => ({
    type: SET_NAME_INPUT,
    payload
})
export const setSaleInput = payload => ({
    type: SET_SALE_INPUT,
    payload
})
export const setQuantilyInput = payload => ({
    type: SET_QUANTILY_INPUT,
    payload
})
export const setBarcodeInput = payload => ({
    type: SET_BARCODE_INPUT,
    payload
})
export const setPriceInput = payload => ({
    type: SET_PRICE_INPUT,
    payload
})
export const setDescriptionInput = payload => ({
    type: SET_DESCRIPTION_INPUT,
    payload
})


export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload
})
export const deleteProduct = payload =>({
    type: DELETE_PORDUCT,
    payload
})
export const updateProduct = payload => ({
    type: UPDATE_PRODUCT,
    payload
})
export const setProductBuy = payload => ({
    type: SET_PRODUCT_BUY,
    payload
})
export const addProductCartList = payload => ({
    type:ADD_PRODUCT_CART_LIST,
    payload
})
export const deleteProductCartList = payload => ({
    type: DELETE_PRODUCT_CART_LIST,
    payload
})
export const updateProductCartList = payload => ({
    type: UPDATE_PRODUCT_CART_LIST,
    payload
})