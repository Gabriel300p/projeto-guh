import { Product } from "@/content/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // Função para gerar a mensagem para o WhatsApp com base no produto
  const generateWhatsAppMessage = (product: Product) => {
    const message = `Olá! Gostaria de comprar o produto ${product.name}.%0A%0ADetalhes:%0A- Marca: ${product.brand}%0A- Descrição: ${product.description}%0A- Preço: $${product.price}`;
    return message;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border border-gray-200 p-4 rounded-lg">
          <Image
            src={product.imageURL}
            alt={product.name}
            className="w-full mb-2"
            width={250}
            height={250}
          />
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
            <p className="text-sm text-gray-700">{product.description}</p>
            <p className="text-sm text-gray-800">Price: ${product.price}</p>
          </div>
          <Link
            href={`https://api.whatsapp.com/send?phone=5511934365851&text=${generateWhatsAppMessage(
              product
            )}`}
            target="_blank"
          >
            <Button className="w-full mt-3">Comprar</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
