import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY = 'L0RqCu8wXKkbHmxw042dsRnKS3HI1XS3';

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      setError("Error occurred while fetching data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 flex flex-col items-center border border-black gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450px" />}
      {error && <p>{error}</p>}
      <button onClick={clickHandler} className="mb-[15px] bg-white w-10/12 rounded-md opacity-50 py-2 text-lg text-center">Generate</button>
    </div>
  );
}

export default Random;
