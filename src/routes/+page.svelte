<script lang="ts">
	import { t } from '$lib/i18n/translations';
	export let data;
	$: latestViews =data.latestViews
</script>

<div class="main p-2">
	{$t('home.base')}
</div>

<table>
	<thead>
		<tr><th>Page name</th></tr>
	</thead>
	<tbody>
	{#each latestViews as page}
	<tr><td>{page.pageName}</td></tr>
	{/each}
	</tbody>
</table>

<style>
	.main {
		background-image: url('/api/v0/pageview/home');
	}
</style>
