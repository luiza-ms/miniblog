import jwt from 'jsonwebtoken';

async function login(req, res){
    const {usuario,senha} = req.body;
    
    if(usuario === process.env.USUARIO && senha === process.env.SENHA){
        const token = jwt.sign({usuario: usuario}, process.env.SECRET_KEY, {expiresIn: '1d' });
        res.json({token});
    } else {
        res.status(401).json({mensagem: "Credenciais inválidas"});
    }
}

async function verificaToken(req, res, next){
    const token = req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({mensagem: "Token não fornecido"});
    }
    jwt.verify(token, process.env.SECRET_KEY,(err,decoded) => {
        if(err){
            return res.status(401).json({mensagem: "Token inválido"});
        } 
        req.user = decoded.usuario;
        next();
    })
}

export default { login, verificaToken };
