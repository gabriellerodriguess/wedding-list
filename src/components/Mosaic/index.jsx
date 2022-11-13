import Image from '../Image'
import data from '../config/data'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function Mosaic() {
    const dataItens = data
    const navigate = useNavigate()

    function handleClick(id) {
        navigate(`category/${id}`)
    }

    return (
        <section className='container_mosaic'>
            <div className='content_images'>
                {[dataItens[0],dataItens[1]].map((itm,idx) => {
                    return <Image key={idx} alt={itm.name} dispatch={() => handleClick(itm.id)} urlImage={itm.urlImage} size={itm.id === '1' ? 'md' : 'sm'} name={itm.name} />
                })}
            </div>
            <div className='content_images'>
                {[dataItens[2],dataItens[3]].map((itm,idx) => {
                    return <Image key={idx} alt={itm.name} dispatch={() => handleClick(itm.id)} urlImage={itm.urlImage} size={itm.id === '3' ? 'sm' : 'md'} name={itm.name} />
                })}
            </div>
        </section>
    )
}

