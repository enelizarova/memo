<script setup>
import Fire from './Fire.vue';

defineProps({
  result: Object
});

const emit = defineEmits(['start', 'close'])

const start = () => {
  emit('start'); 
};

const close = () => {
  emit('close'); 
};
</script>
<template>
    <div class="fixed inset-x-0 inset-y-0 flex items-center justify-center z-50">
        <div class="absolute inset-x-0 inset-y-0 bg-black/60">
        </div>
        <section class="max-w-full relative flex flex-col justify-center items-center bg-[#181818] border-[#BE1622] border-[6px] rounded-[20px] py-10 px-[8.25rem]">
          <div class="absolute inset-x-0 inset-y-0 pointer-events-none">
              <Fire class="absolute inset-x-0 bottom-0" />
            </div>
            <h2 class="bebas text-center uppercase text-[2.5rem] mb-5">{{ result.title }}</h2>
            <div class="text-xl text-center mb-6">{{ result.result }}/10 гойды</div>
            <div class="w-[14.4rem] mb-[1.875rem]">
              <img :src="result.kostya">
            </div>
              <button @click="start()" class="button mx-auto mb-8 p-3 rounded-2xl text-[#BE1622] bg-[#BE1622] text-3xl border border-[#BE1622] text-center uppercase"><span class="relative z-10 bebas">Гойда</span></button>
        </section>
    </div>
</template>
