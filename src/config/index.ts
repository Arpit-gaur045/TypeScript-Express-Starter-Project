// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
}

function loadEnv() {
    dotenv.config();
    //ye line .env se environment variables uthayegi aur unhe eak object mein daal degi
    // jiska naam hoga "process.env" and hum ab variables ko access karne keliye
    //is object ka use karsakte hai and neeche vahi kiya haiki proess.env.PORT 
    // likhke PORT environment variable ko access kiya hai.
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};