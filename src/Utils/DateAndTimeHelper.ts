function getCurrentDate(): string {
    const now = new Date();
    const date = now.getDate();
    const month = now.toLocaleString("en-US", { month: "long" });
    const year = now.getFullYear();
    return `${date} ${month} ${year}`;
}

export { getCurrentDate };
