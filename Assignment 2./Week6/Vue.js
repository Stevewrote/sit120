Vue.createApp({
    data() {
      return {
        checkedNames: []
      }
    }
  }).mount('#v-model-multiple-checkboxes')

  Vue.createApp2({
    data() {
      return {
        selected: 'Leader',
        options: [
          { text: 'Leader', value: 'Jake' },
          { text: 'Fighter', value: 'Rachel' },
          { text: 'Philosopher', value: 'Cassie' }
        ]
      }
    }
  }).mount('#v-model-select-dynamic')
