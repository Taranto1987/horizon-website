import React from 'react';
import { produtos } from '../data/produtos.ts';

export default function ProductGrid() {
  const featuredProducts = produtos.slice(0, 6);

  const cardStyles = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    padding: '20px 0'
  };

  const titleStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2c3e50'
  };

  const priceStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#25D366',
    marginTop: '10px'
  };

  const descriptionStyles = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
    lineHeight: '1.4'
  };

  const benefitsStyles = {
    fontSize: '12px',
    color: '#888',
    marginBottom: '10px'
  };

  const handleCardHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>
        🦫 Produtos em Destaque - Loja Castor Cabo Frio
      </h2>
      <div style={gridStyles}>
        {featuredProducts.map((produto) => (
          <div
            key={produto.id}
            style={cardStyles}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <div>
              <h3 style={titleStyles}>{produto.name}</h3>
              <p style={descriptionStyles}>{produto.description}</p>
              <div style={benefitsStyles}>
                <strong>✨ Benefícios:</strong> {produto.benefits.slice(0, 2).join(' • ')}
              </div>
              <div style={benefitsStyles}>
                <strong>📏 Tamanhos:</strong> {produto.sizes.join(', ')}
              </div>
            </div>
            <div>
              <div style={priceStyles}>{produto.price}</div>
              <div style={{ fontSize: '12px', color: '#25D366', marginTop: '5px' }}>
                💬 Consulte via chat para mais detalhes
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 20px !important;
            margin-bottom: 15px !important;
          }
          
          .grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
            padding: 15px 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 18px !important;
            margin-bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}