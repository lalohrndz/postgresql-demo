const {Pool, Client} = require(`pg`)

const config = {
    user:"postgres",
    host:"localhost",
    database:"northwind",
    password:"556212177",
    port:54320
}

async function poolData (){
    const pool = new Pool(config);
    const employees = await pool.query("select employee_id as employeeID, first_name as employeeName, last_name as employeeLastName from employees");
    console.log(JSON.stringify(employees.rows[0],null,"  "));
    
}

poolData();