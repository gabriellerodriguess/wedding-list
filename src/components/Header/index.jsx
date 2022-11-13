import './styles.css'
import React from "react";
import SvgComponentHeader from '../../assets/SvgComponentHeader';

export default function Header() {
    return (
        <header>
            <div className='container_svg'>
                <SvgComponentHeader />
            </div>
            <div className='container_header'>
                <div className='container_header-title'>
                    <h1>Lista</h1> <small>de presentes</small>
                </div>

                <div className='container_header-subtitle'>
                    <h2>Gabi e Otávio</h2>
                </div>             

            </div>

        </header>
    )
}