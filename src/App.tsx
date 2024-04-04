import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Home from './views/Home';
import Layout from './layout/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Summary of the task

// Meeting the task requirements:
// 1. Table with pagination. Presenting tags (name and count fields) fetched from StackExchange API.
// 2. Page size (Tags per page) customizable by an input.
// 3. Sorting using reactive table head component.
// 4. loading state as table skeleton and error state using the custom component.
// 5. Used Material UI as a components library.
// 6. For state management I have used the Zustand library (very simple and efficient, perfect for small projects). For data fetching I have used the Tanstack library (popular and simple to use)
// 7. Implemented storybook and stories for the components.

// Additional notes:
// - I have decided to reflect the pagination page, page size and sort parameters in the search params of the app url . Thanks to this approach it is possible to share specific data by sending url. I consider it as highly desired behavior in this kind of apps.
// - I have decided to implement a debounce mechanism for changing pages and page size to avoid unnecessary requests.

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
