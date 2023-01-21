import { MY_SERVER } from '../../app/env'
import axios from 'axios'


export function getWorkers() {
    return new Promise((resolve) =>
        axios.get(MY_SERVER).then(res => resolve({ data: res.data }))
    );
}
export function addWorker(worker) {
    console.log("add",worker)
    return new Promise((resolve) =>
        axios.post(MY_SERVER,{"first_name":worker.firstname,"last_name":worker.lastname, "email":worker.wemail,"position":worker.wposition,
         "salary":worker.wsalary, "start_of_employment":worker.wstart, "manager_email":worker.wmanager }).then(res => resolve({ data: res.data }))
    );
}
export function delWorker(email) {
    // console.log("add",desc,sName)
    return new Promise((resolve) =>
        axios.delete(MY_SERVER+"/"+ email).then(res => resolve({ data: res.data }))
    );
}

export function updWorker(worker) {
    console.log(worker)
    
    return new Promise((resolve) =>
        axios.put(MY_SERVER+"/"+ worker.wemail,{"first_name":worker.firstname,"last_name":worker.lastname, "email":worker.wemail,"position":worker.wposition,
        "salary":worker.wsalary, "start_of_employment":worker.wstart, "manager_email":worker.wmanager }).then(res => resolve({ data: res.data }))
    );
}