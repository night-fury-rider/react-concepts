//import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import CentralContent from './components/CentralContent/CentralContent';
import Dashboard from './modules/Dashboard/Dashboard';
import ErrorBoundary from './modules/Errors/ErrorBoundary';
import UVHeader from './components/Core/UVHeader/UVHeader';

import appData from './app-data.json';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UVHeader href={appData.header.website} title={appData.header.title} links={appData.header.links} />
        <Dashboard />
      </ErrorBoundary>
    </div>
  );
}

export default App;
