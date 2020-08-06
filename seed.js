const faker = require('faker');
const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

connection.connect((error) => {
  if (error) {
    console.log('error connecting to database');
  } else {
    console.log('db connected');
  }
})

for (var i = 0; i < 101; i++) {

  var productName = faker.commerce.productName();
  var productPrice = Math.ciel(Math.random() * 100);
  var productReviewStars = Math.ciel(Math.random() * 5);
  var productReviewQuantity = Math.ciel(Math.random() * 50);

  var thunderx8Inventory = Math.floor(Math.random() * 5);
  var thunderx85Inventory = Math.floor(Math.random() * 5);
  var thunderx9Inventory = Math.floor(Math.random() * 5);
  var thunderx95Inventory = Math.floor(Math.random() * 5);
  var thunderx10Inventory = Math.floor(Math.random() * 5);
  var thunderx105Inventory = Math.floor(Math.random() * 5);
  var thunderx11Inventory = Math.floor(Math.random() * 5);
  var thunderx115Inventory = Math.floor(Math.random() * 5);
  var thunderx12Inventory = Math.floor(Math.random() * 5);
  var thunderx125Inventory = Math.floor(Math.random() * 5);
  var thunderx13Inventory = Math.floor(Math.random() * 5);
  var thunderx135Inventory = Math.floor(Math.random() * 5);
  var thunderx14Inventory = Math.floor(Math.random() * 5);
  var geyserx8Inventory = Math.floor(Math.random() * 5);
  var geyserx85Inventory = Math.floor(Math.random() * 5);
  var geyserx9Inventory = Math.floor(Math.random() * 5);
  var geyserx95Inventory = Math.floor(Math.random() * 5);
  var geyserx10Inventory = Math.floor(Math.random() * 5);
  var geyserx105Inventory = Math.floor(Math.random() * 5);
  var geyserx11Inventory = Math.floor(Math.random() * 5);
  var geyserx115Inventory = Math.floor(Math.random() * 5);
  var geyserx12Inventory = Math.floor(Math.random() * 5);
  var geyserx125Inventory = Math.floor(Math.random() * 5);
  var geyserx13Inventory = Math.floor(Math.random() * 5);
  var geyserx135Inventory = Math.floor(Math.random() * 5);
  var geyserx14Inventory = Math.floor(Math.random() * 5);
  var quartzx8Inventory = Math.floor(Math.random() * 5);
  var quartzx85Inventory = Math.floor(Math.random() * 5);
  var quartzx9Inventory = Math.floor(Math.random() * 5);
  var quartzx95Inventory = Math.floor(Math.random() * 5);
  var quartzx10Inventory = Math.floor(Math.random() * 5);
  var quartzx105Inventory = Math.floor(Math.random() * 5);
  var quartzx11Inventory = Math.floor(Math.random() * 5);
  var quartzx115Inventory = Math.floor(Math.random() * 5);
  var quartzx12Inventory = Math.floor(Math.random() * 5);
  var quartzx125Inventory = Math.floor(Math.random() * 5);
  var quartzx13Inventory = Math.floor(Math.random() * 5);
  var quartzx135Inventory = Math.floor(Math.random() * 5);
  var quartzx14Inventory = Math.floor(Math.random() * 5);
  var obsidianx8Inventory = Math.floor(Math.random() * 5);
  var obsidianx85Inventory = Math.floor(Math.random() * 5);
  var obsidianx9Inventory = Math.floor(Math.random() * 5);
  var obsidianx95Inventory = Math.floor(Math.random() * 5);
  var obsidianx10Inventory = Math.floor(Math.random() * 5);
  var obsidianx105Inventory = Math.floor(Math.random() * 5);
  var obsidianx11Inventory = Math.floor(Math.random() * 5);
  var obsidianx115Inventory = Math.floor(Math.random() * 5);
  var obsidianx12Inventory = Math.floor(Math.random() * 5);
  var obsidianx125Inventory = Math.floor(Math.random() * 5);
  var obsidianx13Inventory = Math.floor(Math.random() * 5);
  var obsidianx135Inventory = Math.floor(Math.random() * 5);
  var obsidianx14Inventory = Math.floor(Math.random() * 5);
  var flamex8Inventory = Math.floor(Math.random() * 5);
  var flamex85Inventory = Math.floor(Math.random() * 5);
  var flamex9Inventory = Math.floor(Math.random() * 5);
  var flamex95Inventory = Math.floor(Math.random() * 5);
  var flamex10Inventory = Math.floor(Math.random() * 5);
  var flamex105Inventory = Math.floor(Math.random() * 5);
  var flamex11Inventory = Math.floor(Math.random() * 5);
  var flamex115Inventory = Math.floor(Math.random() * 5);
  var flamex12Inventory = Math.floor(Math.random() * 5);
  var flamex125Inventory = Math.floor(Math.random() * 5);
  var flamex13Inventory = Math.floor(Math.random() * 5);
  var flamex135Inventory = Math.floor(Math.random() * 5);
  var flamex14Inventory = Math.floor(Math.random() * 5);
  var blusterx8Inventory = Math.floor(Math.random() * 5);
  var blusterx85Inventory = Math.floor(Math.random() * 5);
  var blusterx9Inventory = Math.floor(Math.random() * 5);
  var blusterx95Inventory = Math.floor(Math.random() * 5);
  var blusterx10Inventory = Math.floor(Math.random() * 5);
  var blusterx105Inventory = Math.floor(Math.random() * 5);
  var blusterx11Inventory = Math.floor(Math.random() * 5);
  var blusterx115Inventory = Math.floor(Math.random() * 5);
  var blusterx12Inventory = Math.floor(Math.random() * 5);
  var blusterx125Inventory = Math.floor(Math.random() * 5);
  var blusterx13Inventory = Math.floor(Math.random() * 5);
  var blusterx135Inventory = Math.floor(Math.random() * 5);
  var blusterx14Inventory = Math.floor(Math.random() * 5);
  var blizzardx8Inventory = Math.floor(Math.random() * 5);
  var blizzardx85Inventory = Math.floor(Math.random() * 5);
  var blizzardx9Inventory = Math.floor(Math.random() * 5);
  var blizzardx95Inventory = Math.floor(Math.random() * 5);
  var blizzardx10Inventory = Math.floor(Math.random() * 5);
  var blizzardx105Inventory = Math.floor(Math.random() * 5);
  var blizzardx11Inventory = Math.floor(Math.random() * 5);
  var blizardx115Inventory = Math.floor(Math.random() * 5);
  var blizzardx12Inventory = Math.floor(Math.random() * 5);
  var blizzardx125Inventory = Math.floor(Math.random() * 5);
  var blizzardx13Inventory = Math.floor(Math.random() * 5);
  var blizzardx135Inventory = Math.floor(Math.random() * 5);
  var blizzardx14Inventory = Math.floor(Math.random() * 5);
  var cyclonex8Inventory = Math.floor(Math.random() * 5);
  var cyclonex85Inventory = Math.floor(Math.random() * 5);
  var cyclonex9Inventory = Math.floor(Math.random() * 5);
  var cyclonex95Inventory = Math.floor(Math.random() * 5);
  var cyclonex10Inventory = Math.floor(Math.random() * 5);
  var cyclonex105Inventory = Math.floor(Math.random() * 5);
  var cyclonex11Inventory = Math.floor(Math.random() * 5);
  var cyclonex115Inventory = Math.floor(Math.random() * 5);
  var cyclonex12Inventory = Math.floor(Math.random() * 5);
  var cyclonex125Inventory = Math.floor(Math.random() * 5);
  var cyclonex13Inventory = Math.floor(Math.random() * 5);
  var cyclonex135Inventory = Math.floor(Math.random() * 5);
  var cyclonex14Inventory = Math.floor(Math.random() * 5);
  var pukekox8Inventory = Math.floor(Math.random() * 5);
  var pukekox85Inventory = Math.floor(Math.random() * 5);
  var pukekox9Inventory = Math.floor(Math.random() * 5);
  var pukekox95Inventory = Math.floor(Math.random() * 5);
  var pukekox10Inventory = Math.floor(Math.random() * 5);
  var pukekox105Inventory = Math.floor(Math.random() * 5);
  var pukekox11Inventory = Math.floor(Math.random() * 5);
  var pukekox115Inventory = Math.floor(Math.random() * 5);
  var pukekox12Inventory = Math.floor(Math.random() * 5);
  var pukekox125Inventory = Math.floor(Math.random() * 5);
  var pukekox13Inventory = Math.floor(Math.random() * 5);
  var pukekox135Inventory = Math.floor(Math.random() * 5);
  var pukekox14Inventory = Math.floor(Math.random() * 5);

  var highlight1ImageUrl = faker.imageUrl();
  var highlight1Text = faker.lorem.sentence();
  var highlight2ImageUrl = faker.imageUrl();
  var highlight2Text = faker.lorem.sentence();
  var highlight3ImageUrl = faker.imageUrl();
  var highlight3Text = faker.lorem.sentence();
  var coreFeatures = faker.lorem.paragraph();
  var productDescription = faker.lorem.paragraph();
  var shippingAndReturns = faker.lorem.paragraph();
  var careGuide = faker.lorem.paragraph();

  //Generate all this data, make a query to db
  var queryString = ; // TODO

  connnection.query(queryString, (error) => {
    if (error) {
      console.log('error on insert ', i);
    } else {
      console.log('success on insert ', i)
    }
  })

}