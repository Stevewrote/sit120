Vue.component("viewers-list", {
    template: `
      <div>
        <viewer-badge
          v-for="viewer in viewers" 
          :info="viewer" 
          :key="viewer.id" />
      </div>`,
    data() {
      return { viewers: concurrentViewersFromWebSockets};
    }
  });

  <template>
  <div class="container">
    <p>
      <strong>{{title}}</strong>
    </p>
    <p>
      Hi! The team has spent
      <em>{{formattedTimeOnSite}} so far on their way to premiership glory</em> 
    </p>
  </div>
</template>

//Task 3

var steveapp = new Vue({
    el: '#steveapp',
    data: {
      message: 'Attempt 1!'
    }
  })
