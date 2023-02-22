import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ProductDataContext } from '../../App'

const ProductDetails = () => {
  const productsData = useContext(ProductDataContext);
  const {info} = useParams();
  const productInfo = productsData.find((product) => product.id === parseInt(info));
  
  return (
    <h1>{productInfo?.name}</h1>
  )
}

export default ProductDetails