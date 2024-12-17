import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
//getAllRules

app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
  console.log('endpoint funcionando...');
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

app.use('/api', routes);

// export default app;