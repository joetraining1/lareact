export const FileSlicer = (str) => {
    const lastExt = str.lastIndexOf(".");
    const fileName = str.substring(0, 10).concat("...");
    const ext = str.substring(lastExt + 1);
    return fileName.concat(ext);
};
