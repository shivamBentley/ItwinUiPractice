import { Provider } from 'react-redux';
import './App.css';
import Invoice from './components/Invoice';
import { store } from './state/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Invoice />
      </Provider>
    </div>
  );
}

export default App;
