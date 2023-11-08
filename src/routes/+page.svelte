<script lang="ts">
	import { browser } from '$app/environment';
	import DonutChart from '$lib/component/DonutChart.svelte';
	import { t } from '$lib/i18n/translations';
	export let data;
	$: latestViews = data.latestViews;
</script>

<div class="main p-2">
	<p>Last 10 pages views</p>
	<button class="button">hi</button>
	<table>
		<thead>
			<tr>
				<th>Page name</th>
				<th>Page url</th>
			</tr>
		</thead>
		<tbody>
			{#each latestViews as page}
				<tr>
					<td>{page.name??''}</td>
					<td>{page.url}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if browser}
		<DonutChart datas="{data.viewPerPage}" />
	{/if}
</div>

<style lang="postcss">
	.main:hover {
		background-image: url('/api/v0/pageview/pageName=home/');
	}
	.button:hover{
		background-image: url('/api/v0/hover/buttonTest/');
	}
	.button:active{
		background-image: url('/api/v0/click/buttonTest/');
	}
</style>
