export { default as StoreProvider } from './Provider';
export { StoreContext } from './Context';
export * from './hooks';

export * as actions from './actions'
export const priceFormat = ( price, currency ) =>{
    return price.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
    }) + currency  ;
}