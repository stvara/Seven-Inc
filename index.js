(async () => {
const db = require("./db");
console.log("come");
const empregados = await db.selecionarEmpregados();
console.log(empregados)


})();




