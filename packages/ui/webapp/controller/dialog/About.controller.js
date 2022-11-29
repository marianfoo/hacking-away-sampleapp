sap.ui.define(["../Dialog.controller", "sap/ui/model/json/JSONModel"], function (__DialogController, JSONModel) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const DialogController = _interopRequireDefault(__DialogController);
  /**
   * @namespace hacking.away.sampleapp.controller.dialog
   */
  const About = DialogController.extend("hacking.away.sampleapp.controller.dialog.About", {
    onBeforeShow: function _onBeforeShow(viewController, dialog, resolve, data) {
      this.dialog = dialog;
      this.viewController = viewController;
      this.data = data;
      this.resolve = resolve;
      this.dialog.fragment.setModel(new JSONModel({
        param: this.data.param
      }));
    },
    onClose: function _onClose(event) {
      this.dialog.fragment.close(); //eslint-disable-line
      const text = this.fragmentById(this.viewController, "About", "textField");
      this.resolve(text);
    }
  });
  return About;
});
//# sourceMappingURL=About.controller.js.map