import React, {useState , useEffect, useContext} from 'react';
import {Select, TextField, Grid} from '@material-ui/core'
import {ContextPrueba} from '../../../context/contextPrueba'
const infoSelect = [
    {
        value: 1,
        label : "careperro"
    },
    {
        value: 2 ,
        label : "my rat"
    }
]
const Formulario = (props) => {

    const context = useContext(ContextPrueba)
    console.log(context);
    

    const [datos, setDatos] = useState({
        nombre: "",
        novedad: 1
    })

    const changeData = (e) =>{
        const {value, name} = e.target
        const newData = {...datos}
        newData[name] = value
        console.log(newData)
        setDatos(newData)
    }

    return <Grid container spacing={2}>
        <Grid md={6}>
            Mundo
        </Grid>
        <Grid md={6}>
        <h1>FORMULARIO</h1>
          <TextField label="Nombre" style={{width : "100%" }} value = {datos.nombre} name={"nombre"} onChange={(e) => changeData(e)} />
          <label>novedad</label>
          <Select  style={{width : "100%" }} value={Number(datos.novedad)} name={"novedad"} onChange={(e) => changeData(e)}>  
            {infoSelect.map( (i, key) =>{
                return <option value={i.value}  key={key}> {i.label} </option>
            })}
          </Select>
        </Grid>
    </Grid>
}


export default Formulario