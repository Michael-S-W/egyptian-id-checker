import { useState } from "react";
import "./App.css";

function App() {
  const [egId, setEgId] = useState("");
  const [checker, setChecker] = useState('')
  const [details, setDetails] = useState({
    gender:'',
    city:'',
    bday:''
  })
//   const governoratesCode = {
//     "Cairo":"01",
//     "Alexandria":"02",
//     "Port Said":'03',
//     "Suez":'04',
//     "Damietta":'11',
//     "Dakahlia":'12',
//     "Sharkia":'13',
//     "Qalyubia":'14',
//     "Kafr El Sheikh":'15',
//     "Gharbia":'16',
//     "Monufia":'17',
//     "Beheira":'18',
//     "Ismailia":'19',
//     "Giza":'21',
//     "Beni Suef":'22',
//     "Fayoum":'23',
//     "Minya":'24',
//     "Assiut":'25',
//     "Sohag":'26',
//     "Qena":'27',
//     "Aswan":'28',
//     "Luxor":'29',
//     "Red Sea":"31",
//     "New Valley(El Wadi El Gedid)":"32",
//     "Matrouh":"33",
//     "North Sinai":"34",
//     "South Sinai":'35',
//     "Born Abroad":'88',
// };
  const govCode = [
    "01",
    "02",
    '03',
    '04',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    "31",
    "32",
    "33",
    "34",
    '35',
    '88',
];
  const govs = [
    "Cairo",
    "Alexandria",
    "Port Said",
    "Suez",
    "Damietta",
    "Dakahlia",
    "Sharkia",
    "Qalyubia",
    "Kafr El Sheikh",
    "Gharbia",
    "Monufia",
    "Beheira",
    "Ismailia",
    "Giza",
    "Beni Suef",
    "Fayoum",
    "Minya",
    "Assiut",
    "Sohag",
    "Qena",
    "Aswan",
    "Luxor",
    "Red Sea",
    "New Valley(El Wadi El Gedid)",
    "Matrouh",
    "North Sinai",
    "South Sinai",
    "Born Abroad",
];

  const handleinput = (e) => {
    setEgId(() => e.target.value);
  };

  const checkKey = (e) => {
    ["e", "E", "+", "-", "*"].includes(e.key) && e.preventDefault();
  };

  const checkDetails = ()=>{
    const monthsNames = [  
      "January",  
      "February",  
      "March",  
      "April",  
      "May",  
      "June",  
      "July",  
      "August",  
      "September",  
      "October",  
      "November",  
      "December"  
  ];
    let bcentury = String(Number(egId[0])+17);
    let byear = bcentury.concat(egId[1]+egId[2])
    let bmonth = monthsNames[Number(egId[3]+egId[4])-1]
    let bday = egId[5]+egId[6]
    let fullDate = `${bday}-${bmonth}-${byear}`
    if(byear < new Date().getFullYear()-110){
      setChecker('Invalid ID number')
      return
    }
      setDetails(prv=>({
        ...prv,
        gender: egId[12]%2? 'Male':'Female',
        city: govs[govCode.indexOf(String(egId[7]+egId[8]))],
        bday: fullDate
      }))
    
  }
  const handleCheck = ()=>{
    if(egId.length !== 14 ){
      setChecker('Invalid ID number')
      return
    }
    setChecker('Valid')
    checkDetails()
  }
  return (
    <div className="App">
      <h1>Egyptian ID Checker</h1>
      <input
        type="number"
        id="eg-id"
        onKeyDown={checkKey}
        value={egId}
        minLength={14}
        onChange={handleinput}
      />
      <button id="check-btn" onClick={handleCheck}>Check</button>

      {checker&&<p style={checker==="Valid"?{display:"none"}:{display:"block",color: "red"}}>{checker}</p>}
      {checker==="Valid"&&<p>Gender: <span>{details.gender}</span></p>}
      {checker==="Valid"&&<p>City: <span>{details.city}</span></p>}
      {checker==="Valid"&&<p>Birthdate: <span>{details.bday}</span></p>}
    </div>
  );
}

export default App;
