import { useContext } from 'react';
import {StoreContext, CartListContext } from './Context'

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext);
    return [state, dispatch]
}
export const useStore2 = () =>{
    const [state2, dispatch2] = useContext(CartListContext)
    return [state2, dispatch2]
}
