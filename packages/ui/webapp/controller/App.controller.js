sap.ui.define(["./Base.controller"], function (__BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace hacking.away.sampleapp.controller
   */
  const AppController = BaseController.extend("hacking.away.sampleapp.controller.AppController", {
    onInit: function _onInit() {
      BaseController.prototype.onInit.call(this);
      // apply content density mode to root view
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    }
  });
  return AppController;
});
//# sourceMappingURL=App.controller.js.map