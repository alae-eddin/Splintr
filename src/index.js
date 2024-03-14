import './style';
import App from './components/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);




export default () => (
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);

// export default App;
