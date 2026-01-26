import fs from 'fs';
import os from 'os';
import path from 'path';

const __dirname = import.meta.dirname;
console.log("Home Directory:", homedir);
const libraryPath= path.join(__dirname,"OneDrive", "Desktop", "music-library" );
const filePath= path.join(__dirname, "server-logs.txt" );

const startathersync = () => {
 console.log("Starting AtherSync Service...");
 const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
 console.log(` Memory: ${freeMemGB} GB`);
 if((freeMemGB) < 2 ){
    console.log("Insufficient memory ...");
 }
}
startathersync();