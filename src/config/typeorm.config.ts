import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//TypeORMModuleOptions:an interface that shows us all options related to configuring our database.

//synchronize:“true” means it should sync up with the schema in the postgreSQL database.
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '29061998',
  database: 'authuser',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
