// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function deref(w) {
  return Caml_option.nullable_to_opt(w.deref());
}

function create(i) {
  return $$Array.init(i, (function (param) {
                
              }));
}

function check(arr, i) {
  return Belt_Option.getWithDefault(Belt_Option.map(Caml_array.get(arr, i), (function (x) {
                    return !(x.deref() == null);
                  })), false);
}

function get(arr, i) {
  return Belt_Option.flatMap(Caml_array.get(arr, i), deref);
}

function set(arr, i, value) {
  return Caml_array.set(arr, i, Belt_Option.map(value, (function (prim) {
                    return new WeakRef(prim);
                  })));
}

function blit(arr1, off1, arr2, off2, len) {
  try {
    return $$Array.blit(arr1, off1, arr2, off2, len);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === "Invalid_argument") {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Weak.blit",
            Error: new Error()
          };
    }
    throw exn;
  }
}

function length(arr) {
  return arr.length;
}

exports.create = create;
exports.check = check;
exports.get = get;
exports.set = set;
exports.blit = blit;
exports.length = length;
/* No side effect */