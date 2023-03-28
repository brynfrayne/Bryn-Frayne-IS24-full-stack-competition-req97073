const fs = require('fs');

// Helper function to read JSON files
function readJSONFile(filePath) {
  const file = fs.readFileSync(filePath);
  return JSON.parse(file);
}

// Helper function to merge data
function mergeData(products, names) {
  for (let i = 0; i < products.length; i++) {
    products[i].Developers = names[i].developers;
  }
  return products;
}

// Helper function to write JSON files
function writeJSONFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data));
}

// Read the JSON files and merge the data
const products = readJSONFile('server/data/product_list.json');
const names = readJSONFile('server/data/names.json');
const mergedData = mergeData(products, names);
writeJSONFile('server/data/mergedData.json', mergedData);

// Create a list of 10 scrum masters
function createScrumMasterList(file) {
  const parsedFile = readJSONFile(file);
  const scrumMasterList = parsedFile.map(item => item.scrumMasterName);
  return scrumMasterList.slice(0, 10);
}

const tenScrumMasters = createScrumMasterList('./server/data/mergedData.json');

// Assign a scrum master to each product
function assignScrumMaster(file) {
  const parsedFile = readJSONFile(file);
  for (let i = 0; i < parsedFile.length; i++) {
    parsedFile[i].scrumMasterName = tenScrumMasters[i % 10];
  }
  return parsedFile;
}

const assignedScrumMasters = assignScrumMaster('./server/data/mergedData.json');
writeJSONFile('./server/data/mergedData.json', assignedScrumMasters);

// Create a list of 10 developers
function createDevList(file) {
  const parsedFile = readJSONFile(file);
  const devList = [];
  for (let i = 0; i < parsedFile.length; i++) {
    devList.push(parsedFile[i].Developers);
  }
  return devList;
}

const devList = createDevList('./server/data/mergedData.json');
const tenDevs = devList.slice(0, 10);
console.log(tenDevs);

// Assign developers to each product
function assignDevs(file) {
  const parsedFile = readJSONFile(file);
  for (let i = 0; i < parsedFile.length; i++) {
    parsedFile[i].Developers = tenDevs[i % 10];
  }
  return parsedFile;
}

const assignedDevs = assignDevs('./server/data/mergedData.json');
writeJSONFile('./server/data/mergedData.json', assignedDevs);
