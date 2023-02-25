// const getUsers = () => {
//     axios
//       .get("https://climatologia.meteochile.gob.cl/application/productos/boletinClimatologicoDiario")
//       .then((response) => {
//         const users = response;
//         console.log(`GET users`, users);
//       })
//       .catch((error) => console.error(error));
//   };
//   getUsers();

  (async = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        const users = response.data.data;
        console.log(`GET users`, users);
      })
      .catch((error) => console.error(error));
  })();