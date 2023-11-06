<script lang="ts">
    import {page} from '$app/stores';
    import {t} from '$lib/i18n/translations';

    $: isActive = (url: string): boolean => {
        return $page.url.pathname === url;
    };
</script>

<nav
        class="fixed bottom-0 left-0 right-0 top-auto z-10 border-b-2 border-t-2 border-zinc-700 bg-orange-100/75 px-4 py-4 backdrop-blur dark:border-slate-100 dark:bg-slate-900/75 sm:bottom-auto sm:left-auto sm:top-0 sm:rounded-bl-sm sm:border-l-2 sm:border-t-0 sm:py-2"
>
    <ul class="flex items-center justify-center gap-4">
        <li class={isActive('/') ? 'activePage bg-purple-300' : ''}>
            <a class="text-center" href="/">{$t('common.Home')}</a>
        </li>
        <li class="border border-zinc-700"/>
        <li class={isActive('/settings') ? 'activePage bg-purple-300' : ''}>
            <a class="text-center" href="/settings">{$t('common.Settings')}</a>
        </li>
    </ul>
</nav>

<style lang="postcss">
</style>
