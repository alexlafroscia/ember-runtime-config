import type ConfigRegistry from 'ember-runtime-config/registry';
export type RuntimeConfig = keyof ConfigRegistry extends never ? {
    [key: string]: string;
} : ConfigRegistry;
export declare function awaitRuntimeConfig(): Promise<RuntimeConfig>;
declare const _default: RuntimeConfig;
export default _default;
//# sourceMappingURL=index.d.ts.map