import { Card, CardContent } from '@/components/ui/card';

const ProductItem = ({ product }) => {
  const { name, price, description } = product;
  
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
          <div className="text-lg font-bold text-green-600">
            ${price.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;