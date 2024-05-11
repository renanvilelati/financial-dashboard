import { AppRouter } from './router';
import Providers from './utils/Providers';

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
