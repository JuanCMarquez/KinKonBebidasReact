export const fakeApiCall = (mock, categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!categoryId) {
        resolve(mock)
      }
      resolve(mock.productos.filter((prod) => prod.categoria.toString() === categoryId))
    }
      , 1000)
  })
}