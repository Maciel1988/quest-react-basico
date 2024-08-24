import './painel.css'
import Card from '../card/card'
import Button from '../button/button'
import Photo from '../image/Stark_ultimato.jpeg'

const Painel = () => {
    return (
        <div className='container'>
        <Card color='red' title='"Às vezes temos que correr antes de andar."' />
         <img className='image' src={Photo} alt="homem de ferro"
            width="350"
            height="400"/>
        <Button label='click' />
    </div>
    )
}

export default Painel;