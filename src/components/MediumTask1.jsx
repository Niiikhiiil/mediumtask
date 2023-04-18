import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const MediumTask1 = () => {
	const [input, setInput] = useState('');
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSearch = () => {
		setLoading(true);
		axios
			.get(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}/today?include=fcst%2Cobs%2Chistfcst%2Cstats%2Ccurrent&key=3NXRGMWT7CUYEHL9C4TJT8QV2&options=beta&contentType=json`,
			)
			.then((response) => {
				setData(response.data);
				setInput('');
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	};

	return (
		<div
			style={{
				border: 'none',
				borderRadius: '10px',
				marginTop: '10px',
				color: '',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
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
				<h2>Weather</h2>
			</div>
			<div>
				<input
					style={{
						color: 'blue',
						backgroundColor: 'skyblue',
						border: 'none',
						borderRadius: '10px',
						padding: '7px 7px',
						margin: '5px 0px',
					}}
					type="text"
					placeholder="Enter city,state or country name..."
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<button
					style={{
						padding: '7px 7px',
						border: 'none',
						borderRadius: '10px',
						color: 'white',
						backgroundColor: 'darkred',
						cursor: 'pointer',
						margin: '5px 7px',
					}}
					onClick={() => handleSearch()}
				>
					Go
				</button>
			</div>
			{loading && <div>Loading...</div>}
			{data !== null && (
				<div
					style={{
						border: 'none',
						borderRadius: '10px',
						marginTop: '10px',
						color: '',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div>
						<label>Search For:</label>
						<b>{data.address}</b>
					</div>
					<hr />
					<table
						style={{
							border: '1px solid black',
							borderRadius: '10px',
							padding: '5px',
						}}
					>
						<tbody>
							<tr>
								<td>Current Location Place</td>
								<td>
									:<b>{data.resolvedAddress}</b>
								</td>
							</tr>
							<tr>
								<td>Temperature</td>
								<td>
									:<b>{data.currentConditions.temp}f</b>
								</td>
							</tr>
							<tr>
								<td>Description</td>
								<td>
									:<b>{data.description}</b>
								</td>
							</tr>

							<tr>
								<td>Feels Like</td>
								<td>
									:<b>{data.currentConditions.feelslike}f</b>
								</td>
							</tr>
							<tr>
								<td>Humidity</td>
								<td>
									:<b>{data.currentConditions.humidity}</b>
								</td>
							</tr>
							<tr>
								<td>Weather Condition</td>
								<td>
									:<b>{data.currentConditions.conditions}</b>
								</td>
							</tr>
							<tr>
								<td>Sunrise</td>
								<td>
									:<b>{data.currentConditions.sunrise}AM</b>
								</td>
							</tr>
							<tr>
								<td>Sunset</td>
								<td>
									:<b>{data.currentConditions.sunset}PM</b>
								</td>
							</tr>
							<tr>
								<td>Date</td>
								<td>
									:
									<b>
										{moment
											.unix(
												data.currentConditions
													.datetimeEpoch,
											)
											.format('L')}
									</b>
								</td>
							</tr>
							<tr>
								<td>Time</td>
								<td>
									:<b>{data.currentConditions.datetime}</b>
								</td>
							</tr>
							<tr>
								<td>Pressure</td>
								<td>
									:<b>{data.currentConditions.pressure}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default MediumTask1;
