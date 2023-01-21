import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updWorker } from './workerAPI';
import { selectWorkers,getWorkersAsync, addWorkerAsync, delWorkerAsync , UpdWorkersAsync,selectUpdate} from './workerSlice'

const Worker = () => {
  const dispatch = useDispatch();
  const workers = useSelector(selectWorkers);
  const workersUpdate = useSelector(selectUpdate);
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [wemail, setwemail] = useState("")
  const [wposition, setwposition] = useState("")
  const [wsalary, setwsalary] = useState(0)
  const [wstart, setwstart] = useState("01/01/2020")
  const [wmanager, setwmanager] = useState("")

  useEffect(() => {
    console.table(workers)
  }, [workers,workersUpdate])

  useEffect(() => {
    dispatch(getWorkersAsync())
  }, [workersUpdate])



  return (
    <div><h1>Worker</h1><br /><hr />
      First Name:<input onChange={(e) => setfirstname(e.target.value)}/>
      Last_name Name:<input onChange={(e) => setlastname(e.target.value)}/><br/>
      Email:<input onChange={(e) => setwemail(e.target.value)}/>
      Position:<input onChange={(e) => setwposition(e.target.value)}/><br/>
      Salary:<input onChange={(e) => setwsalary(+e.target.value)}/>
      Start of employment:<input onChange={(e) => setwstart(e.target.value)}/><br/>
      Manager Email:<input onChange={(e) => setwmanager(e.target.value)}/>
      <button onClick={() => dispatch(addWorkerAsync({firstname,lastname,wemail,wposition,wsalary,wstart,wmanager}))}><h3>add worker</h3></button><hr/>


      length: {workers.length}
      <hr/>
      {workers.map((wor, i) =>
        <div key={i}>
          first_name: {wor.first_name}<br />
          last_name:{wor.last_name}<br />
          email:{wor.email}<br />
          position:{wor.position}<br />
          salary:{wor.salary}<br />
          start_of_employment:{wor.start_of_employment}<br />
          manager_email:{wor.manager_email}<br/>
          <button onClick={() => dispatch(UpdWorkersAsync({firstname,lastname,wemail,wposition,wsalary,wstart,wmanager}))}>update</button>
          <button onClick={() => dispatch(delWorkerAsync(wor.email))}>delete</button>
          <hr />
        </div>)}
    </div>
  )
}



export default Worker