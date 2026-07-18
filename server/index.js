import { app, port } from './app.js';

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Fly 748 backend running at http://localhost:${port}`);
  });
}

export default app;

