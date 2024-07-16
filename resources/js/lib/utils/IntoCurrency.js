export const Rupiah = (int) => {
    const Rp = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    return Rp.format(int);
};
