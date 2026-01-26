import fs from 'fs';
import os from 'os';
import path from 'path';

const homedir= os.homedir();
console.log("Home Directory:", homedir);

const startathersync = () => {
 console.log("Starting AtherSync Service...");
 const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
 console.log(` Memory: ${freeMemGB} GB`);
 if((freeMemGB) < 2 ){
    console.log("Insufficient memory ...");
    
 }
}
startathersync();