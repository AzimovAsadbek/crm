export const months = [
    {shor: "Yan", full: "Yanvar"},
    {shor: "Fev", full: "Fevral"},
    {shor: "Mar", full: "Mart"},
    {shor: "Apr", full: "Aprel"},
    {shor: "May", full: "May"},
    {shor: "Iyun", full: "Iyun"},
    {shor: "Iyul", full: "Iyul"},
    {shor: "Avg", full: "Avgust"},
    {shor: "Sen", full: "Sentyabr"},
    {shor: "Okt", full: "Oktyabr"},
    {shor: "Noy", full: "Noyabr"},
    {shor: "Dek", full: "Dekabr"},
]

export const days = [
    {short: "Du", full: "Dushanba"},
    {short: "Se", full: "Seshanba"},
    {short: "Cho", full: "Chorshanba"},
    {short: "Pa", full: "Payshanba"},
    {short: "Ju", full: "Juma"},
    {short: "Sha", full: "Shanba"},
    {short: "Ya", full: "Yakshanba"},
]

const getDay = (number, type) => {
    let date = null;
    if (type === "minus") {
        date = new Date(new Date().setDate(new Date().getDate() + number));
    } else {
        date = new Date(new Date().setDate(new Date().getDate() + number));
    }
    return date
}

const getDate = () => {
    let d = new Date();
    let date = (n = 0) => [
        getDay(n - 3, "minus"),
        getDay(n - 2, "minus"),
        getDay(n - 1, "minus"),
        getDay(n),
        getDay(n + 1),
        getDay(n + 2),
        getDay(n + 3),
    ]
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    return {date, year, month, day};
};


export default getDate;