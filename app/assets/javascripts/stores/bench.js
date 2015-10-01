(function(root){
  var _benches = [];
  var CHANGE_EVENT = "change";

  var resetBenches = function(benches) {
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          break;

        default:
          // No-op
      }
    }),

  });
})(this);
