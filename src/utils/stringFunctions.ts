export const capitaliseWords = (input: string) => {
    return input
        .split(" ")
        .map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : "")
        .join(" ");
};