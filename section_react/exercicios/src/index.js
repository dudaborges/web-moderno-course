import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
// importando as funcionalidades do arquivo packpage.json
// tudo o que for jsx precisa ser importado o react
// para usar o dom é necessário importar o react dom

// para renderizar o elemento
// o root é o id da div principal do arquivo index.html
// essa sintaxe de código de colocar html dentro do js não é javascript puro, e sim uma sintaxe do react chamada jsx. É como se fosse o javascript estendido. 
ReactDOM.render(<h1>Meu primeiro React</h1>, document.getElementById('root'))
// esse h1 parece html, mas na verdade é jsx que converte para js nativo/puro


const paragrafo = <p>Olá, mundo em React!</p>

ReactDOM.render(paragrafo, document.getElementById('root'))

ReactDOM.render(<Primeiro/>, document.getElementById('root'))