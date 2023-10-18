import translations from 'maben-block-editor/src/lang/en.json';

export const __ = (key) => {
    return translations[key] ?? null;
}