import { getSecretFromKeyVault } from './azure/keyvault';

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/';
const DATABASE_NAME = process.env.DATABASE_NAME || 'todo';

export const getConfig = async (logger) => {
  
  const appConfig = {
    database: {
      uri: DATABASE_URL,
      options: {
        dbName: DATABASE_NAME, 
      },
    },
  };

  console.log('CONFIG: appConfig: ', appConfig);

  return appConfig;
};
