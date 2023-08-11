/// <reference types="ember-source/types/stable/@ember/-internals/glimmer/lib/helper" />
/// <reference types="ember-source/types/stable/@ember/component/helper" />
declare const _default: abstract new <K extends string | number>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
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