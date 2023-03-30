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

// Go through the merged data and title case the product names
function titleCase(file) {
  const parsedFile = readJSONFile(file);
  for (let i = 0; i < parsedFile.length; i++) {
    const productName = parsedFile[i].productName;
    const productNameArray = productName.split(' ');
    const productNameArrayTitleCase = productNameArray.map((word) => word[0].toUpperCase() + word.slice(1));
    const productNameTitleCase = productNameArrayTitleCase.join(' ');
    parsedFile[i].productName = productNameTitleCase;
  }
  return parsedFile;
}

// Create a list of 10 scrum masters
function createScrumMasterList(file) {
  const parsedFile = readJSONFile(file);
  const scrumMasterList = parsedFile.map(item => item.scrumMasterName);
  return scrumMasterList.slice(0, 10);
}

// Assign a scrum master to each product
function assignScrumMaster(file) {
  const parsedFile = readJSONFile(file);
  for (let i = 0; i < parsedFile.length; i++) {
    parsedFile[i].scrumMasterName = tenScrumMasters[i % 10];
  }
  return parsedFile;
}

// Create a list of 10 developers
function createDevList(file) {
  const parsedFile = readJSONFile(file);
  const devList = [];
  for (let i = 0; i < parsedFile.length; i++) {
    devList.push(parsedFile[i].Developers);
  }
  return devList.slice(0, 10).flat().slice(0,40)

}

// Assign developers to each product
function assignDevs(file) {
  const parsedFile = readJSONFile(file);
  // go through each product
  for (let i = 0; i < parsedFile.length; i++) {
    const devList = createDevList(file);
    // create an array of 5 developers
    const projectDevs = [];
    // go through each developer
    for (let j = 0; j < 5; j++) {
      // choose a random developer from the devList
      const randomIndex = Math.floor(Math.random() * devList.length);
      const randomDev = devList[randomIndex];
      // add the developer to the projectDevs array
      projectDevs.push(randomDev);
      // remove the developer from the devList
      devList.splice(randomIndex, 1);
    }
    parsedFile[i].Developers = projectDevs;
  }
  return parsedFile;
}



// function assignDevs(file) {
//   const parsedFile = readJSONFile(file);
//   for (let i = 0; i < parsedFile.length; i++) {
//     parsedFile[i].Developers = tenDevs[i % 10];
//   }
//   return parsedFile;
// }

// Read the JSON files and merge the data
// const products = readJSONFile('server/data/product_list.json');
// const names = readJSONFile('server/data/names.json');
// const mergedData = mergeData(products, names);
// writeJSONFile('server/data/mergedData.json', mergedData);

// const titleCaseData = titleCase('server/data/mergedData.json');
// writeJSONFile('server/data/mergedData.json', titleCaseData);

// const tenScrumMasters = createScrumMasterList('./server/data/mergedData.json');
// const assignedScrumMasters = assignScrumMaster('./server/data/mergedData.json');
// writeJSONFile('./server/data/mergedData.json', assignedScrumMasters);


// const assignedDevs = assignDevs('./server/data/mergedData.json');
// writeJSONFile('./server/data/mergedData.json', assignedDevs);
// const devList = createDevList('./server/data/mergedData.json');
// const tenGroupsOfFiveDevs = devList.slice(0, 10);
// console.log(tenGroupsOfFiveDevs.length, tenGroupsOfFiveDevs[0].length);
// const fiftyDevs = tenGroupsOfFiveDevs.flat();
// console.log(fiftyDevs.length);
// console.log(fiftyDevs);
// const assignedDevs = assignDevs('./server/data/mergedData.json');
// writeJSONFile('./server/data/mergedData.json', assignedDevs);
