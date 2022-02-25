import { useReducer } from 'react'
import { StoreContext, CartListContext} from "./Context";
import Reducer, {initState,initState2} from './Reducer'
function Provider ({ children }) {
    const [state, dispatch] = useReducer(Reducer, initState)
    const [state2, dispatch2] = useReducer(Reducer, initState2)
    return (
        <StoreContext.Provider value={[state, dispatch]} >
            <CartListContext.Provider value= {[state2, dispatch2]}>
                {children}

            </CartListContext.Provider>
            
        </StoreContext.Provider>
    )
}

export default Provider