export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5522992410112', '_blank');
  };

  const footerStyles = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px 15px',
    marginTop: 'auto',
    fontSize: '14px',
    lineHeight: '1.6',
    fontFamily: 'inherit'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const itemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '8px',
    wordBreak: 'break-word',
    hyphens: 'auto'
  };

  const whatsappStyles = {
    ...itemStyles,
    cursor: 'pointer',
    transition: 'color 0.3s ease, transform 0.2s ease',
    textDecoration: 'none'
  };

  return (
    <>
      <footer style={footerStyles}>
        <div style={containerStyles}>
          <div style={itemStyles}>
            <span>📍 Loja Castor Cabo Frio</span>
          </div>
          
          <div 
            style={whatsappStyles}
            onClick={handleWhatsAppClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#25D366';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ecf0f1';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span>📞 WhatsApp: (22) 99241-0112</span>
          </div>
          
          <div style={itemStyles}>
            <span>📌 Endereço: Av. Júlia Kubitschek, Nº 64 – Jardim Flamboyant, Cabo Frio - RJ</span>
          </div>
          
          <div style={itemStyles}>
            <span>🕐 Atendimento: Seg a Sáb, 9h às 19h</span>
          </div>
          
          <div style={itemStyles}>
            <span>💬 Instagram: @castorcabofrio</span>
          </div>
          
          <div style={itemStyles}>
            <span>🔧 Desenvolvido por Thalles Taranto – Taranto Ads Pro</span>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            font-size: 13px !important;
            padding: 15px 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          footer {
            font-size: 12px !important;
            padding: 12px 10px !important;
            line-height: 1.5 !important;
          }
        }
        
        @media (max-width: 320px) {
          footer {
            font-size: 11px !important;
            padding: 10px 8px !important;
          }
        }
      `}</style>
    </>
  );
}