const fibonacci = (n) => {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const doFib = (iterations) =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    const result = fibonacci(iterations);
    console.log(`doFib done in ${Date.now() - start}ms`);
  });

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);
  console.log(`Final result is ${values}`);
  console.log(`Total execution time is ${Date.now() - start}ms`);
};

main();
