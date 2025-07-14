export default function Castorzinho() {
  const mascotStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '80px',
    height: '80px',
    backgroundColor: '#8B4513',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    border: '3px solid #654321'
  };

  const handleClick = () => {
    window.open('https://wa.me/5522992410112', '_blank');
  };

  return (
    <>
      <div 
        style={mascotStyles}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        title="Fale conosco no WhatsApp!"
      >
        🦫
      </div>
      
      <style jsx>{`
        /* Ensure mascot is always visible on all breakpoints */
        @media (max-width: 768px) {
          div {
            width: 70px !important;
            height: 70px !important;
            font-size: 35px !important;
            bottom: 15px !important;
            right: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          div {
            width: 60px !important;
            height: 60px !important;
            font-size: 30px !important;
            bottom: 10px !important;
            right: 10px !important;
          }
        }
        
        @media (max-width: 320px) {
          div {
            width: 50px !important;
            height: 50px !important;
            font-size: 25px !important;
            bottom: 10px !important;
            right: 10px !important;
          }
        }
      `}</style>
    </>
  );
}