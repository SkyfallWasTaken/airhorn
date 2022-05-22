import build from "esbuild"

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'out.js',
}).catch(() => process.exit(1))