const moveZeros = arr => {
  return [
    ...arr.filter(element => element !== 0),
    ...arr.filter(element => element === 0)
  ];
};
