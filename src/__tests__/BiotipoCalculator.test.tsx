import { render, screen, fireEvent } from '@testing-library/react'
import BiotipoCalculator from '@/components/BiotipoCalculator'

// Mock do window.open
Object.defineProperty(window, 'open', {
  writable: true,
  value: jest.fn(),
})

describe('BiotipoCalculator', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders calculator with first question', () => {
    render(<BiotipoCalculator />)
    
    expect(screen.getByText('Calculadora de Biotipo')).toBeInTheDocument()
    expect(screen.getByText('Como você descreveria sua estrutura corporal?')).toBeInTheDocument()
    expect(screen.getByText('1 de 3')).toBeInTheDocument()
  })

  it('shows progress bar', () => {
    render(<BiotipoCalculator />)
    
    const progressBar = document.querySelector('.bg-castor-brown.h-2')
    expect(progressBar).toBeInTheDocument()
  })

  it('advances to next question when option is selected', () => {
    render(<BiotipoCalculator />)
    
    // Clica na primeira opção
    const firstOption = screen.getByText('Magro(a) naturalmente')
    fireEvent.click(firstOption)
    
    // Verifica se avançou para a segunda pergunta
    expect(screen.getByText('Como é seu metabolismo?')).toBeInTheDocument()
    expect(screen.getByText('2 de 3')).toBeInTheDocument()
  })

  it('completes calculator and shows result', () => {
    render(<BiotipoCalculator />)
    
    // Responde primeira pergunta (1 ponto)
    fireEvent.click(screen.getByText('Magro(a) naturalmente'))
    
    // Responde segunda pergunta (1 ponto)
    fireEvent.click(screen.getByText('Muito rápido (dificuldade para ganhar peso)'))
    
    // Responde terceira pergunta (1 ponto) - total 3 pontos = Ectomorfo
    fireEvent.click(screen.getByText('Pequeno (como pouco)'))
    
    // Verifica resultado
    expect(screen.getByText('Resultado da Calculadora de Biotipo')).toBeInTheDocument()
    expect(screen.getByText(/Ectomorfo/)).toBeInTheDocument()
  })

  it('calculates Mesomorfo correctly', () => {
    render(<BiotipoCalculator />)
    
    // Responde com pontuações médias (2 pontos cada) - total 6 pontos = Mesomorfo
    fireEvent.click(screen.getByText('Estrutura média'))
    fireEvent.click(screen.getByText('Normal'))
    fireEvent.click(screen.getByText('Normal'))
    
    expect(screen.getByText(/Mesomorfo/)).toBeInTheDocument()
  })

  it('calculates Endomorfo correctly', () => {
    render(<BiotipoCalculator />)
    
    // Responde com pontuações altas (3 pontos cada) - total 9 pontos = Endomorfo
    fireEvent.click(screen.getByText('Estrutura mais larga'))
    fireEvent.click(screen.getByText('Mais lento (facilidade para ganhar peso)'))
    fireEvent.click(screen.getByText('Grande (gosto de comer)'))
    
    expect(screen.getByText(/Endomorfo/)).toBeInTheDocument()
  })

  it('allows retaking the test', () => {
    render(<BiotipoCalculator />)
    
    // Completa o teste
    fireEvent.click(screen.getByText('Magro(a) naturalmente'))
    fireEvent.click(screen.getByText('Muito rápido (dificuldade para ganhar peso)'))
    fireEvent.click(screen.getByText('Pequeno (como pouco)'))
    
    // Clica em refazer teste
    fireEvent.click(screen.getByText('Refazer Teste'))
    
    // Verifica se voltou ao início
    expect(screen.getByText('Como você descreveria sua estrutura corporal?')).toBeInTheDocument()
    expect(screen.getByText('1 de 3')).toBeInTheDocument()
  })

  it('allows sharing result via WhatsApp', () => {
    render(<BiotipoCalculator />)
    
    // Completa o teste
    fireEvent.click(screen.getByText('Magro(a) naturalmente'))
    fireEvent.click(screen.getByText('Muito rápido (dificuldade para ganhar peso)'))
    fireEvent.click(screen.getByText('Pequeno (como pouco)'))
    
    // Clica em compartilhar
    fireEvent.click(screen.getByText('Compartilhar Resultado'))
    
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/5522999999999'),
      '_blank'
    )
    
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('Ectomorfo'),
      '_blank'
    )
  })
})