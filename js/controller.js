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
        'Authorization': 'Bearer 00D2E000000mpVn!ARIAQHLertmUGnNzKfM472gtXin44RKeXnViqObmjmgXputuhlfqDcKrekadxwpIauWQfiqQQJmeu32aLwb.MTe3NHcEf6tb',
        'Access-Control-Allow-Origin': 'https://github.com/'
      }
      
      axios.get("https://dinostagno-dev-ed.my.salesforce.com/services/apexrest/AccountsV2/0012E00001ofxRyQAI", {
          headers: headers
        })
        .then((response) => {
          console.log(JSON.stringify(response.data[0]));
        })
        .catch((error) => {
           console.log('error');
        })
}
getAccounts();