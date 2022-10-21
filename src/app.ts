/* request = o que esta recebendo 
   npm response =  */
import  express  from "express";
import { AppDataSource } from "./database/AppDataSource";
import { personRouter } from "./routes/PersonRoutes";

AppDataSource.initialize()
    .then( () => console.log('Data source Has been Initialized!'))
    .catch((e) => console.error('Error diring Data Source inicialization', e));

const app = express();
app.use(express.json());

app.use('/api/person', personRouter)
app.use('/api', (req, res) => {
    return res.json({ message: 'Hello World!'});
});

export { app };