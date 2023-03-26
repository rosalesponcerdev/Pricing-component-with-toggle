rm -r /etc/nginx/html/pricing-component-with-toggle/
mkdir /etc/nginx/html/pricing-component-with-toggle

mkdir /etc/nginx/html/pricing-component-with-toggle/images /etc/nginx/html/pricing-component-with-toggle/dist /etc/nginx/html/pricing-component-with-toggle/dist/css

cp -rf ./dist/css/* /etc/nginx/html/pricing-component-with-toggle/dist/css/
cp -rf ./images/* /etc/nginx/html/pricing-component-with-toggle/images/

cp -rf ./app.js /etc/nginx/html/pricing-component-with-toggle/
cp -rf ./index.html /etc/nginx/html/pricing-component-with-toggle/