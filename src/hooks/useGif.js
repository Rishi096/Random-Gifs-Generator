import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const API_KEY = 'L0RqCu8wXKkbHmxw042dsRnKS3HI1XS3';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

  
    async function fetchData(tag) {
      setLoading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect(() => {
      fetchData('car');
    },[])

    return {gif,loading, fetchData};
}

export default useGif
