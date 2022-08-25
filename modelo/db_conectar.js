
import mysql from 'mysql'
var conectar = mysql.createConnection({ 
    host: 'localhost',
    user: 'usr_empresa',
    password: 'Empresa@123',
    database: 'db_empresa'
});
conectar.connect(function(err){
    if(err){
        console.error('Error de conexion: ' + err.stack)
        return; 
     }
        console.log('Conexion exitosa ID: ' + conectar.threadId);
        
    });
export{conectar}