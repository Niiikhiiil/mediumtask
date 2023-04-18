import React, { useState } from 'react';
import './MediumTask2.css';
import { data } from './MediumTask2Data';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const MediumTask2 = () => {
	const [cdata, setCdata] = useState(data);
	const [cpage, setCpage] = useState(1);
	const [search, setSearch] = useState('');
	const [show, setShow] = useState(false);
	const [error, setError] = useState('');
	let ccdataRecord = 4;
	let lastIndex = cpage * ccdataRecord;
	let firstIndex = lastIndex - ccdataRecord;
	let totalPage = Math.ceil(cdata?.length / ccdataRecord);
	let numbers = [...Array(totalPage + 1).keys()].slice(1);
	const ccData = cdata?.slice(firstIndex, lastIndex);

	const prevHandle = () => {
		if (cpage !== 1) {
			setCpage(cpage - 1);
		}
	};
	const changePageHandle = (n) => {
		setCpage(n);
	};

	const nextHandle = () => {
		if (cpage !== totalPage) {
			setCpage(cpage + 1);
		}
	};
	const handleSearch = () => {
		if (search !== '' && search !== null) {
			let q = [...data];
			setCpage(1);
			q = q.filter(
				(r) =>
					r.category.includes(search.toLowerCase()) ||
					r.name.includes(search.toLowerCase()),
			);

			setShow(true);
			if (q.length > 0) {
				setCdata(q);
				setError('');
			} else {
				setError('Not Found');
			}
		} else {
			setError('please enter the search properly');
		}
	};

	return (
		<div className="mainDiv">
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignSelf: 'flex-end',
				}}
			>
				<Link to="/">
					<button className="buttonn">Back</button>
				</Link>
			</div>
			<div className="imageGallery">
				<h2>Image Gallery</h2>
			</div>
			<div className="inputDiv">
				<input
					type="text"
					placeholder="Search here..."
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setError('');
					}}
				/>
				<button onClick={() => handleSearch()}>Search</button>
				{show && (
					<button
						className="resetButton"
						onClick={() => {
							setCdata(data);
							setShow(false);
							setSearch('');
							setError('');
						}}
					>
						Reset
					</button>
				)}
			</div>
			<div>
				<small>{error}</small>
			</div>
			<div className="mapDiv">
				{ccData.length > 0 &&
					ccData?.map((w) => {
						return (
							<img
								src={w.image}
								key={uuidv4()}
								alt={w.name}
								className="imageField"
							/>
						);
					})}
			</div>
			<div>
				<nav>
					{numbers.length >= 2 && (
						<ul className="pagination">
							<li
								style={{
									textDecoration: 'none',
									listStyle: 'none',
								}}
							>
								<button onClick={() => prevHandle()}>
									Prev
								</button>
							</li>
							{numbers.map((num, i) => {
								return (
									<li
										key={uuidv4()}
										style={{
											textDecoration: 'none',
											listStyle: 'none',
										}}
									>
										<button
										className='numberButton'
											key={uuidv4()}
											onClick={() =>
												changePageHandle(num)
											}
										>
											{num}
										</button>
									</li>
								);
							})}

							<li
								style={{
									textDecoration: 'none',
									listStyle: 'none',
								}}
							>
								<button onClick={() => nextHandle()}>
									Next
								</button>
							</li>
						</ul>
					)}
				</nav>
			</div>
		</div>
	);
};

export default MediumTask2;
