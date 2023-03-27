const fs = require('fs');

// Read the JSON files
const productsFile = fs.readFileSync('server/data/product_list.json')
const namesFile = fs.readFileSync('server/data/names.json');

// Parse the JSON data
const products = JSON.parse(productsFile);
const names = JSON.parse(namesFile);

// Merge the data
for (let i = 0; i < products.length; i++) {
  products[i].Developers = names[i].developers;
}

// Write the merged data to a new file
fs.writeFileSync('mergedData.json', JSON.stringify(products));
