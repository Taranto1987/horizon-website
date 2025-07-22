export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-900 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Carregando...</h2>
        <p className="text-gray-600">Preparando os melhores produtos para você</p>
      </div>
    </div>
  );
}