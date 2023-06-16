import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

type Props = {
    children: ReactNode
}

type Payload = {
    route: string,
    movieId: string
}

type Action = {
    type: string,
    payload: Payload
}

type State = Array<Payload>;

type ContextState = {
    state: State,
    dispatch: Dispatch<any>
}

const Initial_Val : State = [];

const Initial_Context = {
    state: Initial_Val,
    dispatch: () => null
}

export const FavContext = createContext<ContextState>(Initial_Context);

const FavProvider = ( {children} : Props ) => {
    const favReducer = ( state: State, action : Action ) => {
        
        const { type, payload } = action;
        
        switch ( type ) {
            case 'ADD':
                return [ ...state, payload];
            case 'REMOVE':
                return state.filter( item => {
                    if ( item.movieId === payload.movieId && item.route === payload.route ) {
                        return false;
                    }
                    return true;
                });
            default:
                return state;
        }
    };

    const [ state, dispatch ] = useReducer( favReducer, [] );

    return (
        <>
            <FavContext.Provider value={{state, dispatch}}>
                {children}
            </FavContext.Provider>
        </>
    );
}

export default FavProvider;