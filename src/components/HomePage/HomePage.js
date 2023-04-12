// import './HomePage.scss';
// import Header from '../Header/Header';
// import './assets/scss/App.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// import ResaultPage from "../ResaultMscv/ResaultMscv";

import gus_kus from '../../assets/images/gus_kus.svg';
import gus_active from '../../assets/images/gus_active.svg';
import background from '../../assets/images/background.svg';

function PageActive() {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	return (
		<div className="page theme">
			<div className="screen">
				<div className="screen-load">
					<div className="screen-load__content">
						<p className="screen-load__content-title">
							{' '}
							Бойовий гусак із біолабораторій України готовий нанести «свєрх-трататата» по
							ворожим об’єктам{' '}
						</p>
						<div className="screen-load__content-img">
							<img src={gus_kus} className="screen-load__content-img-gus" alt="logo" />
							<img src={gus_active} className="screen-load__content-img-2gus" alt="logo" />
							<img
								src={background}
								className="screen-load__content-img-background"
								alt="logo"
							/>
						</div>

						{/*<button className="screen-load__switch themetoggle"></button>*/}
						<Link to={'/ChoosePage'} className="screen-load__content-btn">
							<button> Обрати позицію </button>
						</Link>
					</div>
				</div>
			</div>
			{/* <RouterProvider router={router} /> */}
		</div>
	);
}

function Page() {
	return (
		<div className="page">
			<div className="screen">
				<div className="screen-load">
					<div className="screen-load__content">
						<p className="screen-load__content-title">
							{' '}
							Бойовий гусак із біолабораторій України готовий нанести «свєрх-трататата» по
							ворожим об’єктам{' '}
						</p>
						<div className="screen-load__content-img">
							<img src={gus_kus} className="screen-load__content-img-gus" alt="logo" />
							<img src={gus_active} className="screen-load__content-img-2gus" alt="logo" />
							<img
								src={background}
								className="screen-load__content-img-background"
								alt="logo"
							/>
						</div>

						{/* <input className="screen-load__switch js-themetoggle" type={'checkbox'}></input> */}
						<button className="screen-load__switch"></button>
						<Link to={'/ChoosePage'} className="screen-load__content-btn">
							<button> Обрати позицію </button>
						</Link>
					</div>
				</div>
			</div>
			{/* <RouterProvider router={router} /> */}
		</div>
	);
}

const theme = document.querySelector('.js-themetoggle');

export default Page;
