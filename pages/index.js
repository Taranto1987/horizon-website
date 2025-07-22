import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Castor Cabo Frio - Colchões e Produtos para o Sono</title>
        <meta name="description" content="Loja Castor Cabo Frio - Especialista em colchões, travesseiros e produtos para um sono de qualidade. Av. Júlia Kubitschek, 64 - Jardim Flamboyant, Cabo Frio - RJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>Loja Castor Cabo Frio</h1>
            <p className={styles.tagline}>Especialista em Colchões e Produtos para o Sono</p>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h2>Bem-vindos à Loja Castor Cabo Frio</h2>
            <p className={styles.heroText}>
              Há anos cuidando do seu sono com os melhores colchões e produtos para descanso.
              Oferecemos qualidade, conforto e atendimento personalizado para toda a família.
            </p>
          </section>

          <section className={styles.products}>
            <h3>Nossos Principais Produtos</h3>
            <div className={styles.productGrid}>
              <div className={styles.productCard}>
                <h4>Amazon Prime Gel Pocket®</h4>
                <p>Tecnologia avançada para noites perfeitas</p>
              </div>
              <div className={styles.productCard}>
                <h4>Silver Star Air Pocket®</h4>
                <p>Ventilação superior e conforto incomparável</p>
              </div>
              <div className={styles.productCard}>
                <h4>Kingdom Látex</h4>
                <p>Látex natural para o máximo conforto</p>
              </div>
              <div className={styles.productCard}>
                <h4>Travesseiros e Protetores</h4>
                <p>Complementos essenciais para o seu descanso</p>
              </div>
            </div>
          </section>

          <section className={styles.contact}>
            <h3>Entre em Contato</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>📍 Endereço</h4>
                <p>Av. Júlia Kubitschek, Nº 64<br />Jardim Flamboyant, Cabo Frio - RJ</p>
              </div>
              <div className={styles.contactItem}>
                <h4>📱 WhatsApp</h4>
                <p>(22) 99241-0112</p>
              </div>
              <div className={styles.contactItem}>
                <h4>📷 Instagram</h4>
                <p>@castorcabofrio</p>
              </div>
              <div className={styles.contactItem}>
                <h4>🌐 Site Oficial</h4>
                <p>www.lojacastorcabofrio.com.br</p>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 Loja Castor Cabo Frio. Todos os direitos reservados.</p>
          <p>Especialista em colchões e produtos para o sono em Cabo Frio - RJ</p>
        </footer>
      </div>
    </>
  )
}