sap.ui.define(["./Base.controller", "sap/m/MessageToast", "hacking/away/samplelib/CustomChart"], function (__BaseController, MessageToast, __CustomChart) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const CustomChart = _interopRequireDefault(__CustomChart);
  /**
   * @namespace hacking.away.sampleapp.controller
   */
  const MainController = BaseController.extend("hacking.away.sampleapp.controller.MainController", {
    onInit: function _onInit() {
      BaseController.prototype.onInit.call(this);
      const cc = new CustomChart({
        title: "test"
      });
      cc.setTitle("test");
    },
    getTodoModel: function _getTodoModel() {
      return this.getOwnerComponent().getModel();
    },
    getTodoId: function _getTodoId(source) {
      const context = source.getBindingContext();
      return context.getProperty("id");
    },
    addTodo: async function _addTodo(title) {
      await this.getTodoModel().create(title);
      this.todoModel.resetNewTodo();
    },
    deleteTodo: async function _deleteTodo(id, event) {
      const todoItem = event.getSource().getBindingContext().getObject();
      await this.getTodoModel().delete(todoItem);
    },
    openEditDialog: function _openEditDialog(id, title, event) {
      const todoItem = event.getSource().getBindingContext().getObject();
      this.todoModel.setUpdateTodo(todoItem);
      // this.todoModelData.edit = todoItem;
      this.byId("editDialog").show(false);
    },
    closeEditDialog: async function _closeEditDialog(id, title) {
      await this.getTodoModel().updateTitle(id, title);
      this.byId("editDialog").close();
    },
    completeTodo: async function _completeTodo(id, checked, event) {
      const todoItem = event.getSource().getBindingContext().getObject();
      await this.getTodoModel().update(todoItem);
    },
    openAboutDialog: async function _openAboutDialog() {
      const closeResult = await this.openFragment({
        name: "hacking.away.sampleapp.view.dialog.About",
        data: {
          param: "This is UI5con!"
        }
      });
      MessageToast.show(closeResult);
    }
  });
  return MainController;
});
//# sourceMappingURL=Main.controller.js.map