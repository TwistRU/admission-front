export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const isValidData = (checkList) => {
    return (checkList === null || checkList === undefined || !Array.isArray(checkList)) ? false : checkList.every(item => typeof item !== "undefined" && item !== null)
};
