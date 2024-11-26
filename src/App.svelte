<script lang="ts">
  import Philosophy from './lib/Philosophy.svelte';
  
  let isVisible = false;
  let showPhilosophy = false;
  
  setTimeout(() => {
    isVisible = true;
  }, 100);
</script>

<main class="min-h-screen bg-black overflow-hidden relative">
  <div class="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
  <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=');"></div>

  {#if !showPhilosophy}
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
      <div class="max-w-screen-xl mx-auto text-center {isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000">
        <div class="text-[12rem] md:text-[20rem] font-display leading-none text-white/10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">柱</div>
        <h1 class="relative">
          <span class="block font-display text-7xl md:text-9xl tracking-tight text-white mb-4 font-semibold">HASHIRA</span>
          <span class="block font-display text-base md:text-lg tracking-[1.5em] text-white/50 uppercase font-light">Studio</span>
        </h1>
        <p class="mt-12 text-white/60 max-w-md mx-auto text-sm tracking-wider leading-relaxed font-light">A creative force standing as pillars in the digital realm, crafting experiences that transcend the ordinary.</p>
        <div class="mt-16">
          <button on:click={() => showPhilosophy = true} class="inline-block text-xs tracking-[0.3em] text-white/80 border border-white/10 px-8 py-4 hover:bg-white/5 transition-colors uppercase font-light rounded-xl">Our Philosophy</button>
        </div>
      </div>
      <div class="absolute bottom-8 left-0 w-full text-center text-white/30 text-xs tracking-wider font-light">© 2024 Hashira Studio</div>
    </div>
  {:else}
    <Philosophy on:close={() => showPhilosophy = false} />
  {/if}
</main>

<style>
  :global(body) {
    overflow-x: hidden;
    background: black;
  }
</style>