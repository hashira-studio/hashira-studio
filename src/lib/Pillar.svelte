<script lang="ts">
  export let kanji: string;
  export let meaning: string;
  export let description: string;
</script>

<div class="bg-white/5 backdrop-blur-sm p-8 md:p-10 group hover:bg-white/10 transition-all duration-500 rounded-2xl">
  <div class="font-display text-6xl md:text-7xl font-light mb-4 text-white/90 group-hover:text-white transition-colors">{kanji}</div>
  <div class="text-white/80 font-display text-xl tracking-wider mb-2 font-medium">{meaning}</div>
  <div class="text-white/60 text-sm tracking-wide">{description}</div>
</div>