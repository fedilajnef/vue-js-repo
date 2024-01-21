import { Emitter } from 'mitt'

declare module 'vue' {
  interface ComponentCustomProperties {
    $emitter: Emitter
  }
}