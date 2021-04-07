async function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){ 
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql:samuel:zyk270:samuel@localhost:3306/modelo")
    console.log("Conectou no mysql");
    global.connection = connection;
    return connection;
}

async function selecionarEmpregados(){
    const conectar = await connect()
    const [rows] = await conectar.query('SELECT * FROM employees;')
    return await rows;
}

async function inserirEmpregado(empregado){
    const conectar = await connect();
        const sql = 'INSERT INTO employees(nome,bornDate,salary,position) VALUES (?,?,?,?);'
        const values=[empregado.name,empregado.bornDate,empregado.salary,empregado.position];
        return await conectar.query(sql,values);
    }

async function editarEmpregado(id,empregado){
    const conectar = await connect()
    const sql = 'UPDATE employees SET nome=?,bornDate=?,salary=?,position=? WHERE id=?';
    const values = [empregado.name,empregado.bornDate,empregado.salary,empregado.position]
    return await conectar.query(sql,values)
}
async function apagarEmpregado(id){
    const conectar = await connect()
    const sql = 'DELETE FROM employees WHERE id=?'
    return await conectar.query(sql);
}
async function selecionarEmpregado(id){
    const conectar = await connect()
    const sql = 'SELECT * FROM employees where id=?'
    const values = id;
    return await conectar.query(sql,values)
}

module.exports = {selecionarEmpregados,selecionarEmpregado,inserirEmpregado,editarEmpregado,apagarEmpregado};