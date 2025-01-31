import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno
} from 'unocss'

export default defineConfig({
    include: [
        // If you’re using Next.js with /pages or /app, match .js/.ts/.jsx/.tsx:
        /\.(js|ts|jsx|tsx)$/,
        // If you use MDX or other extensions, add them here:
        /\.mdx?$/,
    ],
    exclude: [
        // Don’t scan node_modules or .git
        /node_modules/,
        /.git/,
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
        // ...
    ],
})