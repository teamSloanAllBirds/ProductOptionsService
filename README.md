# Product Options (Allbirds/Shopify)

##### A replication of the product options selector module on Allbirds/Shopify's individual shoe page

> 1. An introduction section with basic product information
> 1. A selector section with several colorways and different sizes and an add-to-cart button
> 1. A description section with various flavor text about a given shoe
> Allbirds/Shopify Product Options module being replicated:
> ![Image of Full Module](https://githubimagehrri.s3.us-east-2.amazonaws.com/glamour-shot.png)
>
>

## Related Projects

  - https://github.com/teamSloanAllBirds/imageCarouselService
  - https://github.com/teamSloanAllBirds/ProductReviewsService
  - https://github.com/teamSloanAllBirds/ProductOptionsProxy
  - https://github.com/teamSloanAllBirds/midPageImagesService
  - https://github.com/teamSloanAllBirds/ProductTopNavigationService

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [React Component Breakdown](#React-Component-Breakdown)
1. [Server Endpoints](#Server-Endpoints)

## Usage

> You can use this to buy shoes. Intended to be used in tandem with the related projects modules.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding the Database
From within the root directory:

Make your own config.js with the following line:

```sh
module.exports = {user: 'YOUR_USERNAME_HERE', database: 'allbirds', multipleStatements: true};
```

```sh
mysql -u YOUR_USERNAME_HERE < schema.sql
npm seed
```
### Starting the Server
From within the root directory:

Run webpack:

```sh
npm run build
```

Run the nodemon server:

```sh
npm start
```

### Additional Setup for a Proxy Server

# React Component Breakdown
## App
### Child React Components
  - ProductIntro
  - ProductOrder
  - ProductDetail
### Styled Components
  - N/A
### State
  - A large object containing all the fields for one item from the database
### Methods
  - ComponentDidMount()
    - Invoked when component mounts
    - Takes the pathname from the window and makes a GET request to /api/productoptions/:id to retrieve information about the item

## ProductIntro
### Child React Components
  - N/A
  ### Styled Components
  - ProductName
  - PriceTag
  - ReviewHolder
  - NumberReviews
### State
  - N/A
### Methods
  - N/A

## ProductOrder
### Child React Components
  - StatefulButtonColor
  - StatefulButtonSize
  - StatefulCartButton
### Styled Components
  - N/A
### State
  - selectedColorway - set by default to Thunder (Dark Blue Upper / White Sole), reflects user choice of colorway
  - selectedSize - set by default to an empty string, reflects user choice of shoe size
  - stock8 - set by default to Thunder (Dark Blue Upper / White Sole) Size 8, reflects stock level of this shoe
  - stock85 - set by default to Thunder (Dark Blue Upper / White Sole) Size 8.5, reflects stock level of this shoe
  - stock9 - set by default to Thunder (Dark Blue Upper / White Sole) Size 9, reflects stock level of this shoe
  - stock95 - set by default to Thunder (Dark Blue Upper / White Sole) Size 9.5, reflects stock level of this shoe
  - stock10 - set by default to Thunder (Dark Blue Upper / White Sole) Size 10, reflects stock level of this shoe
  - stock105 - set by default to Thunder (Dark Blue Upper / White Sole) Size 10.5, reflects stock level of this shoe
  - stock11 - set by default to Thunder (Dark Blue Upper / White Sole) Size 11, reflects stock level of this shoe
  - stock115 - set by default to Thunder (Dark Blue Upper / White Sole) Size 11.5, reflects stock level of this shoe
  - stock12 - set by default to Thunder (Dark Blue Upper / White Sole) Size 12, reflects stock level of this shoe
  - stock125 - set by default to Thunder (Dark Blue Upper / White Sole) Size 12.5, reflects stock level of this shoe
  - stock13 - set by default to Thunder (Dark Blue Upper / White Sole) Size 13, reflects stock level of this shoe
  - stock135 - set by default to Thunder (Dark Blue Upper / White Sole) Size 13.5, reflects stock level of this shoe
  - stock14 - set by default to Thunder (Dark Blue Upper / White Sole) Size 14, reflects stock level of this shoe
### Methods
  - handleSubmit() - sends a POST request to /api/productoption/shopping-cart/ to hold the item in the shopping cart
  - selectShoe() - updates state at selectedColorway to the clicked colorway
  - selectSize() - updates state at selectedSize to the clicked size

## StatefulButtonColor
### Child React Components
  - N/A
### Styled Components
  - N/A
### State
  - hover - updated if the button is hovered over
  - style - saved style onto the state for ease of operation
  - selectedStyle - saved a modified version of the style for ease of operation
  - stateBorder - saved condition of the border style attribute as it is modified
  - statePadding - saved condition of the padding style attribute as it is modified
### Methods
  - toggleHover() - toggle the state at hover when the item is hovered over
  - toggleClick() - toggle the style saved at state when the item is visually selected

## StatefulButtonSize
### Child React Components
  - N/A
### Styled Components
  - N/A
### State
  - hover - updated if the button is hovered over
  - stateBackgroundImage - updated if the button is clicked
### Methods
  - toggleHover() - toggle the state at hover when the item is hovered over
  - toggleClick() - toggle the style saved at state when the item is visually selected
  - sizeNamePlus() - helper function to pad the size name for dealing with the dynamic url background images

## StatefulCartButton
### Child React Components
  - N/A
### Styled Components
  - N/A
### State
  - hover - updated if the button is hovered over
  - stateBackgroundColor - updated if the size is chosen
  - stateColor - updated if the size is chosen
  - stateBorder - updated if the size is chosen
### Methods
  - toggleHover() - toggle the state at hover when the item is hovered over
  - toggleClick() - send a GET request to /api/productions/shopping-cart/ when the user desires to add it to the cart

## ProductDetail
### Child React Components
  - StatefulButton
### Styled Components
  - N/A
### State
  - selectedDescription - set by default to coreFeatures, updates on click to close and on click of any of hte other buttons
### Methods
  - onClick() - change the state to reflect closing coreFeatures, or opening any of the other description buttons

## StatefulButton
### Child React Components
  - N/A
### Styled Components
  - N/A
### State
  - style - allows for changing the style of the component when clicked
### Methods
  - N/A

## Server Endpoints
  - stubbed for now