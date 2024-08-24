import  './card.css'
const Card = ({color , title}) => {

const style = {
    color: color
}

    return (
        <>
        <h1 style={style}>{title.toUpperCase()}</h1>
        <p>Homem de Ferro</p>
        </>
    )
}

export default Card;