import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
// import  DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const  Table = ({isdate,isApp,isCTR,isClicks,isAdRequest,isAdResponse,isFillDate,isImpression,isRevenue,data})=>{
  return (
    <div>
        <table>
          <tr>
            {isdate & <th>date</th>}
            {isApp & <th>App</th>}
            {isClicks & <th>Clicks</th>}
            {isAdRequest & <th>Ad Request</th>}
            {isAdResponse & <th>Ad Response</th>}
            {isImpression & <th>Impression</th>}
            {isRevenue & <th>Revenue</th>}
            {isFillDate & <th>Fill DatE</th>}
            {isCTR & <th>CTR</th>}
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                {isdate & <td>{val.date}</td>}
                {isApp & <td>{val.app_id}</td>}
                {isClicks & <td>{val.clicks}</td>}
                {isAdRequest & <td>{val.requests}</td>}
                {isAdResponse & <td>{val.responses}</td>}
                {isImpression & <td>{val.impressions}</td>}
                {isRevenue & <td>{val.revenue}</td>}
                {isFillDate & <td>{val.fill_date}</td>}
                {isCTR & <td>{val.ctr}</td>}
              </tr>
            )
          })}
        </table>
        </div>
  )
}

function App() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('2021-06-01');
  const [endDate, setEndDate] = useState('2021-06-05');
  const [isdate, setIsDate] = useState(false);
  const [isApp, setIsApp] = useState(false);
  const [isClicks, setIsClicks] = useState(false);
  const [isAdRequest, setIsAdRequest] = useState(false);
  const [isAdResponse, setIsAdRespose] = useState(false);
  const [isImpression, setIsImpression] = useState(false);
  const [isRevenue, setIsRevenue] = useState(false);
  const [isFillDate, setIsFillDate] = useState(false);
  const [isCTR, setIsCTR] = useState(false);

  useEffect(() => {
    axios.get(`https://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`)
      .then(res => {
        //console.log(res)
        //console.log(res.data)
        setData(res.data.data)
      }).catch((error) => {
        console.log(error);
      })
    //console.log(data)
  }, [startDate, endDate])

  const handleStartDate = e => {
    setStartDate(e.target.value);
    //console.log(startDate)

  }

  const handleEndDate = e => {
    setEndDate(e.target.value);
    //console.log(endDate);
  }
  //console.log(startDate)
  //console.log(endDate)
  const handleDate = () => {
    setIsDate(!isdate);
    //console.log(isToggled);
  }
  const handleApp = () => {
    setIsApp(!isApp);
    //console.log(isToggled);
  }
  const handleClicks = () => {
    setIsClicks(!isClicks);
    //console.log(isToggled);
  }

  const handleAdRequest = () => {
    setIsAdRequest(!isAdRequest);
    //console.log(isToggled);
  }
  const handleAdResponse = () => {
    setIsAdRespose(!isAdResponse);
    //console.log(isToggled);
  }
  const handleImpression = () => {
    setIsImpression(!isImpression);
    //console.log(isToggled);
  }
  const handleRevenue = () => {
    setIsRevenue(!isRevenue);
    //console.log(isToggled);
  }
  const handleFillDate = () => {
    setIsFillDate(!isFillDate);
    //console.log(isToggled);
  }
  const handleCTR = () => {
    setIsCTR(!isCTR);
    //console.log(isToggled);
  }
  return (
    <div className="App">
      <div style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content'
      }}>

        <TextField
          id="startdate"
          label="Start Date"
          type="date"
          defaultValue="2021-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleStartDate}
        />
      </div>
      <div style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content'
      }}>

        <TextField
          id="enddate"
          label="End Date"
          type="date"
          defaultValue="2021-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleEndDate}
        />
      </div>
      {/* <DatePicker
       selected={startDate}
       dateFormat="yyyy-mm-dd"
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={handleStartDate}
     />
     <DatePicker
       selected={endDate}
       dateFormat="yyyy-mm-dd"
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={hand}
     /> */}
      <div>

        <button onClick={handleDate} className={isdate ? "toggled" : "noToggle"}>
          date
        </button>
        <button onClick={handleApp} className={isApp ? "toggled" : "noToggle"}>
          App
        </button>
        <button onClick={handleClicks} className={isClicks ? "toggled" : "noToggle"}>
          clicks
        </button>
        <button onClick={handleAdRequest} className={isAdRequest ? "toggled" : "noToggle"}>
          Ad Request
        </button>
        <button onClick={handleAdResponse} className={isAdResponse ? "toggled" : "noToggle"}>
          Ad response
        </button>
        <button onClick={handleImpression} className={isImpression ? "toggled" : "noToggle"}>
          Impression
        </button>
        <button onClick={handleRevenue} className={isRevenue ? "toggled" : "noToggle"}>
          Revenue
        </button>
        <button onClick={handleFillDate} className={isFillDate ? "toggled" : "noToggle"}>
          Fill Date
        </button>
        <button onClick={handleCTR} className={isCTR ? "toggled" : "noToggle"}>
          CTR
        </button>
        <div>
          <button onClick={<Table/>}>
            Apply Changes
          </button>
        </div>


      </div>
      <div>
       
        <Table isdate={isdate} isApp={isApp} isAdRequest={isAdRequest} isAdResponse={isAdResponse} isClicks={isClicks} isImpression={isImpression} isRevenue={isRevenue} isFillDate={isFillDate} isCTR={isCTR} data={data}/>
      </div>
    </div>
  );
}

export default App;
