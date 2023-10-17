import PostModel from "../models/post.js";



async function findAll(req, res) {
  try {
    const post = await PostModel.findAll();
    res.json(post);
  } catch (error) {
    res.status(500).json({ mensagem: "Ops... Ocorreu um erro" });
  }
}

function findOne(req, res) {
  try {
    PostModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch (error) {
    res.status(500).json({ mensagem: "Ops... Ocorreu um erro" });
  }
}

async function add(req, res) {
  try {
    upload.single("foto")(req, res), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ mensagem: "Erro no upload de imagem" });
      }

      PostModel.create({
        titulo: req.body.titulo,
        data: Date.now(),
        autor: req.body.autor,
        conteudo: req.body.conteudo,
      }).then((result) => res.json(result));
    } } catch (error) {
      res.status(500).json({ mensagem: "Ops... Ocorreu um erro" });
    }
  }


  async function update(req, res) {
    try {
      await PostModel.update(
        {
          titulo: req.body.titulo,
          autor: req.body.autor,
          conteudo: req.body.conteudo,
        },
        {
          where: {
            id: req.params.id,
          }
        }
      );

      const updatedPost = await PostModel.findByPk(req.params.id);
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ mensagem: "Ops... Ocorreu um erro" });
    }
  }

  async function deletePost(req, res) {
    try {
      await PostModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      PostModel.findAll().then((result) => res.json(result));
    } catch (error) {
      res.status(500).json({ mensagem: "Ops... Ocorreu um erro" });
    }
  }


  export default { findAll, findOne, add, update, deletePost };