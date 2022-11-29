sap.ui.define(["sap/ui/base/Object"], function (Object) {
  /**
   * @namespace hacking.away.sampleapp.models
   */
  const BaseObject = Object.extend("hacking.away.sampleapp.models.BaseObject", {
    constructor: function _constructor() {
      Object.prototype.constructor.call(this);
      this.busy = false;
      this.busy = false;
    },
    setBusy: function _setBusy(busy) {
      this.busy = busy;
    }
  });
  return BaseObject;
});
//# sourceMappingURL=BaseObject.js.map