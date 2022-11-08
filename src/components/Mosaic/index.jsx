import Image from '../Image'
import './styles.css'

export default function Mosaic() {
    return (
        <section className='container_mosaic'>
            <div>
                <Image alt="Quarto" id="1" urlImage="https://i.ibb.co/yfjq626/pexels-monica-silvestre-1034584-3.jpg" size="md" name="Quarto"/>
                <Image alt="Banheiro" id="2" urlImage="https://i.ibb.co/VLc5jvL/pexels-max-vakhtbovych-6487948.jpg" size="sm" name="Banheiro"/>
            </div>
            <div>
                <Image alt="Cozinha" id="3" urlImage="https://i.ibb.co/WKN95fc/cozinha-3.jpg" size="sm" name="Cozinha"/>
                <Image alt="Sala" id="4" urlImage="https://i.ibb.co/8NbK6hX/pexels-charlotte-may-5824901.jpg" size="md" name="Sala"/>
            </div>
        </section>
    )
}

