<script setup>
import logo from '@images/berkompeten_logo.svg?raw';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { useDisplay } from 'vuetify';

const props = defineProps({
  tag: {
    type: null,
    required: false,
    default: 'aside',
  },
  isOverlayNavActive: {
    type: Boolean,
    required: true,
  },
  toggleIsOverlayNavActive: {
    type: Function,
    required: true,
  },
  isNavCollapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const { mdAndDown } = useDisplay()
const refNav = ref()
const isHovered = ref(false)

/*ℹ️ Close overlay side when route is changed
Close overlay vertical nav when link is clicked
*/
const route = useRoute()

watch(() => route.path, () => {
  props.toggleIsOverlayNavActive(false)
})

const isVerticalNavScrolled = ref(false)
const updateIsVerticalNavScrolled = val => isVerticalNavScrolled.value = val

const handleNavScroll = evt => {
  isVerticalNavScrolled.value = evt.target.scrollTop > 0
}

const toggleOverlayNav = () => {
  props.toggleIsOverlayNavActive(!props.isOverlayNavActive);
}

const onMouseEnter = () => {
  if (props.isNavCollapsed && !mdAndDown.value) {
    isHovered.value = true
  }
}

const onMouseLeave = () => {
  isHovered.value = false
}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <Component
    :is="props.tag"
    ref="refNav"
    class="layout-vertical-nav"
    :class="[
      {
        'visible': isOverlayNavActive,
        'scrolled': isVerticalNavScrolled,
        'overlay-nav': mdAndDown,
        'collapsed': isNavCollapsed && !mdAndDown,
        'hovered': isHovered,
      },
    ]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- 👉 Header -->
    <div class="nav-header">
      <div class="d-flex align-items-center">
        <!-- 👉 Logo -->
        <RouterLink to="/" class="app-logo app-title-wrapper">
          <div v-if="isNavCollapsed && !mdAndDown && !isHovered" class="logo-placeholder">
            <img src="/favicon.ico" alt="Logo" style="width: 28px; height: 28px; display: block;" />
          </div>
          <div v-else class="d-flex" v-html="logo" />
        </RouterLink>
        
        <!-- 👉 Toggle button -->
        <button @click="toggleOverlayNav" class="header-action">
          <VIcon icon="ri-menu-line" />
        </button>
      </div>
    </div>
    <slot name="before-nav-items">
      <div class="vertical-nav-items-shadow" />
    </slot>
    <slot
      name="nav-items"
      :update-is-vertical-nav-scrolled="updateIsVerticalNavScrolled"
    >
      <PerfectScrollbar
        tag="ul"
        class="nav-items"
        :options="{ wheelPropagation: false }"
        @ps-scroll-y="handleNavScroll"
      >
        <slot />
      </PerfectScrollbar>
    </slot>

    <slot name="after-nav-items" />
  </Component>
</template>

<style lang="scss" scoped>
.app-logo {
  display: flex;
  align-items: left;
  column-gap: 0.75rem;

  .app-logo-title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 0.75rem;
    text-transform: uppercase;
  }
}

.logo-placeholder {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
</style>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/mixins";

.header-action {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: #333; // Adjust the color as needed
  cursor: pointer; // Adjust the margin as needed

  &:hover {
    background-color: #eee; // Adjust the background color on hover as needed
  }
}

// 👉 Vertical Nav
.layout-vertical-nav {
  position: fixed;
  z-index: variables.$layout-vertical-nav-z-index;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: variables.$layout-vertical-nav-width;
  inset-block-start: 0;
  inset-inline-start: 0;
  transition: inline-size 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  will-change: transform, inline-size;
  background-color: variables.$vertical-nav-background-color;

  &.hovered {
    inline-size: variables.$layout-vertical-nav-width !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .nav-header {
    display: flex;
    align-items: center;

    .header-action {
      cursor: pointer;

      @at-root {
        #{variables.$selector-vertical-nav-mini} .nav-header .header-action {
          &.nav-pin,
          &.nav-unpin {
            display: none !important;
          }
        }
      }
    }
  }

  .app-title-wrapper {
    margin-inline-end: auto;
  }

  .nav-items {
    block-size: 100%;

    // ℹ️ We no loner needs this overflow styles as perfect scrollbar applies it
    // overflow-x: hidden;

    // // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
    // overflow-y: auto;
  }

  .nav-item-title, 
  .nav-group-arrow,
  .nav-item-badge {
    transition: opacity 0.25s ease-in-out;
  }

  .nav-item-title {
    overflow: hidden;
    margin-inline-end: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 👉 Collapsed
  .layout-vertical-nav-collapsed &,
  &.collapsed {
    &:not(.hovered) {
      inline-size: variables.$layout-vertical-nav-collapsed-width;

      // Center the app logo in collapsed state
      .nav-header {
        justify-content: center;
        
        .app-title-wrapper {
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }
      }

      // Hide text in collapsed state
      .nav-item-title, 
      .nav-group-arrow,
      .nav-item-badge {
        opacity: 0;
        visibility: hidden;
      }

      // Hide header action in collapsed state on desktop
      .header-action {
        display: none;
      }
    }
  }
}

// Small screen vertical nav transition
@media (max-width:1279px) {
  .layout-vertical-nav {
    &:not(.visible) {
      transform: translateX(-#{variables.$layout-vertical-nav-width});

      @include mixins.rtl {
        transform: translateX(variables.$layout-vertical-nav-width);
      }
    }

    transition: transform 0.25s ease-in-out;
  }
}
</style>
