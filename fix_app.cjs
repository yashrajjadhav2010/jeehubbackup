const fs = require('fs');

let fileContent = fs.readFileSync('src/App.tsx', 'utf8');

fileContent = fileContent.replace(
  'if (user.fullName) {\n          window.localStorage.setItem("operatorName", user.fullName);\n        } else if (user.primaryEmailAddress?.emailAddress) {\n          window.localStorage.setItem("operatorName", user.primaryEmailAddress.emailAddress.split("@")[0]);\n        }',
  `if (user.fullName) {
          if (window.localStorage.getItem("operatorName") !== user.fullName) window.localStorage.setItem("operatorName", user.fullName);
        } else if (user.primaryEmailAddress?.emailAddress) {
          const emailName = user.primaryEmailAddress.emailAddress.split("@")[0];
          if (window.localStorage.getItem("operatorName") !== emailName) window.localStorage.setItem("operatorName", emailName);
        }`
);

fileContent = fileContent.replace(
  'if (user.imageUrl) {\n          window.localStorage.setItem("operatorPfp", user.imageUrl);\n        }',
  `if (user.imageUrl) {
          if (window.localStorage.getItem("operatorPfp") !== user.imageUrl) window.localStorage.setItem("operatorPfp", user.imageUrl);
        }`
);

fs.writeFileSync('src/App.tsx', fileContent);
