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

  it('displays product descriptions', () => {
    render(<ProductGrid />)
    
    // Verifica se as descrições são mostradas ao invés de "Consultar preço"
    expect(screen.getByText('Produto de alta qualidade da linha premium')).toBeInTheDocument()
    expect(screen.getByText('Nosso produto tradicional de confiança')).toBeInTheDocument()
    expect(screen.getByText('Qualidade Castor com preço acessível')).toBeInTheDocument()
    expect(screen.getByText('Kit completo com todos os produtos essenciais')).toBeInTheDocument()
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
    
    const callArgs = (window.open as jest.Mock).mock.calls[0]
    const decodedUrl = decodeURIComponent(callArgs[0])
    expect(decodedUrl).toContain('Produto Castor Premium')
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
    
    // Get the grid container by its specific class
    const gridContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-6')
    expect(gridContainer).toBeInTheDocument()
  })
})