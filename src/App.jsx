import ProductGrid from './components/ProductGrid.jsx';
import SalesBot from './components/SalesBot.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      margin: 0,
      padding: 0
    }}>
      <main style={{ 
        flex: '1',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h1>Horizon Website</h1>
        <ProductGrid />
        <SalesBot />
      </main>
      <Footer />
      
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        html, body, #root {
          height: 100%;
        }
      `}</style>
    </div>
  );
}