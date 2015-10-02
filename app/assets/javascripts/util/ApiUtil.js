ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      type: 'GET',
      url: '/benches',
      data: { bounds: bounds },
      dataType: "json",
      success: function(benches){
        ApiActions.receiveAll(benches);
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
      dataType: 'json',
      success: function(formData){
        ApiActions.create(formData);
      },
      error: function() {
        debugger;
      }
    });
  },
};
