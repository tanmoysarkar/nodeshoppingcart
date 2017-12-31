var Product = require('../models/product');

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/shoppingcart';
mongoose.connect(url);

var products = [
  new Product({
    imagePath: 'https://rukminim1.flixcart.com/image/312/312/j7qi9ow0/pressure-cooker/j/z/b/12685-pigeon-original-imaevmhhhzn8nk8a.jpeg?q=70',
    name: 'Pressure Cooker',
    description: '1 2L Pressure Cooker, 1 3L Pressure Cooker, 1 5L Pressure Cooker. Capacity: 2, 3, 5 litre.',
    price: 1449,
    count: 10
  }),
  new Product({
    imagePath: 'https://rukminim1.flixcart.com/image/312/312/jb13te80/kurti/x/d/p/xl-newyellowlatkan-stylum-original-imafyheyrzt3rgp9.jpeg?q=70',
    name: 'Party Solid Kurti',
    description: 'Stylum presents this asymmetric kurti in fluorescent gold yellow colour.',
    price: 574,
    count: 30
  }),
  new Product({
    imagePath: 'https://rukminim1.flixcart.com/image/832/832/television/z/h/z/lg-49lh600t-original-imaejnzcgev9ghzu.jpeg?q=70',
    name: 'LG (49 inch) LED TV',
    description: 'LG (49 inch) LED Smart TV .',
    price: 55499,
    count: 10
  }),
  new Product({
    imagePath: 'https://rukminim1.flixcart.com/image/832/832/j26gmfk0/shoe/b/r/5/athletic-run-2-0-10-reebok-grey-white-red-black-original-imaethekvuw7phpg.jpeg?q=70',
    name: 'Reebok ATHLETIC Shoes',
    description: 'Model Name: ATHLETIC RUN 2.0 . Ideal For: Men. Occasion: Sports, Outer Material: Mesh.',
    price: 1320,
    count: 15
  }),
  new Product({
    imagePath: 'https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg',
    name: "Game - Uncharted",
    description: "Model Name: ATHLETIC RUN 2.0 . Ideal For: Men. Occasion: Sports, Outer Material: Mesh.",
    price: 1320,
    count: 15
  }),
  new Product({
    imagePath: 'https://rukminim1.flixcart.com/image/312/312/j8vy1e80/watch/t/e/2/raga-crystals-blue-dial-analog-titan-original-imaeyr9gnc9cczgg.jpeg?q=70',
    name: "Titan Raga",
    description: "Style Code: Raga Crystals Blue Dial Analog. Occasion: Casual, Party-Wedding. Type: Wrist Watch.",
    price: 5125,
    count: 25
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}