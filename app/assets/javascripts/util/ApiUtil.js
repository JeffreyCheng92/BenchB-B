ApiUtil = {
  fetchBenches: function(data) {
    $.ajax({
      type: 'GET',
      url: '/benches',
      data: data,
      dataType: "json",
      success: function(benches){
        ApiActions.receiveAll(benches);
      },
      error: function() {
        debugger;
      }
    });
  },

  fetchBench: function(id) {
    $.ajax({
      type: 'GET',
      url: '/benches/' + id,
      success: function(bench) {
        ApiActions.receiveBench(bench);
      },
      error: function() {
        debugger;
      }
    });
  },

  createBench: function(formData) {
    $.ajax({
      type: 'POST',
      url: '/benches',
      data: formData,
      dataType: 'json',
      success: function(formData){
        ApiActions.createBench(formData);
      },
      error: function() {
        debugger;
      }
    });
  },

  addParam: function(data) {
    FilterActions.addParam(data);
  },
};
