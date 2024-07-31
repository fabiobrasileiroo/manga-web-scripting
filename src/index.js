import express from 'express';
import swaggerSetup from './swagger.js';
import scrapeRouter from './routes/scrapeRoutes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

// Middleware
app.use(express.json());

// Swagger setup
swaggerSetup(app);

// Routes
app.get('/', (req, res) => {
    res.send('Api de scrape rodando!');
});
app.use('/api', scrapeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
