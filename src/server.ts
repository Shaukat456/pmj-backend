import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import homeRoutes from './routes/homeRoutes';

const app = express();
const port = 80 || process.env.PORT;

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

// Routes
app.use('/', homeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
