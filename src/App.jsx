import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';

import './App.css'

const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
            <h1>Main section</h1>
         </div>
			<div className='footer'></div>
		</div>
	);
};

export default App;
