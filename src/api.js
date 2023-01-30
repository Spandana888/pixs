import axios from 'axios';

const searchImages = async (term) =>{
 const response =  await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID qnxjDeJL8fn-vhXNQcjVsi7Mbwxkw3cRHlCdL38D0zY",
    },
    params: {
       query: term
    }
  });
  return response.data.results;
}

export default searchImages;

