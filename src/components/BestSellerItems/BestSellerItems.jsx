import BestSellerItemsContent from '../BestSellerItemsContent/BestSellerItemsContent'
import Container from '../Container/Container'
import style from './BestSellerItems.module.css'

function BestSellerItems(){
    const bestSellerItems = [
        {}
    ]

    return (
        <Container>
            <div className={style.main__content}>
                <p className={style.main__title}>Best Seller Items</p>
                <BestSellerItemsContent />
            </div>
        </Container>
    )
}

export default BestSellerItems