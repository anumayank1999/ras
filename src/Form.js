import React, {useEffect} from 'react';
import './App.css';
import './form.css';
import axios from 'axios';
import {  useFormik } from 'formik';
import { vali } from './schema';

const initialvalues={
    PolicyNo:"",
    TypeOfVehicle:"",
    Make:"",
    Base:"",
    Age:'',
    Agent:"External",
    Witness:"No",
    PoliceReport:"No",
    AreaType:"",
    Gender:"",
    Summary:"",
    MlReq:"Yes"
}
var tgv = '';
const Form = () => {

    var tokengen = JSON.stringify({
        
            "username": "poonamjha4330@gmail.com",
            "password": "anumayank"
          
    });
    
    var token = {
        method: 'post',
        url: 'https://ap-south-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-xvirqiy/auth/providers/local-userpass/login',
        headers: {
          'Content-Type': 'application/json',
    
        },
        data: tokengen
      };

    useEffect(()=>{
        axios(token)
            .then(function (response) {
                console.log(JSON.stringify(response.data.access_token));
                tgv = JSON.stringify(response.data.access_token);
                tgv = tgv.slice(1, -1);
                tgv = 'Bearer '+ tgv;
                //tgv = JSON.parse(trimmedString);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);
    
    const {values, errors, touched ,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: initialvalues,
        validationSchema: vali,
        onSubmit: (values, action) => {
            console.log(values);

            if ((values.TypeOfVehicle==="Utility")&&(values.Gender==='Female')) {
                values.MlReq='No'
                console.log('Yes')
            }
//On Cloud Data Storage
            var data = JSON.stringify({
                "collection": "api",
                "database": "apitry",
                "dataSource": "Cluster0",
                "document": {
                    "PolicyNo": values.PolicyNo,
                    "TypeOfVehicle":values.TypeOfVehicle,
                    "Make":values.Make,
                    "Base":values.Base,
                    "Age":values.Age,
                    "Agent":values.Agent,
                    "Witness":values.Witness,
                    "PoliceReport":values.PoliceReport,
                    "AreaType":values.AreaType,
                    "Gender":values.Gender,
                    "Summary":values.Summary,
                    "MlReq":values.MlReq,        
                }
            });
            
            var config = {
              method: 'post',
              url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-xvirqiy/endpoint/data/v1/action/insertOne',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                //"refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RhdGEiOm51bGwsImJhYXNfZGV2aWNlX2lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwiYmFhc19kb21haW5faWQiOiI2NjJhYzk0MGE3N2U0Nzc4YzIyMzVlYjUiLCJiYWFzX2lkIjoiNjYzZjJjNmI4ZTFkNDRiNmUxNDcwYjU0IiwiYmFhc19pZGVudGl0eSI6eyJpZCI6IjY2M2YyYTgyOGUxZDQ0YjZlMTQzOTE2MCIsInByb3ZpZGVyX3R5cGUiOiJsb2NhbC11c2VycGFzcyIsInByb3ZpZGVyX2lkIjoiNjYyYWM5YTM0NDAwMWQ5ODYxMzg0M2YyIn0sImV4cCI6MTcyMDYwMDE3MSwiaWF0IjoxNzE1NDE2MTcxLCJzdGl0Y2hfZGF0YSI6bnVsbCwic3RpdGNoX2RldklkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwic3RpdGNoX2RvbWFpbklkIjoiNjYyYWM5NDBhNzdlNDc3OGMyMjM1ZWI1Iiwic3RpdGNoX2lkIjoiNjYzZjJjNmI4ZTFkNDRiNmUxNDcwYjU0Iiwic3RpdGNoX2lkZW50Ijp7ImlkIjoiNjYzZjJhODI4ZTFkNDRiNmUxNDM5MTYwIiwicHJvdmlkZXJfdHlwZSI6ImxvY2FsLXVzZXJwYXNzIiwicHJvdmlkZXJfaWQiOiI2NjJhYzlhMzQ0MDAxZDk4NjEzODQzZjIifSwic3ViIjoiNjYzZjJhODI4ZTFkNDRiNmUxNDM5MTYyIiwidHlwIjoicmVmcmVzaCJ9.9mm8YNscgmnC-3gqOVkGvNqfR2qcnoPWpYVxKvKlpfQ",
                //auth key will expire in 30 mins evrytime please generate from 'generate token mongodb server side cloud' in 'Postman' or try useeffect
                'Authorization': tgv,
              },
              data: data
            };
        
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                //console.log(JSON.stringify(response));
                alert("We got it!! we will reach out to you very soon...");
                //console.log(tgv);
                action.resetForm();
            })
            .catch(function (error) {
                alert("Something went Wrong Plz try again after sometime")
                console.log(error);
               // console.log(tgv);
            });
              
              
           
            
        }
        
    });
    console.log(errors)
    console.log(values)
  return (
    <>
    <h3>Register your Insurance Claim , We are Here for Support:</h3>
      <form className='form-main' onSubmit={handleSubmit}>
        <label htmlFor='PolicyNo'>Policy No<input type='text'placeholder='Policy No' name='PolicyNo' onBlur={handleBlur} onChange={handleChange} value={values.PolicyNo}/>
       {errors.PolicyNo && touched.PolicyNo ? (<p className='Err'>{errors.PolicyNo}</p>):null}
            </label>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Type of Vehicle 
        <select onChange={handleChange} value={values.TypeOfVehicle} name='TypeOfVehicle' >
            <option value=" ">Select Car Type</option>
            <option value="Sedan">Sedan</option>
            <option value="Sports">Sports</option>
            <option value="Utility">Utility</option>
        </select>
        {errors.TypeOfVehicle && touched.TypeOfVehicle ? (<p className='Err'>{errors.TypeOfVehicle}</p>):null}
        </label>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Make<input name="Make" value={values.Make} onChange={handleChange} type='text' />
        {errors.Make && touched.Make ? (<p className='Err'>{errors.Make}</p>):null}
        </label>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Base 
        <select onChange={handleChange} value={values.Base} name="Base">
            <option value=" ">Select Base Type</option>
            <option value="All_Perils">All Perils</option>
            <option value="Collision">Collision</option>
            <option value="Liability">Liability</option>
        </select>
        {errors.Base && touched.Base ? (<p className='Err'>{errors.Base}</p>):null}
        </label>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Age<input onChange={handleChange} name="Age" value={values.Age} placeholder='Enter Age' type="number"/></label>
        {errors.Age && touched.Age ? (<p className='Err'>{errors.Age}</p>):null}
        <br/>
        <label>Agent </label>
        <span name="Agent" value={values.Agent} onChange={handleChange}>
            <input value="Internal" name="Agent" type='radio' /><label>Internal</label>
            <input value="External" name="Agent" type='radio' defaultChecked/><label>External</label>
        </span>
        {errors.Agent && touched.Agent ? (<p className='Err'>{errors.Agent}</p>):null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Witness </label>
        <span name='Witness' value={values.Witness} onChange={handleChange}>
            <input name='Witness' value='Yes' type='radio'/><label>Yes</label>
            <input name='Witness' value='No' type='radio' defaultChecked/><label>No</label>
        </span>
        {errors.Witness && touched.Witness ? (<p className='Err'>{errors.Witness}</p>):null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Police Reported</label>
        <span name="PoliceReport" value={values.PoliceReport} onChange={handleChange}>
            <input name='PoliceReport' value='Yes' type='radio'/><label>Yes</label>
            <input name='PoliceReport' value='No' type='radio' defaultChecked/><label>No</label>
        </span>
        {errors.PoliceReport && touched.PoliceReport ? (<p className='Err'>{errors.PoliceReport}</p>):null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Area Type 
        <select name="AreaType" value={values.AreaType} onChange={handleChange}>
            <option value=" ">Select Area Type</option>
            <option value="Rural">Rural</option>
            <option value="Urban">Urban</option>
        </select>
        {errors.AreaType && touched.AreaType ? (<p className='Err'>{errors.AreaType}</p>):null}
        </label>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <label>Gender 
        <select name="Gender" value={values.Gender} onChange={handleChange}>
            <option value=" ">Select one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        {errors.Gender && touched.Gender ? (<p className='Err'>{errors.Gender}</p>):null}
        </label>
        <br/>
        <label>Summary<br/><textarea name="Summary" value={values.Summary} onChange={handleChange} onBlur={handleBlur} />
        {errors.Summary && touched.Summary ? (<p className='Err'>{errors.Summary}</p>):null}
        </label>
        <br/>
        <button type='submit' disabled={((values.Age <= 14)||(values.AreaType.length <= 2)||(values.Base.length <= 2)||(values.Gender.length <= 2)||(values.PolicyNo.length === 0)||(values.PolicyNo.length >= 11)||(values.Make.length === 0)||(values.Make.length >= 11)||(values.Summary.length <= 29))}>Submit</button>
      </form>
    </>
  )
}

export default Form
