const bcrypt = require('bcrypt');

// Substitua 'your_password' pela senha que você quer gerar o hash
const password = 'teste123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
        console.error('Erro ao gerar hash:', err);
    } else {
        console.log('Hash gerado:', hash);
    }
});
