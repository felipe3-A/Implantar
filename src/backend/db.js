// import mysql from 'mysql'
import { Sequelize } from 'sequelize';

// export const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'tusena'
// });


export const connection = new Sequelize('tusena', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// connection.connect((error) => {
//   if (error) {
//     console.error('Error de conexión: ' + error.stack);
//     return;
//   }
//   console.log('Conexión establecida con éxito');
// });


