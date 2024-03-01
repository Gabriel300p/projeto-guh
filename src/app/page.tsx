import ProductList from "@/components/ProductList";
import products from "@/content/products";

export default function Home() {
  const generateWhatsAppMessage = (product: any) => {
    const message = `Olá! Gostaria de comprar o produto ${product.name}.%0A%0ADetalhes:%0A- Tamanho: ${product.size}%0A- Cor: ${product.colorName}`;
    return message;
  };
  return (
    <main className="p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Lista de chuteiras</h1>
        <ProductList products={products} />
      </div>
    </main>
  );
}
