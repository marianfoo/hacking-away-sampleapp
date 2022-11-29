sap.ui.define(["sap/ui/base/Object"], function (Object) {
  /**
   * @namespace hacking.away.sampleapp.service
   */
  const BaseService = Object.extend("hacking.away.sampleapp.service.BaseService", {
    constructor: function _constructor(model) {
      Object.prototype.constructor.call(this);
      if (model) {
        this.setModel(model);
      }
    },
    setModel: function _setModel(model) {
      this.model = model;
    },
    getModel: function _getModel() {
      return this.model;
    },
    odata: function _odata(url) {
      const core = {
        ajax: (type, url, parameters, data) => {
          const promise = new Promise((resolve, reject) => {
            let params = {};
            if (parameters) {
              params = parameters;
            }
            params.success = (result, response) => {
              const responseResult = {
                data: result,
                response: response
              };
              resolve(responseResult);
            };
            params.error = function (error) {
              reject(error);
            };
            if (data) {
              this.model[type](url, data, params);
            } else {
              this.model[type](url, params);
            }
          });
          return promise;
        }
      };
      return {
        get: params => core.ajax("read", url, params),
        post: (data, params) => core.ajax("create", url, params, data),
        put: (data, params) => core.ajax("update", url, params, data),
        delete: params => core.ajax("remove", url, params)
      };
    }
  });
  return BaseService;
});
//# sourceMappingURL=BaseService.js.map