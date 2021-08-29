import React, {useEffect, useState} from 'react';

function AddLead(props){
    return(
        <>
            <div className="add">
                <div className="head">
                    <div className="imgContainer noMargin">
                        <img src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo da Elogroup"></img>
                    </div>
                    <p className="painelText"> Novo Lead</p>
                </div> 
                <form class="formLead"onSubmit={props.save}>
                    <div className="formAddLead">
                        <p className ="inputText">Nome</p>
                        <input onChange={props.onChangeName}className="input" type="text" required="required" value={props.name}></input>
                        <p className ="inputText">Telefone</p>
                        <input onChange={props.onChangePhone} value={props.phone} className="input" type="tel" title="O DDD precisa está presente, além disso, não deve haver espaços entre os números"pattern="[0-9]{2}[9][0-9]{4}[0-9]{4}"required="required"></input>
                        <p className ="inputText">Email</p>
                        <input onChange={props.onChangeMail} value={props.mail} className="input" type="email" required="required"></input>
                    </div>
                    <div className="flex">
                        <p className ="inputText widthMax">Oportunidades</p>
                        <table className="toCheck">
                            <tr className="first heightTable">
                                <th> <input id="fistCheck" onChange={props.all}type="checkbox"></input></th>
                                <th></th>
                            </tr>
                            <tr className="heightTable gray">
                                <th><input className="check" onChange={props.RPA} type="checkbox" value="RPA"></input></th>
                                <th className="left">RPA</th>
                            </tr>
                            <tr className="heightTable white">
                                <th><input className="check" onChange={props.product} type="checkbox" value="Produto Digital"></input></th>
                                <th className="left">Produto Digital</th>
                            </tr>
                            <tr className="heightTable gray">
                                <th><input className="check" onChange={props.analitycs} type="checkbox" value="Analytics"></input></th>
                                <th className="left">Analytics</th>
                            </tr>
                            <tr className="heightTable white">
                                <th><input className="check" onChange={props.BPM} type="checkbox" value="BPM"></input></th>
                                <th className="left">BPM</th>
                            </tr>
                        </table>
                        <button type="submit" className="salveLead widthMax">Salvar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddLead;