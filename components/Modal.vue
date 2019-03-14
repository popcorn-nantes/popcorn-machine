<template>
  <div class="modal" :id="id" aria-hidden="true">
    <div class="modal-overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal-content has-text-centered"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalLabelId"
      >
        <div class="box">
          <div :id="modalLabelId">
            <slot name="title">
              <h1 class="title">Le slot titre est obligatoire</h1>
            </slot>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="fermer la fenêtre de dialogue"
      data-micromodal-close
    ></button>
  </div>
</template>

<script>
import MicroModal from 'micromodal'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    modalLabelId: function() {
      return `${this.id}-title`
    }
  },
  methods: {
    open() {
      MicroModal.show(this.id)
    }
  }
}
</script>

<style scoped>
.modal {
  display: none;
}

.modal.is-open {
  display: block;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
