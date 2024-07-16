export const FileSlicer = (str) => {
    if (str === "") {
        return "";
    }
    const lastExt = str.lastIndexOf(".");
    const fileName = str.substring(0, 10).concat("...");
    const ext = str.substring(lastExt + 1);
    const res = fileName.concat(ext);
    return res;
};
