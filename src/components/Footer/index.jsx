import './styles.css'

export default function Footer() {
    function createDate() {
        const today = new Date();
        const weddingDay = new Date([2022,12,11])
        const differenceDate = weddingDay - today
        const dayInMiliseconds = 84600000
        const resultDate = Math.floor(differenceDate / dayInMiliseconds)
        return resultDate
    }

    return (
        <footer>
            <div className='container_info'>
                <p>O evento será no dia <strong>11/12/2022</strong> às <strong>11:30h</strong></p>
                <p>No endereço: <strong>Qr 402 Conjunto 1 Casa 12 | Samambaia Norte</strong></p>
            </div>
            <div className='container_footer'>
                <div className='container_footer-text'>
                    <h1>Faltam dias</h1>
                </div>
                <div className='container_footer-date'>
                    <h2>{createDate()}</h2>
                </div>
            </div>
        </footer>
    )
}