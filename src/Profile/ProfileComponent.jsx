import React from 'react'

function ProfileComponent(props) {
    return (
        <div style={{
        display:"flex",
        flexDirection:"column",
        width:"10rem",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "pink"
        }}>
        {props.children}
        <h2>Full Name: {props.fullName}</h2>
        <h3> Bio <br/> {props.bio}</h3>
        <h3>Profession <br/> {props.profession}</h3>
        <div>{props.handle()}</div>
        </div>
        )
}

export default ProfileComponent;

