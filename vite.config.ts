import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL('./lib/index.ts', import.meta.url)),
            name: 'SimpleQrbtf',
            fileName: 'index',
            formats: ['es', 'umd', 'cjs'],
        },
        rollupOptions: {
            output: {
                exports: 'named',
            },
        },
    },
    plugins: [
        dts({
            // entryRoot: fileURLToPath(new URL('./lib/index.ts', import.meta.url)),
            // // aliasesExclude: [/^@components/],
            // staticImport: true,
            // insertTypesEntry: true,
            rollupTypes: true,
            // declarationOnly: true,
            insertTypesEntry: true,
        }),
    ],
});
