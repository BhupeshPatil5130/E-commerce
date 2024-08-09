import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import LandingPage from "../components/LandingPage";
import Review from "../components/Review";
import CategoryItem  from '../components/CategoryItem '

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data)
      setPosts(data);
    } catch (error) {
      console.log("Error aagya");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => { 
    fetchProductData();
  }, []);

  return (
    <div>
      <div>
        <LandingPage/>
      </div>
      <h1 className="font-bold text-[25px] text-center">Category</h1>
    <div className="">
      <div>
        <CategoryItem/>
      </div>
      <div>
      <h1 className="font-bold text-[25px] text-center mt-2">Buy Now</h1>
      </div>
      {loading ? 
        <Spinner />
       : posts.length > 0 ? (
        <div className="grid  grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 min-h-[80vh]">
          {posts.map(post=> (
            <Product key={post.id} post={post}/>
            
          ))}
        </div>
      ) : 
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>  
      }
    </div>
    <div>
      <Review/>
    </div>
    </div>
  );
};

export default Home;
