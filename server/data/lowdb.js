// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');

// const adapter = new FileSync('server/data/mergedData.json');
// const db = low(adapter);

// module.exports = db;
// //
const dbPromise = import('lowdb').then(async ({ default: low }) => {
    const FileSync = (await import('lowdb/adapters/FileSync')).default;
    const adapter = new FileSync('data.json');
    const db = low(adapter);
    db.defaults({ products: [] }).write();
    return db;
  });

  module.exports = dbPromise;


