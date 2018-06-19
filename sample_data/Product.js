/*
 curl --request POST \
  --url http://localhost:5000/api//product \
  --header 'content-type: application/json' \
 */


const products = [
  {
    "name": "Mint Green Shirt",
    "description": "Green saree",
    "price": 499,
    "gender": "women",
    "designer": "5b27df8198ddc699a623a6ae",
    type: "saree",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hd9/h66/10597656363038/-473Wx593H-460124434-green-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Women Maroon Kurta",
    "description": "Maroon Kurta",
    "price": 1499,
    "gender": "women",
    type: "kurta",
    "designer": "5b289501988c89a21229dfd6",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h80/hec/11284571357214/-473Wx593H-460136594-maroon-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Mint Green Kurti Women",
    "description": "Mint Green Kurti",
    "price": 2000,
    "designer": "4",
    "gender": "women",
    type: "kurti",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h1b/h38/10764474318878/-473Wx593H-460074235-mint-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Silver Earring",
    "description": "Silver Earring",
    "price": 499,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": "women",
    type: "earring",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h28/hae/11134870224926/-473Wx593H-460164022-silver-MODEL.jpg",
    inCart: false,
    "category": "jewelery"
  },
  {
    "name": "Women Silver Necklace",
    "description": "Silver Necklace",
    "price": 499,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": "women",
    type: "necklace",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hbe/h98/11408013525022/-473Wx593H-460202517-silver-MODEL.jpg",
    inCart: false,
    "category": "jewelery"
  },
  {
    "name": "Stoles & Dupattas",
    "price": 600,
    "designer": "5b289501988c89a21229dfd6",
    "gender": "women",
    type: "dupatta",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h71/he8/11396671930398/-473Wx593H-460189289-multi-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Pink Dupatta",
    "description": "Printed Dupatta",
    "price": 1499,
    "designer": "4",
    "gender": "women",
    type: "dupatta",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h40/hd0/11372663275550/-473Wx593H-460169324-red-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Chanderi Cotton Dupatta",
    "description": "Handblock Print Chanderi Pure Silk Cotton Dupatta",
    "price": 2100,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": "women",
    type: "shirt",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hac/h4d/11386139869214/-473Wx593H-460189300-indigo-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "price": 499,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": "women",
    type: "shirt",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hea/ha7/10400926072862/-473Wx593H-460081996-coral-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "price": 900,
    "designer": "5b289501988c89a21229dfd6",
    "gender": "women",
    type: "watch",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h96/hc8/10548764803102/-473Wx593H-460094515-ivory-MODEL.jpg",
    inCart: false,
    "category": "kurta"
  },
  {
    "name": "Tie-Dyed Dupatta",
    "description": "Hand Tie-Dyed Shibori Cotton Mull Dupatta",
    "price": 1599,
    "designer": "4",
    "gender": "women",
    type: "dupatta",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hfb/h5c/11372843106334/-473Wx593H-460169326-green-MODEL.jpg",
    inCart: false,
    "category": "accessories"
  },
  {
    "name": "Pink Salwar",
    "description": "Pink silk chanderi pajamas",
    "price": 1199,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": "women",
    type: "pajama",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h01/hf1/11397002559518/-473Wx593H-460170341-fuschia-MODEL4.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Palazzo Pants",
    "description": "Floral Print Palazzo Pants",
    "price": 1499,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": "women",
    type: "trousers",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hf1/h2d/11251608256542/-473Wx593H-460159412-lightgreen-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Cotton Kurta Fabric",
    "description": "Hand Tie-Dye Bandhini Cotton Kurta Fabric",
    "price": 2200,
    "designer": "5b289501988c89a21229dfd6",
    "gender": "women",
    type: "fabric",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h99/h2a/11372857262110/-473Wx593H-460169339-blue-MODEL.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Blue Kurta Fabric",
    "description": "Hand Tie-Dyed Mothda Cotton Kurta Fabric",
    "price": 800,
    "designer": "4",
    "gender": "women",
    type: "fabric",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h35/h28/11287431282718/-473Wx593H-460169354-blue-MODEL2.jpg",
    inCart: false,
    "category": "clothes"
  },
  {
    "name": "Printed Straight Kurta",
    "description": "Printed Straight Kurta Women",
    "price": 1400,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": "women",
    type: "kurta",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h49/hc9/10666888790046/-473Wx593H-460089663-yellow-MODEL.jpg",
    inCart: false,
    "category": "accessories"
  },
  {
    "name": "Print Mashru Bag",
    "description": "Ajrak Handblock Print Mashru Bag",
    "price": 2500,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": "women",
    type: "bag",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h59/hb3/10795852300318/-473Wx593H-460137487-multi-MODEL.jpg",
    inCart: false,
    "category": "accessories"
  },
  {
    "name": "Straight Kurta with Slit",
    "description": "Sleeveless Straight Kurta with Slit Hem",
    "price": 1200,
    "designer": "5b289501988c89a21229dfd6",
    "gender": "women",
    type: "tie",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/h24/hb0/10342167412766/-473Wx593H-460062773-rust-MODEL.jpg",
    inCart: false,
    "category": "accessories"
  },
  {
    "name": "Kurta with Front Open",
    "description": "Printed Sleeveless Kurta with Front Open",
    "price": 600,
    "designer": "4",
    "gender": "men",
    type: "tie",
    "feature_img": "https://assets.ajio.com/medias/sys_master/root/hd2/h82/10154526572574/-473Wx593H-460056842-blue-MODEL.jpg",
    inCart: false,
    "category": "accessories"
  },
  {
    "name": 'Tasselled Tie-Up kurta',
    "description": 'Printed Chanderi Kurti with Tasselled Tie-Up',
    "price": 900,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/hbf/h48/11225513984030/-473Wx593H-460159704-grey-MODEL.jpg',
    "category": 'kurta'
  },
  {
    "name": 'Flared Kurta with Tassels',
    "price": 900,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/h48/h6f/11265421213726/-473Wx593H-460166024-grey-MODEL.jpg',
    "category": 'kurta'
  },
  {
    "name": 'Flared Kurta with Tassels',
    "price": 1200,
    "designer": "5b289501988c89a21229dfd6",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/hdc/ha6/11159305682974/-473Wx593H-460150584-mauve-MODEL.jpg',
    "category": 'kurta'
  },
  {
    "price": 1500,
    "designer": "4",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/h6a/he0/11309579829278/-473Wx593H-460158630-coral-MODEL.jpg',
    "category": 'kurta'
  },
  {
    "price": 900,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": 'women',
    "category": 'kurta'
  },
  {
    "name": 'Printed A-line Kurta',
    "description": 'Printed A-line Kurta',
    "price": 800,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/hfe/h50/11209124085790/-473Wx593H-460188339-indigo-MODEL.jpg',
    "category": 'kurta'
  },
  {
    "name": 'Kurta',
    "description": 'Fuschia Flared Kurta',
    "price": 1900,
    "designer": "5b289501988c89a21229dfd6",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/h41/h4f/10411112005662/-473Wx593H-460058780-fuchsia-MODEL.jpg',
    "category": 'kurta'
  },{
    "name": 'Pussy bow kurta',
    "description": 'Straight Kurta with Pussy Bow',
    "price": 1900,
    "designer": "4",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/ha4/h5a/10498574516254/-473Wx593H-460089623-olive-MODEL.jpg',
    "category": 'kurta'
  },{
    "name": 'Palazzo',
    "description": 'Cropped Pleated Palazzo Pants',
    "price": 1900,
    "designer": "5b27dda298ddc699a623a6ab",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/h4d/h24/11308843335710/-473Wx593H-460159446-coral-MODEL4.jpg',
    "category": 'kurta'
  },{
    "name": 'Kalamkari Cotton Palazzos',
    "description": 'Handblock Print Kalamkari Cotton Palazzos',
    "price": 1900,
    "designer": "5b27df8198ddc699a623a6ae",
    "gender": 'women',
    "feature_img": 'https://assets.ajio.com/medias/sys_master/root/h0c/h7a/11397131468830/-473Wx593H-440784111-beige-MODEL.jpg',
    "category": 'kurta'
  }
];

var request = require('request');

for(var i=0; i<products.length; i++)
{
    var options = {
      uri: 'http://localhost:5000/api/product',
      method: 'POST',
      json: products[i]
    };

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body.id) // Print the shortened url.
      }
    });

}

//export default products;
