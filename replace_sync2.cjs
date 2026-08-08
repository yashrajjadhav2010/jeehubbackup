const fs = require('fs');

let fileContent = fs.readFileSync('src/lib/sync.ts', 'utf8');

fileContent = fileContent.replace(
  '  const dataString = JSON.stringify(data);',
  `  const dataForComparison = { ...data };
  delete dataForComparison.totalTimeSpent;
  const dataString = JSON.stringify(dataForComparison);`
);

fs.writeFileSync('src/lib/sync.ts', fileContent);
