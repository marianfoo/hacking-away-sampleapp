sap.ui.define(["./BaseObject"], function (__BaseObject) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseObject = _interopRequireDefault(__BaseObject);
  /**
   * @namespace hacking.away.sampleapp.models
   */
  const TodoItem = BaseObject.extend("hacking.away.sampleapp.models.TodoItem", {
    constructor: function _constructor(data) {
      BaseObject.prototype.constructor.call(this);
      if (data) {
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
      }
      !this.id && (this.id = this.generateId());
    },
    getId: function _getId() {
      return this.id;
    },
    generateId: function _generateId() {
      return Math.round(Math.random() * 100000);
    },
    setCompleted: function _setCompleted(completed) {
      this.completed = completed;
    },
    getCompleted: function _getCompleted() {
      return this.completed;
    },
    setTitle: function _setTitle(title) {
      this.title = title;
    },
    getJSON: function _getJSON() {
      return {
        id: this.id,
        title: this.title,
        completed: this.completed
      };
    }
  });
  return TodoItem;
});
//# sourceMappingURL=TodoItem.js.map