import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../Components/Card/Card';

function Products() {
	const [categoryData, setCategoryData] = useState([]);

	const parem = useParams();

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/category/${parem.category}`)
			.then((response) => {
				setCategoryData(response.data);
			});
	}, []);

	// console.log(categoryData.image);

	return (
		<div className="card-container">
			{categoryData.map((x, i) => {
				return <Card id={x.id} key={i} src={x.image} price={x.price} />;
			})}
		</div>
	);
}

export default Products;
