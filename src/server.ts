/* Arquivo para iniciar o Servidor
exportando o app do arquivo app */
import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

app.listen(3000, () => console.log('Server is Running'));