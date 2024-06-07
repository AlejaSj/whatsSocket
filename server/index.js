import express from 'express'
import logger from 'morgan'
import {Server} from 'socket.io'
import {createServer} from 'node:http'
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';



const port = process.env.PORT ?? 9877

const app = express()
const server = createServer(app)
const io = new Server(server)

const dbPromise = open({
    filename: 'chat.db',
    driver: sqlite3.Database
});


setupDatabase();

async function setupDatabase() {
    const db = await dbPromise;
    await db.exec(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        autor TEXT,
        message TEXT     
    )`);
}


io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado');

    // Enviar mensajes anteriores al cliente
    const db = await dbPromise;
    const messages = await db.all('SELECT autor, message  FROM messages');
    socket.emit('previousMessages', messages);

    // Escuchar nuevos mensajes
    socket.on('chatMessage', async ({autor, message}) => {
        const db = await dbPromise;
        await db.run('INSERT INTO messages (autor, message)  VALUES (?,?)', [autor,message]);
        io.emit('chatMessage', {autor,message});
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});


app.use(logger('dev'))


app.get('/',(req,res) =>{
   res.sendFile(process.cwd()+ '/client/index.html')
})

server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})