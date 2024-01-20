export default ($app, rootId) => {
    const target = document.getElementById(rootId);
    target.replaceWith($app);
    return;
};