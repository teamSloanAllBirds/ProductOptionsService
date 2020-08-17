# Allbirbs.com

> A product page where you can buy a pair of shoes

## Related Projects

  - https://github.com/teamSloanAllBirds/imageCarouselService
  - https://github.com/teamSloanAllBirds/ProductReviewsService
  - https://github.com/teamSloanAllBirds/ProductOptionsProxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

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
npm run-script build
```

Run the nodemon server:

```sh
npm start
```

### Additional Setup for a Proxy Server
