import { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      description: "Feature-rich smartwatch with health tracking capabilities"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      description: "Durable laptop backpack with multiple compartments"
    }
  ]);

  const addProduct = (newProduct) => {
    setProducts(prevProducts => [
      ...prevProducts,
      {
        ...newProduct,
        id: prevProducts.length + 1
      }
    ]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <AddProductForm addProduct={addProduct} />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;