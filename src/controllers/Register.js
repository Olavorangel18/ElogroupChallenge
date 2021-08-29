
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import RegisterView from  '../views/RegisterView';

function Register(props) {
    
    const history = useHistory()

    const [user, setUser] = useState([])
    const [nick,setNick] = useState([])
    
    useEffect(() =>{
        let dados = localStorage.getItem('nick');
        dados = JSON.parse(dados);
        if(dados!=null)
            setNick(dados)
    },[])

    useEffect(() =>{
        let usuario = localStorage.getItem('user')
        usuario = JSON.parse(usuario)
        if(usuario!=null)
            setUser(usuario)
    },[])

    

    function handleRegister(event){
        event.preventDefault();
        if(!nick.includes(username)){
            localStorage.setItem('nick',JSON.stringify(nick))
            localStorage.setItem('user',JSON.stringify(user))
            user.push([username,password])
            nick.push(username)
            localStorage.setItem('nick',JSON.stringify(nick))
            localStorage.setItem('user',JSON.stringify(user))
            history.push('/lead')
        }
        else
            alert("Usuario já cadastrado")
        setUsername("")
    }


    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    let confirm_password = document.getElementById("confirm_password");
    function validatePassword(){
        if(password != confirmPassword) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }
  return (
    <RegisterView
       handleRegister={handleRegister}
       username = {username}
       setUsername = {event => {setUsername(event.target.value)}} 
       validatePassword = {validatePassword}
       password = {password}
       setPassword = {event => {setPassword(event.target.value)}}
       confirmPassword = {confirmPassword}
       setConfirmPassword = {event => {setConfirmPassword(event.target.value)}}
    />
  );
}

export default Register;
