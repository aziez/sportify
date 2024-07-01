declare module 'tailwindcss/lib/util/flattenColorPalette' {
  // You can specify the types if you know them, or leave it as `any`.
  const flattenColorPalette: any;
  export default flattenColorPalette;
}

declare module 'tailwindcss' {
  import { Config } from 'tailwindcss/types/config';

  export { Config };
}
