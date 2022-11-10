import React from "react"
import './styles.css'

export default function List(props) {
    return (
        <ul  className="list_container">
            {props.category.items.map((item) => (
                <li className={`list_element item-${item.active ? 'enabled' : 'disabled'}`}>
                    <button className="list_button"></button>
                    <span className="list_item">{item.name}</span>
                </li>
            ))}
        </ul>
    )
}