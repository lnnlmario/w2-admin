import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()]
})
