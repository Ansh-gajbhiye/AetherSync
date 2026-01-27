import os from 'os';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log("Script file:", __filename);
const __dirname = path.dirname(__filename);
const homedir= os.homedir()
console.log(homedir);

const libraryPath= path.join(homedir,"OneDrive", "Desktop", "music-library" );
const filePath= path.join(libraryPath, "server-logs.txt" );

const startathersync = () => {
 console.log("Starting AtherSync Service...");
 const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
 console.log(` Memory: ${freeMemGB} GB`);
 if((freeMemGB) < 2 ){
    console.log("Insufficient memory ...");
 }
}
if (!fs.existsSync(libraryPath)){
   fs.mkdirSync(libraryPath);
}
fs.writeFileSync(filePath, "This is a test file for AtherSync audit log.");
startathersync();
console.log("Script directory:", __dirname);
console.log("Folder & file created successfully!");