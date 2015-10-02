ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  createBench: function(data) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.CREATE_BENCH,
      data: data
    });
  }
};
