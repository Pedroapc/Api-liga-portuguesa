module.exports = app => {
    const controlador = require("../controladores/controller.js");
  
    var router = require("express").Router();
 
    // Cria um novo utilizador
    router.post("/registar", controlador.registar);
  
    // Rota para login - tem de ser POST para não vir user e pass na URL
    router.post("/login", controlador.login);

    // Rota para verificar e ativar o utilizador
    router.get("/auth/confirm/:confirmationCode", controlador.verificaUtilizador)
   
    router.get("/benfica", controlador.benfica);
    router.get("/sporting", controlador.sporting);
    router.get("/porto", controlador.porto);
    router.get("/classificacao", controlador.classificacao);



    app.use('/api', router);
  };
  