import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';
import AlquimistaAssistant from '../ui/AlquimistaAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AlquimistaAssistant />
    </div>
  );
};

export default Layout;