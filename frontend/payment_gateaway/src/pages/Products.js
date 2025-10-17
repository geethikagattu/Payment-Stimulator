import React, { useState, useEffect, useContext } from 'react';
import { productAPI, transactionAPI } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      const response = selectedCategory === 'all'
        ? await productAPI.getAll()
        : await productAPI.getByCategory(selectedCategory);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePurchase = async (productId) => {
    try {
      const response = await transactionAPI.create({
        productId,
        paymentMethod: 'credit_card'
      });
      
      setMessage(response.data.message);
      
      if (response.data.transaction.status === 'flagged') {
        alert('⚠️ Transaction flagged for suspicious activity!');
      } else {
        alert('✅ Purchase successful!');
      }
      
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Purchase failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="text-lg">
            Balance: <span className="font-bold text-green-600">${user?.balance}</span>
          </div>
        </div>

        {message && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
            {message}
          </div>
        )}

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded ${selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('flowers')}
            className={`px-4 py-2 rounded ${selectedCategory === 'flowers' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Flowers
          </button>
          <button
            onClick={() => setSelectedCategory('paints')}
            className={`px-4 py-2 rounded ${selectedCategory === 'paints' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Paints
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>
                <button
                  onClick={() => handlePurchase(product.id)}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;