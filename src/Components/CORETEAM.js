import React, { useState } from 'react'
import { Collapse } from '@material-ui/core';
import {UncontrolledCollapse,Button} from "reactstrap"
import {UserCard} from "react-ui-cards";
const CoreTeam=({data})=>{
    const varToString = varObj => Object.keys(varObj)[0]
    const [expanded,setexpanded]=useState(false)
    if(data){
        var CoreTeam = data.CoreTeam.map(function (CoreTeam){
            return(
                <div style={{flexDirection:"row"}}>
                    <Button color="primary" id={CoreTeam.name} style={{ marginBottom: '1rem' }}>
                    {CoreTeam.name}
    </Button>
                    <h1>UNIT 2</h1>
                    {console.log(varToString(CoreTeam.name))}
                    <UncontrolledCollapse toggler={"#"+varToString(CoreTeam.name)}>
                    <UserCard
                    float
                    name= {CoreTeam.name}
                    header={CoreTeam.header}
                    avatar={CoreTeam.avatar}
                    positionName={CoreTeam.role}
                    href={CoreTeam.href}
                    />
                    </UncontrolledCollapse>
                    </div>
            );
        })
    }
    return(
        <section id="CORETEAM"> 
            <div style={{display: "flex",flexFlow: "row wrap"}}>
            
                {CoreTeam}
            </div>
        </section>
    );
}
export default CoreTeam