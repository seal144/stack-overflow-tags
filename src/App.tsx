import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Home from './views/Home';
import Layout from './layout/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Layout>
            <Home />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
