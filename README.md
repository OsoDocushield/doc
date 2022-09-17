# web-docushield.app
https://docushield.app code base with the administrative pannel.

# Tech Stack
    1- Strapi
    2- Next


# Setup Dev Env
    1- Clone this repo
    2- Create app with testing environment on paypal
    3- Copy keys PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET
    4- Paste it in /backend/.env file
    5- set PAYPAL_API_URL=https://api-m.sandbox.paypal.com/v1/oauth2/token
    6- set PAYPAL_ORDER_URL=https://api-m.sandbox.paypal.com/v2
    7- Paste PAYPAL_CLIENT_ID in /frontend/utils/util.js file
    8- For Newsletter, create Convert Kit account and create api, secret and form id and paste it in strapi admin dashboard setting page
# Setup Live Env
    1- Clone this repo
    2- Create app with live environment on paypal
    3- Copy keys PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET
    4- Paste it in /backend/.env file
    5- set PAYPAL_API_URL=https://api-m.paypal.com/v1/oauth2/token
    6- set PAYPAL_ORDER_URL=https://api-m.paypal.com/v2
    7- Paste PAYPAL_CLIENT_ID in /frontend/utils/util.js file
    8- Paste strapi Server Url in /frontend/utils/util.js file
    9- For Newsletter, create Convert Kit account and create api, secret and form id and paste it in strapi admin dashboard setting page