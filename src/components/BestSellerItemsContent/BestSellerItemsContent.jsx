import Container from "../Container/Container"
import ContentBox from "../ContentBox/ContentBox"
import style from './BestSellerItemsContent.module.css'

function BestSellerItemsContent(){
    const bestSellerItems1 = [
        { src: './img/2.svg', title: 'Metal Vintage Pendant', price:'$79.00' },
        { src: './img/3.svg', title: 'Klosh Table Clock', price: '$99.00' },
        { src: './img/4.svg', title: 'Arne Dining Chair', price: '$350.00' },
        { src: './img/5.svg', title: 'Klosh Wall Clock', price: '$80.00 – $129.00' }
    ]
    const bestSellerItems2 = [
        { src: './img/6.svg', title: 'Modern Outdoor Chair', price: '$79.00' },
        { src: './img/7.svg', title: 'Vipp Wool Pillow', price: '$99.00' },
        { src: './img/8.svg', title: 'Modern Bedroom Storage', price: '$499.00' }
    ]

    return(
        <Container>
            <div>
                <div className={style.first__row}>
                    {bestSellerItems1.map((el) => {
                        return (
                            <ContentBox src={el.src} title={el.title} price={el.price}/>
                        )
                    })}
                </div>
                <div className={style.second__row}>
                    {bestSellerItems2.map((el) => {
                        return (
                            <ContentBox src={el.src} title={el.title} price={el.price}/>
                        )
                    })}
                </div>
            </div>
            
        </Container>
    )
}

export default BestSellerItemsContent