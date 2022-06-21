import Airtable from "airtable";

//create a new Airtable object in React

//api key
//base id 
const base = new Airtable({ apiKey: "keywcrl4OFgUwp3fF" }).base(
  "appVrIqyZZvnKD9As"
);
// Table id
let table = base.getTable("tblT5E0J9ffT0dasc");

//loading the data
//https://www.airtable.com/developers/scripting/examples/loadingrecords
const getData = async () => {
  let query = await table.selectRecordsAsync({ fields: table.fields });
  console.log("This is the one", query.records);
};
getData();
//base endpoint to call with each request
// axios.defaults.baseURL =   'https://api.airtable.com/v0/BASE_ID/map/';
// //content type to send with all POST requests
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// //authenticate to the base with the API key
// axios.defaults.headers['Authorization'] = 'Bearer API_KEY';

export default base;
