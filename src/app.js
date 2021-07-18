import createRouter from "./router";
import createPage from "./pages";
import CONSTANTS from "./constants";
import "./app.scss";

document.addEventListener("DOMContentLoaded", async () => {
 const router = new createRouter();
 const pages = createPage();

 router.addRoute("/", pages.home);
 router.addRoute("/quiz", pages.quiz);
 router.addRoute("/result", pages.result);
 router.addNotFound(pages.notFound);
 router.on(CONSTANTS.NAV_SELECTOR);
 router.start();
});
