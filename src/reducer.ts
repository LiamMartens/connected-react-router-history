import { LOCATION_CHANGE } from 'connected-react-router';

export const LOCATION_POP = '@@router/LOCATION_POP';

const withHistoryState = {
    history: [],
}

const attachRouterHistory = (reducer) => {
    const initialState = {
        ...withHistoryState,
        ...reducer()
    }

    const attachedReducer = (state = initialState, action) => {
        const reducerResult = reducer(state, action);
        switch(action.type) {
            case LOCATION_CHANGE:
                switch(action.payload.action) {
                    case 'POP':
                        reducerResult.history.pop();
                        break;
                    case 'PUSH':
                        reducerResult.history.push(action.payload.location);
                        break;
                    case 'REPLACE':
                        reducerResult.history.splice(reducerResult.history.length - 1, 1, action.payload.location);
                        break;
                }
                break;
            case LOCATION_POP:
                reducerResult.history.pop();
                break;
        }

        return {
            ...reducerResult,
        }
    }

    return attachedReducer;
}

export { attachRouterHistory };