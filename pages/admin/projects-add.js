import { projects } from "../../data";
import { router, useEffect } from "../../lib";

const AdminAddProjectsPage = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const newObject = {
                id: projects.length + 1,
                name: projectName.value,
                img: "https://picsum.photos/400/400",
            };
            projects.push(newObject);
            localStorage.setItem("project", JSON.stringify(projects));
            router.navigate("/admin/project");
        });
    });



};

export default AdminAddProjectsPage;