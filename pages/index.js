import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Castor Cabo Frio - Colchões e Artigos para o Sono</title>
        <meta name="description" content="Loja Castor Cabo Frio - Especializada em colchões de qualidade, travesseiros e artigos para o sono. Av. Júlia Kubitschek, 64 - Jardim Flamboyant, Cabo Frio - RJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.title}>
              🛏️ Loja Castor Cabo Frio
            </h1>
            <p style={styles.subtitle}>
              Especialista em Colchões e Artigos para o Sono
            </p>
          </header>

          <section style={styles.content}>
            <div style={styles.card}>
              <h2>🏪 Nossa Loja</h2>
              <p>
                Bem-vindos à Loja Castor Cabo Frio! Somos especialistas em 
                proporcionar o melhor sono para você e sua família.
              </p>
              <p>
                Oferecemos uma linha completa de colchões de alta qualidade, 
                travesseiros e acessórios para garantir noites de sono reparador.
              </p>
            </div>

            <div style={styles.card}>
              <h2>📍 Localização</h2>
              <p><strong>Endereço:</strong> Av. Júlia Kubitschek, Nº 64</p>
              <p>Jardim Flamboyant, Cabo Frio - RJ</p>
            </div>

            <div style={styles.card}>
              <h2>📞 Contato</h2>
              <p><strong>WhatsApp:</strong> (22) 99241-0112</p>
              <p><strong>Instagram:</strong> @castorcabofrio</p>
            </div>
          </section>

          <footer style={styles.footer}>
            <p>© 2024 Loja Castor Cabo Frio - Todos os direitos reservados</p>
            <p>Site em desenvolvimento - Em breve versão completa!</p>
          </footer>
        </div>
      </main>
    </>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '40px 20px',
    backgroundColor: '#2c3e50',
    color: 'white',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '0',
    opacity: '0.9',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#34495e',
    color: 'white',
    borderRadius: '10px',
    marginTop: '40px',
  },
}