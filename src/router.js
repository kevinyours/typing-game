export default () => {
 const routes = [];
 let notFound = () => {};

 const router = {};

 const searchRoutes = () => {
  const currentRoute = routes.find(route => {
   return route.fragment === window.location.hash.replace("#", "");
  });

  if (!currentRoute) {
   notFound();
   return;
  }

  currentRoute.component();
 };

 router.addRoute = (fragment, component) => {
  routes.push({
   fragment,
   component,
  });

  return router;
 };

 router.addNotFound = component => {
  notFound = component;
  return router;
 };

 router.navigate = fragment => {
  window.location.hash = fragment;
 };

 router.on = attrName => {
  document.body.addEventListener("click", e => {
   const { target } = e;

   if (target.matches(attrName)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
   }
  });
 };

 router.start = () => {
  window.addEventListener("hashchange", searchRoutes);
  if (!window.location.hash) {
   window.location.hash = "#/";
  }

  searchRoutes();
 };

 return router;
};
