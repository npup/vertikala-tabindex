export const data = [2015, 2016, 2017, 2018, 2019].map(model);

function model(year) {
    return {
        id: Math.floor(Math.random() * 1e10).toString(16),
        year,
        fields: Array.from({ length: 10 }).fill(""),
    };
}
