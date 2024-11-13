import "./ProductList.css"; // Style importiert (styling geht auch anders)

const ProductList = (props) => {



    return (
        <section className="productSection">
            <h1>Produkte</h1>
            <ul>
                <li>Product {props.productName}</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>Product 5</li>
            </ul>
        </section>
    )
}

export default ProductList