const fs = require('fs');

const fileContent = fs.readFileSync('src/lib/sync.ts', 'utf8');

const updated = fileContent
  .replace(
    'if (!isPopulating && syncKeys.includes(key)) {',
    'if (!isPopulating && syncKeys.includes(key) && key !== "totalTimeSpent") {'
  )
  .replace(
    'let syncTimeout: any;',
    'let syncTimeout: any;\nlet lastSyncString = "";\nlet lastSyncTime = 0;'
  )
  .replace(
    '  try {\n    const userDocRef = doc(db, \'user_data\', userId);',
    `  const dataString = JSON.stringify(data);
  const now = Date.now();
  if (dataString === lastSyncString && (now - lastSyncTime < 300000)) {
    return; // Skip if no changes or less than 5 min since last sync of identical data
  }
  lastSyncString = dataString;
  lastSyncTime = now;

  try {
    const userDocRef = doc(db, 'user_data', userId);`
  );

fs.writeFileSync('src/lib/sync.ts', updated);
