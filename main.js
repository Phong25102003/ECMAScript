import { render, router } from "./lib";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";
import PostDetailPage from "./pages/post-detail";
import PostsPage from "./pages/post";
import ProjectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/project";
import AdminProjectsPage from "./pages/admin/project";

// alt + shift + o
// option + shift +
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(() => ProjectDetailPage(params), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.notFound(() => render(NotFoundPage, app));
//npm i navigo --save
router.resolve();

// render(HomePage, app);
