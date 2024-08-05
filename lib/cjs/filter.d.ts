declare function filter({ data, paths, keys, input, cb }: {
    data?: null | undefined;
    paths?: {} | undefined;
    keys?: never[] | undefined;
    input?: string | undefined;
    cb?: ((data: any) => void) | undefined;
}): any;
export default filter;
