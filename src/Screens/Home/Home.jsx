import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products/categories').then((data) => {
			setCategories(data.data);
		});
	}, []);

	useEffect(() => {
		if (category) {
			navigate(`/products/category/${category}`);
		}
	}, [category]);

	const onClick = (e) => {
		setCategory(e.target.innerHTML.toLowerCase());
	};

	return (
		<div className="container">
			{categories.map((x, i) => {
				return (
					<button onClick={onClick} key={i}>
						{x.toUpperCase()}
					</button>
				);
			})}
		</div>
	);
}

export default Home;
