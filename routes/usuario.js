const express = require("express");
const router = express.Router();
const Usuarios = require('../models/Usuarios')




router.get("/",(req,res)=>{
    Usuarios.findAll().then((response)=>{
      return res.status(200).json({
        codigo: 200,
        status: "sucesso",
        mensagem: "Ação Realizada com sucesso",
        dados: response
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
  Usuarios.findOne({where:{id_usuario:req.params.id}}).then((response)=>{
    return res.status(200).json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: response
    })
  }).catch((err)=>{
    return res.status(400).json({
      codigo:400,
      status:"error",
      mensagem: err
    })
  })

})

router.post("/",(req,res)=>{
  Usuarios.findOne({where:{email:req.body.email}}).then((resp)=>{
    if(resp && resp.email===req.body.email){
      return res.status(200).json({mensagem:"Usuario já cadastrado!"})
    }
    Usuarios.findOne({where:{cpf:req.body.cpf}}).then((respo)=>{
      if(respo && respo.cpf===req.body.cpf){
        return res.status(200).json({mensagem:"Usuario já cadastrado!"})
      }
      Usuarios.create(
        { 
          nome:req.body.nome,
          sobrenome: req.body.sobrenome,
          email: req.body.email,
          telefone: req.body.telefone,
          cpf: req.body.cpf
        }
      )
      .then((response)=>{
        return res.status(200).json({
          codigo: 200,
          status: "sucesso",
          mensagem: "Ação Realizada com sucesso",
          dados: response
        })
      }).catch((err)=>{
        return res.status(400).json({
          codigo:400,
          status:"error",
          mensagem: err
        })
      })
    })


  }
  )

})

router.delete("/:id",(req,res)=>{
  Usuarios.findOne({where:{id_usuario:req.params.id}}).then((response)=>{
    response.destroy()
    return res.status(200).json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: response
    })
  })
  .catch((err)=>{
    return res.status(400).json({
      codigo:400,
      status:"error",
      mensagem: err
    })
  })

})

router.put("/:id",(req,res)=>{
  Usuarios.findOne({where:{id_usuario:req.params.id}}).then((response)=>{
    response.set(
      { 
        nome:req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        telefone: req.body.telefone,
        cpf: req.body.cpf
      }
    )
      response.save()
      return res.status(200).json({
        codigo: 200,
        status: "sucesso",
        mensagem: "Ação Realizada com sucesso",
        dados: response
      })

  }) 
  .catch((err)=>{
    return res.status(400).json({
      codigo:400,
      status:"error",
      mensagem: err
    })
  })
  

})


module.exports = router


