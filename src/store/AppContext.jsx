import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const Context = createContext(null)

const injectContext = PassComponent => {

    const StoreWrapper = props => {

        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore), 
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            state.actions.checkCurrentUser();

            if(state.store.currentUser !== null){
                state.actions.getUsers();
                state.actions.getMessages();
            }

        }, [])

        useEffect(() => {
            if(state.store.currentUser !== null){
                state.actions.getUsers();
                state.actions.getMessages();
            }
        }, [state.store.currentUser]) 
        
        return (
            <Context.Provider value={state}>
                <PassComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;

}

export default injectContext;