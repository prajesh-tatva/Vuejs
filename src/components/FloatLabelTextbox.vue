<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['text', 'type', 'append', 'prepend', 'icon', 'iconbtn','error'])
const emit = defineEmits(['togglePasswordVisibility'])

const textbox = ref('')
const isFocused = ref(false)

const onFocus = () => {
  isFocused.value = true
}

const onBlur = () => {
  isFocused.value = false
}

const togglePasswordVisibility = () => {
  emit('togglePasswordVisibility')
}
</script>


<template>
  <div class="hover-label form-group" :class="{'with-prepend':props.prepend,'error': props.error}">
    <el-input :class="{ 'focused': isFocused, 'with-ig': props.prepend || props.append }" v-model="textbox"
      @focus="onFocus" @blur="onBlur" :type="type">

      <!-- if prepend is true -->
      <template #prepend v-if="props.prepend">
        <el-button circle v-if="props.iconbtn" @click="togglePasswordVisibility"><img :src="props.iconbtn"/></el-button>
        <em class="el-button" circle v-if="props.icon"><img :src="props.icon"/></em>
      </template>
      
      <!-- if append is true -->
      <template #append v-if="props.append">
        <el-button circle v-if="props.iconbtn" @click="togglePasswordVisibility"><img :src="props.iconbtn"/></el-button>
        <em class="el-button" circle v-if="props.icon"><img :src="props.icon"/></em>
      </template>
    </el-input>

    <!-- floating label on focus and text -->
    <label class="label" :class="{ 'active': isFocused || textbox }">{{ props.text }} </label>

    <!-- Error and hint messages -->
    <p class="hint" v-if="props.error">{{props.error}}</p>
  </div>
</template>