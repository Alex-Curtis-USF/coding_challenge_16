import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AddProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert price to number and validate
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price)
    };
    
    addProduct(newProduct);
    
    // Reset form
    setFormData({
      name: '',
      price: '',
      description: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProductForm;