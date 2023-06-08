import 'dotenv/config';
// console.log(process.env);
import Server from './models/Server.js';

const server = new Server();

server.listen();
