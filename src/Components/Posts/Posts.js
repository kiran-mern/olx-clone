import React,{useState,useEffect,useContext} from 'react';
import {firestore} from '../../firebase/config'
import { collection,getDocs } from '@firebase/firestore';

import Heart from '../../assets/Heart';
import './Posts.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/ViewContext';
import { useNavigate } from 'react-router-dom'; 

function Posts() {
    const navigate= useNavigate();
    const {firebase}= useContext(FirebaseContext)
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false);
    const {setPostDetails}=useContext(PostContext)
    useEffect(()=>{
        const fetchProducts = async ()=>{
            setLoading(true);
            try{
                const querySnapshot= await getDocs(collection(firestore,'products'));
                const productsData= [];
                querySnapshot.forEach((doc)=>{
                    productsData.push({id:doc.id,...doc.data()});
                });
                setProducts(productsData);
            }catch (error){
                console.error('Error fetching products: ', error);
            }
            setLoading(false);
        };
        fetchProducts();
    },[]);

  return (
    <div className="postParentDiv">
      {/* <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
            {
            products.map(product =>{
                return <div className='card'
                onClick={()=>{
                    setPostDetails(product)
                    navigate('/view')
                }}>
           
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createAt}</span>
            </div>
          </div>
            })
        }
        </div>
      </div> */}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        <div className="cards">
            {
            products.map(product =>{
                return <div className='card'
                onClick={()=>{
                    setPostDetails(product)
                    navigate('/view')
                }}>
           
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createAt}</span>
            </div>
          </div>
            })
        }
        </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;