import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="space-y-4">
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
};

export default ProductList;