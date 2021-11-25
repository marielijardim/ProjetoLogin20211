const Cliente = require("../model/Cliente");
const { Op } = require("sequelize");


async function abreadd(req, res){
   res.render("cliente/add.ejs",{});

}

async function add(req, res){
   const {nome, sobrenome, genero, endereco, cidade, estado, email, senha} = req.body;

    if(req.file != undefined ){
        var foto = req.file.filename;
    }

   await Cliente.create({nome, sobrenome, genero, endereco, cidade, estado, email, senha, foto}).then((cliente) => {
    req.flash(  
        "msg",
        " O cliente "  + cliente.nome +  " foi adicionado com sucesso! ");
    
   });
   res.redirect("/admin/cliente");

}

async function list(req, res){
    const clientes = await Cliente.findAll();
        res.render("cliente/list.ejs",{Clientes: clientes, msg: req.flash("msg")});  

}

async function  filtro(req, res){
     const pesquisar = req.body.pesquisar;
     const clientes = await Cliente.findAll({
         where: { nome: {
            [Op.iLike]: "%" +pesquisar+ "%"
         }},
     });
     res.render("cliente/list.ejs",{Clientes: clientes, msg: req.flash("msg")});
}
   

async function abreedit(req, res){
    const cliente = await Cliente.findByPk(req.params.id);
    res.render("cliente/edt.ejs",{ cliente: cliente });
}

async function edit(req, res){
    const cliente = await Cliente.findByPk(req.params.id);
     
    
    cliente.nome = req.body.nome;
    cliente.sobrenome = req.body.sobrenome;
    cliente.genero = req.body.genero;
    cliente.endereco = req.body.endereco;
    cliente.cidade = req.body.cidade;
    cliente.estado = req.body.estado;
    cliente.email = req.body.email;
    cliente.senha = req.body.senha;

    if(req.file != undefined){
        cliente.foto = req.file.filename;
    }

    cliente.save().then((cliente) => {
        req.flash("msg", "O cliente " +cliente.nome+ "foi alterado com sucesso!");
        res.redirect("/admin/cliente");
    });
}

async function del(req, res){
    const deletar  = req.params.id;
    Cliente.destroy({ where: {id: deletar }}).then(() => {
        req.flash("msg", " O cliente foi deletado com sucesso!");
        res.redirect("/admin/cliente");
    });
}

module.exports = {abreadd, add, list, filtro, abreedit, edit, del};