import { DataSource } from 'typeorm';
import config from './ormconfig';

const dataSource = new DataSource(config);
dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default dataSource;
