import React, { useState, useEffect } from 'react';
import './Login.css';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = axios.create({
  baseURL: "http://localhost:8080"
})


function Person() {
    var columns = [
        {title: "Person ID", field: "person_id"},
        {title: "Date of Birth", field: "date_of_birth"},
        {title: "Name", field: "name"}
    ]

    const [data, setData] = useState([]); //data for table

    //error handling
    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/person")
            .then(res => {
                setData(res.data.data)
            })
            .catch(error=>{
                console.log("Error")
            })
    }, [])

    const handleRowUpdate = (newData, oldData, resolve) => {
        //validation
        let errorList = []
        if(newData.date_of_birth === "") {
            errorList.push("Please enter a date of birth.")
        }
        if(newData.name === "") {
            errorList.push("Please enter a name.")
        }

        if(errorList.length < 1) {
            api.patch("/person/"+newData.person_id, newData)
            .then(res => {
                const dataUpdate = [...data];
                const index = oldData.tableData.person_id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve()
                setIserror(false)
                setErrorMessages([])
            })
            .catch(error => {
                setErrorMessages(["Update failed! Server error"])
                setIserror(true)
                resolve()
            })
        }else{
            setErrorMessages(errorList)
            setIserror(true)
            resolve()
        }
    }

    const handleRowAdd = (newData, resolve) => {
        //validation
        let errorList = []
        if(newData.person_id === undefined) {
            errorList.push("Please enter an ID for the person")
        }
        if(newData.date_of_birth === undefined) {
            errorList.push("Please enter a date of birth")
        }
        if(newData.name === undefined) {
            errorList.push("Please enter a name")
        }

        if(errorList.length < 1){//this means there is no error
            api.post("/person", newData)
            .then (res => {
                let dataToAdd = [...data];
                dataToAdd.push(newData);
                setData(dataToAdd);
                resolve()
                setErrorMessages([])
                setIserror(false)
            })
            .catch(error => {
                setErrorMessages(["Cannot add data. Server error!"])
                setIserror(true)
                resolve()
            })
        }else{
            setErrorMessages(errorList)
            setIserror(true)
            resolve()
        } 
    }

    const handleRowDelete = (oldData, resolve) => {
        api.delete("/person/"+oldData.person_id)
            .then(res => {
                const dataDelete = [...data];
                const index = oldData.tableData.person_id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                resolve()
            })
    }

    return (
        <div className="Person">
            <Grid container spacing={1}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div>
                        {iserror && 
                            <Alert severity="error">
                                {errorMessages.map((msg, i) => {
                                    return <div key={i}>{msg}</div>
                                })}
                            </Alert>
                        }
                    </div>
                    <MaterialTable 
                        title="People"
                        columns={columns}
                        data={data}
                        icons={tableIcons}
                        editable = {{
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    handleRowUpdate(newData, oldData, resolve)
                                }),
                            onRowAdd: (newData) => 
                                new Promise((resolve) => {
                                    handleRowAdd(newData, resolve)
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    handleRowDelete(oldData, resolve)
                                }),    
                        }}
                    />    
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    )
}

export default Person