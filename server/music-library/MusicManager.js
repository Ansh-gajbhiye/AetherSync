import os from 'os';
import path from 'path';
import fs, { readdirSync } from 'fs';
import { fileURLToPath } from 'url';

// Get the current file path and directory 
const __filename = fileURLToPath(import.meta.url);
console.log("Script file:", __filename);
const __dirname = path.dirname(__filename);

// use os module to get home directory
const homedir= os.homedir()
console.log(homedir);

//use fs.readdir to count how many files are in the home directory
fs.readdir(homedir, (err, files)=>{
 if(err){
   console.log("Unable to scan directory: " + err);
 }
 else{
   console.log(`Files in directory:${files.length}`);
 }
 
});

// Define paths for library and log file
const libraryPath= path.join(homedir,"OneDrive", "Desktop", "music-library" );
const filePath= path.join(libraryPath, "server-logs.txt" );

// Function to start AtherSync service
const startathersync = () => {
 console.log("Starting AtherSync Service...");

 // use the os module to look at the system memory 
 const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
 console.log(` Memory: ${freeMemGB} GB`);
 if((freeMemGB) < 2 ){
    console.log("Insufficient memory ...");
 }
}

// Create directory and file, then start AtherSync
if (!fs.existsSync(libraryPath)){
   fs.mkdirSync(libraryPath);
}
fs.writeFileSync(filePath, "This is a test file for AtherSync audit log.");
startathersync();

console.log("Script directory:", __dirname);
console.log("Folder & file created successfully!");