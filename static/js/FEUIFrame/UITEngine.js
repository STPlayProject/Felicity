// Generated by CoffeeScript 1.8.0
define(function() {

  /*
  	for [value],[index] in [variable]
  	endforin
  	
  	for [key],[value] of [variable]
  	endforof
  	
  	if [expression]
  	elseif [expression]
  	else
  	endif
  	
  	switch [expression]
  		when value,value
  		when value
  		when value
  		else
  	endswitch
   */
  var FUN_TEMPLATE, REG_FORLOOP, REG_TAG, syntaxAnalysis;
  FUN_TEMPLATE = {
    'forin': function(value, index, array, content) {
      return "var " + value + "," + index + ",length,result=[];\nfor(" + index + "=0,length=" + array + ".length;" + index + "<length,++" + index + "){\n	" + value + "=" + array + "[" + index + "];\n	result.push " + content;
    },
    'endforin': function() {
      return '}';
    },
    'forof': function(key, value, obj) {
      return "var " + key + "," + value + ";\nfor (" + key + " in " + obj + "){\n	" + value + "=" + obj + "[" + key + "];";
    },
    'endforof': function() {
      return '}';
    },
    'if': function(expression) {
      return "if(" + expression + "){";
    },
    'elseif': function(expression) {
      return "}else if(" + expression + "){";
    },
    'else': function(expression) {
      return "}else{";
    },
    'endif': function() {
      return '}';
    },
    'switch': function(expression) {
      return "switch(" + expression + "){";
    },
    'when': function(expression) {
      var caseArr, expArr, value;
      expArr = expression.split(',');
      caseArr = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = expArr.length; _i < _len; _i++) {
          value = expArr[_i];
          _results.push("case " + value + ":");
        }
        return _results;
      })();
      caseArr.push('break;');
      return caseArr.join;
    }
  };
  REG_TAG = /\{\s*([^\}]+)?\}/g;
  REG_FORLOOP = /\s*for\s+(.+)\s+(in|of)\s+(\S+)/g;

  /*
  	@params 
  	@return type variable|expression
   */
  return syntaxAnalysis = function() {
    return {};
  };
});
