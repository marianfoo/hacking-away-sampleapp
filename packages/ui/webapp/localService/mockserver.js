sap.ui.define(["sap/ui/core/util/MockServer", "sap/base/Log"], function (MockServer, Log) {
  var __exports = {
    /**
     * Initializes the mock server.
     * You can configure the delay with the URL parameter "serverDelay".
     * The local mock data in this folder is returned instead of the real data for testing.
     * @public
     */
    init: function () {
      // create
      const mockServer = new MockServer({
        rootUri: "/"
      });

      // simulate against the metadata and mock data
      mockServer.simulate("../localService/metadata.xml", {
        sMockdataBaseUrl: "../localService/mockdata",
        bGenerateMissingMockData: true
      });

      // start
      mockServer.start();
      Log.info("Running the app with mock data");
    }
  };
  return __exports;
});
//# sourceMappingURL=mockserver.js.map