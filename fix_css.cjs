const fs = require('fs');

let fileContent = fs.readFileSync('src/index.css', 'utf8');

fileContent = fileContent.replace(
  'div:has(> a[href*="clerk.com"]) {\n  display: none !important;\n}',
  ''
);

fileContent = fileContent.replace(
  '.cl-internal-b3al6g,\n.cl-internal-1dauvpw,\n.cl-internal-180wb59,\n.cl-internal-1v83q8a,',
  '.cl-internal-b3al6g,\n.cl-internal-1dauvpw,\n.cl-internal-180wb59,\n.cl-internal-1v83q8a {\n  display: none !important;\n}'
);

fs.writeFileSync('src/index.css', fileContent);
