/*
  5. Debounce
  Crie function debounce(fn, delay) que receba uma função fn e um delay
  em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
*/

function login(name, password) {
  verify(name, password)
    .then((result) => {
      console.log("Sucesso: ", result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedLogin = debounce(login, 3000);

debouncedLogin("Le", "12345");
debouncedLogin("Leandro", "123");
debouncedLogin("Leandro", "12345");

function verify(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.length < 3) {
        reject("Nome precisa ter no mínimo 3 letras");
      } else if (password.length < 3) {
        reject("password precisa ter no mínimo 3 letras");
      } else {
        resolve(`Login feito nome: ${name}, senha: ${password}`);
      }
    }, 1000);
  });
}