module.exports = [{
    method: 'GET',
    path: '/api/users/',
    handler: function(request, reply) {
        const sql = 'select * from users';
        request.pg.client.query(sql,function(err, result){
            if(err){
                console.log(err);
                return reply([]);
            }
            return reply(result.rows);
        });
    }
},{
    method: 'GET',
    path: '/api/users/{pk}',
    handler: function(request, reply) {
        const {pk} = request.params;
        const sql = 'select * from users WHERE pk=$1';
        request.pg.client.query(sql,[pk],function(err, result){
            if(err){
                console.log(err);
                return reply([]);
            }
            return reply(result.rows);
        });
    }
},{
    method: 'DELETE',
    path: '/api/users/',
    handler: function(request, reply) {
        const {pk} = request.payload;
        const sql = 'DELETE FROM users WHERE pk=$1';
        request.pg.client.query(sql,[pk],function(err, result){
            if(err){
                console.log(err);
                return reply([]);
            }
            return reply(result.rows);
        });
    }
},{
    method: 'POST',
    path: '/api/users/',
    handler: function(request, reply) {
        const {name} = request.payload;
        const {lastname} = request.payload;
        const {email} = request.payload;
        const {birthdate} = request.payload;
        const sql = 'INSERT INTO users (name, lastname, email, birthdate) VALUES ($1, $2, $3, $4) RETURNING *';
        request.pg.client.query(sql, [name, lastname, email, birthdate],function(err, result){
            if(err){
                console.log(err);
                return reply([]);
            }
            return reply(result.rows);
        });
    }
},{
    method: 'PATCH',
    path: '/api/users/',
    handler: function(request, reply) {
        const {pk} = request.payload;
        const {name} = request.payload;
        const {lastname} = request.payload;
        const {email} = request.payload;
        const {birthdate} = request.payload;
        const sql = 'UPDATE users SET name=$2, lastname=$3, email=$4, birthdate=$5 WHERE pk=$1';
        request.pg.client.query(sql, [pk,name, lastname, email, birthdate],function(err, result){
            if(err){
                console.log(err);
                return reply([]);
            }
            return reply(result.rows);
        });
    }
}

];