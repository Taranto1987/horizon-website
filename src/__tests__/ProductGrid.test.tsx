import { render, screen, fireEvent } from '@testing-library/react'
import ProductGrid from '@/components/ProductGrid'

// Mock do window.open
Object.defineProperty(window, 'open', {
  writable: true,
  value: jest.fn(),
})

describe('ProductGrid', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders product grid with products', () => {
    render(<ProductGrid />)
    
    // Verifica se os produtos são renderizados
    expect(screen.getByText('Produto Castor Premium')).toBeInTheDocument()
    expect(screen.getByText('Produto Castor Tradicional')).toBeInTheDocument()
    expect(screen.getByText('Produto Castor Econômico')).toBeInTheDocument()
    expect(screen.getByText('Kit Castor Completo')).toBeInTheDocument()
  })

  it('displays "Consultar preço" for all products', () => {
    render(<ProductGrid />)
    
    const priceElements = screen.getAllByText('Consultar preço')
    expect(priceElements).toHaveLength(4) // 4 produtos
  })

  it('shows "Consultar Preço" buttons for all products', () => {
    render(<ProductGrid />)
    
    const buttons = screen.getAllByText('Consultar Preço')
    expect(buttons).toHaveLength(4) // 4 produtos
  })

  it('opens WhatsApp when clicking "Consultar Preço"', () => {
    render(<ProductGrid />)
    
    const firstButton = screen.getAllByText('Consultar Preço')[0]
    fireEvent.click(firstButton)
    
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/5522999999999'),
      '_blank'
    )
    
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('Produto Castor Premium'),
      '_blank'
    )
  })

  it('has proper product structure', () => {
    render(<ProductGrid />)
    
    // Verifica se cada produto tem nome e descrição
    expect(screen.getByText('Produto de alta qualidade da linha premium')).toBeInTheDocument()
    expect(screen.getByText('Nosso produto tradicional de confiança')).toBeInTheDocument()
    expect(screen.getByText('Qualidade Castor com preço acessível')).toBeInTheDocument()
    expect(screen.getByText('Kit completo com todos os produtos essenciais')).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    render(<ProductGrid />)
    
    const gridContainer = screen.getByRole('generic')
    expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6')
  })
})