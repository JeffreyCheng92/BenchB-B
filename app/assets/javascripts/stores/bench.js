(function(root){
  var _benches = [];
  var _currentBench = {};
  var CHANGE_EVENT = "change";

  var resetBenches = function(benches) {
    _benches = benches;
    BenchStore.emit(CHANGE_EVENT);
  };

  var _createBench = function(data) {
    _benches.push({ description: data.description,
                    lat: data.lat,
                    lng: data.lng,
                    seating: data.seating
                  });
  };

  var _setBenchShow = function(bench) {
    _currentBench = bench;
    BenchStore.emit(CHANGE_EVENT);
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice(0);
    },

    showBench: function() {
      return $.extend(true, {}, _currentBench);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          break;
        case BenchConstants.CREATE_BENCH:
          _createBench(payload.data);
          break;
        case BenchConstants.BENCH_RECEIVED:
          _setBenchShow(payload.bench);
          break;
        default:
          // No-op
      }
    }),

  });
})(this);
