import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { schema } from './graphql/schema.js';
import { root } from './graphql/resolvers.js';
import { authMiddleware } from './auth/middleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/graphql', (req, res) => {
  const context = authMiddleware(req);
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    context
  })(req, res);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/graphql`));
