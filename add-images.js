const fs   = require('fs');
const path = require('path');

const filePath  = path.join(__dirname, 'public', 'resource.json');
const resources = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const updated = resources.map(r => ({
  ...r,
  image: `https://source.unsplash.com/300x150/?${encodeURIComponent(r.name)}`
}));

fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`✅ Injected "image" into ${updated.length} resources.`);
