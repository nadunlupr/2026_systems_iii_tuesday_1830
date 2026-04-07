import { useEffect, useState } from "react"

export default function ProductList(props) {

    const initState = {
        products: []
    }

    const [state, setState] = useState(initState);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await res.json();
                console.log('data: ', products);
                setState({...state, products});

            } catch (err) {
                console.log('error: ', err);
            }
        }

        fetchProducts();

    }, [])

    return (
        <div>
            <h1>Here are your products</h1>
            {
                state.products.map(({id, title}) => <div key={id}>{title}</div>)
            }
        </div>
    )
}