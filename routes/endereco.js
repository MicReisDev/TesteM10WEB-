const express = require("express");
const router = express.Router();
const Usuarios = require('../models/Usuarios')
const Endereco = require('../models/Endereco')


router.get("/usuario/:id_usuario",(req,res)=>{
  Endereco.findAll({where:{id_usuario:req.params.id_usuario}}).then((response)=>{
    return res.status(200).json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados:response
    })
  })
    .then((err)=>{
      return res.status(400).json({
        codigo:400,
        status:"error",
        mensagem: err
      })
    })
})

router.get("/:id",(req,res)=>{
  Endereco.findAll({where:{id_endereco_usuario:req.params.id}}).then((response)=>{
    return res.status(200).json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados:response
    })
  })
    .then((err)=>{
      return res.status(400).json({
        codigo:400,
        status:"error",
        mensagem: err
      })
    })
})

router.post("/",(req,res)=>{
Endereco.create({
  id_usuario:req.body.id_usuario,
  logradouro:req.body.logradouro,
  numero:req.body.numero,
  cidade:req.body.cidade,
  uf:req.body.uf,
  cep:req.body.cep,
  bairro:req.body.bairro,
  complemento:req.body.complemento
}).then((response)=>{
  return res.status(200).json({
    codigo: 200,
    status: "sucesso",
    mensagem: "Ação Realizada com sucesso",
    dados:response
  })
})
  .then((err)=>{
    return res.status(400).json({
      codigo:400,
      status:"error",
      mensagem: err
    })
  })

})

router.delete("/:id", (req,res)=>{
  Endereco.findOne({where:{id_endereco_usuario:req.params.id}}).then((response)=>{
    response.destroy()
    return res.status(200).json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados:response
    })
  })
    .then((err)=>{
      return res.status(400).json({
        codigo:400,
        status:"error",
        mensagem: err
      })
    })
  
})

router.put("/:id", (req,res)=>{
  Endereco.findOne({where:{id_endereco_usuario:req.params.id}}).then((response)=>{
    response.set({
      logradouro:req.body.logradouro,
      numero:req.body.numero,
      cidade:req.body.cidade,
      uf:req.body.uf,
      cep:req.body.cep,
      bairro:req.body.bairro,
      complemento:req.body.complemento
    }     
    )
    return res.status(200).json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados:response
    })
  })
    .then((err)=>{
      return res.status(400).json({
        codigo:400,
        status:"error",
        mensagem: err
      })
    })
})


module.exports = router