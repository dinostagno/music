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

//   (async = () => {
//     axios
//       .get("https://reqres.in/api/users")
//       .then((response) => {
//         const users = response.data.data;
//         console.log(`GET users`, users);
//       })
//       .catch((error) => console.error(error));
//   })();

const getAccounts = () => {
    // axios
    //   .post("https://dinostagno-dev-ed.my.salesforce.com/services/apexrest/AccountsV2/0012E00001ofxRyQAI")
    //   .then((response) => {

    //   })
    //   .catch((error) => console.error());


      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 00D2E000000mpVn!ARIAQHLertmUGnNzKfM472gtXin44RKeXnViqObmjmgXputuhlfqDcKrekadxwpIauWQfiqQQJmeu32aLwb.MTe3NHcEf6tb'
      }
      
      axios.get("https://dinostagno-dev-ed.my.salesforce.com/services/apexrest/AccountsV2/0012E00001ofxRyQAI", {
          headers: headers
        })
        .then((response) => {
          dispatch({
            type: FOUND_USER,
            data: response.data[0]
          })
        })
        .catch((error) => {
          dispatch({
            type: ERROR_FINDING_USER
          })
        })
}
getAccounts();