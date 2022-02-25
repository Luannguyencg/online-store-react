import { SET_NAME_INPUT, SET_SALE_INPUT, SET_PRICE_INPUT, SET_DESCRIPTION_INPUT, SET_QUANTILY_INPUT,SET_BARCODE_INPUT, DELETE_PORDUCT,UPDATE_PRODUCT, ADD_PRODUCT,ADD_PRODUCT_CART_LIST,SET_PRODUCT_BUY, DELETE_PRODUCT_CART_LIST, UPDATE_PRODUCT_CART_LIST  } from './constans'
const storageProducts = JSON.parse(localStorage.getItem('products'))
const initState = {
    products: [...storageProducts] || [],
    
    nameInput:  '',
    saleInput:  '',
    quantilyInput:  '',
    barcodeInput:  '',
    priceInput:  '',
    descriptionInput:  '',
}

const initState2 ={
    productBuy: '',
    productCartList: []
}



function Reducer (state, action) {
    let newState
    let newState2 
    switch(action.type){
        case SET_NAME_INPUT:
            return {
                ...state,
                nameInput: action.payload
            }
        case SET_SALE_INPUT:
            return{
                ...state,
                saleInput: action.payload
            }    
        case SET_PRICE_INPUT:
            return{
                ...state,
                priceInput: action.payload
            }    
        case SET_DESCRIPTION_INPUT:
            return{
                ...state,
                descriptionInput: action.payload
            }
        case SET_QUANTILY_INPUT:
            return {
                ...state,
                quantilyInput: action.payload
            }       
        case SET_BARCODE_INPUT:
            return {
                ...state,
                barcodeInput: action.payload
            }       
        case ADD_PRODUCT :

            newState={
                ...state,
                products: [...state.products, action.payload]
            }
            break;
        case DELETE_PORDUCT:
            let newProducts = [...state.products]
            newProducts.splice(action.payload, 1)

            newState={
                ...state,
                products: newProducts
            }
            break;
        case UPDATE_PRODUCT:
            let newUpProducts = [...state.products]  
            newState = {
                ...state,
                products: newUpProducts.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                          ...item,  
                          image: action.payload.image,
                          name: action.payload.name,
                          sale: action.payload.sale,
                          price: action.payload.price,
                          description: action.payload.description,
                          quantily: action.payload.quantily,
                          barcode: action.payload.barcode
                        };
                      } else {
                        return item;
                    }
                })
            }
            break;  
        case SET_PRODUCT_BUY:
            return{
                ...state,
                productBuy: action.payload
            }
        case ADD_PRODUCT_CART_LIST:
            
            newState2= {
                ...state,
                productCartList:[...state.productCartList, action.payload]
            } 
            return newState2 
        case DELETE_PRODUCT_CART_LIST:
            let newProductCartList = [...state.productCartList]  
            newProductCartList.splice(action.payload, 1)
            newState2 = {
                ...state,
                productCartList: newProductCartList
            }  
            return newState2 
            
        case UPDATE_PRODUCT_CART_LIST:
            let newUpProductCartList = [...state.productCartList] 
            newState2 = {
                ...state,
                productCartList: newUpProductCartList.map((item)=>{
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            qtyProduct: action.payload.qtyProduct
                        }
                    }
                    else{
                        return item;
                    }
                })
            }
            return newState2  
        default:
            throw new Error(`Invalid action`)    
    }
    const newProducts = newState.products
    const jsonProducts = JSON.stringify(newProducts)
    localStorage.setItem('products', jsonProducts)
    return newState
}
export {initState, initState2}
export default Reducer