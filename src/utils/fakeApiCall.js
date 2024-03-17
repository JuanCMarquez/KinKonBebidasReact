export const fakeApiCall = (mock) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock);
    }, 1000);
  });
};

export const fakeApiCallById = (mock, id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock.productos.find(prod => prod.id.toString() === id))
    }, 1000);
  });
};

export const fakeApiCallByCategoria = (mock, categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock.productos.find(prod => prod.categoria.toString() === categoria))
    }, 1000);
  });
};



