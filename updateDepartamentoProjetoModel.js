const db = require('./models')

const departamentoProjetoModel = db.departamentoProjeto
const projetosModel = db.projetos

projetosModel.findAll()
  .then( projetos => {
    projetos.forEach( projeto => {
      departamentoProjetoModel.findOrCreate({
        where: { 
          departamentoId: projeto.departamentoId,
          projetoId: projeto.id
        }
      })
      .then(() => console.log("Departamento projeto encontrado ou criado com sucesso") )
      .catch( err => console.error("Erro ao buscar ou criar departamento projeto") )
    })
  })
  .catch( err => console.error("Erro ao buscar projetos") )