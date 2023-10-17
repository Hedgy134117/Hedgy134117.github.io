<div id="app">
	<nav>
		<a href="./">home</a>
		<a href="./anime" class="not-implemented">anime</a>
		<a href="./books" class="not-implemented">books</a>
		<a href="./games" class="not-implemented">games</a>
		<a href="./movies" class="not-implemented">movies</a>
		<a href="./music" class="not-implemented">music</a>
		<a href="./photos" class="not-implemented">photos</a>
		<a href="./restaurants">restaurants</a>
		<a href="./websites" class="not-implemented">websites</a>
	</nav>

	<div id="page">
		<slot />
	</div>
</div>

<style>
	:root {
		--border-size: 2em;
		--body-padding: 1em;
		--accent-color: #87996b;
		--text-color: #e9e9e9;
	}

	:global(body) {
		margin: 0;
		padding: var(--body-padding);
		border: var(--border-size) solid var(--accent-color);
		background-color: black;
		color: var(--text-color);
		font-family: 'Noto Sans', sans-serif;
	}

	nav {
		border: 1px solid var(--accent-color);
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	nav a {
		color: var(--text-color);
		text-decoration: none;
	}

	nav a:visited {
		color: var(--text-color);
	}

	#app {
		height: calc(100vh - (var(--border-size) + var(--body-padding)) * 2);
		display: grid;
		grid-template-rows: 10% 90%;
	}

	#page {
		overflow-y: auto;
	}

	.not-implemented {
		opacity: 20%;
	}
</style>
