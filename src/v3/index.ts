export const version: string = '__VERSION__'

export {
  ref,
  shallowRef,
  isRef,
  toRef,
  toRefs,
  unref,
  customRef,
  triggerRef,
  Ref,
  ToRef,
  ToRefs,
  UnwrapRef,
  ShallowRef,
  ShallowUnwrapRef,
  RefUnwrapBailTypes,
  CustomRefFactory
} from './reactivity/ref'

export {
  reactive,
  isReactive,
  isReadonly,
  isShallow,
  isProxy,
  shallowReactive,
  markRaw,
  toRaw,
  ReactiveFlags,
  ShallowReactive,
  UnwrapNestedRefs
} from './reactivity/reactive'

export { readonly, shallowReadonly, DeepReadonly } from './reactivity/readonly'

export {
  computed,
  ComputedRef,
  WritableComputedRef,
  WritableComputedOptions,
  ComputedGetter,
  ComputedSetter
} from './reactivity/computed'

export {
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  WatchEffect,
  WatchOptions,
  WatchOptionsBase,
  WatchCallback,
  WatchSource,
  WatchStopHandle
} from './apiWatch'

export {
  EffectScope,
  effectScope,
  onScopeDispose,
  getCurrentScope
} from './reactivity/effectScope'

export { DebuggerOptions, DebuggerEvent, DebuggerEventExtraInfo } from './debug'

export { TrackOpTypes, TriggerOpTypes } from './reactivity/operations'

export { provide, inject, InjectionKey } from './apiInject'

export { h } from './h'
export { getCurrentInstance } from './currentInstance'
export { useSlots, useAttrs, mergeDefaults } from './apiSetup'
export { nextTick } from 'core/util/next-tick'
export { set, del } from 'core/observer'

/**
 * @internal type is manually declared in <root>/types/v3-define-component.d.ts
 */
export function defineComponent(options: any) {
  return options
}

export * from './apiLifecycle'
