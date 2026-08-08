const fs = require('fs');

let fileContent = fs.readFileSync('src/App.tsx', 'utf8');

fileContent = fileContent.replace(
  '}, [isSignedIn, user]);',
  '}, [isSignedIn, user?.id]);'
);

fs.writeFileSync('src/App.tsx', fileContent);
