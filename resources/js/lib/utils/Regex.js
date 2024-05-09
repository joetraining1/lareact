export const urlFilter = (params) => {
    const rex = /[^\/](\w*)/g;
    const test = params.match(rex);

    return test ? test : "/";
};
