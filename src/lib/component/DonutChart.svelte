<script lang="ts">
	import Chart from 'chart.js/auto';

	export let datas: [{ label: string; value: number }];

	let chartCtx: HTMLCanvasElement;

	const config = {
		type: 'doughnut',
		data: {
			labels: datas.map((row) => row.label),
			datasets: [
				{
					label: 'My First Dataset',
					data: datas.map((row) => row.value),
					hoverOffset: 4
				}
			]
		}
	};
	let chart;
	$: if (chartCtx) {
		chart = new Chart(chartCtx, config);
	}
</script>

<div class="max-w-lg">
	<canvas bind:this={chartCtx} />
</div>
