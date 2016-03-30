import React from 'react';
import AccountsUI from '../accountsUi.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">

	<header>
		<h2> Productive.me</h2>
			<nav>
				<a href="/"> Tasks </a>
				<a href="/pomo"> Pomo </a>
				<a href="/about"> About </a>
				<a href="/dashboard"> Dash </a>
				<AccountsUI />
			</nav>

	</header>

	<main>
		{content}
	</main>

	</div>
	)