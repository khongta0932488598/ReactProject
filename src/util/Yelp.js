const apiKey="_Auygo5_6X-oW38tlDl1ldtubbhTMNZEKJ3gipqpeoAqej80HhlUjs_--x229TztZfVAfkC5l1hayOKnyUzDNUUbfiW_NfCkSqoBmntixmI1sikgy78yli9nANJ3W3Yx";
// npm install whatwg-fetch --save : to support odler brwosers to use fetch
  var search=(term,location,sortBy)=>{
    //add cors restriction with permission
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
    }).then((res)=>{
        return res.json();
    }).then((jsonResponse)=>{ //jsonResponse.busninesses check whether Yelp API return a valid response
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business=>{
                  
                  return {
                      id:business.id,
                      imageSrc:business.image_url,
                      name:business.name,
                      address:business.location.address1,
                      city:business.location.city,
                      state:business.location.state,
                      zipCode:business.location.zip_code,
                      category:business.categories[0].title,
                      rating:business.rating,
                      reviewCount:business.reviewount
                  }
            });
        }
    });
};
export default search;