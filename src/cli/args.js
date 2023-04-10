const parseArgs = () => {
  const argArr = process.argv.slice(2);
  const propNamesArr = [];
  const valuesArr = [];
  const iterator = argArr.keys();

  for (const key of iterator) {
    if (key % 2 == 0) {
      propNamesArr.push(argArr[key]);
    } else {
      valuesArr.push(argArr[key]);
    }
  }
  propNamesArr.forEach((element) => {
    console.log(`${element} is ${valuesArr[propNamesArr.indexOf(element)]}`);
  });
};

parseArgs();
