export const menuItems = [
    {
        id: 1,
        label: "Administración",
        isTitle: true
    },
    {
        id: 2,
        label: "Generar QR",
        icon: "uil-dialpad",
        link: "/generar-qr"
    },
    {
        id: 3,
        label: "Planes",
        icon: "uil-building",
        link: "/planes"
    },
    {
        id: 4,
        label: "Colegios",
        icon: "uil-building",
        subItems: [
            {
                id: 4.1,
                label: "Colegios",
                link: "/colegios",
                parentId: 4,
            },
            {
                id: 4.2,
                label: "Administradores",
                link: "/administradores-colegio",
                parentId: 4,
            }
        ]
    },
    {
        id: 6,
        label: "Ventas",
        icon: "uil-usd-square",
        link: "/"
    }
];
