# Tailwind Touch Plugin

This is a fork of `tailwindcss-touch`, upgraded due to lack of maintenance on the original.

This plugin adds a collection of variants to allow fine grain control over how elements appear on touch and non touch devices, CSS Tricks does a great job of detailing how the underlying media queries work you can read more about this here: https://css-tricks.com/touch-devices-not-judged-size.

## Installation

Add this plugin to your project:

#### Install via npm, yarn, pnpm, bun, etc.
```bash
npm install -D tailwind-touch
```
```bash
yarn add -D tailwind-touch
```
```bash
pnpm add -D tailwind-touch
```
```bash
bun add -D tailwind-touch
```

## Usage

Add the tailwindcss-touch plugin to your css file, or tailwind.config.js if you're still using the js config. 

```css
@plugin 'tailwind-touch'
```

```js
plugins: [
    require('tailwind-touch'),
],

```

The following variants are currently available:

```css
/* pointer-coarse */
@media (pointer: coarse) { ... } 

/* pointer-fine */
@media (pointer: fine) { ... }

/* pointer-none */
@media (pointer: none) { ... }

/* hover-hover */
@media (hover: hover) { ... }

/* hover-none */
@media (hover: none) { ... }
```


Once the plugin is installed and added to the config, you can use it as you would any other media query modifier in Tailwind
```html
<div class="pointer-coarse:hidden pointer-fine:flex">...</div>
```

## Credits

- [Steadfast Collective](https://github.com/steadfastcollective)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

