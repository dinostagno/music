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

//////////////////////
 const getToken = () => {
     const data = {
        "grant_type": "password",
        "client_id": "3MVG9ZF4bs_.MKuhz4g8P5ekGrXZkNs0a2sba0CwY.6lhSXpZM4H.CM6okSQmxTiF0DMhGyMza2a_E4zfHbKn",    
        "client_secret": "5CC14D5C61AB61C49E16DE550455A03AFB12B578F88B32D548BD5585F5707E54",  
        "username": "dpaolostagno@gmail.com", 
        "password": "Arch@2023Q5ml4B042lSHP7mJX7A6Tv2V6"  
      }
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': 'https://github.com/'
      }
      axios.post("https://login.salesforce.com/services/oauth2/token", {data: data}, {
        headers: headers
      })
      .then((response) => {
        console.log(JSON.stringify(response.data[0]));
      })
      .catch((error) => {
         console.log('error');
      })  
 }
 getToken();