import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

const Details = () => {
  const { id } = useParams<{ id?: string }>();
  const { isLoading, isError, data: product } = useQuery<Product, Error>(['product', id], () => fetchProduct(id ?? ''));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !product) {
    return <p>Error loading product details</p>;
  }

  const { title, image, price } = product; // Directly access the data property

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>Title: {title}</p>
      <p>Image: <img src={image} alt={title} /></p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Details;
