import { type RuntimeConfig } from '../index.ts';
declare const _default: abstract new <K extends keyof RuntimeConfig>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [K];
        Named: object;
    };
    Return: {
        [key: string]: string;
    }[K];
}>;
export default _default;
//# sourceMappingURL=runtime-config.d.ts.map