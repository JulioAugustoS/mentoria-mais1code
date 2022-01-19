const app = require("./config/express")();
const port = app.get("port");

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);

  const usuarios = [];

  // GET - Busca uma informção
  // POST - Cria uma informação
  // DELETE - Deleta alguma informação
  // PUT - Atualiza alguma informação
  app.route("/usuario").get((req, res) => {
    res.status(200).json({ usuarios });
  });

  app.route("/usuario/:id").get((req, res) => {
    const { id } = req.params;

    const usuario = usuarios.find((item) => item.id === Number(id));

    res.status(200).json({ ...usuario });
  });

  app.route("/usuario").post((req, res) => {
    const body = req.body;

    usuarios.push({ ...body });

    res.status(200).json({
      message: "Usuário criado com sucesso",
    });
  });

  app.route("/usuario/:id").put((req, res) => {
    const { id } = req.params;
    const body = req.body;

    const filter = usuarios.filter((item) => item.id !== Number(id));

    usuarios.push({ ...body });

    res.status(200).json({
      message: "Usuário atualizado com sucesso",
      usuario: {
        ...body,
      },
    });
  });
});
