sap.ui.define(["./mockserver"], function (__mockserver) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const mockserver = _interopRequireDefault(__mockserver);
  mockserver.init();
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
//# sourceMappingURL=initMockServer.js.map