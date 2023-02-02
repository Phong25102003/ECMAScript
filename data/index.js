const menuList = [
    { name: "Home", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Posts", path: "/posts" },
    { name: "Contact", path: "/contact" },
    { name: "admin", path: "/admin/project" },
];

const projects = [
    { id: 1, name: "Dự án mẫu", img: "https://tse1.mm.bing.net/th?id=OIP.Wds-PDrIxUDUi7Qu9jA-WQHaE1&pid=Api&P=0" },
    {
        id: 2,
        name: "Dự án 1",
        img: "https://picsum.photos/400/400",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        img: "https://picsum.photos/400/400",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
];
export { projects, menuList };
