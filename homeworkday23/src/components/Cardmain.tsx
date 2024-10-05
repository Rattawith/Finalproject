import { Link } from 'react-router-dom';
import './Cardmain.css'; 


interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is the first product.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550',
    price: 29.99,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is the second product.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550',
    price: 39.99,
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is the third product.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550',
    price: 49.99,
  },
  {
    id: 4,
    title: 'Product 3',
    description: 'This is the third product.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550',
    price: 49.99,
  },
  {
    id: 5,
    title: 'Product 3',
    description: 'This is the third product.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550',
    price: 49.99,
  },
  {
    id: 6,
    title: 'Product 3',
    description: 'This is the third product.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409982_sd.jpg;maxHeight=640;maxWidth=550',
    price: 49.99,
  },
];

function Cardmain() {
  return (
    <div className="productList">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.imageUrl} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <Link to={"/products"}><button>View</button><button>Edit</button></Link>
        </div>
      ))}
    </div>
  );
}

export default Cardmain;
