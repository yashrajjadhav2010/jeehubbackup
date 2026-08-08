const fs = require('fs');

let fileContent = fs.readFileSync('src/App.tsx', 'utf8');

fileContent = fileContent.replace(
  '<User size={16} />',
  '<Settings size={18} />'
);

fs.writeFileSync('src/App.tsx', fileContent);
