import Produto1 from "@/assets/produto-1.png";
import Produto2 from "@/assets/produto-2.jpg";
import Produto3 from "@/assets/produto-3.jpg";
import Produto4 from "@/assets/produto-4.jpg";
import Produto5 from "@/assets/produto-5.jpg";
import Produto6 from "@/assets/produto-6.jpg";
import Produto7 from "@/assets/produto-7.jpeg";
import Produto8 from "@/assets/produto-8.jpg";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  size: string[];
  colorHex: string; // Cor representada em hexadecimal
  colorName: string; // Cor representada em texto
  imageURL: any;
}

const products: Product[] = [
  {
    id: 1,
    name: "Nike Mercurial Vapor 13 Elite FG",
    brand: "Nike",
    price: 249.99,
    description: "Designed for explosive speed.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#000000", // Preto
    colorName: "Black",
    imageURL: Produto1,
  },
  {
    id: 2,
    name: "Adidas Predator Freak.1 FG",
    brand: "Adidas",
    price: 219.99,
    description: "Precision and control.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#FFFF00", // Amarelo solar
    colorName: "Solar Yellow",
    imageURL: Produto2,
  },
  {
    id: 3,
    name: "Puma Future Z 1.1 FG/AG",
    brand: "Puma",
    price: 199.99,
    description: "Faster on the field.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#000000", // Preto
    colorName: "Black",
    imageURL: Produto3,
  },
  {
    id: 4,
    name: "Mizuno Morelia Neo III Beta FG",
    brand: "Mizuno",
    price: 189.99,
    description: "Speed and control combined.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#FF0000", // Vermelho
    colorName: "Red",
    imageURL: Produto4,
  },
  {
    id: 5,
    name: "Under Armour Magnetico Pro FG",
    brand: "Under Armour",
    price: 179.99,
    description: "Enhanced touch and feel.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#0000FF", // Azul
    colorName: "Blue",
    imageURL: Produto5,
  },
  {
    id: 6,
    name: "New Balance Furon v6+ Pro FG",
    brand: "New Balance",
    price: 209.99,
    description: "Explosive acceleration.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#008000", // Verde
    colorName: "Green",
    imageURL: Produto6,
  },
  {
    id: 7,
    name: "Diadora Brasil Italy OG MDPU",
    brand: "Diadora",
    price: 169.99,
    description: "Classic style with modern performance.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#FFFFFF", // Branco
    colorName: "White",
    imageURL: Produto7,
  },
  {
    id: 8,
    name: "Umbro Medusae 3 Elite FG",
    brand: "Umbro",
    price: 159.99,
    description: "Natural feel and control.",
    size: ["6", "7", "8", "9", "10", "11", "12"],
    colorHex: "#800080", // Roxo
    colorName: "Purple",
    imageURL: Produto8,
  },
];

export default products;
