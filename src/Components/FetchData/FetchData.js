import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const FetchData = () => {
    
    const [products, setProducts] = useState([]);
    const { setIsLoading } = useAuth();


    useEffect(() => {
        setIsLoading(true)
        fetch('https://hidden-thicket-41796.herokuapp.com/motorbikes')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false);
            });
    }, []);
    return {
        products
    }
};

export default FetchData;