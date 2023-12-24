// Exercise #2 Product

//const product = {
 // name: "Xiaomi Air Purifier",
  //price: 4000,
 //ratings: 2.5,
  //photo: null,
//};
//let socialMediaShare = "facebookShare";
// Start code here
let product =  
{ 
name: "Xiaomi Air Purifier", 
price: 4000, 
ratings: 2.5, 
photo: null, 
}; 
product.ratings = 4.5; 
product.photo = "https://101.appmifile.globalimg.com/webfile/pc/mi-air-purifier-3H/replace03.jpg"; 
product.code = "IT0101010"; 
product.price = 6000; 
delete product.ratings; 
product["socialMediaShare"] = 45.5; 
console.log(product); 