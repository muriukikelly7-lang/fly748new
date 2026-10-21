import { app, port } from './app.js';

app.listen(port, () => {
  console.log(`Fly 748 backend running on port ${port}`);
});

export default app;
