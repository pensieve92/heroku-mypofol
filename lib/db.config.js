import MySQL from 'mysql';

const connection = MySQL.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',    
});

export default async function DBConfig() {
    let conn, code;
    try {        
        connection.query('SELECT * from member', function(err, row, fields){
            if(!err) console.log('The solution is: ', rows);
            else console.log('Error while performing Query.', err);
        });

        connection.end();
        console.log('DB Initialized!');
        code = 0;
    } catch (error) {
        code =1;        
    }
}