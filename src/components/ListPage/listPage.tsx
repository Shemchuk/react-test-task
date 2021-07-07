import './listPage.scss';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts/posts';

const ListPage: React.FC<any> = (props: any) => {
  const [posts, setPosts] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoadingData(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setIsLoadingData(false);
    }

    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className='list-page'>
      <h2>List page</h2>
      <Posts posts={posts} isLoadingData={isLoadingData} />
    </div>
  );
}

export default ListPage;
