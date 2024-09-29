const bcrypt = require('bcrypt');

const password = 'admin123'; // Altere para 'user123' para o outro usuário
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Hashed password for '${password}': ${hash}`);
  }
});