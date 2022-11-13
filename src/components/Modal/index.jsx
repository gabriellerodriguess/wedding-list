import {React, useState} from "react"
import SvgComponentClose from '../../assets/SvgComponentClose'
import './styles.css'

export default function Modal(props) {

    const [input, setInput] = useState('')
    const [item, setItem] = useState('')

    function getData() {
        const data = [input, item]
        if(input === '') {
            alert('Insira um nome.')
            return
        }
        console.log(data)
        return data
    }

    return (
        <>
        <div className="modal_container">
            <div className="modal">
                <button className="button_close" onClick={() => props.dispatch()}>
                    <SvgComponentClose />
                </button>
                <h3>Você escolheu seu presente!</h3>
                <div className="form_container">
                    <label className="text_default">Escreva seu nome:</label>
                    <input type="text" value={input} onChange={
                        (e) => {
                        setInput(e.target.value) 
                        setItem(props.element.name)
                        }}>
                    </input>
                </div>
                <div className="description">
                    <p className="text_default">O presente escolhido foi:</p>
                    <span className="text_default">{props.element.name}</span>
                </div>
                <button type="submit" className="button_modal" onClick=
                    { () => {
                        const isData = getData()

                        if(isData) {
                            props.dispatch()
                        }
                        
                    }
                    }>Confirmar Presente</button>
            </div>
        </div>
        </>
    )
}