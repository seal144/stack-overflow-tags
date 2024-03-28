import ThemeProvider from './theme/ThemeProvider';
import Home from './views/Home';
import Layout from './layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
