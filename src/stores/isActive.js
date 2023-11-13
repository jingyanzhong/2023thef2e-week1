import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIsActiveStore = defineStore('isActive', () => {
  const isActive = ref(null)

  function navActive (active) {
    isActive.value = active
  }
  return { isActive, navActive }
})
