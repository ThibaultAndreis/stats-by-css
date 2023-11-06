<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_DEFAULT_URL } from "$env/static/public";
	import Header from '$lib/component/Header.svelte';
	import { themeStore } from '$lib/stores/settings';
	import '../app.pcss';
	import { t } from '$lib/i18n/translations';

	export let data;
	let theme = 'dark';
	if (data.theme) {
		theme = data.theme;
		if (browser) {
			themeStore.set(theme);
		}
	}

	$: if (browser) {
		themeStore.subscribe((val) => {
			theme = val;
		});
	}
</script>

<!-- TODO modify this to be domain independent, and page dependent -->
<svelte:head>
	<meta name="description" content={$t('common.Description')} />
	<title>{$t('common.Title')}</title>
	<link rel="canonical" href="https://{PUBLIC_DEFAULT_URL}" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://{PUBLIC_DEFAULT_URL}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Thibault - {$t('common.Title')}" />
	<meta property="og:description" content={$t('common.Description')} />
	<meta property="og:image" content="" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={PUBLIC_DEFAULT_URL} />
	<meta property="twitter:url" content="https://{PUBLIC_DEFAULT_URL}" />
	<meta name="twitter:title" content="Thibault - {$t('common.Title')}" />
	<meta name="twitter:description" content={$t('common.Description')} />
	<meta name="twitter:image" content="" />
</svelte:head>

<div class={theme}>
	<div
		class="h-screen w-screen overflow-auto bg-orange-100 text-zinc-700 dark:bg-slate-900 dark:text-zinc-200"
	>
		<div class="relative">
			<Header />
			<main class="mb-[60px] h-full w-full overflow-x-clip sm:mb-0">
				<slot />
			</main>
		</div>
	</div>
</div>
