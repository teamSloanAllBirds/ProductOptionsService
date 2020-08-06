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

connection.query('USE allbirds', (error) => {
  if (error) {
    console.log('error in USE');
  } else {
    console.log('db using allbirds');
  }
});

for (var i = 0; i < 100; i++) {

  var productName = faker.commerce.productName().toString();
  var productPrice = Math.ceil(Math.random() * 100);
  var productReviewStars = Math.ceil(Math.random() * 5);
  var productReviewQuantity = Math.ceil(Math.random() * 50);

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
  var blizzardx115Inventory = Math.floor(Math.random() * 5);
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

  var highlight1ImageUrl = faker.image.imageUrl().toString();
  var highlight1Text = faker.lorem.sentence().toString();
  var highlight2ImageUrl = faker.image.imageUrl().toString();
  var highlight2Text = faker.lorem.sentence().toString();
  var highlight3ImageUrl = faker.image.imageUrl().toString();
  var highlight3Text = faker.lorem.sentence().toString();
  var coreFeatures = faker.lorem.paragraph().toString();
  var productDescription = faker.lorem.paragraph().toString();
  var shippingAndReturns = faker.lorem.paragraph().toString();
  var careGuide = faker.lorem.paragraph().toString();

  //Generate all this data, make a query to db
  var queryString = `INSERT INTO product_options VALUES (${i}, "${productName}", ${productPrice}, ${productReviewStars}, ${productReviewQuantity}, ${thunderx8Inventory}, ${thunderx85Inventory}, ${thunderx9Inventory}, ${thunderx95Inventory}, ${thunderx10Inventory}, ${thunderx105Inventory}, ${thunderx11Inventory}, ${thunderx115Inventory},${thunderx12Inventory}, ${thunderx125Inventory}, ${thunderx13Inventory}, ${thunderx135Inventory},${thunderx14Inventory}, ${geyserx8Inventory}, ${geyserx85Inventory}, ${geyserx9Inventory}, ${geyserx95Inventory}, ${geyserx10Inventory}, ${geyserx105Inventory}, ${geyserx11Inventory}, ${geyserx115Inventory}, ${geyserx12Inventory}, ${geyserx125Inventory}, ${geyserx13Inventory}, ${geyserx135Inventory}, ${geyserx14Inventory}, ${quartzx8Inventory}, ${quartzx85Inventory}, ${quartzx9Inventory}, ${quartzx95Inventory}, ${quartzx10Inventory}, ${quartzx105Inventory}, ${quartzx11Inventory}, ${quartzx115Inventory}, ${quartzx12Inventory}, ${quartzx125Inventory}, ${quartzx13Inventory}, ${quartzx135Inventory}, ${quartzx14Inventory}, ${obsidianx8Inventory}, ${obsidianx85Inventory}, ${obsidianx9Inventory}, ${obsidianx95Inventory}, ${obsidianx10Inventory}, ${obsidianx105Inventory}, ${obsidianx11Inventory}, ${obsidianx115Inventory}, ${obsidianx12Inventory}, ${obsidianx125Inventory}, ${obsidianx13Inventory}, ${obsidianx135Inventory}, ${obsidianx14Inventory}, ${flamex8Inventory}, ${flamex85Inventory}, ${flamex9Inventory}, ${flamex95Inventory}, ${flamex10Inventory}, ${flamex105Inventory}, ${flamex11Inventory}, ${flamex115Inventory}, ${flamex12Inventory}, ${flamex125Inventory}, ${flamex13Inventory}, ${flamex135Inventory}, ${flamex14Inventory}, ${blusterx8Inventory}, ${blusterx85Inventory}, ${blusterx9Inventory}, ${blusterx95Inventory}, ${blusterx10Inventory}, ${blusterx105Inventory}, ${blusterx11Inventory}, ${blusterx115Inventory}, ${blusterx12Inventory}, ${blusterx125Inventory}, ${blusterx13Inventory}, ${blusterx135Inventory}, ${blusterx14Inventory}, ${blizzardx8Inventory}, ${blizzardx85Inventory}, ${blizzardx9Inventory}, ${blizzardx95Inventory}, ${blizzardx10Inventory}, ${blizzardx105Inventory}, ${blizzardx11Inventory}, ${blizzardx115Inventory}, ${blizzardx12Inventory}, ${blizzardx125Inventory}, ${blizzardx13Inventory}, ${blizzardx135Inventory}, ${blizzardx14Inventory}, ${cyclonex8Inventory}, ${cyclonex85Inventory}, ${cyclonex9Inventory}, ${cyclonex95Inventory}, ${cyclonex10Inventory}, ${cyclonex105Inventory}, ${cyclonex11Inventory}, ${cyclonex115Inventory}, ${cyclonex12Inventory}, ${cyclonex125Inventory}, ${cyclonex13Inventory}, ${cyclonex135Inventory}, ${cyclonex14Inventory}, ${pukekox8Inventory}, ${pukekox85Inventory}, ${pukekox9Inventory}, ${pukekox95Inventory}, ${pukekox10Inventory}, ${pukekox105Inventory}, ${pukekox11Inventory}, ${pukekox115Inventory}, ${pukekox12Inventory}, ${pukekox125Inventory}, ${pukekox13Inventory}, ${pukekox135Inventory}, ${pukekox14Inventory}, "${highlight1ImageUrl}", "${highlight1Text}", "${highlight2ImageUrl}", "${highlight2Text}", "${highlight3ImageUrl}", "${highlight3Text}", "${coreFeatures}", "${productDescription}", "${shippingAndReturns}", "${careGuide}")`;

  connection.query(queryString, (error) => {
    if (error) {
      console.log(error, ' error on insert');
    } else {
      console.log('success on insert ')
    }
  })

}

