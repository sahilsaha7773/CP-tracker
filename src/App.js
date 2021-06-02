import React, { useEffect, useState } from 'react';
import './App.css';
import { Chart } from 'react-charts'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Cookies from 'js-cookie';
function App() {
  const [ccUsername, setCCUsername] = useState("");
  const [cfUsername, setCFUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ccData, setCCData] = useState({});
  const [cfData, setCFData] = useState({});
  const [cfSubmissions, setCFSubmissions] = useState({});
  const [cfSolvedToday, setCFSolvedToday] = useState(0);
  const [cfSubmissionsToday, setCFSubmissionsToday] = useState(0);
  const [cfTotalSolved, setCFTotalSolved] = useState(0);
  const [data, setData] = useState(React.useMemo(()=>[], []));
  const [ccSubTime, setCCSubTime] = useState();
  const [cfSubTime, setCFSubTime] = useState();
  const [cfSolveTime, setCFSolveTime] = useState();
  const [err, setErr] = useState("");
  useEffect(() => {
    if(Cookies.get('cc')!=undefined && Cookies.get('cf')!=undefined) {
      setCCUsername(Cookies.get('cc'));
      setCFUsername(Cookies.get('cf'));
    }
  },[])

  useEffect(() => {
    setData(() => {
      var ccSolved = []
      for(let x in ccData[0]?.solvedTimeline){
        var d = x.replaceAll('\\','');
        d = d.replaceAll('<', '');
        var f = d.split('/');
        var date = new Date(f[0]+'/'+f[1]+'/20'+f[2]);
        ccSolved.push([d, ccData[0].solvedTimeline[x]]);
      }
      ccSolved.reverse();
      return [{label: 'Codechef', data: ccSolved.slice(0, Math.min(ccSolved.length, 15))}];
    })

    setCCSubTime(() => {
      var ccSub = []
      for(let x in ccData[0]?.submissionsTimeline){
        var d = x.replaceAll('\\','');
        d = d.replaceAll('<', '');
        var f = d.split('/');
        var date = new Date(f[0]+'/'+f[1]+'/20'+f[2]);
        ccSub.push([d, ccData[0].submissionsTimeline[x]]);
      }
      ccSub.reverse();
      return [{label: 'Codechef', data: ccSub.slice(0, Math.min(ccSub.length, 15))}];
    })
  }, [,ccData])

  useEffect(() => {
    setCFSubTime(() => {
      var cfSub = []
      let dset = new Set();

      for(let i=0; i<cfSubmissions?.result?.length; i++){
        var d = new Date(cfSubmissions.result[i].creationTimeSeconds * 1000);
        var f = d.getDate().toString() + '/' + ((d.getMonth()+1).toString().length==1 ? ('0'+(d.getMonth()+1).toString()):(d.getMonth()+1).toString()) + '/' + d.getFullYear().toString().substr(2,2);
        dset.add(f);
        if(f in cfSub){
          cfSub[f]+=1;
        }
        else {
          cfSub[f] = 1;
        }
      }
      var refinedSub = []
      for(var f of Array.from(dset).reverse()){
        //var d = new Date(cfSubmissions.result[i].creationTimeSeconds * 1000);
        //var f = d.getDate().toString() + '/' + ((d.getMonth()+1).toString().length==1 ? ('0'+(d.getMonth()+1).toString()):(d.getMonth()+1).toString()) + '/' + d.getFullYear().toString().substr(2,2);
        refinedSub.push([f, cfSub[f]]);
      }
      refinedSub.reverse();
      return [{label: 'Codeforces', data: refinedSub.slice(0, Math.min(refinedSub.length, 15)).reverse()}];
    });

    setCFSolveTime(() => {
      var cfSub = []
      let dset = new Set();

      for(let i=0; i<cfSubmissions?.result?.length; i++){
        if(cfSubmissions.result[i].verdict==='OK'){
          var d = new Date(cfSubmissions.result[i].creationTimeSeconds * 1000);
          var f = d.getDate().toString() + '/' + ((d.getMonth()+1).toString().length==1 ? ('0'+(d.getMonth()+1).toString()):(d.getMonth()+1).toString()) + '/' + d.getFullYear().toString().substr(2,2);
          dset.add(f);
          if(f in cfSub){
            cfSub[f]+=1;
          }
          else {
            cfSub[f] = 1;
          }
        }
      }
      var refinedSub = []
      for(var f of Array.from(dset).reverse()){
        //var d = new Date(cfSubmissions.result[i].creationTimeSeconds * 1000);
        //var f = d.getDate().toString() + '/' + ((d.getMonth()+1).toString().length==1 ? ('0'+(d.getMonth()+1).toString()):(d.getMonth()+1).toString()) + '/' + d.getFullYear().toString().substr(2,2);
        refinedSub.push([f, cfSub[f]]);
      }
      refinedSub.reverse();
      return [{label: 'Codeforces', data: refinedSub.slice(0, Math.min(refinedSub.length, 15)).reverse()}];
    })
  }, [,cfSubmissions])
  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: 'Codechef',
  //       data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
  //     },
  //     {
  //       label: 'Series 2',
  //       data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
  //     }
  //   ],
  //   []
  // )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }
  function getInfo(){
    if(ccUsername==="" || cfUsername===""){
      setErr("Usernames can't be empty");
    }
    else {
      setErr("");
      Cookies.set('cc', ccUsername);
      Cookies.set('cf', cfUsername);
      setSubmitted(true);
      setIsLoading(true);
      const url = process.env.BASE_URL || 'https://cp-apis.herokuapp.com';
      fetch(url+'/?username='+ccUsername)
      .then(response => response.json())
      .then(response =>{
        setCCData(response)
        setIsLoading(false);
      }).catch(err => {
        setErr("CC username not found")
        setSubmitted(false);
        setIsLoading(false);
      })
      fetch('https://codeforces.com/api/user.info?handles='+cfUsername)
      .then(response => response.json())
      .then(response => {
        setCFData(response);
        if(response.status==="FAILED"){
          setErr("CF username not found");
          setSubmitted(false);
          setIsLoading(false)
        }
      })
      fetch('https://codeforces.com/api/user.status?handle='+cfUsername)
      .then(response => response.json())
      .then(response => {
        setCFSubmissions(response);
      })
    }
    
  }
  function handleSubmit(e){
    if(e)
      e.preventDefault();
    getInfo();
  }
  useEffect(() => {
    let c1 = 0, c2 = 0, c3=0;
    for(let i=0; i<cfSubmissions?.result?.length; i++){
      var probTime = new Date(cfSubmissions.result[i].creationTimeSeconds * 1000);

      //console.log(cfSubmissions.result[i].verdict==="OK");
      if(cfSubmissions.result[i].verdict==="OK"){
        c1++;
      }
      if(isToday(probTime)){
        c3+=1;
        if(cfSubmissions.result[i].verdict==="OK"){
          c2++;
        }
      }
    }
    setCFSubmissionsToday(c3);
    setCFTotalSolved(c1);
    setCFSolvedToday(c2);
  }, [cfSubmissions, ])

  return (
    <div className="App">
      {
        submitted ? 
        isLoading ? (
          <div className="loader__container">
            <PacmanLoader size={25}/>
            <h4 className="load__text">Collecting Data . . .</h4>
          </div>
        ) :(
          <div>
            {/* <h1 style={{textAlign:'center', marginTop:'40px', color:'#42baf5'}}>CP Tracker</h1>
            <h3 style={{textAlign:'center', color:'#42baf5'}}> (Codechef and Codeforces)</h3> */}
            <div className="container">
              <div className="cc__container">
                <img src="https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png" className="cc__logo"/>
                <h2 style={{margin: '20px', opacity: '0.5'}}>{ccData[0].username}</h2>
                <h2 className="cc__rating">{ccData[0].rating}</h2>
                <div className="cc__info">
                  <div class="circular" id="solveToday">
                    <div>
                      <h2 className="circular__h2">{ccData[0].solvedToday}</h2>
                      <p className="circular__p">Solved Today</p>
                    </div>
                  </div>
                  <div class="circular" id="submitToday">
                    <div>
                      <h2 className="circular__h2">{ccData[0].submissionsToday}</h2>
                      <p className="circular__p">Submissions Today</p>
                    </div>
                  </div>
                  <div class="circular">
                    <div>
                      <h2 className="circular__h2">{ccData[0].submissions.length}</h2>
                      <p className="circular__p">Total Submissions</p>
                    </div>
                  </div>
                  <div class="circular" id="fullSolve">
                    <div>
                      <h2 className="circular__h2">{ccData[0].fullySolved}</h2>
                      <p className="circular__p">Fully Solved</p>
                    </div>
                  </div>
                  <div class="circular" id="partSolve">
                    <div>
                      <h2 className="circular__h2">{ccData[0].partiallySolved}</h2>
                      <p className="circular__p">Partially Solved</p>
                    </div>
                  </div>
                </div>
                
                {/* <h2>Solved Today: {ccData[0].solvedToday}</h2>
                <h2>Submissions Today: {ccData[0].submissionsToday}</h2>
                <h2>Total Submissions: {ccData[0].submissions.length}</h2>
                <h2>Fully Solved: {ccData[0].fullySolved}</h2>
                <h2>Partially Solved: {ccData[0].partiallySolved}</h2> */}
              </div>
              <div className="cc__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/1200px-Codeforces_logo.svg.png" className="cf__logo"/>
                <h2 style={{marginTop: '30px', opacity: '0.5'}}>{cfData.result[0].firstName} {cfData.result[0].lastName}</h2>
                <h2 className="cf__rating">{cfData.result[0].rating}</h2>
                <div className="cc__info">
                  <div class="circular" id="solveToday">
                    <div>
                      <h2 className="circular__h2">{cfSolvedToday}</h2>
                      <p className="circular__p">Solved Today</p>
                    </div>
                  </div>
                  <div class="circular" id="submitToday">
                    <div>
                      <h2 className="circular__h2">{cfSubmissionsToday}</h2>
                      <p className="circular__p">Submissions Today</p>
                    </div>
                  </div>
                  <div class="circular">
                    <div>
                      <h2 className="circular__h2">{cfSubmissions.result.length}</h2>
                      <p className="circular__p">Total Submissions</p>
                    </div>
                  </div>
                  <div class="circular" id="fullSolve">
                    <div>
                      <h2 className="circular__h2">{cfTotalSolved}</h2>
                      <p className="circular__p">Solved</p>
                    </div>
                  </div>
                </div>
                {/* <h2>Rank: {cfData.result[0].rank}</h2>
                <h2>Solved Today: {cfSolvedToday}</h2>
                <h2>Submissions Today: {cfSubmissionsToday}</h2>
                <h2>Total Submissions: {cfSubmissions.result.length}</h2>
                <h2>Total Solved: {cfTotalSolved}</h2> */}
              </div>  
            </div>
            <div className="graphs">
              <div  className="graph__container">
                <h2 style={{textAlign: 'left', opacity: '0.5'}}>CC Solved</h2>
                <div style={{overflow: 'auto'}}>
                  <div
                    style={{
                      
                      height: '400px',
                      margin:'40px auto'
                    }}
                  >
                    <Chart data={data} axes={axes} tooltip/>
                  </div>
                </div>
              </div>
              <div  className="graph__container">
                <h2 style={{textAlign: 'left', opacity: '0.5'}}>CC Submissions</h2>
                <div style={{overflow: 'auto'}}>
                  <div
                    style={{
                      
                      height: '400px',
                      margin:'40px auto'
                    }}
                  >
                    <Chart data={ccSubTime} axes={axes} tooltip/>
                  </div>
                </div>
              </div>
              <div  className="graph__container">
                <h2 style={{textAlign: 'left', opacity: '0.5'}}>CF Submissions</h2>
                <div style={{overflow: 'auto'}}>
                  <div
                    style={{
                      
                      height: '450px',
                      margin:'40px auto'
                    }}
                  >
                    <Chart data={cfSubTime} axes={axes} tooltip/>
                  </div>
                </div>
              </div>
              <div  className="graph__container">
                <h2 style={{textAlign: 'left', opacity: '0.5'}}>CF Solved</h2>
                <div style={{overflow: 'auto'}}>
                  <div
                    style={{
                      
                      height: '450px',
                      margin:'40px auto',
                    }}
                  >
                    <Chart data={cfSolveTime} axes={axes} tooltip/>
                  </div>
                </div>
              </div>
            </div>
            <p style={{margin:'40px auto', textAlign:'center'}}>Made with ❤️ by <a href="http://sahilsaha.me" target="_blank">Sahil Saha</a></p>
          </div>
        )
        :(
          <div className="form__container">
            <div className="form">
              <h2>Enter your usernames!</h2>
              <input type="text" onChange={(e)=>setCCUsername(e.target.value)} value={ccUsername} placeholder="Codechef Username"/>
              <input type="text" onChange={(e)=>setCFUsername(e.target.value)} value={cfUsername} placeholder="Codeforces Username"/>
              <button onClick={handleSubmit} type="submit" id="submit">Let's Go</button>
              <p className="err">{err}</p>
            </div>
            <p style={{margin:'20px auto', textAlign:'center'}}>Made with ❤️ by <a href="http://sahilsaha.me" target="_blank">Sahil Saha</a></p>
          </div>
        )
      }
    </div>
  );
}

export default App;
