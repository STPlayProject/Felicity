// Generated by CoffeeScript 1.8.0
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['text!html/frame/details.html', 'UI/UItemplate'], function(HTMLTemplate, UItemplate) {
  var Details;
  Details = (function(_super) {
    __extends(Details, _super);

    function Details() {
      _super.call(this, arguments);
      this.title = "";
    }

    return Details;

  })(UItemplate);
  return Details;
});