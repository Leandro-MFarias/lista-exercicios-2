/*
  6. Memoization
  Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações
*/

function memoize(fn) {
  // Uso o Map como cache
  const cache = new Map();

  return function (...args) {
    // converto os args em uma String para usar como chave
    const key = JSON.stringify(args);

    // Se já existe no cache uso o resultado armazenado
    if (cache.has(key)) return cache.get(key);

    // chamo a function e armazero em uma var
    // Depois adiciono o resultado no cache com .set
    const resultFn = fn(...args);
    cache.set(key, resultFn);

    return resultFn;
  };
}

function fatorial(n) {
  if (n === 0) return 1;
  if (n < 0) return;

  return n * fatorial(n - 1);
}

const memo = memoize((n) => {
  if (n === 0) return 1;
  if (n < 0) return;

  return n * memo(n - 1);
});

console.time("MEMO Fatorial");
console.log("Memo: ", memo(150));
console.timeEnd("MEMO Fatorial");

console.time("Recursivo Fatorial");
console.log("Recursivo: ", fatorial(150));
console.timeEnd("Recursivo Fatorial");

console.time("MEMO 2 Fatorial");
console.log("Memo2: ", memo(150));
console.timeEnd("MEMO 2 Fatorial");

console.log("\n");
/////////////////////////////////////////////////////////////////

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFib = memoize(function fibonacci(n) {
  if (n < 2) return n;
  return fastFib(n - 1) + fastFib(n - 2);
});

console.time("Memo Fib");
console.log("Memo Fib", fastFib(40))
console.timeEnd("Memo Fib");

console.time("Recursivo Fib");
console.log("Recursivo Fib", fibonacci(40))
console.timeEnd("Recursivo Fib");
