sap.ui.define(["sap/ui/core/Fragment", "./Base.controller"], function (Fragment, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace hacking.away.sampleapp.controller
   */
  const Dialog = BaseController.extend("hacking.away.sampleapp.controller.Dialog", {
    fragmentById: function _fragmentById(viewController, fragment, id) {
      return sap.ui.getCore().byId(viewController.createId(Fragment.createId(fragment, id)));
    }
  });
  return Dialog;
});
//# sourceMappingURL=Dialog.controller.js.map