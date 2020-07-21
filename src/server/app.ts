import App from './bootstrap/server';

const PORT = parseInt(process.env.PORT as string, 10) || 3001;

/* istanbul ignore if */
const server = App.listen(PORT, () =>
  console.log(`server listening on port ${PORT}!`)
);

const exitHandler = (errorType: string) => {
  console.info(`\n${errorType} received.`);
  console.log('Closing http server.');
  server.close(async () => {
    console.log('Http server closed.');
  });
};

//Graceful shutdown
process.on('SIGINT', async () => exitHandler('SIGINT'));
process.on('SIGTERM', async () => exitHandler('SIGTERM'));
process.on('unhandledRejection', async () => exitHandler('unhandledRejection'));
process.on('uncaughtException', async () => exitHandler('uncaughtException'));

export default App;
