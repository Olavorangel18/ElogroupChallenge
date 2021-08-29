function RegisterView(props){
    
    return (
    
    <form className="form" onSubmit={props.handleRegister}>
        <div id="marginTop"className="imgContainer center">
            <img src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo da Elogroup"></img>
        </div>
        <p className ="inputText textCenter">Username:</p>
        <input className="center input" type="text" required="required" value = {props.username} onChange={props.setUsername}></input>
        <p className ="inputText textCenter">Password:</p>
        <input className="center input" onKeyUp={props.validatePassword} type="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@+#$])[a-zA-Z0-9@+#$]{8,50}$" title="Password deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial(@+#$), um caracter numérico, um caracter alfanumérico;" required="required" minlength="8" placeholder="********" value = {props.password} onChange={props.setPassword}></input>
        <p className ="inputText textCenter">Confirmar Password:</p>
        <input className="center input" onKeyUp={props.validatePassword} id="confirm_password" type="password" required="required" minlength="8" placeholder="********" value = {props.confirmPassword} onChange={props.setConfirmPassword}></input>
        <br/>
        <button className="salveLead" type="submit" className="buttonRegister">Confirm</button>
    </form>
    )
}

export default RegisterView;