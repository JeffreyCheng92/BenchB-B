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
};
