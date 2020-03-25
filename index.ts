import express from 'express';

const PORT = process.env.PORT || 5000;
const server = express();

server.get('/', (_: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
