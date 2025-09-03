export const calculateIMC = (peso, altura) => {
  if (!peso || !altura || altura <= 0 || peso <= 0) return null;
  const alturaMetros = altura / 100;
  return peso / (alturaMetros * alturaMetros);
};

