import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import './styles/Badge.css'

class Badge extends React.Component{
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="LogoConf"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avater" src="https://s.gravatar.com/avatar/ab6d453f438e2e4fb6ded179639adc47?s=80" alt="Avatar" />
                    <h1>Joaquin <br/> Ferreira</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Multiplatform app developer</h3>
                    <div>@Joakin_FG</div>
                </div>
                <div className="Badge__footer">
                    #Badge_Project
                </div>
            </div>
        )
    }
}

export default Badge;