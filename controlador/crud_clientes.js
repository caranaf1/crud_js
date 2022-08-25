import espress from "express";
import { conectar} from "../modelo/db_conectar.js"
var crud_cliente=({})
crud_cliente.leer =(req,res)=>{

    conectar.query('SELECT `clientes`.`id_cliente`,nit,nombres,apellidos,direccion,telefono, date_format (fecha_naciemiento, "%d-%m-%Y") as fecha_naciemiento FROM clientes;',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('clientes/index',{resultado:results})
        }

           
    })
};

    crud_cliente.cud = (req,res)=>{
        const btn_crear = req.body.btn_crear;
        const btn_actualizar = req.body.btn_actualizar;
        const btn_eliminar = req.body.btn_eliminar;
        const id_cliente = req.txt_id;
        const nit = req.body.txt_nit;
        const nombres = req.body.txt_nombres;
        const apellidos = req.body.txt_apellidos;
        const direccion = req.body.txt_direccion;
        const telefono = req.body.txt_telefono;
        const fecha_naciemiento = req.body.txt_fechanac;
        if(btn_crear){
            conectar.query('INSERT INTO set ?', {nit:nit,nombres:nombres,apellidos:apellidos,
                direccion:direccion,telefono:telefono,fecha_naciemiento:fecha_naciemiento},(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.redirect('/')
                    }
                


         })
        
    };
        if(btn_actualizar){
        
            conectar.query('update clientes set ? where id_cliente = ?', [{nit:nit,nombres:nombres,apellidos:apellidos,
                direccion:direccion,telefono:telefono,fecha_naciemiento:fecha_naciemiento}, id_cliente ],(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.redirect('/')
                    }
                


         })
        
        
        }
        if(btn_eliminar){
            conectar.query('delete from clientes set ? where id_cliente = ?', [ id_cliente ],(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.redirect('/')
                    }
                


         })
        }
    
    
    }



export{crud_cliente}