import React, { useEffect, useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card(props) {
	const [id, setId] = useState();
	const navigate = useNavigate();

	function toProDetail(e) {
		if (e.target.tagName === 'DIV') {
			setId(e.target.id);
		} else {
			setId(e.target.parentElement.id);
		}
	}

	useEffect(() => {
		if (id) {
			navigate(`/products/${id}`);
		}
	}, [id]);

	return (
		<div id={props.id} onClick={toProDetail} className="each-card">
			<img src={props.src} alt="img" />
			<p>Price: ${props.price}</p>
		</div>
	);
}

export default Card;
