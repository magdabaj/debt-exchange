const columns = [
    { label: "DŁUŻNIK", accessor: "dluznik", sortable: true },
    { label: "NIP", accessor: "nip", sortable: true },
    { label: "KWOTA ZADŁUŻENIA", accessor: "kwotaZadluzenia", sortable: true },
    {
        label: "DATA POWSTANIA ZOBOWIĄZANIA",
        accessor: "dataPowstaniaZobowiazania",
        sortable: false,
    },
] as const;

export { columns };