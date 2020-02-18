import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.SERVER_PORT;


// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));