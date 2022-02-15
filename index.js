const {Pool, Client} = require(`pg`)

const config = {
    user:"postgres",
    host:"localhost",
    database:"northwind",
    password:"556212177",
    port:5432
}

async function poolData (){
    const pool = new Pool(config);
    const employees = await pool.query(`
    SELECT
     employee_id as Id,
     CONCAT(title_of_courtesy,' ',first_name,' ',last_name) as Employee,
     home_phone as Phone,
     photo as Photo
    from employees`);
    const getEmployees = JSON.stringify(employees.rows,null," ");
    return getEmployees
    console.log(getEmployees);   
}

