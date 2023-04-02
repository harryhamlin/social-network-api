function format(incoming) {
    const date = new Date(incoming);

    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    const h = date.getHours();
    const min = date.getMinutes();
    const s = date.getSeconds();

    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const mon = months[m];

    return `${d}-${mon}-${y} - ${h}:${min}:${s}`
}

module.exports = format