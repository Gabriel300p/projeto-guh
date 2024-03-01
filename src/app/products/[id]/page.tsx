import products from "@/content/products";

export default function page({ params }: { params: { id: number } }) {
  // Convertendo o ID da string para um número
  const productId = params.id;

  // Buscando o produto com base no ID
  const productDetail = products.filter(
    (product) => product.id === productId
  )[0];

  // Verificando se o produto foi encontrado
  if (!productDetail) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <h1>{productDetail.name}</h1>
      <p>{productDetail.description}</p>
      {/* Adicione aqui o restante das informações do produto */}
    </>
  );
}
