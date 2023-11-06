# Custom Sveltekit template

This is my custom sveltekit template

It includes tailwind, i18n, dark theme management, superforms, pm2 and prettier v2.8 as v3 is broken

## Creating a project

Git clone this project, then change the upstream repo to your own.

```bash

git clone git@github.com:ThibaultAndreis/sveltekit-template.git  ./<your project name>

cd <your project name>

git remote set-url <your project upstream url>

pnpm install

pnpm dev
```

## Development

All styles tags should have the lang=postcss param

```sveltehtml
<style lang="postcss">
  /*
    Your style
  */
</style>
```

All script tags should have the lang=ts param
```sveltehtml
<script lang="ts">
  /*
    Your script
  */
</script>
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

Don't forget to change your application name in the package.json and ecosystem.json files

Currently, the template use the bun adapter and interpreter.

it can easily be changed to node :

```typescript
//In svelte.config.js

import { vitePreprocess } from '@sveltejs/kit/vite';
- import adapter from 'svelte-adapter-bun';
+ import adapter from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      precompress: true
    })
  }
};

export default config;

```


```json5
//In ecosystem.json
{
  "apps": [
  {
    "name": "project-name",
    - "interpreter": "bun",
    + "interpreter": "node",
    "env": {
      "NODE_ENV": "production",
      "PORT": "3000",
      "HOST": "127.0.0.1"
    },
    "script": "build/index.js",
    "log_date_format": "YYYY-MM-DD HH:mm:ss"
  }
]
}
```
