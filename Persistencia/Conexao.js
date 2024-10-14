import mysql from 'mysql2/promise';

//Lembre-se, nossa aplicação neste momento estará se comunicando com outra aplicação.
//Desse modo, nossa aplicação não tem controle sobre a outra.
//O que exige uma comunicação assíncrona.
export default async function conectar(){
    
    if (global.poolConexoes){
        //retorna do pool uma conexão
        return await poolConexoes.getConnection();
    }
    else{
        global.poolConexoes = await mysql.createPool({
            "host":'132.226.245.178',
            "port":3306,
<<<<<<< HEAD
            "database":"LP2_102316538",
            "user":"102316538",
            "password":"102316538",
=======
            "database":"LP2_89695",
            "user":"89695",
            "password":"89695",
>>>>>>> ebde79993be08f1e9a45ad2e1ea2d500a721efff
            "connectTimeout":60000,
            "waitForConnections":true,
            "queueLimit":20
        });
        return await global.poolConexoes.getConnection();
    }
}