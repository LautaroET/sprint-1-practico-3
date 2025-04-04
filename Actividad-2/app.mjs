import express from 'express';

const app = express();
const PORT = 3000;

//Ruta get con parametro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile',(req,res)=>{
    const edad = req.query.edad;
    console.log('Edad recibida: ${edad}');
    res.send('Edad del perfil: ${edad}');
});

app.listen(PORT,()=>{
    console.log('Servidor corregido en http://localhost:${PORT}');
});