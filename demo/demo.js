$(function() {
  function update() {
    var field = $(this);

    var target = field.attr("data-target");
    var span = $("#" + target);

    try {
      span.html(MathExpression.fromText(field.val()).tex());
    } catch (exception) {
      span.html(exception);
    }

    var equality = $("#equality");
    try {
      var lhs = MathExpression.fromText($("#lhs-input").val());
      var rhs = MathExpression.fromText($("#rhs-input").val());

      const v = MathExpression.fromLatex(`\\odot`).toString();
      console.log("v:", v);

      if (lhs.equals(rhs)) equality.html("They are equal.");
      else equality.html("They are not equal.");
    } catch (exception) {
      equality.html("");
    }
  }

  $("input[type='text']").change(update);
  $("input[type='text']").keydown(update);
  $("input[type='text']").keypress(update);
  $("input[type='text']").keyup(update);
});
