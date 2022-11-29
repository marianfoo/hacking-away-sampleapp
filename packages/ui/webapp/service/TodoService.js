sap.ui.define(["./BaseService"], function (__BaseService) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseService = _interopRequireDefault(__BaseService);
  /**
   * @namespace hacking.away.sampleapp.service
   */
  const TodoService = BaseService.extend("hacking.away.sampleapp.service.TodoService", {
    constructor: function _constructor(model) {
      BaseService.prototype.constructor.call(this, model);
    },
    getTodosData: async function _getTodosData() {
      const result = await this.odata("/Todos").get();
      return result.data.results;
    },
    getTodos: function _getTodos() {
      return this.odata("/Todos").get();
    },
    addTodo: function _addTodo(todo) {
      return this.odata("/Todos").post(todo);
    },
    deleteTodo: function _deleteTodo(id) {
      const todoPath = this.model.createKey("/Todos", {
        id
      });
      return this.odata(todoPath).delete();
    },
    updateTodo: function _updateTodo(todo) {
      const todoPath = this.model.createKey("/Todos", {
        id: todo.id
      });
      return this.odata(todoPath).put(todo);
    }
  });
  return TodoService;
});
//# sourceMappingURL=TodoService.js.map