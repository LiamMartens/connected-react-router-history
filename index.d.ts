declare module 'connected-react-router-history' {
    import { Reducer } from 'redux';
    import { RouterState as OriginalRouterState, LocationChangeAction } from 'connected-react-router';
    import { Location } from 'history';

    export const LOCATION_POP: '@@router/LOCATION_POP';

    export interface RouterState extends OriginalRouterState {
        history: Location[];
    }

    export function attachRouterHistory(reducer: Reducer<OriginalRouterState, LocationChangeAction>): Reducer<RouterState, LocationChangeAction>;
}