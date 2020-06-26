const mainRoutes = (app) => {
  app.get("/", (req, res) => {
    res.end();
  });
};

module.exports = { index: mainRoutes };
