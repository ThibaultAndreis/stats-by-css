<script lang="ts">
	import { browser } from '$app/environment';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { themeStore } from '$lib/stores/settings';

	import { t, locale } from '$lib/i18n/translations';

	const enhanceForm = (theme) => () => {
		themeStore.set(theme);
		return async ({ result }) => {
			await invalidateAll();
			await applyAction(result);
		};
	};
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

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="p-4">
	<div class=" mb-4">
		<h1>{$t('common.Settings')}</h1>
	</div>
	<div><i>{$t('settings.These settings are common to my subdomains.')}</i></div>
	<div class="flex flex-col gap-8 p-4">
		<div class="section">
			<h2 class="text-2xl">{$t('settings.Theme')}</h2>
			<ul class="p-2">
				<li>
					<form method="POST" action="?/setTheme" use:enhance={enhanceForm('light')}>
						<input type="hidden" name="theme" value="light" />
						<button
							class="px-2 underline {theme === 'light' ? 'bg-purple-300 text-zinc-700' : ''}"
							type="submit"
						>
							{$t('settings.Light')}
						</button>
					</form>
				</li>
				<li>
					<form method="POST" action="?/setTheme" use:enhance={enhanceForm('dark')}>
						<input type="hidden" name="theme" value="dark" />
						<button
							class="px-2 underline {theme === 'dark' ? 'bg-purple-300 text-zinc-700' : ''}"
							type="submit"
						>
							{$t('settings.Dark')}
						</button>
					</form>
				</li>
			</ul>
		</div>
		<div class="section">
			<h2 class="text-2xl">{$t('settings.Language')}</h2>
			<ul class="p-2">
				<li>
					<form method="POST" action="?/setLang" use:enhance>
						<input type="hidden" name="lang" value="fr" />
						<button
							class="px-2 underline {$locale === 'fr' ? 'bg-purple-300 text-zinc-700' : ''}"
							type="submit"
						>
							Français
						</button>
					</form>
				</li>
				<li>
					<form method="POST" action="?/setLang" use:enhance>
						<input type="hidden" name="lang" value="en" />
						<button
							class="px-2 underline {$locale === 'en' ? 'bg-purple-300 text-zinc-700' : ''}"
							type="submit"
						>
							English
						</button>
					</form>
				</li>
			</ul>
		</div>
	</div>
</div>
