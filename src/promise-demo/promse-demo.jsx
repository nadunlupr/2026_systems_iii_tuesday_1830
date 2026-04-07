import { useEffect, useState } from "react";
import ProductList from "./product-list";

export default function PromiseDemo(props) {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('inside useEffect');
        // pizzaPromise
        //     .then(res => {
        //         // handle data
        //         // 100 lines of code
        //         console.log('reolved: ', res);
        //     })
        //     .catch(err => {
        //         //handle error
        //         console.log('error: ', err);
        //     });
        const promiseCaller = async () => {
            try{
                const result = await pizzaPromise;
                // handle data
                // 100 lines of code
                console.log('reolved: ', result);

            } catch(err) {
                //handle error
                console.log('error: ', err);
            }
        }

        promiseCaller();
        //50 lines is code
        console.log('after calling the promise');
    }, [count])

    console.log('renderingg...');
    return (
        <div>
            Welcome to promises
            <button onClick={() => setCount2(count2 + 1)}>Count</button>
            <ProductList />
        </div>
    )
}

const isDoughAvailable = false;

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isDoughAvailable) {
            resolve(`Here's your Pizza! Enjoyyy!`);
        } else {
            reject('Sorry, we are out of dough');
        }
    }, 5000)
})