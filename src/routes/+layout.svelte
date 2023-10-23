<div id="app">
	<nav>
		<a href="/">home</a>
		<a href="/anime/" class="not-implemented">anime</a>
		<a href="/books/" class="not-implemented">books</a>
		<a href="/games/" class="not-implemented">games</a>
		<a href="/movies/" class="not-implemented">movies</a>
		<a href="/music/" class="not-implemented">music</a>
		<a href="/photos/" class="not-implemented">photos</a>
		<a href="/restaurants/">restaurants</a>
		<a href="/websites/" class="not-implemented">websites</a>
	</nav>

	<slot />
</div>

<style>
	:global(:root) {
		--border-size: 2em;
		--body-padding: 1em;
		--accent-color: #87996b;
		--bg-color: #222222;
		--text-color: #e9e9e9;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background-color: var(--bg-color);
		color: var(--text-color);
		font-family: 'Noto Sans', sans-serif;
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		color: var(--text-color);
		text-decoration: none;
	}

	#app {
		height: 100vh;
		display: grid;
		grid-template-columns: 20% 80%;
		grid-template-rows: 5% 95%;
	}

	nav {
		grid-row: 1 / span 2;
		height: 100%;

		display: flex;
		flex-direction: column;

		padding: var(--body-padding);
		border-right: 1px solid var(--accent-color);
	}

	nav a {
		margin-right: 0.5em;
	}

	.not-implemented {
		opacity: 20%;
	}

	@media only screen and (max-width: 600px) {
		#app {
			grid-template-columns: 100%;
			grid-template-rows: 5% 5% 90%;
		}

		nav {
			grid-row: 1;
			flex-direction: row;
			align-items: center;
			padding: 0 var(--body-padding);
			border-right: none;
			border-bottom: 1px solid var(--accent-color);
			overflow: auto;
		}
	}
</style>
