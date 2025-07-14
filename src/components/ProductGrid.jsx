import { castorProducts } from './BiotipoCalculator/calculatorData.js';

export default function ProductGrid() {
  const handleWhatsAppClick = (productName, size) => {
    const message = `Quero comprar o ${productName}, tamanho ${size.label} (${size.dimension}).`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5522992410112?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '20px', 
      padding: '20px' 
    }}>
      {castorProducts.map((product, index) => (
        <div key={index} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{product.name}</h3>
          <p style={{ margin: '0 0 15px 0', color: '#666' }}>{product.price}</p>
          
          <div style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#555' }}>Tamanhos disponíveis:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.sizes.map((size, sizeIndex) => (
                <button
                  key={sizeIndex}
                  onClick={() => handleWhatsAppClick(product.name, size)}
                  style={{
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#20BA5A'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
                >
                  <span>{size.label} ({size.dimension})</span>
                  <span>📱 WhatsApp</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}