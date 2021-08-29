function LeadView(props){
    return (
        <div className="LeadPanel">
            <div className="head">
                <div className="imgContainer noMargin">
                    <img src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo da Elogroup"></img>
                </div>
                <p className="painelText"> Painel de Leads</p>
            </div>
            <button onClick={props.handleAddLead} class="AddLead">Novo Lead (+)</button>
            <table>
                <tr class="first">
                    <th>Cliente em Potencial</th>
                    <th>Dados Confirmados</th>
                    <th>Reunião Agendada</th>
                </tr>
            {props.LogicView}
            </table>
        </div>
    )
}

export default LeadView

