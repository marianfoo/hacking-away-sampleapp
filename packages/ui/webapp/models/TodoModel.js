sap.ui.define(["sap/ui/model/json/JSONModel", "mobx", "sap/ui/model/odata/v2/ODataModel", "../service/TodoService", "./TodoItem"], function (JSONModel, __mobx, ODataModel, __TodoService, __TodoItem) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const makeAutoObservable = __mobx["makeAutoObservable"];
  const observe = __mobx["observe"];
  const TodoService = _interopRequireDefault(__TodoService);
  const TodoItem = _interopRequireDefault(__TodoItem);
  /**
   * @namespace hacking.away.sampleapp.models
   */
  const TodoModel = JSONModel.extend("hacking.away.sampleapp.models.TodoModel", {
    constructor: function _constructor(url) {
      JSONModel.prototype.constructor.call(this, {
        todoItems: [],
        completedCount: 0,
        notCompletedCount: 0,
        new: new TodoItem(),
        edit: new TodoItem()
      });
      makeAutoObservable(this.getData());
      observe(this.getData(), () => {
        this.updateBindings(true);
      });
      this.url = url;
      const model = new ODataModel(url);
      this.todoService = new TodoService(model);
      this.read().then(() => {
        console.log("ok");
      }).catch(() => {
        console.log("nOk");
      });
    },
    resetNewTodo: function _resetNewTodo() {
      this.oData.new = new TodoItem();
    },
    setUpdateTodo: function _setUpdateTodo(todo) {
      this.oData.edit = todo;
    },
    getTodoItem: function _getTodoItem(id) {
      return this.oData.todoItems.find(item => item.getId() === id);
    },
    read: async function _read() {
      const response = await this.todoService.getTodos();
      this.oData.todoItems = response.data.results.map(item => new TodoItem(item));
      this.oData.completedCount = this.oData.todoItems.filter(item => item.getCompleted()).length || 0;
      this.oData.notCompletedCount = this.oData.todoItems.filter(item => !item.getCompleted()).length || 0;
    },
    create: async function _create(title) {
      await this.todoService.addTodo(new TodoItem({
        title
      }).getJSON());
      await this.read();
    },
    delete: async function _delete(todoItem) {
      await this.todoService.deleteTodo(todoItem.getId());
      await this.read();
    },
    update: async function _update(todoItem) {
      await this.todoService.updateTodo(todoItem.getJSON());
      await this.read();
    },
    updateTitle: async function _updateTitle(id, title) {
      const todoItem = this.getTodoItem(id);
      todoItem.setCompleted(false);
      todoItem.setTitle(title);
      await this.update(todoItem);
    }
  });
  return TodoModel;
});
//# sourceMappingURL=TodoModel.js.map