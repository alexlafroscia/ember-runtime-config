import { type RuntimeConfig } from '../index';
export interface RuntimeConfigSignature<K extends keyof RuntimeConfig = keyof RuntimeConfig> {
    Args: {
        Positional: [K];
    };
    Return: RuntimeConfig[K];
}
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: ["GREETING"];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: string;
}>;
export default _default;
//# sourceMappingURL=runtime-config.d.ts.map