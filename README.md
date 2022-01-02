<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="public/thlogo.jpg" alt="Logo" width="98" height="138">
  </a>

  <h3 align="center">RaceDay Initial Release</h3>

  <p align="center">
    View Australian Horse Racing TAB Data
    <br />
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

Top Hats is a fully function Designer Hats eCommerce website with product filtering, sorting and searching capability to enhance the user experience.

Electronic payment functionality has been achieved through leveraging secure third party payment gateway technology.
The products catelog is maintained through a user-friendly product management system allowing easy addition and update of the exisiting Top Hat catlog.

### Built With

Key frameworks and technologies used in this project are:

- [React](https://reactjs.org/) - Main Code Base
- [Jest](https://jestjs.io/) - Testing enviornment
- [Node](https://nodejs.org/) - Testing enviornment
- [Stripe.com](https://stripe.com) - CMS and Payments Infrustructure
- [Begin.com](https://begin.com) - Secure API server. Stores private key
- [Netlify](https://www.netlify.com/) - Web Site public hosting service

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project up and running follow these simple steps.

### Prerequisites

To see full project functionality you will need the following as a prerequsite:

1. An account on stripe.com. This is to create and maintina your product catalog.
2. An account on begin.com. - This is to enable secure API integration with the strip.com product catalog and payments gateway.

### Installation

1. Get a API Keys from stripe.com
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your stripe.com Public public in `.env.js`
   ```JS
   REACT_APP_STRIPE_PUBLIC_KEY=
   ```
5. log in to begin.com and enter your Secret Key from your stripe.com account.
6. Enter your begin.com deployed url `.env.js`

   ```JS
   REACT_APP_API_URL=
   ```

7. Log into stripe.com and add products that will be diplayed in the Top Hats shop catalog. Your must have a 'category' key.

<!-- USAGE EXAMPLES -->

## Usage

The Top Hats site will initially show featured products and then the first 6 products in the catelog. There is a close button to hide the featured products and page pagination at the bottom of the catelog to allow viewing more products.

Filter by category, Sort by and search product functionality is also included in a toolbar at the top of the screen to facilitate displaying products using a criteria.

Clicking a 'Buy now' button on either a featured product or catalog item will redirect the user to a third party payment provider and return them to Top Hats once the payment is complete.

A live version of the site has been deployed to: https://clever-knuth-5770a4.netlify.app/

The products and prices json data can be viewed at begin.com:

- Products: https://design-hc3-staging.begin.app/products

- Prices: https://design-hc3-staging.begin.app/prices

The Product Catalog can be viewed at:

- https://dashboard.stripe.com/test/products?active=true

(Note: you will need to be invited as a team member and will need to create an account if you do not have one)

<!-- ROADMAP -->

## Roadmap

Future functionaility will include ensuring thes earch functionality is not case sensative.

<!-- CONTACT -->

## Contact

Should you have any questions, the project team members are:

Warrick Smith - https://github.com/WarrickSmith

Shaun McTeague - TBA

Nelson Pinto - https://github.com/Nel2021

Project Link: [https://github.com/Developers-Institute-Classrooms/01-project---online-shop---21t3-group-3-nelson-warrick-shaun]

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Harvey Nicols for Product Inspiration](https://www.harveynichols.com/int/mens/all-accessories/hats/)
- [favicon.io to geneate favicon.ico from a jpg](hhttps://favicon.io/favicon-converter/)
- [tinypng.com for reducing image sizes](https://tinypng.com/)
- [GitHub Pages](https://pages.github.com)

[product-screenshot]: public/thhome.png
