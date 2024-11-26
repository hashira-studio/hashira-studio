<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Pillar from './Pillar.svelte';
  
  const dispatch = createEventDispatcher();
  let isVisible = false;
  
  setTimeout(() => {
    isVisible = true;
  }, 100);
  
  const pillars = [
    {
      kanji: '誠',
      meaning: 'Integrity',
      description: 'We believe in absolute transparency and authenticity in every project we undertake.'
    },
    {
      kanji: '創',
      meaning: 'Innovation',
      description: 'Pushing boundaries through creative solutions and forward-thinking approaches.'
    },
    {
      kanji: '調',
      meaning: 'Harmony',
      description: 'Creating perfect balance between aesthetics and functionality in digital experiences.'
    }
  ];
</script>

<div class="min-h-screen relative z-20 bg-black/90 backdrop-blur-md">
  <div class="container mx-auto px-6 py-20">
    <button on:click={() => dispatch('close')} class="fixed top-8 left-8 text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm rounded-lg px-4 py-2 hover:bg-white/5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Back
    </button>

    <div class="max-w-screen-xl mx-auto {isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000">
      <h2 class="text-4xl md:text-6xl font-display text-white/90 text-center mb-4 font-semibold">Our Philosophy</h2>
      <p class="text-white/60 text-center max-w-2xl mx-auto mb-20 text-sm tracking-wider leading-relaxed">Our foundation is built upon three essential pillars that guide every aspect of our creative process and client relationships.</p>
      <div class="grid md:grid-cols-3 gap-8">
        {#each pillars as pillar}
          <Pillar {...pillar} />
        {/each}
      </div>
      <div class="mt-20 text-center">
        <p class="text-white/60 max-w-2xl mx-auto text-sm tracking-wider leading-relaxed">These pillars represent more than just principles—they are the foundation of our approach to every project, ensuring we deliver work that not only meets but exceeds expectations.</p>
      </div>
    </div>
  </div>
</div>