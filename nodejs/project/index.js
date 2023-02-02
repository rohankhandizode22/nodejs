module.exports=async function getPosts(){
    const axios=require("axios");
    let results;
    await axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        results=res.data;
      })
      .catch(err=>{
         console.log(err)
      });
      return results;
}