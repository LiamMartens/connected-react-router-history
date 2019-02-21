## Connected React Router History
Adds a complete history stack to the router reducer

### Usage
Simply wrap the router reducer in the `attachRouterHistory` function.

```
import { attachRouterHistory } from 'connected-react-router-history';
import { history } from './history';
import { connectRouter } from 'connected-react-router';

const rootReducer = combineReducers({
    router: attachRouterHistory(connectRouter(history)),
});
```