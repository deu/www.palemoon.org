
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
    function fetchRemotePackage(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };
    function handleError(error) {
      console.error('package error:', error);
    };
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage('ShadowMap.data', function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
  function runWithFS() {
function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 0, 0, 0).open('GET', '/a.dds');
    new DataRequest(0, 42432, 0, 0).open('GET', '/andyb.ttf');
    new DataRequest(42432, 44698, 0, 0).open('GET', '/diffuse-shadow.hlsl');
    new DataRequest(44698, 50723, 0, 0).open('GET', '/diffuse-shadow_ps.glsl');
    new DataRequest(50723, 51334, 0, 0).open('GET', '/diffuse-shadow_vs.glsl');
    new DataRequest(51334, 52158, 0, 0).open('GET', '/DrawBatchPS.cso');
    new DataRequest(52158, 52687, 0, 0).open('GET', '/DrawBatchPS.hlsl');
    new DataRequest(52687, 53026, 0, 0).open('GET', '/DrawBatchPS.meta');
    new DataRequest(53026, 53814, 0, 0).open('GET', '/DrawBatchVS.cso');
    new DataRequest(53814, 54343, 0, 0).open('GET', '/DrawBatchVS.hlsl');
    new DataRequest(54343, 54403, 0, 0).open('GET', '/DrawBatchVS.meta');
    new DataRequest(54403, 54659, 0, 0).open('GET', '/memory_leak_report.txt');
    new DataRequest(54659, 54862, 0, 0).open('GET', '/shadowmap.hlsl');
    new DataRequest(54862, 54946, 0, 0).open('GET', '/shadowmap_ps.glsl');
    new DataRequest(54946, 55046, 0, 0).open('GET', '/shadowmap_vs.glsl');
    new DataRequest(55046, 81158, 0, 0).open('GET', '/smalle.fon');
    new DataRequest(81158, 867644, 0, 0).open('GET', '/stones.bmp');
    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    }
    var PACKAGE_NAME = 'bin\ShadowMap\ShadowMap.data';
    var REMOTE_PACKAGE_NAME = 'ShadowMap.data';
    var PACKAGE_UUID = '1ffdb71d-2a4a-430e-b88a-e3bd912856db';
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      // Reuse the bytearray from the XHR as the source for file reads.
      DataRequest.prototype.byteArray = byteArray;
          DataRequest.prototype.requests["/a.dds"].onload();
          DataRequest.prototype.requests["/andyb.ttf"].onload();
          DataRequest.prototype.requests["/diffuse-shadow.hlsl"].onload();
          DataRequest.prototype.requests["/diffuse-shadow_ps.glsl"].onload();
          DataRequest.prototype.requests["/diffuse-shadow_vs.glsl"].onload();
          DataRequest.prototype.requests["/DrawBatchPS.cso"].onload();
          DataRequest.prototype.requests["/DrawBatchPS.hlsl"].onload();
          DataRequest.prototype.requests["/DrawBatchPS.meta"].onload();
          DataRequest.prototype.requests["/DrawBatchVS.cso"].onload();
          DataRequest.prototype.requests["/DrawBatchVS.hlsl"].onload();
          DataRequest.prototype.requests["/DrawBatchVS.meta"].onload();
          DataRequest.prototype.requests["/memory_leak_report.txt"].onload();
          DataRequest.prototype.requests["/shadowmap.hlsl"].onload();
          DataRequest.prototype.requests["/shadowmap_ps.glsl"].onload();
          DataRequest.prototype.requests["/shadowmap_vs.glsl"].onload();
          DataRequest.prototype.requests["/smalle.fon"].onload();
          DataRequest.prototype.requests["/stones.bmp"].onload();
          Module['removeRunDependency']('datafile_bin\ShadowMap\ShadowMap.data');
    };
    Module['addRunDependency']('datafile_bin\ShadowMap\ShadowMap.data');
    if (!Module.preloadResults) Module.preloadResults = {};
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }
})();
// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}
// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = function print(x) {
    process['stdout'].write(x + '\n');
  };
  if (!Module['printErr']) Module['printErr'] = function printErr(x) {
    process['stderr'].write(x + '\n');
  };
  var nodeFS = require('fs');
  var nodePath = require('path');
  Module['read'] = function read(filename, binary) {
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    // The path is absolute if the normalized version is the same as the resolved.
    if (!ret && filename != nodePath['resolve'](filename)) {
      filename = path.join(__dirname, '..', 'src', filename);
      ret = nodeFS['readFileSync'](filename);
    }
    if (ret && !binary) ret = ret.toString();
    return ret;
  };
  Module['readBinary'] = function readBinary(filename) { return Module['read'](filename, true) };
  Module['load'] = function load(f) {
    globalEval(read(f));
  };
  Module['arguments'] = process['argv'].slice(2);
  module['exports'] = Module;
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm
  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available (jsc?)' };
  }
  Module['readBinary'] = function readBinary(f) {
    return read(f, 'binary');
  };
  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  this['Module'] = Module;
  eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };
  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
      console.log(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }
  if (ENVIRONMENT_IS_WEB) {
    this['Module'] = Module;
  } else {
    Module['load'] = importScripts;
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}
function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
// *** Environment setup code ***
// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];
// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];
// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// === Auto-generated preamble library stuff ===
//========================================
// Runtime code shared with compiler
//========================================
var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      return '(((' +target + ')+' + (quantum-1) + ')&' + -quantum + ')';
    }
    return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return type[type.length-1] == '*';
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (isArrayType(type)) return true;
  if (/<?{ ?[^}]* ?}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  STACK_ALIGN: 8,
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (vararg) return 8;
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    var index = 0;
    type.flatIndexes = type.fields.map(function(field) {
      index++;
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = Runtime.getAlignSize(field, size);
      } else if (Runtime.isStructType(field)) {
        if (field[1] === '0') {
          // this is [0 x something]. When inside another structure like here, it must be at the end,
          // and it adds no size
          // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
          size = 0;
          if (Types.types[field]) {
            alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
          } else {
            alignSize = type.alignSize || QUANTUM_SIZE;
          }
        } else {
          size = Types.types[field].flatSize;
          alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
        }
      } else if (field[0] == 'b') {
        // bN, large number field, like a [N x i8]
        size = field.substr(1)|0;
        alignSize = 1;
      } else if (field[0] === '<') {
        // vector type
        size = alignSize = Types.types[field].flatSize; // fully aligned
      } else if (field[0] === 'i') {
        // illegal integer field, that could not be legalized because it is an internal structure field
        // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
        size = alignSize = parseInt(field.substr(1))/8;
        assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
      } else {
        assert(false, 'invalid type for calculateStructAlignment');
      }
      if (type.packed) alignSize = 1;
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    if (type.name_ && type.name_[0] === '[') {
      // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
      // allocating a potentially huge array for [999999 x i8] etc.
      type.flatSize = parseInt(type.name_.substr(1))*type.flatSize/2;
    }
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (type.fields.length != struct.length) {
        printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
        return null;
      }
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      if (!args.splice) args = Array.prototype.slice.call(args);
      args.splice(0, 0, ptr);
      return Module['dynCall_' + sig].apply(null, args);
    } else {
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  getAsmConst: function (code, numArgs) {
    // code is a constant string on the heap, so we can cache these
    if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
    var func = Runtime.asmConstCache[code];
    if (func) return func;
    var args = [];
    for (var i = 0; i < numArgs; i++) {
      args.push(String.fromCharCode(36) + i); // $0, $1 etc
    }
    return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + Pointer_stringify(code) + ' })'); // new Function does not allow upvars in node
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[func]) {
      Runtime.funcWrappers[func] = function dynCall_wrapper() {
        return Runtime.dynCall(sig, func, arguments);
      };
    }
    return Runtime.funcWrappers[func];
  },
  UTF8Processor: function () {
    var buffer = [];
    var needed = 0;
    this.processCChar = function (code) {
      code = code & 0xFF;
      if (buffer.length == 0) {
        if ((code & 0x80) == 0x00) {        // 0xxxxxxx
          return String.fromCharCode(code);
        }
        buffer.push(code);
        if ((code & 0xE0) == 0xC0) {        // 110xxxxx
          needed = 1;
        } else if ((code & 0xF0) == 0xE0) { // 1110xxxx
          needed = 2;
        } else {                            // 11110xxx
          needed = 3;
        }
        return '';
      }
      if (needed) {
        buffer.push(code);
        needed--;
        if (needed > 0) return '';
      }
      var c1 = buffer[0];
      var c2 = buffer[1];
      var c3 = buffer[2];
      var c4 = buffer[3];
      var ret;
      if (buffer.length == 2) {
        ret = String.fromCharCode(((c1 & 0x1F) << 6)  | (c2 & 0x3F));
      } else if (buffer.length == 3) {
        ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6)  | (c3 & 0x3F));
      } else {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                        ((c3 & 0x3F) << 6)  | (c4 & 0x3F);
        ret = String.fromCharCode(
          Math.floor((codePoint - 0x10000) / 0x400) + 0xD800,
          (codePoint - 0x10000) % 0x400 + 0xDC00);
      }
      buffer.length = 0;
      return ret;
    }
    this.processJSString = function processJSString(string) {
      string = unescape(encodeURIComponent(string));
      var ret = [];
      for (var i = 0; i < string.length; i++) {
        ret.push(string.charCodeAt(i));
      }
      return ret;
    }
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+7)&-8); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + size)|0;STATICTOP = (((STATICTOP)+7)&-8); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + size)|0;DYNAMICTOP = (((DYNAMICTOP)+7)&-8); if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 8))*(quantum ? quantum : 8); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*(+4294967296))) : ((+((low>>>0)))+((+((high|0)))*(+4294967296)))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}
//========================================
// Runtime essentials
//========================================
var __THREW__ = 0; // Used in checking for thrown exceptions.
var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;
var undef = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}
var globalScope = this;
// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function ccall(ident, returnType, argTypes, args) {
  return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;
// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  try {
    var func = Module['_' + ident]; // closure exported function
    if (!func) func = eval('_' + ident); // explicit lookup
  } catch(e) {
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}
// Internal function that does a C call using a function, not an identifier
function ccallFunc(func, returnType, argTypes, args) {
  var stack = 0;
  function toC(value, type) {
    if (type == 'string') {
      if (value === null || value === undefined || value === 0) return 0; // null string
      value = intArrayFromString(value);
      type = 'array';
    }
    if (type == 'array') {
      if (!stack) stack = Runtime.stackSave();
      var ret = Runtime.stackAlloc(value.length);
      writeArrayToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == 'string') {
      return Pointer_stringify(value);
    }
    assert(type != 'array');
    return value;
  }
  var i = 0;
  var cArgs = args ? args.map(function(arg) {
    return toC(arg, argTypes[i++]);
  }) : [];
  var ret = fromC(func.apply(null, cArgs), returnType);
  if (stack) Runtime.stackRestore(stack);
  return ret;
}
// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function cwrap(ident, returnType, argTypes) {
  var func = getCFunc(ident);
  return function() {
    return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
  }
}
Module["cwrap"] = cwrap;
// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[(ptr)]=value; break;
      case 'i8': HEAP8[(ptr)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;
// Parallel to setValue.
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[(ptr)];
      case 'i8': return HEAP8[(ptr)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module['getValue'] = getValue;
var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;
// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }
  var singleType = typeof types === 'string' ? types : null;
  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }
  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)|0)]=0;
    }
    return ret;
  }
  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }
  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];
    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }
    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later
    setValue(ret+i, curr, type);
    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }
  return ret;
}
Module['allocate'] = allocate;
function Pointer_stringify(ptr, /* optional */ length) {
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = false;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))|0)];
    if (t >= 128) hasUtf = true;
    else if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;
  var ret = '';
  if (!hasUtf) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  var utf8 = new Runtime.UTF8Processor();
  for (i = 0; i < length; i++) {
    t = HEAPU8[(((ptr)+(i))|0)];
    ret += utf8.processCChar(t);
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;
// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF16ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
    if (codeUnit == 0)
      return str;
    ++i;
    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
    str += String.fromCharCode(codeUnit);
  }
}
Module['UTF16ToString'] = UTF16ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function stringToUTF16(str, outPtr) {
  for(var i = 0; i < str.length; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[(((outPtr)+(i*2))>>1)]=codeUnit;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[(((outPtr)+(str.length*2))>>1)]=0;
}
Module['stringToUTF16'] = stringToUTF16;
// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF32ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}
Module['UTF32ToString'] = UTF32ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function stringToUTF32(str, outPtr) {
  var iChar = 0;
  for(var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    var codeUnit = str.charCodeAt(iCodeUnit); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++iCodeUnit);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[(((outPtr)+(iChar*4))>>2)]=codeUnit;
    ++iChar;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[(((outPtr)+(iChar*4))>>2)]=0;
}
Module['stringToUTF32'] = stringToUTF32;
function demangle(func) {
  try {
    // Special-case the entry point, since its name differs from other name mangling.
    if (func == 'Object._main' || func == '_main') {
      return 'main()';
    }
    if (typeof func === 'number') func = Pointer_stringify(func);
    if (func[0] !== '_') return func;
    if (func[1] !== '_') return func; // C function
    if (func[2] !== 'Z') return func;
    switch (func[3]) {
      case 'n': return 'operator new()';
      case 'd': return 'operator delete()';
    }
    var i = 3;
    // params, etc.
    var basicTypes = {
      'v': 'void',
      'b': 'bool',
      'c': 'char',
      's': 'short',
      'i': 'int',
      'l': 'long',
      'f': 'float',
      'd': 'double',
      'w': 'wchar_t',
      'a': 'signed char',
      'h': 'unsigned char',
      't': 'unsigned short',
      'j': 'unsigned int',
      'm': 'unsigned long',
      'x': 'long long',
      'y': 'unsigned long long',
      'z': '...'
    };
    function dump(x) {
      //return;
      if (x) Module.print(x);
      Module.print(func);
      var pre = '';
      for (var a = 0; a < i; a++) pre += ' ';
      Module.print (pre + '^');
    }
    var subs = [];
    function parseNested() {
      i++;
      if (func[i] === 'K') i++; // ignore const
      var parts = [];
      while (func[i] !== 'E') {
        if (func[i] === 'S') { // substitution
          i++;
          var next = func.indexOf('_', i);
          var num = func.substring(i, next) || 0;
          parts.push(subs[num] || '?');
          i = next+1;
          continue;
        }
        if (func[i] === 'C') { // constructor
          parts.push(parts[parts.length-1]);
          i += 2;
          continue;
        }
        var size = parseInt(func.substr(i));
        var pre = size.toString().length;
        if (!size || !pre) { i--; break; } // counter i++ below us
        var curr = func.substr(i + pre, size);
        parts.push(curr);
        subs.push(curr);
        i += pre + size;
      }
      i++; // skip E
      return parts;
    }
    var first = true;
    function parse(rawList, limit, allowVoid) { // main parser
      limit = limit || Infinity;
      var ret = '', list = [];
      function flushList() {
        return '(' + list.join(', ') + ')';
      }
      var name;
      if (func[i] === 'N') {
        // namespaced N-E
        name = parseNested().join('::');
        limit--;
        if (limit === 0) return rawList ? [name] : name;
      } else {
        // not namespaced
        if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
        var size = parseInt(func.substr(i));
        if (size) {
          var pre = size.toString().length;
          name = func.substr(i + pre, size);
          i += pre + size;
        }
      }
      first = false;
      if (func[i] === 'I') {
        i++;
        var iList = parse(true);
        var iRet = parse(true, 1, true);
        ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
      } else {
        ret = name;
      }
      paramLoop: while (i < func.length && limit-- > 0) {
        //dump('paramLoop');
        var c = func[i++];
        if (c in basicTypes) {
          list.push(basicTypes[c]);
        } else {
          switch (c) {
            case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
            case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
            case 'L': { // literal
              i++; // skip basic type
              var end = func.indexOf('E', i);
              var size = end - i;
              list.push(func.substr(i, size));
              i += size + 2; // size + 'EE'
              break;
            }
            case 'A': { // array
              var size = parseInt(func.substr(i));
              i += size.toString().length;
              if (func[i] !== '_') throw '?';
              i++; // skip _
              list.push(parse(true, 1, true)[0] + ' [' + size + ']');
              break;
            }
            case 'E': break paramLoop;
            default: ret += '?' + c; break paramLoop;
          }
        }
      }
      if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
      return rawList ? list : ret + flushList();
    }
    return parse();
  } catch(e) {
    return func;
  }
}
function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}
function stackTrace() {
  var stack = new Error().stack;
  return stack ? demangleAll(stack) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}
// Memory management
var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return (x+4095)&-4096;
}
var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk
function enlargeMemory() {
  abort('Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', or (2) set Module.TOTAL_MEMORY before the program runs.');
}
var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 67108864;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;
var totalMemory = 4096;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be more reasonable');
  TOTAL_MEMORY = totalMemory;
}
// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'Cannot fallback to non-typed array case: Code is too specialized');
var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);
// Endianness check (note: assumes compiler arch was little-endian)
HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');
Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited
var runtimeInitialized = false;
function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
}
function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;
function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;
function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;
// Tools
// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
  if (length) {
    ret.length = length;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;
function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;
// Write a Javascript array to somewhere in the heap
function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))|0)]=chr;
    i = i + 1;
  }
}
Module['writeStringToMemory'] = writeStringToMemory;
function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=array[i];
  }
}
Module['writeArrayToMemory'] = writeArrayToMemory;
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[(((buffer)+(str.length))|0)]=0;
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;
function unSign(value, bits, ignore, sig) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore, sig) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}
// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];
var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}
Module['addRunDependency'] = addRunDependency;
function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module['removeRunDependency'] = removeRunDependency;
Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data
var memoryInitializer = null;
// === Body ===
STATIC_BASE = 8;
STATICTOP = STATIC_BASE + 153288;
var _stdout;
var _stdout=_stdout=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var _stdin;
var _stdin=_stdin=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var _stderr;
var _stderr=_stderr=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } },{ func: function() { __GLOBAL__I_a() } },{ func: function() { __GLOBAL__I_a2204() } },{ func: function() { __GLOBAL__I_a3066() } },{ func: function() { __GLOBAL__I_a3890() } });
var ___fsmu8;
var ___dso_handle;
var ___dso_handle=___dso_handle=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var __ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTVN10__cxxabiv120__si_class_type_infoE=allocate([0,0,0,0,240,252,1,0,194,1,0,0,58,1,0,0,112,0,0,0,250,0,0,0,48,0,0,0,8,0,0,0,2,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var __ZTVN10__cxxabiv117__class_type_infoE;
__ZTVN10__cxxabiv117__class_type_infoE=allocate([0,0,0,0,0,253,1,0,194,1,0,0,178,1,0,0,112,0,0,0,250,0,0,0,48,0,0,0,30,0,0,0,4,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var __ZN9DrawBatchC1Ev;
var __ZN9DrawBatchD1Ev;
var __ZN12FTGlyphCacheC1Ev;
var __ZN12FTGlyphCacheD1Ev;
var __ZN10BlendStateC1Eb11BlendSource14BlendOperationS0_S0_S1_S0_b;
var __ZN10DepthStateC1Ebb12DepthCmpFunc;
var __ZN8MaterialC1Ev;
var __ZN8MaterialD1Ev;
var __ZN15RasterizerStateC1E8FillMode8CullModebiffbbb;
var __ZN6ShaderC1Ev;
var __ZN6ShaderD1Ev;
var __ZN20ShaderConstantBufferC1Ev;
var __ZN20ShaderConstantBufferD1Ev;
var __ZN7TextureC1Ev;
var __ZN7TextureD1Ev;
var __ZN14TextureSamplerC1Ev;
var __ZN8GraphicsC1Ev;
var __ZN8GraphicsD1Ev;
var __ZN5ImageC1Ev;
var __ZN5ImageC1ERKS_;
var __ZN5ImageC1EPvjbiii13TextureFormat;
var __ZN5ImageD1Ev;
var __ZN11IndexBufferC1Ev;
var __ZN11IndexBufferD1Ev;
var __ZN5InputC1Ev;
var __ZN5InputD1Ev;
var __ZN12VertexBufferC1Ev;
var __ZN12VertexBufferD1Ev;
var __ZN12VertexBufferC1EbbRK17VertexDeclarationi13ResourceUsagebb;
var __ZN17VertexDeclarationC1Ev;
var __ZN17VertexDeclarationC1E13VertexElement;
var __ZN17VertexDeclarationC1E13PrimitiveType18PrimitiveIndexType;
var __ZN15MaxRectsBinPackC1Ev;
var __ZN14ProgramOptionsC1EiPPKcS2_;
var __ZN4FileD1Ev;
var __ZN6ResultC1EPKcS1_i10ResultCodeS1_z;
var __ZN6ResultC1EPKcS1_iS_10ResultCodeS1_z;
var __ZN4math3LCGC1Ev;
var __ZN4math4AABBC1ERKNS_6float3ES3_;
var __ZN4math7FrustumC1Ev;
var __ZN4math5PlaneC1ERKNS_6float3Ef;
var __ZN4math6SphereC1ERKNS_6float3Ef;
var __ZN4math8TriangleC1ERKNS_6float3ES3_S3_;
var __ZN4math11TranslateOpC1ERKNS_6float3E;
var __ZN4math7ScaleOpC1Efff;
var __ZN4math6float2C1Eff;
var __ZN4math6float3C1Efff;
var __ZN4math8float3x4C1ERKNS_4QuatE;
var __ZN4math6float4C1Effff;
var __ZN4math6float4C1ERKNS_6float3Ef;
var __ZN4math8float4x4C1ERKNS_8float3x4E;
var __ZNSt13runtime_errorC1EPKc;
var __ZNSt13runtime_errorD1Ev;
var __ZNSt12length_errorD1Ev;
var __ZNSt3__16localeC1Ev;
var __ZNSt3__16localeC1ERKS0_;
var __ZNSt3__16localeD1Ev;
var __ZNSt8bad_castC1Ev;
var __ZNSt8bad_castD1Ev;
/* memory initializer */ allocate([4,0,16,0,18,4,0,0,18,4,4,0,14,2,8,0,14,2,10,0,14,2,12,0,14,2,14,0,0,0,0,0,4,0,8,0,18,4,0,0,18,4,4,0,0,0,0,0,4,0,16,0,18,4,0,0,18,4,4,0,18,4,8,0,18,4,12,0,0,0,0,0,4,0,40,0,24,8,0,0,25,4,0,0,18,4,8,0,18,4,12,0,18,4,16,0,25,16,0,0,0,0,0,0,4,0,248,0,18,4,0,0,14,2,4,0,14,2,6,0,25,12,0,0,14,2,8,0,25,2,0,0,14,2,10,0,25,110,0,0,18,4,12,0,18,4,16,0,25,104,0,0,0,0,0,0,0,0,0,0,4,0,40,0,14,2,0,0,25,34,0,0,14,2,2,0,14,2,4,0,0,0,0,0,4,0,64,0,14,2,0,0,25,58,0,0,18,2,2,0,0,0,0,0,0,0,0,0,56,108,1,0,16,95,1,0,24,134,1,0,240,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,4,0,148,0,14,2,0,0,18,4,4,0,24,60,8,0,14,2,68,0,14,2,70,0,14,2,72,0,14,2,74,0,14,2,76,0,14,2,78,0,14,2,80,0,8,1,82,0,8,1,83,0,8,1,84,0,14,2,86,0,8,1,88,0,14,2,90,0,14,2,92,0,8,1,94,0,14,2,96,0,14,2,98,0,8,1,100,0,8,1,101,0,8,1,102,0,8,1,103,0,14,2,104,0,18,4,108,0,18,4,112,0,18,4,116,0,18,4,120,0,8,1,124,0,18,4,128,0,14,2,132,0,14,2,134,0,14,2,136,0,18,2,138,0,24,16,140,0,0,0,0,0,1,2,0,0,28,0,0,0,24,134,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,0,0,152,0,0,0,44,0,0,0,160,0,0,0,66,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,168,0,0,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,1,0,0,156,0,0,0,24,139,1,0,56,123,1,0,184,108,1,0,48,2,0,0,208,95,1,0,40,2,0,0,96,85,1,0,32,2,0,0,0,0,0,0,0,0,0,0,164,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,0,0,0,44,1,0,0,142,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4,0,5,0,8,1,0,0,8,1,1,0,9,1,2,0,9,1,3,0,8,1,4,0,0,0,0,0,0,0,0,0,4,0,32,0,16,4,0,0,16,4,4,0,13,2,8,0,13,2,10,0,16,4,12,0,16,4,16,0,16,4,20,0,16,4,24,0,16,4,28,0,0,0,0,0,0,0,0,0,4,0,54,0,16,4,0,0,16,4,4,0,12,2,8,0,12,2,10,0,12,2,12,0,12,2,14,0,12,2,16,0,24,16,20,0,24,8,36,0,24,6,44,0,9,1,50,0,9,1,51,0,8,1,52,0,8,1,53,0,0,0,0,0,4,0,10,0,13,2,88,0,13,2,90,0,12,2,92,0,12,2,94,0,12,2,96,0,0,0,0,0,0,0,0,0,4,0,8,0,16,4,80,0,16,4,84,0,0,0,0,0,4,0,78,0,12,2,0,0,13,2,2,0,12,2,4,0,12,2,6,0,13,2,8,0,13,2,10,0,13,2,12,0,13,2,14,0,13,2,16,0,13,2,18,0,13,2,20,0,13,2,22,0,13,2,24,0,13,2,26,0,13,2,28,0,13,2,30,0,8,1,32,0,8,1,33,0,8,1,34,0,8,1,35,0,8,1,36,0,8,1,37,0,8,1,38,0,8,1,39,0,8,1,40,0,8,1,41,0,16,4,44,0,16,4,48,0,16,4,52,0,16,4,56,0,8,1,60,0,8,1,61,0,8,1,62,0,8,1,63,0,12,2,64,0,12,2,66,0,12,2,68,0,13,2,70,0,13,2,72,0,13,2,74,0,12,2,76,0,12,2,78,0,0,0,0,0,4,0,6,0,12,2,0,0,12,4,4,0,12,4,8,0,0,0,0,0,0,0,0,0,12,2,0,0,12,2,2,0,12,2,4,0,12,2,6,0,12,2,8,0,12,4,12,0,0,0,0,0,0,0,0,0,4,0,26,0,12,2,6,0,12,2,8,0,12,2,10,0,12,2,12,0,12,2,14,0,12,2,16,0,12,2,18,0,12,2,20,0,12,2,22,0,12,2,24,0,12,2,26,0,12,2,28,0,12,2,30,0,0,0,0,0,0,0,0,0,4,0,6,0,17,4,0,0,12,2,4,0,0,0,0,0,4,0,36,0,16,4,0,0,13,2,4,0,13,2,6,0,13,2,8,0,12,2,10,0,13,2,12,0,13,2,14,0,13,2,16,0,13,2,18,0,13,2,20,0,13,2,22,0,13,2,24,0,13,2,26,0,13,2,28,0,13,2,30,0,13,2,32,0,12,2,34,0,0,0,0,0,0,0,0,0,4,0,54,0,16,4,0,0,16,4,4,0,17,4,8,0,17,4,12,0,12,2,16,0,12,2,18,0,17,4,20,0,17,4,24,0,17,4,28,0,17,4,32,0,13,2,36,0,13,2,38,0,13,2,40,0,13,2,42,0,12,2,44,0,12,2,46,0,13,2,48,0,13,2,50,0,13,2,52,0,0,0,0,0,0,0,0,0,4,0,8,0,12,2,4,0,12,2,6,0,12,2,8,0,12,2,10,0,0,0,0,0,16,4,8,0,17,0,0,0,16,4,0,0,16,4,12,0,0,0,0,0,0,0,0,0,12,2,40,0,12,2,42,0,8,1,44,0,8,1,45,0,8,1,46,0,9,1,47,0,0,0,0,0,0,0,0,0,9,1,0,0,9,1,1,0,8,1,2,0,9,1,3,0,9,1,4,0,9,1,5,0,9,1,6,0,9,1,7,0,9,1,8,0,9,1,9,0,9,1,10,0,9,1,11,0,0,0,0,0,0,0,0,0,1,5,0,0,72,0,0,0,144,136,1,0,0,0,1,0,0,0,2,0,0,0,0,0,238,0,0,0,188,0,0,0,26,1,0,0,56,3,0,0,48,1,0,0,160,0,0,0,92,0,0,0,234,0,0,0,50,0,0,0,72,0,0,0,164,0,0,0,0,0,0,0,30,0,0,0,168,0,0,0,20,0,0,0,34,0,0,0,0,0,0,0,68,0,0,0,50,0,0,0,96,0,0,0,0,0,0,0,0,0,0,64,0,0,0,64,0,0,0,64,0,0,0,0,1,0,0,0,64,0,0,0,1,0,0,0,1,0,0,0,68,0,0,0,0,0,0,0,0,0,0,0,9,0,3,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,16,8,0,0,248,6,0,0,192,6,0,0,136,6,0,0,80,6,0,0,216,7,0,0,160,7,0,0,104,7,0,0,48,7,0,0,0,0,0,0,24,0,0,0,30,0,0,0,0,0,0,0,54,0,0,0,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,162,0,0,0,34,1,0,0,0,0,0,0,24,0,0,0,30,0,0,0,0,0,0,0,92,1,0,0,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,72,1,0,0,68,0,0,0,0,0,0,0,56,0,0,0,152,0,0,0,0,0,0,0,36,0,0,0,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,82,0,0,0,178,0,0,0,0,0,0,0,24,0,0,0,30,0,0,0,0,0,0,0,6,1,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,76,0,0,0,124,0,0,0,0,0,0,0,40,0,0,0,214,0,0,0,16,0,0,0,94,1,0,0,22,1,0,0,84,0,0,0,154,0,0,0,172,0,0,0,58,0,0,0,114,0,0,0,14,0,0,0,114,0,0,0,86,1,0,0,0,0,0,0,44,0,0,0,40,0,0,0,0,0,0,0,150,0,0,0,170,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,244,0,0,0,144,0,0,0,0,0,0,0,44,0,0,0,12,1,0,0,0,0,0,0,80,1,0,0,68,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,138,0,0,0,66,0,0,0,0,0,0,0,24,0,0,0,30,0,0,0,0,0,0,0,110,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,108,0,0,0,78,1,0,0,0,0,0,0,24,0,0,0,30,0,0,0,0,0,0,0,186,0,0,0,84,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,0,0,0,128,0,0,0,0,0,0,0,88,240,188,5,228,2,0,0,241,59,35,40,196,135,0,0,234,161,68,163,225,1,0,0,88,240,188,5,228,2,0,0,241,59,35,40,196,135,0,0,235,161,68,163,225,1,0,0,212,234,229,17,80,3,0,0,59,202,48,90,99,144,0,0,2,38,164,19,126,0,0,0,252,255,251,255,8,0,0,0,184,72,158,156,162,190,0,0,18,1,2,112,8,0,0,0,252,255,251,255,8,0,0,0,131,4,90,10,57,124,1,0,18,1,2,112,8,0,0,0,0,0,0,0,0,0,0,0,85,37,201,64,229,0,0,0,227,88,155,163,124,17,0,0,0,0,0,0,0,0,0,0,82,22,196,51,229,0,0,0,42,197,214,38,106,15,0,0,0,0,0,0,0,0,0,0,29,101,177,109,157,1,0,0,3,75,110,108,146,36,0,0,0,0,0,0,0,0,0,0,85,37,201,64,229,0,0,0,208,250,81,222,124,17,0,0,0,0,0,0,0,0,0,0,100,118,228,133,229,0,0,0,49,40,198,166,170,28,0,0,0,0,0,0,0,0,0,0,253,28,137,45,157,1,0,0,51,70,96,160,232,29,0,0,0,0,0,0,0,0,0,0,76,119,170,64,203,1,0,0,150,170,92,155,154,31,0,0,0,0,0,0,0,0,0,0,203,233,61,13,65,1,0,0,102,119,18,212,128,34,0,0,0,0,0,0,0,0,0,0,152,38,105,74,240,1,0,0,70,67,13,52,202,31,0,0,0,0,0,0,0,0,0,0,4,198,52,205,102,1,0,0,70,16,243,108,176,34,0,0,0,0,0,0,0,0,0,0,21,83,167,93,157,1,0,0,95,90,116,64,224,34,0,0,0,0,0,0,0,0,0,0,72,252,85,240,194,1,0,0,211,222,0,57,24,30,0,0,68,70,75,97,105,83,104,111,45,83,66,0,0,0,0,0,0,68,70,75,97,105,83,104,117,0,0,0,0,0,0,0,0,0,68,70,75,97,105,45,83,66,0,0,0,0,0,0,0,0,0,72,117,97,84,105,97,110,75,97,105,84,105,63,0,0,0,0,72,117,97,84,105,97,110,83,111,110,103,84,105,63,0,0,0,77,105,110,103,76,105,85,0,0,0,0,0,0,0,0,0,0,80,77,105,110,103,76,105,85,0,0,0,0,0,0,0,0,0,77,105,110,103,76,105,52,51,0,0,0,0,0,0,0,0,0,168,146,1,0,176,10,0,0,232,143,1,0,168,10,0,0,232,140,1,0,144,10,0,0,144,139,1,0,0,137,1,0,0,0,0,0,0,0,0,0,64,0,0,0,122,0,0,0,134,0,0,0,254,0,0,0,0,0,0,0,0,0,0,0,232,0,0,0,0,0,0,0,60,0,0,0,88,1,0,0,32,85,1,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,79,1,0,3,0,0,0,5,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,74,1,0,3,0,0,0,5,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,205,1,0,3,0,0,0,5,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,201,1,0,3,0,0,0,5,0,0,0,0,0,0,0,16,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,197,1,0,3,0,0,0,2,0,0,0,0,0,0,0,20,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,194,1,0,3,0,0,0,1,0,0,0,0,0,0,0,24,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,190,1,0,3,0,0,0,2,0,0,0,0,0,0,0,26,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,188,1,0,3,0,0,0,2,0,0,0,0,0,0,0,28,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,186,1,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,182,1,0,1,0,0,0,6,0,0,0,0,0,0,0,232,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,179,1,0,1,0,0,0,2,0,0,0,0,0,0,0,44,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,176,1,0,1,0,0,0,2,0,0,0,0,0,0,0,45,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,173,1,0,1,0,0,0,3,0,0,0,0,0,0,0,92,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,170,1,0,5,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,167,1,0,5,0,0,0,10,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,164,1,0,5,0,0,0,10,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,161,1,0,5,0,0,0,10,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,158,1,0,5,0,0,0,10,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,36,0,0,0,8,135,1,0,0,0,1,0,0,0,2,0,0,0,0,0,64,0,0,0,158,0,0,0,32,1,0,0,48,2,0,0,48,0,0,0,164,0,0,0,6,0,0,0,206,0,0,0,176,0,0,0,144,1,0,0,62,0,0,0,38,0,0,0,30,0,0,0,168,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,1,0,0,58,0,0,0,1,5,0,0,28,0,0,0,192,140,1,0,0,0,1,0,0,0,2,0,0,0,0,0,106,0,0,0,22,1,0,0,160,0,0,0,76,1,0,0,48,0,0,0,172,0,0,0,106,0,0,0,104,0,0,0,70,0,0,0,130,0,0,0,18,0,0,0,94,0,0,0,30,0,0,0,168,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,0,52,0,53,0,54,0,55,0,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,64,0,65,0,66,0,67,0,68,0,69,0,70,0,71,0,72,0,73,0,74,0,75,0,76,0,77,0,78,0,79,0,80,0,81,0,82,0,83,0,84,0,85,0,86,0,87,0,88,0,89,0,90,0,91,0,92,0,93,0,94,0,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,0,97,0,98,0,99,0,100,0,101,0,102,0,103,0,104,0,105,0,106,0,107,0,108,0,109,0,110,0,0,0,111,0,112,0,113,0,114,0,0,0,115,0,116,0,117,0,118,0,119,0,120,0,121,0,122,0,0,0,123,0,0,0,124,0,125,0,126,0,127,0,128,0,129,0,130,0,131,0,0,0,132,0,133,0,0,0,134,0,135,0,136,0,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,0,0,139,0,0,0,0,0,0,0,0,0,140,0,141,0,142,0,143,0,0,0,0,0,0,0,0,0,0,0,144,0,0,0,0,0,0,0,145,0,0,0,0,0,146,0,147,0,148,0,149,0,0,0,0,0,0,0,0,0,40,94,1,0,144,16,0,0,128,92,1,0,208,16,0,0,104,91,1,0,160,90,1,0,16,90,1,0,152,16,0,0,128,89,1,0,200,16,0,0,144,88,1,0,176,16,0,0,0,0,0,0,0,0,0,0,54,0,0,0,0,0,0,0,200,0,0,0,14,0,0,0,58,0,0,0,10,1,0,0,32,0,0,0,0,0,0,0,2,0,0,0,120,0,0,0,88,0,0,0,8,0,0,0,60,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,62,0,0,0,210,0,0,0,144,197,1,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,160,194,1,0,3,0,0,0,5,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,208,190,1,0,3,0,0,0,5,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,192,188,1,0,3,0,0,0,5,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,120,186,1,0,3,0,0,0,5,0,0,0,0,0,0,0,16,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,240,182,1,0,3,0,0,0,2,0,0,0,0,0,0,0,20,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,180,1,0,3,0,0,0,1,0,0,0,0,0,0,0,24,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,184,176,1,0,3,0,0,0,2,0,0,0,0,0,0,0,26,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,48,173,1,0,3,0,0,0,2,0,0,0,0,0,0,0,28,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,128,170,1,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,104,167,1,0,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,160,164,1,0,4,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,120,161,1,0,4,0,0,0,2,0,0,0,0,0,0,0,184,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,240,158,1,0,4,0,0,0,2,0,0,0,0,0,0,0,188,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,224,156,1,0,4,0,0,0,4,0,0,0,0,0,0,0,108,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,16,155,1,0,4,0,0,0,2,0,0,0,0,0,0,0,112,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,24,152,1,0,4,0,0,0,2,0,0,0,0,0,0,0,116,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,96,149,1,0,4,0,0,0,8,0,0,0,0,0,0,0,12,0,0,0,2,0,0,0,14,0,0,0,8,0,0,0,2,0,0,0,184,146,1,0,4,0,0,0,8,0,0,0,0,0,0,0,40,0,0,0,2,0,0,0,10,0,0,0,9,0,0,0,2,0,0,0,0,144,1,0,4,0,0,0,8,0,0,0,0,0,0,0,60,0,0,0,2,0,0,0,14,0,0,0,10,0,0,0,2,0,0,0,248,140,1,0,4,0,0,0,8,0,0,0,0,0,0,0,88,0,0,0,2,0,0,0,10,0,0,0,11,0,0,0,2,0,0,0,168,139,1,0,4,0,0,0,8,0,0,0,0,0,0,0,120,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,8,137,1,0,4,0,0,0,8,0,0,0,0,0,0,0,122,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,128,135,1,0,4,0,0,0,8,0,0,0,0,0,0,0,192,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,200,133,1,0,4,0,0,0,8,0,0,0,0,0,0,0,128,0,0,0,2,0,0,0,12,0,0,0,124,0,0,0,2,0,0,0,24,132,1,0,4,0,0,0,8,0,0,0,0,0,0,0,154,0,0,0,2,0,0,0,12,0,0,0,125,0,0,0,2,0,0,0,208,130,1,0,4,0,0,0,3,0,0,0,0,0,0,0,180,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,208,129,1,0,4,0,0,0,1,0,0,0,0,0,0,0,126,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,64,128,1,0,1,0,0,0,6,0,0,0,0,0,0,0,232,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,24,127,1,0,1,0,0,0,2,0,0,0,0,0,0,0,44,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,248,124,1,0,1,0,0,0,2,0,0,0,0,0,0,0,45,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,128,123,1,0,1,0,0,0,3,0,0,0,0,0,0,0,92,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,88,121,1,0,5,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,72,120,1,0,7,0,0,0,2,0,0,0,0,0,0,0,24,2,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,8,119,1,0,7,0,0,0,2,0,0,0,0,0,0,0,28,2,0,0,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,176,117,1,0,8,0,0,0,8,0,0,0,0,0,0,0,96,1,0,0,4,0,0,0,16,0,0,0,160,1,0,0,1,0,0,0,176,115,1,0,8,0,0,0,10,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,216,114,1,0,8,0,0,0,10,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,64,113,1,0,8,0,0,0,10,0,0,0,126,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,56,201,1,0,8,0,0,0,10,0,0,0,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,64,112,1,0,8,0,0,0,10,0,0,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,208,110,1,0,8,0,0,0,10,0,0,0,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,248,108,1,0,8,0,0,0,10,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,56,107,1,0,8,0,0,0,10,0,0,0,132,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,40,106,1,0,8,0,0,0,10,0,0,0,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,8,105,1,0,8,0,0,0,10,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,229,0,230,0,0,0,231,0,232,0,233,0,234,0,235,0,236,0,237,0,238,0,13,0,14,0,15,0,99,0,239,0,240,0,241,0,242,0,243,0,244,0,245,0,246,0,247,0,248,0,27,0,28,0,249,0,250,0,251,0,252,0,0,0,253,0,254,0,255,0,0,1,1,1,0,0,0,0,0,0,2,1,0,0,0,0,3,1,4,1,5,1,6,1,0,0,0,0,7,1,8,1,9,1,0,0,10,1,109,0,110,0,11,1,12,1,13,1,0,0,14,1,15,1,16,1,17,1,18,1,19,1,20,1,21,1,22,1,23,1,24,1,25,1,26,1,27,1,28,1,29,1,30,1,31,1,32,1,33,1,34,1,35,1,36,1,37,1,38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,1,49,1,50,1,0,0,0,0,51,1,52,1,53,1,54,1,55,1,0,0,56,1,0,0,0,0,57,1,0,0,0,0,58,1,59,1,0,0,0,0,60,1,61,1,62,1,0,0,0,0,0,0,158,0,155,0,163,0,63,1,64,1,65,1,66,1,67,1,68,1,69,1,0,0,0,0,70,1,150,0,164,0,169,0,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,1,87,1,88,1,89,1,90,1,91,1,92,1,93,1,94,1,95,1,96,1,97,1,98,1,99,1,100,1,101,1,102,1,103,1,104,1,105,1,106,1,107,1,108,1,109,1,110,1,111,1,112,1,113,1,114,1,115,1,116,1,117,1,118,1,119,1,120,1,121,1,122,1,1,5,0,0,28,0,0,0,200,135,1,0,0,0,1,0,0,0,2,0,0,0,0,0,120,0,0,0,134,0,0,0,4,1,0,0,44,2,0,0,44,0,0,0,180,0,0,0,54,0,0,0,82,0,0,0,24,0,0,0,98,0,0,0,140,0,0,0,226,0,0,0,30,0,0,0,168,0,0,0,64,0,0,0,50,0,0,0,28,0,0,0,22,0,0,0,196,0,0,0,0,0,0,0,2,0,0,0,168,1,0,0,38,0,0,0,0,0,0,0,24,0,0,0,8,0,0,0,212,0,0,0,148,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,68,0,0,0,168,0,0,0,126,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,76,0,0,0,168,0,0,0,126,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,104,0,0,0,88,0,0,0,104,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,26,0,0,64,26,0,0,104,26,0,0,240,25,0,0,10,0,0,0,110,1,0,0,198,0,0,0,12,0,0,0,22,0,0,0,144,0,0,0,30,0,0,0,108,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,5,0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,4,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,2,0,0,0,6,0,0,0,2,0,0,0,255,255,255,255,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,208,193,1,0,96,27,0,0,200,163,1,0,112,27,0,0,48,139,1,0,120,27,0,0,72,123,1,0,128,27,0,0,200,108,1,0,72,2,0,0,0,0,0,0,0,0,0,0,4,0,0,0,76,1,0,0,90,0,0,0,0,0,0,0,234,0,0,0,0,0,0,0,78,0,0,0,134,0,0,0,26,0,0,0,40,0,0,0,4,0,8,0,17,4,4,0,17,4,8,0,0,0,0,0,0,0,0,0,12,0,0,0,184,136,1,0,0,0,1,0,0,0,2,0,192,27,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,52,0,0,0,58,0,0,0,72,0,0,0,116,0,0,0,16,0,0,0,4,0,0,0,36,0,0,0,70,0,0,0,154,0,0,0,64,0,0,0,248,0,0,0,36,1,0,0,158,0,0,0,24,1,0,0,140,0,0,0,30,1,0,0,106,0,0,0,44,1,0,0,20,1,0,0,220,0,0,0,32,0,0,0,12,0,0,0,76,0,0,0,252,0,0,0,4,0,0,0,68,0,0,0,2,0,0,0,238,0,0,0,116,0,0,0,126,0,0,0,50,0,0,0,238,0,0,0,52,0,0,0,84,0,0,0,54,0,0,0,204,0,0,0,146,0,0,0,32,0,0,0,104,0,0,0,40,0,0,0,2,0,0,0,255,255,255,255,99,105,110,117,0,0,0,0,255,255,255,255,99,105,110,117,1,0,0,0,0,0,0,0,110,109,114,97,3,0,0,0,0,0,0,0,98,109,121,115,3,0,0,0,10,0,0,0,99,105,110,117,3,0,0,0,1,0,0,0,99,105,110,117,3,0,0,0,2,0,0,0,115,105,106,115,3,0,0,0,3,0,0,0,32,32,98,103,3,0,0,0,4,0,0,0,53,103,105,98,3,0,0,0,5,0,0,0,115,110,97,119,3,0,0,0,6,0,0,0,97,104,111,106,0,0,0,0,4,0,8,0,8,1,0,0,8,1,1,0,9,1,2,0,9,1,3,0,8,1,4,0,9,1,5,0,9,1,6,0,8,1,7,0,0,0,0,0,0,0,0,0,12,0,0,0,200,136,1,0,0,0,1,0,0,0,2,0,128,29,0,0,0,0,0,0,0,0,0,0,222,0,0,0,0,0,0,0,0,0,0,0,168,0,0,0,208,136,1,0,0,0,1,0,0,0,2,0,96,29,0,0,142,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,114,0,0,0,136,0,0,0,132,0,0,0,0,0,0,0,232,193,1,0,128,29,0,0,0,0,0,0,0,0,0,0,166,0,0,0,2,0,0,0,16,1,0,0,240,0,0,0,38,0,0,0,182,0,0,0,88,14,0,0,120,23,0,0,0,0,0,0,12,0,0,0,80,138,1,0,0,0,2,0,0,0,2,0,200,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,29,0,0,248,29,0,0,160,26,0,0,224,25,0,0,24,0,0,0,144,26,0,0,152,63,1,0,0,0,0,0,172,0,0,0,22,0,0,0,6,0,0,0,224,0,0,0,18,0,0,0,56,0,0,0,172,0,0,0,176,0,0,0,130,0,0,0,6,0,0,0,104,0,0,0,160,0,0,0,32,0,0,0,36,0,0,0,6,0,0,0,34,0,0,0,56,0,0,0,0,0,0,0,1,0,0,0,10,0,0,0,100,0,0,0,232,3,0,0,16,39,0,0,160,134,1,0,64,66,15,0,128,150,152,0,0,225,245,5,0,202,154,59,64,194,1,0,152,30,0,0,112,164,1,0,88,139,1,0,0,0,0,0,0,0,0,0,1,0,0,0,36,0,0,0,2,0,0,0,98,0,0,0,3,0,0,0,122,0,0,0,4,0,0,0,82,0,0,0,0,0,0,0,0,0,0,0,74,0,0,0,86,0,0,0,136,0,0,0,0,0,0,0,4,0,58,0,16,4,0,0,12,4,4,0,12,4,8,0,12,4,12,0,12,4,16,0,12,4,20,0,12,4,24,0,20,4,28,0,20,4,32,0,12,4,36,0,20,4,40,0,20,4,44,0,12,4,48,0,20,4,52,0,20,4,56,0,8,4,60,0,8,4,64,0,8,4,68,0,8,4,72,0,8,4,76,0,20,4,80,0,20,4,84,0,20,4,88,0,12,4,92,0,8,4,96,0,8,4,100,0,12,4,104,0,0,0,0,0,0,0,0,0,1,1,0,0,28,0,0,0,88,138,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,64,1,0,0,184,1,0,0,44,0,0,0,196,0,0,0,84,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,236,0,0,0,64,1,0,0,30,0,0,0,168,0,0,0,92,0,0,0,88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,26,0,0,0,152,0,0,0,42,1,0,0,30,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,8,0,18,4,0,0,18,4,4,0,0,0,0,0,4,0,16,0,18,4,0,0,18,4,4,0,18,4,8,0,18,4,12,0,0,0,0,0,88,173,1,0,240,31,0,0,168,170,1,0,136,167,1,0,0,0,0,0,0,0,0,0,80,0,0,0,10,0,0,0,4,0,9,0,17,4,0,0,8,1,4,0,17,4,8,0,0,0,0,0,0,0,0,0,4,0,9,0,19,4,0,0,8,1,4,0,19,4,8,0,0,0,0,0,0,0,0,0,4,0,12,0,13,2,0,0,13,2,2,0,13,2,4,0,13,2,6,0,13,2,8,0,13,2,10,0,0,0,0,0,4,0,12,0,15,2,0,0,15,2,2,0,15,2,4,0,15,2,6,0,15,2,8,0,15,2,10,0,0,0,0,0,1,2,0,0,28,0,0,0,248,138,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,46,1,0,0,72,1,0,0,44,0,0,0,160,0,0,0,8,0,0,0,100,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,168,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,94,0,0,0,236,0,0,0,4,0,5,0,8,1,0,0,8,1,1,0,8,1,2,0,8,1,3,0,8,1,4,0,0,0,0,0,0,0,0,0,24,0,0,0,164,0,0,0,212,1,0,0,2,1,0,0,176,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,20,0,8,1,0,0,8,1,1,0,8,1,2,0,8,1,3,0,8,1,4,0,8,1,5,0,8,1,6,0,25,1,0,0,17,4,8,0,17,4,12,0,17,4,16,0,0,0,0,0,0,0,0,0,4,0,20,0,8,1,0,0,8,1,1,0,8,1,2,0,8,1,3,0,8,1,4,0,8,1,5,0,8,1,6,0,25,1,0,0,19,4,8,0,19,4,12,0,19,4,16,0,0,0,0,0,0,0,0,0,139,247,225,13,14,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,255,254,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,3,5,7,9,11,13,15,17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,255,128,192,224,240,248,252,254,0,0,0,0,1,0,0,0,3,0,0,0,7,0,0,0,15,0,0,0,31,0,0,0,63,0,0,0,127,0,0,0,255,0,0,0,255,1,0,0,255,3,0,0,255,7,0,0,255,15,0,0,255,31,0,0,255,63,0,0,255,127,0,0,255,255,0,0,0,0,0,0,0,0,0,0,0,0,255,3,126,0,0,0,126,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,146,0,0,0,40,1,0,0,44,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,4,0,20,0,17,4,0,0,12,2,4,0,12,2,6,0,16,4,8,0,12,2,12,0,12,2,14,0,16,4,16,0,0,0,0,0,0,0,0,0,108,116,117,111,34,0,0,0,4,0,0,0,10,0,0,0,86,0,0,0,180,0,0,0,46,110,117,108,108,0,110,111,110,109,97,114,107,105,110,103,114,101,116,117,114,110,0,110,111,116,101,113,117,97,108,0,105,110,102,105,110,105,116,121,0,108,101,115,115,101,113,117,97,108,0,103,114,101,97,116,101,114,101,113,117,97,108,0,112,97,114,116,105,97,108,100,105,102,102,0,115,117,109,109,97,116,105,111,110,0,112,114,111,100,117,99,116,0,112,105,0,105,110,116,101,103,114,97,108,0,79,109,101,103,97,0,114,97,100,105,99,97,108,0,97,112,112,114,111,120,101,113,117,97,108,0,68,101,108,116,97,0,110,111,110,98,114,101,97,107,105,110,103,115,112,97,99,101,0,108,111,122,101,110,103,101,0,97,112,112,108,101,0,102,114,97,110,99,0,71,98,114,101,118,101,0,103,98,114,101,118,101,0,73,100,111,116,97,99,99,101,110,116,0,83,99,101,100,105,108,108,97,0,115,99,101,100,105,108,108,97,0,67,97,99,117,116,101,0,99,97,99,117,116,101,0,67,99,97,114,111,110,0,99,99,97,114,111,110,0,100,99,114,111,97,116,0,46,110,111,116,100,101,102,0,115,112,97,99,101,0,101,120,99,108,97,109,0,113,117,111,116,101,100,98,108,0,110,117,109,98,101,114,115,105,103,110,0,100,111,108,108,97,114,0,112,101,114,99,101,110,116,0,97,109,112,101,114,115,97,110,100,0,113,117,111,116,101,114,105,103,104,116,0,112,97,114,101,110,108,101,102,116,0,112,97,114,101,110,114,105,103,104,116,0,97,115,116,101,114,105,115,107,0,112,108,117,115,0,99,111,109,109,97,0,104,121,112,104,101,110,0,112,101,114,105,111,100,0,115,108,97,115,104,0,122,101,114,111,0,111,110,101,0,116,119,111,0,116,104,114,101,101,0,102,111,117,114,0,102,105,118,101,0,115,105,120,0,115,101,118,101,110,0,101,105,103,104,116,0,110,105,110,101,0,99,111,108,111,110,0,115,101,109,105,99,111,108,111,110,0,108,101,115,115,0,101,113,117,97,108,0,103,114,101,97,116,101,114,0,113,117,101,115,116,105,111,110,0,97,116,0,65,0,66,0,67,0,68,0,69,0,70,0,71,0,72,0,73,0,74,0,75,0,76,0,77,0,78,0,79,0,80,0,81,0,82,0,83,0,84,0,85,0,86,0,87,0,88,0,89,0,90,0,98,114,97,99,107,101,116,108,101,102,116,0,98,97,99,107,115,108,97,115,104,0,98,114,97,99,107,101,116,114,105,103,104,116,0,97,115,99,105,105,99,105,114,99,117,109,0,117,110,100,101,114,115,99,111,114,101,0,113,117,111,116,101,108,101,102,116,0,97,0,98,0,99,0,100,0,101,0,102,0,103,0,104,0,105,0,106,0,107,0,108,0,109,0,110,0,111,0,112,0,113,0,114,0,115,0,116,0,117,0,118,0,119,0,120,0,121,0,122,0,98,114,97,99,101,108,101,102,116,0,98,97,114,0,98,114,97,99,101,114,105,103,104,116,0,97,115,99,105,105,116,105,108,100,101,0,101,120,99,108,97,109,100,111,119,110,0,99,101,110,116,0,115,116,101,114,108,105,110,103,0,102,114,97,99,116,105,111,110,0,121,101,110,0,102,108,111,114,105,110,0,115,101,99,116,105,111,110,0,99,117,114,114,101,110,99,121,0,113,117,111,116,101,115,105,110,103,108,101,0,113,117,111,116,101,100,98,108,108,101,102,116,0,103,117,105,108,108,101,109,111,116,108,101,102,116,0,103,117,105,108,115,105,110,103,108,108,101,102,116,0,103,117,105,108,115,105,110,103,108,114,105,103,104,116,0,102,105,0,102,108,0,101,110,100,97,115,104,0,100,97,103,103,101,114,0,100,97,103,103,101,114,100,98,108,0,112,101,114,105,111,100,99,101,110,116,101,114,101,100,0,112,97,114,97,103,114,97,112,104,0,98,117,108,108,101,116,0,113,117,111,116,101,115,105,110,103,108,98,97,115,101,0,113,117,111,116,101,100,98,108,98,97,115,101,0,113,117,111,116,101,100,98,108,114,105,103,104,116,0,103,117,105,108,108,101,109,111,116,114,105,103,104,116,0,101,108,108,105,112,115,105,115,0,112,101,114,116,104,111,117,115,97,110,100,0,113,117,101,115,116,105,111,110,100,111,119,110,0,103,114,97,118,101,0,97,99,117,116,101,0,99,105,114,99,117,109,102,108,101,120,0,116,105,108,100,101,0,109,97,99,114,111,110,0,98,114,101,118,101,0,100,111,116,97,99,99,101,110,116,0,100,105,101,114,101,115,105,115,0,114,105,110,103,0,99,101,100,105,108,108,97,0,104,117,110,103,97,114,117,109,108,97,117,116,0,111,103,111,110,101,107,0,99,97,114,111,110,0,101,109,100,97,115,104,0,65,69,0,111,114,100,102,101,109,105,110,105,110,101,0,76,115,108,97,115,104,0,79,115,108,97,115,104,0,79,69,0,111,114,100,109,97,115,99,117,108,105,110,101,0,97,101,0,100,111,116,108,101,115,115,105,0,108,115,108,97,115,104,0,111,115,108,97,115,104,0,111,101,0,103,101,114,109,97,110,100,98,108,115,0,111,110,101,115,117,112,101,114,105,111,114,0,108,111,103,105,99,97,108,110,111,116,0,109,117,0,116,114,97].concat([100,101,109,97,114,107,0,69,116,104,0,111,110,101,104,97,108,102,0,112,108,117,115,109,105,110,117,115,0,84,104,111,114,110,0,111,110,101,113,117,97,114,116,101,114,0,100,105,118,105,100,101,0,98,114,111,107,101,110,98,97,114,0,100,101,103,114,101,101,0,116,104,111,114,110,0,116,104,114,101,101,113,117,97,114,116,101,114,115,0,116,119,111,115,117,112,101,114,105,111,114,0,114,101,103,105,115,116,101,114,101,100,0,109,105,110,117,115,0,101,116,104,0,109,117,108,116,105,112,108,121,0,116,104,114,101,101,115,117,112,101,114,105,111,114,0,99,111,112,121,114,105,103,104,116,0,65,97,99,117,116,101,0,65,99,105,114,99,117,109,102,108,101,120,0,65,100,105,101,114,101,115,105,115,0,65,103,114,97,118,101,0,65,114,105,110,103,0,65,116,105,108,100,101,0,67,99,101,100,105,108,108,97,0,69,97,99,117,116,101,0,69,99,105,114,99,117,109,102,108,101,120,0,69,100,105,101,114,101,115,105,115,0,69,103,114,97,118,101,0,73,97,99,117,116,101,0,73,99,105,114,99,117,109,102,108,101,120,0,73,100,105,101,114,101,115,105,115,0,73,103,114,97,118,101,0,78,116,105,108,100,101,0,79,97,99,117,116,101,0,79,99,105,114,99,117,109,102,108,101,120,0,79,100,105,101,114,101,115,105,115,0,79,103,114,97,118,101,0,79,116,105,108,100,101,0,83,99,97,114,111,110,0,85,97,99,117,116,101,0,85,99,105,114,99,117,109,102,108,101,120,0,85,100,105,101,114,101,115,105,115,0,85,103,114,97,118,101,0,89,97,99,117,116,101,0,89,100,105,101,114,101,115,105,115,0,90,99,97,114,111,110,0,97,97,99,117,116,101,0,97,99,105,114,99,117,109,102,108,101,120,0,97,100,105,101,114,101,115,105,115,0,97,103,114,97,118,101,0,97,114,105,110,103,0,97,116,105,108,100,101,0,99,99,101,100,105,108,108,97,0,101,97,99,117,116,101,0,101,99,105,114,99,117,109,102,108,101,120,0,101,100,105,101,114,101,115,105,115,0,101,103,114,97,118,101,0,105,97,99,117,116,101,0,105,99,105,114,99,117,109,102,108,101,120,0,105,100,105,101,114,101,115,105,115,0,105,103,114,97,118,101,0,110,116,105,108,100,101,0,111,97,99,117,116,101,0,111,99,105,114,99,117,109,102,108,101,120,0,111,100,105,101,114,101,115,105,115,0,111,103,114,97,118,101,0,111,116,105,108,100,101,0,115,99,97,114,111,110,0,117,97,99,117,116,101,0,117,99,105,114,99,117,109,102,108,101,120,0,117,100,105,101,114,101,115,105,115,0,117,103,114,97,118,101,0,121,97,99,117,116,101,0,121,100,105,101,114,101,115,105,115,0,122,99,97,114,111,110,0,101,120,99,108,97,109,115,109,97,108,108,0,72,117,110,103,97,114,117,109,108,97,117,116,115,109,97,108,108,0,100,111,108,108,97,114,111,108,100,115,116,121,108,101,0,100,111,108,108,97,114,115,117,112,101,114,105,111,114,0,97,109,112,101,114,115,97,110,100,115,109,97,108,108,0,65,99,117,116,101,115,109,97,108,108,0,112,97,114,101,110,108,101,102,116,115,117,112,101,114,105,111,114,0,112,97,114,101,110,114,105,103,104,116,115,117,112,101,114,105,111,114,0,116,119,111,100,111,116,101,110,108,101,97,100,101,114,0,111,110,101,100,111,116,101,110,108,101,97,100,101,114,0,122,101,114,111,111,108,100,115,116,121,108,101,0,111,110,101,111,108,100,115,116,121,108,101,0,116,119,111,111,108,100,115,116,121,108,101,0,116,104,114,101,101,111,108,100,115,116,121,108,101,0,102,111,117,114,111,108,100,115,116,121,108,101,0,102,105,118,101,111,108,100,115,116,121,108,101,0,115,105,120,111,108,100,115,116,121,108,101,0,115,101,118,101,110,111,108,100,115,116,121,108,101,0,101,105,103,104,116,111,108,100,115,116,121,108,101,0,110,105,110,101,111,108,100,115,116,121,108,101,0,99,111,109,109,97,115,117,112,101,114,105,111,114,0,116,104,114,101,101,113,117,97,114,116,101,114,115,101,109,100,97,115,104,0,112,101,114,105,111,100,115,117,112,101,114,105,111,114,0,113,117,101,115,116,105,111,110,115,109,97,108,108,0,97,115,117,112,101,114,105,111,114,0,98,115,117,112,101,114,105,111,114,0,99,101,110,116,115,117,112,101,114,105,111,114,0,100,115,117,112,101,114,105,111,114,0,101,115,117,112,101,114,105,111,114,0,105,115,117,112,101,114,105,111,114,0,108,115,117,112,101,114,105,111,114,0,109,115,117,112,101,114,105,111,114,0,110,115,117,112,101,114,105,111,114,0,111,115,117,112,101,114,105,111,114,0,114,115,117,112,101,114,105,111,114,0,115,115,117,112,101,114,105,111,114,0,116,115,117,112,101,114,105,111,114,0,102,102,0,102,102,105,0,102,102,108,0,112,97,114,101,110,108,101,102,116,105,110,102,101,114,105,111,114,0,112,97,114,101,110,114,105,103,104,116,105,110,102,101,114,105,111,114,0,67,105,114,99,117,109,102,108,101,120,115,109,97,108,108,0,104,121,112,104,101,110,115,117,112,101,114,105,111,114,0,71,114,97,118,101,115,109,97,108,108,0,65,115,109,97,108,108,0,66,115,109,97,108,108,0,67,115,109,97,108,108,0,68,115,109,97,108,108,0,69,115,109,97,108,108,0,70,115,109,97,108,108,0,71,115,109,97,108,108,0,72,115,109,97,108,108,0,73,115,109,97,108,108,0,74,115,109,97,108,108,0,75,115,109,97,108,108,0,76,115,109,97,108,108,0,77,115,109,97,108,108,0,78,115,109,97,108,108,0,79,115,109,97,108,108,0,80,115,109,97,108,108,0,81,115,109,97,108,108,0,82,115,109,97,108,108,0,83,115,109,97,108,108,0,84,115,109,97,108,108,0,85,115,109,97,108,108,0,86,115,109,97,108,108,0,87,115,109,97,108,108,0,88,115,109,97,108,108,0,89,115,109,97,108,108,0,90,115,109,97,108,108,0,99,111,108,111,110,109,111,110,101,116,97,114,121,0,111,110,101,102,105,116,116,101,100,0,114,117,112,105,97,104,0,84,105,108,100,101,115,109,97,108,108,0,101,120,99,108,97,109,100,111,119,110,115,109,97,108,108,0,99,101,110,116,111,108,100,115,116,121,108,101,0,76,115,108,97,115,104,115,109,97,108,108,0,83,99,97,114,111,110,115,109,97,108,108,0,90,99,97,114,111,110,115,109,97,108,108,0,68,105,101,114,101,115,105,115,115,109,97,108,108,0,66,114,101,118,101,115,109,97,108,108,0,67,97,114,111,110,115,109,97,108,108,0,68,111,116,97,99,99,101,110,116,115,109,97,108,108,0,77,97,99,114,111,110,115,109,97,108,108,0,102,105,103,117,114,101,100,97,115,104,0,104,121,112,104,101,110,105,110,102,101,114,105,111,114,0,79,103,111,110,101,107,115,109,97,108,108,0,82,105,110,103,115,109,97,108,108,0,67,101,100,105,108,108,97,115,109,97,108,108,0,113,117,101,115,116,105,111,110,100,111,119,110,115,109,97,108,108,0,111,110,101,101,105,103,104,116,104,0,116,104,114,101,101,101,105,103,104,116,104,115,0,102,105,118,101,101,105,103,104,116,104,115,0,115,101,118,101,110,101,105,103,104,116,104,115,0,111,110,101,116,104,105,114,100,0,116,119,111,116,104,105,114,100,115,0,122,101,114,111,115,117,112,101,114,105,111,114,0,102,111,117,114,115,117,112,101,114,105,111,114,0,102,105,118,101,115,117,112,101,114,105,111,114,0,115,105,120,115,117,112,101,114,105,111,114,0,115,101,118,101,110,115,117,112,101,114,105,111,114,0,101,105,103,104,116,115,117,112,101,114,105,111,114,0,110,105,110,101,115,117,112,101,114,105,111,114,0,122,101,114,111,105,110,102,101,114,105,111,114,0,111,110,101,105,110,102,101,114,105,111,114,0,116,119,111,105,110,102,101,114,105,111,114,0,116,104,114,101,101,105,110,102,101,114,105,111,114,0,102,111,117,114,105,110,102,101,114,105,111,114,0,102,105,118,101,105,110,102,101,114,105,111,114,0,115,105,120,105,110,102,101,114,105,111,114,0,115,101,118,101,110,105,110,102,101,114,105,111,114,0,101,105,103,104,116,105,110,102,101,114,105,111,114,0,110,105,110,101,105,110,102,101,114,105,111,114,0,99,101,110,116,105,110,102,101,114,105,111,114,0,100,111,108,108,97,114,105,110,102,101,114,105,111,114,0,112,101,114,105,111,100,105,110,102,101,114,105,111,114,0,99,111,109,109,97,105,110,102,101,114,105,111,114,0,65,103,114,97,118,101,115,109,97,108,108,0,65,97,99,117,116,101,115,109,97,108,108,0,65,99,105,114,99,117,109,102,108,101,120,115,109,97,108,108,0,65,116,105,108,100,101,115,109,97,108,108,0,65,100,105,101,114,101,115,105,115,115,109,97,108,108,0,65,114,105,110,103,115,109,97,108,108,0,65,69,115,109,97,108,108,0,67,99,101,100,105,108,108,97,115,109,97,108,108,0,69,103,114,97,118,101,115,109,97,108,108,0,69,97,99,117,116,101,115,109,97,108,108,0,69,99,105,114,99,117,109,102,108,101,120,115,109,97,108,108,0,69,100,105,101,114,101,115,105,115,115,109,97,108,108,0,73,103,114,97,118,101,115,109,97,108,108,0,73,97,99,117,116,101,115,109,97,108,108,0,73,99,105,114,99,117,109,102,108,101,120,115,109,97,108,108,0,73,100,105,101,114,101,115,105,115,115,109,97,108,108,0,69,116,104,115,109,97,108,108,0,78,116,105,108,100,101,115,109,97,108,108,0,79,103,114,97,118,101,115,109,97,108,108,0,79,97,99,117,116,101,115,109,97,108,108,0,79,99,105,114,99,117,109,102,108,101,120,115,109,97,108,108,0,79,116,105,108,100,101,115,109,97,108,108,0,79,100,105,101,114,101,115,105,115,115,109,97,108,108,0,79,69,115,109,97,108,108,0,79,115,108,97,115,104,115,109,97,108,108,0,85,103,114,97,118,101,115,109,97,108,108,0,85,97,99,117,116,101,115,109,97,108,108,0,85,99,105,114,99,117,109,102,108,101,120,115,109,97,108,108,0,85,100,105,101,114,101,115,105,115,115,109,97,108,108,0,89,97,99,117,116,101,115,109,97,108,108,0,84,104,111,114,110,115,109,97,108,108,0,89,100,105,101,114,101,115,105,115,115,109,97,108,108,0,48,48,49,46,48,48,48,0,48,48,49,46,48,48,49,0,48,48,49,46,48,48,50,0,48,48,49,46,48,48,51,0,66,108,97,99,107,0,66,111,108,100,0,66,111,111,107,0,76,105,103,104,116,0,77,101,100,105,117,109,0,82,101,103,117,108,97,114,0,82,111,109,97,110,0,83,101,109,105,98,111,108,100,0,2,0,0,0,64,0,0,0,176,136,1,0,0,0,1,0,0,0,2,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,108,116,117,111,14,0,0,0,18,0,0,0,20,0,0,0,170,0,0,0,104,56,0,0,0,0,0,0,2,0,0,0,64,0,0,0,152,163,1,0,0,0,1,0,0,0,2,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,108,116,117,111,48,0,0,0,18,0,0,0,20,0,0,0,170,0,0,0,104,56,0,0,0,0,0,0,2,0,0,0,64,0,0,0,192,193,1,0,0,0,1,0,0,0,2,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,108,116,117,111,94,0,0,0,18,0,0,0,20,0,0,0,170,0,0,0,104,56,0,0,0,0,0,0,253,0,5,1,11,1,18,1,27,1,38,1,45,1,53,1,63,1,74,1,84,1,95,1,104,1,109,1,115,1,122,1,129,1,135,1,140,1,144,1,148,1,154,1,159,1,164,1,168,1,174,1,180,1,185,1,191,1,201,1,206,1,212,1,220,1,229,1,232,1,234,1,236,1,238,1,240,1,242,1,244,1,246,1,248,1,250,1,252,1,254,1,0,2,2,2,4,2,6,2,8,2,10,2,12,2,14,2,16,2,18,2,20,2,22,2,24,2,26,2,28,2,40,2,50,2,63,2,75,2,86,2,96,2,98,2,100,2,102,2,104,2,106,2,108,2,110,2,112,2,114,2,116,2,118,2,120,2,122,2,124,2,126,2,128,2,130,2,132,2,134,2,136,2,138,2,140,2,142,2,144,2,146,2,148,2,158,2,162,2,173,2,184,2,195,2,200,2,209,2,218,2,222,2,229,2,237,2,246,2,2,3,15,3,29,3,43,3,58,3,61,3,64,3,71,3,78,3,88,3,103,3,113,3,120,3,135,3,148,3,162,3,177,3,186,3,198,3,211,3,217,3,223,3,234,3,240,3,247,3,253,3,7,4,16,4,21,4,29,4,42,4,49,4,55,4,62,4,65,4,77,4,84,4,91,4,94,4,107,4,110,4,119,4,126,4,133,4,136,4,147,4,159,4,170,4,173,4,183,4,187,4,195,4,205,4,211,4,222,4,229,4,239,4,246,4,252,4,10,5,22,5,33,5,39,5,43,5,52,5,66,5,76,5,83,5,95,5,105,5,112,5,118,5,125,5,134,5,141,5,153,5,163,5,170,5,177,5,189,5,199,5,206,5,213,5,220,5,232,5,242,5,249,5,0,6,7,6,14,6,26,6,36,6,43,6,50,6,60,6,67,6,74,6,86,6,96,6,103,6,109,6,116,6,125,6,132,6,144,6,154,6,161,6,168,6,180,6,190,6,197,6,204,6,211,6,223,6,233,6,240,6,247,6,254,6,5,7,17,7,27,7,34,7,41,7,51,7,58,7,70,7,88,7,103,7,118,7,133,7,144,7,162,7,181,7,196,7,211,7,224,7,236,7,248,7,6,8,19,8,32,8,44,8,58,8,72,8,85,8,99,8,119,8,134,8,148,8,158,8,168,8,181,8,191,8,201,8,211,8,221,8,231,8,241,8,251,8,5,9,15,9,25,9,28,9,32,9,36,9,54,9,73,9,89,9,104,9,115,9,122,9,129,9,136,9,143,9,150,9,157,9,164,9,171,9,178,9,185,9,192,9,199,9,206,9,213,9,220,9,227,9,234,9,241,9,248,9,255,9,6,10,13,10,20,10,27,10,34,10,41,10,55,10,65,10,72,10,83,10,99,10,112,10,124,10,136,10,148,10,162,10,173,10,184,10,199,10,211,10,222,10,237,10,249,10,3,11,16,11,34,11,44,11,57,11,69,11,82,11,91,11,101,11,114,11,127,11,140,11,152,11,166,11,180,11,193,11,206,11,218,11,230,11,244,11,1,12,14,12,26,12,40,12,54,12,67,12,80,12,95,12,110,12,124,12,136,12,148,12,165,12,177,12,192,12,203,12,211,12,225,12,237,12,249,12,10,13,25,13,37,13,49,13,66,13,81,13,90,13,102,13,114,13,126,13,143,13,155,13,170,13,178,13,190,13,202,13,214,13,231,13,246,13,2,14,13,14,28,14,36,14,44,14,52,14,60,14,66,14,71,14,76,14,82,14,89,14,97,14,103,14,0,0,2,0,0,0,64,0,0,0,224,193,1,0,0,0,1,0,0,0,2,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,108,116,117,111,26,0,0,0,22,0,0,0,22,0,0,0,148,0,0,0,64,35,0,0,0,0,0,0,2,0,0,0,64,0,0,0,192,136,1,0,0,0,1,0,0,0,2,0,0,0,0,0,78,0,0,0,0,0,0,0,0,0,0,0,108,116,117,111,26,0,0,0,22,0,0,0,22,0,0,0,148,0,0,0,64,35,0,0,0,0,0,0,88,0,0,0,0,0,0,0,100,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,10,0,0,0,3,0,0,0,38,0,0,0,4,0,0,0,28,0,0,0,5,0,0,0,70,0,0,0,6,0,0,0,44,0,0,0,7,0,0,0,96,0,0,0,8,0,0,0,253,0,0,0,6,0,5,1,11,1,18,1,27,1,38,1,45,1,53,1,246,2,74,1,84,1,95,1,104,1,109,1,115,1,122,1,129,1,135,1,140,1,144,1,148,1,154,1,159,1,164,1,168,1,174,1,180,1,185,1,191,1,201,1,206,1,212,1,220,1,229,1,232,1,234,1,236,1,238,1,240,1,242,1,244,1,246,1,248,1,250,1,252,1,254,1,0,2,2,2,4,2,6,2,8,2,10,2,12,2,14,2,16,2,18,2,20,2,22,2,24,2,26,2,28,2,40,2,50,2,63,2,75,2,211,3,96,2,98,2,100,2,102,2,104,2,106,2,108,2,110,2,112,2,114,2,116,2,118,2,120,2,122,2,124,2,126,2,128,2,130,2,132,2,134,2,136,2,138,2,140,2,142,2,144,2,146,2,148,2,158,2,162,2,173,2,95,5,112,5,125,5,134,5,206,5,232,5,26,6,67,6,96,6,74,6,86,6,109,6,103,6,116,6,125,6,154,6,132,6,144,6,161,6,190,6,168,6,180,6,197,6,204,6,233,6,211,6,223,6,240,6,254,6,27,7,5,7,17,7,71,3,239,4,195,2,200,2,229,2,113,3,103,3,136,4,22,5,66,5,173,4,217,3,7,4,23,0,62,4,84,4,32,0,195,4,41,0,51,0,218,2,170,4,64,0,76,0,86,0,94,0,97,0,65,4,94,4,106,0,107,4,126,4,198,3,184,2,159,4,112,0,222,2,120,0,132,0,15,3,162,3,177,3,138,0,105,5,118,5,249,5,91,4,133,4,64,3,55,4,2,3,148,3,86,2,63,1,222,4,155,0,41,7,50,6,209,2,237,2,29,3,43,3,58,3,61,3,78,3,88,3,120,3,135,3,186,3,83,5,141,5,76,5,153,5,163,5,170,5,177,5,189,5,199,5,213,5,220,5,163,0,242,5,7,6,14,6,36,6,110,4,223,3,234,3,240,3,247,3,253,3,16,4,21,4,29,4,42,4,49,4,77,4,119,4,0,6,247,6,60,6,51,7,229,4,183,4,39,5,43,6,34,7,205,4,246,4,33,5,43,5,147,4,10,5,52,5,187,4,211,4,252,4,169,0,175,0,182,0,189,0,200,0,209,0,218,0,225,0,232,0,239,0,246,0,0,0,0,0,108,116,117,111,4,0,0,0,28,0,0,0,0,0,0,0,70,0,0,0,70,0,0,0,148,3,0,0,169,3,0,0,21,34,0,0,173,0,0,0,201,2,0,0,188,3,0,0,25,34,0,0,160,0,0,0,26,2,0,0,27,2,0,0,68,101,108,116,97,0,79,109,101,103,97,0,102,114,97,99,116,105,111,110,0,104,121,112,104,101,110,0,109,97,99,114,111,110,0,109,117,0,112,101,114,105,111,100,99,101,110,116,101,114,101,100,0,115,112,97,99,101,0,84,99,111,109,109,97,97,99,99,101,110,116,0,116,99,111,109,109,97,97,99,99,101,110,116,0,0,0,0,0,0,0,0,6,0,0,0,12,0,0,0,21,0,0,0,28,0,0,0,35,0,0,0,38,0,0,0,53,0,0,0,59,0,0,0,72,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,1,2,3,4,5,6,7,8,9,255,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,0,52,0,106,2,167,3,63,4,220,6,125,9,143,10,23,11,137,12,199,14,246,15,87,16,233,17,219,18,104,19,88,22,110,23,32,23,71,24,77,27,156,29,73,31,247,32,107,32,222,33,55,34,154,35,218,58,10,64,122,72,188,80,109,88,104,93,61,98,168,106,91,114,111,115,237,122,180,127,255,135,164,143,132,149,213,158,108,161,115,168,175,183,147,197,199,202,25,204,166,208,209,209,81,215,26,65,143,0,65,0,140,0,175,0,193,1,15,1,147,1,233,1,251,2,7,2,40,2,57,2,82,2,91,2,128,2,136,2,154,69,131,0,198,0,150,0,158,0,167,225,227,245,244,101,128,1,252,237,225,227,242,239,110,128,1,226,243,237,225,236,108,128,247,230,225,227,245,244,101,129,0,193,0,185,243,237,225,236,108,128,247,225,226,242,229,246,101,134,1,2,0,213,0,221,0,232,0,243,0,251,1,7,225,227,245,244,101,128,30,174,227,249,242,233,236,236,233,99,128,4,208,228,239,244,226,229,236,239,119,128,30,182,231,242,225,246,101,128,30,176,232,239,239,235,225,226,239,246,101,128,30,178,244,233,236,228,101,128,30,180,99,4,1,25,1,32,1,121,1,137,225,242,239,110,128,1,205,233,242,99,2,1,40,1,45,236,101,128,36,182,245,237,230,236,229,120,134,0,194,1,66,1,74,1,85,1,93,1,105,1,113,225,227,245,244,101,128,30,164,228,239,244,226,229,236,239,119,128,30,172,231,242,225,246,101,128,30,166,232,239,239,235,225,226,239,246,101,128,30,168,243,237,225,236,108,128,247,226,244,233,236,228,101,128,30,170,245,244,101,129,246,201,1,129,243,237,225,236,108,128,247,180,249,242,233,236,236,233,99,128,4,16,100,3,1,155,1,165,1,209,226,236,231,242,225,246,101,128,2,0,233,229,242,229,243,233,115,131,0,196,1,181,1,192,1,201,227,249,242,233,236,236,233,99,128,4,210,237,225,227,242,239,110,128,1,222,243,237,225,236,108,128,247,228,239,116,2,1,216,1,224,226,229,236,239,119,128,30,160,237,225,227,242,239,110,128,1,224,231,242,225,246,101,129,0,192,1,243,243,237,225,236,108,128,247,224,232,239,239,235,225,226,239,246,101,128,30,162,105,2,2,13,2,25,229,227,249,242,233,236,236,233,99,128,4,212,238,246,229,242,244,229,228,226,242,229,246,101,128,2,2,236,240,232,97,129,3,145,2,49,244,239,238,239,115,128,3,134,109,2,2,63,2,71,225,227,242,239,110,128,1,0,239,238,239,243,240,225,227,101,128,255,33,239,231,239,238,229,107,128,1,4,242,233,238,103,131,0,197,2,104,2,112,2,120,225,227,245,244,101,128,1,250,226,229,236,239,119,128,30,0,243,237,225,236,108,128,247,229,243,237,225,236,108,128,247,97,244,233,236,228,101,129,0,195,2,146,243,237,225,236,108,128,247,227,249,226,225,242,237,229,238,233,225,110,128,5,49,66,137,0,66,2,189,2,198,2,223,3,3,3,10,3,22,3,34,3,46,3,54,227,233,242,227,236,101,128,36,183,228,239,116,2,2,206,2,215,225,227,227,229,238,116,128,30,2,226,229,236,239,119,128,30,4,101,3,2,231,2,242,2,254,227,249,242,233,236,236,233,99,128,4,17,238,225,242,237,229,238,233,225,110,128,5,50,244,97,128,3,146,232,239,239,107,128,1,129,236,233,238,229,226,229,236,239,119,128,30,6,237,239,238,239,243,240,225,227,101,128,255,34,242,229,246,229,243,237,225,236,108,128,246,244,243,237,225,236,108,128,247,98,244,239,240,226,225,114,128,1,130,67,137,0,67,3,85,3,127,3,193,3,210,3,224,4,171,4,188,4,200,4,212,97,3,3,93,3,104,3,111,225,242,237,229,238,233,225,110,128,5,62,227,245,244,101,128,1,6,242,239,110,129,246,202,3,119,243,237,225,236,108,128,246,245,99,3,3,135,3,142,3,171,225,242,239,110,128,1,12,229,228,233,236,236,97,130,0,199,3,155,3,163,225,227,245,244,101,128,30,8,243,237,225,236,108,128,247,231,233,242,99,2,3,179,3,184,236,101,128,36,184,245,237,230,236,229,120,128,1,8,228,239,116,129,1,10,3,201,225,227,227,229,238,116,128,1,10,229,228,233,236,236,225,243,237,225,236,108,128,247,184,104,4,3,234,3,246,4,161,4,165,225,225,242,237,229,238,233,225,110,128,5,73,101,6,4,4,4,24,4,35,4,103,4,115,4,136,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,188,227,249,242,233,236,236,233,99,128,4,39,100,2,4,41,4,85,229,243,227,229,238,228,229,114,2,4,54,4,74,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,190,227,249,242,233,236,236,233,99,128,4,182,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,244,232,225,242,237,229,238,233,225,110,128,5,67,235,232,225,235,225,243,243,233,225,238,227,249,242,233,236,236,233,99,128,4,203,246,229,242,244,233,227,225,236,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,184,105,128,3,167,239,239,107,128,1,135,233,242,227,245,237,230,236,229,248,243,237,225,236,108,128,246,246,237,239,238,239,243,240,225,227,101,128,255,35,239,225,242,237,229,238,233,225,110,128,5,81,243,237,225,236,108,128,247,99,68,142,0,68,4,252,5,10,5,36,5,96,5,121,5,166,5,173,5,231,5,244,6,0,6,12,6,28,6,48,6,57,90,129,1,241,5,2,227,225,242,239,110,128,1,196,97,2,5,16,5,27,225,242,237,229,238,233,225,110,128,5,52,230,242,233,227,225,110,128,1,137,99,4,5,46,5,53,5,62,5,89,225,242,239,110,128,1,14,229,228,233,236,236,97,128,30,16,233,242,99,2,5,70,5,75,236,101,128,36,185,245,237,230,236,229,248,226,229,236,239,119,128,30,18,242,239,225,116,128,1,16,228,239,116,2,5,104,5,113,225,227,227,229,238,116,128,30,10,226,229,236,239,119,128,30,12,101,3,5,129,5,140,5,150,227,249,242,233,236,236,233,99,128,4,20,233,227,239,240,244,233,99,128,3,238,236,244,97,129,34,6,5,158,231,242,229,229,107,128,3,148,232,239,239,107,128,1,138,105,2,5,179,5,218,229,242,229,243,233,115,131,246,203,5,194,5,202,5,210,193,227,245,244,101,128,246,204,199,242,225,246,101,128,246,205,243,237,225,236,108,128,247,168,231,225,237,237,225,231,242,229,229,107,128,3,220,234,229,227,249,242,233,236,236,233,99,128,4,2,236,233,238,229,226,229,236,239,119,128,30,14,237,239,238,239,243,240,225,227,101,128,255,36,239,244,225,227,227,229,238,244,243,237,225,236,108,128,246,247,115,2,6,34,6,41,236,225,243,104,128,1,16,237,225,236,108,128,247,100,244,239,240,226,225,114,128,1,139,122,131,1,242,6,67,6,75,6,112,227,225,242,239,110,128,1,197,101,2,6,81,6,101,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,224,227,249,242,233,236,236,233,99,128,4,5,232,229,227,249,242,233,236,236,233,99,128,4,15,69,146,0,69,6,165,6,183,6,191,7,89,7,153,7,165,7,183,7,211,8,7,8,36,8,94,8,169,8,189,8,208,8,248,9,44,9,109,9,115,225,227,245,244,101,129,0,201,6,175,243,237,225,236,108,128,247,233,226,242,229,246,101,128,1,20,99,5,6,203,6,210,6,224,6,236,7,79,225,242,239,110,128,1,26,229,228,233,236,236,225,226,242,229,246,101,128,30,28,232,225,242,237,229,238,233,225,110,128,5,53,233,242,99,2,6,244,6,249,236,101,128,36,186,245,237,230,236,229,120,135,0,202,7,16,7,24,7,32,7,43,7,51,7,63,7,71,225,227,245,244,101,128,30,190,226,229,236,239,119,128,30,24,228,239,244,226,229,236,239,119,128,30,198,231,242,225,246,101,128,30,192,232,239,239,235,225,226,239,246,101,128,30,194,243,237,225,236,108,128,247,234,244,233,236,228,101,128,30,196,249,242,233,236,236,233,99,128,4,4,100,3,7,97,7,107,7,127,226,236,231,242,225,246,101,128,2,4,233,229,242,229,243,233,115,129,0,203,7,119,243,237,225,236,108,128,247,235,239,116,130,1,22,7,136,7,145,225,227,227,229,238,116,128,1,22,226,229,236,239,119,128,30,184,230,227,249,242,233,236,236,233,99,128,4,36,231,242,225,246,101,129,0,200,7,175,243,237,225,236,108,128,247,232,104,2,7,189,7,200,225,242,237,229,238,233,225,110,128,5,55,239,239,235,225,226,239,246,101,128,30,186,105,3,7,219,7,230,7,245,231,232,244,242,239,237,225,110,128,33,103,238,246,229,242,244,229,228,226,242,229,246,101,128,2,6,239,244,233,230,233,229,228,227,249,242,233,236,236,233,99,128,4,100,108,2,8,13,8,24,227,249,242,233,236,236,233,99,128,4,27,229,246,229,238,242,239,237,225,110,128,33,106,109,3,8,44,8,72,8,83,225,227,242,239,110,130,1,18,8,56,8,64,225,227,245,244,101,128,30,22,231,242,225,246,101,128,30,20,227,249,242,233,236,236,233,99,128,4,28,239,238,239,243,240,225,227,101,128,255,37,110,4,8,104,8,115,8,135,8,154,227,249,242,233,236,236,233,99,128,4,29,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,162,103,129,1,74,8,141,232,229,227,249,242,233,236,236,233,99,128,4,164,232,239,239,235,227,249,242,233,236,236,233,99,128,4,199,111,2,8,175,8,183,231,239,238,229,107,128,1,24,240,229,110,128,1,144,240,243,233,236,239,110,129,3,149,8,200,244,239,238,239,115,128,3,136,114,2,8,214,8,225,227,249,242,233,236,236,233,99,128,4,32,229,246,229,242,243,229,100,129,1,142,8,237,227,249,242,233,236,236,233,99,128,4,45,115,4,9,2,9,13,9,33,9,37,227,249,242,233,236,236,233,99,128,4,33,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,170,104,128,1,169,237,225,236,108,128,247,101,116,3,9,52,9,78,9,92,97,130,3,151,9,60,9,70,242,237,229,238,233,225,110,128,5,56,244,239,238,239,115,128,3,137,104,129,0,208,9,84,243,237,225,236,108,128,247,240,233,236,228,101,129,30,188,9,101,226,229,236,239,119,128,30,26,245,242,111,128,32,172,250,104,130,1,183,9,124,9,132,227,225,242,239,110,128,1,238,242,229,246,229,242,243,229,100,128,1,184,70,136,0,70,9,163,9,172,9,184,9,212,9,219,9,248,10,4,10,15,227,233,242,227,236,101,128,36,187,228,239,244,225,227,227,229,238,116,128,30,30,101,2,9,190,9,202,232,225,242,237,229,238,233,225,110,128,5,86,233,227,239,240,244,233,99,128,3,228,232,239,239,107,128,1,145,105,2,9,225,9,238,244,225,227,249,242,233,236,236,233,99,128,4,114,246,229,242,239,237,225,110,128,33,100,237,239,238,239,243,240,225,227,101,128,255,38,239,245,242,242,239,237,225,110,128,33,99,243,237,225,236,108,128,247,102,71,140,0,71,10,51,10,61,10,107,10,115,10,176,10,193,10,205,11,39,11,52,11,65,11,90,11,107,194,243,241,245,225,242,101,128,51,135,97,3,10,69,10,76,10,94,227,245,244,101,128,1,244,237,237,97,129,3,147,10,84,225,230,242,233,227,225,110,128,1,148,238,231,233,225,227,239,240,244,233,99,128,3,234,226,242,229,246,101,128,1,30,99,4,10,125,10,132,10,141,10,163,225,242,239,110,128,1,230,229,228,233,236,236,97,128,1,34,233,242,99,2,10,149,10,154,236,101,128,36,188,245,237,230,236,229,120,128,1,28,239,237,237,225,225,227,227,229,238,116,128,1,34,228,239,116,129,1,32,10,184,225,227,227,229,238,116,128,1,32,229,227,249,242,233,236,236,233,99,128,4,19,104,3,10,213,10,226,11,33,225,228,225,242,237,229,238,233,225,110,128,5,66,101,3,10,234,10,255,11,16,237,233,228,228,236,229,232,239,239,235,227,249,242,233,236,236,233,99,128,4,148,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,146,245,240,244,245,242,238,227,249,242,233,236,236,233,99,128,4,144,239,239,107,128,1,147,233,237,225,242,237,229,238,233,225,110,128,5,51,234,229,227,249,242,233,236,236,233,99,128,4,3,109,2,11,71,11,79,225,227,242,239,110,128,30,32,239,238,239,243,240,225,227,101,128,255,39,242,225,246,101,129,246,206,11,99,243,237,225,236,108,128,247,96,115,2,11,113,11,129,237,225,236,108,129,247,103,11,122,232,239,239,107,128,2,155,244,242,239,235,101,128,1,228,72,140,0,72,11,165,11,190,11,198,11,208,12,17,12,40,12,77,12,117,12,129,12,157,12,165,12,189,177,184,53,3,11,175,11,180,11,185,179,51,128,37,207,180,51,128,37,170,181,49,128,37,171,178,178,176,183,51,128,37,161,208,243,241,245,225,242,101,128,51,203,97,3,11,216,11,236,12,0,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,168,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,178,242,228,243,233,231,238,227,249,242,233,236,236,233,99,128,4,42,98,2,12,23,12,28,225,114,128,1,38,242,229,246,229,226,229,236,239,119,128,30,42,99,2,12,46,12,55,229,228,233,236,236,97,128,30,40,233,242,99,2,12,63,12,68,236,101,128,36,189,245,237,230,236,229,120,128,1,36,100,2,12,83,12,93,233,229,242,229,243,233,115,128,30,38,239,116,2,12,100,12,109,225,227,227,229,238,116,128,30,34,226,229,236,239,119,128,30,36,237,239,238,239,243,240,225,227,101,128,255,40,111,2,12,135,12,146,225,242,237,229,238,233,225,110,128,5,64,242,233,227,239,240,244,233,99,128,3,232,243,237,225,236,108,128,247,104,245,238,231,225,242,245,237,236,225,245,116,129,246,207,12,181,243,237,225,236,108,128,246,248,250,243,241,245,225,242,101,128,51,144,73,146,0,73,12,239,12,251,12,255,13,11,13,29,13,37,13,94,13,181,13,214,13,224,13,242,13,254,14,48,14,86,14,99,14,166,14,187,14,205,193,227,249,242,233,236,236,233,99,128,4,47,74,128,1,50,213,227,249,242,233,236,236,233,99,128,4,46,225,227,245,244,101,129,0,205,13,21,243,237,225,236,108,128,247,237,226,242,229,246,101,128,1,44,99,3,13,45,13,52,13,84,225,242,239,110,128,1,207,233,242,99,2,13,60,13,65,236,101,128,36,190,245,237,230,236,229,120,129,0,206,13,76,243,237,225,236,108,128,247,238,249,242,233,236,236,233,99,128,4,6,100,3,13,102,13,112,13,155,226,236,231,242,225,246,101,128,2,8,233,229,242,229,243,233,115,131,0,207,13,128,13,136,13,147,225,227,245,244,101,128,30,46,227,249,242,233,236,236,233,99,128,4,228,243,237,225,236,108,128,247,239,239,116,130,1,48,13,164,13,173,225,227,227,229,238,116,128,1,48,226,229,236,239,119,128,30,202,101,2,13,187,13,203,226,242,229,246,229,227,249,242,233,236,236,233,99,128,4,214,227,249,242,233,236,236,233,99,128,4,21,230,242,225,235,244,245,114,128,33,17,231,242,225,246,101,129,0,204,13,234,243,237,225,236,108,128,247,236,232,239,239,235,225,226,239,246,101,128,30,200,105,3,14,6,14,17,14,32,227,249,242,233,236,236,233,99,128,4,24,238,246,229,242,244,229,228,226,242,229,246,101,128,2,10,243,232,239,242,244,227,249,242,233,236,236,233,99,128,4,25,109,2,14,54,14,75,225,227,242,239,110,129,1,42,14,64,227,249,242,233,236,236,233,99,128,4,226,239,238,239,243,240,225,227,101,128,255,41,238,233,225,242,237,229,238,233,225,110,128,5,59,111,3,14,107,14,118,14,126,227,249,242,233,236,236,233,99,128,4,1,231,239,238,229,107,128,1,46,244,97,131,3,153,14,137,14,147,14,158,225,230,242,233,227,225,110,128,1,150,228,233,229,242,229,243,233,115,128,3,170,244,239,238,239,115,128,3,138,115,2,14,172,14,179,237,225,236,108,128,247,105,244,242,239,235,101,128,1,151,244,233,236,228,101,129,1,40,14,197,226,229,236,239,119,128,30,44,250,232,233,244,243,97,2,14,216,14,227,227,249,242,233,236,236,233,99,128,4,116,228,226,236,231,242,225,246,229,227,249,242,233,236,236,233,99,128,4,118,74,134,0,74,15,6,15,18,15,41,15,53,15,67,15,79,225,225,242,237,229,238,233,225,110,128,5,65,227,233,242,99,2,15,27,15,32,236,101,128,36,191,245,237,230,236,229,120,128,1,52,229,227,249,242,233,236,236,233,99,128,4,8,232,229,232,225,242,237,229,238,233,225,110,128,5,75,237,239,238,239,243,240,225,227,101,128,255,42,243,237,225,236,108,128,247,106,75,140,0,75,15,115,15,125,15,135,16,18,16,65,16,76,16,106,16,143,16,156,16,168,16,180,16,208,194,243,241,245,225,242,101,128,51,133,203,243,241,245,225,242,101,128,51,205,97,7,15,151,15,169,15,191,15,211,15,226,15,232,15,249,226,225,243,232,235,233,242,227,249,242,233,236,236,233,99,128,4,160,99,2,15,175,15,181,245,244,101,128,30,48,249,242,233,236,236,233,99,128,4,26,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,154,232,239,239,235,227,249,242,233,236,236,233,99,128,4,195,240,240,97,128,3,154,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,158,246,229,242,244,233,227,225,236,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,156,99,4,16,28,16,35,16,44,16,52,225,242,239,110,128,1,232,229,228,233,236,236,97,128,1,54,233,242,227,236,101,128,36,192,239,237,237,225,225,227,227,229,238,116,128,1,54,228,239,244,226,229,236,239,119,128,30,50,101,2,16,82,16,94,232,225,242,237,229,238,233,225,110,128,5,84,238,225,242,237,229,238,233,225,110,128,5,63,104,3,16,114,16,126,16,137,225,227,249,242,233,236,236,233,99,128,4,37,229,233,227,239,240,244,233,99,128,3,230,239,239,107,128,1,152,234,229,227,249,242,233,236,236,233,99,128,4,12,236,233,238,229,226,229,236,239,119,128,30,52,237,239,238,239,243,240,225,227,101,128,255,43,239,240,240,97,2,16,189,16,200,227,249,242,233,236,236,233,99,128,4,128,231,242,229,229,107,128,3,222,115,2,16,214,16,226,233,227,249,242,233,236,236,233,99,128,4,110,237,225,236,108,128,247,107,76,138,0,76,17,1,17,5,17,9,17,29,17,95,17,133,17,147,17,165,17,177,17,189,74,128,1,199,76,128,246,191,97,2,17,15,17,22,227,245,244,101,128,1,57,237,226,228,97,128,3,155,99,4,17,39,17,46,17,55,17,82,225,242,239,110,128,1,61,229,228,233,236,236,97,128,1,59,233,242,99,2,17,63,17,68,236,101,128,36,193,245,237,230,236,229,248,226,229,236,239,119,128,30,60,239,237,237,225,225,227,227,229,238,116,128,1,59,228,239,116,130,1,63,17,105,17,114,225,227,227,229,238,116,128,1,63,226,229,236,239,119,129,30,54,17,124,237,225,227,242,239,110,128,30,56,233,247,238,225,242,237,229,238,233,225,110,128,5,60,106,129,1,200,17,153,229,227,249,242,233,236,236,233,99,128,4,9,236,233,238,229,226,229,236,239,119,128,30,58,237,239,238,239,243,240,225,227,101,128,255,44,115,2,17,195,17,212,236,225,243,104,129,1,65,17,204,243,237,225,236,108,128,246,249,237,225,236,108,128,247,108,77,137,0,77,17,241,17,251,18,24,18,33,18,58,18,71,18,83,18,91,18,100,194,243,241,245,225,242,101,128,51,134,225,99,2,18,2,18,18,242,239,110,129,246,208,18,10,243,237,225,236,108,128,247,175,245,244,101,128,30,62,227,233,242,227,236,101,128,36,194,228,239,116,2,18,41,18,50,225,227,227,229,238,116,128,30,64,226,229,236,239,119,128,30,66,229,238,225,242,237,229,238,233,225,110,128,5,68,237,239,238,239,243,240,225,227,101,128,255,45,243,237,225,236,108,128,247,109,244,245,242,238,229,100,128,1,156,117,128,3,156,78,141,0,78,18,134,18,138,18,146,18,212,18,237,18,248,19,3,19,21,19,33,19,45,19,58,19,66,19,84,74,128,1,202,225,227,245,244,101,128,1,67,99,4,18,156,18,163,18,172,18,199,225,242,239,110,128,1,71,229,228,233,236,236,97,128,1,69,233,242,99,2,18,180,18,185,236,101,128,36,195,245,237,230,236,229,248,226,229,236,239,119,128,30,74,239,237,237,225,225,227,227,229,238,116,128,1,69,228,239,116,2,18,220,18,229,225,227,227,229,238,116,128,30,68,226,229,236,239,119,128,30,70,232,239,239,235,236,229,230,116,128,1,157,233,238,229,242,239,237,225,110,128,33,104,106,129,1,203,19,9,229,227,249,242,233,236,236,233,99,128,4,10,236,233,238,229,226,229,236,239,119,128,30,72,237,239,238,239,243,240,225,227,101,128,255,46,239,247,225,242,237,229,238,233,225,110,128,5,70,243,237,225,236,108,128,247,110,244,233,236,228,101,129,0,209,19,76,243,237,225,236,108,128,247,241,117,128,3,157,79,141,0,79,19,118,19,132,19,150,19,203,20,78,20,152,20,187,21,48,21,69,21,213,21,223,21,254,22,53,69,129,1,82,19,124,243,237,225,236,108,128,246,250,225,227,245,244,101,129,0,211,19,142,243,237,225,236,108,128,247,243,98,2,19,156,19,196,225,242,242,229,100,2,19,166,19,177,227,249,242,233,236,236,233,99,128,4,232,228,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,234,242,229,246,101,128,1,78,99,4,19,213,19,220,19,235,20,68,225,242,239,110,128,1,209,229,238,244,229,242,229,228,244,233,236,228,101,128,1,159,233,242,99,2,19,243,19,248,236,101,128,36,196,245,237,230,236,229,120,134,0,212,20,13,20,21,20,32,20,40,20,52,20,60,225,227,245,244,101,128,30,208,228,239,244,226,229,236,239,119,128,30,216,231,242,225,246,101,128,30,210,232,239,239,235,225,226,239,246,101,128,30,212,243,237,225,236,108,128,247,244,244,233,236,228,101,128,30,214,249,242,233,236,236,233,99,128,4,30,100,3,20,86,20,109,20,142,226,108,2,20,93,20,101,225,227,245,244,101,128,1,80,231,242,225,246,101,128,2,12,233,229,242,229,243,233,115,130,0,214,20,123,20,134,227,249,242,233,236,236,233,99,128,4,230,243,237,225,236,108,128,247,246,239,244,226,229,236,239,119,128,30,204,103,2,20,158,20,170,239,238,229,235,243,237,225,236,108,128,246,251,242,225,246,101,129,0,210,20,179,243,237,225,236,108,128,247,242,104,4,20,197,20,208,20,212,21,34,225,242,237,229,238,233,225,110,128,5,85,109,128,33,38,111,2,20,218,20,228,239,235,225,226,239,246,101,128,30,206,242,110,133,1,160,20,243,20,251,21,6,21,14,21,26,225,227,245,244,101,128,30,218,228,239,244,226,229,236,239,119,128,30,226,231,242,225,246,101,128,30,220,232,239,239,235,225,226,239,246,101,128,30,222,244,233,236,228,101,128,30,224,245,238,231,225,242,245,237,236,225,245,116,128,1,80,105,129,1,162,21,54,238,246,229,242,244,229,228,226,242,229,246,101,128,2,14,109,4,21,79,21,107,21,184,21,202,225,227,242,239,110,130,1,76,21,91,21,99,225,227,245,244,101,128,30,82,231,242,225,246,101,128,30,80,229,231,97,132,33,38,21,121,21,132,21,140,21,156,227,249,242,233,236,236,233,99,128,4,96,231,242,229,229,107,128,3,169,242,239,245,238,228,227,249,242,233,236,236,233,99,128,4,122,116,2,21,162,21,177,233,244,236,239,227,249,242,233,236,236,233,99,128,4,124,239,238,239,115,128,3,143,233,227,242,239,110,129,3,159,21,194,244,239,238,239,115,128,3,140,239,238,239,243,240,225,227,101,128,255,47,238,229,242,239,237,225,110,128,33,96,111,2,21,229,21,248,231,239,238,229,107,129,1,234,21,239,237,225,227,242,239,110,128,1,236,240,229,110,128,1,134,115,3,22,6,22,33,22,40,236,225,243,104,130,0,216,22,17,22,25,225,227,245,244,101,128,1,254,243,237,225,236,108,128,247,248,237,225,236,108,128,247,111,244,242,239,235,229,225,227,245,244,101,128,1,254,116,2,22,59,22,70,227,249,242,233,236,236,233,99,128,4,126,233,236,228,101,131,0,213,22,83,22,91,22,102,225,227,245,244,101,128,30,76,228,233,229,242,229])
.concat([243,233,115,128,30,78,243,237,225,236,108,128,247,245,80,136,0,80,22,130,22,138,22,147,22,159,22,211,22,227,22,246,23,2,225,227,245,244,101,128,30,84,227,233,242,227,236,101,128,36,197,228,239,244,225,227,227,229,238,116,128,30,86,101,3,22,167,22,178,22,190,227,249,242,233,236,236,233,99,128,4,31,232,225,242,237,229,238,233,225,110,128,5,74,237,233,228,228,236,229,232,239,239,235,227,249,242,233,236,236,233,99,128,4,166,104,2,22,217,22,221,105,128,3,166,239,239,107,128,1,164,105,129,3,160,22,233,247,242,225,242,237,229,238,233,225,110,128,5,83,237,239,238,239,243,240,225,227,101,128,255,48,115,2,23,8,23,25,105,129,3,168,23,14,227,249,242,233,236,236,233,99,128,4,112,237,225,236,108,128,247,112,81,131,0,81,23,42,23,51,23,63,227,233,242,227,236,101,128,36,198,237,239,238,239,243,240,225,227,101,128,255,49,243,237,225,236,108,128,247,113,82,138,0,82,23,95,23,119,23,166,23,217,23,230,23,240,23,245,24,19,24,31,24,43,97,2,23,101,23,112,225,242,237,229,238,233,225,110,128,5,76,227,245,244,101,128,1,84,99,4,23,129,23,136,23,145,23,153,225,242,239,110,128,1,88,229,228,233,236,236,97,128,1,86,233,242,227,236,101,128,36,199,239,237,237,225,225,227,227,229,238,116,128,1,86,100,2,23,172,23,182,226,236,231,242,225,246,101,128,2,16,239,116,2,23,189,23,198,225,227,227,229,238,116,128,30,88,226,229,236,239,119,129,30,90,23,208,237,225,227,242,239,110,128,30,92,229,232,225,242,237,229,238,233,225,110,128,5,80,230,242,225,235,244,245,114,128,33,28,232,111,128,3,161,233,110,2,23,252,24,5,231,243,237,225,236,108,128,246,252,246,229,242,244,229,228,226,242,229,246,101,128,2,18,236,233,238,229,226,229,236,239,119,128,30,94,237,239,238,239,243,240,225,227,101,128,255,50,243,237,225,236,108,129,247,114,24,53,233,238,246,229,242,244,229,100,129,2,129,24,66,243,245,240,229,242,233,239,114,128,2,182,83,139,0,83,24,103,26,17,26,55,26,182,26,221,26,250,27,84,27,105,27,117,27,135,27,143,70,6,24,117,24,209,24,241,25,77,25,119,25,221,48,9,24,137,24,145,24,153,24,161,24,169,24,177,24,185,24,193,24,201,177,176,176,176,48,128,37,12,178,176,176,176,48,128,37,20,179,176,176,176,48,128,37,16,180,176,176,176,48,128,37,24,181,176,176,176,48,128,37,60,182,176,176,176,48,128,37,44,183,176,176,176,48,128,37,52,184,176,176,176,48,128,37,28,185,176,176,176,48,128,37,36,49,3,24,217,24,225,24,233,176,176,176,176,48,128,37,0,177,176,176,176,48,128,37,2,185,176,176,176,48,128,37,97,50,9,25,5,25,13,25,21,25,29,25,37,25,45,25,53,25,61,25,69,176,176,176,176,48,128,37,98,177,176,176,176,48,128,37,86,178,176,176,176,48,128,37,85,179,176,176,176,48,128,37,99,180,176,176,176,48,128,37,81,181,176,176,176,48,128,37,87,182,176,176,176,48,128,37,93,183,176,176,176,48,128,37,92,184,176,176,176,48,128,37,91,51,4,25,87,25,95,25,103,25,111,182,176,176,176,48,128,37,94,183,176,176,176,48,128,37,95,184,176,176,176,48,128,37,90,185,176,176,176,48,128,37,84,52,10,25,141,25,149,25,157,25,165,25,173,25,181,25,189,25,197,25,205,25,213,176,176,176,176,48,128,37,105,177,176,176,176,48,128,37,102,178,176,176,176,48,128,37,96,179,176,176,176,48,128,37,80,180,176,176,176,48,128,37,108,181,176,176,176,48,128,37,103,182,176,176,176,48,128,37,104,183,176,176,176,48,128,37,100,184,176,176,176,48,128,37,101,185,176,176,176,48,128,37,89,53,5,25,233,25,241,25,249,26,1,26,9,176,176,176,176,48,128,37,88,177,176,176,176,48,128,37,82,178,176,176,176,48,128,37,83,179,176,176,176,48,128,37,107,180,176,176,176,48,128,37,106,97,2,26,23,26,44,227,245,244,101,129,1,90,26,32,228,239,244,225,227,227,229,238,116,128,30,100,237,240,233,231,242,229,229,107,128,3,224,99,5,26,67,26,98,26,107,26,147,26,169,225,242,239,110,130,1,96,26,78,26,90,228,239,244,225,227,227,229,238,116,128,30,102,243,237,225,236,108,128,246,253,229,228,233,236,236,97,128,1,94,232,247,97,130,1,143,26,117,26,128,227,249,242,233,236,236,233,99,128,4,216,228,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,218,233,242,99,2,26,155,26,160,236,101,128,36,200,245,237,230,236,229,120,128,1,92,239,237,237,225,225,227,227,229,238,116,128,2,24,228,239,116,2,26,190,26,199,225,227,227,229,238,116,128,30,96,226,229,236,239,119,129,30,98,26,209,228,239,244,225,227,227,229,238,116,128,30,104,101,2,26,227,26,239,232,225,242,237,229,238,233,225,110,128,5,77,246,229,238,242,239,237,225,110,128,33,102,104,5,27,6,27,34,27,48,27,59,27,72,97,2,27,12,27,23,225,242,237,229,238,233,225,110,128,5,71,227,249,242,233,236,236,233,99,128,4,40,227,232,225,227,249,242,233,236,236,233,99,128,4,41,229,233,227,239,240,244,233,99,128,3,226,232,225,227,249,242,233,236,236,233,99,128,4,186,233,237,225,227,239,240,244,233,99,128,3,236,105,2,27,90,27,96,231,237,97,128,3,163,248,242,239,237,225,110,128,33,101,237,239,238,239,243,240,225,227,101,128,255,51,239,230,244,243,233,231,238,227,249,242,233,236,236,233,99,128,4,44,243,237,225,236,108,128,247,115,244,233,231,237,225,231,242,229,229,107,128,3,218,84,141,0,84,27,186,27,191,27,197,28,7,28,32,28,96,28,147,28,177,28,189,28,201,28,246,29,6,29,46,225,117,128,3,164,226,225,114,128,1,102,99,4,27,207,27,214,27,223,27,250,225,242,239,110,128,1,100,229,228,233,236,236,97,128,1,98,233,242,99,2,27,231,27,236,236,101,128,36,201,245,237,230,236,229,248,226,229,236,239,119,128,30,112,239,237,237,225,225,227,227,229,238,116,128,1,98,228,239,116,2,28,15,28,24,225,227,227,229,238,116,128,30,106,226,229,236,239,119,128,30,108,101,4,28,42,28,53,28,73,28,82,227,249,242,233,236,236,233,99,128,4,34,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,172,238,242,239,237,225,110,128,33,105,244,243,229,227,249,242,233,236,236,233,99,128,4,180,104,3,28,104,28,110,28,136,229,244,97,128,3,152,111,2,28,116,28,121,239,107,128,1,172,242,110,129,0,222,28,128,243,237,225,236,108,128,247,254,242,229,229,242,239,237,225,110,128,33,98,105,2,28,153,28,164,236,228,229,243,237,225,236,108,128,246,254,247,238,225,242,237,229,238,233,225,110,128,5,79,236,233,238,229,226,229,236,239,119,128,30,110,237,239,238,239,243,240,225,227,101,128,255,52,111,2,28,207,28,218,225,242,237,229,238,233,225,110,128,5,57,238,101,3,28,227,28,234,28,240,230,233,246,101,128,1,188,243,233,120,128,1,132,244,247,111,128,1,167,242,229,244,242,239,230,236,229,248,232,239,239,107,128,1,174,115,3,29,14,29,26,29,39,229,227,249,242,233,236,236,233,99,128,4,38,232,229,227,249,242,233,236,236,233,99,128,4,11,237,225,236,108,128,247,116,119,2,29,52,29,64,229,236,246,229,242,239,237,225,110,128,33,107,239,242,239,237,225,110,128,33,97,85,142,0,85,29,105,29,123,29,131,29,198,30,69,30,87,30,198,30,214,30,226,31,21,31,30,31,142,31,149,31,219,225,227,245,244,101,129,0,218,29,115,243,237,225,236,108,128,247,250,226,242,229,246,101,128,1,108,99,3,29,139,29,146,29,188,225,242,239,110,128,1,211,233,242,99,2,29,154,29,159,236,101,128,36,202,245,237,230,236,229,120,130,0,219,29,172,29,180,226,229,236,239,119,128,30,118,243,237,225,236,108,128,247,251,249,242,233,236,236,233,99,128,4,35,100,3,29,206,29,229,30,59,226,108,2,29,213,29,221,225,227,245,244,101,128,1,112,231,242,225,246,101,128,2,20,233,229,242,229,243,233,115,134,0,220,29,251,30,3,30,11,30,34,30,42,30,51,225,227,245,244,101,128,1,215,226,229,236,239,119,128,30,114,99,2,30,17,30,24,225,242,239,110,128,1,217,249,242,233,236,236,233,99,128,4,240,231,242,225,246,101,128,1,219,237,225,227,242,239,110,128,1,213,243,237,225,236,108,128,247,252,239,244,226,229,236,239,119,128,30,228,231,242,225,246,101,129,0,217,30,79,243,237,225,236,108,128,247,249,104,2,30,93,30,171,111,2,30,99,30,109,239,235,225,226,239,246,101,128,30,230,242,110,133,1,175,30,124,30,132,30,143,30,151,30,163,225,227,245,244,101,128,30,232,228,239,244,226,229,236,239,119,128,30,240,231,242,225,246,101,128,30,234,232,239,239,235,225,226,239,246,101,128,30,236,244,233,236,228,101,128,30,238,245,238,231,225,242,245,237,236,225,245,116,129,1,112,30,187,227,249,242,233,236,236,233,99,128,4,242,233,238,246,229,242,244,229,228,226,242,229,246,101,128,2,22,235,227,249,242,233,236,236,233,99,128,4,120,109,2,30,232,31,10,225,227,242,239,110,130,1,106,30,244,30,255,227,249,242,233,236,236,233,99,128,4,238,228,233,229,242,229,243,233,115,128,30,122,239,238,239,243,240,225,227,101,128,255,53,239,231,239,238,229,107,128,1,114,240,243,233,236,239,110,133,3,165,31,49,31,53,31,90,31,121,31,134,49,128,3,210,97,2,31,59,31,81,227,245,244,229,232,239,239,235,243,249,237,226,239,236,231,242,229,229,107,128,3,211,230,242,233,227,225,110,128,1,177,228,233,229,242,229,243,233,115,129,3,171,31,103,232,239,239,235,243,249,237,226,239,236,231,242,229,229,107,128,3,212,232,239,239,235,243,249,237,226,239,108,128,3,210,244,239,238,239,115,128,3,142,242,233,238,103,128,1,110,115,3,31,157,31,172,31,179,232,239,242,244,227,249,242,233,236,236,233,99,128,4,14,237,225,236,108,128,247,117,244,242,225,233,231,232,116,2,31,191,31,202,227,249,242,233,236,236,233,99,128,4,174,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,176,244,233,236,228,101,130,1,104,31,231,31,239,225,227,245,244,101,128,30,120,226,229,236,239,119,128,30,116,86,136,0,86,32,11,32,20,32,31,32,60,32,67,32,79,32,91,32,99,227,233,242,227,236,101,128,36,203,228,239,244,226,229,236,239,119,128,30,126,101,2,32,37,32,48,227,249,242,233,236,236,233,99,128,4,18,247,225,242,237,229,238,233,225,110,128,5,78,232,239,239,107,128,1,178,237,239,238,239,243,240,225,227,101,128,255,54,239,225,242,237,229,238,233,225,110,128,5,72,243,237,225,236,108,128,247,118,244,233,236,228,101,128,30,124,87,134,0,87,32,123,32,131,32,154,32,194,32,202,32,214,225,227,245,244,101,128,30,130,227,233,242,99,2,32,140,32,145,236,101,128,36,204,245,237,230,236,229,120,128,1,116,100,2,32,160,32,170,233,229,242,229,243,233,115,128,30,132,239,116,2,32,177,32,186,225,227,227,229,238,116,128,30,134,226,229,236,239,119,128,30,136,231,242,225,246,101,128,30,128,237,239,238,239,243,240,225,227,101,128,255,55,243,237,225,236,108,128,247,119,88,134,0,88,32,238,32,247,33,18,33,31,33,35,33,47,227,233,242,227,236,101,128,36,205,100,2,32,253,33,7,233,229,242,229,243,233,115,128,30,140,239,244,225,227,227,229,238,116,128,30,138,229,232,225,242,237,229,238,233,225,110,128,5,61,105,128,3,158,237,239,238,239,243,240,225,227,101,128,255,56,243,237,225,236,108,128,247,120,89,139,0,89,33,81,33,116,33,139,33,189,33,228,33,236,33,253,34,40,34,52,34,60,34,68,97,2,33,87,33,104,227,245,244,101,129,0,221,33,96,243,237,225,236,108,128,247,253,244,227,249,242,233,236,236,233,99,128,4,98,227,233,242,99,2,33,125,33,130,236,101,128,36,206,245,237,230,236,229,120,128,1,118,100,2,33,145,33,165,233,229,242,229,243,233,115,129,1,120,33,157,243,237,225,236,108,128,247,255,239,116,2,33,172,33,181,225,227,227,229,238,116,128,30,142,226,229,236,239,119,128,30,244,229,114,2,33,196,33,208,233,227,249,242,233,236,236,233,99,128,4,43,245,228,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,248,231,242,225,246,101,128,30,242,232,239,239,107,129,1,179,33,245,225,226,239,246,101,128,30,246,105,3,34,5,34,16,34,27,225,242,237,229,238,233,225,110,128,5,69,227,249,242,233,236,236,233,99,128,4,7,247,238,225,242,237,229,238,233,225,110,128,5,82,237,239,238,239,243,240,225,227,101,128,255,57,243,237,225,236,108,128,247,121,244,233,236,228,101,128,30,248,245,115,2,34,75,34,113,226,233,103,2,34,83,34,94,227,249,242,233,236,236,233,99,128,4,106,233,239,244,233,230,233,229,228,227,249,242,233,236,236,233,99,128,4,108,236,233,244,244,236,101,2,34,124,34,135,227,249,242,233,236,236,233,99,128,4,102,233,239,244,233,230,233,229,228,227,249,242,233,236,236,233,99,128,4,104,90,136,0,90,34,174,34,198,34,243,35,14,35,81,35,173,35,185,35,197,97,2,34,180,34,191,225,242,237,229,238,233,225,110,128,5,54,227,245,244,101,128,1,121,99,2,34,204,34,221,225,242,239,110,129,1,125,34,213,243,237,225,236,108,128,246,255,233,242,99,2,34,229,34,234,236,101,128,36,207,245,237,230,236,229,120,128,30,144,228,239,116,130,1,123,34,253,35,6,225,227,227,229,238,116,128,1,123,226,229,236,239,119,128,30,146,101,3,35,22,35,33,35,76,227,249,242,233,236,236,233,99,128,4,23,100,2,35,39,35,58,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,152,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,222,244,97,128,3,150,232,101,4,35,92,35,103,35,119,35,130,225,242,237,229,238,233,225,110,128,5,58,226,242,229,246,229,227,249,242,233,236,236,233,99,128,4,193,227,249,242,233,236,236,233,99,128,4,22,100,2,35,136,35,155,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,150,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,220,236,233,238,229,226,229,236,239,119,128,30,148,237,239,238,239,243,240,225,227,101,128,255,58,115,2,35,203,35,210,237,225,236,108,128,247,122,244,242,239,235,101,128,1,181,97,158,0,97,36,26,38,154,39,4,39,68,39,132,39,196,40,4,40,68,40,126,40,190,41,70,41,217,42,137,42,237,43,17,49,192,49,229,50,0,50,225,51,7,52,96,52,168,53,123,53,132,54,5,56,13,57,3,57,50,57,201,57,215,49,138,39,1,36,50,36,114,36,154,36,218,37,26,37,90,37,154,37,218,38,26,38,90,48,138,39,33,36,74,36,78,36,82,36,86,36,90,36,94,36,98,36,102,36,106,36,110,48,128,39,94,49,128,39,97,50,128,39,98,51,128,39,99,52,128,39,100,53,128,39,16,54,128,39,101,55,128,39,102,56,128,39,103,57,128,38,96,49,134,38,27,36,130,36,134,36,138,36,142,36,146,36,150,48,128,38,101,49,128,38,102,50,128,38,99,55,128,39,9,56,128,39,8,57,128,39,7,50,138,38,30,36,178,36,182,36,186,36,190,36,194,36,198,36,202,36,206,36,210,36,214,48,128,36,96,49,128,36,97,50,128,36,98,51,128,36,99,52,128,36,100,53,128,36,101,54,128,36,102,55,128,36,103,56,128,36,104,57,128,36,105,51,138,39,12,36,242,36,246,36,250,36,254,37,2,37,6,37,10,37,14,37,18,37,22,48,128,39,118,49,128,39,119,50,128,39,120,51,128,39,121,52,128,39,122,53,128,39,123,54,128,39,124,55,128,39,125,56,128,39,126,57,128,39,127,52,138,39,13,37,50,37,54,37,58,37,62,37,66,37,70,37,74,37,78,37,82,37,86,48,128,39,128,49,128,39,129,50,128,39,130,51,128,39,131,52,128,39,132,53,128,39,133,54,128,39,134,55,128,39,135,56,128,39,136,57,128,39,137,53,138,39,14,37,114,37,118,37,122,37,126,37,130,37,134,37,138,37,142,37,146,37,150,48,128,39,138,49,128,39,139,50,128,39,140,51,128,39,141,52,128,39,142,53,128,39,143,54,128,39,144,55,128,39,145,56,128,39,146,57,128,39,147,54,138,39,15,37,178,37,182,37,186,37,190,37,194,37,198,37,202,37,206,37,210,37,214,48,128,39,148,49,128,33,146,50,128,39,163,51,128,33,148,52,128,33,149,53,128,39,153,54,128,39,155,55,128,39,156,56,128,39,157,57,128,39,158,55,138,39,17,37,242,37,246,37,250,37,254,38,2,38,6,38,10,38,14,38,18,38,22,48,128,39,159,49,128,39,160,50,128,39,161,51,128,39,162,52,128,39,164,53,128,39,165,54,128,39,166,55,128,39,167,56,128,39,168,57,128,39,169,56,138,39,18,38,50,38,54,38,58,38,62,38,66,38,70,38,74,38,78,38,82,38,86,48,128,39,171,49,128,39,173,50,128,39,175,51,128,39,178,52,128,39,179,53,128,39,181,54,128,39,184,55,128,39,186,56,128,39,187,57,128,39,188,57,138,39,19,38,114,38,118,38,122,38,126,38,130,38,134,38,138,38,142,38,146,38,150,48,128,39,189,49,128,39,190,50,128,39,154,51,128,39,170,52,128,39,182,53,128,39,185,54,128,39,152,55,128,39,180,56,128,39,183,57,128,39,172,50,138,39,2,38,178,38,224,38,228,38,232,38,236,38,240,38,244,38,248,38,252,39,0,48,135,39,20,38,196,38,200,38,204,38,208,38,212,38,216,38,220,48,128,39,174,49,128,39,177,50,128,39,3,51,128,39,80,52,128,39,82,53,128,39,110,54,128,39,112,49,128,39,21,50,128,39,22,51,128,39,23,52,128,39,24,53,128,39,25,54,128,39,26,55,128,39,27,56,128,39,28,57,128,39,34,51,138,39,4,39,28,39,32,39,36,39,40,39,44,39,48,39,52,39,56,39,60,39,64,48,128,39,35,49,128,39,36,50,128,39,37,51,128,39,38,52,128,39,39,53,128,38,5,54,128,39,41,55,128,39,42,56,128,39,43,57,128,39,44,52,138,38,14,39,92,39,96,39,100,39,104,39,108,39,112,39,116,39,120,39,124,39,128,48,128,39,45,49,128,39,46,50,128,39,47,51,128,39,48,52,128,39,49,53,128,39,50,54,128,39,51,55,128,39,52,56,128,39,53,57,128,39,54,53,138,39,6,39,156,39,160,39,164,39,168,39,172,39,176,39,180,39,184,39,188,39,192,48,128,39,55,49,128,39,56,50,128,39,57,51,128,39,58,52,128,39,59,53,128,39,60,54,128,39,61,55,128,39,62,56,128,39,63,57,128,39,64,54,138,39,29,39,220,39,224,39,228,39,232,39,236,39,240,39,244,39,248,39,252,40,0,48,128,39,65,49,128,39,66,50,128,39,67,51,128,39,68,52,128,39,69,53,128,39,70,54,128,39,71,55,128,39,72,56,128,39,73,57,128,39,74,55,138,39,30,40,28,40,32,40,36,40,40,40,44,40,48,40,52,40,56,40,60,40,64,48,128,39,75,49,128,37,207,50,128,39,77,51,128,37,160,52,128,39,79,53,128,39,81,54,128,37,178,55,128,37,188,56,128,37,198,57,128,39,86,56,137,39,31,40,90,40,94,40,98,40,102,40,106,40,110,40,114,40,118,40,122,49,128,37,215,50,128,39,88,51,128,39,89,52,128,39,90,53,128,39,111,54,128,39,113,55,128,39,114,56,128,39,115,57,128,39,104,57,138,39,32,40,150,40,154,40,158,40,162,40,166,40,170,40,174,40,178,40,182,40,186,48,128,39,105,49,128,39,108,50,128,39,109,51,128,39,106,52,128,39,107,53,128,39,116,54,128,39,117,55,128,39,91,56,128,39,92,57,128,39,93,97,7,40,206,40,216,40,223,40,230,40,255,41,15,41,26,226,229,238,231,225,236,105,128,9,134,227,245,244,101,128,0,225,228,229,246,97,128,9,6,231,117,2,40,237,40,246,234,225,242,225,244,105,128,10,134,242,237,245,235,232,105,128,10,6,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,62,242,245,243,241,245,225,242,101,128,51,3,246,239,247,229,236,243,233,231,110,3,41,42,41,52,41,59,226,229,238,231,225,236,105,128,9,190,228,229,246,97,128,9,62,231,245,234,225,242,225,244,105,128,10,190,98,4,41,80,41,121,41,130,41,140,226,242,229,246,233,225,244,233,239,110,2,41,95,41,110,237,225,242,235,225,242,237,229,238,233,225,110,128,5,95,243,233,231,238,228,229,246,97,128,9,112,229,238,231,225,236,105,128,9,133,239,240,239,237,239,230,111,128,49,26,242,229,246,101,134,1,3,41,159,41,167,41,178,41,189,41,197,41,209,225,227,245,244,101,128,30,175,227,249,242,233,236,236,233,99,128,4,209,228,239,244,226,229,236,239,119,128,30,183,231,242,225,246,101,128,30,177,232,239,239,235,225,226,239,246,101,128,30,179,244,233,236,228,101,128,30,181,99,4,41,227,41,234,42,57,42,127,225,242,239,110,128,1,206,233,242,99,2,41,242,41,247,236,101,128,36,208,245,237,230,236,229,120,133,0,226,42,10,42,18,42,29,42,37,42,49,225,227,245,244,101,128,30,165,228,239,244,226,229,236,239,119,128,30,173,231,242,225,246,101,128,30,167,232,239,239,235,225,226,239,246,101,128,30,169,244,233,236,228,101,128,30,171,245,244,101,133,0,180,42,73,42,84,42,101,42,108,42,117,226,229,236,239,247,227,237,98,128,3,23,99,2,42,90,42,95,237,98,128,3,1,239,237,98,128,3,1,228,229,246,97,128,9,84,236,239,247,237,239,100,128,2,207,244,239,238,229,227,237,98,128,3,65,249,242,233,236,236,233,99,128,4,48,100,5,42,149,42,159,42,173,42,179,42,213,226,236,231,242,225,246,101,128,2,1,228,225,235,231,245,242,237,245,235,232,105,128,10,113,229,246,97,128,9,5,233,229,242,229,243,233,115,130,0,228,42,193,42,204,227,249,242,233,236,236,233,99,128,4,211,237,225,227,242,239,110,128,1,223,239,116,2,42,220,42,228,226,229,236,239,119,128,30,161,237,225,227,242,239,110,128,1,225,101,131,0,230,42,247,42,255,43,8,225,227,245,244,101,128,1,253,235,239,242,229,225,110,128,49,80,237,225,227,242,239,110,128,1,227,230,233,105,6,43,33,43,53,45,246,45,252,46,11,49,111,48,2,43,39,43,46,176,178,176,56,128,32,21,184,185,180,49,128,32,164,177,48,3,43,62,45,86,45,221,48,9,43,82,43,102,43,164,43,226,44,32,44,94,44,156,44,218,45,24,49,3,43,90,43,94,43,98,55,128,4,16,56,128,4,17,57,128,4,18,50,10,43,124,43,128,43,132,43,136,43,140,43,144,43,148,43,152,43,156,43,160,48,128,4,19,49,128,4,20,50,128,4,21,51,128,4,1,52,128,4,22,53,128,4,23,54,128,4,24,55,128,4,25,56,128,4,26,57,128,4,27,51,10,43,186,43,190,43,194,43,198,43,202,43,206,43,210,43,214,43,218,43,222,48,128,4,28,49,128,4,29,50,128,4,30,51,128,4,31,52,128,4,32,53,128,4,33,54,128,4,34,55,128,4,35,56,128,4,36,57,128,4,37,52,10,43,248,43,252,44,0,44,4,44,8,44,12,44,16,44,20,44,24,44,28,48,128,4,38,49,128,4,39,50,128,4,40,51,128,4,41,52,128,4,42,53,128,4,43,54,128,4,44,55,128,4,45,56,128,4,46,57,128,4,47,53,10,44,54,44,58,44,62,44,66,44,70,44,74,44,78,44,82,44,86,44,90,48,128,4,144,49,128,4,2,50,128,4,3,51,128,4,4,52,128,4,5,53,128,4,6,54,128,4,7,55,128,4,8,56,128,4,9,57,128,4,10,54,10,44,116,44,120,44,124,44,128,44,132,44,136,44,140,44,144,44,148,44,152,48,128,4,11,49,128,4,12,50,128,4,14,51,128,246,196,52,128,246,197,53,128,4,48,54,128,4,49,55,128,4,50,56,128,4,51,57,128,4,52,55,10,44,178,44,182,44,186,44,190,44,194,44,198,44,202,44,206,44,210,44,214,48,128,4,53,49,128,4,81,50,128,4,54,51,128,4,55,52,128,4,56,53,128,4,57,54,128,4,58,55,128,4,59,56,128,4,60,57,128,4,61,56,10,44,240,44,244,44,248,44,252,45,0,45,4,45,8,45,12,45,16,45,20,48,128,4,62,49,128,4,63,50,128,4,64,51,128,4,65,52,128,4,66,53,128,4,67,54,128,4,68,55,128,4,69,56,128,4,70,57,128,4,71,57,10,45,46,45,50,45,54,45,58,45,62,45,66,45,70,45,74,45,78,45,82,48,128,4,72,49,128,4,73,50,128,4,74,51,128,4,75,52,128,4,76,53,128,4,77,54,128,4,78,55,128,4,79,56,128,4,145,57,128,4,82,49,4,45,96,45,158,45,163,45,189,48,10,45,118,45,122,45,126,45,130,45,134,45,138,45,142,45,146,45,150,45,154,48,128,4,83,49,128,4,84,50,128,4,85,51,128,4,86,52,128,4,87,53,128,4,88,54,128,4,89,55,128,4,90,56,128,4,91,57,128,4,92,177,48,128,4,94,52,4,45,173,45,177,45,181,45,185,53,128,4,15,54,128,4,98,55,128,4,114,56,128,4,116,57,5,45,201,45,205,45,209,45,213,45,217,50,128,246,198,51,128,4,95,52,128,4,99,53,128,4,115,54,128,4,117,56,2,45,227,45,241,51,2,45,233,45,237,49,128,246,199,50,128,246,200,180,54,128,4,217,178,185,57,128,32,14,179,48,2,46,3,46,7,48,128,32,15,49,128,32,13,181,55,7,46,28,46,98,47,163,47,240,48,197,49,34,49,105,51,2,46,34,46,48,56,2,46,40,46,44,49,128,6,106,56,128,6,12,57,8,46,66,46,70,46,74,46,78,46,82,46,86,46,90,46,94,50,128,6,96,51,128,6,97,52,128,6,98,53,128,6,99,54,128,6,100,55,128,6,101,56,128,6,102,57,128,6,103,52,7,46,114,46,146,46,208,47,14,47,46,47,102,47,158,48,5,46,126,46,130,46,134,46,138,46,142,48,128,6,104,49,128,6,105,51,128,6,27,55,128,6,31,57,128,6,33,49,10,46,168,46,172,46,176,46,180,46,184,46,188,46,192,46,196,46,200,46,204,48,128,6,34,49,128,6,35,50,128,6,36,51,128,6,37,52,128,6,38,53,128,6,39,54,128,6,40,55,128,6,41,56,128,6,42,57,128,6,43,50,10,46,230,46,234,46,238,46,242,46,246,46,250,46,254,47,2,47,6,47,10,48,128,6,44,49,128,6,45,50,128,6,46,51,128,6,47,52,128,6,48,53,128,6,49,54,128,6,50,55,128,6,51,56,128,6,52,57,128,6,53,51,5,47,26,47,30,47,34,47,38,47,42,48,128,6,54,49,128,6,55,50,128,6,56,51,128,6,57,52,128,6,58,52,9,47,66,47,70,47,74,47,78,47,82,47,86,47,90,47,94,47,98,48,128,6,64,49,128,6,65,50,128,6,66,51,128,6,67,52,128,6,68,53,128,6,69,54,128,6,70,56,128,6,72,57,128,6,73,53,9,47,122,47,126,47,130,47,134,47,138,47,142,47,146,47,150,47,154,48,128,6,74,49,128,6,75,50,128,6,76,51,128,6,77,52,128,6,78,53,128,6,79,54,128,6,80,55,128,6,81,56,128,6,82,183,48,128,6,71,53,3,47,171,47,203,47,235,48,5,47,183,47,187,47,191,47,195,47,199,53,128,6,164,54,128,6,126,55,128,6,134,56,128,6,152,57,128,6,175,49,5,47,215,47,219,47,223,47,227,47,231,49,128,6,121,50,128,6,136,51,128,6,145,52,128,6,186,57,128,6,210,179,52,128,6,213,54,7,48,0,48,5,48,10,48,15,48,53,48,115,48,177,179,54,128,32,170,180,53,128,5,190,181,56,128,5,195,54,6,48,29,48,33,48,37,48,41,48,45,48,49,52,128,5,208,53,128,5,209,54,128,5,210,55,128,5,211,56,128,5,212,57,128,5,213,55,10,48,75,48,79,48,83,48,87,48,91,48,95,48,99,48,103,48,107,48,111,48,128,5,214,49,128,5,215,50,128,5,216,51,128,5,217,52,128,5,218,53,128,5,219,54,128,5,220,55,128,5,221,56,128,5,222,57,128,5,223,56,10,48,137,48,141,48,145,48,149,48,153,48,157,48,161,48,165,48,169,48,173,48,128,5,224,49,128,5,225,50,128,5,226,51,128,5,227,52,128,5,228,53,128,5,229,54,128,5,230,55,128,5,231,56,128,5,232,57,128,5,233,57,3,48,185,48,189,48,193,48,128,5,234,52,128,251,42,53,128,251,43,55,4,48,207,48,221,48,241,48,246,48,2,48,213,48,217,48,128,251,75,53,128,251,31,49,3,48,229,48,233,48,237,54,128,5,240,55,128,5,241,56,128,5,242,178,51,128,251,53,57,7,49,6,49,10,49,14,49,18,49,22,49,26,49,30,51,128,5,180,52,128,5,181,53,128,5,182,54,128,5,187,55,128,5,184,56,128,5,183,57,128,5,176,56,3,49,42,49,86,49,91,48,7,49,58,49,62,49,66,49,70,49,74,49,78,49,82,48,128,5,178,49,128,5,177,50,128,5,179,51,128,5,194,52,128,5,193,54,128,5,185,55,128,5,188,179,57,128,5,189,52,2,49,97,49,101,49,128,5,191,50,128,5,192,185,178,57,128,2,188,54,3,49,119,49,178,49,185,49,4,49,129,49,145,49,151,49,172,50,2,49,135,49,140,180,56,128,33,5,184,57,128,33,19,179,181,50,128,33,22,181,55,3,49,160,49,164,49,168,51,128,32,44,52,128,32,45,53,128,32,46,182,182,52,128,32,12,179,177,182,55,128,6,109,180,185,179,55,128,2,189,103,2,49,198,49,205,242,225,246,101,128,0,224,117,2,49,211,49,220,234,225,242,225,244,105,128,10,133,242,237,245,235,232,105,128,10,5,104,2,49,235,49,245,233,242,225,231,225,238,97,128,48,66,239,239,235,225,226,239,246,101,128,30,163,105,7,50,16,50,41,50,48,50,60,50,85,50,101,50,181,98,2,50,22,50,31,229,238,231,225,236,105,128,9,144,239,240,239,237,239,230,111,128,49,30,228,229,246,97,128,9,16,229,227,249,242,233,236,236,233,99,128,4,213,231,117,2,50,67,50,76,234,225,242,225,244,105,128,10,144,242,237,245,235,232,105,128,10,16,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,72,110,5,50,113,50,122,50,136,50,152,50,167,225,242,225,226,233,99,128,6,57,230,233,238,225,236,225,242,225,226,233,99,128,254,202,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,203,237,229,228,233,225,236,225,242,225,226,233,99,128,254,204,246,229,242,244,229,228,226,242,229,246,101,128,2,3,246,239,247,229,236,243,233,231,110,3,50,197,50,207,50,214,226,229,238,231,225,236,105,128,9,200,228,229,246,97,128,9,72,231,245,234,225,242,225,244,105,128,10,200,107,2,50,231,50,255,225,244,225,235,225,238,97,129,48,162,50,243,232,225,236,230,247,233,228,244,104,128,255,113,239,242,229,225,110,128,49,79,108,3,51,15,52,71,52,80,101,2,51,21,52,66,102,136,5,208,51,41,51,50,51,65,51,79,51,168,51,182,52,37,52,51,225,242,225,226,233,99,128,6,39,228,225,231,229,243,232,232,229,226,242,229,119,128,251,48,230,233,238,225,236,225,242,225,226,233,99,128,254,142,104,2,51,85,51,160,225,237,250,97,2,51,94,51,127,225,226,239,246,101,2,51,104,51,113,225,242,225,226,233,99,128,6,35,230,233,238,225,236,225,242,225,226,233,99,128,254,132,226,229,236,239,119,2,51,137,51,146,225,242,225,226,233,99,128,6,37,230,233,238,225,236,225,242,225,226,233,99,128,254,136,229,226,242,229,119,128,5,208,236,225,237,229,228,232,229,226,242,229,119,128,251,79,237,97,2,51,189,51,225,228,228,225,225,226,239,246,101,2,51,202,51,211,225,242,225,226,233,99,128,6,34,230,233,238,225,236,225,242,225,226,233,99,128,254,130,235,243,245,242,97,4,51,239,51,248,52,6,52,22,225,242,225,226,233,99,128,6,73,230,233,238,225,236,225,242,225,226,233,99,128,254,240,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,243,237,229,228,233,225,236,225,242,225,226,233,99,128,254,244,240,225,244,225,232,232,229,226,242,229,119,128,251,46,241,225,237,225,244,243,232,229,226,242,229,119,128,251,47,240,104,128,33,53,236,229,241,245,225,108,128,34,76,240,232,97,129,3,177,52,88,244,239,238,239,115,128,3,172,109,4,52,106,52,114,52,125,52,159,225,227,242,239,110,128,1,1,239,238,239,243,240,225,227,101,128,255,65,240,229,242,243,225,238,100,130,0,38,52,139,52,151,237,239,238,239,243,240,225,227,101,128,255,6,243,237,225,236,108,128,247,38,243,241,245,225,242,101,128,51,194,110,4,52,178,52,189,53,55,53,65,226,239,240,239,237,239,230,111,128,49,34,103,4,52,199,52,210,52,224,53,47,226,239,240,239,237,239,230,111,128,49,36,235,232,225,238,235,232,245,244,232,225,105,128,14,90,236,101,131,34,32,52,235,53,32,53,39,226,242,225,227,235,229,116,2,52,247,53,11,236,229,230,116,129,48,8,53,0,246,229,242,244,233,227,225,108,128,254,63,242,233,231,232,116,129,48,9,53,21,246,229,242,244,233,227,225,108,128,254,64,236,229,230,116,128,35,41,242,233,231,232,116,128,35,42,243,244,242,239,109,128,33,43,239,244,229,236,229,233,97,128,3,135,117,2,53,71,53,83,228,225,244,244,225,228,229,246,97,128,9,82,243,246,225,242,97,3,53,95,53,105,53,112,226,229,238,231,225,236,105,128,9,130,228,229,246,97,128,9,2,231,245,234,225,242,225,244,105,128,10,130,239,231,239,238,229,107,128,1,5,112,3,53,140,53,164,53,194,97,2,53,146,53,158,225,244,239,243,241,245,225,242,101,128,51,0,242,229,110,128,36,156,239,243,244,242,239,240,232,101,2,53,177,53,188,225,242,237,229,238,233,225,110,128,5,90,237,239,100,128,2,188,112,2,53,200,53,205,236,101,128,248,255,242,111,2,53,212,53,220,225,227,232,229,115,128,34,80,120,2,53,226,53,246,229,241,245,225,108,129,34,72,53,236,239,242,233,237,225,231,101,128,34,82,233,237,225,244,229,236,249,229,241,245,225,108,128,34,69,114,4,54,15,54,42,54,46,54,91,225,229,97,2,54,23,54,33,229,235,239,242,229,225,110,128,49,142,235,239,242,229,225,110,128,49,141,99,128,35,18,105,2,54,52,54,66,231,232,244,232,225,236,230,242,233,238,103,128,30,154,238,103,130,0,229,54,75,54,83,225,227,245,244,101,128,1,251,226,229,236,239,119,128,30,1,242,239,119,8,54,111,54,118,54,247,55,57,55,107,55,162,55,185,56,4,226,239,244,104,128,33,148,100,3,54,126,54,165,54,212,225,243,104,4,54,138,54,145,54,152,54,160,228,239,247,110,128,33,227,236,229,230,116,128,33,224,242,233,231,232,116,128,33,226,245,112,128,33,225,226,108,5,54,178,54,185,54,192,54,199,54,207,226,239,244,104,128,33,212,228,239,247,110,128,33,211,236,229,230,116,128,33,208,242,233,231,232,116,128,33,210,245,112,128,33,209,239,247,110,131,33,147,54,224,54,231,54,239,236,229,230,116,128,33,153,242,233,231,232,116,128,33,152,247,232,233,244,101,128,33,233,104,2,54,253,55,48,229,225,100,4,55,9,55,19,55,29,55,40,228,239,247,238,237,239,100,128,2,197,236,229,230,244,237,239,100,128,2,194,242,233,231,232,244,237,239,100,128,2,195,245,240,237,239,100,128,2,196,239,242,233,250,229,120,128,248,231,236,229,230,116,131,33,144,55,70,55,87,55,99,228,226,108,129,33,208,55,78,243,244,242,239,235,101,128,33,205,239,246,229,242,242,233,231,232,116,128,33,198,247,232,233,244,101,128,33,230,242,233,231,232,116,132,33,146,55,123,55,135,55,143,55,154,228,226,236,243,244,242,239,235,101,128,33,207,232,229,225,246,121,128,39,158,239,246,229,242,236,229,230,116,128,33,196,247,232,233,244,101,128,33,232,244,225,98,2,55,170,55,177,236,229,230,116,128,33,228,242,233,231,232,116,128,33,229,245,112,132,33,145,55,198,55,226,55,244,55,252,100,2,55,204,55,216,110,129,33,149,55,210,226,243,101,128,33,168,239,247,238,226,225,243,101,128,33,168,236,229,230,116,129,33,150,55,235,239,230,228,239,247,110,128,33,197,242,233,231,232,116,128,33,151,247,232,233,244,101,128,33,231,246,229,242,244,229,120,128,248,230,115,5,56,25,56,101,56,146,56,229,56,239,99,2,56,31,56,83,233,105,2,56,38,56,61,227,233,242,227,245,109,129,0,94,56,49,237,239,238,239,243,240,225,227,101,128,255,62,244,233,236,228,101,129,0,126,56,71,237,239,238,239,243,240,225,227,101,128,255,94,242,233,240,116,129,2,81,56,92,244,245,242,238,229,100,128,2,82,237,225,236,108,2,56,110,56,121,232,233,242,225,231,225,238,97,128,48,65,235,225,244,225,235,225,238,97,129,48,161,56,134,232,225,236,230,247,233,228,244,104,128,255,103,244,229,242,233,115,2,56,156,56,225,107,131,0,42,56,166,56,194,56,217,97,2,56,172,56,186,236,244,239,238,229,225,242,225,226,233,99,128,6,109,242,225,226,233,99,128,6,109,109,2,56,200,56,206,225,244,104,128,34,23,239,238,239,243,240,225,227,101,128,255,10,243,237,225,236,108,128,254,97,109,128,32,66,245,240,229,242,233,239,114,128,246,233,249,237,240,244,239,244,233,227,225,236,236,249,229,241,245,225,108,128,34,67,116,132,0,64,57,15,57,22,57,34,57,42,233,236,228,101,128,0,227,237,239,238,239,243,240,225,227,101,128,255,32,243,237,225,236,108,128,254,107,245,242,238,229,100,128,2,80,117,6,57,64,57,89,57,96,57,121,57,141,57,157,98,2,57,70,57,79,229,238,231,225,236,105,128,9,148,239,240,239,237,239,230,111,128,49,32,228,229,246,97,128,9,20,231,117,2,57,103,57,112,234,225,242,225,244,105,128,10,148,242,237,245,235,232,105,128,10,20,236,229,238,231,244,232,237,225,242,235,226,229,238,231,225,236,105,128,9,215,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,76,246,239,247,229,236,243,233,231,110,3,57,173,57,183,57,190,226,229,238,231,225,236,105,128,9,204,228,229,246,97,128,9,76,231,245,234,225,242,225,244,105,128,10,204,246,225,231,242,225,232,225,228,229,246,97,128,9,61,121,2,57,221,57,233,226,225,242,237,229,238,233,225,110,128,5,97,233,110,130,5,226,57,242,58,1,225,236,244,239,238,229,232,229,226,242,229,119,128,251,32,232,229,226,242,229,119,128,5,226,98,144,0,98,58,46,58,181,58,192,58,201,58,226,60,11,60,73,60,146,62,72,62,84,62,127,62,135,62,145,64,15,64,39,64,48,97,7,58,62,58,72,58,96,58,103,58,128,58,152,58,163,226,229,238,231,225,236,105,128,9,172,227,235,243,236,225,243,104,129,0,92,58,84,237,239,238,239,243,240,225,227,101,128,255,60,228,229,246,97,128,9,44,231,117,2,58,110,58,119,234,225,242,225,244,105,128,10,172,242,237,245,235,232,105,128,10,44,104,2,58,134,58,144,233,242,225,231,225,238,97,128,48,112,244,244,232,225,105,128,14,63,235,225,244,225,235,225,238,97,128,48,208,114,129,0,124,58,169,237,239,238,239,243,240,225,227,101,128,255,92,226,239,240,239,237,239,230,111,128,49,5,227,233,242,227,236,101,128,36,209,228,239,116,2,58,209,58,218,225,227,227,229,238,116,128,30,3,226,229,236,239,119,128,30,5,101,6,58,240,59,5,59,28,59,170,59,181,59,193,225,237,229,228,243,233,248,244,229,229,238,244,232,238,239,244,229,115,128,38,108,99,2,59,11,59,18,225,245,243,101,128,34,53,249,242,233,236,236,233,99,128,4,49,104,5,59,40,59,49,59,63,59,93,59,152,225,242,225,226,233,99,128,6,40,230,233,238,225,236,225,242,225,226,233,99,128,254,144,105,2,59,69,59,84,238,233,244,233,225,236,225,242,225,226,233,99,128,254,145,242,225,231,225,238,97,128,48,121,237,101,2,59,100,59,113,228,233,225,236,225,242,225,226,233,99,128,254,146,229,237,105,2,59,121,59,136,238,233,244,233,225,236,225,242,225,226,233,99,128,252,159,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,8,238,239,239,238,230,233,238,225,236,225,242,225,226,233,99,128,252,109,235,225,244,225,235,225,238,97,128,48,217,238,225,242,237,229,238,233,225,110,128,5,98,116,132,5,209,59,205,59,225,59,245,59,254,97,129,3,178,59,211,243,249,237,226,239,236,231,242,229,229,107,128,3,208,228,225,231,229,243,104,129,251,49,59,236,232,229,226,242,229,119,128,251,49,232,229,226,242,229,119,128,5,209,242,225,230,229,232,229,226,242,229,119,128,251,76,104,2,60,17,60,67,97,3,60,25,60,35,60,42,226,229,238,231,225,236,105,128,9,173,228,229,246,97,128,9,45,231,117,2,60,49,60,58,234,225,242,225,244,105,128,10,173,242,237,245,235,232,105,128,10,45,239,239,107,128,2,83,105,5,60,85,60,96,60,107,60,121,60,135,232,233,242,225,231,225,238,97,128,48,115,235,225,244,225,235,225,238,97,128,48,211,236,225,226,233,225,236,227,236,233,227,107,128,2,152,238,228,233,231,245,242,237,245,235,232,105,128,10,2,242,245,243,241,245,225,242,101,128,51,49,108,3,60,154,62,55,62,66,97,2,60,160,62,50,227,107,6,60,175,60,184,60,221,61,114,61,169,61,221,227,233,242,227,236,101,128,37,207,100,2,60,190,60,199,233,225,237,239,238,100,128,37,198,239,247,238,240,239,233,238,244,233,238,231,244,242,233,225,238,231,236,101,128,37,188,108,2,60,227,61,74,101,2,60,233,61,13,230,244,240,239,233,238,244,233,238,103,2,60,248,61,2,240,239,233,238,244,229,114,128,37,196,244,242,233,225,238,231,236,101,128,37,192,238,244,233,227,245,236,225,242,226,242,225,227,235,229,116,2,61,33,61,53,236,229,230,116,129,48,16,61,42,246,229,242,244,233,227,225,108,128,254,59,242,233,231,232,116,129,48,17,61,63,246,229,242,244,233,227,225,108,128,254,60,239,247,229,114,2,61,83,61,98,236,229,230,244,244,242,233,225,238,231,236,101,128,37,227,242,233,231,232,244,244,242,233,225,238,231,236,101,128,37,226,114,2,61,120,61,131,229,227,244,225,238,231,236,101,128,37,172,233,231,232,244,240,239,233,238,244,233,238,103,2,61,148,61,158,240,239,233,238,244,229,114,128,37,186,244,242,233,225,238,231,236,101,128,37,182,115,3,61,177,61,207,61,215,109,2,61,183,61,195,225,236,236,243,241,245,225,242,101,128,37,170,233,236,233,238,231,230,225,227,101,128,38,59,241,245,225,242,101,128,37,160,244,225,114,128,38,5,245,240,112,2,61,229,62,11,229,114,2,61,236,61,251,236,229,230,244,244,242,233,225,238,231,236,101,128,37,228,242,233,231,232,244,244,242,233,225,238,231,236,101,128,37,229,239,233,238,244,233,238,103,2,62,23,62,39,243,237,225,236,236,244,242,233,225,238,231,236,101,128,37,180,244,242,233,225,238,231,236,101,128,37,178,238,107,128,36,35,233,238,229,226,229,236,239,119,128,30,7,239,227,107,128,37,136,237,239,238,239,243,240,225,227,101,128,255,66,111,3,62,92,62,105,62,116,226,225,233,237])
.concat([225,233,244,232,225,105,128,14,26,232,233,242,225,231,225,238,97,128,48,124,235,225,244,225,235,225,238,97,128,48,220,240,225,242,229,110,128,36,157,241,243,241,245,225,242,101,128,51,195,114,4,62,155,63,149,63,222,64,5,225,99,2,62,162,63,56,101,3,62,170,62,175,62,243,229,120,128,248,244,236,229,230,116,133,0,123,62,192,62,197,62,219,62,227,62,232,226,116,128,248,243,109,2,62,203,62,208,233,100,128,248,242,239,238,239,243,240,225,227,101,128,255,91,243,237,225,236,108,128,254,91,244,112,128,248,241,246,229,242,244,233,227,225,108,128,254,55,242,233,231,232,116,133,0,125,63,5,63,10,63,32,63,40,63,45,226,116,128,248,254,109,2,63,16,63,21,233,100,128,248,253,239,238,239,243,240,225,227,101,128,255,93,243,237,225,236,108,128,254,92,244,112,128,248,252,246,229,242,244,233,227,225,108,128,254,56,235,229,116,2,63,64,63,106,236,229,230,116,132,0,91,63,79,63,84,63,89,63,101,226,116,128,248,240,229,120,128,248,239,237,239,238,239,243,240,225,227,101,128,255,59,244,112,128,248,238,242,233,231,232,116,132,0,93,63,122,63,127,63,132,63,144,226,116,128,248,251,229,120,128,248,250,237,239,238,239,243,240,225,227,101,128,255,61,244,112,128,248,249,229,246,101,131,2,216,63,161,63,172,63,178,226,229,236,239,247,227,237,98,128,3,46,227,237,98,128,3,6,233,238,246,229,242,244,229,100,3,63,193,63,204,63,210,226,229,236,239,247,227,237,98,128,3,47,227,237,98,128,3,17,228,239,245,226,236,229,227,237,98,128,3,97,233,228,231,101,2,63,231,63,242,226,229,236,239,247,227,237,98,128,3,42,233,238,246,229,242,244,229,228,226,229,236,239,247,227,237,98,128,3,58,239,235,229,238,226,225,114,128,0,166,115,2,64,21,64,29,244,242,239,235,101,128,1,128,245,240,229,242,233,239,114,128,246,234,244,239,240,226,225,114,128,1,131,117,3,64,56,64,67,64,78,232,233,242,225,231,225,238,97,128,48,118,235,225,244,225,235,225,238,97,128,48,214,236,108,2,64,85,64,115,229,116,130,32,34,64,94,64,104,233,238,246,229,242,243,101,128,37,216,239,240,229,242,225,244,239,114,128,34,25,243,229,249,101,128,37,206,99,143,0,99,64,156,65,105,65,116,65,180,65,211,66,48,67,215,68,199,69,43,69,92,72,84,72,92,72,102,72,114,72,147,97,9,64,176,64,187,64,197,64,204,64,211,64,236,64,246,65,42,65,51,225,242,237,229,238,233,225,110,128,5,110,226,229,238,231,225,236,105,128,9,154,227,245,244,101,128,1,7,228,229,246,97,128,9,26,231,117,2,64,218,64,227,234,225,242,225,244,105,128,10,154,242,237,245,235,232,105,128,10,26,236,243,241,245,225,242,101,128,51,136,238,228,242,225,226,233,238,228,117,4,65,8,65,18,65,24,65,31,226,229,238,231,225,236,105,128,9,129,227,237,98,128,3,16,228,229,246,97,128,9,1,231,245,234,225,242,225,244,105,128,10,129,240,243,236,239,227,107,128,33,234,114,3,65,59,65,65,65,91,229,239,102,128,33,5,239,110,130,2,199,65,74,65,85,226,229,236,239,247,227,237,98,128,3,44,227,237,98,128,3,12,242,233,225,231,229,242,229,244,245,242,110,128,33,181,226,239,240,239,237,239,230,111,128,49,24,99,4,65,126,65,133,65,152,65,174,225,242,239,110,128,1,13,229,228,233,236,236,97,129,0,231,65,144,225,227,245,244,101,128,30,9,233,242,99,2,65,160,65,165,236,101,128,36,210,245,237,230,236,229,120,128,1,9,245,242,108,128,2,85,100,2,65,186,65,202,239,116,129,1,11,65,193,225,227,227,229,238,116,128,1,11,243,241,245,225,242,101,128,51,197,101,2,65,217,65,233,228,233,236,236,97,129,0,184,65,227,227,237,98,128,3,39,238,116,132,0,162,65,246,66,14,66,26,66,37,105,2,65,252,66,4,231,242,225,228,101,128,33,3,238,230,229,242,233,239,114,128,246,223,237,239,238,239,243,240,225,227,101,128,255,224,239,236,228,243,244,249,236,101,128,247,162,243,245,240,229,242,233,239,114,128,246,224,104,5,66,60,66,123,66,134,67,62,67,154,97,4,66,70,66,81,66,91,66,98,225,242,237,229,238,233,225,110,128,5,121,226,229,238,231,225,236,105,128,9,155,228,229,246,97,128,9,27,231,117,2,66,105,66,114,234,225,242,225,244,105,128,10,155,242,237,245,235,232,105,128,10,27,226,239,240,239,237,239,230,111,128,49,20,101,6,66,148,66,168,66,192,67,4,67,16,67,37,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,189,99,2,66,174,66,182,235,237,225,242,107,128,39,19,249,242,233,236,236,233,99,128,4,71,100,2,66,198,66,242,229,243,227,229,238,228,229,114,2,66,211,66,231,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,191,227,249,242,233,236,236,233,99,128,4,183,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,245,232,225,242,237,229,238,233,225,110,128,5,115,235,232,225,235,225,243,243,233,225,238,227,249,242,233,236,236,233,99,128,4,204,246,229,242,244,233,227,225,236,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,185,105,129,3,199,67,68,229,245,227,104,4,67,81,67,116,67,131,67,140,97,2,67,87,67,102,227,233,242,227,236,229,235,239,242,229,225,110,128,50,119,240,225,242,229,238,235,239,242,229,225,110,128,50,23,227,233,242,227,236,229,235,239,242,229,225,110,128,50,105,235,239,242,229,225,110,128,49,74,240,225,242,229,238,235,239,242,229,225,110,128,50,9,111,2,67,160,67,210,227,104,3,67,169,67,191,67,201,225,110,2,67,176,67,184,231,244,232,225,105,128,14,10,244,232,225,105,128,14,8,233,238,231,244,232,225,105,128,14,9,239,229,244,232,225,105,128,14,12,239,107,128,1,136,105,2,67,221,68,67,229,245,99,5,67,235,68,14,68,29,68,38,68,52,97,2,67,241,68,0,227,233,242,227,236,229,235,239,242,229,225,110,128,50,118,240,225,242,229,238,235,239,242,229,225,110,128,50,22,227,233,242,227,236,229,235,239,242,229,225,110,128,50,104,235,239,242,229,225,110,128,49,72,240,225,242,229,238,235,239,242,229,225,110,128,50,8,245,240,225,242,229,238,235,239,242,229,225,110,128,50,28,242,99,2,68,74,68,169,236,101,132,37,203,68,87,68,98,68,103,68,127,237,245,236,244,233,240,236,121,128,34,151,239,116,128,34,153,112,2,68,109,68,115,236,245,115,128,34,149,239,243,244,225,236,237,225,242,107,128,48,54,247,233,244,104,2,68,136,68,152,236,229,230,244,232,225,236,230,226,236,225,227,107,128,37,208,242,233,231,232,244,232,225,236,230,226,236,225,227,107,128,37,209,245,237,230,236,229,120,130,2,198,68,182,68,193,226,229,236,239,247,227,237,98,128,3,45,227,237,98,128,3,2,108,3,68,207,68,213,69,11,229,225,114,128,35,39,233,227,107,4,68,225,68,236,68,245,68,255,225,236,246,229,239,236,225,114,128,1,194,228,229,238,244,225,108,128,1,192,236,225,244,229,242,225,108,128,1,193,242,229,244,242,239,230,236,229,120,128,1,195,245,98,129,38,99,69,18,243,245,233,116,2,69,27,69,35,226,236,225,227,107,128,38,99,247,232,233,244,101,128,38,103,109,3,69,51,69,65,69,76,227,245,226,229,228,243,241,245,225,242,101,128,51,164,239,238,239,243,240,225,227,101,128,255,67,243,241,245,225,242,229,228,243,241,245,225,242,101,128,51,160,111,8,69,110,69,121,69,208,70,150,71,179,71,210,72,61,72,70,225,242,237,229,238,233,225,110,128,5,129,236,239,110,131,0,58,69,133,69,158,69,177,237,239,110,2,69,141,69,149,229,244,225,242,121,128,32,161,239,243,240,225,227,101,128,255,26,115,2,69,164,69,170,233,231,110,128,32,161,237,225,236,108,128,254,85,244,242,233,225,238,231,245,236,225,114,2,69,192,69,202,232,225,236,230,237,239,100,128,2,209,237,239,100,128,2,208,109,2,69,214,70,143,237,97,134,0,44,69,231,70,39,70,50,70,62,70,92,70,115,97,3,69,239,70,9,70,17,226,239,246,101,2,69,248,69,254,227,237,98,128,3,19,242,233,231,232,244,227,237,98,128,3,21,227,227,229,238,116,128,246,195,114,2,70,23,70,30,225,226,233,99,128,6,12,237,229,238,233,225,110,128,5,93,233,238,230,229,242,233,239,114,128,246,225,237,239,238,239,243,240,225,227,101,128,255,12,242,229,246,229,242,243,229,100,2,70,75,70,86,225,226,239,246,229,227,237,98,128,3,20,237,239,100,128,2,189,115,2,70,98,70,105,237,225,236,108,128,254,80,245,240,229,242,233,239,114,128,246,226,244,245,242,238,229,100,2,70,126,70,137,225,226,239,246,229,227,237,98,128,3,18,237,239,100,128,2,187,240,225,243,115,128,38,60,110,2,70,156,70,165,231,242,245,229,238,116,128,34,69,116,2,70,171,70,185,239,245,242,233,238,244,229,231,242,225,108,128,34,46,242,239,108,142,35,3,70,219,70,225,70,240,70,255,71,43,71,88,71,102,71,107,71,112,71,117,71,123,71,128,71,169,71,174,193,195,75,128,0,6,66,2,70,231,70,236,197,76,128,0,7,83,128,0,8,67,2,70,246,70,251,193,78,128,0,24,82,128,0,13,68,3,71,7,71,33,71,38,67,4,71,17,71,21,71,25,71,29,49,128,0,17,50,128,0,18,51,128,0,19,52,128,0,20,197,76,128,0,127,204,69,128,0,16,69,5,71,55,71,59,71,64,71,69,71,74,77,128,0,25,206,81,128,0,5,207,84,128,0,4,211,67,128,0,27,84,2,71,80,71,84,66,128,0,23,88,128,0,3,70,2,71,94,71,98,70,128,0,12,83,128,0,28,199,83,128,0,29,200,84,128,0,9,204,70,128,0,10,206,193,75,128,0,21,210,83,128,0,30,83,5,71,140,71,144,71,154,71,159,71,164,73,128,0,15,79,129,0,14,71,150,84,128,0,2,212,88,128,0,1,213,66,128,0,26,217,78,128,0,22,213,83,128,0,31,214,84,128,0,11,240,249,242,233,231,232,116,129,0,169,71,191,115,2,71,197,71,203,225,238,115,128,248,233,229,242,233,102,128,246,217,114,2,71,216,72,44,238,229,242,226,242,225,227,235,229,116,2,71,231,72,9,236,229,230,116,130,48,12,71,242,71,254,232,225,236,230,247,233,228,244,104,128,255,98,246,229,242,244,233,227,225,108,128,254,65,242,233,231,232,116,130,48,13,72,21,72,33,232,225,236,230,247,233,228,244,104,128,255,99,246,229,242,244,233,227,225,108,128,254,66,240,239,242,225,244,233,239,238,243,241,245,225,242,101,128,51,127,243,241,245,225,242,101,128,51,199,246,229,242,235,231,243,241,245,225,242,101,128,51,198,240,225,242,229,110,128,36,158,242,245,250,229,233,242,111,128,32,162,243,244,242,229,244,227,232,229,100,128,2,151,245,114,2,72,121,72,139,236,121,2,72,128,72,134,225,238,100,128,34,207,239,114,128,34,206,242,229,238,227,121,128,0,164,249,114,4,72,158,72,166,72,173,72,181,194,242,229,246,101,128,246,209,198,236,229,120,128,246,210,226,242,229,246,101,128,246,212,230,236,229,120,128,246,213,100,146,0,100,72,228,74,110,75,134,75,194,76,114,77,68,77,130,78,59,78,72,78,81,78,107,78,132,78,141,79,208,79,216,79,227,79,247,80,19,97,11,72,252,73,7,73,17,73,89,73,152,73,163,73,174,73,243,74,49,74,55,74,85,225,242,237,229,238,233,225,110,128,5,100,226,229,238,231,225,236,105,128,9,166,100,5,73,29,73,38,73,44,73,58,73,74,225,242,225,226,233,99,128,6,54,229,246,97,128,9,38,230,233,238,225,236,225,242,225,226,233,99,128,254,190,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,191,237,229,228,233,225,236,225,242,225,226,233,99,128,254,192,103,3,73,97,73,114,73,128,229,243,104,129,5,188,73,105,232,229,226,242,229,119,128,5,188,231,229,114,129,32,32,73,122,228,226,108,128,32,33,117,2,73,134,73,143,234,225,242,225,244,105,128,10,166,242,237,245,235,232,105,128,10,38,232,233,242,225,231,225,238,97,128,48,96,235,225,244,225,235,225,238,97,128,48,192,108,3,73,182,73,191,73,229,225,242,225,226,233,99,128,6,47,229,116,130,5,211,73,200,73,220,228,225,231,229,243,104,129,251,51,73,211,232,229,226,242,229,119,128,251,51,232,229,226,242,229,119,128,5,211,230,233,238,225,236,225,242,225,226,233,99,128,254,170,237,237,97,3,73,253,74,6,74,18,225,242,225,226,233,99,128,6,79,236,239,247,225,242,225,226,233,99,128,6,79,244,225,238,97,2,74,27,74,41,236,244,239,238,229,225,242,225,226,233,99,128,6,76,242,225,226,233,99,128,6,76,238,228,97,128,9,100,242,231,97,2,74,63,74,72,232,229,226,242,229,119,128,5,167,236,229,230,244,232,229,226,242,229,119,128,5,167,243,233,225,240,238,229,245,237,225,244,225,227,249,242,233,236,236,233,227,227,237,98,128,4,133,98,3,74,118,75,115,75,125,108,9,74,138,74,146,75,3,75,11,75,27,75,38,75,56,75,70,75,81,199,242,225,246,101,128,246,211,97,2,74,152,74,209,238,231,236,229,226,242,225,227,235,229,116,2,74,168,74,188,236,229,230,116,129,48,10,74,177,246,229,242,244,233,227,225,108,128,254,61,242,233,231,232,116,129,48,11,74,198,246,229,242,244,233,227,225,108,128,254,62,114,2,74,215,74,236,227,232,233,238,246,229,242,244,229,228,226,229,236,239,247,227,237,98,128,3,43,242,239,119,2,74,244,74,251,236,229,230,116,128,33,212,242,233,231,232,116,128,33,210,228,225,238,228,97,128,9,101,231,242,225,246,101,129,246,214,75,21,227,237,98,128,3,15,233,238,244,229,231,242,225,108,128,34,44,236,239,247,236,233,238,101,129,32,23,75,50,227,237,98,128,3,51,239,246,229,242,236,233,238,229,227,237,98,128,3,63,240,242,233,237,229,237,239,100,128,2,186,246,229,242,244,233,227,225,108,2,75,94,75,100,226,225,114,128,32,22,236,233,238,229,225,226,239,246,229,227,237,98,128,3,14,239,240,239,237,239,230,111,128,49,9,243,241,245,225,242,101,128,51,200,99,4,75,144,75,151,75,160,75,187,225,242,239,110,128,1,15,229,228,233,236,236,97,128,30,17,233,242,99,2,75,168,75,173,236,101,128,36,211,245,237,230,236,229,248,226,229,236,239,119,128,30,19,242,239,225,116,128,1,17,100,4,75,204,76,29,76,39,76,90,97,4,75,214,75,224,75,231,76,0,226,229,238,231,225,236,105,128,9,161,228,229,246,97,128,9,33,231,117,2,75,238,75,247,234,225,242,225,244,105,128,10,161,242,237,245,235,232,105,128,10,33,108,2,76,6,76,15,225,242,225,226,233,99,128,6,136,230,233,238,225,236,225,242,225,226,233,99,128,251,137,228,232,225,228,229,246,97,128,9,92,232,97,3,76,48,76,58,76,65,226,229,238,231,225,236,105,128,9,162,228,229,246,97,128,9,34,231,117,2,76,72,76,81,234,225,242,225,244,105,128,10,162,242,237,245,235,232,105,128,10,34,239,116,2,76,97,76,106,225,227,227,229,238,116,128,30,11,226,229,236,239,119,128,30,13,101,8,76,132,76,185,76,192,76,217,76,227,76,238,77,27,77,63,99,2,76,138,76,175,233,237,225,236,243,229,240,225,242,225,244,239,114,2,76,156,76,165,225,242,225,226,233,99,128,6,107,240,229,242,243,233,225,110,128,6,107,249,242,233,236,236,233,99,128,4,52,231,242,229,101,128,0,176,232,105,2,76,199,76,208,232,229,226,242,229,119,128,5,173,242,225,231,225,238,97,128,48,103,233,227,239,240,244,233,99,128,3,239,235,225,244,225,235,225,238,97,128,48,199,108,2,76,244,77,11,229,244,101,2,76,252,77,3,236,229,230,116,128,35,43,242,233,231,232,116,128,35,38,244,97,129,3,180,77,18,244,245,242,238,229,100,128,1,141,238,239,237,233,238,225,244,239,242,237,233,238,245,243,239,238,229,238,245,237,229,242,225,244,239,242,226,229,238,231,225,236,105,128,9,248,250,104,128,2,164,104,2,77,74,77,124,97,3,77,82,77,92,77,99,226,229,238,231,225,236,105,128,9,167,228,229,246,97,128,9,39,231,117,2,77,106,77,115,234,225,242,225,244,105,128,10,167,242,237,245,235,232,105,128,10,39,239,239,107,128,2,87,105,6,77,144,77,193,77,253,78,8,78,19,78,29,97,2,77,150,77,172,236,249,244,233,235,225,244,239,238,239,115,129,3,133,77,166,227,237,98,128,3,68,237,239,238,100,129,38,102,77,181,243,245,233,244,247,232,233,244,101,128,38,98,229,242,229,243,233,115,133,0,168,77,212,77,220,77,231,77,237,77,245,225,227,245,244,101,128,246,215,226,229,236,239,247,227,237,98,128,3,36,227,237,98,128,3,8,231,242,225,246,101,128,246,216,244,239,238,239,115,128,3,133,232,233,242,225,231,225,238,97,128,48,98,235,225,244,225,235,225,238,97,128,48,194,244,244,239,237,225,242,107,128,48,3,246,105,2,78,36,78,47,228,101,129,0,247,78,43,115,128,34,35,243,233,239,238,243,236,225,243,104,128,34,21,234,229,227,249,242,233,236,236,233,99,128,4,82,235,243,232,225,228,101,128,37,147,108,2,78,87,78,98,233,238,229,226,229,236,239,119,128,30,15,243,241,245,225,242,101,128,51,151,109,2,78,113,78,121,225,227,242,239,110,128,1,17,239,238,239,243,240,225,227,101,128,255,68,238,226,236,239,227,107,128,37,132,111,10,78,163,78,175,78,185,78,196,78,207,79,23,79,28,79,39,79,154,79,180,227,232,225,228,225,244,232,225,105,128,14,14,228,229,235,244,232,225,105,128,14,20,232,233,242,225,231,225,238,97,128,48,105,235,225,244,225,235,225,238,97,128,48,201,236,236,225,114,132,0,36,78,222,78,233,78,245,79,0,233,238,230,229,242,233,239,114,128,246,227,237,239,238,239,243,240,225,227,101,128,255,4,239,236,228,243,244,249,236,101,128,247,36,115,2,79,6,79,13,237,225,236,108,128,254,105,245,240,229,242,233,239,114,128,246,228,238,103,128,32,171,242,245,243,241,245,225,242,101,128,51,38,116,6,79,53,79,70,79,92,79,103,79,135,79,142,225,227,227,229,238,116,129,2,217,79,64,227,237,98,128,3,7,226,229,236,239,247,99,2,79,81,79,86,237,98,128,3,35,239,237,98,128,3,35,235,225,244,225,235,225,238,97,128,48,251,236,229,243,115,2,79,112,79,116,105,128,1,49,106,129,246,190,79,122,243,244,242,239,235,229,232,239,239,107,128,2,132,237,225,244,104,128,34,197,244,229,228,227,233,242,227,236,101,128,37,204,245,226,236,229,249,239,228,240,225,244,225,104,129,251,31,79,171,232,229,226,242,229,119,128,251,31,247,238,244,225,227,107,2,79,191,79,202,226,229,236,239,247,227,237,98,128,3,30,237,239,100,128,2,213,240,225,242,229,110,128,36,159,243,245,240,229,242,233,239,114,128,246,235,116,2,79,233,79,239,225,233,108,128,2,86,239,240,226,225,114,128,1,140,117,2,79,253,80,8,232,233,242,225,231,225,238,97,128,48,101,235,225,244,225,235,225,238,97,128,48,197,122,132,1,243,80,31,80,40,80,59,80,96,225,236,244,239,238,101,128,2,163,99,2,80,46,80,53,225,242,239,110,128,1,198,245,242,108,128,2,165,101,2,80,65,80,85,225,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,225,227,249,242,233,236,236,233,99,128,4,85,232,229,227,249,242,233,236,236,233,99,128,4,95,101,151,0,101,80,159,80,178,80,212,81,186,81,248,82,25,82,37,82,60,82,113,83,225,84,27,84,129,84,245,85,124,85,199,85,230,86,36,86,89,87,24,87,157,87,177,87,221,88,56,97,2,80,165,80,172,227,245,244,101,128,0,233,242,244,104,128,38,65,98,3,80,186,80,195,80,205,229,238,231,225,236,105,128,9,143,239,240,239,237,239,230,111,128,49,28,242,229,246,101,128,1,21,99,5,80,224,81,41,81,55,81,87,81,176,97,2,80,230,81,35,238,228,242,97,3,80,241,80,248,81,3,228,229,246,97,128,9,13,231,245,234,225,242,225,244,105,128,10,141,246,239,247,229,236,243,233,231,110,2,81,17,81,24,228,229,246,97,128,9,69,231,245,234,225,242,225,244,105,128,10,197,242,239,110,128,1,27,229,228,233,236,236,225,226,242,229,246,101,128,30,29,104,2,81,61,81,72,225,242,237,229,238,233,225,110,128,5,101,249,233,247,238,225,242,237,229,238,233,225,110,128,5,135,233,242,99,2,81,95,81,100,236,101,128,36,212,245,237,230,236,229,120,134,0,234,81,121,81,129,81,137,81,148,81,156,81,168,225,227,245,244,101,128,30,191,226,229,236,239,119,128,30,25,228,239,244,226,229,236,239,119,128,30,199,231,242,225,246,101,128,30,193,232,239,239,235,225,226,239,246,101,128,30,195,244,233,236,228,101,128,30,197,249,242,233,236,236,233,99,128,4,84,100,4,81,196,81,206,81,212,81,222,226,236,231,242,225,246,101,128,2,5,229,246,97,128,9,15,233,229,242,229,243,233,115,128,0,235,239,116,130,1,23,81,231,81,240,225,227,227,229,238,116,128,1,23,226,229,236,239,119,128,30,185,101,2,81,254,82,9,231,245,242,237,245,235,232,105,128,10,15,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,71,230,227,249,242,233,236,236,233,99,128,4,68,103,2,82,43,82,50,242,225,246,101,128,0,232,245,234,225,242,225,244,105,128,10,143,104,4,82,70,82,81,82,92,82,102,225,242,237,229,238,233,225,110,128,5,103,226,239,240,239,237,239,230,111,128,49,29,233,242,225,231,225,238,97,128,48,72,239,239,235,225,226,239,246,101,128,30,187,105,4,82,123,82,134,83,192,83,207,226,239,240,239,237,239,230,111,128,49,31,231,232,116,142,0,56,82,168,82,177,82,187,82,217,82,224,83,6,83,31,83,76,83,110,83,122,83,133,83,166,83,174,83,185,225,242,225,226,233,99,128,6,104,226,229,238,231,225,236,105,128,9,238,227,233,242,227,236,101,129,36,103,82,198,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,145,228,229,246,97,128,9,110,229,229,110,2,82,232,82,241,227,233,242,227,236,101,128,36,113,112,2,82,247,82,254,225,242,229,110,128,36,133,229,242,233,239,100,128,36,153,231,117,2,83,13,83,22,234,225,242,225,244,105,128,10,238,242,237,245,235,232,105,128,10,110,104,2,83,37,83,63,97,2,83,43,83,54,227,235,225,242,225,226,233,99,128,6,104,238,231,250,232,239,117,128,48,40,238,239,244,229,226,229,225,237,229,100,128,38,107,105,2,83,82,83,100,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,39,238,230,229,242,233,239,114,128,32,136,237,239,238,239,243,240,225,227,101,128,255,24,239,236,228,243,244,249,236,101,128,247,56,112,2,83,139,83,146,225,242,229,110,128,36,123,229,114,2,83,153,83,159,233,239,100,128,36,143,243,233,225,110,128,6,248,242,239,237,225,110,128,33,119,243,245,240,229,242,233,239,114,128,32,120,244,232,225,105,128,14,88,238,246,229,242,244,229,228,226,242,229,246,101,128,2,7,239,244,233,230,233,229,228,227,249,242,233,236,236,233,99,128,4,101,107,2,83,231,83,255,225,244,225,235,225,238,97,129,48,168,83,243,232,225,236,230,247,233,228,244,104,128,255,116,111,2,84,5,84,20,238,235,225,242,231,245,242,237,245,235,232,105,128,10,116,242,229,225,110,128,49,84,108,3,84,35,84,46,84,107,227,249,242,233,236,236,233,99,128,4,59,101,2,84,52,84,59,237,229,238,116,128,34,8,246,229,110,3,84,69,84,78,84,99,227,233,242,227,236,101,128,36,106,112,2,84,84,84,91,225,242,229,110,128,36,126,229,242,233,239,100,128,36,146,242,239,237,225,110,128,33,122,236,233,240,243,233,115,129,32,38,84,118,246,229,242,244,233,227,225,108,128,34,238,109,5,84,141,84,169,84,180,84,200,84,211,225,227,242,239,110,130,1,19,84,153,84,161,225,227,245,244,101,128,30,23,231,242,225,246,101,128,30,21,227,249,242,233,236,236,233,99,128,4,60,228,225,243,104,129,32,20,84,189,246,229,242,244,233,227,225,108,128,254,49,239,238,239,243,240,225,227,101,128,255,69,112,2,84,217,84,237,232,225,243,233,243,237,225,242,235,225,242,237,229,238,233,225,110,128,5,91,244,249,243,229,116,128,34,5,110,6,85,3,85,14,85,25,85,69,85,101,85,116,226,239,240,239,237,239,230,111,128,49,35,227,249,242,233,236,236,233,99,128,4,61,100,2,85,31,85,50,225,243,104,129,32,19,85,39,246,229,242,244,233,227,225,108,128,254,50,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,163,103,130,1,75,85,77,85,88,226,239,240,239,237,239,230,111,128,49,37,232,229,227,249,242,233,236,236,233,99,128,4,165,232,239,239,235,227,249,242,233,236,236,233,99,128,4,200,243,240,225,227,101,128,32,2,111,3,85,132,85,140,85,149,231,239,238,229,107,128,1,25,235,239,242,229,225,110,128,49,83,240,229,110,130,2,91,85,159,85,168,227,236,239,243,229,100,128,2,154,242,229,246,229,242,243,229,100,130,2,92,85,183,85,192,227,236,239,243,229,100,128,2,94,232,239,239,107,128,2,93,112,2,85,205,85,212,225,242,229,110,128,36,160,243,233,236,239,110,129,3,181,85,222,244,239,238,239,115,128,3,173,241,117,2,85,237,86,25,225,108,130,0,61,85,246,86,2,237,239,238,239,243,240,225,227,101,128,255,29,115,2,86,8,86,15,237,225,236,108,128,254,102,245,240,229,242,233,239,114,128,32,124,233,246,225,236,229,238,227,101,128,34,97,114,3,86,44,86,55,86,66,226,239,240,239,237,239,230,111,128,49,38,227,249,242,233,236,236,233,99,128,4,64,229,246,229,242,243,229,100,129,2,88,86,78,227,249,242,233,236,236,233,99,128,4,77,115,6,86,103,86,114,86,134,86,215,87,4,87,14,227,249,242,233,236,236,233,99,128,4,65,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,171,104,132,2,131,86,146,86,153,86,184,86,199,227,245,242,108,128,2,134,239,242,116,2,86,161,86,168,228,229,246,97,128,9,14,246,239,247,229,236,243,233,231,238,228,229,246,97,128,9,70,242,229,246,229,242,243,229,228,236,239,239,112,128,1,170,243,241,245,225,244,242,229,246,229,242,243,229,100,128,2,133,237,225,236,108,2,86,224,86,235,232,233,242,225,231,225,238,97,128,48,71,235,225,244,225,235,225,238,97,129,48,167,86,248,232,225,236,230,247,233,228,244,104,128,255,106,244,233,237,225,244,229,100,128,33,46,245,240,229,242,233,239,114,128,246,236,116,5,87,36,87,62,87,66,87,83,87,149,97,130,3,183,87,44,87,54,242,237,229,238,233,225,110,128,5,104,244,239,238,239,115,128,3,174,104,128,0,240,233,236,228,101,129,30,189,87,75,226,229,236,239,119,128,30,27,238,225,232,244,97,3,87,95,87,127,87,136,230,239,245,235,104,2,87,105,87,114,232,229,226,242,229,119,128,5,145,236,229,230,244,232,229,226,242,229,119,128,5,145,232,229,226,242,229,119,128,5,145,236,229,230,244,232,229,226,242,229,119,128,5,145,245,242,238,229,100,128,1,221,117,2,87,163,87,172,235,239,242,229,225,110,128,49,97,242,111,128,32,172,246,239,247,229,236,243,233,231,110,3,87,193,87,203,87,210,226,229,238,231,225,236,105,128,9,199,228,229,246,97,128,9,71,231,245,234,225,242,225,244,105,128,10,199,120,2,87,227,88,44,227,236,225,109,132,0,33,87,242,87,253,88,24,88,36,225,242,237,229,238,233,225,110,128,5,92,100,2,88,3,88,8,226,108,128,32,60,239,247,110,129,0,161,88,16,243,237,225,236,108,128,247,161,237,239,238,239,243,240,225,227,101,128,255,1,243,237,225,236,108,128,247,33,233,243,244,229,238,244,233,225,108,128,34,3,250,104,131,2,146,88,67,88,86,88,97,99,2,88,73,88,80,225,242,239,110,128,1,239,245,242,108,128,2,147,242,229,246,229,242,243,229,100,128,1,185,244,225,233,108,128,1,186,102,140,0,102,88,132,88,214,88,225,88,234,88,246,89,93,89,109,91,117,91,130,91,156,93,33,93,41,97,4,88,142,88,149,88,160,88,171,228,229,246,97,128,9,94,231,245,242,237,245,235,232,105,128,10,94,232,242,229,238,232,229,233,116,128,33,9,244,232,97,3,88,181,88,190,88,202,225,242,225,226,233,99,128,6,78,236,239,247,225,242,225,226,233,99,128,6,78,244,225,238,225,242,225,226,233,99,128,6,75,226,239,240,239,237,239,230,111,128,49,8,227,233,242,227,236,101,128,36,213,228,239,244,225,227,227,229,238,116,128,30,31,101,3,88,254,89,76,89,86,104,4,89,8,89,31,89,45,89,61,225,114,2,89,15,89,22,225,226,233,99,128,6,65,237,229,238,233,225,110,128,5,134,230,233,238,225,236,225,242,225,226,233,99,128,254,210,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,211,237,229,228,233,225,236,225,242,225,226,233,99,128,254,212,233,227,239,240,244,233,99,128,3,229,237,225,236,101,128,38,64,102,130,251,0,89,101,89,105,105,128,251,3,108,128,251,4,105,136,251,1,89,129,89,169,89,180,89,202,90,68,90,85,90,93,90,106,230,244,229,229,110,2,89,139,89,148,227,233,242,227,236,101,128,36,110,112,2,89,154,89,161,225,242,229,110,128,36,130,229,242,233,239,100,128,36,150,231,245,242,229,228,225,243,104,128,32,18,236,236,229,100,2,89,189,89,195,226,239,120,128,37,160,242,229,227,116,128,37,172,238,225,108,5,89,216,89,255,90,16,90,33,90,49,235,225,102,130,5,218,89,226,89,246,228,225,231,229,243,104,129,251,58,89,237,232,229,226,242,229,119,128,251,58,232,229,226,242,229,119,128,5,218,237,229,109,129,5,221,90,7,232,229,226,242,229,119,128,5,221,238,245,110,129,5,223,90,24,232,229,226,242,229,119,128,5,223,240,101,129,5,227,90,40,232,229,226,242,229,119,128,5,227,244,243,225,228,105,129,5,229,90,59,232,229,226,242,229,119,128,5,229,242,243,244,244,239,238,229,227,232,233,238,229,243,101,128,2,201,243,232,229,249,101,128,37,201,244,225,227,249,242,233,236,236,233,99,128,4,115,246,101,142,0,53,90,139,90,148,90,158,90,188,90,195,90,205,90,230,91,1,91,35,91,47,91,58,91,91,91,99,91,110,225,242,225,226,233,99,128,6,101,226,229,238,231,225,236,105,128,9,235,227,233,242,227,236,101,129,36,100,90,169,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,142,228,229,246,97,128,9,107,229,233,231,232,244,232,115,128,33,93,231,117,2,90,212,90,221,234,225,242,225,244,105,128,10,235,242,237,245,235,232,105,128,10,107,232,97,2,90,237,90,248,227,235,225,242,225,226,233,99,128,6,101,238,231,250,232,239,117,128,48,37,105,2,91,7,91,25,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,36,238,230,229,242,233,239,114,128,32,133,237,239,238,239,243,240,225,227,101,128,255,21,239,236,228,243,244,249,236,101,128,247,53,112,2,91,64,91,71,225,242,229,110,128,36,120,229,114,2,91,78,91,84,233,239,100,128,36,140,243,233,225,110,128,6,245,242,239,237,225,110,128,33,116,243,245,240,229,242,233,239,114,128,32,117,244,232,225,105,128,14,85,108,129,251,2,91,123,239,242,233,110,128,1,146,109,2,91,136,91,147,239,238,239,243,240,225,227,101,128,255,70,243,241,245,225,242,101,128,51,153,111,4,91,166,91,188,91,200,91,207,230,97,2,91,173,91,181,238,244,232,225,105,128,14,31,244,232,225,105,128,14,29,238,231,237,225,238,244,232,225,105,128,14,79,242,225,236,108,128,34,0,245,114,142,0,52,91,240,91,249,92,3,92,33,92,40,92,65,92,92,92,126,92,138,92,157,92,168,92,201,92,209,92,220,225,242,225,226,233,99,128,6,100,226,229,238,231,225,236,105,128,9,234,227,233,242,227,236,101,129,36,99,92,14,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,141,228,229,246,97,128,9,106,231,117,2,92,47,92,56,234,225,242,225,244,105,128,10,234,242,237,245,235,232,105,128,10,106,232,97,2,92,72,92,83,227,235,225,242,225,226,233,99,128,6,100,238,231,250,232,239,117,128,48,36,105,2,92,98,92,116,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,35,238,230,229,242,233,239,114,128,32,132,237,239,238,239,243,240,225,227,101,128,255,20,238,245,237,229,242,225,244,239,242,226,229,238,231,225,236,105,128,9,247,239,236,228,243,244,249,236,101,128,247,52,112,2,92,174,92,181,225,242,229,110,128,36,119,229,114,2,92,188,92,194,233,239,100,128,36,139,243,233,225,110,128,6,244,242,239,237,225,110,128,33,115,243,245,240,229,242,233,239,114,128,32,116,116,2,92,226,93,8,229,229,110,2,92,234,92,243,227,233,242,227,236,101,128,36,109,112,2,92,249,93,0,225,242,229,110,128,36,129,229,242,233,239,100,128,36,149,104,2,93,14,93,19,225,105,128,14,84,244,239,238,229,227,232,233,238,229,243,101,128,2,203,240,225,242,229,110,128,36,161,242,97,2,93,48,93,56,227,244,233,239,110,128,32,68,238,99,128,32,163,103,144,0,103,93,97,94,43,94,66,94,127,94,144,95,65,96,58,96,143,96,156,97,14,97,39,97,67,97,89,98,34,98,56,98,158,97,9,93,117,93,127,93,134,93,141,93,205,93,230,93,241,93,252,94,30,226,229,238,231,225,236,105,128,9,151,227,245,244,101,128,1,245,228,229,246,97,128,9,23,102,4,93,151,93,160,93,174,93,190,225,242,225,226,233,99,128,6,175,230,233,238,225,236,225,242,225,226,233,99,128,251,147,233,238,233,244,233,225,236,225,242,225,226,233,99,128,251,148,237,229,228,233,225,236,225,242,225,226,233,99,128,251,149,231,117,2,93,212,93,221,234,225,242,225,244,105,128,10,151,242,237,245,235,232,105,128,10,23,232,233,242,225,231,225,238,97,128,48,76,235,225,244,225,235,225,238,97,128,48,172,237,237,97,130,3,179,94,6,94,19,236,225,244,233,238,243,237,225,236,108,128,2,99,243,245,240,229,242,233,239,114,128,2,224,238,231,233,225,227,239,240,244,233,99,128,3,235,98,2,94,49,94,59,239,240,239,237,239,230,111,128,49,13,242,229,246,101,128,1,31,99,4,94,76,94,83,94,92,94,114,225,242,239,110,128,1,231,229,228,233,236,236,97,128,1,35,233,242,99,2,94,100,94,105,236,101,128,36,214,245,237,230,236,229,120,128,1,29,239,237,237,225,225,227,227,229,238,116,128,1,35,228,239,116,129,1,33,94,135,225,227,227,229,238,116,128,1,33,101,6,94,158,94,169,94,180,94,191,94,210,95,56,227,249,242,233,236,236,233,99,128,4,51,232,233,242,225,231,225,238,97,128,48,82,235,225,244,225,235,225,238,97,128,48,178,239,237,229,244,242,233,227,225,236,236,249,229,241,245,225,108,128,34,81,114,3,94,218,95,11,95,21,229,243,104,3,94,228,94,243,94,252,225,227,227,229,238,244,232,229,226,242,229,119,128,5,156,232,229,226,242,229,119,128,5,243,237,245,241,228,225,237,232,229,226,242,229,119,128,5,157,237,225,238,228,226,236,115,128,0,223,243,232,225,249,233,109,2,95,32,95,47,225,227,227,229,238,244,232,229,226,242,229,119,128,5,158,232,229,226,242,229,119,128,5,244,244,225,237,225,242,107,128,48,19,104,5,95,77,95,210,96,17,96,42,96,48,97,4,95,87,95,97,95,120,95,145,226,229,238,231,225,236,105,128,9,152,100,2,95,103,95,114,225,242,237,229,238,233,225,110,128,5,114,229,246,97,128,9,24,231,117,2,95,127,95,136,234,225,242,225,244,105,128,10,152,242,237,245,235,232,105,128,10,24,233,110,4,95,156,95,165,95,179,95,195,225,242,225,226,233,99,128,6,58,230,233,238,225,236,225,242,225,226,233,99,128,254,206,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,207,237,229,228,233,225,236,225,242,225,226,233,99,128,254,208,101,3,95,218,95,239,96,0,237,233,228,228,236,229,232,239,239,235,227,249,242,233,236,236,233,99,128,4,149,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,147,245,240,244,245,242,238,227,249,242,233,236,236,233,99,128,4,145,232,97,2,96,24,96,31,228,229,246,97,128,9,90,231,245,242,237,245,235,232,105,128,10,90,239,239,107,128,2,96,250,243,241,245,225,242,101,128,51,147,105,3,96,66,96,77,96,88,232,233,242,225,231,225,238,97,128,48,78,235,225,244,225,235,225,238,97,128,48,174,109,2,96,94,96,105,225,242,237,229,238,233,225,110,128,5,99,229,108,130,5,210,96,114,96,134,228,225,231,229,243,104,129,251,50,96,125,232,229,226,242,229,119,128,251,50,232,229,226,242,229,119,128,5,210,234,229,227,249,242,233,236,236,233,99,128,4,83,236,239,244,244,225,108,2,96,167,96,184,233,238,246,229,242,244,229,228,243,244,242,239,235,101,128,1,190,243,244,239,112,132,2,148,96,199,96,210,96,216,96,248,233,238,246,229,242,244,229,100,128,2,150,237,239,100,128,2,192,242,229,246,229,242,243,229,100,130,2,149,96,231,96,237,237,239,100,128,2,193,243,245,240,229,242,233,239,114,128,2,228,243,244,242,239,235,101,129,2,161,97,3,242,229,246,229,242,243,229,100,128,2,162,109,2,97,20,97,28,225,227,242,239,110,128,30,33,239,238,239,243,240,225,227,101,128,255,71,111,2,97,45,97,56,232,233,242,225,231,225,238,97,128,48,84,235,225,244,225,235,225,238,97,128,48,180,240,97,2,97,74,97,80,242,229,110,128,36,162,243,241,245,225,242,101,128,51,172,114,2,97,95,97,192,97,2,97,101,97,109,228,233,229,238,116,128,34,7,246,101,134,0,96,97,126,97,137,97,154,97,161,97,170,97,182,226,229,236,239,247,227,237,98,128,3,22,99,2,97,143,97,148,237,98,128,3,0,239,237,98,128,3,0,228,229,246,97,128,9,83,236,239,247,237,239,100,128,2,206,237,239,238,239,243,240,225,227,101,128,255,64,244,239,238,229,227,237,98,128,3,64,229,225,244,229,114,132,0,62,97,208,97,227,97,239,98,26,229,241,245,225,108,129,34,101,97,218,239,242,236,229,243,115,128,34,219,237,239,238,239,243,240,225,227,101,128,255,30,111,2,97,245,98,15,114,2,97,251,98,8,229,241,245,233,246,225,236,229,238,116,128,34,115,236,229,243,115,128,34,119,246,229,242,229,241,245,225,108,128,34,103,243,237,225,236,108,128,254,101,115,2,98,40,98,48,227,242,233,240,116,128,2,97,244,242,239,235,101,128,1,229,117,4,98,66,98,77,98,134,98,145,232,233,242,225,231,225,238,97,128,48,80,233,108,2,98,84,98,109,236,229,237,239,116,2,98,94,98,101,236,229,230,116,128,0,171,242,233,231,232,116,128,0,187,243,233,238,231,108,2,98,119,98,126,236,229,230,116,128,32,57,242,233,231,232,116,128,32,58,235,225,244,225,235,225,238,97,128,48,176,242,225,237,245,243,241,245,225,242,101,128,51,24,249,243,241,245,225,242,101,128,51,201,104,144,0,104,98,204,101,90,101,125,101,162,101,202,103,90,103,110,104,75,104,87,104,99,105,167,105,175,105,186,105,195,106,19,106,23,97,13,98,232,99,15,99,25,99,55,99,80,99,158,99,170,99,195,99,210,99,239,99,252,100,54,100,63,97,2,98,238,99,1,226,235,232,225,243,233,225,238,227,249,242,233,236,236,233,99,128,4,169,236,244,239,238,229,225,242,225,226,233,99,128,6,193,226,229,238,231,225,236,105,128,9,185,228,101,2,99,32,99,50,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,179,246,97,128,9,57,231,117,2,99,62,99,71,234,225,242,225,244,105,128,10,185,242,237,245,235,232,105,128,10,57,104,4,99,90,99,99,99,113,99,143,225,242,225,226,233,99,128,6,45,230,233,238,225,236,225,242,225,226,233,99,128,254,162,105,2,99,119,99,134,238,233,244,233,225,236,225,242,225,226,233,99,128,254,163,242,225,231,225,238,97,128,48,111,237,229,228,233,225,236,225,242,225,226,233,99,128,254,164,233,244,245,243,241,245,225,242,101,128,51,42,235,225,244,225,235,225,238,97,129,48,207,99,183,232,225,236,230,247,233,228,244,104,128,255,138,236,225,238,244,231,245,242,237,245,235,232,105,128,10,77,237,250,97,2,99,218,99,227,225,242,225,226,233,99,128,6,33,236,239,247,225,242,225,226,233,99,128,6,33,238,231,245,236,230,233,236,236,229,114,128,49,100,114,2,100,2,100,18,228,243,233,231,238,227,249,242,233,236,236,233,99,128,4,74,240,239,239,110,2,100,27,100,40,236,229,230,244,226,225,242,226,245,112,128,33,188,242,233,231,232,244,226,225,242,226,245,112,128,33,192,243,241,245,225,242,101,128,51,202,244,225,102,3,100,73,100,165,101,0,240,225,244,225,104,134,5,178,100,93,100,98,100,112,100,121,100,136,100,152,177,54,128,5,178,50,2,100,104,100,108,51,128,5,178,102,128,5,178,232,229,226,242,229,119,128,5,178,238,225,242,242,239,247,232,229,226,242,229,119,128,5,178,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,178,247,233,228,229,232,229,226,242,229,119,128,5,178,241,225,237,225,244,115,135,5,179,100,188,100,193,100,198,100,203,100,212,100,227,100,243,177,98,128,5,179,178,56,128,5,179,179,52,128,5,179,232,229,226,242,229,119,128,5,179,238,225,242,242,239,247,232,229,226,242,229,119,128,5,179,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,179,247,233,228,229,232,229,226,242,229,119,128,5,179,243,229,231,239,108,135,5,177,101,22,101,27,101,32,101,37,101,46,101,61,101,77,177,55,128,5,177,178,52,128,5,177,179,48,128,5,177,232,229,226,242,229,119,128,5,177,238,225,242,242,239,247,232,229,226,242,229,119,128,5,177,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,177,247,233,228,229,232,229,226,242,229,119,128,5,177,98,3,101,98,101,103,101,113,225,114,128,1,39,239,240,239,237,239,230,111,128,49,15,242,229,246,229,226,229,236,239,119,128,30,43,99,2,101,131,101,140,229,228,233,236,236,97,128,30,41,233,242,99,2,101,148,101,153,236,101,128,36,215,245,237,230,236,229,120,128,1,37,100,2,101,168,101,178,233,229,242,229,243,233,115,128,30,39,239,116,2,101,185,101,194,225,227,227,229,238,116,128,30,35,226,229,236,239,119,128,30,37,101,136,5,212,101,222,101,255,102,19,102,248,103,8,103,53,103,62,103,75,225,242,116,129,38,101,101,230,243,245,233,116,2,101,239,101,247,226,236,225,227,107,128,38,101,247,232,233,244,101,128,38,97,228,225,231,229,243,104,129,251,52,102,10,232,229,226,242,229,119,128,251,52,104,6,102,33,102,61,102,69,102,119,102,165,102,214,97,2,102,39,102,53,236,244,239,238,229,225,242,225,226,233,99,128,6,193,242,225,226,233,99,128,6,71,229,226,242,229,119,128,5,212,230,233,238,225,236,97,2,102,80,102,111,236,116,2,102,87,102,99,239,238,229,225,242,225,226,233,99])
.concat([128,251,167,244,247,239,225,242,225,226,233,99,128,254,234,242,225,226,233,99,128,254,234,232,225,237,250,225,225,226,239,246,101,2,102,134,102,148,230,233,238,225,236,225,242,225,226,233,99,128,251,165,233,243,239,236,225,244,229,228,225,242,225,226,233,99,128,251,164,105,2,102,171,102,205,238,233,244,233,225,236,97,2,102,183,102,197,236,244,239,238,229,225,242,225,226,233,99,128,251,168,242,225,226,233,99,128,254,235,242,225,231,225,238,97,128,48,120,237,229,228,233,225,236,97,2,102,226,102,240,236,244,239,238,229,225,242,225,226,233,99,128,251,169,242,225,226,233,99,128,254,236,233,243,229,233,229,242,225,243,241,245,225,242,101,128,51,123,107,2,103,14,103,38,225,244,225,235,225,238,97,129,48,216,103,26,232,225,236,230,247,233,228,244,104,128,255,141,245,244,225,225,242,245,243,241,245,225,242,101,128,51,54,238,231,232,239,239,107,128,2,103,242,245,244,245,243,241,245,225,242,101,128,51,57,116,129,5,215,103,81,232,229,226,242,229,119,128,5,215,232,239,239,107,129,2,102,103,99,243,245,240,229,242,233,239,114,128,2,177,105,4,103,120,103,205,103,216,103,241,229,245,104,4,103,132,103,167,103,182,103,191,97,2,103,138,103,153,227,233,242,227,236,229,235,239,242,229,225,110,128,50,123,240,225,242,229,238,235,239,242,229,225,110,128,50,27,227,233,242,227,236,229,235,239,242,229,225,110,128,50,109,235,239,242,229,225,110,128,49,78,240,225,242,229,238,235,239,242,229,225,110,128,50,13,232,233,242,225,231,225,238,97,128,48,114,235,225,244,225,235,225,238,97,129,48,210,103,229,232,225,236,230,247,233,228,244,104,128,255,139,242,233,113,134,5,180,104,3,104,8,104,22,104,31,104,46,104,62,177,52,128,5,180,50,2,104,14,104,18,49,128,5,180,100,128,5,180,232,229,226,242,229,119,128,5,180,238,225,242,242,239,247,232,229,226,242,229,119,128,5,180,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,180,247,233,228,229,232,229,226,242,229,119,128,5,180,236,233,238,229,226,229,236,239,119,128,30,150,237,239,238,239,243,240,225,227,101,128,255,72,111,9,104,119,104,130,104,154,104,179,105,11,105,24,105,110,105,150,105,161,225,242,237,229,238,233,225,110,128,5,112,232,105,2,104,137,104,145,240,244,232,225,105,128,14,43,242,225,231,225,238,97,128,48,123,235,225,244,225,235,225,238,97,129,48,219,104,167,232,225,236,230,247,233,228,244,104,128,255,142,236,225,109,135,5,185,104,199,104,204,104,209,104,214,104,223,104,238,104,254,177,57,128,5,185,178,54,128,5,185,179,50,128,5,185,232,229,226,242,229,119,128,5,185,238,225,242,242,239,247,232,229,226,242,229,119,128,5,185,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,185,247,233,228,229,232,229,226,242,229,119,128,5,185,238,239,235,232,245,235,244,232,225,105,128,14,46,111,2,105,30,105,100,107,4,105,40,105,52,105,58,105,80,225,226,239,246,229,227,239,237,98,128,3,9,227,237,98,128,3,9,240,225,236,225,244,225,236,233,250,229,228,226,229,236,239,247,227,237,98,128,3,33,242,229,244,242,239,230,236,229,248,226,229,236,239,247,227,237,98,128,3,34,238,243,241,245,225,242,101,128,51,66,114,2,105,116,105,143,105,2,105,122,105,131,227,239,240,244,233,99,128,3,233,250,239,238,244,225,236,226,225,114,128,32,21,238,227,237,98,128,3,27,244,243,240,242,233,238,231,115,128,38,104,245,243,101,128,35,2,240,225,242,229,110,128,36,163,243,245,240,229,242,233,239,114,128,2,176,244,245,242,238,229,100,128,2,101,117,4,105,205,105,216,105,229,105,254,232,233,242,225,231,225,238,97,128,48,117,233,233,244,239,243,241,245,225,242,101,128,51,51,235,225,244,225,235,225,238,97,129,48,213,105,242,232,225,236,230,247,233,228,244,104,128,255,140,238,231,225,242,245,237,236,225,245,116,129,2,221,106,13,227,237,98,128,3,11,118,128,1,149,249,240,232,229,110,132,0,45,106,39,106,50,106,62,106,85,233,238,230,229,242,233,239,114,128,246,229,237,239,238,239,243,240,225,227,101,128,255,13,115,2,106,68,106,75,237,225,236,108,128,254,99,245,240,229,242,233,239,114,128,246,230,244,247,111,128,32,16,105,149,0,105,106,137,106,160,106,194,106,241,110,123,110,243,111,24,111,51,111,213,111,217,111,255,112,21,112,105,113,14,113,89,113,97,113,110,113,197,113,254,114,26,114,70,225,99,2,106,144,106,150,245,244,101,128,0,237,249,242,233,236,236,233,99,128,4,79,98,3,106,168,106,177,106,187,229,238,231,225,236,105,128,9,135,239,240,239,237,239,230,111,128,49,39,242,229,246,101,128,1,45,99,3,106,202,106,209,106,231,225,242,239,110,128,1,208,233,242,99,2,106,217,106,222,236,101,128,36,216,245,237,230,236,229,120,128,0,238,249,242,233,236,236,233,99,128,4,86,100,4,106,251,107,5,110,80,110,113,226,236,231,242,225,246,101,128,2,9,101,2,107,11,110,75,239,231,242,225,240,104,7,107,32,107,46,107,59,109,244,110,19,110,32,110,44,229,225,242,244,232,227,233,242,227,236,101,128,50,143,230,233,242,229,227,233,242,227,236,101,128,50,139,233,99,14,107,90,107,106,107,205,108,3,108,69,108,98,108,114,108,171,108,220,108,232,109,3,109,70,109,208,109,237,225,236,236,233,225,238,227,229,240,225,242,229,110,128,50,63,99,4,107,116,107,127,107,141,107,148,225,236,236,240,225,242,229,110,128,50,58,229,238,244,242,229,227,233,242,227,236,101,128,50,165,236,239,243,101,128,48,6,111,3,107,156,107,171,107,191,237,237,97,129,48,1,107,164,236,229,230,116,128,255,100,238,231,242,225,244,245,236,225,244,233,239,238,240,225,242,229,110,128,50,55,242,242,229,227,244,227,233,242,227,236,101,128,50,163,101,3,107,213,107,225,107,242,225,242,244,232,240,225,242,229,110,128,50,47,238,244,229,242,240,242,233,243,229,240,225,242,229,110,128,50,61,248,227,229,236,236,229,238,244,227,233,242,227,236,101,128,50,157,102,2,108,9,108,24,229,243,244,233,246,225,236,240,225,242,229,110,128,50,64,105,2,108,30,108,59,238,225,238,227,233,225,108,2,108,42,108,51,227,233,242,227,236,101,128,50,150,240,225,242,229,110,128,50,54,242,229,240,225,242,229,110,128,50,43,104,2,108,75,108,86,225,246,229,240,225,242,229,110,128,50,50,233,231,232,227,233,242,227,236,101,128,50,164,233,244,229,242,225,244,233,239,238,237,225,242,107,128,48,5,108,3,108,122,108,148,108,160,225,226,239,114,2,108,131,108,140,227,233,242,227,236,101,128,50,152,240,225,242,229,110,128,50,56,229,230,244,227,233,242,227,236,101,128,50,167,239,247,227,233,242,227,236,101,128,50,166,109,2,108,177,108,209,101,2,108,183,108,198,228,233,227,233,238,229,227,233,242,227,236,101,128,50,169,244,225,236,240,225,242,229,110,128,50,46,239,239,238,240,225,242,229,110,128,50,42,238,225,237,229,240,225,242,229,110,128,50,52,112,2,108,238,108,246,229,242,233,239,100,128,48,2,242,233,238,244,227,233,242,227,236,101,128,50,158,114,2,109,9,109,57,101,3,109,17,109,28,109,43,225,227,232,240,225,242,229,110,128,50,67,240,242,229,243,229,238,244,240,225,242,229,110,128,50,57,243,239,245,242,227,229,240,225,242,229,110,128,50,62,233,231,232,244,227,233,242,227,236,101,128,50,168,115,5,109,82,109,111,109,125,109,150,109,178,101,2,109,88,109,101,227,242,229,244,227,233,242,227,236,101,128,50,153,236,230,240,225,242,229,110,128,50,66,239,227,233,229,244,249,240,225,242,229,110,128,50,51,112,2,109,131,109,137,225,227,101,128,48,0,229,227,233,225,236,240,225,242,229,110,128,50,53,116,2,109,156,109,167,239,227,235,240,225,242,229,110,128,50,49,245,228,249,240,225,242,229,110,128,50,59,117,2,109,184,109,193,238,240,225,242,229,110,128,50,48,240,229,242,246,233,243,229,240,225,242,229,110,128,50,60,119,2,109,214,109,226,225,244,229,242,240,225,242,229,110,128,50,44,239,239,228,240,225,242,229,110,128,50,45,250,229,242,111,128,48,7,109,2,109,250,110,7,229,244,225,236,227,233,242,227,236,101,128,50,142,239,239,238,227,233,242,227,236,101,128,50,138,238,225,237,229,227,233,242,227,236,101,128,50,148,243,245,238,227,233,242,227,236,101,128,50,144,119,2,110,50,110,63,225,244,229,242,227,233,242,227,236,101,128,50,140,239,239,228,227,233,242,227,236,101,128,50,141,246,97,128,9,7,233,229,242,229,243,233,115,130,0,239,110,94,110,102,225,227,245,244,101,128,30,47,227,249,242,233,236,236,233,99,128,4,229,239,244,226,229,236,239,119,128,30,203,101,3,110,131,110,147,110,158,226,242,229,246,229,227,249,242,233,236,236,233,99,128,4,215,227,249,242,233,236,236,233,99,128,4,53,245,238,103,4,110,170,110,205,110,220,110,229,97,2,110,176,110,191,227,233,242,227,236,229,235,239,242,229,225,110,128,50,117,240,225,242,229,238,235,239,242,229,225,110,128,50,21,227,233,242,227,236,229,235,239,242,229,225,110,128,50,103,235,239,242,229,225,110,128,49,71,240,225,242,229,238,235,239,242,229,225,110,128,50,7,103,2,110,249,111,0,242,225,246,101,128,0,236,117,2,111,6,111,15,234,225,242,225,244,105,128,10,135,242,237,245,235,232,105,128,10,7,104,2,111,30,111,40,233,242,225,231,225,238,97,128,48,68,239,239,235,225,226,239,246,101,128,30,201,105,8,111,69,111,79,111,90,111,97,111,122,111,138,111,153,111,169,226,229,238,231,225,236,105,128,9,136,227,249,242,233,236,236,233,99,128,4,56,228,229,246,97,128,9,8,231,117,2,111,104,111,113,234,225,242,225,244,105,128,10,136,242,237,245,235,232,105,128,10,8,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,64,238,246,229,242,244,229,228,226,242,229,246,101,128,2,11,243,232,239,242,244,227,249,242,233,236,236,233,99,128,4,57,246,239,247,229,236,243,233,231,110,3,111,185,111,195,111,202,226,229,238,231,225,236,105,128,9,192,228,229,246,97,128,9,64,231,245,234,225,242,225,244,105,128,10,192,106,128,1,51,107,2,111,223,111,247,225,244,225,235,225,238,97,129,48,164,111,235,232,225,236,230,247,233,228,244,104,128,255,114,239,242,229,225,110,128,49,99,108,2,112,5,112,10,228,101,128,2,220,245,249,232,229,226,242,229,119,128,5,172,109,2,112,27,112,94,97,3,112,35,112,55,112,80,227,242,239,110,129,1,43,112,44,227,249,242,233,236,236,233,99,128,4,227,231,229,239,242,225,240,240,242,239,248,233,237,225,244,229,236,249,229,241,245,225,108,128,34,83,244,242,225,231,245,242,237,245,235,232,105,128,10,63,239,238,239,243,240,225,227,101,128,255,73,110,5,112,117,112,127,112,136,112,148,112,232,227,242,229,237,229,238,116,128,34,6,230,233,238,233,244,121,128,34,30,233,225,242,237,229,238,233,225,110,128,5,107,116,2,112,154,112,222,101,2,112,160,112,211,231,242,225,108,131,34,43,112,173,112,191,112,196,98,2,112,179,112,187,239,244,244,239,109,128,35,33,116,128,35,33,229,120,128,248,245,116,2,112,202,112,207,239,112,128,35,32,112,128,35,32,242,243,229,227,244,233,239,110,128,34,41,233,243,241,245,225,242,101,128,51,5,118,3,112,240,112,249,113,2,226,245,236,236,229,116,128,37,216,227,233,242,227,236,101,128,37,217,243,237,233,236,229,230,225,227,101,128,38,59,111,3,113,22,113,33,113,41,227,249,242,233,236,236,233,99,128,4,81,231,239,238,229,107,128,1,47,244,97,131,3,185,113,52,113,73,113,81,228,233,229,242,229,243,233,115,129,3,202,113,65,244,239,238,239,115,128,3,144,236,225,244,233,110,128,2,105,244,239,238,239,115,128,3,175,240,225,242,229,110,128,36,164,242,233,231,245,242,237,245,235,232,105,128,10,114,115,4,113,120,113,165,113,179,113,187,237,225,236,108,2,113,129,113,140,232,233,242,225,231,225,238,97,128,48,67,235,225,244,225,235,225,238,97,129,48,163,113,153,232,225,236,230,247,233,228,244,104,128,255,104,243,232,225,242,226,229,238,231,225,236,105,128,9,250,244,242,239,235,101,128,2,104,245,240,229,242,233,239,114,128,246,237,116,2,113,203,113,237,229,242,225,244,233,239,110,2,113,215,113,226,232,233,242,225,231,225,238,97,128,48,157,235,225,244,225,235,225,238,97,128,48,253,233,236,228,101,129,1,41,113,246,226,229,236,239,119,128,30,45,117,2,114,4,114,15,226,239,240,239,237,239,230,111,128,49,41,227,249,242,233,236,236,233,99,128,4,78,246,239,247,229,236,243,233,231,110,3,114,42,114,52,114,59,226,229,238,231,225,236,105,128,9,191,228,229,246,97,128,9,63,231,245,234,225,242,225,244,105,128,10,191,250,232,233,244,243,97,2,114,81,114,92,227,249,242,233,236,236,233,99,128,4,117,228,226,236,231,242,225,246,229,227,249,242,233,236,236,233,99,128,4,119,106,138,0,106,114,135,114,198,114,209,115,3,115,19,115,132,115,201,115,206,115,218,115,226,97,4,114,145,114,156,114,166,114,173,225,242,237,229,238,233,225,110,128,5,113,226,229,238,231,225,236,105,128,9,156,228,229,246,97,128,9,28,231,117,2,114,180,114,189,234,225,242,225,244,105,128,10,156,242,237,245,235,232,105,128,10,28,226,239,240,239,237,239,230,111,128,49,16,99,3,114,217,114,224,114,246,225,242,239,110,128,1,240,233,242,99,2,114,232,114,237,236,101,128,36,217,245,237,230,236,229,120,128,1,53,242,239,243,243,229,228,244,225,233,108,128,2,157,228,239,244,236,229,243,243,243,244,242,239,235,101,128,2,95,101,3,115,27,115,38,115,103,227,249,242,233,236,236,233,99,128,4,88,229,109,4,115,49,115,58,115,72,115,88,225,242,225,226,233,99,128,6,44,230,233,238,225,236,225,242,225,226,233,99,128,254,158,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,159,237,229,228,233,225,236,225,242,225,226,233,99,128,254,160,104,2,115,109,115,118,225,242,225,226,233,99,128,6,152,230,233,238,225,236,225,242,225,226,233,99,128,251,139,104,2,115,138,115,188,97,3,115,146,115,156,115,163,226,229,238,231,225,236,105,128,9,157,228,229,246,97,128,9,29,231,117,2,115,170,115,179,234,225,242,225,244,105,128,10,157,242,237,245,235,232,105,128,10,29,229,232,225,242,237,229,238,233,225,110,128,5,123,233,115,128,48,4,237,239,238,239,243,240,225,227,101,128,255,74,240,225,242,229,110,128,36,165,243,245,240,229,242,233,239,114,128,2,178,107,146,0,107,116,21,118,110,118,121,118,183,118,194,119,28,119,42,120,150,121,90,121,103,121,129,121,178,122,60,122,82,122,95,122,118,122,160,122,170,97,12,116,47,116,79,116,101,116,131,116,245,117,14,117,44,117,69,117,175,117,189,118,56,118,85,98,2,116,53,116,70,225,243,232,235,233,242,227,249,242,233,236,236,233,99,128,4,161,229,238,231,225,236,105,128,9,149,99,2,116,85,116,91,245,244,101,128,30,49,249,242,233,236,236,233,99,128,4,58,228,101,2,116,108,116,126,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,155,246,97,128,9,21,102,135,5,219,116,149,116,158,116,178,116,192,116,201,116,217,116,232,225,242,225,226,233,99,128,6,67,228,225,231,229,243,104,129,251,59,116,169,232,229,226,242,229,119,128,251,59,230,233,238,225,236,225,242,225,226,233,99,128,254,218,232,229,226,242,229,119,128,5,219,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,219,237,229,228,233,225,236,225,242,225,226,233,99,128,254,220,242,225,230,229,232,229,226,242,229,119,128,251,77,231,117,2,116,252,117,5,234,225,242,225,244,105,128,10,149,242,237,245,235,232,105,128,10,21,104,2,117,20,117,30,233,242,225,231,225,238,97,128,48,75,239,239,235,227,249,242,233,236,236,233,99,128,4,196,235,225,244,225,235,225,238,97,129,48,171,117,57,232,225,236,230,247,233,228,244,104,128,255,118,112,2,117,75,117,96,240,97,129,3,186,117,82,243,249,237,226,239,236,231,242,229,229,107,128,3,240,249,229,239,245,110,3,117,108,117,122,117,156,237,233,229,245,237,235,239,242,229,225,110,128,49,113,112,2,117,128,117,143,232,233,229,245,240,232,235,239,242,229,225,110,128,49,132,233,229,245,240,235,239,242,229,225,110,128,49,120,243,243,225,238,231,240,233,229,245,240,235,239,242,229,225,110,128,49,121,242,239,242,233,233,243,241,245,225,242,101,128,51,13,115,5,117,201,117,245,118,4,118,12,118,40,232,233,228,225,225,245,244,111,2,117,214,117,223,225,242,225,226,233,99,128,6,64,238,239,243,233,228,229,226,229,225,242,233,238,231,225,242,225,226,233,99,128,6,64,237,225,236,236,235,225,244,225,235,225,238,97,128,48,245,241,245,225,242,101,128,51,132,242,97,2,118,19,118,28,225,242,225,226,233,99,128,6,80,244,225,238,225,242,225,226,233,99,128,6,77,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,159,244,225,232,233,242,225,240,242,239,236,239,238,231,237,225,242,235,232,225,236,230,247,233,228,244,104,128,255,112,246,229,242,244,233,227,225,236,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,157,226,239,240,239,237,239,230,111,128,49,14,99,4,118,131,118,153,118,162,118,170,97,2,118,137,118,147,236,243,241,245,225,242,101,128,51,137,242,239,110,128,1,233,229,228,233,236,236,97,128,1,55,233,242,227,236,101,128,36,218,239,237,237,225,225,227,227,229,238,116,128,1,55,228,239,244,226,229,236,239,119,128,30,51,101,4,118,204,118,231,119,0,119,12,104,2,118,210,118,221,225,242,237,229,238,233,225,110,128,5,132,233,242,225,231,225,238,97,128,48,81,235,225,244,225,235,225,238,97,129,48,177,118,244,232,225,236,230,247,233,228,244,104,128,255,121,238,225,242,237,229,238,233,225,110,128,5,111,243,237,225,236,236,235,225,244,225,235,225,238,97,128,48,246,231,242,229,229,238,236,225,238,228,233,99,128,1,56,104,6,119,56,119,185,119,196,119,221,120,52,120,140,97,5,119,68,119,78,119,89,119,96,119,121,226,229,238,231,225,236,105,128,9,150,227,249,242,233,236,236,233,99,128,4,69,228,229,246,97,128,9,22,231,117,2,119,103,119,112,234,225,242,225,244,105,128,10,150,242,237,245,235,232,105,128,10,22,104,4,119,131,119,140,119,154,119,170,225,242,225,226,233,99,128,6,46,230,233,238,225,236,225,242,225,226,233,99,128,254,166,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,167,237,229,228,233,225,236,225,242,225,226,233,99,128,254,168,229,233,227,239,240,244,233,99,128,3,231,232,97,2,119,203,119,210,228,229,246,97,128,9,89,231,245,242,237,245,235,232,105,128,10,89,233,229,245,235,104,4,119,235,120,14,120,29,120,38,97,2,119,241,120,0,227,233,242,227,236,229,235,239,242,229,225,110,128,50,120,240,225,242,229,238,235,239,242,229,225,110,128,50,24,227,233,242,227,236,229,235,239,242,229,225,110,128,50,106,235,239,242,229,225,110,128,49,75,240,225,242,229,238,235,239,242,229,225,110,128,50,10,111,4,120,62,120,111,120,121,120,126,235,104,4,120,73,120,82,120,91,120,101,225,233,244,232,225,105,128,14,2,239,238,244,232,225,105,128,14,5,245,225,244,244,232,225,105,128,14,3,247,225,233,244,232,225,105,128,14,4,237,245,244,244,232,225,105,128,14,91,239,107,128,1,153,242,225,235,232,225,238,231,244,232,225,105,128,14,6,250,243,241,245,225,242,101,128,51,145,105,4,120,160,120,171,120,196,120,245,232,233,242,225,231,225,238,97,128,48,77,235,225,244,225,235,225,238,97,129,48,173,120,184,232,225,236,230,247,233,228,244,104,128,255,119,242,111,3,120,205,120,220,120,236,231,245,242,225,237,245,243,241,245,225,242,101,128,51,21,237,229,229,244,239,242,245,243,241,245,225,242,101,128,51,22,243,241,245,225,242,101,128,51,20,249,229,239,107,5,121,4,121,39,121,54,121,63,121,77,97,2,121,10,121,25,227,233,242,227,236,229,235,239,242,229,225,110,128,50,110,240,225,242,229,238,235,239,242,229,225,110,128,50,14,227,233,242,227,236,229,235,239,242,229,225,110,128,50,96,235,239,242,229,225,110,128,49,49,240,225,242,229,238,235,239,242,229,225,110,128,50,0,243,233,239,243,235,239,242,229,225,110,128,49,51,234,229,227,249,242,233,236,236,233,99,128,4,92,108,2,121,109,121,120,233,238,229,226,229,236,239,119,128,30,53,243,241,245,225,242,101,128,51,152,109,3,121,137,121,151,121,162,227,245,226,229,228,243,241,245,225,242,101,128,51,166,239,238,239,243,240,225,227,101,128,255,75,243,241,245,225,242,229,228,243,241,245,225,242,101,128,51,162,111,5,121,190,121,216,121,254,122,10,122,24,104,2,121,196,121,206,233,242,225,231,225,238,97,128,48,83,237,243,241,245,225,242,101,128,51,192,235,97,2,121,223,121,231,233,244,232,225,105,128,14,1,244,225,235,225,238,97,129,48,179,121,242,232,225,236,230,247,233,228,244,104,128,255,122,239,240,239,243,241,245,225,242,101,128,51,30,240,240,225,227,249,242,233,236,236,233,99,128,4,129,114,2,122,30,122,50,229,225,238,243,244,225,238,228,225,242,228,243,249,237,226,239,108,128,50,127,239,238,233,243,227,237,98,128,3,67,240,97,2,122,67,122,73,242,229,110,128,36,166,243,241,245,225,242,101,128,51,170,243,233,227,249,242,233,236,236,233,99,128,4,111,116,2,122,101,122,110,243,241,245,225,242,101,128,51,207,245,242,238,229,100,128,2,158,117,2,122,124,122,135,232,233,242,225,231,225,238,97,128,48,79,235,225,244,225,235,225,238,97,129,48,175,122,148,232,225,236,230,247,233,228,244,104,128,255,120,246,243,241,245,225,242,101,128,51,184,247,243,241,245,225,242,101,128,51,190,108,146,0,108,122,220,124,247,125,20,125,86,125,124,126,20,126,29,126,45,126,69,126,87,126,205,126,246,127,125,127,133,127,166,127,175,127,183,127,245,97,7,122,236,122,246,122,253,123,4,123,29,123,45,124,235,226,229,238,231,225,236,105,128,9,178,227,245,244,101,128,1,58,228,229,246,97,128,9,50,231,117,2,123,11,123,20,234,225,242,225,244,105,128,10,178,242,237,245,235,232,105,128,10,50,235,235,232,225,238,231,249,225,239,244,232,225,105,128,14,69,109,10,123,67,124,6,124,23,124,61,124,75,124,94,124,110,124,130,124,150,124,173,97,2,123,73,123,254,236,229,102,4,123,85,123,99,123,191,123,208,230,233,238,225,236,225,242,225,226,233,99,128,254,252,232,225,237,250,97,2,123,109,123,150,225,226,239,246,101,2,123,119,123,133,230,233,238,225,236,225,242,225,226,233,99,128,254,248,233,243,239,236,225,244,229,228,225,242,225,226,233,99,128,254,247,226,229,236,239,119,2,123,160,123,174,230,233,238,225,236,225,242,225,226,233,99,128,254,250,233,243,239,236,225,244,229,228,225,242,225,226,233,99,128,254,249,233,243,239,236,225,244,229,228,225,242,225,226,233,99,128,254,251,237,225,228,228,225,225,226,239,246,101,2,123,223,123,237,230,233,238,225,236,225,242,225,226,233,99,128,254,246,233,243,239,236,225,244,229,228,225,242,225,226,233,99,128,254,245,242,225,226,233,99,128,6,68,226,228,97,129,3,187,124,14,243,244,242,239,235,101,128,1,155,229,100,130,5,220,124,32,124,52,228,225,231,229,243,104,129,251,60,124,43,232,229,226,242,229,119,128,251,60,232,229,226,242,229,119,128,5,220,230,233,238,225,236,225,242,225,226,233,99,128,254,222,232,225,232,233,238,233,244,233,225,236,225,242,225,226,233,99,128,252,202,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,223,234,229,229,237,233,238,233,244,233,225,236,225,242,225,226,233,99,128,252,201,235,232,225,232,233,238,233,244,233,225,236,225,242,225,226,233,99,128,252,203,236,225,237,232,229,232,233,243,239,236,225,244,229,228,225,242,225,226,233,99,128,253,242,237,101,2,124,180,124,193,228,233,225,236,225,242,225,226,233,99,128,254,224,229,109,2,124,200,124,219,232,225,232,233,238,233,244,233,225,236,225,242,225,226,233,99,128,253,136,233,238,233,244,233,225,236,225,242,225,226,233,99,128,252,204,242,231,229,227,233,242,227,236,101,128,37,239,98,3,124,255,125,4,125,10,225,114,128,1,154,229,236,116,128,2,108,239,240,239,237,239,230,111,128,49,12,99,4,125,30,125,37,125,46,125,73,225,242,239,110,128,1,62,229,228,233,236,236,97,128,1,60,233,242,99,2,125,54,125,59,236,101,128,36,219,245,237,230,236,229,248,226,229,236,239,119,128,30,61,239,237,237,225,225,227,227,229,238,116,128,1,60,228,239,116,130,1,64,125,96,125,105,225,227,227,229,238,116,128,1,64,226,229,236,239,119,129,30,55,125,115,237,225,227,242,239,110,128,30,57,101,3,125,132,125,170,126,15,230,116,2,125,139,125,155,225,238,231,236,229,225,226,239,246,229,227,237,98,128,3,26,244,225,227,235,226,229,236,239,247,227,237,98,128,3,24,243,115,132,0,60,125,183,125,205,125,217,126,7,229,241,245,225,108,129,34,100,125,193,239,242,231,242,229,225,244,229,114,128,34,218,237,239,238,239,243,240,225,227,101,128,255,28,111,2,125,223,125,252,114,2,125,229,125,242,229,241,245,233,246,225,236,229,238,116,128,34,114,231,242,229,225,244,229,114,128,34,118,246,229,242,229,241,245,225,108,128,34,102,243,237,225,236,108,128,254,100,250,104,128,2,110,230,226,236,239,227,107,128,37,140,232,239,239,235,242,229,244,242,239,230,236,229,120,128,2,109,105,2,126,51,126,56,242,97,128,32,164,247,238,225,242,237,229,238,233,225,110,128,5,108,106,129,1,201,126,75,229,227,249,242,233,236,236,233,99,128,4,89,108,132,246,192,126,99,126,123,126,134,126,143,97,2,126,105,126,112,228,229,246,97,128,9,51,231,245,234,225,242,225,244,105,128,10,179,233,238,229,226,229,236,239,119,128,30,59,236,225,228,229,246,97,128,9,52,246,239,227,225,236,233,99,3,126,157,126,167,126,174,226,229,238,231,225,236,105,128,9,225,228,229,246,97,128,9,97,246,239,247,229,236,243,233,231,110,2,126,188,126,198,226,229,238,231,225,236,105,128,9,227,228,229,246,97,128,9,99,109,3,126,213,126,226,126,237,233,228,228,236,229,244,233,236,228,101,128,2,107,239,238,239,243,240,225,227,101,128,255,76,243,241,245,225,242,101,128,51,208,111,6,127,4,127,16,127,58,127,69,127,75,127,117,227,232,245,236,225,244,232,225,105,128,14,44,231,233,227,225,108,3,127,28,127,34,127,53,225,238,100,128,34,39,238,239,116,129,0,172,127,42,242,229,246,229,242,243,229,100,128,35,16,239,114,128,34,40,236,233,238,231,244,232,225,105,128,14,37,238,231,115,128,1,127,247,236,233,238,101,2,127,85,127,108,99,2,127,91,127,103,229,238,244,229,242,236,233,238,101,128,254,78,237,98,128,3,50,228,225,243,232,229,100,128,254,77,250,229,238,231,101,128,37,202,240,225,242,229,110,128,36,167,115,3,127,141,127,148,127,156,236,225,243,104,128,1,66,241,245,225,242,101,128,33,19,245,240,229,242,233,239,114,128,246,238,244,243,232,225,228,101,128,37,145,245,244,232,225,105,128,14,38,246,239,227,225,236,233,99,3,127,197,127,207,127,214,226,229,238,231,225,236,105,128,9,140,228,229,246,97,128,9,12,246,239,247,229,236,243,233,231,110,2,127,228,127,238,226,229,238,231,225,236,105,128,9,226,228,229,246,97,128,9,98,248,243,241,245,225,242,101,128,51,211,109,144,0,109,128,35,130,144,130,169,130,196,130,221,132,18,132,40,133,95,133,125,133,174,134,25,134,47,134,72,134,81,135,108,135,136,97,12,128,61,128,71,128,135,128,142,128,167,128,215,130,51,130,76,130,81,130,95,130,107,130,112,226,229,238,231,225,236,105,128,9,174,99,2,128,77,128,129,242,239,110,132,0,175,128,91,128,102,128,108,128,117,226,229,236,239,247,227,237,98,128,3,49,227,237,98,128,3,4,236,239,247,237,239,100,128,2,205,237,239,238,239,243,240,225,227,101,128,255,227,245,244,101,128,30,63,228,229,246,97,128,9,46,231,117,2,128,149,128,158,234,225,242,225,244,105,128,10,174,242,237,245,235,232,105,128,10,46,104,2,128,173,128,205,225,240,225,235,104,2,128,183,128,192,232,229,226,242,229,119,128,5,164,236,229,230,244,232,229,226,242,229,119,128,5,164,233,242,225,231,225,238,97,128,48,126,105,5,128,227,129,40,129,103,129,133,130,39,227,232,225,244,244,225,247,97,3,128,242,129,17,129,24,236,239,119,2,128,250,129,5,236,229,230,244,244,232,225,105,128,248,149,242,233,231,232,244,244,232,225,105,128,248,148,244,232,225,105,128,14,75,245,240,240,229,242,236,229,230,244,244,232,225,105,128,248,147,229,107,3,129,49,129,80,129,87,236,239,119,2,129,57,129,68,236,229,230,244,244,232,225,105,128,248,140,242,233,231,232,244,244,232,225,105,128,248,139,244,232,225,105,128,14,72,245,240,240,229,242,236,229,230,244,244,232,225,105,128,248,138,232,225,238,225,235,225,116,2,129,115,129,126,236,229,230,244,244,232,225,105,128,248,132,244,232,225,105,128,14,49,116,3,129,141,129,169,129,232,225,233,235,232,117,2,129,151,129,162,236,229,230,244,244,232,225,105,128,248,137,244,232,225,105,128,14,71,232,111,3,129,178,129,209,129,216,236,239,119,2,129,186,129,197,236,229,230,244,244,232,225,105,128,248,143,242,233,231,232,244,244,232,225,105,128,248,142,244,232,225,105,128,14,73,245,240,240,229,242,236,229,230,244,244,232,225,105,128,248,141,242,105,3,129,241,130,16,130,23,236,239,119,2,129,249,130,4,236,229,230,244,244,232,225,105,128,248,146,242,233,231,232,244,244,232,225,105,128,248,145,244,232,225,105,128,14,74,245,240,240,229,242,236,229,230,244,244,232,225,105,128,248,144,249,225,237,239,235,244,232,225,105,128,14,70,235,225,244,225,235,225,238,97,129,48,222,130,64,232,225,236,230,247,233,228,244,104,128,255,143,236,101,128,38,66,238,243,249,239,238,243,241,245,225,242,101,128,51,71,241,225,230,232,229,226,242,229,119,128,5,190,242,115,128,38,66,115,2,130,118,130,136,239,242,225,227,233,242,227,236,229,232,229,226,242,229,119,128,5,175,241,245,225,242,101,128,51,131,98,2,130,150,130,160,239,240,239,237,239,230,111,128,49,7,243,241,245,225,242,101,128,51,212,99,2,130,175,130,183,233,242,227,236,101,128,36,220,245,226,229,228,243,241,245,225,242,101,128,51,165,228,239,116,2,130,204,130,213,225,227,227,229,238,116,128,30,65,226,229,236,239,119,128,30,67,101,7,130,237,131,108,131,119,131,134,131,159,131,196,131,208,101,2,130,243,131,95,109,4,130,253,131,6,131,20,131,36,225,242,225,226,233,99,128,6,69,230,233,238,225,236,225,242,225,226,233,99,128,254,226,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,227,237,101,2,131,43,131,56,228,233,225,236,225,242,225,226,233,99,128,254,228,229,237,105,2,131,64,131,79,238,233,244,233,225,236,225,242,225,226,233,99,128,252,209,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,72,244,239,242,245,243,241,245,225,242,101,128,51,77,232,233,242,225,231,225,238,97,128,48,129,233,250,233,229,242,225,243,241,245,225,242,101,128,51,126,235,225,244,225,235,225,238,97,129,48,225,131,147,232,225,236,230,247,233,228,244,104,128,255,146,109,130,5,222,131,167,131,187,228,225,231,229,243,104,129,251,62,131,178,232,229,226,242,229,119,128,251,62,232,229,226,242,229,119,128,5,222,238,225,242,237,229,238,233,225,110,128,5,116,242,235,232,97,3,131,219,131,228,132,5,232,229,226,242,229,119,128,5,165,235,229,230,245,236,97,2,131,239,131,248,232,229,226,242,229,119,128,5,166,236,229,230,244,232,229,226,242,229,119,128,5,166,236,229,230,244,232,229,226,242,229,119,128,5,165,104,2,132,24,132,30,239,239,107,128,2,113,250,243,241,245,225,242,101,128,51,146,105,6,132,54,132,91,132,228,132,239,133,8,133,65,228,100,2,132,61,132,86,236,229,228,239,244,235,225,244,225,235,225,238,225,232,225,236,230,247,233,228,244,104,128,255,101,239,116,128,0,183,229,245,109,5,132,105,132,140,132,155,132,164,132,215,97,2,132,111,132,126,227,233,242,227,236,229,235,239,242,229,225,110,128,50,114,240,225,242,229,238,235,239,242,229,225,110,128,50,18,227,233,242,227,236,229,235,239,242,229,225,110,128,50,100,235,239,242,229,225,110,128,49,65,112,2,132,170,132,202,97,2,132,176,132,190,238,243,233,239,243,235,239,242,229,225,110,128,49,112,242,229,238,235,239,242,229,225,110,128,50,4,233,229,245,240,235,239,242,229,225,110,128,49,110,243,233,239,243,235,239,242,229,225,110,128,49,111,232,233,242,225,231,225,238,97,128,48,127,235,225,244,225,235,225,238,97,129,48,223,132,252,232,225,236,230,247,233,228,244,104,128,255,144,238,117,2,133,15,133,60,115,132,34,18,133,27,133,38,133,47,133,53,226,229,236,239,247,227,237,98,128,3,32,227,233,242,227,236,101,128,34,150,237,239,100,128,2,215,240,236,245,115,128,34,19,244,101,128,32,50,242,105,2,133,72,133,86,226,225,225,242,245,243,241,245,225,242,101,128,51,74,243,241,245,225,242,101,128,51,73,108,2,133,101,133,116,239,238,231,236,229,231,244,245,242,238,229,100,128,2,112,243,241,245,225,242,101,128,51,150,109,3,133,133,133,147,133,158,227,245,226,229,228,243,241,245,225,242,101,128,51,163,239,238,239,243,240,225,227,101,128,255,77,243,241,245,225,242,229,228,243,241,245,225,242,101,128,51,159,111,5,133,186,133,212,133,237,133,247,134,0,104,2,133,192,133,202,233,242,225,231,225,238,97,128,48,130,237,243,241,245,225,242,101,128,51,193,235,225,244,225,235,225,238,97,129,48,226,133,225,232,225,236,230,247,233,228,244,104,128,255,147,236,243,241,245,225,242,101,128,51,214,237,225,244,232,225,105,128,14,33,246,229,242,243,243,241,245,225,242,101,129,51,167,134,15,228,243,241,245,225,242,101,128,51,168,240,97,2,134,32,134,38,242,229,110,128,36,168,243,241,245,225,242,101,128,51,171,115,2,134,53,134,62,243,241,245,225,242,101,128,51,179,245,240,229,242,233,239,114,128,246,239,244,245,242,238,229,100,128,2,111,117,141,0,181,134,111,134,115,134,125,134,149,134,159,134,181,134,192,134,217,134,240,134,250,135,24,135,88,135,98,49,128,0,181,225,243,241,245,225,242,101,128,51,130,227,104,2,134,132,134,142,231,242,229,225,244,229,114,128,34,107,236,229,243,115,128,34,106,230,243,241,245,225,242,101,128,51,140,103,2,134,165,134,172,242,229,229,107,128,3,188,243,241,245,225,242,101,128,51,141,232,233,242,225,231,225,238,97,128,48,128,235,225,244,225,235,225,238,97,129,48,224,134,205,232,225,236,230,247,233,228,244,104,128,255,145,108,2,134,223,134,232,243,241,245,225,242,101,128,51,149,244,233,240,236,121,128,0,215,237,243,241,245,225,242,101,128,51,155,238,225,104,2,135,2,135,11,232,229,226,242,229,119,128,5,163,236,229,230,244,232,229,226,242,229,119,128,5,163,115,2,135,30,135,79,233,99,3,135,39,135,56,135,67,225,236,238,239,244,101,129,38,106,135,50,228,226,108,128,38,107,230,236,225,244,243,233,231,110,128,38,109,243,232,225,242,240,243,233,231,110,128,38,111,243,241,245,225,242,101,128,51,178,246,243,241,245,225,242,101,128,51,182,247,243,241,245,225,242,101,128,51,188,118,2,135,114,135,127,237,229,231,225,243,241,245,225,242,101,128,51,185,243,241,245,225,242,101,128,51,183,119,2,135,142,135,155,237,229,231,225,243,241,245,225,242,101,128,51,191,243,241,245,225,242,101,128,51,189,110,150,0,110,135,212,136,90,136,114,136,180,136,205,137,7,137,17,137,84,137,127,139,161,139,179,139,204,139,235,140,5,140,70,142,52,142,60,142,85,142,93,143,61,143,71,143,81,97,8,135,230,135,250,136,1,136,8,136,33,136,44,136,69,136,81,98,2,135,236,135,245,229,238,231,225,236,105,128,9,168,236,97,128,34,7,227,245,244,101,128,1,68,228,229,246,97,128,9,40,231,117,2,136,15,136,24,234,225,242,225,244,105,128,10,168,242,237,245,235,232,105,128,10,40,232,233,242,225,231,225,238,97,128,48,106,235,225,244,225,235,225,238,97,129,48,202,136,57,232,225,236,230,247,233,228,244,104,128,255,133,240,239,243,244,242,239,240,232,101,128,1,73,243,241,245,225,242,101,128,51,129,98,2,136,96,136,106,239,240,239,237,239,230,111,128,49,11,243,240,225,227,101,128,0,160,99,4,136,124,136,131,136,140,136,167,225,242,239,110,128,1,72,229,228,233,236,236,97,128,1,70,233,242,99,2,136,148,136,153,236,101,128,36,221,245,237,230,236,229,248,226,229,236,239,119,128,30,75,239,237,237,225,225,227,227,229,238,116,128,1,70,228,239,116,2,136,188,136,197,225,227,227,229,238,116,128,30,69,226,229,236,239,119,128,30,71,101,3,136,213,136,224,136,249,232,233,242,225,231,225,238,97,128,48,109,235,225,244,225,235,225,238,97,129,48,205,136,237,232,225,236,230,247,233,228,244,104,128,255,136,247,243,232,229,241,229,236,243,233,231,110,128,32,170,230,243,241,245,225,242,101,128,51,139,103,2,137,23,137,73,97,3,137,31,137,41,137,48,226,229,238,231,225,236,105,128,9,153,228,229,246,97,128,9,25,231,117,2,137,55,137,64,234,225,242,225,244,105,128,10,153,242,237,245,235,232,105,128,10,25,239,238,231,245,244,232,225,105,128,14,7,104,2,137,90,137,100,233,242,225,231,225,238,97,128,48,147,239,239,107,2,137,108,137,115,236,229,230,116,128,2,114,242,229,244,242,239,230,236,229,120,128,2,115,105,4,137,137,138,50,138,61,138,119,229,245,110,7,137,155,137,190,137,222,137,236,137,245,138,22,138,35,97,2,137,161,137,176,227,233,242,227,236,229,235,239,242,229,225,110,128,50,111,240,225,242,229,238,235,239,242,229,225,110,128,50,15,227,105,2,137,197,137,209,229,245,227,235,239,242,229,225,110,128,49,53,242,227,236,229,235,239,242,229,225,110,128,50,97,232,233,229,245,232,235,239,242,229,225,110,128,49,54,235,239,242,229,225,110,128,49,52,240,97,2,137,252,138,10,238,243,233,239,243,235,239,242,229,225,110,128,49,104,242,229,238,235,239,242,229,225,110,128,50,1,243,233,239,243,235,239,242,229,225,110,128,49,103,244,233,235,229,245,244,235,239,242,229,225,110,128,49,102,232,233,242,225,231,225,238,97,128,48,107,107,2,138,67,138,91,225,244,225,235,225,238,97,129,48,203,138,79,232,225,236,230,247,233,228,244,104,128,255,134,232,225,232,233,116,2,138,101,138,112,236,229,230,244,244,232,225,105,128,248,153,244,232,225,105,128,14,77,238,101,141,0,57,138,150,138,159,138,169,138,199,138,206,138,231,139,2,139,36,139,48,139,59,139,92,139,100,139,111,225,242,225,226,233,99,128,6,105,226,229,238,231,225,236,105,128,9,239,227,233,242,227,236,101,129,36,104,138,180,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,146,228,229,246,97,128,9,111,231,117,2,138,213,138,222,234,225,242,225,244,105,128,10,239,242,237,245,235,232,105,128,10,111,232,97,2,138,238,138,249,227,235,225,242,225,226,233,99,128,6,105,238,231,250,232,239,117,128,48,41,105,2,139,8,139,26,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,40,238,230,229,242,233,239,114,128,32,137,237,239,238,239,243,240,225,227,101,128,255,25,239,236,228,243,244,249,236,101,128,247,57,112,2,139,65,139,72,225,242,229,110,128,36,124,229,114,2,139,79,139,85,233,239,100,128,36,144,243,233,225,110,128,6,249,242,239,237,225,110,128,33,120,243,245,240,229,242,233,239,114,128,32,121,116,2,139,117,139,155,229,229,110,2,139,125,139,134,227,233,242,227,236,101,128,36,114,112,2,139,140,139,147,225,242,229,110,128,36,134,229,242,233,239,100,128,36,154,232,225,105,128,14,89,106,129,1,204,139,167,229,227,249,242,233,236,236,233,99,128,4,90,235,225,244,225,235,225,238,97,129,48,243,139,192,232,225,236,230,247,233,228,244,104,128,255,157,108,2,139,210,139,224,229,231,242,233,231,232,244,236,239,238,103,128,1,158,233,238,229,226,229,236,239,119,128,30,73,109,2,139,241,139,252,239,238,239,243,240,225,227,101,128,255,78,243,241,245,225,242,101,128,51,154,110,2,140,11,140,61,97,3,140,19,140,29,140,36,226,229,238,231,225,236,105,128,9,163,228,229,246,97,128,9,35,231,117,2,140,43,140,52,234,225,242,225,244,105,128,10,163,242,237,245,235,232,105,128,10,35,238,225,228,229,246,97,128,9,41,111,6,140,84,140,95,140,120,140,161,141,113,142,40,232,233,242,225,231,225,238,97,128,48,110,235,225,244,225,235,225,238,97,129,48,206,140,108,232,225,236,230,247,233,228,244,104,128,255,137,110,3,140,128,140,144,140,153,226,242,229,225,235,233,238,231,243,240,225,227,101,128,0,160,229,238,244,232,225,105,128,14,19,245,244,232,225,105,128,14,25,239,110,7,140,178,140,187,140,201,140,235,140,251,141,36,141,95,225,242,225,226,233,99,128,6,70,230,233,238,225,236,225,242,225,226,233,99,128,254,230,231,232,245,238,238,97,2,140,212,140,221,225,242,225,226,233,99,128,6,186,230,233,238,225,236,225,242,225,226,233,99,128,251,159,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,231,234,229,229,237,105,2,141,5,141,20,238,233,244,233,225,236,225,242,225,226,233,99,128,252,210,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,75,237,101,2,141,43,141,56,228,233,225,236,225,242,225,226,233,99,128,254,232,229,237,105,2,141,64,141,79,238,233,244,233,225,236,225,242,225,226,233,99,128,252,213,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,78,238,239,239,238,230,233,238,225,236,225,242,225,226,233,99,128,252,141,116,7,141,129,141,140,141,169,141,204,141,216,141,236,142,6,227,239,238,244,225,233,238,115,128,34,12,101,2,141,146,141,162,236,229,237,229,238,116,129,34,9,141,157,239,102,128,34,9,241,245,225,108,128,34,96,231,242,229,225,244,229,114,129,34,111,141,181,238,239,114,2,141,189,141,197,229,241,245,225,108,128,34,113,236,229,243,115,128,34,121,233,228,229,238,244,233,227,225,108,128,34,98,236,229,243,115,129,34,110,141,225,238,239,242,229,241,245,225,108,128,34,112,112,2,141,242,141,252,225,242,225,236,236,229,108,128,34,38,242,229,227,229,228,229,115,128,34,128,243,117,3,142,15,142,22,142,31,226,243,229,116,128,34,132,227,227,229,229,228,115,128,34,129,240,229,242,243,229,116,128,34,133,247,225,242,237,229,238,233,225,110,128,5,118,240,225,242,229,110,128,36,169,115,2,142,66,142,75,243,241,245,225,242,101,128,51,177,245,240,229,242,233,239,114,128,32,127,244,233,236,228,101,128,0,241,117,132,3])
.concat([189,142,105,142,116,142,197,143,24,232,233,242,225,231,225,238,97,128,48,108,107,2,142,122,142,146,225,244,225,235,225,238,97,129,48,204,142,134,232,225,236,230,247,233,228,244,104,128,255,135,244,97,3,142,155,142,165,142,172,226,229,238,231,225,236,105,128,9,188,228,229,246,97,128,9,60,231,117,2,142,179,142,188,234,225,242,225,244,105,128,10,188,242,237,245,235,232,105,128,10,60,109,2,142,203,142,237,226,229,242,243,233,231,110,130,0,35,142,217,142,229,237,239,238,239,243,240,225,227,101,128,255,3,243,237,225,236,108,128,254,95,229,114,2,142,244,143,20,225,236,243,233,231,110,2,142,255,143,7,231,242,229,229,107,128,3,116,236,239,247,229,242,231,242,229,229,107,128,3,117,111,128,33,22,110,130,5,224,143,32,143,52,228,225,231,229,243,104,129,251,64,143,43,232,229,226,242,229,119,128,251,64,232,229,226,242,229,119,128,5,224,246,243,241,245,225,242,101,128,51,181,247,243,241,245,225,242,101,128,51,187,249,97,3,143,90,143,100,143,107,226,229,238,231,225,236,105,128,9,158,228,229,246,97,128,9,30,231,117,2,143,114,143,123,234,225,242,225,244,105,128,10,158,242,237,245,235,232,105,128,10,30,111,147,0,111,143,174,143,196,144,18,144,188,145,4,145,19,145,59,145,182,145,203,145,241,145,252,146,174,148,8,148,72,148,105,148,151,149,24,149,71,149,83,97,2,143,180,143,187,227,245,244,101,128,0,243,238,231,244,232,225,105,128,14,45,98,4,143,206,143,248,144,1,144,11,225,242,242,229,100,130,2,117,143,218,143,229,227,249,242,233,236,236,233,99,128,4,233,228,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,235,229,238,231,225,236,105,128,9,147,239,240,239,237,239,230,111,128,49,27,242,229,246,101,128,1,79,99,3,144,26,144,99,144,178,97,2,144,32,144,93,238,228,242,97,3,144,43,144,50,144,61,228,229,246,97,128,9,17,231,245,234,225,242,225,244,105,128,10,145,246,239,247,229,236,243,233,231,110,2,144,75,144,82,228,229,246,97,128,9,73,231,245,234,225,242,225,244,105,128,10,201,242,239,110,128,1,210,233,242,99,2,144,107,144,112,236,101,128,36,222,245,237,230,236,229,120,133,0,244,144,131,144,139,144,150,144,158,144,170,225,227,245,244,101,128,30,209,228,239,244,226,229,236,239,119,128,30,217,231,242,225,246,101,128,30,211,232,239,239,235,225,226,239,246,101,128,30,213,244,233,236,228,101,128,30,215,249,242,233,236,236,233,99,128,4,62,100,4,144,198,144,221,144,227,144,250,226,108,2,144,205,144,213,225,227,245,244,101,128,1,81,231,242,225,246,101,128,2,13,229,246,97,128,9,19,233,229,242,229,243,233,115,129,0,246,144,239,227,249,242,233,236,236,233,99,128,4,231,239,244,226,229,236,239,119,128,30,205,101,129,1,83,145,10,235,239,242,229,225,110,128,49,90,103,3,145,27,145,42,145,49,239,238,229,107,129,2,219,145,36,227,237,98,128,3,40,242,225,246,101,128,0,242,245,234,225,242,225,244,105,128,10,147,104,4,145,69,145,80,145,90,145,168,225,242,237,229,238,233,225,110,128,5,133,233,242,225,231,225,238,97,128,48,74,111,2,145,96,145,106,239,235,225,226,239,246,101,128,30,207,242,110,133,1,161,145,121,145,129,145,140,145,148,145,160,225,227,245,244,101,128,30,219,228,239,244,226,229,236,239,119,128,30,227,231,242,225,246,101,128,30,221,232,239,239,235,225,226,239,246,101,128,30,223,244,233,236,228,101,128,30,225,245,238,231,225,242,245,237,236,225,245,116,128,1,81,105,129,1,163,145,188,238,246,229,242,244,229,228,226,242,229,246,101,128,2,15,107,2,145,209,145,233,225,244,225,235,225,238,97,129,48,170,145,221,232,225,236,230,247,233,228,244,104,128,255,117,239,242,229,225,110,128,49,87,236,229,232,229,226,242,229,119,128,5,171,109,6,146,10,146,38,146,45,146,134,146,145,146,163,225,227,242,239,110,130,1,77,146,22,146,30,225,227,245,244,101,128,30,83,231,242,225,246,101,128,30,81,228,229,246,97,128,9,80,229,231,97,133,3,201,146,61,146,65,146,76,146,90,146,106,49,128,3,214,227,249,242,233,236,236,233,99,128,4,97,236,225,244,233,238,227,236,239,243,229,100,128,2,119,242,239,245,238,228,227,249,242,233,236,236,233,99,128,4,123,116,2,146,112,146,127,233,244,236,239,227,249,242,233,236,236,233,99,128,4,125,239,238,239,115,128,3,206,231,245,234,225,242,225,244,105,128,10,208,233,227,242,239,110,129,3,191,146,155,244,239,238,239,115,128,3,204,239,238,239,243,240,225,227,101,128,255,79,238,101,145,0,49,146,213,146,222,146,232,147,6,147,31,147,40,147,49,147,74,147,108,147,142,147,154,147,173,147,184,147,217,147,227,147,235,147,246,225,242,225,226,233,99,128,6,97,226,229,238,231,225,236,105,128,9,231,227,233,242,227,236,101,129,36,96,146,243,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,138,100,2,147,12,147,18,229,246,97,128,9,103,239,244,229,238,236,229,225,228,229,114,128,32,36,229,233,231,232,244,104,128,33,91,230,233,244,244,229,100,128,246,220,231,117,2,147,56,147,65,234,225,242,225,244,105,128,10,231,242,237,245,235,232,105,128,10,103,232,97,3,147,83,147,94,147,99,227,235,225,242,225,226,233,99,128,6,97,236,102,128,0,189,238,231,250,232,239,117,128,48,33,105,2,147,114,147,132,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,32,238,230,229,242,233,239,114,128,32,129,237,239,238,239,243,240,225,227,101,128,255,17,238,245,237,229,242,225,244,239,242,226,229,238,231,225,236,105,128,9,244,239,236,228,243,244,249,236,101,128,247,49,112,2,147,190,147,197,225,242,229,110,128,36,116,229,114,2,147,204,147,210,233,239,100,128,36,136,243,233,225,110,128,6,241,241,245,225,242,244,229,114,128,0,188,242,239,237,225,110,128,33,112,243,245,240,229,242,233,239,114,128,0,185,244,104,2,147,253,148,2,225,105,128,14,81,233,242,100,128,33,83,111,3,148,16,148,50,148,66,103,2,148,22,148,40,239,238,229,107,129,1,235,148,31,237,225,227,242,239,110,128,1,237,245,242,237,245,235,232,105,128,10,19,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,75,240,229,110,128,2,84,112,3,148,80,148,87,148,98,225,242,229,110,128,36,170,229,238,226,245,236,236,229,116,128,37,230,244,233,239,110,128,35,37,114,2,148,111,148,140,100,2,148,117,148,128,230,229,237,233,238,233,238,101,128,0,170,237,225,243,227,245,236,233,238,101,128,0,186,244,232,239,231,239,238,225,108,128,34,31,115,5,148,163,148,195,148,212,149,1,149,14,232,239,242,116,2,148,172,148,179,228,229,246,97,128,9,18,246,239,247,229,236,243,233,231,238,228,229,246,97,128,9,74,236,225,243,104,129,0,248,148,204,225,227,245,244,101,128,1,255,237,225,236,108,2,148,221,148,232,232,233,242,225,231,225,238,97,128,48,73,235,225,244,225,235,225,238,97,129,48,169,148,245,232,225,236,230,247,233,228,244,104,128,255,107,244,242,239,235,229,225,227,245,244,101,128,1,255,245,240,229,242,233,239,114,128,246,240,116,2,149,30,149,41,227,249,242,233,236,236,233,99,128,4,127,233,236,228,101,130,0,245,149,52,149,60,225,227,245,244,101,128,30,77,228,233,229,242,229,243,233,115,128,30,79,245,226,239,240,239,237,239,230,111,128,49,33,118,2,149,89,149,170,229,114,2,149,96,149,162,236,233,238,101,131,32,62,149,109,149,132,149,155,99,2,149,115,149,127,229,238,244,229,242,236,233,238,101,128,254,74,237,98,128,3,5,100,2,149,138,149,146,225,243,232,229,100,128,254,73,226,236,247,225,246,121,128,254,76,247,225,246,121,128,254,75,243,227,239,242,101,128,0,175,239,247,229,236,243,233,231,110,3,149,185,149,195,149,202,226,229,238,231,225,236,105,128,9,203,228,229,246,97,128,9,75,231,245,234,225,242,225,244,105,128,10,203,112,145,0,112,149,251,152,123,152,134,152,143,152,155,154,80,154,90,155,82,156,101,156,191,156,217,157,92,157,100,158,2,158,60,158,88,158,98,97,14,150,25,150,57,150,67,150,74,150,81,150,129,150,140,150,154,150,165,150,212,150,226,151,238,152,21,152,111,97,2,150,31,150,43,237,240,243,243,241,245,225,242,101,128,51,128,243,229,238,244,239,243,241,245,225,242,101,128,51,43,226,229,238,231,225,236,105,128,9,170,227,245,244,101,128,30,85,228,229,246,97,128,9,42,103,2,150,87,150,105,101,2,150,93,150,100,228,239,247,110,128,33,223,245,112,128,33,222,117,2,150,111,150,120,234,225,242,225,244,105,128,10,170,242,237,245,235,232,105,128,10,42,232,233,242,225,231,225,238,97,128,48,113,233,249,225,238,238,239,233,244,232,225,105,128,14,47,235,225,244,225,235,225,238,97,128,48,209,108,2,150,171,150,196,225,244,225,236,233,250,225,244,233,239,238,227,249,242,233,236,236,233,227,227,237,98,128,4,132,239,227,232,235,225,227,249,242,233,236,236,233,99,128,4,192,238,243,233,239,243,235,239,242,229,225,110,128,49,127,114,3,150,234,150,255,151,227,97,2,150,240,150,248,231,242,225,240,104,128,0,182,236,236,229,108,128,34,37,229,110,2,151,6,151,116,236,229,230,116,136,0,40,151,29,151,44,151,49,151,54,151,65,151,77,151,100,151,105,225,236,244,239,238,229,225,242,225,226,233,99,128,253,62,226,116,128,248,237,229,120,128,248,236,233,238,230,229,242,233,239,114,128,32,141,237,239,238,239,243,240,225,227,101,128,255,8,115,2,151,83,151,90,237,225,236,108,128,254,89,245,240,229,242,233,239,114,128,32,125,244,112,128,248,235,246,229,242,244,233,227,225,108,128,254,53,242,233,231,232,116,136,0,41,151,140,151,155,151,160,151,165,151,176,151,188,151,211,151,216,225,236,244,239,238,229,225,242,225,226,233,99,128,253,63,226,116,128,248,248,229,120,128,248,247,233,238,230,229,242,233,239,114,128,32,142,237,239,238,239,243,240,225,227,101,128,255,9,115,2,151,194,151,201,237,225,236,108,128,254,90,245,240,229,242,233,239,114,128,32,126,244,112,128,248,246,246,229,242,244,233,227,225,108,128,254,54,244,233,225,236,228,233,230,102,128,34,2,115,3,151,246,152,1,152,13,229,241,232,229,226,242,229,119,128,5,192,232,244,225,232,229,226,242,229,119,128,5,153,241,245,225,242,101,128,51,169,244,225,104,134,5,183,152,39,152,53,152,58,152,67,152,82,152,98,49,2,152,45,152,49,49,128,5,183,100,128,5,183,178,97,128,5,183,232,229,226,242,229,119,128,5,183,238,225,242,242,239,247,232,229,226,242,229,119,128,5,183,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,183,247,233,228,229,232,229,226,242,229,119,128,5,183,250,229,242,232,229,226,242,229,119,128,5,161,226,239,240,239,237,239,230,111,128,49,6,227,233,242,227,236,101,128,36,223,228,239,244,225,227,227,229,238,116,128,30,87,101,137,5,228,152,177,152,188,152,208,152,220,152,240,153,86,153,97,153,118,154,73,227,249,242,233,236,236,233,99,128,4,63,228,225,231,229,243,104,129,251,68,152,199,232,229,226,242,229,119,128,251,68,229,250,233,243,241,245,225,242,101,128,51,59,230,233,238,225,236,228,225,231,229,243,232,232,229,226,242,229,119,128,251,67,104,5,152,252,153,19,153,27,153,41,153,71,225,114,2,153,3,153,10,225,226,233,99,128,6,126,237,229,238,233,225,110,128,5,122,229,226,242,229,119,128,5,228,230,233,238,225,236,225,242,225,226,233,99,128,251,87,105,2,153,47,153,62,238,233,244,233,225,236,225,242,225,226,233,99,128,251,88,242,225,231,225,238,97,128,48,122,237,229,228,233,225,236,225,242,225,226,233,99,128,251,89,235,225,244,225,235,225,238,97,128,48,218,237,233,228,228,236,229,232,239,239,235,227,249,242,233,236,236,233,99,128,4,167,114,5,153,130,153,142,153,184,154,49,154,62,225,230,229,232,229,226,242,229,119,128,251,78,227,229,238,116,131,0,37,153,155,153,164,153,176,225,242,225,226,233,99,128,6,106,237,239,238,239,243,240,225,227,101,128,255,5,243,237,225,236,108,128,254,106,105,2,153,190,154,31,239,100,134,0,46,153,207,153,218,153,229,153,241,153,252,154,8,225,242,237,229,238,233,225,110,128,5,137,227,229,238,244,229,242,229,100,128,0,183,232,225,236,230,247,233,228,244,104,128,255,97,233,238,230,229,242,233,239,114,128,246,231,237,239,238,239,243,240,225,227,101,128,255,14,115,2,154,14,154,21,237,225,236,108,128,254,82,245,240,229,242,233,239,114,128,246,232,243,240,239,237,229,238,233,231,242,229,229,235,227,237,98,128,3,66,240,229,238,228,233,227,245,236,225,114,128,34,165,244,232,239,245,243,225,238,100,128,32,48,243,229,244,97,128,32,167,230,243,241,245,225,242,101,128,51,138,104,3,154,98,154,148,155,29,97,3,154,106,154,116,154,123,226,229,238,231,225,236,105,128,9,171,228,229,246,97,128,9,43,231,117,2,154,130,154,139,234,225,242,225,244,105,128,10,171,242,237,245,235,232,105,128,10,43,105,133,3,198,154,162,154,166,154,252,155,4,155,15,49,128,3,213,229,245,240,104,4,154,179,154,214,154,229,154,238,97,2,154,185,154,200,227,233,242,227,236,229,235,239,242,229,225,110,128,50,122,240,225,242,229,238,235,239,242,229,225,110,128,50,26,227,233,242,227,236,229,235,239,242,229,225,110,128,50,108,235,239,242,229,225,110,128,49,77,240,225,242,229,238,235,239,242,229,225,110,128,50,12,236,225,244,233,110,128,2,120,238,244,232,245,244,232,225,105,128,14,58,243,249,237,226,239,236,231,242,229,229,107,128,3,213,111,3,155,37,155,42,155,68,239,107,128,1,165,240,104,2,155,49,155,58,225,238,244,232,225,105,128,14,30,245,238,231,244,232,225,105,128,14,28,243,225,237,240,232,225,239,244,232,225,105,128,14,32,105,133,3,192,155,96,156,52,156,63,156,74,156,88,229,245,112,6,155,112,155,147,155,179,155,207,155,221,156,17,97,2,155,118,155,133,227,233,242,227,236,229,235,239,242,229,225,110,128,50,115,240,225,242,229,238,235,239,242,229,225,110,128,50,19,227,105,2,155,154,155,166,229,245,227,235,239,242,229,225,110,128,49,118,242,227,236,229,235,239,242,229,225,110,128,50,101,107,2,155,185,155,199,233,249,229,239,235,235,239,242,229,225,110,128,49,114,239,242,229,225,110,128,49,66,240,225,242,229,238,235,239,242,229,225,110,128,50,5,243,233,239,115,2,155,230,156,2,107,2,155,236,155,250,233,249,229,239,235,235,239,242,229,225,110,128,49,116,239,242,229,225,110,128,49,68,244,233,235,229,245,244,235,239,242,229,225,110,128,49,117,116,2,156,23,156,38,232,233,229,245,244,232,235,239,242,229,225,110,128,49,119,233,235,229,245,244,235,239,242,229,225,110,128,49,115,232,233,242,225,231,225,238,97,128,48,116,235,225,244,225,235,225,238,97,128,48,212,243,249,237,226,239,236,231,242,229,229,107,128,3,214,247,242,225,242,237,229,238,233,225,110,128,5,131,236,245,115,132,0,43,156,115,156,126,156,135,156,168,226,229,236,239,247,227,237,98,128,3,31,227,233,242,227,236,101,128,34,149,109,2,156,141,156,148,233,238,245,115,128,0,177,111,2,156,154,156,158,100,128,2,214,238,239,243,240,225,227,101,128,255,11,115,2,156,174,156,181,237,225,236,108,128,254,98,245,240,229,242,233,239,114,128,32,122,109,2,156,197,156,208,239,238,239,243,240,225,227,101,128,255,80,243,241,245,225,242,101,128,51,216,111,5,156,229,156,240,157,51,157,62,157,72,232,233,242,225,231,225,238,97,128,48,125,233,238,244,233,238,231,233,238,228,229,120,4,157,4,157,16,157,28,157,41,228,239,247,238,247,232,233,244,101,128,38,31,236,229,230,244,247,232,233,244,101,128,38,28,242,233,231,232,244,247,232,233,244,101,128,38,30,245,240,247,232,233,244,101,128,38,29,235,225,244,225,235,225,238,97,128,48,221,240,236,225,244,232,225,105,128,14,27,243,244,225,236,237,225,242,107,129,48,18,157,85,230,225,227,101,128,48,32,240,225,242,229,110,128,36,171,114,3,157,108,157,134,157,159,101,2,157,114,157,122,227,229,228,229,115,128,34,122,243,227,242,233,240,244,233,239,110,128,33,30,233,237,101,2,157,142,157,148,237,239,100,128,2,185,242,229,246,229,242,243,229,100,128,32,53,111,4,157,169,157,176,157,186,157,199,228,245,227,116,128,34,15,234,229,227,244,233,246,101,128,35,5,236,239,238,231,229,228,235,225,238,97,128,48,252,112,2,157,205,157,242,101,2,157,211,157,218,236,236,239,114,128,35,24,242,243,117,2,157,226,157,233,226,243,229,116,128,34,130,240,229,242,243,229,116,128,34,131,239,242,244,233,239,110,129,34,55,157,253,225,108,128,34,29,115,2,158,8,158,51,105,130,3,200,158,16,158,27,227,249,242,233,236,236,233,99,128,4,113,236,233,240,238,229,245,237,225,244,225,227,249,242,233,236,236,233,227,227,237,98,128,4,134,243,241,245,225,242,101,128,51,176,117,2,158,66,158,77,232,233,242,225,231,225,238,97,128,48,119,235,225,244,225,235,225,238,97,128,48,215,246,243,241,245,225,242,101,128,51,180,247,243,241,245,225,242,101,128,51,186,113,136,0,113,158,128,159,177,159,188,159,197,159,204,159,216,159,254,160,6,97,4,158,138,158,161,158,225,159,160,100,2,158,144,158,150,229,246,97,128,9,88,237,225,232,229,226,242,229,119,128,5,168,102,4,158,171,158,180,158,194,158,210,225,242,225,226,233,99,128,6,66,230,233,238,225,236,225,242,225,226,233,99,128,254,214,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,215,237,229,228,233,225,236,225,242,225,226,233,99,128,254,216,237,225,244,115,136,5,184,158,248,159,12,159,26,159,31,159,36,159,45,159,60,159,147,49,3,159,0,159,4,159,8,48,128,5,184,97,128,5,184,99,128,5,184,50,2,159,18,159,22,55,128,5,184,57,128,5,184,179,51,128,5,184,228,101,128,5,184,232,229,226,242,229,119,128,5,184,238,225,242,242,239,247,232,229,226,242,229,119,128,5,184,113,2,159,66,159,132,225,244,225,110,4,159,79,159,88,159,103,159,119,232,229,226,242,229,119,128,5,184,238,225,242,242,239,247,232,229,226,242,229,119,128,5,184,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,184,247,233,228,229,232,229,226,242,229,119,128,5,184,245,225,242,244,229,242,232,229,226,242,229,119,128,5,184,247,233,228,229,232,229,226,242,229,119,128,5,184,242,238,229,249,240,225,242,225,232,229,226,242,229,119,128,5,159,226,239,240,239,237,239,230,111,128,49,17,227,233,242,227,236,101,128,36,224,232,239,239,107,128,2,160,237,239,238,239,243,240,225,227,101,128,255,81,239,102,130,5,231,159,225,159,245,228,225,231,229,243,104,129,251,71,159,236,232,229,226,242,229,119,128,251,71,232,229,226,242,229,119,128,5,231,240,225,242,229,110,128,36,172,117,4,160,16,160,28,160,117,160,204,225,242,244,229,242,238,239,244,101,128,38,105,226,245,244,115,135,5,187,160,49,160,54,160,59,160,64,160,73,160,88,160,104,177,56,128,5,187,178,53,128,5,187,179,49,128,5,187,232,229,226,242,229,119,128,5,187,238,225,242,242,239,247,232,229,226,242,229,119,128,5,187,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,187,247,233,228,229,232,229,226,242,229,119,128,5,187,229,243,244,233,239,110,133,0,63,160,136,160,159,160,176,160,184,160,196,225,114,2,160,143,160,150,225,226,233,99,128,6,31,237,229,238,233,225,110,128,5,94,228,239,247,110,129,0,191,160,168,243,237,225,236,108,128,247,191,231,242,229,229,107,128,3,126,237,239,238,239,243,240,225,227,101,128,255,31,243,237,225,236,108,128,247,63,239,244,101,4,160,216,161,31,161,51,161,80,228,226,108,133,0,34,160,232,160,239,160,246,161,2,161,23,226,225,243,101,128,32,30,236,229,230,116,128,32,28,237,239,238,239,243,240,225,227,101,128,255,2,240,242,233,237,101,129,48,30,161,12,242,229,246,229,242,243,229,100,128,48,29,242,233,231,232,116,128,32,29,236,229,230,116,129,32,24,161,40,242,229,246,229,242,243,229,100,128,32,27,114,2,161,57,161,67,229,246,229,242,243,229,100,128,32,27,233,231,232,116,129,32,25,161,76,110,128,1,73,243,233,238,231,108,2,161,90,161,97,226,225,243,101,128,32,26,101,129,0,39,161,103,237,239,238,239,243,240,225,227,101,128,255,7,114,145,0,114,161,153,162,157,162,168,162,215,163,10,164,27,164,51,164,146,166,180,166,217,166,229,167,27,167,35,167,197,167,208,167,243,168,87,97,11,161,177,161,188,161,198,161,205,162,14,162,30,162,55,162,66,162,91,162,114,162,151,225,242,237,229,238,233,225,110,128,5,124,226,229,238,231,225,236,105,128,9,176,227,245,244,101,128,1,85,100,4,161,215,161,221,161,235,162,5,229,246,97,128,9,48,233,227,225,108,129,34,26,161,230,229,120,128,248,229,239,246,229,242,243,243,241,245,225,242,101,129,51,174,161,251,228,243,241,245,225,242,101,128,51,175,243,241,245,225,242,101,128,51,173,230,101,129,5,191,162,21,232,229,226,242,229,119,128,5,191,231,117,2,162,37,162,46,234,225,242,225,244,105,128,10,176,242,237,245,235,232,105,128,10,48,232,233,242,225,231,225,238,97,128,48,137,235,225,244,225,235,225,238,97,129,48,233,162,79,232,225,236,230,247,233,228,244,104,128,255,151,236,239,247,229,242,228,233,225,231,239,238,225,236,226,229,238,231,225,236,105,128,9,241,109,2,162,120,162,143,233,228,228,236,229,228,233,225,231,239,238,225,236,226,229,238,231,225,236,105,128,9,240,243,232,239,242,110,128,2,100,244,233,111,128,34,54,226,239,240,239,237,239,230,111,128,49,22,99,4,162,178,162,185,162,194,162,202,225,242,239,110,128,1,89,229,228,233,236,236,97,128,1,87,233,242,227,236,101,128,36,225,239,237,237,225,225,227,227,229,238,116,128,1,87,100,2,162,221,162,231,226,236,231,242,225,246,101,128,2,17,239,116,2,162,238,162,247,225,227,227,229,238,116,128,30,89,226,229,236,239,119,129,30,91,163,1,237,225,227,242,239,110,128,30,93,101,6,163,24,163,69,163,104,163,159,163,184,163,217,102,2,163,30,163,43,229,242,229,238,227,229,237,225,242,107,128,32,59,236,229,248,243,117,2,163,53,163,60,226,243,229,116,128,34,134,240,229,242,243,229,116,128,34,135,231,233,243,244,229,114,2,163,80,163,85,229,100,128,0,174,115,2,163,91,163,97,225,238,115,128,248,232,229,242,233,102,128,246,218,104,3,163,112,163,135,163,149,225,114,2,163,119,163,126,225,226,233,99,128,6,49,237,229,238,233,225,110,128,5,128,230,233,238,225,236,225,242,225,226,233,99,128,254,174,233,242,225,231,225,238,97,128,48,140,235,225,244,225,235,225,238,97,129,48,236,163,172,232,225,236,230,247,233,228,244,104,128,255,154,243,104,130,5,232,163,193,163,208,228,225,231,229,243,232,232,229,226,242,229,119,128,251,72,232,229,226,242,229,119,128,5,232,118,3,163,225,163,238,164,14,229,242,243,229,228,244,233,236,228,101,128,34,61,233,97,2,163,245,163,254,232,229,226,242,229,119,128,5,151,237,245,231,242,225,243,232,232,229,226,242,229,119,128,5,151,236,239,231,233,227,225,236,238,239,116,128,35,16,230,233,243,232,232,239,239,107,129,2,126,164,40,242,229,246,229,242,243,229,100,128,2,127,104,2,164,57,164,80,97,2,164,63,164,73,226,229,238,231,225,236,105,128,9,221,228,229,246,97,128,9,93,111,131,3,193,164,90,164,119,164,133,239,107,129,2,125,164,97,244,245,242,238,229,100,129,2,123,164,108,243,245,240,229,242,233,239,114,128,2,181,243,249,237,226,239,236,231,242,229,229,107,128,3,241,244,233,227,232,239,239,235,237,239,100,128,2,222,105,6,164,160,165,204,165,250,166,5,166,30,166,166,229,245,108,9,164,182,164,217,164,232,164,246,165,36,165,50,165,136,165,149,165,184,97,2,164,188,164,203,227,233,242,227,236,229,235,239,242,229,225,110,128,50,113,240,225,242,229,238,235,239,242,229,225,110,128,50,17,227,233,242,227,236,229,235,239,242,229,225,110,128,50,99,232,233,229,245,232,235,239,242,229,225,110,128,49,64,107,2,164,252,165,28,233,249,229,239,107,2,165,6,165,15,235,239,242,229,225,110,128,49,58,243,233,239,243,235,239,242,229,225,110,128,49,105,239,242,229,225,110,128,49,57,237,233,229,245,237,235,239,242,229,225,110,128,49,59,112,3,165,58,165,90,165,105,97,2,165,64,165,78,238,243,233,239,243,235,239,242,229,225,110,128,49,108,242,229,238,235,239,242,229,225,110,128,50,3,232,233,229,245,240,232,235,239,242,229,225,110,128,49,63,233,229,245,112,2,165,114,165,123,235,239,242,229,225,110,128,49,60,243,233,239,243,235,239,242,229,225,110,128,49,107,243,233,239,243,235,239,242,229,225,110,128,49,61,116,2,165,155,165,170,232,233,229,245,244,232,235,239,242,229,225,110,128,49,62,233,235,229,245,244,235,239,242,229,225,110,128,49,106,249,229,239,242,233,238,232,233,229,245,232,235,239,242,229,225,110,128,49,109,231,232,116,2,165,212,165,220,225,238,231,236,101,128,34,31,116,2,165,226,165,240,225,227,235,226,229,236,239,247,227,237,98,128,3,25,242,233,225,238,231,236,101,128,34,191,232,233,242,225,231,225,238,97,128,48,138,235,225,244,225,235,225,238,97,129,48,234,166,18,232,225,236,230,247,233,228,244,104,128,255,152,110,2,166,36,166,152,103,131,2,218,166,46,166,57,166,63,226,229,236,239,247,227,237,98,128,3,37,227,237,98,128,3,10,232,225,236,102,2,166,72,166,118,236,229,230,116,131,2,191,166,85,166,96,166,107,225,242,237,229,238,233,225,110,128,5,89,226,229,236,239,247,227,237,98,128,3,28,227,229,238,244,229,242,229,100,128,2,211,242,233,231,232,116,130,2,190,166,130,166,141,226,229,236,239,247,227,237,98,128,3,57,227,229,238,244,229,242,229,100,128,2,210,246,229,242,244,229,228,226,242,229,246,101,128,2,19,244,244,239,242,245,243,241,245,225,242,101,128,51,81,108,2,166,186,166,197,233,238,229,226,229,236,239,119,128,30,95,239,238,231,236,229,103,129,2,124,166,208,244,245,242,238,229,100,128,2,122,237,239,238,239,243,240,225,227,101,128,255,82,111,3,166,237,166,248,167,17,232,233,242,225,231,225,238,97,128,48,141,235,225,244,225,235,225,238,97,129,48,237,167,5,232,225,236,230,247,233,228,244,104,128,255,155,242,245,225,244,232,225,105,128,14,35,240,225,242,229,110,128,36,173,114,3,167,43,167,79,167,109,97,3,167,51,167,61,167,68,226,229,238,231,225,236,105,128,9,220,228,229,246,97,128,9,49,231,245,242,237,245,235,232,105,128,10,92,229,104,2,167,86,167,95,225,242,225,226,233,99,128,6,145,230,233,238,225,236,225,242,225,226,233,99,128,251,141,246,239,227,225,236,233,99,4,167,125,167,135,167,142,167,153,226,229,238,231,225,236,105,128,9,224,228,229,246,97,128,9,96,231,245,234,225,242,225,244,105,128,10,224,246,239,247,229,236,243,233,231,110,3,167,169,167,179,167,186,226,229,238,231,225,236,105,128,9,196,228,229,246,97,128,9,68,231,245,234,225,242,225,244,105,128,10,196,243,245,240,229,242,233,239,114,128,246,241,116,2,167,214,167,222,226,236,239,227,107,128,37,144,245,242,238,229,100,129,2,121,167,232,243,245,240,229,242,233,239,114,128,2,180,117,4,167,253,168,8,168,33,168,80,232,233,242,225,231,225,238,97,128,48,139,235,225,244,225,235,225,238,97,129,48,235,168,21,232,225,236,230,247,233,228,244,104,128,255,153,112,2,168,39,168,74,229,101,2,168,46,168,60,237,225,242,235,226,229,238,231,225,236,105,128,9,242,243,233,231,238,226,229,238,231,225,236,105,128,9,243,233,225,104,128,246,221,244,232,225,105,128,14,36,246,239,227,225,236,233,99,4,168,103,168,113,168,120,168,131,226,229,238,231,225,236,105,128,9,139,228,229,246,97,128,9,11,231,245,234,225,242,225,244,105,128,10,139,246,239,247,229,236,243,233,231,110,3,168,147,168,157,168,164,226,229,238,231,225,236,105,128,9,195,228,229,246,97,128,9,67,231,245,234,225,242,225,244,105,128,10,195,115,147,0,115,168,217,170,187,170,198,171,68,171,107,174,49,174,60,176,203,179,85,179,131,179,158,180,93,180,160,181,193,181,203,182,133,182,206,183,120,183,130,97,9,168,237,168,247,169,12,169,84,169,109,169,120,169,145,169,177,169,217,226,229,238,231,225,236,105,128,9,184,227,245,244,101,129,1,91,169,0,228,239,244,225,227,227,229,238,116,128,30,101,100,5,169,24,169,33,169,39,169,53,169,69,225,242,225,226,233,99,128,6,53,229,246,97,128,9,56,230,233,238,225,236,225,242,225,226,233,99,128,254,186,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,187,237,229,228,233,225,236,225,242,225,226,233,99,128,254,188,231,117,2,169,91,169,100,234,225,242,225,244,105,128,10,184,242,237,245,235,232,105,128,10,56,232,233,242,225,231,225,238,97,128,48,85,235,225,244,225,235,225,238,97,129,48,181,169,133,232,225,236,230,247,233,228,244,104,128,255,123,236,236,225,236,236,225,232,239,245,225,236,225,249,232,229,247,225,243,225,236,236,225,237,225,242,225,226,233,99,128,253,250,237,229,235,104,130,5,225,169,188,169,208,228,225,231,229,243,104,129,251,65,169,199,232,229,226,242,229,119,128,251,65,232,229,226,242,229,119,128,5,225,242,97,5,169,230,170,48,170,56,170,106,170,114,97,5,169,242,169,250,170,2,170,33,170,41,225,244,232,225,105,128,14,50,229,244,232,225,105,128,14,65,233,237,225,233,109,2,170,12,170,23,225,236,225,233,244,232,225,105,128,14,68,245,225,238,244,232,225,105,128,14,67,237,244,232,225,105,128,14,51,244,232,225,105,128,14,48,229,244,232,225,105,128,14,64,105,3,170,64,170,88,170,99,105,2,170,70,170,81,236,229,230,244,244,232,225,105,128,248,134,244,232,225,105,128,14,53,236,229,230,244,244,232,225,105,128,248,133,244,232,225,105,128,14,52,239,244,232,225,105,128,14,66,117,3,170,122,170,172,170,179,101,3,170,130,170,154,170,165,101,2,170,136,170,147,236,229,230,244,244,232,225,105,128,248,136,244,232,225,105,128,14,55,236,229,230,244,244,232,225,105,128,248,135,244,232,225,105,128,14,54,244,232,225,105,128,14,56,245,244,232,225,105,128,14,57,226,239,240,239,237,239,230,111,128,49,25,99,5,170,210,170,231,170,240,171,33,171,55,225,242,239,110,129,1,97,170,219,228,239,244,225,227,227,229,238,116,128,30,103,229,228,233,236,236,97,128,1,95,232,247,97,131,2,89,170,252,171,7,171,26,227,249,242,233,236,236,233,99,128,4,217,228,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,219,232,239,239,107,128,2,90,233,242,99,2,171,41,171,46,236,101,128,36,226,245,237,230,236,229,120,128,1,93,239,237,237,225,225,227,227,229,238,116,128,2,25,228,239,116,2,171,76,171,85,225,227,227,229,238,116,128,30,97,226,229,236,239,119,129,30,99,171,95,228,239,244,225,227,227,229,238,116,128,30,105,101,9,171,127,171,143,171,178,171,243,172,90,172,117,172,142,172,223,172,250,225,231,245,236,236,226,229,236,239,247,227,237,98,128,3,60,99,2,171,149,171,171,239,238,100,129,32,51,171,157,244,239,238,229,227,232,233,238,229,243,101,128,2,202,244,233,239,110,128,0,167,229,110,4,171,189,171,198,171,212,171,228,225,242,225,226,233,99,128,6,51,230,233,238,225,236,225,242,225,226,233,99,128,254,178,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,179,237,229,228,233,225,236,225,242,225,226,233,99,128,254,180,231,239,108,135,5,182,172,7,172,21,172,26,172,35,172,50,172,66,172,77,49,2,172,13,172,17,51,128,5,182,102,128,5,182,178,99,128,5,182,232,229,226,242,229,119,128,5,182,238,225,242,242,239,247,232,229,226,242,229,119,128,5,182,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,182,244,225,232,229,226,242,229,119,128,5,146,247,233,228,229,232,229,226,242,229,119,128,5,182,104,2,172,96,172,107,225,242,237,229,238,233,225,110,128,5,125,233,242,225,231,225,238,97,128,48,91,235,225,244,225,235,225,238,97,129,48,187,172,130,232,225,236,230,247,233,228,244,104,128,255,126,237,105,2,172,149,172,192,227,239,236,239,110,131,0,59,172,163,172,172,172,184,225,242,225,226,233,99,128,6,27,237,239,238,239,243,240,225,227,101,128,255,27,243,237,225,236,108,128,254,84,246,239,233,227,229,228,237,225,242,235,235,225,238,97,129,48,156,172,211,232,225,236,230,247,233,228,244,104,128,255,159,238,116,2,172,230,172,240,233,243,241,245,225,242,101,128,51,34,239,243,241,245,225,242,101,128,51,35,246,229,110,142,0,55,173,28,173,37,173,47,173,77,173,84,173,94,173,119,173,146,173,180,173,192,173,203,173,236,173,244,173,255,225,242,225,226,233,99,128,6,103,226,229,238,231,225,236,105,128,9,237,227,233,242,227,236,101,129,36,102,173,58,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,144,228,229,246,97,128,9,109,229,233,231,232,244,232,115,128,33,94,231,117,2,173,101,173,110,234,225,242,225,244,105,128,10,237,242,237,245,235,232,105,128,10,109,232,97,2,173,126,173,137,227,235,225,242,225,226,233,99,128,6,103,238,231,250,232,239,117,128,48,39,105,2,173,152,173,170,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,38,238,230,229,242,233,239,114,128,32,135,237,239,238,239,243,240,225,227,101,128,255,23,239,236,228,243,244,249,236,101,128,247,55,112,2,173,209,173,216,225,242,229,110,128,36,122,229,114,2,173,223,173,229,233,239,100,128,36,142,243,233,225,110,128,6,247,242,239,237,225,110,128,33,118,243,245,240,229,242,233,239,114,128,32,119,116,2,174,5,174,43,229,229,110,2,174,13,174,22,227,233,242,227,236,101,128,36,112,112,2,174,28,174,35,225,242,229,110,128,36,132,229,242,233,239,100,128,36,152,232,225,105,128,14,87,230,244,232,249,240,232,229,110,128,0,173,104,7,174,76,175,50,175,61,175,75,176,20,176,33,176,197,97,6,174,90,174,101,174,111,174,122,175,9,175,34,225,242,237,229,238,233,225,110,128,5,119,226,229,238,231,225,236,105,128,9,182,227,249,242,233,236,236,233,99,128,4,72,100,2,174,128,174,224,228,97,4,174,139,174,148,174,179,174,193,225,242,225,226,233,99,128,6,81,228,225,237,237,97,2,174,158,174,167,225,242,225,226,233,99,128,252,97,244,225,238,225,242,225,226,233,99,128,252,94,230,225,244,232,225,225,242,225,226,233,99,128,252,96,235,225,243,242,97,2,174,203,174,212,225,242,225,226,233,99,128,252,98,244,225,238,225,242,225,226,233,99,128,252,95,101,132,37,146,174,236,174,243,174,251,175,4,228,225,242,107,128,37,147,236,233,231,232,116,128,37,145,237,229,228,233,245,109,128,37,146,246,97,128,9,54,231,117,2,175,16,175,25,234,225,242,225,244,105,128,10,182,242,237,245,235,232,105,128,10,54,236,243,232,229,236,229,244,232,229,226,242,229,119,128,5,147,226,239,240,239,237,239,230,111,128,49,21,227,232,225,227,249,242,233,236,236,233,99,128,4,73,101,4,175,85,175,150,175,160,175,177,229,110,4,175,96,175,105,175,119,175,135,225,242,225,226,233,99,128,6,52,230,233,238,225,236,225,242,225,226,233,99,128,254,182,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,183,237,229,228,233,225,236,225,242,225,226,233,99,128,254,184,233,227,239,240,244,233,99,128,3,227,241,229,108,129,32,170,175,168,232,229,226,242,229,119,128,32,170,246,97,134,5,176,175,194,175,209,175,223,175,232,175,247,176,7,49,2,175,200,175,205,177,53,128,5,176,53,128,5,176,50,2,175,215,175,219,50,128,5,176,101,128,5,176,232,229,226,242,229,119,128,5,176,238,225,242,242,239,247,232,229,226,242,229,119,128,5,176,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,176,247,233,228,229,232,229,226,242,229,119,128,5,176,232,225,227,249,242,233,236,236,233,99,128,4,187,105,2,176,39,176,50,237,225,227,239,240,244,233,99,128,3,237,110,131,5,233,176,60,176,143,176,152,100,2,176,66,176,132,225,231,229,243,104,130,251,73,176,78,176,87,232,229,226,242,229,119,128,251,73,115,2,176,93,176,113,232,233,238,228,239,116,129,251,44,176,104,232,229,226,242,229,119,128,251,44,233,238,228,239,116,129,251,45,176,123,232,229,226,242,229,119,128,251,45,239,244,232,229,226,242,229,119,128,5,193,232,229,226,242,229,119,128,5,233,115,2,176,158,176,178,232,233,238,228,239,116,129,251,42,176,169,232,229,226,242,229,119,128,251,42,233,238,228,239,116,129,251,43,176,188,232,229,226,242,229,119,128,251,43,239,239,107,128,2,130,105,8,176,221,177,9,177,20,177,45,177,75,177,83,177,96,178,11,231,237,97,131,3,195,176,233,176,237,176,245,49,128,3,194,230,233,238,225,108,128,3,194,236,245,238,225,244,229,243,249,237,226,239,236,231,242,229,229,107,128,3,242,232,233,242,225,231,225,238,97,128,48,87,235,225,244,225,235,225,238,97,129,48,183,177,33,232,225,236,230,247,233,228,244,104,128,255,124,236,245,113,2,177,53,177,62,232,229,226,242,229,119,128,5,189,236,229,230,244,232,229,226,242,229,119,128,5,189,237,233,236,225,114,128,34,60,238,228,239,244,232,229,226,242,229,119,128,5,194,239,115,6,177,111,177,146,177,178,177,206,177,220,177,252,97,2,177,117,177,132,227,233,242,227,236,229,235,239,242,229,225,110,128,50,116,240,225,242,229,238,235,239,242,229,225,110,128,50,20,227,105,2,177,153,177,165,229,245,227,235,239,242,229,225,110,128,49,126,242,227,236,229,235,239,242,229,225,110,128,50,102,107,2,177,184,177,198,233,249,229,239,235,235,239,242,229,225,110,128,49,122,239,242,229,225,110,128,49,69,238,233,229,245,238,235,239,242,229,225,110,128,49,123,112,2,177,226,177,239,225,242,229,238,235,239,242,229,225,110,128,50,6,233,229,245,240,235,239,242,229,225,110,128,49,125,244,233,235,229,245,244,235,239,242,229,225,110,128,49,124,120,141,0,54,178,41,178,50,178,60,178,90,178,97,178,122,178,149,178,183,178,195,178,206,178,239,178,247,179,2,225,242,225,226,233,99,128,6,102,226,229,238,231,225,236,105,128,9,236,227,233,242,227,236,101,129,36,101,178,71,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,143,228,229,246,97,128,9,108,231,117,2,178,104,178,113,234,225,242,225,244,105,128,10,236,242,237,245,235,232,105,128,10,108,232,97,2,178,129,178,140,227,235,225,242,225,226,233,99,128,6,102,238,231,250,232,239,117,128,48,38,105,2,178,155,178,173,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,37,238,230,229,242,233,239,114,128,32,134,237,239,238,239,243,240,225,227,101,128,255,22,239,236,228,243,244,249,236,101,128,247,54,112,2,178,212,178,219,225,242,229,110,128,36,121,229,114,2,178,226,178,232,233,239,100,128,36,141,243,233,225,110,128,6,246,242,239,237,225,110,128,33,117,243,245,240,229,242,233,239,114,128,32,118,116,2,179,8,179,79,229,229,110,2,179,16,179,58,99,2,179,22,179,30,233,242,227,236,101,128,36,111,245,242,242,229,238,227,249,228,229,238,239,237,233,238,225,244,239,242,226,229,238,231,225,236,105,128,9,249,112,2,179,64,179,71,225,242,229,110,128,36,131,229,242,233,239,100,128,36,151,232,225,105,128,14,86,108,2,179,91,179,111,225,243,104,129,0,47,179,99,237,239,238,239,243,240,225,227,101,128,255,15,239,238,103,129,1,127,179,119,228,239,244,225,227,227,229,238,116,128,30,155,109,2,179,137,179,147,233,236,229,230,225,227,101,128,38,58,239,238,239,243,240,225,227,101,128,255,83,111,6,179,172,179,222,179,233,180,2,180,47,180,58,102,2,179,178,179,192,240,225,243,245,241,232,229,226,242,229,119,128,5,195,116,2,179,198,179,207,232,249,240,232,229,110,128,0,173,243,233,231,238,227,249,242,233,236,236,233,99,128,4,76,232,233,242,225,231,225,238,97,128,48,93,235,225,244,225,235,225,238,97,129,48,189,179,246,232,225,236,230,247,233,228,244,104,128,255,127,236,233,228,245,115,2,180,12,180,29,236,239,238,231,239,246,229,242,236,225,249,227,237,98,128,3,56,243,232,239,242,244,239,246,229,242,236,225,249,227,237,98,128,3,55,242,245,243,233,244,232,225,105,128,14,41,115,3,180,66,180,76,180,84,225,236,225,244,232,225,105,128,14,40,239,244,232,225,105,128,14,11,245,225,244,232,225,105,128,14,42,240,97,3,180,102,180,122,180,154,227,101,129,0,32,180,109,232,225,227,235,225,242,225,226,233,99,128,0,32,228,101,129,38,96,180,129,243,245,233,116,2,180,138,180,146,226,236,225,227,107,128,38,96,247,232,233,244,101,128,38,100,242,229,110,128,36,174,241,245,225,242,101,11,180,188,180,199,180,213,180,238,180,255,181,25,181,40,181,73,181,100,181,156,181,171,226,229,236,239,247,227,237,98,128,3,59,99,2,180,205,180,209,99,128,51,196,109,128,51,157,228,233,225,231,239,238,225,236,227,242,239,243,243,232,225,244,227,232,230,233,236,108,128,37,169,232,239,242,233,250,239,238,244,225,236,230,233,236,108,128,37,164,107,2,181,5,181,9,103,128,51,143,109,129,51,158,181,15,227,225,240,233,244,225,108,128,51,206,108,2,181,31,181,35,110,128,51,209,239,103,128,51,210,109,4,181,50,181,54,181,59,181,63,103,128,51,142,233,108,128,51,213,109,128,51,156,243,241,245,225,242,229,100,128,51,161,239,242,244,232,239,231,239,238,225,236,227,242,239,243,243,232,225,244,227,232,230,233,236,108,128,37,166,245,240,240,229,114,2,181,110,181,133,236,229,230,244,244,239,236,239,247,229,242,242,233,231,232,244,230,233,236,108,128,37,167,242,233,231,232,244,244,239,236,239,247,229,242,236,229,230,244,230,233,236,108,128,37,168,246,229,242,244,233,227,225,236,230,233,236,108,128,37,165,247,232,233,244,229,247,233,244,232,243,237,225,236,236,226,236,225,227,107,128,37,163,242,243,241,245,225,242,101,128,51,219,115,2,181,209,182,123,97,4,181,219,181,229,181,236,181,247,226,229,238,231,225,236,105,128,9,183,228,229,246,97,128,9,55,231,245,234,225,242,225,244,105,128,10,183,238,103,8,182,10,182,24,182,38,182,52,182,67,182,81,182,95,182,108,227,233,229,245,227,235,239,242,229,225,110,128,49,73,232,233,229,245,232,235,239,242,229,225,110,128,49,133,233,229,245,238,231,235,239,242,229,225,110,128,49,128,235,233,249,229,239,235,235,239,242,229,225,110,128,49,50,238,233,229,245,238,235,239,242,229,225,110,128,49,101,240,233,229,245,240,235,239,242,229,225,110,128,49,67,243])
.concat([233,239,243,235,239,242,229,225,110,128,49,70,244,233,235,229,245,244,235,239,242,229,225,110,128,49,56,245,240,229,242,233,239,114,128,246,242,116,2,182,139,182,162,229,242,236,233,238,103,129,0,163,182,150,237,239,238,239,243,240,225,227,101,128,255,225,242,239,235,101,2,182,171,182,188,236,239,238,231,239,246,229,242,236,225,249,227,237,98,128,3,54,243,232,239,242,244,239,246,229,242,236,225,249,227,237,98,128,3,53,117,7,182,222,182,254,183,20,183,31,183,72,183,82,183,86,226,243,229,116,130,34,130,182,233,182,244,238,239,244,229,241,245,225,108,128,34,138,239,242,229,241,245,225,108,128,34,134,99,2,183,4,183,12,227,229,229,228,115,128,34,123,232,244,232,225,116,128,34,11,232,233,242,225,231,225,238,97,128,48,89,107,2,183,37,183,61,225,244,225,235,225,238,97,129,48,185,183,49,232,225,236,230,247,233,228,244,104,128,255,125,245,238,225,242,225,226,233,99,128,6,82,237,237,225,244,233,239,110,128,34,17,110,128,38,60,240,229,242,243,229,116,130,34,131,183,99,183,110,238,239,244,229,241,245,225,108,128,34,139,239,242,229,241,245,225,108,128,34,135,246,243,241,245,225,242,101,128,51,220,249,239,245,247,225,229,242,225,243,241,245,225,242,101,128,51,124,116,144,0,116,183,183,184,192,184,213,185,100,185,140,187,188,191,70,192,145,192,157,192,169,193,202,193,227,194,57,194,237,195,165,195,255,97,10,183,205,183,215,183,236,183,243,184,12,184,90,184,107,184,132,184,146,184,150,226,229,238,231,225,236,105,128,9,164,227,107,2,183,222,183,229,228,239,247,110,128,34,164,236,229,230,116,128,34,163,228,229,246,97,128,9,36,231,117,2,183,250,184,3,234,225,242,225,244,105,128,10,164,242,237,245,235,232,105,128,10,36,104,4,184,22,184,31,184,45,184,75,225,242,225,226,233,99,128,6,55,230,233,238,225,236,225,242,225,226,233,99,128,254,194,105,2,184,51,184,66,238,233,244,233,225,236,225,242,225,226,233,99,128,254,195,242,225,231,225,238,97,128,48,95,237,229,228,233,225,236,225,242,225,226,233,99,128,254,196,233,243,249,239,245,229,242,225,243,241,245,225,242,101,128,51,125,235,225,244,225,235,225,238,97,129,48,191,184,120,232,225,236,230,247,233,228,244,104,128,255,128,244,247,229,229,236,225,242,225,226,233,99,128,6,64,117,128,3,196,118,130,5,234,184,158,184,183,228,225,231,229,115,129,251,74,184,168,104,129,251,74,184,174,232,229,226,242,229,119,128,251,74,232,229,226,242,229,119,128,5,234,98,2,184,198,184,203,225,114,128,1,103,239,240,239,237,239,230,111,128,49,10,99,6,184,227,184,234,184,241,184,250,185,60,185,87,225,242,239,110,128,1,101,227,245,242,108,128,2,168,229,228,233,236,236,97,128,1,99,232,229,104,4,185,6,185,15,185,29,185,45,225,242,225,226,233,99,128,6,134,230,233,238,225,236,225,242,225,226,233,99,128,251,123,233,238,233,244,233,225,236,225,242,225,226,233,99,128,251,124,237,229,228,233,225,236,225,242,225,226,233,99,128,251,125,233,242,99,2,185,68,185,73,236,101,128,36,227,245,237,230,236,229,248,226,229,236,239,119,128,30,113,239,237,237,225,225,227,227,229,238,116,128,1,99,100,2,185,106,185,116,233,229,242,229,243,233,115,128,30,151,239,116,2,185,123,185,132,225,227,227,229,238,116,128,30,107,226,229,236,239,119,128,30,109,101,9,185,160,185,171,185,191,186,201,186,226,187,34,187,101,187,106,187,158,227,249,242,233,236,236,233,99,128,4,66,228,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,173,104,7,185,207,185,216,185,230,186,14,186,44,186,85,186,183,225,242,225,226,233,99,128,6,42,230,233,238,225,236,225,242,225,226,233,99,128,254,150,232,225,232,105,2,185,239,185,254,238,233,244,233,225,236,225,242,225,226,233,99,128,252,162,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,12,105,2,186,20,186,35,238,233,244,233,225,236,225,242,225,226,233,99,128,254,151,242,225,231,225,238,97,128,48,102,234,229,229,237,105,2,186,54,186,69,238,233,244,233,225,236,225,242,225,226,233,99,128,252,161,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,11,109,2,186,91,186,125,225,242,226,245,244,97,2,186,102,186,111,225,242,225,226,233,99,128,6,41,230,233,238,225,236,225,242,225,226,233,99,128,254,148,101,2,186,131,186,144,228,233,225,236,225,242,225,226,233,99,128,254,152,229,237,105,2,186,152,186,167,238,233,244,233,225,236,225,242,225,226,233,99,128,252,164,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,14,238,239,239,238,230,233,238,225,236,225,242,225,226,233,99,128,252,115,235,225,244,225,235,225,238,97,129,48,198,186,214,232,225,236,230,247,233,228,244,104,128,255,131,108,2,186,232,186,251,229,240,232,239,238,101,129,33,33,186,243,226,236,225,227,107,128,38,14,233,243,232,97,2,187,4,187,19,231,229,228,239,236,225,232,229,226,242,229,119,128,5,160,241,229,244,225,238,225,232,229,226,242,229,119,128,5,169,110,4,187,44,187,53,187,72,187,93,227,233,242,227,236,101,128,36,105,233,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,41,112,2,187,78,187,85,225,242,229,110,128,36,125,229,242,233,239,100,128,36,145,242,239,237,225,110,128,33,121,243,104,128,2,167,116,131,5,216,187,116,187,136,187,145,228,225,231,229,243,104,129,251,56,187,127,232,229,226,242,229,119,128,251,56,232,229,226,242,229,119,128,5,216,243,229,227,249,242,233,236,236,233,99,128,4,181,246,233,114,2,187,166,187,175,232,229,226,242,229,119,128,5,155,236,229,230,244,232,229,226,242,229,119,128,5,155,104,6,187,202,188,98,188,220,189,96,190,3,191,60,97,5,187,214,187,224,187,231,188,0,188,29,226,229,238,231,225,236,105,128,9,165,228,229,246,97,128,9,37,231,117,2,187,238,187,247,234,225,242,225,244,105,128,10,165,242,237,245,235,232,105,128,10,37,108,2,188,6,188,15,225,242,225,226,233,99,128,6,48,230,233,238,225,236,225,242,225,226,233,99,128,254,172,238,244,232,225,235,232,225,116,3,188,44,188,75,188,82,236,239,119,2,188,52,188,63,236,229,230,244,244,232,225,105,128,248,152,242,233,231,232,244,244,232,225,105,128,248,151,244,232,225,105,128,14,76,245,240,240,229,242,236,229,230,244,244,232,225,105,128,248,150,101,3,188,106,188,170,188,193,104,4,188,116,188,125,188,139,188,155,225,242,225,226,233,99,128,6,43,230,233,238,225,236,225,242,225,226,233,99,128,254,154,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,155,237,229,228,233,225,236,225,242,225,226,233,99,128,254,156,242,101,2,188,177,188,186,229,248,233,243,244,115,128,34,3,230,239,242,101,128,34,52,244,97,130,3,184,188,202,188,206,49,128,3,209,243,249,237,226,239,236,231,242,229,229,107,128,3,209,105,2,188,226,189,56,229,245,244,104,4,188,239,189,18,189,33,189,42,97,2,188,245,189,4,227,233,242,227,236,229,235,239,242,229,225,110,128,50,121,240,225,242,229,238,235,239,242,229,225,110,128,50,25,227,233,242,227,236,229,235,239,242,229,225,110,128,50,107,235,239,242,229,225,110,128,49,76,240,225,242,229,238,235,239,242,229,225,110,128,50,11,242,244,229,229,110,2,189,66,189,75,227,233,242,227,236,101,128,36,108,112,2,189,81,189,88,225,242,229,110,128,36,128,229,242,233,239,100,128,36,148,111,6,189,110,189,127,189,132,189,146,189,151,189,204,238,225,238,231,237,239,238,244,232,239,244,232,225,105,128,14,17,239,107,128,1,173,240,232,245,244,232,225,239,244,232,225,105,128,14,18,242,110,128,0,254,244,104,3,189,160,189,184,189,194,97,2,189,166,189,176,232,225,238,244,232,225,105,128,14,23,238,244,232,225,105,128,14,16,239,238,231,244,232,225,105,128,14,24,245,238,231,244,232,225,105,128,14,22,245,243,225,238,100,2,189,214,189,225,227,249,242,233,236,236,233,99,128,4,130,243,243,229,240,225,242,225,244,239,114,2,189,240,189,249,225,242,225,226,233,99,128,6,108,240,229,242,243,233,225,110,128,6,108,242,229,101,144,0,51,190,41,190,50,190,60,190,90,190,97,190,107,190,132,190,159,190,193,190,205,190,224,190,235,191,12,191,34,191,42,191,53,225,242,225,226,233,99,128,6,99,226,229,238,231,225,236,105,128,9,233,227,233,242,227,236,101,129,36,98,190,71,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,140,228,229,246,97,128,9,105,229,233,231,232,244,232,115,128,33,92,231,117,2,190,114,190,123,234,225,242,225,244,105,128,10,233,242,237,245,235,232,105,128,10,105,232,97,2,190,139,190,150,227,235,225,242,225,226,233,99,128,6,99,238,231,250,232,239,117,128,48,35,105,2,190,165,190,183,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,34,238,230,229,242,233,239,114,128,32,131,237,239,238,239,243,240,225,227,101,128,255,19,238,245,237,229,242,225,244,239,242,226,229,238,231,225,236,105,128,9,246,239,236,228,243,244,249,236,101,128,247,51,112,2,190,241,190,248,225,242,229,110,128,36,118,229,114,2,190,255,191,5,233,239,100,128,36,138,243,233,225,110,128,6,243,241,245,225,242,244,229,242,115,129,0,190,191,25,229,237,228,225,243,104,128,246,222,242,239,237,225,110,128,33,114,243,245,240,229,242,233,239,114,128,0,179,244,232,225,105,128,14,83,250,243,241,245,225,242,101,128,51,148,105,7,191,86,191,97,191,212,192,54,192,66,192,115,192,132,232,233,242,225,231,225,238,97,128,48,97,107,2,191,103,191,127,225,244,225,235,225,238,97,129,48,193,191,115,232,225,236,230,247,233,228,244,104,128,255,129,229,245,116,4,191,139,191,174,191,189,191,198,97,2,191,145,191,160,227,233,242,227,236,229,235,239,242,229,225,110,128,50,112,240,225,242,229,238,235,239,242,229,225,110,128,50,16,227,233,242,227,236,229,235,239,242,229,225,110,128,50,98,235,239,242,229,225,110,128,49,55,240,225,242,229,238,235,239,242,229,225,110,128,50,2,236,228,101,133,2,220,191,228,191,239,192,0,192,12,192,40,226,229,236,239,247,227,237,98,128,3,48,99,2,191,245,191,250,237,98,128,3,3,239,237,98,128,3,3,228,239,245,226,236,229,227,237,98,128,3,96,111,2,192,18,192,28,240,229,242,225,244,239,114,128,34,60,246,229,242,236,225,249,227,237,98,128,3,52,246,229,242,244,233,227,225,236,227,237,98,128,3,62,237,229,243,227,233,242,227,236,101,128,34,151,112,2,192,72,192,102,229,232,97,2,192,80,192,89,232,229,226,242,229,119,128,5,150,236,229,230,244,232,229,226,242,229,119,128,5,150,240,233,231,245,242,237,245,235,232,105,128,10,112,244,236,239,227,249,242,233,236,236,233,227,227,237,98,128,4,131,247,238,225,242,237,229,238,233,225,110,128,5,127,236,233,238,229,226,229,236,239,119,128,30,111,237,239,238,239,243,240,225,227,101,128,255,84,111,7,192,185,192,196,192,207,192,232,193,96,193,108,193,192,225,242,237,229,238,233,225,110,128,5,105,232,233,242,225,231,225,238,97,128,48,104,235,225,244,225,235,225,238,97,129,48,200,192,220,232,225,236,230,247,233,228,244,104,128,255,132,110,3,192,240,193,82,193,87,101,4,192,250,193,63,193,70,193,76,226,225,114,4,193,6,193,35,193,45,193,54,229,248,244,242,97,2,193,16,193,26,232,233,231,232,237,239,100,128,2,229,236,239,247,237,239,100,128,2,233,232,233,231,232,237,239,100,128,2,230,236,239,247,237,239,100,128,2,232,237,233,228,237,239,100,128,2,231,230,233,246,101,128,1,189,243,233,120,128,1,133,244,247,111,128,1,168,239,115,128,3,132,243,241,245,225,242,101,128,51,39,240,225,244,225,235,244,232,225,105,128,14,15,242,244,239,233,243,229,243,232,229,236,236,226,242,225,227,235,229,116,2,193,131,193,161,236,229,230,116,130,48,20,193,142,193,150,243,237,225,236,108,128,254,93,246,229,242,244,233,227,225,108,128,254,57,242,233,231,232,116,130,48,21,193,173,193,181,243,237,225,236,108,128,254,94,246,229,242,244,233,227,225,108,128,254,58,244,225,239,244,232,225,105,128,14,21,240,97,2,193,209,193,221,236,225,244,225,236,232,239,239,107,128,1,171,242,229,110,128,36,175,114,3,193,235,194,10,194,25,225,228,229,237,225,242,107,129,33,34,193,247,115,2,193,253,194,3,225,238,115,128,248,234,229,242,233,102,128,246,219,229,244,242,239,230,236,229,248,232,239,239,107,128,2,136,233,225,103,4,194,37,194,42,194,47,194,52,228,110,128,37,188,236,102,128,37,196,242,116,128,37,186,245,112,128,37,178,115,132,2,166,194,69,194,108,194,214,194,227,225,228,105,130,5,230,194,79,194,99,228,225,231,229,243,104,129,251,70,194,90,232,229,226,242,229,119,128,251,70,232,229,226,242,229,119,128,5,230,101,2,194,114,194,125,227,249,242,233,236,236,233,99,128,4,70,242,101,134,5,181,194,142,194,156,194,161,194,170,194,185,194,201,49,2,194,148,194,152,50,128,5,181,101,128,5,181,178,98,128,5,181,232,229,226,242,229,119,128,5,181,238,225,242,242,239,247,232,229,226,242,229,119,128,5,181,241,245,225,242,244,229,242,232,229,226,242,229,119,128,5,181,247,233,228,229,232,229,226,242,229,119,128,5,181,232,229,227,249,242,233,236,236,233,99,128,4,91,245,240,229,242,233,239,114,128,246,243,116,4,194,247,195,41,195,106,195,157,97,3,194,255,195,9,195,16,226,229,238,231,225,236,105,128,9,159,228,229,246,97,128,9,31,231,117,2,195,23,195,32,234,225,242,225,244,105,128,10,159,242,237,245,235,232,105,128,10,31,229,104,4,195,52,195,61,195,75,195,91,225,242,225,226,233,99,128,6,121,230,233,238,225,236,225,242,225,226,233,99,128,251,103,233,238,233,244,233,225,236,225,242,225,226,233,99,128,251,104,237,229,228,233,225,236,225,242,225,226,233,99,128,251,105,232,97,3,195,115,195,125,195,132,226,229,238,231,225,236,105,128,9,160,228,229,246,97,128,9,32,231,117,2,195,139,195,148,234,225,242,225,244,105,128,10,160,242,237,245,235,232,105,128,10,32,245,242,238,229,100,128,2,135,117,3,195,173,195,184,195,209,232,233,242,225,231,225,238,97,128,48,100,235,225,244,225,235,225,238,97,129,48,196,195,197,232,225,236,230,247,233,228,244,104,128,255,130,243,237,225,236,108,2,195,219,195,230,232,233,242,225,231,225,238,97,128,48,99,235,225,244,225,235,225,238,97,129,48,195,195,243,232,225,236,230,247,233,228,244,104,128,255,111,119,2,196,5,196,110,101,2,196,11,196,59,236,246,101,3,196,21,196,30,196,51,227,233,242,227,236,101,128,36,107,112,2,196,36,196,43,225,242,229,110,128,36,127,229,242,233,239,100,128,36,147,242,239,237,225,110,128,33,123,238,244,121,3,196,69,196,78,196,89,227,233,242,227,236,101,128,36,115,232,225,238,231,250,232,239,117,128,83,68,112,2,196,95,196,102,225,242,229,110,128,36,135,229,242,233,239,100,128,36,155,111,142,0,50,196,142,196,151,196,161,196,191,196,243,197,12,197,39,197,73,197,85,197,104,197,115,197,148,197,156,197,180,225,242,225,226,233,99,128,6,98,226,229,238,231,225,236,105,128,9,232,227,233,242,227,236,101,129,36,97,196,172,233,238,246,229,242,243,229,243,225,238,243,243,229,242,233,102,128,39,139,100,2,196,197,196,203,229,246,97,128,9,104,239,116,2,196,210,196,221,229,238,236,229,225,228,229,114,128,32,37,236,229,225,228,229,114,129,32,37,196,232,246,229,242,244,233,227,225,108,128,254,48,231,117,2,196,250,197,3,234,225,242,225,244,105,128,10,232,242,237,245,235,232,105,128,10,104,232,97,2,197,19,197,30,227,235,225,242,225,226,233,99,128,6,98,238,231,250,232,239,117,128,48,34,105,2,197,45,197,63,228,229,239,231,242,225,240,232,233,227,240,225,242,229,110,128,50,33,238,230,229,242,233,239,114,128,32,130,237,239,238,239,243,240,225,227,101,128,255,18,238,245,237,229,242,225,244,239,242,226,229,238,231,225,236,105,128,9,245,239,236,228,243,244,249,236,101,128,247,50,112,2,197,121,197,128,225,242,229,110,128,36,117,229,114,2,197,135,197,141,233,239,100,128,36,137,243,233,225,110,128,6,242,242,239,237,225,110,128,33,113,115,2,197,162,197,170,244,242,239,235,101,128,1,187,245,240,229,242,233,239,114,128,0,178,244,104,2,197,187,197,192,225,105,128,14,82,233,242,228,115,128,33,84,117,145,0,117,197,237,197,245,198,30,198,87,198,225,199,6,199,129,199,145,199,196,200,10,200,91,200,100,200,219,200,243,201,95,201,123,201,237,225,227,245,244,101,128,0,250,98,4,197,255,198,4,198,13,198,23,225,114,128,2,137,229,238,231,225,236,105,128,9,137,239,240,239,237,239,230,111,128,49,40,242,229,246,101,128,1,109,99,3,198,38,198,45,198,77,225,242,239,110,128,1,212,233,242,99,2,198,53,198,58,236,101,128,36,228,245,237,230,236,229,120,129,0,251,198,69,226,229,236,239,119,128,30,119,249,242,233,236,236,233,99,128,4,67,100,5,198,99,198,110,198,133,198,139,198,215,225,244,244,225,228,229,246,97,128,9,81,226,108,2,198,117,198,125,225,227,245,244,101,128,1,113,231,242,225,246,101,128,2,21,229,246,97,128,9,9,233,229,242,229,243,233,115,133,0,252,198,159,198,167,198,175,198,198,198,206,225,227,245,244,101,128,1,216,226,229,236,239,119,128,30,115,99,2,198,181,198,188,225,242,239,110,128,1,218,249,242,233,236,236,233,99,128,4,241,231,242,225,246,101,128,1,220,237,225,227,242,239,110,128,1,214,239,244,226,229,236,239,119,128,30,229,103,2,198,231,198,238,242,225,246,101,128,0,249,117,2,198,244,198,253,234,225,242,225,244,105,128,10,137,242,237,245,235,232,105,128,10,9,104,3,199,14,199,24,199,102,233,242,225,231,225,238,97,128,48,70,111,2,199,30,199,40,239,235,225,226,239,246,101,128,30,231,242,110,133,1,176,199,55,199,63,199,74,199,82,199,94,225,227,245,244,101,128,30,233,228,239,244,226,229,236,239,119,128,30,241,231,242,225,246,101,128,30,235,232,239,239,235,225,226,239,246,101,128,30,237,244,233,236,228,101,128,30,239,245,238,231,225,242,245,237,236,225,245,116,129,1,113,199,118,227,249,242,233,236,236,233,99,128,4,243,233,238,246,229,242,244,229,228,226,242,229,246,101,128,2,23,107,3,199,153,199,177,199,188,225,244,225,235,225,238,97,129,48,166,199,165,232,225,236,230,247,233,228,244,104,128,255,115,227,249,242,233,236,236,233,99,128,4,121,239,242,229,225,110,128,49,92,109,2,199,202,199,255,97,2,199,208,199,241,227,242,239,110,130,1,107,199,219,199,230,227,249,242,233,236,236,233,99,128,4,239,228,233,229,242,229,243,233,115,128,30,123,244,242,225,231,245,242,237,245,235,232,105,128,10,65,239,238,239,243,240,225,227,101,128,255,85,110,2,200,16,200,71,228,229,242,243,227,239,242,101,132,0,95,200,35,200,41,200,53,200,64,228,226,108,128,32,23,237,239,238,239,243,240,225,227,101,128,255,63,246,229,242,244,233,227,225,108,128,254,51,247,225,246,121,128,254,79,105,2,200,77,200,82,239,110,128,34,42,246,229,242,243,225,108,128,34,0,239,231,239,238,229,107,128,1,115,112,5,200,112,200,119,200,127,200,142,200,193,225,242,229,110,128,36,176,226,236,239,227,107,128,37,128,240,229,242,228,239,244,232,229,226,242,229,119,128,5,196,243,233,236,239,110,131,3,197,200,156,200,177,200,185,228,233,229,242,229,243,233,115,129,3,203,200,169,244,239,238,239,115,128,3,176,236,225,244,233,110,128,2,138,244,239,238,239,115,128,3,205,244,225,227,107,2,200,202,200,213,226,229,236,239,247,227,237,98,128,3,29,237,239,100,128,2,212,114,2,200,225,200,237,225,231,245,242,237,245,235,232,105,128,10,115,233,238,103,128,1,111,115,3,200,251,201,10,201,55,232,239,242,244,227,249,242,233,236,236,233,99,128,4,94,237,225,236,108,2,201,19,201,30,232,233,242,225,231,225,238,97,128,48,69,235,225,244,225,235,225,238,97,129,48,165,201,43,232,225,236,230,247,233,228,244,104,128,255,105,244,242,225,233,231,232,116,2,201,67,201,78,227,249,242,233,236,236,233,99,128,4,175,243,244,242,239,235,229,227,249,242,233,236,236,233,99,128,4,177,244,233,236,228,101,130,1,105,201,107,201,115,225,227,245,244,101,128,30,121,226,229,236,239,119,128,30,117,117,5,201,135,201,145,201,152,201,177,201,193,226,229,238,231,225,236,105,128,9,138,228,229,246,97,128,9,10,231,117,2,201,159,201,168,234,225,242,225,244,105,128,10,138,242,237,245,235,232,105,128,10,10,237,225,244,242,225,231,245,242,237,245,235,232,105,128,10,66,246,239,247,229,236,243,233,231,110,3,201,209,201,219,201,226,226,229,238,231,225,236,105,128,9,194,228,229,246,97,128,9,66,231,245,234,225,242,225,244,105,128,10,194,246,239,247,229,236,243,233,231,110,3,201,253,202,7,202,14,226,229,238,231,225,236,105,128,9,193,228,229,246,97,128,9,65,231,245,234,225,242,225,244,105,128,10,193,118,139,0,118,202,51,202,199,202,208,202,219,203,148,203,155,203,253,204,9,204,109,204,117,204,138,97,4,202,61,202,68,202,93,202,104,228,229,246,97,128,9,53,231,117,2,202,75,202,84,234,225,242,225,244,105,128,10,181,242,237,245,235,232,105,128,10,53,235,225,244,225,235,225,238,97,128,48,247,118,132,5,213,202,116,202,143,202,175,202,187,228,225,231,229,243,104,130,251,53,202,129,202,134,182,53,128,251,53,232,229,226,242,229,119,128,251,53,104,2,202,149,202,157,229,226,242,229,119,128,5,213,239,236,225,109,129,251,75,202,166,232,229,226,242,229,119,128,251,75,246,225,246,232,229,226,242,229,119,128,5,240,249,239,228,232,229,226,242,229,119,128,5,241,227,233,242,227,236,101,128,36,229,228,239,244,226,229,236,239,119,128,30,127,101,6,202,233,202,244,203,52,203,63,203,69,203,136,227,249,242,233,236,236,233,99,128,4,50,104,4,202,254,203,7,203,21,203,37,225,242,225,226,233,99,128,6,164,230,233,238,225,236,225,242,225,226,233,99,128,251,107,233,238,233,244,233,225,236,225,242,225,226,233,99,128,251,108,237,229,228,233,225,236,225,242,225,226,233,99,128,251,109,235,225,244,225,235,225,238,97,128,48,249,238,245,115,128,38,64,242,244,233,227,225,108,2,203,80,203,86,226,225,114,128,0,124,236,233,238,101,4,203,99,203,110,203,121,203,130,225,226,239,246,229,227,237,98,128,3,13,226,229,236,239,247,227,237,98,128,3,41,236,239,247,237,239,100,128,2,204,237,239,100,128,2,200,247,225,242,237,229,238,233,225,110,128,5,126,232,239,239,107,128,2,139,105,3,203,163,203,174,203,213,235,225,244,225,235,225,238,97,128,48,248,242,225,237,97,3,203,185,203,195,203,202,226,229,238,231,225,236,105,128,9,205,228,229,246,97,128,9,77,231,245,234,225,242,225,244,105,128,10,205,243,225,242,231,97,3,203,225,203,235,203,242,226,229,238,231,225,236,105,128,9,131,228,229,246,97,128,9,3,231,245,234,225,242,225,244,105,128,10,131,237,239,238,239,243,240,225,227,101,128,255,86,111,3,204,17,204,28,204,98,225,242,237,229,238,233,225,110,128,5,120,233,227,229,100,2,204,37,204,73,233,244,229,242,225,244,233,239,110,2,204,51,204,62,232,233,242,225,231,225,238,97,128,48,158,235,225,244,225,235,225,238,97,128,48,254,237,225,242,235,235,225,238,97,129,48,155,204,86,232,225,236,230,247,233,228,244,104,128,255,158,235,225,244,225,235,225,238,97,128,48,250,240,225,242,229,110,128,36,177,116,2,204,123,204,130,233,236,228,101,128,30,125,245,242,238,229,100,128,2,140,117,2,204,144,204,155,232,233,242,225,231,225,238,97,128,48,148,235,225,244,225,235,225,238,97,128,48,244,119,143,0,119,204,200,205,177,205,187,205,210,205,250,206,61,206,69,208,40,208,81,208,93,208,168,208,176,208,183,208,194,208,203,97,8,204,218,204,225,204,235,204,246,205,28,205,60,205,72,205,108,227,245,244,101,128,30,131,229,235,239,242,229,225,110,128,49,89,232,233,242,225,231,225,238,97,128,48,143,107,2,204,252,205,20,225,244,225,235,225,238,97,129,48,239,205,8,232,225,236,230,247,233,228,244,104,128,255,156,239,242,229,225,110,128,49,88,243,237,225,236,108,2,205,38,205,49,232,233,242,225,231,225,238,97,128,48,142,235,225,244,225,235,225,238,97,128,48,238,244,244,239,243,241,245,225,242,101,128,51,87,118,2,205,78,205,86,229,228,225,243,104,128,48,28,249,245,238,228,229,242,243,227,239,242,229,246,229,242,244,233,227,225,108,128,254,52,119,3,205,116,205,125,205,139,225,242,225,226,233,99,128,6,72,230,233,238,225,236,225,242,225,226,233,99,128,254,238,232,225,237,250,225,225,226,239,246,101,2,205,154,205,163,225,242,225,226,233,99,128,6,36,230,233,238,225,236,225,242,225,226,233,99,128,254,134,226,243,241,245,225,242,101,128,51,221,227,233,242,99,2,205,196,205,201,236,101,128,36,230,245,237,230,236,229,120,128,1,117,100,2,205,216,205,226,233,229,242,229,243,233,115,128,30,133,239,116,2,205,233,205,242,225,227,227,229,238,116,128,30,135,226,229,236,239,119,128,30,137,101,4,206,4,206,15,206,27,206,51,232,233,242,225,231,225,238,97,128,48,145,233,229,242,243,244,242,225,243,115,128,33,24,107,2,206,33,206,43,225,244,225,235,225,238,97,128,48,241,239,242,229,225,110,128,49,94,239,235,239,242,229,225,110,128,49,93,231,242,225,246,101,128,30,129,232,233,244,101,8,206,90,206,99,206,183,207,17,207,101,207,146,207,198,207,254,226,245,236,236,229,116,128,37,230,99,2,206,105,206,125,233,242,227,236,101,129,37,203,206,115,233,238,246,229,242,243,101,128,37,217,239,242,238,229,242,226,242,225,227,235,229,116,2,206,142,206,162,236,229,230,116,129,48,14,206,151,246,229,242,244,233,227,225,108,128,254,67,242,233,231,232,116,129,48,15,206,172,246,229,242,244,233,227,225,108,128,254,68,100,2,206,189,206,230,233,225,237,239,238,100,129,37,199,206,200,227,239,238,244,225,233,238,233,238,231,226,236,225,227,235,243,237,225,236,236,228,233,225,237,239,238,100,128,37,200,239,247,238,240,239,233,238,244,233,238,103,2,206,246,207,6,243,237,225,236,236,244,242,233,225,238,231,236,101,128,37,191,244,242,233,225,238,231,236,101,128,37,189,236,101,2,207,24,207,66,230,244,240,239,233,238,244,233,238,103,2,207,39,207,55,243,237,225,236,236,244,242,233,225,238,231,236,101,128,37,195,244,242,233,225,238,231,236,101,128,37,193,238,244,233,227,245,236,225,242,226,242,225,227,235,229,116,2,207,86,207,93,236,229,230,116,128,48,22,242,233,231,232,116,128,48,23,242,233,231,232,244,240,239,233,238,244,233,238,103,2,207,119,207,135,243,237,225,236,236,244,242,233,225,238,231,236,101,128,37,185,244,242,233,225,238,231,236,101,128,37,183,115,3,207,154,207,184,207,192,109,2,207,160,207,172,225,236,236,243,241,245,225,242,101,128,37,171,233,236,233,238,231,230,225,227,101,128,38,58,241,245,225,242,101,128,37,161,244,225,114,128,38,6,116,2,207,204,207,215,229,236,229,240,232,239,238,101,128,38,15,239,242,244,239,233,243,229,243,232,229,236,236,226,242,225,227,235,229,116,2,207,239,207,246,236,229,230,116,128,48,24,242,233,231,232,116,128,48,25,245,240,240,239,233,238,244,233,238,103,2,208,13,208,29,243,237,225,236,236,244,242,233,225,238,231,236,101,128,37,181,244,242,233,225,238,231,236,101,128,37,179,105,2,208,46,208,57,232,233,242,225,231,225,238,97,128,48,144,107,2,208,63,208,73,225,244,225,235,225,238,97,128,48,240,239,242,229,225,110,128,49,95,237,239,238,239,243,240,225,227,101,128,255,87,111,4,208,103,208,114,208,139,208,157,232,233,242,225,231,225,238,97,128,48,146,235,225,244,225,235,225,238,97,129,48,242,208,127,232,225,236,230,247,233,228,244,104,128,255,102,110,129,32,169,208,145,237,239,238,239,243,240,225,227,101,128,255,230,247,225,229,238,244,232,225,105,128,14,39,240,225,242,229,110,128,36,178,242,233,238,103,128,30,152,243,245,240,229,242,233,239,114,128,2,183,244,245,242,238,229,100,128,2,141,249,238,110,128,1,191,120,137,0,120,208,231,208,242,208,253,209,6,209,33,209,46,209,50,209,62,209,70,225,226,239,246,229,227,237,98,128,3,61,226,239,240,239,237,239,230,111,128,49,18,227,233,242,227,236,101,128,36,231,100,2,209,12,209,22,233,229,242,229,243,233,115,128,30,141,239,244,225,227,227,229,238,116,128,30,139,229,232,225,242,237,229,238,233,225,110,128,5,109,105,128,3,190,237,239,238,239,243,240,225,227,101,128,255,88,240,225,242,229,110,128,36,179,243,245,240,229,242,233,239,114,128,2,227,121,143,0,121,209,115,210,74,210,97,210,137,212,103,212,111,212,128,212,192,212,204,213,201,213,241,213,253,214,8,214,29,215,2,97,11,209,139,209,151,209,161,209,168,209,175,209,185,209,210,209,221,210,3,210,16,210,62,225,228,239,243,241,245,225,242,101,128,51,78,226,229,238,231,225,236,105,128,9,175,227,245,244,101,128,0,253,228,229,246,97,128,9,47,229,235,239,242,229,225,110,128,49,82,231,117,2,209,192,209,201,234,225,242,225,244,105,128,10,175,242,237,245,235,232,105,128,10,47,232,233,242,225,231,225,238,97,128,48,132,107,2,209,227,209,251,225,244,225,235,225,238,97,129,48,228,209,239,232,225,236,230,247,233,228,244,104,128,255,148,239,242,229,225,110,128,49,81,237,225,235,235,225,238,244,232,225,105,128,14,78,243,237,225,236,108,2,210,26,210,37,232,233,242,225,231,225,238,97,128,48,131,235,225,244,225,235,225,238,97,129,48,227,210,50,232,225,236,230,247,233,228,244,104,128,255,108,244,227,249,242,233,236,236,233,99,128,4,99,227,233,242,99,2,210,83,210,88,236,101,128,36,232,245,237,230,236,229,120,128,1,119,100,2,210,103,210,113,233,229,242,229,243,233,115,128,0,255,239,116,2,210,120,210,129,225,227,227,229,238,116,128,30,143,226,229,236,239,119,128,30,245,101,7,210,153,211,161,211,170,211,188,211,220,212,40,212,91,104,8,210,171,210,180,210,214,210,228,211,45,211,61,211,120,211,138,225,242,225,226,233,99,128,6,74,226,225,242,242,229,101,2,210,191,210,200,225,242,225,226,233,99,128,6,210,230,233,238,225,236,225,242,225,226,233,99,128,251,175,230,233,238,225,236,225,242,225,226,233,99,128,254,242,232,225,237,250,225,225,226,239,246,101,4,210,247,211,0,211,14,211,30,225,242,225,226,233,99,128,6,38,230,233,238,225,236,225,242,225,226,233,99,128,254,138,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,139,237,229,228,233,225,236,225,242,225,226,233,99,128,254,140,233,238,233,244,233,225,236,225,242,225,226,233,99,128,254,243,237,101,2,211,68,211,81,228,233,225,236,225,242,225,226,233,99,128,254,244,229,237,105,2,211,89,211,104,238,233,244,233,225,236,225,242,225,226,233,99,128,252,221,243,239,236,225,244,229,228,225,242,225,226,233,99,128,252,88,238,239,239,238,230,233,238,225,236,225,242,225,226,233,99,128,252,148,244,232,242,229,229,228,239,244,243,226,229,236,239,247,225,242,225,226,233,99,128,6,209,235,239,242,229,225,110,128,49,86,110,129,0,165,211,176,237,239,238,239,243,240,225,227,101,128,255,229,111,2,211,194,211,203,235,239,242,229,225,110,128,49,85,242,233,238,232,233,229,245,232,235,239,242,229,225,110,128,49,134,114,3,211,228,212,8,212,20,225,232,226,229,238,249,239,237,111,2,211,242,211,251,232,229,226,242,229,119,128,5,170,236,229,230,244,232,229,226,242,229,119,128,5,170,233,227,249,242,233,236,236,233,99,128,4,75,245,228,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,249,243,233,229,245,238,103,3,212,53,212,62,212,78,235,239,242,229,225,110,128,49,129,240,225,238,243,233,239,243,235,239,242,229,225,110,128,49,131,243,233,239,243,235,239,242,229,225,110,128,49,130,244,233,246,232,229,226,242,229,119,128,5,154,231,242,225,246,101,128,30,243,232,239,239,107,129,1,180,212,120,225,226,239,246,101,128,30,247,105,5,212,140,212,151,212,162,212,171,212,179,225,242,237,229,238,233,225,110,128,5,117,227,249,242,233,236,236,233,99,128,4,87,235,239,242,229,225,110,128,49,98,238,249,225,238,103,128,38,47,247,238,225,242,237,229,238,233,225,110,128,5,130,237,239,238,239,243,240,225,227,101,128,255,89,111,7,212,220,213,34,213,45,213,55,213,93,213,139,213,148,100,131,5,217,212,230,212,250,213,3,228,225,231,229,243,104,129,251,57,212,241,232,229,226,242,229,119,128,251,57,232,229,226,242,229,119,128,5,217,249,239,100,2,213,11,213,20,232,229,226,242,229,119,128,5,242,240,225,244,225,232,232,229,226,242,229,119,128,251,31,232,233,242,225,231,225,238,97,128,48,136,233,235,239,242,229,225,110,128,49,137,107,2,213,61,213,85,225,244,225,235,225,238,97,129,48,232,213,73,232,225,236,230,247,233,228,244,104,128,255,150,239,242,229,225,110,128,49,91,243,237,225,236,108,2,213,103,213,114,232,233,242,225,231,225,238,97,128,48,135,235,225,244,225,235,225,238,97,129,48,231,213,127,232,225,236,230,247,233,228,244,104,128,255,110,244,231,242,229,229,107,128,3,243,121,2,213,154,213,191,97,2,213,160,213,170,229,235,239,242,229,225,110,128,49,136,107,2,213,176,213,184,239,242,229,225,110,128,49,135,244,232,225,105,128,14,34,233,238,231,244,232,225,105,128,14,13,112,2,213,207,213,214,225,242,229,110,128,36,180,239,231,229,231,242,225,237,237,229,238,105,129,3,122,213,230,231,242,229,229,235,227,237,98,128,3,69,114,129,1,166,213,247,233,238,103,128,30,153,243,245,240,229,242,233,239,114,128,2,184,116,2,214,14,214,21,233,236,228,101,128,30,249,245,242,238,229,100,128,2,142,117,5,214,41,214,52,214,62,214,100,214,232,232,233,242,225,231,225,238,97,128,48,134,233,235,239,242,229,225,110,128,49,140,107,2,214,68,214,92,225,244,225,235,225,238,97,129,48,230,214,80,232,225,236,230,247,233,228,244,104,128,255,149,239,242,229,225,110,128,49,96,115,3,214,108,214,146,214,187,226,233,103,2,214,116,214,127,227,249,242,233,236,236,233,99,128,4,107,233,239,244,233,230,233,229,228,227,249,242,233,236,236,233,99,128,4,109,236,233,244,244,236,101,2,214,157,214,168,227,249,242,233,236,236,233,99,128,4,103,233,239,244,233,230,233,229,228,227,249,242,233,236,236,233,99,128,4,105,237,225,236,108,2,214,196,214,207,232,233,242,225,231,225,238,97,128,48,133,235,225,244,225,235,225,238,97,129,48,229,214,220,232,225,236,230,247,233,228,244,104,128,255,109,249,101,2,214,239,214,248,235,239,242,229,225,110,128,49,139,239,235,239,242,229,225,110,128,49,138,249,97,2,215,9,215,19,226,229,238,231,225,236,105,128,9,223,228,229,246,97,128,9,95,122,142,0,122,215,58,216,66,216,77,216,120,216,147,217,182,218,34,218,76,218,88,218,100,218,128,218,136,218,152,218,161,97,10,215,80,215,91,215,98,215,105,215,116,215,194,215,224,215,235,216,15,216,27,225,242,237,229,238,233,225,110,128,5,102,227,245,244,101,128,1,122,228,229,246,97,128,9,91,231,245,242,237,245,235,232,105,128,10,91,104,4,215,126,215,135,215,149,215,179,225,242,225,226,233,99,128,6,56,230,233,238,225,236,225,242,225,226,233,99,128,254,198,105,2,215,155,215,170,238,233,244,233,225,236,225,242,225,226,233,99,128,254,199,242,225,231,225,238,97,128,48,86,237,229,228,233,225,236,225,242,225,226,233,99,128,254,200,233,110,2,215,201,215,210,225,242,225,226,233,99,128,6,50,230,233,238,225,236,225,242,225,226,233,99,128,254,176,235,225,244,225,235,225,238,97,128,48,182,241,229,102,2,215,243,216,1,231,225,228,239,236,232,229,226,242,229,119,128,5,149,241,225,244,225,238,232,229,226,242,229,119,128,5,148,242,241,225,232,229,226,242,229,119,128,5,152,249,233,110,130,5,214,216,37,216,57,228,225,231,229,243,104,129,251,54,216,48,232,229,226,242,229,119,128,251,54,232,229,226,242,229,119,128,5,214,226,239,240,239,237,239,230,111,128,49,23,99,3,216,85,216,92,216,114,225,242,239,110,128,1,126,233,242,99,2,216,100,216,105,236,101,128,36,233,245,237,230,236,229,120,128,30,145,245,242,108,128,2,145,228,239,116,130,1,124,216,130,216,139,225,227,227,229,238,116,128,1,124,226,229,236,239,119,128,30,147,101,6,216,161,216,172,216,215,216,226,216,237,217,177,227,249,242,233,236,236,233,99,128,4,55,100,2,216,178,216,197,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,153,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,223,232,233,242,225,231,225,238,97,128,48,92,235,225,244,225,235,225,238,97,128,48,188,242,111,140,0,48,217,10,217,19,217,29,217,36,217,61,217,74,217,85,217,97,217,108,217,118,217,129,217,136,225,242,225,226,233,99,128,6,96,226,229,238,231,225,236,105,128,9,230,228,229,246,97,128,9,102,231,117,2,217,43,217,52,234,225,242,225,244,105,128,10,230,242,237,245,235,232,105,128,10,102,232,225,227,235,225,242,225,226,233,99,128,6,96,233,238,230,229,242,233,239,114,128,32,128,237,239,238,239,243,240,225,227,101,128,255,16,239,236,228,243,244,249,236,101,128,247,48,240,229,242,243,233,225,110,128,6,240,243,245,240,229,242,233,239,114,128,32,112,244,232,225,105,128,14,80,247,233,228,244,104,3,217,148,217,157,217,169,234,239,233,238,229,114,128,254,255,238,239,238,234,239,233,238,229,114,128,32,12,243,240,225,227,101,128,32,11,244,97,128,3,182,104,2,217,188,217,199,226,239,240,239,237,239,230,111,128,49,19,101,4,217,209,217,220,217,236,217,247,225,242,237,229,238,233,225,110,128,5,106,226,242,229,246,229,227,249,242,233,236,236,233,99,128,4,194,227,249,242,233,236,236,233,99,128,4,54,100,2,217,253,218,16,229,243,227,229,238,228,229,242,227,249,242,233,236,236,233,99,128,4,151,233,229,242,229,243,233,243,227,249,242,233,236,236,233,99,128,4,221,105,3,218,42,218,53,218,64,232,233,242,225,231,225,238,97,128,48,88,235,225,244,225,235,225,238,97,128,48,184,238,239,242,232,229,226,242,229,119,128,5,174,236,233,238,229,226,229,236,239,119,128,30,149,237,239,238,239,243,240,225,227,101,128,255,90,111,2,218,106,218,117,232,233,242,225,231,225,238,97,128,48,94,235,225,244,225,235,225,238,97,128,48,190,240,225,242,229,110,128,36,181,242,229,244,242,239,230,236,229,248,232,239,239,107,128,2,144,243,244,242,239,235,101,128,1,182,117,2,218,167,218,178,232,233,242,225,231,225,238,97,128,48,90,235,225,244,225,235,225,238,97,128,48,186,0,0,0,24,0,0,0,102,0,0,0,0,0,0,0,96,1,0,0,56,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,7,0,0,0,1,0,0,0,8,0,0,80,0,0,0,0,8,0,0,16,0,0,0,84,8,0,0,115,0,0,0,82,7,0,0,31,0,0,0,0,8,0,0,112,0,0,0,0,8,0,0,48,0,0,0,0,9,0,0,192,0,0,0,80,7,0,0,10,0,0,0,0,8,0,0,96,0,0,0,0,8,0,0,32,0,0,0,0,9,0,0,160,0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,128,0,0,0,0,8,0,0,64,0,0,0,0,9,0,0,224,0,0,0,80,7,0,0,6,0,0,0,0,8,0,0,88,0,0,0,0,8,0,0,24,0,0,0,0,9,0,0,144,0,0,0,83,7,0,0,59,0,0,0,0,8,0,0,120,0,0,0,0,8,0,0,56,0,0,0,0,9,0,0,208,0,0,0,81,7,0,0,17,0,0,0,0,8,0,0,104,0,0,0,0,8,0,0,40,0,0,0,0,9,0,0,176,0,0,0,0,8,0,0,8,0,0,0,0,8,0,0,136,0,0,0,0,8,0,0,72,0,0,0,0,9,0,0,240,0,0,0,80,7,0,0,4,0,0,0,0,8,0,0,84,0,0,0,0,8,0,0,20,0,0,0,85,8,0,0,227,0,0,0,83,7,0,0,43,0,0,0,0,8,0,0,116,0,0,0,0,8,0,0,52,0,0,0,0,9,0,0,200,0,0,0,81,7,0,0,13,0,0,0,0,8,0,0,100,0,0,0,0,8,0,0,36,0,0,0,0,9,0,0,168,0,0,0,0,8,0,0,4,0,0,0,0,8,0,0,132,0,0,0,0,8,0,0,68,0,0,0,0,9,0,0,232,0,0,0,80,7,0,0,8,0,0,0,0,8,0,0,92,0,0,0,0,8,0,0,28,0,0,0,0,9,0,0,152,0,0,0,84,7,0,0,83,0,0,0,0,8,0,0,124,0,0,0,0,8,0,0,60,0,0,0,0,9,0,0,216,0,0,0,82,7,0,0,23,0,0,0,0,8,0,0,108,0,0,0,0,8,0,0,44,0,0,0,0,9,0,0,184,0,0,0,0,8,0,0,12,0,0,0,0,8,0,0,140,0,0,0,0,8,0,0,76,0,0,0,0,9,0,0,248,0,0,0,80,7,0,0,3,0,0,0,0,8,0,0,82,0,0,0,0,8,0,0,18,0,0,0,85,8,0,0,163,0,0,0,83,7,0,0,35,0,0,0,0,8,0,0,114,0,0,0,0,8,0,0,50,0,0,0,0,9,0,0,196,0,0,0,81,7,0,0,11,0,0,0,0,8,0,0,98,0,0,0,0,8,0,0,34,0,0,0,0,9,0,0,164,0,0,0,0,8,0,0,2,0,0,0,0,8,0,0,130,0,0,0,0,8,0,0,66,0,0,0,0,9,0,0,228,0,0,0,80,7,0,0,7,0,0,0,0,8,0,0,90,0,0,0,0,8,0,0,26,0,0,0,0,9,0,0,148,0,0,0,84,7,0,0,67,0,0,0,0,8,0,0,122,0,0,0,0,8,0,0,58,0,0,0,0,9,0,0,212,0,0,0,82,7,0,0,19,0,0,0,0,8,0,0,106,0,0,0,0,8,0,0,42,0,0,0,0,9,0,0,180,0,0,0,0,8,0,0,10,0,0,0,0,8,0,0,138,0,0,0,0,8,0,0,74,0,0,0,0,9,0,0,244,0,0,0,80,7,0,0,5,0,0,0,0,8,0,0,86,0,0,0,0,8,0,0,22,0,0,0,192,8,0,0,0,0,0,0,83,7,0,0,51,0,0,0,0,8,0,0,118,0,0,0,0,8,0,0,54,0,0,0,0,9,0,0,204,0,0,0,81,7,0,0,15,0,0,0,0,8,0,0,102,0,0,0,0,8,0,0,38,0,0,0,0,9,0,0,172,0,0,0,0,8,0,0,6,0,0,0,0,8,0,0,134,0,0,0,0,8,0,0,70,0,0,0])
.concat([0,9,0,0,236,0,0,0,80,7,0,0,9,0,0,0,0,8,0,0,94,0,0,0,0,8,0,0,30,0,0,0,0,9,0,0,156,0,0,0,84,7,0,0,99,0,0,0,0,8,0,0,126,0,0,0,0,8,0,0,62,0,0,0,0,9,0,0,220,0,0,0,82,7,0,0,27,0,0,0,0,8,0,0,110,0,0,0,0,8,0,0,46,0,0,0,0,9,0,0,188,0,0,0,0,8,0,0,14,0,0,0,0,8,0,0,142,0,0,0,0,8,0,0,78,0,0,0,0,9,0,0,252,0,0,0,96,7,0,0,0,1,0,0,0,8,0,0,81,0,0,0,0,8,0,0,17,0,0,0,85,8,0,0,131,0,0,0,82,7,0,0,31,0,0,0,0,8,0,0,113,0,0,0,0,8,0,0,49,0,0,0,0,9,0,0,194,0,0,0,80,7,0,0,10,0,0,0,0,8,0,0,97,0,0,0,0,8,0,0,33,0,0,0,0,9,0,0,162,0,0,0,0,8,0,0,1,0,0,0,0,8,0,0,129,0,0,0,0,8,0,0,65,0,0,0,0,9,0,0,226,0,0,0,80,7,0,0,6,0,0,0,0,8,0,0,89,0,0,0,0,8,0,0,25,0,0,0,0,9,0,0,146,0,0,0,83,7,0,0,59,0,0,0,0,8,0,0,121,0,0,0,0,8,0,0,57,0,0,0,0,9,0,0,210,0,0,0,81,7,0,0,17,0,0,0,0,8,0,0,105,0,0,0,0,8,0,0,41,0,0,0,0,9,0,0,178,0,0,0,0,8,0,0,9,0,0,0,0,8,0,0,137,0,0,0,0,8,0,0,73,0,0,0,0,9,0,0,242,0,0,0,80,7,0,0,4,0,0,0,0,8,0,0,85,0,0,0,0,8,0,0,21,0,0,0,80,8,0,0,2,1,0,0,83,7,0,0,43,0,0,0,0,8,0,0,117,0,0,0,0,8,0,0,53,0,0,0,0,9,0,0,202,0,0,0,81,7,0,0,13,0,0,0,0,8,0,0,101,0,0,0,0,8,0,0,37,0,0,0,0,9,0,0,170,0,0,0,0,8,0,0,5,0,0,0,0,8,0,0,133,0,0,0,0,8,0,0,69,0,0,0,0,9,0,0,234,0,0,0,80,7,0,0,8,0,0,0,0,8,0,0,93,0,0,0,0,8,0,0,29,0,0,0,0,9,0,0,154,0,0,0,84,7,0,0,83,0,0,0,0,8,0,0,125,0,0,0,0,8,0,0,61,0,0,0,0,9,0,0,218,0,0,0,82,7,0,0,23,0,0,0,0,8,0,0,109,0,0,0,0,8,0,0,45,0,0,0,0,9,0,0,186,0,0,0,0,8,0,0,13,0,0,0,0,8,0,0,141,0,0,0,0,8,0,0,77,0,0,0,0,9,0,0,250,0,0,0,80,7,0,0,3,0,0,0,0,8,0,0,83,0,0,0,0,8,0,0,19,0,0,0,85,8,0,0,195,0,0,0,83,7,0,0,35,0,0,0,0,8,0,0,115,0,0,0,0,8,0,0,51,0,0,0,0,9,0,0,198,0,0,0,81,7,0,0,11,0,0,0,0,8,0,0,99,0,0,0,0,8,0,0,35,0,0,0,0,9,0,0,166,0,0,0,0,8,0,0,3,0,0,0,0,8,0,0,131,0,0,0,0,8,0,0,67,0,0,0,0,9,0,0,230,0,0,0,80,7,0,0,7,0,0,0,0,8,0,0,91,0,0,0,0,8,0,0,27,0,0,0,0,9,0,0,150,0,0,0,84,7,0,0,67,0,0,0,0,8,0,0,123,0,0,0,0,8,0,0,59,0,0,0,0,9,0,0,214,0,0,0,82,7,0,0,19,0,0,0,0,8,0,0,107,0,0,0,0,8,0,0,43,0,0,0,0,9,0,0,182,0,0,0,0,8,0,0,11,0,0,0,0,8,0,0,139,0,0,0,0,8,0,0,75,0,0,0,0,9,0,0,246,0,0,0,80,7,0,0,5,0,0,0,0,8,0,0,87,0,0,0,0,8,0,0,23,0,0,0,192,8,0,0,0,0,0,0,83,7,0,0,51,0,0,0,0,8,0,0,119,0,0,0,0,8,0,0,55,0,0,0,0,9,0,0,206,0,0,0,81,7,0,0,15,0,0,0,0,8,0,0,103,0,0,0,0,8,0,0,39,0,0,0,0,9,0,0,174,0,0,0,0,8,0,0,7,0,0,0,0,8,0,0,135,0,0,0,0,8,0,0,71,0,0,0,0,9,0,0,238,0,0,0,80,7,0,0,9,0,0,0,0,8,0,0,95,0,0,0,0,8,0,0,31,0,0,0,0,9,0,0,158,0,0,0,84,7,0,0,99,0,0,0,0,8,0,0,127,0,0,0,0,8,0,0,63,0,0,0,0,9,0,0,222,0,0,0,82,7,0,0,27,0,0,0,0,8,0,0,111,0,0,0,0,8,0,0,47,0,0,0,0,9,0,0,190,0,0,0,0,8,0,0,15,0,0,0,0,8,0,0,143,0,0,0,0,8,0,0,79,0,0,0,0,9,0,0,254,0,0,0,96,7,0,0,0,1,0,0,0,8,0,0,80,0,0,0,0,8,0,0,16,0,0,0,84,8,0,0,115,0,0,0,82,7,0,0,31,0,0,0,0,8,0,0,112,0,0,0,0,8,0,0,48,0,0,0,0,9,0,0,193,0,0,0,80,7,0,0,10,0,0,0,0,8,0,0,96,0,0,0,0,8,0,0,32,0,0,0,0,9,0,0,161,0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,128,0,0,0,0,8,0,0,64,0,0,0,0,9,0,0,225,0,0,0,80,7,0,0,6,0,0,0,0,8,0,0,88,0,0,0,0,8,0,0,24,0,0,0,0,9,0,0,145,0,0,0,83,7,0,0,59,0,0,0,0,8,0,0,120,0,0,0,0,8,0,0,56,0,0,0,0,9,0,0,209,0,0,0,81,7,0,0,17,0,0,0,0,8,0,0,104,0,0,0,0,8,0,0,40,0,0,0,0,9,0,0,177,0,0,0,0,8,0,0,8,0,0,0,0,8,0,0,136,0,0,0,0,8,0,0,72,0,0,0,0,9,0,0,241,0,0,0,80,7,0,0,4,0,0,0,0,8,0,0,84,0,0,0,0,8,0,0,20,0,0,0,85,8,0,0,227,0,0,0,83,7,0,0,43,0,0,0,0,8,0,0,116,0,0,0,0,8,0,0,52,0,0,0,0,9,0,0,201,0,0,0,81,7,0,0,13,0,0,0,0,8,0,0,100,0,0,0,0,8,0,0,36,0,0,0,0,9,0,0,169,0,0,0,0,8,0,0,4,0,0,0,0,8,0,0,132,0,0,0,0,8,0,0,68,0,0,0,0,9,0,0,233,0,0,0,80,7,0,0,8,0,0,0,0,8,0,0,92,0,0,0,0,8,0,0,28,0,0,0,0,9,0,0,153,0,0,0,84,7,0,0,83,0,0,0,0,8,0,0,124,0,0,0,0,8,0,0,60,0,0,0,0,9,0,0,217,0,0,0,82,7,0,0,23,0,0,0,0,8,0,0,108,0,0,0,0,8,0,0,44,0,0,0,0,9,0,0,185,0,0,0,0,8,0,0,12,0,0,0,0,8,0,0,140,0,0,0,0,8,0,0,76,0,0,0,0,9,0,0,249,0,0,0,80,7,0,0,3,0,0,0,0,8,0,0,82,0,0,0,0,8,0,0,18,0,0,0,85,8,0,0,163,0,0,0,83,7,0,0,35,0,0,0,0,8,0,0,114,0,0,0,0,8,0,0,50,0,0,0,0,9,0,0,197,0,0,0,81,7,0,0,11,0,0,0,0,8,0,0,98,0,0,0,0,8,0,0,34,0,0,0,0,9,0,0,165,0,0,0,0,8,0,0,2,0,0,0,0,8,0,0,130,0,0,0,0,8,0,0,66,0,0,0,0,9,0,0,229,0,0,0,80,7,0,0,7,0,0,0,0,8,0,0,90,0,0,0,0,8,0,0,26,0,0,0,0,9,0,0,149,0,0,0,84,7,0,0,67,0,0,0,0,8,0,0,122,0,0,0,0,8,0,0,58,0,0,0,0,9,0,0,213,0,0,0,82,7,0,0,19,0,0,0,0,8,0,0,106,0,0,0,0,8,0,0,42,0,0,0,0,9,0,0,181,0,0,0,0,8,0,0,10,0,0,0,0,8,0,0,138,0,0,0,0,8,0,0,74,0,0,0,0,9,0,0,245,0,0,0,80,7,0,0,5,0,0,0,0,8,0,0,86,0,0,0,0,8,0,0,22,0,0,0,192,8,0,0,0,0,0,0,83,7,0,0,51,0,0,0,0,8,0,0,118,0,0,0,0,8,0,0,54,0,0,0,0,9,0,0,205,0,0,0,81,7,0,0,15,0,0,0,0,8,0,0,102,0,0,0,0,8,0,0,38,0,0,0,0,9,0,0,173,0,0,0,0,8,0,0,6,0,0,0,0,8,0,0,134,0,0,0,0,8,0,0,70,0,0,0,0,9,0,0,237,0,0,0,80,7,0,0,9,0,0,0,0,8,0,0,94,0,0,0,0,8,0,0,30,0,0,0,0,9,0,0,157,0,0,0,84,7,0,0,99,0,0,0,0,8,0,0,126,0,0,0,0,8,0,0,62,0,0,0,0,9,0,0,221,0,0,0,82,7,0,0,27,0,0,0,0,8,0,0,110,0,0,0,0,8,0,0,46,0,0,0,0,9,0,0,189,0,0,0,0,8,0,0,14,0,0,0,0,8,0,0,142,0,0,0,0,8,0,0,78,0,0,0,0,9,0,0,253,0,0,0,96,7,0,0,0,1,0,0,0,8,0,0,81,0,0,0,0,8,0,0,17,0,0,0,85,8,0,0,131,0,0,0,82,7,0,0,31,0,0,0,0,8,0,0,113,0,0,0,0,8,0,0,49,0,0,0,0,9,0,0,195,0,0,0,80,7,0,0,10,0,0,0,0,8,0,0,97,0,0,0,0,8,0,0,33,0,0,0,0,9,0,0,163,0,0,0,0,8,0,0,1,0,0,0,0,8,0,0,129,0,0,0,0,8,0,0,65,0,0,0,0,9,0,0,227,0,0,0,80,7,0,0,6,0,0,0,0,8,0,0,89,0,0,0,0,8,0,0,25,0,0,0,0,9,0,0,147,0,0,0,83,7,0,0,59,0,0,0,0,8,0,0,121,0,0,0,0,8,0,0,57,0,0,0,0,9,0,0,211,0,0,0,81,7,0,0,17,0,0,0,0,8,0,0,105,0,0,0,0,8,0,0,41,0,0,0,0,9,0,0,179,0,0,0,0,8,0,0,9,0,0,0,0,8,0,0,137,0,0,0,0,8,0,0,73,0,0,0,0,9,0,0,243,0,0,0,80,7,0,0,4,0,0,0,0,8,0,0,85,0,0,0,0,8,0,0,21,0,0,0,80,8,0,0,2,1,0,0,83,7,0,0,43,0,0,0,0,8,0,0,117,0,0,0,0,8,0,0,53,0,0,0,0,9,0,0,203,0,0,0,81,7,0,0,13,0,0,0,0,8,0,0,101,0,0,0,0,8,0,0,37,0,0,0,0,9,0,0,171,0,0,0,0,8,0,0,5,0,0,0,0,8,0,0,133,0,0,0,0,8,0,0,69,0,0,0,0,9,0,0,235,0,0,0,80,7,0,0,8,0,0,0,0,8,0,0,93,0,0,0,0,8,0,0,29,0,0,0,0,9,0,0,155,0,0,0,84,7,0,0,83,0,0,0,0,8,0,0,125,0,0,0,0,8,0,0,61,0,0,0,0,9,0,0,219,0,0,0,82,7,0,0,23,0,0,0,0,8,0,0,109,0,0,0,0,8,0,0,45,0,0,0,0,9,0,0,187,0,0,0,0,8,0,0,13,0,0,0,0,8,0,0,141,0,0,0,0,8,0,0,77,0,0,0,0,9,0,0,251,0,0,0,80,7,0,0,3,0,0,0,0,8,0,0,83,0,0,0,0,8,0,0,19,0,0,0,85,8,0,0,195,0,0,0,83,7,0,0,35,0,0,0,0,8,0,0,115,0,0,0,0,8,0,0,51,0,0,0,0,9,0,0,199,0,0,0,81,7,0,0,11,0,0,0,0,8,0,0,99,0,0,0,0,8,0,0,35,0,0,0,0,9,0,0,167,0,0,0,0,8,0,0,3,0,0,0,0,8,0,0,131,0,0,0,0,8,0,0,67,0,0,0,0,9,0,0,231,0,0,0,80,7,0,0,7,0,0,0,0,8,0,0,91,0,0,0,0,8,0,0,27,0,0,0,0,9,0,0,151,0,0,0,84,7,0,0,67,0,0,0,0,8,0,0,123,0,0,0,0,8,0,0,59,0,0,0,0,9,0,0,215,0,0,0,82,7,0,0,19,0,0,0,0,8,0,0,107,0,0,0,0,8,0,0,43,0,0,0,0,9,0,0,183,0,0,0,0,8,0,0,11,0,0,0,0,8,0,0,139,0,0,0,0,8,0,0,75,0,0,0,0,9,0,0,247,0,0,0,80,7,0,0,5,0,0,0,0,8,0,0,87,0,0,0,0,8,0,0,23,0,0,0,192,8,0,0,0,0,0,0,83,7,0,0,51,0,0,0,0,8,0,0,119,0,0,0,0,8,0,0,55,0,0,0,0,9,0,0,207,0,0,0,81,7,0,0,15,0,0,0,0,8,0,0,103,0,0,0,0,8,0,0,39,0,0,0,0,9,0,0,175,0,0,0,0,8,0,0,7,0,0,0,0,8,0,0,135,0,0,0,0,8,0,0,71,0,0,0,0,9,0,0,239,0,0,0,80,7,0,0,9,0,0,0,0,8,0,0,95,0,0,0,0,8,0,0,31,0,0,0,0,9,0,0,159,0,0,0,84,7,0,0,99,0,0,0,0,8,0,0,127,0,0,0,0,8,0,0,63,0,0,0,0,9,0,0,223,0,0,0,82,7,0,0,27,0,0,0,0,8,0,0,111,0,0,0,0,8,0,0,47,0,0,0,0,9,0,0,191,0,0,0,0,8,0,0,15,0,0,0,0,8,0,0,143,0,0,0,0,8,0,0,79,0,0,0,0,9,0,0,255,0,0,0,80,5,0,0,1,0,0,0,87,5,0,0,1,1,0,0,83,5,0,0,17,0,0,0,91,5,0,0,1,16,0,0,81,5,0,0,5,0,0,0,89,5,0,0,1,4,0,0,85,5,0,0,65,0,0,0,93,5,0,0,1,64,0,0,80,5,0,0,3,0,0,0,88,5,0,0,1,2,0,0,84,5,0,0,33,0,0,0,92,5,0,0,1,32,0,0,82,5,0,0,9,0,0,0,90,5,0,0,1,8,0,0,86,5,0,0,129,0,0,0,192,5,0,0,1,96,0,0,80,5,0,0,2,0,0,0,87,5,0,0,129,1,0,0,83,5,0,0,25,0,0,0,91,5,0,0,1,24,0,0,81,5,0,0,7,0,0,0,89,5,0,0,1,6,0,0,85,5,0,0,97,0,0,0,93,5,0,0,1,96,0,0,80,5,0,0,4,0,0,0,88,5,0,0,1,3,0,0,84,5,0,0,49,0,0,0,92,5,0,0,1,48,0,0,82,5,0,0,13,0,0,0,90,5,0,0,1,12,0,0,86,5,0,0,193,0,0,0,192,5,0,0,1,96,0,0,95,112,137,0,255,9,47,15,10,0,0,0,100,0,0,0,232,3,0,0,16,39,0,0,160,134,1,0,64,66,15,0,128,150,152,0,0,225,245,5,0,0,0,0,0,0,255,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,0,0,0,0,112,0,0,0,112,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,11,0,0,0,13,0,0,0,15,0,0,0,17,0,0,0,19,0,0,0,23,0,0,0,27,0,0,0,31,0,0,0,35,0,0,0,43,0,0,0,51,0,0,0,59,0,0,0,67,0,0,0,83,0,0,0,99,0,0,0,115,0,0,0,131,0,0,0,163,0,0,0,195,0,0,0,227,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,7,0,0,0,9,0,0,0,13,0,0,0,17,0,0,0,25,0,0,0,33,0,0,0,49,0,0,0,65,0,0,0,97,0,0,0,129,0,0,0,193,0,0,0,1,1,0,0,129,1,0,0,1,2,0,0,1,3,0,0,1,4,0,0,1,6,0,0,1,8,0,0,1,12,0,0,1,16,0,0,1,24,0,0,1,32,0,0,1,48,0,0,1,64,0,0,1,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,5,0,0,0,6,0,0,0,6,0,0,0,7,0,0,0,7,0,0,0,8,0,0,0,8,0,0,0,9,0,0,0,9,0,0,0,10,0,0,0,10,0,0,0,11,0,0,0,11,0,0,0,12,0,0,0,12,0,0,0,13,0,0,0,13,0,0,0,104,99,1,0,232,97,1,0,40,96,1,0,240,39,1,0,72,94,1,0,248,39,1,0,152,92,1,0,16,40,1,0,0,0,0,0,0,0,0,0,158,0,0,0,0,0,0,0,98,0,0,0,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,102,0,0,0,94,0,0,0,0,0,0,0,200,85,1,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,79,1,0,0,0,0,0,3,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,74,1,0,0,0,0,0,2,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,205,1,0,0,0,0,0,5,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,201,1,0,0,0,0,0,5,0,0,0,0,0,0,0,16,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,176,197,1,0,0,0,0,0,2,0,0,0,0,0,0,0,20,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,194,1,0,0,0,0,0,2,0,0,0,0,0,0,0,72,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,190,1,0,0,0,0,0,2,0,0,0,0,0,0,0,144,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,188,1,0,0,0,0,0,2,0,0,0,0,0,0,0,148,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,152,186,1,0,0,0,0,0,2,0,0,0,0,0,0,0,152,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,183,1,0,0,0,0,0,2,0,0,0,0,0,0,0,156,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,180,1,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,176,1,0,3,0,0,0,5,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,173,1,0,3,0,0,0,5,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,170,1,0,3,0,0,0,5,0,0,0,0,0,0,0,12,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,167,1,0,3,0,0,0,5,0,0,0,0,0,0,0,16,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,164,1,0,3,0,0,0,2,0,0,0,0,0,0,0,20,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,161,1,0,3,0,0,0,1,0,0,0,0,0,0,0,24,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,159,1,0,3,0,0,0,2,0,0,0,0,0,0,0,26,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,157,1,0,3,0,0,0,2,0,0,0,0,0,0,0,28,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,155,1,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,152,1,0,1,0,0,0,2,0,0,0,0,0,0,0,212,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,149,1,0,1,0,0,0,2,0,0,0,0,0,0,0,213,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,146,1,0,1,0,0,0,2,0,0,0,0,0,0,0,244,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,144,1,0,1,0,0,0,2,0,0,0,0,0,0,0,248,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,141,1,0,1,0,0,0,2,0,0,0,0,0,0,0,240,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,139,1,0,1,0,0,0,2,0,0,0,0,0,0,0,196,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,137,1,0,1,0,0,0,3,0,0,0,0,0,0,0,200,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,135,1,0,1,0,0,0,3,0,0,0,0,0,0,0,204,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,1,0,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,132,1,0,4,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131,1,0,4,0,0,0,2,0,0,0,0,0,0,0,184,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,1,0,4,0,0,0,2,0,0,0,0,0,0,0,188,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,128,1,0,4,0,0,0,4,0,0,0,0,0,0,0,108,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,127,1,0,4,0,0,0,2,0,0,0,0,0,0,0,112,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,125,1,0,4,0,0,0,2,0,0,0,0,0,0,0,116,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,123,1,0,4,0,0,0,8,0,0,0,0,0,0,0,12,0,0,0,2,0,0,0,14,0,0,0,8,0,0,0,0,0,0,0,192,121,1,0,4,0,0,0,8,0,0,0,0,0,0,0,40,0,0,0,2,0,0,0,10,0,0,0,9,0,0,0,0,0,0,0,120,120,1,0,4,0,0,0,8,0,0,0,0,0,0,0,60,0,0,0,2,0,0,0,14,0,0,0,10,0,0,0,0,0,0,0,64,119,1,0,4,0,0,0,8,0,0,0,0,0,0,0,88,0,0,0,2,0,0,0,10,0,0,0,11,0,0,0,0,0,0,0,208,117,1,0,4,0,0,0,8,0,0,0,0,0,0,0,120,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,216,115,1,0,4,0,0,0,8,0,0,0,0,0,0,0,122,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,248,114,1,0,4,0,0,0,8,0,0,0,0,0,0,0,192,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,88,113,1,0,4,0,0,0,8,0,0,0,0,0,0,0,128,0,0,0,2,0,0,0,12,0,0,0,124,0,0,0,0,0,0,0,88,112,1,0,4,0,0,0,8,0,0,0,0,0,0,0,154,0,0,0,2,0,0,0,12,0,0,0,125,0,0,0,0,0,0,0,248,110,1,0,4,0,0,0,1,0,0,0,0,0,0,0,126,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,109,1,0,5,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,107,1,0,5,0,0,0,10,0,0,0,136,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,106,1,0,5,0,0,0,10,0,0,0,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,105,1,0,5,0,0,0,10,0,0,0,52,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,16,0,16,4,0,0,16,4,4,0,16,4,8,0,16,4,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,0,52,0,53,0,54,0,55,0,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,64,0,65,0,66,0,67,0,68,0,69,0,70,0,71,0,72,0,73,0,74,0,75,0,76,0,77,0,78,0,79,0,80,0,81,0,82,0,83,0,84,0,85,0,86,0,87,0,88,0,89,0,90,0,91,0,92,0,93,0,94,0,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,0,97,0,98,0,99,0,100,0,101,0,102,0,103,0,104,0,105,0,106,0,107,0,108,0,109,0,110,0,0,0,111,0,112,0,113,0,114,0,0,0,115,0,116,0,117,0,118,0,119,0,120,0,121,0,122,0,0,0,123,0,0,0,124,0,125,0,126,0,127,0,128,0,129,0,130,0,131,0,0,0,132,0,133,0,0,0,134,0,135,0,136,0,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,0,0,139,0,0,0,0,0,0,0,0,0,140,0,141,0,142,0,143,0,0,0,0,0,0,0,0,0,0,0,144,0,0,0,0,0,0,0,145,0,0,0,0,0,146,0,147,0,148,0,149,0,0,0,0,0,0,0,0,0,216,85,1,0,0,80,1,0,216,74,1,0,168,49,1,0,200,205,1,0,160,49,1,0,184,201,1,0,192,49,1,0,192,197,1,0,200,49,1,0,224,194,1,0,208,49,1,0,0,0,0,0,0,0,0,0,74,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,122,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,180,0,0,0,62,1,0,0,0,0,0,0,24,0,0,0,226,0,0,0,86,0,0,0,0,0,0,0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,0,52,0,53,0,54,0,55,0,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,64,0,65,0,66,0,67,0,68,0,69,0,70,0,71,0,72,0,73,0,74,0,75,0,76,0,77,0,78,0,79,0,80,0,81,0,82,0,83,0,84,0,85,0,86,0,87,0,88,0,89,0,90,0,91,0,92,0,93,0,94,0,95,0,96,0,97,0,98,0,99,0,100,0,101,0,102,0,103,0,104,0,105,0,106,0,107,0,108,0,109,0,110,0,111,0,112,0,113,0,114,0,115,0,116,0,117,0,118,0,119,0,120,0,121,0,122,0,123,0,124,0,125,0,126,0,127,0,128,0,129,0,130,0,131,0,132,0,133,0,134,0,135,0,136,0,137,0,138,0,139,0,140,0,141,0,142,0,143,0,144,0,145,0,146,0,147,0,148,0,149,0,150,0,151,0,152,0,153,0,154,0,155,0,156,0,157,0,158,0,159,0,160,0,161,0,162,0,163,0,164,0,165,0,166,0,167,0,168,0,169,0,170,0,171,0,172,0,173,0,174,0,175,0,176,0,177,0,178,0,179,0,180,0,181,0,182,0,183,0,184,0,185,0,186,0,187,0,188,0,189,0,190,0,191,0,192,0,193,0,194,0,195,0,196,0,197,0,198,0,199,0,200,0,201,0,202,0,203,0,204,0,205,0,206,0,207,0,208,0,209,0,210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,219,0,220,0,221,0,222,0,223,0,224,0,225,0,226,0,227,0,228,0,0,0,0,0,0,0,4,0,4,0,8,1,16,0,8,1,17,0,8,1,18,0,8,1,19,0,0,0,0,0,4,0,0,0,0,16,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,16,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,17,0,0,8,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,2,16,0,0,12,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,3,16,0,0,16,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,16,0,0,20,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,1,17,0,0,24,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,17,0,0,28,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,17,0,0,32,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,17,0,0,36,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,5,17,0,0,40,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,6,17,0,0,44,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,7,17,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,13,16,0,0,80,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,5,16,0,0,0,0,0,0,0,0,0,0,226,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,8,17,0,0,100,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,15,16,0,0,104,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,16,16,0,0,108,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,17,16,0,0,112,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,18,16,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,20,17,0,0,124,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,21,17,0,0,128,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,30,17,0,0,0,0,0,0,0,0,0,0,148,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,31,17,0,0,144,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,32,17,0,0,148,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,33,17,0,0,152,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,34,17,0,0,156,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,17,0,0,160,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,36,17,0,0,164,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,37,17,0,0,168,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,38,17,0,0,172,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,32,0,0,4,0,0,0,4,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,6,0,0,0,7,32,0,0,60,0,0,0,4,0,0,0,0,0,0,0,10,0,0,0,1,0,0,0,6,0,0,0,8,32,0,0,100,0,0,0,4,0,0,0,0,0,0,0,14,0,0,0,2,0,0,0,6,0,0,0,9,32,0,0,156,0,0,0,4,0,0,0,0,0,0,0,10,0,0,0,3,0,0,0,3,0,0,0,9,33,0,0,196,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,10,33,0,0,200,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,33,0,0,204,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,10,32,0,0,208,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,32,0,0,212,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,12,33,0,0,220,0,0,0,4,0,0,0,0,0,0,0,13,0,0,0,216,0,0,0,6,0,0,0,13,33,0,0,16,1,0,0,4,0,0,0,0,0,0,0,13,0,0,0,217,0,0,0,5,0,0,0,14,33,0,0,68,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,15,33,0,0,72,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,16,33,0,0,76,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,17,33,0,0,80,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,18,33,0,0,84,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,19,33,0,0,88,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,19,32,0,0,92,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,20,32,0,0,96,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,21,32,0,0,100,1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,231,0,232,0,235,0,236,0,237,0,238,0,13,0,14,0,15,0,99,0,239,0,240,0,241,0,242,0,243,0,244,0,245,0,246,0,247,0,248,0,27,0,28,0,249,0,250,0,251,0,253,0,254,0,255,0,0,1,1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,109,0,110,0,11,1,12,1,13,1,14,1,16,1,44,1,45,1,46,1,49,1,58,1,59,1,158,0,155,0,163,0,64,1,65,1,66,1,67,1,68,1,69,1,70,1,150,0,164,0,169,0,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,1,87,1,88,1,89,1,90,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,229,0,230,0,0,0,231,0,232,0,233,0,234,0,235,0,236,0,237,0,238,0,13,0,14,0,15,0,99,0,239,0,240,0,241,0,242,0,243,0,244,0,245,0,246,0,247,0,248,0,27,0,28,0,249,0,250,0,251,0,252,0,0,0,253,0,254,0,255,0,0,1,1,1,0,0,0,0,0,0,2,1,0,0,0,0,3,1,4,1,5,1,6,1,0,0,0,0,7,1,8,1,9,1,0,0,10,1,109,0,110,0,11,1,12,1,13,1,0,0,14,1,15,1,16,1,17,1,18,1,19,1,20,1,21,1,22,1,23,1,24,1,25,1,26,1,27,1,28,1,29,1,30,1,31,1,32,1,33,1,34,1,35,1,36,1,37,1,38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,1,49,1,50,1,0,0,0,0,51,1,52,1,53,1,54,1,55,1,0,0,56,1,0,0,0,0,56,1,0,0,0,0,58,1,59,1,0,0,0,0,60,1,61,1,62,1,0,0,0,0,0,0,158,0,155,0,163,0,63,1,64,1,65,1,66,1,67,1,68,1,69,1,0,0,0,0,70,1,150,0,164,0,169,0,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,1,87,1,88,1,89,1,90,1,91,1,92,1,93,1,94,1,95,1,96,1,97,1,98,1,99,1,100,1,101,1,102,1,103,1,104,1,105,1,106,1,107,1,108,1,109,1,110,1,111,1,112,1,113,1,114,1,115,1,116,1,117,1,118,1,119,1,120,1,121,1,122,1,0,0,1,0,229,0,230,0,231,0,232,0,233,0,234,0,235,0,236,0,237,0,238,0,13,0,14,0,15,0,99,0,239,0,240,0,241,0,242,0,243,0,244,0,245,0,246,0,247,0,248,0,27,0,28,0,249,0,250,0,251,0,252,0,253,0,254,0,255,0,0,1,1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,109,0,110,0,11,1,12,1,13,1,14,1,15,1,16,1,17,1,18,1,19,1,20,1,21,1,22,1,23,1,24,1,25,1,26,1,27,1,28,1,29,1,30,1,31,1,32,1,33,1,34,1,35,1,36,1,37,1,38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,48,1,49,1,50,1,51,1,52,1,53,1,54,1,55,1,56,1,57,1,58,1,59,1,60,1,61,1,62,1,158,0,155,0,163,0,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,150,0,164,0,169,0,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,1,87,1,88,1,89,1,90,1,91,1,92,1,93,1,94,1,95,1,96,1,97,1,98,1,99,1,100,1,101,1,102,1,103,1,104,1,105,1,106,1,107,1,108,1,109,1,110,1,111,1,112,1,113,1,114,1,115,1,116,1,117,1,118,1,119,1,120,1,121,1,122,1,0,0,0,0,1,5,0,0,32,0,0,0,200,140,1,0,0,0,1,0,0,0,2,0,0,0,0,0,98,0,0,0,214,0,0,0,24,0,0,0,56,3,0,0,48,0,0,0,172,0,0,0,62,0,0,0,192,0,0,0,60,0,0,0,186,0,0,0,100,0,0,0,184,1,0,0,30,0,0,0,168,0,0,0,42,0,0,0,74,0,0,0,0,0,0,0,42,0,0,0,208,0,0,0,90,0,0,0,24,0,0,0,90,0,0,0,122,0,0,0,18,1,0,0,250,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,10,0,0,0,118,1,0,0,62,0,0,0,132,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,194,193,193,32,32,32,32,32,32,32,32,32,32,13,7,9,11,128,130,130,130,130,128,128,0,1,2,2,2,1,0,2,1,1,1,2,1,2,1,2,1,4,3,2,2,1,2,4,1,1,0,2,0,0,0,5,4,2,0,0,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,0,0,0,0,8,0,0,0,7,0,0,0,9,0,0,0,6,0,0,0,10,0,0,0,5,0,0,0,11,0,0,0,4,0,0,0,12,0,0,0,3,0,0,0,13,0,0,0,2,0,0,0,14,0,0,0,1,0,0,0,15,0,0,0,0,0,0,0,152,143,1,0,216,62,1,0,192,203,1,0,128,203,1,0,0,0,0,0,0,0,0,0,128,0,0,0,8,0,0,0,1,2,0,0,28,0,0,0,152,143,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,28,1,0,0,168,0,0,0,44,0,0,0,160,0,0,0,110,0,0,0,90,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,168,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,18,0,0,0,24,0,0,0,52,0,0,0,164,1,0,0,142,0,0,0,118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,192,0,0,0,168,133,1,0,0,0,1,0,0,0,2,0,232,71,1,0,194,0,0,0,148,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,34,0,0,0,214,0,0,0,0,0,0,0,72,139,1,0,96,123,1,0,216,108,1,0,248,95,1,0,128,85,1,0,176,79,1,0,128,74,1,0,120,205,1,0,80,201,1,0,152,197,1,0,168,194,1,0,224,190,1,0,208,188,1,0,128,186,1,0,0,183,1,0,16,180,1,0,208,176,1,0,72,173,1,0,152,170,1,0,120,167,1,0,168,164,1,0,136,161,1,0,0,159,1,0,240,156,1,0])
.concat([32,155,1,0,40,152,1,0,112,149,1,0,200,146,1,0,16,144,1,0,16,141,1,0,176,139,1,0,72,137,1,0,152,135,1,0,240,133,1,0,56,132,1,0,248,130,1,0,248,129,1,0,104,128,1,0,64,127,1,0,32,125,1,0,224,123,1,0,184,121,1,0,112,120,1,0,56,119,1,0,192,117,1,0,192,115,1,0,232,114,1,0,72,113,1,0,40,194,1,0,72,112,1,0,232,110,1,0,8,109,1,0,72,107,1,0,56,106,1,0,24,105,1,0,192,103,1,0,176,102,1,0,112,101,1,0,72,100,1,0,96,99,1,0,224,97,1,0,32,96,1,0,64,94,1,0,144,92,1,0,128,91,1,0,168,90,1,0,32,90,1,0,136,89,1,0,160,88,1,0,240,87,1,0,24,87,1,0,176,85,1,0,152,84,1,0,248,83,1,0,168,66,1,0,192,65,1,0,200,67,1,0,136,66,1,0,0,0,0,0,0,0,0,0,32,0,0,0,127,0,0,0,160,0,0,0,255,0,0,0,0,1,0,0,127,1,0,0,128,1,0,0,79,2,0,0,80,2,0,0,175,2,0,0,176,2,0,0,255,2,0,0,0,3,0,0,111,3,0,0,112,3,0,0,255,3,0,0,0,4,0,0,255,4,0,0,0,5,0,0,47,5,0,0,0,29,0,0,127,29,0,0,128,29,0,0,191,29,0,0,192,29,0,0,255,29,0,0,0,30,0,0,255,30,0,0,0,31,0,0,255,31,0,0,0,32,0,0,111,32,0,0,112,32,0,0,159,32,0,0,160,32,0,0,207,32,0,0,80,33,0,0,143,33,0,0,96,36,0,0,255,36,0,0,96,44,0,0,127,44,0,0,224,45,0,0,255,45,0,0,64,166,0,0,159,166,0,0,32,167,0,0,255,167,0,0,0,251,0,0,6,251,0,0,0,212,1,0,255,215,1,0,0,0,0,0,0,0,0,0,1,0,0,0,232,64,1,0,64,3,0,0,218,0,0,0,112,0,0,0,0,0,0,0,14,1,0,0,90,0,0,0,99,105,110,117,110,109,114,97,66,79,68,65,49,116,97,108,0,0,0,0,0,0,0,0,84,72,69,90,79,67,81,83,0,0,0,0,0,72,69,90,76,79,67,85,83,0,0,0,0,0,102,105,106,107,100,98,104,0,0,0,0,0,0,120,122,114,111,101,115,99,0,0,0,0,0,0,120,122,114,111,101,115,99,0,0,0,0,0,0,112,113,103,106,121,0,0,0,0,0,0,0,0,0,0,0,9,0,0,255,13,0,0,0,15,0,0,255,15,0,0,0,25,0,0,79,25,0,0,128,27,0,0,191,27,0,0,128,28,0,0,223,28,0,0,0,168,0,0,47,168,0,0,0,24,1,0,223,24,1,0,0,0,0,0,0,0,0,0,3,0,0,0,72,66,1,0,208,2,0,0,90,1,0,0,16,0,0,0,0,0,0,0,38,1,0,0,42,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,78,0,0,0,182,0,0,0,128,46,0,0,255,46,0,0,0,47,0,0,223,47,0,0,240,47,0,0,255,47,0,0,0,48,0,0,63,48,0,0,64,48,0,0,159,48,0,0,160,48,0,0,255,48,0,0,0,49,0,0,47,49,0,0,48,49,0,0,143,49,0,0,144,49,0,0,159,49,0,0,160,49,0,0,191,49,0,0,192,49,0,0,239,49,0,0,240,49,0,0,255,49,0,0,0,50,0,0,255,50,0,0,0,51,0,0,255,51,0,0,0,52,0,0,191,77,0,0,192,77,0,0,255,77,0,0,0,78,0,0,255,159,0,0,96,169,0,0,127,169,0,0,0,172,0,0,175,215,0,0,176,215,0,0,255,215,0,0,0,249,0,0,255,250,0,0,16,254,0,0,31,254,0,0,48,254,0,0,79,254,0,0,0,255,0,0,239,255,0,0,0,176,1,0,255,176,1,0,0,211,1,0,95,211,1,0,0,242,1,0,255,242,1,0,0,0,2,0,223,166,2,0,0,167,2,0,63,183,2,0,64,183,2,0,31,184,2,0,0,248,2,0,31,250,2,0,0,0,0,0,0,0,0,0,2,0,0,0,200,66,1,0,208,2,0,0,74,1,0,0,26,0,0,0,0,0,0,0,212,0,0,0,110,0,0,0,214,78,0,0,236,78,0,0,96,79,0,0,134,79,0,0,17,80,0,0,48,82,0,0,140,84,0,0,48,87,0,0,249,91,0,0,13,92,0,0,49,92,0,0,45,94,0,0,17,98,0,0,246,101,0,0,66,102,0,0,3,103,0,0,101,103,0,0,186,112,0,0,253,128,0,0,48,130,0,0,170,138,0,0,244,139,0,0,217,143,0,0,25,144,0,0,74,159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,155,81,0,0,12,84,0,0,242,93,0,0,63,97,0,0,226,101,0,0,31,102,0,0,47,102,0,0,111,102,0,0,17,108,0,0,103,113,0,0,176,115,0,0,254,115,0,0,6,116,0,0,40,117,0,0,110,127,0,0,129,137,0,0,205,142,0,0,163,144,0,0,77,145,0,0,204,145,0,0,139,149,0,0,247,150,0,0,50,151,0,0,98,151,0,0,126,152,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,78,0,0,58,78,0,0,186,78,0,0,214,78,0,0,229,78,0,0,236,78,0,0,96,79,0,0,134,79,0,0,11,80,0,0,17,80,0,0,48,82,0,0,140,84,0,0,39,89,0,0,249,91,0,0,13,92,0,0,49,92,0,0,17,98,0,0,246,101,0,0,66,102,0,0,9,103,0,0,101,103,0,0,186,112,0,0,129,137,0,0,170,138,0,0,244,139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,78,0,0,155,78,0,0,224,86,0,0,131,91,0,0,243,96,0,0,15,97,0,0,6,116,0,0,31,117,0,0,118,117,0,0,11,119,0,0,64,119,0,0,110,127,0,0,5,128,0,0,234,129,0,0,87,132,0,0,225,136,0,0,199,143,0,0,216,143,0,0,219,143,0,0,50,144,0,0,78,144,0,0,83,144,0,0,132,144,0,0,204,145,0,0,98,151,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,0,0,0,0,0,0,0,10,11,12,13,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,11,12,13,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,85,66,83,67,82,73,80,84,95,89,0,0,0,0,0,74,117,108,0,0,0,0,0,74,117,110,0,0,0,0,0,83,85,66,83,67,82,73,80,84,95,88,0,0,0,0,0,67,111,110,118,101,114,116,82,97,119,73,109,97,103,101,70,111,114,109,97,116,32,102,97,105,108,101,100,33,32,68,101,115,116,105,110,97,116,105,111,110,32,98,121,116,101,115,105,122,101,32,100,111,101,115,110,39,116,32,109,97,116,99,104,33,0,0,0,0,0,0,0,65,112,114,0,0,0,0,0,83,85,66,83,67,82,73,80,84,95,83,73,90,69,0,0,77,97,114,0,0,0,0,0,83,84,82,73,75,69,79,85,84,95,68,69,83,67,69,78,84,0,0,0,0,0,0,0,70,101,98,0,0,0,0,0,83,84,82,73,75,69,79,85,84,95,65,83,67,69,78,84,0,0,0,0,0,0,0,0,74,97,110,0,0,0,0,0,83,77,65,76,76,95,67,65,80,95,83,73,90,69,0,0,85,110,115,117,112,112,111,114,116,101,100,32,99,111,110,115,116,97,110,116,32,116,121,112,101,32,102,111,114,32,99,111,110,115,116,97,110,116,32,34,37,115,34,33,0,0,0,0,89,111,117,32,115,101,101,109,32,116,111,32,98,101,32,114,117,110,110,105,110,103,32,73,69,49,49,32,100,101,118,101,108,111,112,101,114,32,112,114,101,118,105,101,119,33,32,84,104,105,115,32,87,101,98,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,105,115,32,110,111,116,32,97,116,32,97,108,108,32,99,111,110,102,111,114,109,97,110,116,32,97,110,100,32,109,97,121,32,98,114,101,97,107,32,105,110,32,109,97,110,121,32,119,97,121,115,33,0,0,0,117,110,115,117,112,112,111,114,116,101,100,32,108,111,99,97,108,101,32,102,111,114,32,115,116,97,110,100,97,114,100,32,105,110,112,117,116,0,0,0,105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,47,108,101,110,103,116,104,32,99,111,100,101,0,0,0,0,0,70,117,108,108,78,97,109,101,0,0,0,0,0,0,0,0,99,108,111,115,101,102,105,108,101,0,0,0,0,0,0,0,87,105,100,116,104,0,0,0,66,108,101,110,100,68,101,115,105,103,110,80,111,115,105,116,105,111,110,115,0,0,0,0,68,101,99,101,109,98,101,114,0,0,0,0,0,0,0,0,82,69,83,79,76,85,84,73,79,78,95,89,0,0,0,0,82,69,83,79,76,85,84,73,79,78,0,0,0,0,0,0,67,73,68,70,111,110,116,84,121,112,101,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,105,110,102,111,0,71,76,95,70,73,88,69,68,0,0,0,0,0,0,0,0,67,72,65,82,83,69,84,95,69,78,67,79,68,73,78,71,0,0,0,0,0,0,0,0,78,111,118,101,109,98,101,114,0,0,0,0,0,0,0,0,82,69,76,65,84,73,86,69,95,87,69,73,71,72,84,0,69,95,70,97,105,108,0,0,98,97,100,32,83,79,83,0,92,0,0,0,0,0,0,0,68,68,83,32,102,105,108,101,32,109,97,103,105,99,32,110,117,109,98,101,114,32,100,105,100,32,110,111,116,32,109,97,116,99,104,33,32,37,99,37,99,37,99,37,99,32,118,115,32,101,120,112,101,99,116,101,100,32,39,68,68,83,32,39,0,0,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,66,105,116,109,97,112,73,110,102,111,72,101,97,100,101,114,32,102,114,111,109,32,66,77,80,32,102,105,108,101,32,34,37,115,34,33,0,0,0,0,0,109,117,108,116,105,112,108,101,32,73,72,68,82,0,0,0,40,73,110,118,97,108,105,100,32,65,99,99,101,115,115,70,108,97,103,41,0,0,0,0,73,110,118,97,108,105,100,32,105,110,100,101,120,84,121,112,101,32,37,100,32,105,110,32,73,110,100,101,120,66,117,102,102,101,114,58,58,83,101,116,73,110,100,101,120,33,0,0,79,99,116,111,98,101,114,0,82,69,76,65,84,73,86,69,95,83,69,84,87,73,68,84,72,0,0,0,0,0,0,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,84,101,120,116,117,114,101,46,99,112,112,0,0,0,0,0,0,98,97,100,32,65,67,32,104,117,102,102,0,0,0,0,0,101,103,108,73,110,105,116,105,97,108,105,122,101,0,0,0,65,99,99,101,115,115,67,112,117,87,114,105,116,101,68,97,116,97,0,0,0,0,0,0,83,101,112,116,101,109,98,101,114,0,0,0,0,0,0,0,82,65,87,95,88,95,72,69,73,71,72,84,0,0,0,0,98,97,100,32,68,67,32,104,117,102,102,0,0,0,0,0,108,105,103,104,116,80,111,115,0,0,0,0,0,0,0,0,65,99,99,101,115,115,67,112,117,82,101,97,100,68,97,116,97,0,0,0,0,0,0,0,65,117,103,117,115,116,0,0,82,65,87,95,85,78,68,69,82,76,73,78,69,95,84,72,73,67,75,78,69,83,83,0,98,97,100,32,83,79,83,32,108,101,110,0,0,0,0,0,65,99,99,101,115,115,82,101,110,100,101,114,84,97,114,103,101,116,0,0,0,0,0,0,74,117,108,121,0,0,0,0,82,65,87,95,85,78,68,69,82,76,73,78,69,95,80,79,83,73,84,73,79,78,0,0,98,97,100,32,83,79,83,32,99,111,109,112,111,110,101,110,116,32,99,111,117,110,116,0,67,111,110,118,101,114,116,82,97,119,73,109,97,103,101,70,111,114,109,97,116,32,102,97,105,108,101,100,33,32,83,111,117,114,99,101,32,98,121,116,101,115,105,122,101,32,100,111,101,115,110,39,116,32,109,97,116,99,104,33,0,0,0,0,65,99,99,101,115,115,80,105,120,101,108,83,104,97,100,101,114,0,0,0,0,0,0,0,74,117,110,101,0,0,0,0,82,65,87,95,83,85,80,69,82,83,67,82,73,80,84,95,89,0,0,0,0,0,0,0,98,97,100,32,114,101,113,95,99,111,109,112,0,0,0,0,65,99,99,101,115,115,86,101,114,116,101,120,83,104,97,100,101,114,0,0,0,0,0,0,77,97,121,0,0,0,0,0,82,65,87,95,83,85,80,69,82,83,67,82,73,80,84,95,88,0,0,0,0,0,0,0,98,97,100,32,109,97,115,107,115,0,0,0,0,0,0,0,65,99,99,101,115,115,67,112,117,77,97,112,70,111,114,87,114,105,116,101,0,0,0,0,65,112,114,105,108,0,0,0,82,65,87,95,83,85,80,69,82,83,67,82,73,80,84,95,83,73,90,69,0,0,0,0,98,97,100,32,98,112,112,0,65,99,99,101,115,115,67,112,117,77,97,112,70,111,114,82,101,97,100,0,0,0,0,0,77,97,114,99,104,0,0,0,82,65,87,95,83,85,66,83,67,82,73,80,84,95,89,0,72,97,100,32,116,111,32,102,111,114,99,105,98,108,121,32,97,99,116,105,118,97,116,101,32,116,104,101,32,115,104,97,100,101,114,32,112,114,111,103,114,97,109,32,117,115,101,100,32,98,121,32,97,32,99,111,110,115,116,97,110,116,32,98,117,102,102,101,114,33,32,80,108,101,97,115,101,32,65,112,112,108,121,77,97,116,101,114,105,97,108,32,98,101,102,111,114,101,32,97,112,112,108,121,105,110,103,32,83,104,97,100,101,114,67,111,110,115,116,97,110,116,66,117,102,102,101,114,115,33,0,0,0,0,0,0,105,110,118,97,108,105,100,0,10,0,0,0,0,0,0,0,105,110,118,97,108,105,100,32,98,105,116,32,108,101,110,103,116,104,32,114,101,112,101,97,116,0,0,0,0,0,0,0,78,111,116,105,99,101,0,0,124,0,0,0,0,0,0,0,101,101,120,101,99,0,0,0,87,101,105,103,104,116,0,0,112,111,115,116,115,99,114,105,112,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,66,108,101,110,100,68,101,115,105,103,110,77,97,112,0,0,70,101,98,114,117,97,114,121,0,0,0,0,0,0,0,0,82,69,83,79,76,85,84,73,79,78,95,88,0,0,0,0,82,65,87,95,83,85,66,83,67,82,73,80,84,95,88,0,67,73,68,70,111,110,116,86,101,114,115,105,111,110,0,0,67,70,70,0,0,0,0,0,66,77,80,32,82,76,69,0,71,76,95,70,76,79,65,84,0,0,0,0,0,0,0,0,67,72,65,82,83,69,84,95,82,69,71,73,83,84,82,89,0,0,0,0,0,0,0,0,116,121,112,101,52,50,0,0,48,0,0,0,0,0,0,0,74,97,110,117,97,114,121,0,82,65,87,95,83,85,66,83,67,82,73,80,84,95,83,73,90,69,0,0,0,0,0,0,37,115,32,40,48,120,37,56,88,41,0,0,0,0,0,0,109,111,110,111,99,104,114,111,109,101,0,0,0,0,0,0,78,111,116,32,101,110,111,117,103,104,32,100,97,116,97,32,102,111,114,32,68,68,83,32,104,101,97,100,101,114,33,0,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,66,77,80,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,66,105,116,109,97,112,73,110,102,111,72,101,97,100,101,114,32,102,114,111,109,32,66,77,80,32,102,105,108,101,32,34,37,115,34,33,0,0,0,98,97,115,105,99,95,115,116,114,105,110,103,0,0,0,0,82,65,87,95,83,84,82,73,75,69,79,85,84,95,68,69,83,67,69,78,84,0,0,0,114,98,0,0,0,0,0,0,98,97,100,32,66,77,80,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,71,76,71,114,97,112,104,105,99,115,46,99,112,112,0,0,0,65,32,99,97,108,108,32,116,111,32,103,108,67,114,101,97,116,101,83,104,97,100,101,114,32,102,97,105,108,101,100,32,116,111,32,99,114,101,97,116,101,32,97,32,110,101,119,32,115,104,97,100,101,114,32,111,98,106,101,99,116,33,0,0,83,111,117,114,99,101,32,84,101,120,116,117,114,101,32,42,77,85,83,84,42,32,98,101,32,97,32,83,116,97,103,105,110,103,32,116,101,120,116,117,114,101,33,0,0,0,0,0,68,0,0,0,101,0,0,0,99,0,0,0,0,0,0,0,82,65,87,95,83,84,82,73,75,69,79,85,84,95,65,83,67,69,78,84,0,0,0,0,117,110,107,110,111,119,110,32,66,77,80,0,0,0,0,0,97,110,100,121,98,46,116,116,102,0,0,0,0,0,0,0,68,101,115,116,105,110,97,116,105,111,110,32,116,101,120,116,117,114,101,32,119,97,115,32,110,111,116,32,105,110,105,116,105,97,108,105,122,101,100,33,0,0,0,0,0,0,0,0,78,0,0,0,111,0,0,0,118,0,0,0,0,0,0,0,82,65,87,95,83,77,65,76,76,95,67,65,80,95,83,73,90,69,0,0,0,0,0,0,110,111,116,32,66,77,80,0,73,103,110,111,114,105,110,103,32,105,110,118,97,108,105,100,32,100,115,116,83,117,98,82,101,115,111,117,114,99,101,73,110,100,101,120,61,37,100,32,33,61,32,48,32,119,104,101,110,32,98,108,105,116,116,105,110,103,32,116,111,32,115,99,114,101,101,110,33,0,0,0,79,0,0,0,99,0,0,0,116,0,0,0,0,0,0,0,82,65,87,95,81,85,65,68,95,87,73,68,84,72,0,0,105,108,108,101,103,97,108,32,99,111,100,101,32,105,110,32,114,97,115,116,101,114,0,0,84,101,120,116,117,114,101,58,58,67,111,112,121,82,101,103,105,111,110,50,68,95,71,80,85,32,115,104,97,100,101,114,32,112,114,111,103,114,97,109,0,0,0,0,0,0,0,0,83,0,0,0,101,0,0,0,112,0,0,0,0,0,0,0,82,65,87,95,80,79,73,78,84,83,73,90,69,0,0,0,116,111,111,32,109,97,110,121,32,99,111,100,101,115,0,0,117,118,0,0,0,0,0,0,65,0,0,0,117,0,0,0,103,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,82,65,87,95,80,73,88,69,76,83,73,90,69,0,0,0,110,111,32,99,108,101,97,114,32,99,111,100,101,0,0,0,112,111,115,0,0,0,0,0,73,109,97,103,101,58,58,73,109,97,103,101,40,119,105,100,116,104,61,37,100,44,32,104,101,105,103,104,116,61,37,100,44,32,102,111,114,109,97,116,61,37,115,32,102,97,105,108,101,100,33,0,0,0,0,0,74,0,0,0,117,0,0,0,108,0,0,0,0,0,0,0,88,72,101,105,103,104,116,0,82,65,87,95,80,79,73,78,84,95,83,73,90,69,0,0,117,110,107,110,111,119,110,32,99,111,100,101,0,0,0,0,87,97,114,110,105,110,103,58,32,70,111,110,116,32,39,37,115,39,32,99,97,110,110,111,116,32,114,101,110,100,101,114,32,85,84,70,45,51,50,32,99,104,97,114,97,99,116,101,114,32,85,43,37,88,33,0,84,101,120,116,117,114,101,58,58,67,111,112,121,82,101,103,105,111,110,50,68,95,71,80,85,32,98,108,105,116,32,102,114,97,103,109,101,110,116,32,115,104,97,100,101,114,0,0,74,0,0,0,117,0,0,0,110,0,0,0,0,0,0,0,87,101,105,103,104,116,86,101,99,116,111,114,0,0,0,0,82,65,87,95,80,73,88,69,76,95,83,73,90,69,0,0,109,105,115,115,105,110,103,32,99,111,108,111,114,32,116,97,98,108,101,0,0,0,0,0,83,99,114,101,101,110,79,114,105,101,110,116,97,116,105,111,110,80,111,114,116,114,97,105,116,0,0,0,0,0,0,0,32,101,115,10,0,0,0,0,116,111,111,32,109,97,110,121,32,108,101,110,103,116,104,32,111,114,32,100,105,115,116,97,110,99,101,32,115,121,109,98,111,108,115,0,0,0,0,0,118,101,114,115,105,111,110,0,84,101,120,116,117,114,101,58,58,67,111,112,121,82,101,103,105,111,110,50,68,95,71,80,85,32,102,114,97,103,109,101,110,116,32,115,104,97,100,101,114,0,0,0,0,0,0,0,46,110,111,116,100,101,102,0,116,116,45,103,108,121,102,0,67,72,65,82,83,69,84,95,69,78,67,79,68,73,78,71,0,0,0,0,0,0,0,0,66,108,101,110,100,65,120,105,115,84,121,112,101,115,0,0,77,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,80,73,88,69,76,95,83,73,90,69,0,0,0,0,0,0,87,101,105,103,104,116,0,0,82,65,87,95,78,79,82,77,95,83,80,65,67,69,0,0,67,73,68,70,111,110,116,78,97,109,101,0,0,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,98,97,100,32,73,109,97,103,101,32,68,101,115,99,114,105,112,116,111,114,0,0,0,0,82,69,83,79,76,85,84,73,79,78,95,89,0,0,0,0,71,76,95,85,78,83,73,71,78,69,68,95,73,78,84,0,116,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,86,101,114,116,101,120,66,117,102,102,101,114,58,58,85,112,100,97,116,101,84,111,71,112,117,32,102,97,105,108,101,100,58,32,77,117,115,116,32,104,97,118,101,32,67,80,85,45,115,105,100,101,32,109,101,109,111,114,121,32,116,111,32,117,112,108,111,97,100,33,0,0,112,114,101,99,105,115,105,111,110,32,108,111,119,112,32,102,108,111,97,116,59,32,117,110,105,102,111,114,109,32,115,97,109,112,108,101,114,50,68,32,116,101,120,59,32,118,97,114,121,105,110,103,32,118,101,99,50,32,85,86,59,32,118,111,105,100,32,109,97,105,110,40,41,32,123,32,103,108,95,70,114,97,103,67,111,108,111,114,32,61,32,116,101,120,116,117,114,101,50,68,40,116,101,120,44,32,85,86,41,59,32,125,0,0,0,0,0,0,0,0,65,0,0,0,112,0,0,0,114,0,0,0,0,0,0,0,79,112,116,105,99,97,108,83,105,122,101,0,0,0,0,0,87,89,0,0,0,0,0,0,82,65,87,95,77,73,78,95,83,80,65,67,69,0,0,0,83,95,79,107,0,0,0,0,119,114,111,110,103,32,99,111,108,111,114,32,102,111,114,109,97,116,0,0,0,0,0,0,73,110,112,117,116,32,98,117,102,102,101,114,32,119,97,115,32,110,117,108,108,33,0,0,70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,66,105,116,109,97,112,70,105,108,101,72,101,97,100,101,114,32,102,114,111,109,32,66,77,80,32,102,105,108,101,32,34,37,115,34,33,0,0,0,0,0,110,111,116,32,71,73,70,0,84,101,120,116,117,114,101,58,58,67,111,112,121,82,101,103,105,111,110,50,68,95,71,80,85,32,98,108,105,116,32,118,101,114,116,101,120,32,115,104,97,100,101,114,0,0,0,0,77,0,0,0,97,0,0,0,114,0,0,0,0,0,0,0,87,105,100,116,104,0,0,0,87,88,0,0,0,0,0,0,82,65,87,95,77,65,88,95,83,80,65,67,69,0,0,0,117,110,115,117,112,112,111,114,116,101,100,32,98,105,116,32,100,101,112,116,104,0,0,0,101,103,108,71,101,116,68,105,115,112,108,97,121,32,102,97,105,108,101,100,58,32,69,71,76,95,78,79,95,68,73,83,80,76,65,89,32,119,97,115,32,114,101,116,117,114,110,101,100,33,0,0,0,0,0,0,84,101,120,116,117,114,101,58,58,67,111,112,121,82,101,103,105,111,110,50,68,95,71,80,85,32,118,101,114,116,101,120,32,115,104,97,100,101,114,0,70,0,0,0,101,0,0,0,98,0,0,0,0,0,0,0,109,117,108,116,105,45,109,97,115,116,101,114,115,0,0,0,87,49,89,0,0,0,0,0,82,65,87,95,70,73,71,85,82,69,95,87,73,68,84,72,0,0,0,0,0,0,0,0,119,114,111,110,103,32,99,104,97,110,110,101,108,32,99,111,117,110,116,0,0,0,0,0,83,116,97,114,116,105,110,103,32,109,97,105,110,32,108,111,111,112,32,119,105,116,104,32,114,101,102,114,101,115,104,32,114,97,116,101,32,111,102,32,37,100,46,0,0,0,0,0,97,116,116,114,105,98,117,116,101,32,118,101,99,52,32,112,111,115,59,32,97,116,116,114,105,98,117,116,101,32,118,101,99,50,32,117,118,59,32,118,97,114,121,105,110,103,32,118,101,99,50,32,85,86,59,32,118,111,105,100,32,109,97,105,110,40,41,32,123,32,103,108,95,80,111,115,105,116,105,111,110,32,61,32,112,111,115,59,32,85,86,32,61,32,117,118,59,32,125,0,0,0,0,0,74,0,0,0,97,0,0,0,110,0,0,0,0,0,0,0,107,101,114,110,105,110,103,0,87,49,88,0,0,0,0,0,82,65,87,95,69,78,68,95,83,80,65,67,69,0,0,0,119,114,111,110,103,32,118,101,114,115,105,111,110,0,0,0,67,97,110,110,111,116,32,99,111,112,121,32,117,115,105,110,103,32,71,80,85,32,70,82,79,77,32,111,110,45,115,99,114,101,101,110,32,99,111,108,111,114,32,98,117,102,102,101,114,33,0,0,0,0,0,0,68,0,0,0,101,0,0,0,99,0,0,0,101,0,0,0,109,0,0,0,98,0,0,0,101,0,0,0,114,0,0,0,0,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,105,110,102,111,0,87,49,0,0,0,0,0,0,82,65,87,95,68,69,83,67,69,78,84,0,0,0,0,0,110,111,116,32,80,83,68,0,69,114,114,111,114,58,32,103,108,71,101,116,83,116,114,105,110,103,40,71,76,95,69,88,84,69,78,83,73,79,78,83,41,32,114,101,116,117,114,110,101,100,32,110,117,108,108,33,0,0,0,0,0,0,0,0,78,0,0,0,111,0,0,0,118,0,0,0,101,0,0,0,109,0,0,0,98,0,0,0,101,0,0,0,114,0,0,0,0,0,0,0,0,0,0,0,84,121,112,101,32,49,0,0,87,48,89,0,0,0,0,0,82,65,87,95,67,65,80,95,72,69,73,71,72,84,0,0,80,73,67,84,0,0,0,0,68,101,112,116,104,45,83,116,101,110,99,105,108,32,116,97,114,103,101,116,32,104,97,115,32,105,110,118,97,108,105,100,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,116,104,97,116,32,100,111,101,115,32,110,111,116,32,104,97,118,101,32,100,101,112,116,104,32,111,114,32,115,116,101,110,99,105,108,32,98,105,116,115,33,0,0,0,0,84,101,120,116,117,114,101,58,58,82,101,97,100,80,105,120,101,108,115,32,116,111,32,97,32,71,80,85,32,116,101,120,116,117,114,101,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,111,110,32,71,76,69,83,50,33,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,87,48,88,0,0,0,0,0,82,65,87,95,65,86,71,95,76,79,87,69,82,67,65,83,69,95,87,73,68,84,72,0,79,0,0,0,99,0,0,0,116,0,0,0,111,0,0,0,98,0,0,0,101,0,0,0,114,0,0,0,0,0,0,0,83,128,246,52,0,0,0,0,67,111,108,111,114,32,116,97,114,103,101,116,32,104,97,115,32,105,110,118,97,108,105,100,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,116,104,97,116,32,105,115,32,110,111,116,32,97,32,82,71,66,65,32,102,111,114,109,97,116,33,0,0,0,84,101,120,116,117,114,101,58,58,66,101,103,105,110,68,114,97,119,32,102,97,105,108,101,100,33,32,84,104,101,32,116,101,120,116,117,114,101,32,39,37,115,39,32,109,117,115,116,32,98,101,32,111,102,32,83,116,97,103,105,110,103,32,116,121,112,101,33,0,0,0,0,83,0,0,0,101,0,0,0,112,0,0,0,116,0,0,0,101,0,0,0,109,0,0,0,98,0,0,0,101,0,0,0,114,0,0,0,0,0,0,0,103,108,121,112,104,45,100,105,99,116,0,0,0,0,0,0,87,48,0,0,0,0,0,0,67,73,68,0,0,0,0,0,82,65,87,95,65,86,71,95,67,65,80,73,84,65,76,95,87,73,68,84,72,0,0,0,98,97,100,32,102,111,114,109,97,116,0,0,0,0,0,0,71,114,97,112,104,105,99,115,58,58,83,101,116,82,101,110,100,101,114,84,97,114,103,101,116,58,32,66,105,110,100,105,110,103,32,97,32,99,111,109,98,105,110,97,116,105,111,110,32,111,102,32,100,101,112,116,104,32,116,101,120,116,117,114,101,32,39,37,115,39,32,97,110,100,32,115,116,101,110,99,105,108,32,116,101,120,116,117,114,101,32,39,37,115,39,32,97,115,32,97,110,32,97,99,116,105,118,101,32,114,101,110,100,101,114,32,116,97,114,103,101,116,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,87,101,98,71,76,33,32,83,101,101,32,115,101,99,116,105,111,110,32,54,46,54,32,105,110,32,87,101,98,71,76,32,115,112,101,99,33,0,0,0,0,67,97,108,108,105,110,103,32,84,101,120,116,117,114,101,58,58,68,105,115,97,98,108,101,77,105,112,109,97,112,115,32,102,111,114,32,116,101,120,116,117,114,101,32,39,37,115,39,33,0,0,0,0,0,0,0,70,84,71,108,121,112,104,67,97,99,104,101,58,58,76,111,97,100,70,111,110,116,70,97,99,101,58,32,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,111,110,116,32,102,105,108,101,32,39,37,115,39,32,97,110,100,32,102,97,99,101,73,110,100,101,120,32,37,100,33,0,0,0,0,0,65,0,0,0,117,0,0,0,103,0,0,0,117,0,0,0,115,0,0,0,116,0,0,0,0,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,102,111,110,116,45,110,97,109,101,0,0,0,0,87,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,105,110,102,111,0,82,65,87,95,65,86,69,82,65,71,69,95,87,73,68,84,72,0,0,0,0,0,0,0,95,115,97,109,112,108,101,114,0,0,0,0,0,0,0,0,98,97,100,32,102,105,108,101,0,0,0,0,0,0,0,0,105,110,102,105,110,105,116,121,0,0,0,0,0,0,0,0,71,114,97,112,104,105,99,115,58,58,83,101,116,82,101,110,100,101,114,84,97,114,103,101,116,58,32,115,116,101,110,99,105,108,84,97,114,103,101,116,32,99,97,110,110,111,116,32,99,111,110,116,97,105,110,32,100,101,112,116,104,32,98,105,116,115,33,0,0,0,0,0,37,100,0,0,0,0,0,0,105,110,118,97,108,105,100,32,115,116,111,114,101,100,32,98,108,111,99,107,32,108,101,110,103,116,104,115,0,0,0,0,87,105,110,100,111,119,115,32,70,78,84,0,0,0,0,0,107,110,111,119,110,0,0,0,83,112,101,99,105,102,105,101,100,32,37,100,32,115,117,114,102,97,99,101,115,32,111,102,32,105,109,97,103,101,32,112,105,120,101,108,32,100,97,116,97,32,116,111,32,116,101,120,116,117,114,101,32,39,37,115,39,32,111,102,32,115,105,122,101,32,37,100,120,37,100,44,32,98,117,116,32,111,110,108,121,32,37,100,32,109,105,112,109,97,112,115,32,97,114,101,32,116,111,32,98,101,32,99,114,101,97,116,101,100,32,116,111,32,116,104,101,32,116,101,120,116,117,114,101,46,32,73,103,110,111,114,105,110,103,32,116,104,101,32,101,120,116,114,97,32,108,97,121,101,114,115,33,0,0,0,0,0,0,0,66,108,97,99,107,0,0,0,116,114,117,101,116,121,112,101,45,101,110,103,105,110,101,0,67,72,65,82,83,69,84,95,82,69,71,73,83,84,82,89,0,0,0,0,0,0,0,0,66,0,0,0,0,0,0,0,80,79,73,78,84,95,83,73,90,69,0,0,0,0,0,0,37,33,70,111,110,116,84,121,112,101,0,0,0,0,0,0,86,101,114,115,105,111,110,0,112,111,115,116,115,99,114,105,112,116,45,102,111,110,116,45,110,97,109,101,0,0,0,0,82,65,87,95,65,83,67,69,78,84,0,0,0,0,0,0,74,0,0,0,117,0,0,0,108,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,37,65,68,79,66,101,103,105,110,70,111,110,116,68,105,99,116,0,0,0,0,0,0,0,66,108,97,99,107,0,0,0,98,97,100,32,112,97,108,101,116,116,101,0,0,0,0,0,82,69,83,79,76,85,84,73,79,78,95,88,0,0,0,0,71,76,95,73,78,84,0,0,46,95,0,0,0,0,0,0,71,114,97,112,104,105,99,115,58,58,83,101,116,82,101,110,100,101,114,84,97,114,103,101,116,58,32,67,97,110,110,111,116,32,104,97,118,101,32,98,111,116,104,32,100,101,112,116,104,83,116,101,110,99,105,108,84,97,114,103,101,116,32,97,110,100,32,115,116,101,110,99,105,108,84,97,114,103,101,116,32,99,111,110,116,97,105,110,32,115,116,101,110,99,105,108,32,98,105,116,115,33,0,0,84,104,105,115,32,87,101,98,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,108,105,110,101,97,114,32,102,105,108,116,101,114,105,110,103,32,102,111,114,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,33,32,68,101,109,111,116,105,110,103,32,102,105,108,116,101,114,105,110,103,32,109,111,100,101,32,116,111,32,112,111,105,110,116,32,102,105,108,116,101,114,105,110,103,32,102,111,114,32,99,114,101,97,116,101,100,32,116,101,120,116,117,114,101,46,0,0,0,0,0,0,74,0,0,0,117,0,0,0,110,0,0,0,101,0,0,0,0,0,0,0,0,0,0,0,37,33,80,83,45,65,100,111,98,101,70,111,110,116,0,0,86,86,101,99,116,111,114,0,67,73,68,32,84,121,112,101,32,49,0,0,0,0,0,0,81,85,65,68,95,87,73,68,84,72,0,0,0,0,0,0,37,115,32,40,48,120,37,56,88,41,58,32,37,115,0,0,98,97,100,32,99,111,109,112,114,101,115,115,105,111,110,0,67,97,110,110,111,116,32,114,101,110,100,101,114,32,105,110,100,105,99,101,100,32,86,101,114,116,101,120,66,117,102,102,101,114,32,119,105,116,104,111,117,116,32,115,112,101,99,105,102,121,105,110,103,32,116,104,101,32,97,115,115,111,99,105,97,116,101,100,32,73,110,100,101,120,66,117,102,102,101,114,32,116,111,32,114,101,110,100,101,114,32,119,105,116,104,33,0,0,0,0,0,0,0,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,68,68,83,84,101,120,116,117,114,101,76,111,97,100,101,114,46,99,112,112,0,0,0,0,0,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,66,77,80,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,66,105,116,109,97,112,70,105,108,101,72,101,97,100,101,114,32,102,114,111,109,32,66,77,80,32,102,105,108,101,32,34,37,115,34,33,0,0,0,43,88,32,0,0,0,0,0,78,111,110,101,0,0,0,0,79,69,83,95,116,101,120,116,117,114,101,95,104,97,108,102,95,102,108,111,97,116,95,108,105,110,101,97,114,0,0,0,73,83,79,76,97,116,105,110,49,69,110,99,111,100,105,110,103,0,0,0,0,0,0,0,86,86,0,0,0,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,78,79,84,73,67,69,0,0,99,114,110,100,95,102,114,101,101,58,32,98,97,100,32,112,116,114,0,0,0,0,0,0,110,111,32,112,114,101,115,101,116,32,100,105,99,116,0,0,101,103,108,71,101,116,68,105,115,112,108,97,121,0,0,0,71,114,97,112,104,105,99,115,58,58,65,112,112,108,121,68,101,112,116,104,83,116,97,116,101,58,32,73,110,118,97,108,105,100,32,100,101,112,116,104,70,117,110,99,32,115,116,97,116,101,32,115,112,101,99,105,102,105,101,100,33,0,0,0,79,69,83,95,116,101,120,116,117,114,101,95,102,108,111,97,116,95,108,105,110,101,97,114,0,0,0,0,0,0,0,0,65,0,0,0,112,0,0,0,114,0,0,0,105,0,0,0,108,0,0,0,0,0,0,0,69,120,112,101,114,116,69,110,99,111,100,105,110,103,0,0,85,110,100,101,114,108,105,110,101,84,104,105,99,107,110,101,115,115,0,0,0,0,0,0,40,72,101,120,41,0,0,0,78,79,82,77,95,83,80,65,67,69,0,0,0,0,0,0,98,97,100,32,122,108,105,98,32,104,101,97,100,101,114,0,71,114,97,112,104,105,99,115,58,58,65,112,112,108,121,68,101,112,116,104,83,116,97,116,101,58,32,100,101,112,116,104,70,117,110,99,61,61,68,101,112,116,104,67,109,112,73,110,118,97,108,105,100,33,0,0,38,0,0,0,0,0,0,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,109,105,112,109,97,112,112,105,110,103,32,102,111,114,32,110,111,110,45,112,111,119,45,50,32,116,101,120,116,117,114,101,115,33,32,84,101,120,116,117,114,101,32,39,37,115,39,32,111,102,32,115,105,122,101,32,37,100,120,37,100,32,104,97,100,32,37,100,32,109,105,112,108,101,118,101,108,115,46,32,73,103,110,111,114,105,110,103,32,116,104,101,109,46,46,0,0,77,0,0,0,97,0,0,0,114,0,0,0,99,0,0,0,104,0,0,0,0,0,0,0,83,116,97,110,100,97,114,100,69,110,99,111,100,105,110,103,0,0,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,80,111,115,105,116,105,111,110,0,0,0,0,0,0,0,47,115,102,110,116,115,0,0,77,73,78,95,83,80,65,67,69,0,0,0,0,0,0,0,114,101,97,100,32,112,97,115,116,32,98,117,102,102,101,114,0,0,0,0,0,0,0,0,85,110,107,110,111,119,110,32,66,108,101,110,100,83,111,117,114,99,101,32,118,97,108,117,101,32,115,112,101,99,105,102,105,101,100,32,105,110,32,66,108,101,110,100,83,111,117,114,99,101,84,111,71,76,101,110,117,109,33,0,0,0,0,0,103,108,71,101,110,84,101,120,116,117,114,101,115,43,103,108,84,101,120,73,109,97,103,101,50,68,32,102,111,114,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,97,115,32,114,101,110,100,101,114,32,116,97,114,103,101,116,58,32,102,111,114,109,97,116,58,32,37,115,44,32,105,110,116,101,114,110,97,108,102,111,114,109,97,116,58,32,37,115,44,32,116,121,112,101,58,32,37,115,44,32,119,105,100,116,104,58,32,37,100,44,32,104,101,105,103,104,116,58,32,37,100,0,0,0,0,0,0,70,0,0,0,101,0,0,0,98,0,0,0,114,0,0,0,117,0,0,0,97,0,0,0,114,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,112,117,116,0,0,0,0,0,84,114,97,99,107,75,101,114,110,0,0,0,0,0,0,0,83,116,97,114,116,68,97,116,97,0,0,0,0,0,0,0,77,65,88,95,83,80,65,67,69,0,0,0,0,0,0,0,122,108,105,98,32,99,111,114,114,117,112,116,0,0,0,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,66,108,101,110,100,73,110,118,83,114,99,49,65,108,112,104,97,33,0,0,0,0,0,0,0,67,111,109,112,114,101,115,115,105,111,110,32,116,111,32,102,111,114,109,97,116,32,39,37,115,39,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,33,0,0,0,0,0,84,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,116,104,105,115,32,79,112,101,110,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,33,0,0,0,0,0,0,0,74,0,0,0,97,0,0,0,110,0,0,0,117,0,0,0,97,0,0,0,114,0,0,0,121,0,0,0,0,0,0,0,100,117,112,0,0,0,0,0,83,116,100,86,87,0,0,0,37,33,80,83,45,65,100,111,98,101,45,51,46,48,32,82,101,115,111,117,114,99,101,45,67,73,68,70,111,110,116,0,73,84,65,76,73,67,95,65,78,71,76,69,0,0,0,0,40,110,117,108,108,41,0,0,98,97,100,32,99,111,100,101])
.concat([108,101,110,103,116,104,115,0,67,97,110,110,111,116,32,97,117,116,111,109,97,116,105,99,97,108,108,121,32,103,101,110,101,114,97,116,101,32,110,101,119,32,109,105,112,32,108,101,118,101,108,115,32,102,111,114,32,99,111,109,112,114,101,115,115,101,100,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,33,0,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,66,108,101,110,100,83,114,99,49,65,108,112,104,97,33,0,0,103,108,71,101,110,82,101,110,100,101,114,98,117,102,102,101,114,115,43,103,108,82,101,110,100,101,114,98,117,102,102,101,114,83,116,111,114,97,103,101,32,102,111,114,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,97,115,32,114,101,110,100,101,114,32,116,97,114,103,101,116,58,32,105,110,116,101,114,110,97,108,102,111,114,109,97,116,58,32,37,115,44,32,119,105,100,116,104,58,32,37,100,44,32,104,101,105,103,104,116,58,32,37,100,0,0,0,0,0,0,66,117,105,108,100,67,104,97,114,65,114,114,97,121,0,0,83,116,100,72,87,0,0,0,69,120,112,97,110,115,105,111,110,70,97,99,116,111,114,0,70,85,76,76,95,78,65,77,69,0,0,0,0,0,0,0,111,117,116,112,117,116,32,98,117,102,102,101,114,32,108,105,109,105,116,0,0,0,0,0,84,101,120,116,117,114,101,58,58,83,101,116,78,117,109,77,105,112,109,97,112,115,58,32,67,97,110,110,111,116,32,99,117,114,114,101,110,116,108,121,32,97,117,116,111,109,97,116,105,99,97,108,108,121,32,103,101,110,101,114,97,116,101,32,110,101,119,32,109,105,112,32,108,101,118,101,108,115,32,102,111,114,32,99,111,109,112,114,101,115,115,101,100,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,33,0,0,0,0,0,0,0,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,66,108,101,110,100,73,110,118,83,114,99,49,67,111,108,111,114,33,0,0,0,0,0,0,0,84,101,120,116,117,114,101,32,100,101,112,116,104,32,109,117,115,116,32,98,101,32,49,33,32,71,111,116,32,37,100,0,80,77,0,0,0,0,0,0,87,101,105,103,104,116,86,101,99,116,111,114,0,0,0,0,83,116,97,114,116,84,114,97,99,107,75,101,114,110,0,0,70,111,110,116,77,97,116,114,105,120,0,0,0,0,0,0,70,79,85,78,68,82,89,0,98,97,100,32,100,105,115,116,0,0,0,0,0,0,0,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,66,108,101,110,100,83,114,99,49,67,111,108,111,114,33,0,0,84,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,105,116,115,32,105,109,97,103,101,32,100,97,116,97,32,98,101,105,110,103,32,115,112,101,99,105,102,105,101,100,32,102,114,111,109,32,67,80,85,32,109,101,109,111,114,121,32,117,112,111,110,32,99,114,101,97,116,105,111,110,33,32,67,111,110,116,105,110,117,105,110,103,32,119,105,116,104,111,117,116,32,105,110,105,116,105,97,108,105,122,105,110,103,32,116,104,101,32,116,101,120,116,117,114,101,33,0,0,0,114,98,0,0,0,0,0,0,65,77,0,0,0,0,0,0,66,108,101,110,100,65,120,105,115,84,121,112,101,115,0,0,83,116,97,114,116,75,101,114,110,80,97,105,114,115,49,0,70,68,65,114,114,97,121,0,70,79,78,84,78,65,77,69,95,82,69,71,73,83,84,82,89,0,0,0,0,0,0,0,115,97,109,112,108,101,114,51,68,0,0,0,0,0,0,0,98,97,100,32,104,117,102,102,109,97,110,32,99,111,100,101,0,0,0,0,0,0,0,0,66,108,101,110,100,73,110,118,97,108,105,100,32,112,97,115,115,101,100,32,116,111,32,66,108,101,110,100,83,111,117,114,99,101,33,0,0,0,0,0,67,97,108,108,105,110,103,32,71,108,86,101,114,116,101,120,65,116,116,114,105,98,80,111,105,110,116,101,114,32,119,105,116,104,32,105,110,118,97,108,105,100,32,115,105,122,101,32,37,100,33,32,40,109,117,115,116,32,98,101,32,49,45,52,41,0,0,0,0,0,0,0,35,118,101,114,115,105,111,110,32,0,0,0,0,0,0,0,105,110,118,97,108,105,100,32,98,108,111,99,107,32,116,121,112,101,0,0,0,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,70,111,110,116,68,105,114,101,99,116,111,114,121,0,0,0,66,111,108,100,0,0,0,0,84,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,119,105,116,104,32,97,99,99,101,115,115,32,102,108,97,103,115,32,37,115,32,99,97,110,110,111,116,32,98,101,32,117,115,101,100,32,97,115,32,97,32,114,101,110,100,101,114,32,116,97,114,103,101,116,33,0,0,0,0,0,0,0,109,117,108,116,105,45,109,97,115,116,101,114,115,0,0,0,116,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,65,120,105,115,84,121,112,101,0,0,0,0,0,0,0,0,65,86,69,82,65,71,69,95,87,73,68,84,72,0,0,0,66,108,101,110,100,68,101,115,105,103,110,77,97,112,0,0,83,116,97,114,116,75,101,114,110,80,97,105,114,115,48,0,70,111,110,116,66,66,111,120,0,0,0,0,0,0,0,0,70,73,71,85,82,69,95,87,73,68,84,72,0,0,0,0,66,108,97,99,107,0,0,0,66,111,108,100,0,0,0,0,35,63,82,65,68,73,65,78,67,69,10,0,0,0,0,0,80,73,88,69,76,95,83,73,90,69,0,0,0,0,0,0,71,76,95,85,78,83,73,71,78,69,68,95,83,72,79,82,84,0,0,0,0,0,0,0,85,110,107,110,111,119,110,32,66,108,101,110,100,79,112,101,114,97,116,105,111,110,32,101,110,117,109,32,118,97,108,117,101,32,112,97,115,115,101,100,32,116,111,32,66,108,101,110,100,79,112,101,114,97,116,105,111,110,84,111,71,76,101,110,117,109,33,0,0,0,0,0,47,114,115,114,99,0,0,0,67,97,108,108,105,110,103,32,71,108,86,101,114,116,101,120,65,116,116,114,105,98,80,111,105,110,116,101,114,32,119,105,116,104,32,105,110,118,97,108,105,100,32,110,101,103,97,116,105,118,101,32,105,110,100,101,120,32,37,100,33,0,0,0,84,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,111,110,32,99,117,114,114,101,110,116,32,112,108,97,116,102,111,114,109,33,0,80,0,0,0,77,0,0,0,0,0,0,0,0,0,0,0,83,104,97,100,101,114,32,104,97,115,32,109,111,114,101,32,116,104,97,110,32,54,52,32,97,116,116,114,105,98,117,116,101,115,63,33,32,65,98,111,114,116,105,110,103,32,101,120,112,108,105,99,105,116,32,103,108,66,105,110,100,65,116,116,114,105,98,76,111,99,97,116,105,111,110,32,97,108,108,111,99,97,116,105,111,110,33,32,84,104,105,115,32,109,97,121,32,112,114,111,100,117,99,101,32,101,114,114,111,114,115,46,0,0,0,0,0,0,0,0,66,108,101,110,100,68,101,115,105,103,110,80,111,115,105,116,105,111,110,115,0,0,0,0,83,116,97,114,116,75,101,114,110,80,97,105,114,115,0,0,70,111,114,99,101,66,111,108,100,0,0,0,0,0,0,0,70,65,67,69,95,78,65,77,69,0,0,0,0,0,0,0,44,32,100,117,101,32,116,111,32,112,114,101,118,105,111,117,115,32,114,101,115,117,108,116,32,0,0,0,0,0,0,0,105,110,118,97,108,105,100,32,100,101,99,111,100,101,100,32,115,99,97,110,108,105,110,101,32,108,101,110,103,116,104,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,77,97,120,40,41,32,98,108,101,110,100,32,111,112,101,114,97,116,105,111,110,33,0,0,0,70,97,105,108,101,100,32,116,111,32,112,97,114,115,101,32,46,100,100,115,32,102,105,108,101,32,70,79,85,82,67,67,32,99,111,100,101,32,48,120,37,48,56,88,33,0,0,0,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,34,37,115,34,32,102,111,114,32,114,101,97,100,105,110,103,33,0,0,0,45,89,32,0,0,0,0,0,79,110,108,121,32,84,101,120,116,117,114,101,50,68,32,116,121,112,101,115,32,97,114,101,32,99,117,114,114,101,110,116,108,121,32,115,117,112,112,111,114,116,101,100,33,0,0,0,115,97,109,76,105,110,101,97,114,0,0,0,0,0,0,0,65,0,0,0,77,0,0,0,0,0,0,0,0,0,0,0,43,0,0,0,0,0,0,0,80,114,105,118,97,116,101,0,83,116,97,114,116,75,101,114,110,68,97,116,97,0,0,0,83,116,101,109,83,110,97,112,86,0,0,0,0,0,0,0,69,78,68,95,83,80,65,67,69,0,0,0,0,0,0,0,99,114,110,100,95,114,101,97,108,108,111,99,58,32,98,97,100,32,112,116,114,0,0,0,117,110,115,117,112,112,111,114,116,101,100,32,100,97,116,97,32,108,97,121,111,117,116,0,71,76,69,83,50,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,77,105,110,40,41,32,98,108,101,110,100,32,111,112,101,114,97,116,105,111,110,33,0,0,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,71,76,84,101,120,116,117,114,101,46,99,112,112,0,0,0,0,116,120,68,105,102,102,117,115,101,95,115,97,109,112,108,101,114,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,108,105,110,107,32,112,114,111,103,114,97,109,58,10,37,115,10,0,0,0,0,0,83,117,98,114,115,0,0,0,83,116,97,114,116,68,105,114,101,99,116,105,111,110,0,0,83,116,101,109,83,110,97,112,72,0,0,0,0,0,0,0,68,69,86,73,67,69,95,70,79,78,84,95,78,65,77,69,0,0,0,0,0,0,0,0,117,110,115,117,112,112,111,114,116,101,100,32,102,111,114,109,97,116,0,0,0,0,0,0,66,108,101,110,100,79,112,73,110,118,97,108,105,100,32,112,97,115,115,101,100,32,116,111,32,66,108,101,110,100,79,112,101,114,97,116,105,111,110,84,111,71,76,101,110,117,109,33,0,0,0,0,0,0,0,0,119,105,110,100,111,119,46,108,111,99,97,116,105,111,110,46,115,101,97,114,99,104,46,115,117,98,115,116,114,40,49,41,59,0,0,0,0,0,0,0,84,101,120,116,117,114,101,32,102,111,114,109,97,116,32,39,37,115,39,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,79,112,101,110,71,76,33,32,40,111,114,32,99,111,100,101,32,102,111,114,32,115,117,112,112,111,114,116,105,110,103,32,105,116,32,104,97,115,110,39,116,32,98,101,101,110,32,119,114,105,116,116,101,110,41,0,67,114,105,116,105,99,97,108,58,32,82,101,99,101,105,118,101,100,32,97,110,32,111,108,100,32,117,110,116,114,97,99,107,101,100,32,116,111,117,99,104,32,101,118,101,110,116,32,119,105,116,104,32,73,68,32,37,100,32,97,110,100,32,115,116,97,116,101,32,37,115,33,0,0,0,0,0,0,0,0,68,105,102,102,117,115,101,84,101,120,116,117,114,101,95,83,97,109,112,108,101,114,0,0,71,108,76,105,110,107,80,114,111,103,114,97,109,32,102,97,105,108,101,100,33,0,0,0,69,110,99,111,100,105,110,103,0,0,0,0,0,0,0,0,83,116,97,114,116,67,111,109,112,111,115,105,116,101,115,0,77,105,110,70,101,97,116,117,114,101,0,0,0,0,0,0,68,69,83,84,73,78,65,84,73,79,78,0,0,0,0,0,110,111,116,32,72,68,82,0,73,110,118,97,108,105,100,32,99,117,108,108,32,109,111,100,101,32,37,100,32,105,110,32,71,114,97,112,104,105,99,115,58,58,65,112,112,108,121,82,97,115,116,101,114,105,122,101,114,83,116,97,116,101,33,0,68,105,102,102,117,115,101,84,101,120,116,117,114,101,83,97,109,112,108,101,114,0,0,0,67,111,109,112,105,108,101,100,32,115,104,97,100,101,114,32,112,114,111,103,114,97,109,32,104,97,115,32,37,100,32,97,99,116,105,118,101,32,118,101,114,116,101,120,32,97,116,116,114,105,98,117,116,101,115,46,0,0,0,0,0,0,0,0,70,111,110,116,77,97,116,114,105,120,0,0,0,0,0,0,83,116,97,114,116,67,104,97,114,77,101,116,114,105,99,115,0,0,0,0,0,0,0,0,83,116,100,86,87,0,0,0,67,79,80,89,82,73,71,72,84,0,0,0,0,0,0,0,98,97,100,32,99,111,100,101,32,108,101,110,103,116,104,115,0,0,0,0,0,0,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,58,32,73,110,118,97,108,105,100,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,97,100,100,114,101,115,115,86,32,118,97,108,117,101,32,39,37,115,39,32,115,112,101,99,105,102,105,101,100,33,0,0,0,0,0,71,108,71,101,110,82,101,110,100,101,114,98,117,102,102,101,114,115,32,103,101,110,101,114,97,116,101,100,32,97,32,70,66,79,32,119,105,116,104,32,110,97,109,101,32,48,46,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,99,114,101,97,116,101,100,44,32,111,114,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,97,99,116,105,118,101,44,32,111,114,32,116,104,105,115,32,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,105,115,32,98,114,111,107,101,110,33,0,0,73,110,118,97,108,105,100,32,99,97,108,108,32,116,111,32,73,109,97,103,101,58,58,67,114,101,97,116,101,78,101,119,40,112,116,114,61,37,112,44,32,110,117,109,66,121,116,101,115,61,37,100,44,32,119,105,100,116,104,61,37,100,44,32,104,101,105,103,104,116,61,37,100,44,32,115,116,114,105,100,101,66,121,116,101,115,61,37,100,44,32,102,111,114,109,97,116,61,37,115,41,33,0,0,116,120,68,105,102,102,117,115,101,0,0,0,0,0,0,0,40,105,110,118,97,108,105,100,32,83,99,114,101,101,110,79,114,105,101,110,116,97,116,105,111,110,32,101,110,117,109,33,41,0,0,0,0,0,0,0,85,110,105,102,111,114,109,32,37,115,58,32,115,105,122,101,32,37,100,46,32,116,121,112,101,58,32,37,115,40,37,100,41,46,32,76,111,99,97,116,105,111,110,58,32,37,100,0,68,101,115,105,103,110,86,101,99,116,111,114,0,0,0,0,83,116,97,114,116,65,120,105,115,0,0,0,0,0,0,0,83,116,100,72,87,0,0,0,67,72,65,82,83,69,84,95,67,79,76,76,69,67,84,73,79,78,83,0,0,0,0,0,86,101,114,116,101,120,66,117,102,102,101,114,58,58,66,105,110,100,84,111,77,97,116,101,114,105,97,108,58,32,67,97,110,110,111,116,32,102,105,110,100,32,97,116,116,114,105,98,117,116,101,32,108,111,99,97,116,105,111,110,32,102,111,114,32,118,101,114,116,101,120,32,97,116,116,114,105,98,117,116,101,32,34,37,115,34,32,105,110,32,109,97,116,101,114,105,97,108,32,116,104,97,116,32,117,115,101,115,32,86,83,32,39,37,115,39,32,97,110,100,32,80,83,32,39,37,115,39,44,32,119,104,101,110,32,98,105,110,100,105,110,103,32,118,101,114,116,101,120,32,98,117,102,102,101,114,32,39,37,115,39,33,0,0,0,0,0,0,98,97,100,32,68,72,84,32,104,101,97,100,101,114,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,58,32,73,110,118,97,108,105,100,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,97,100,100,114,101,115,115,85,32,118,97,108,117,101,32,39,37,115,39,32,115,112,101,99,105,102,105,101,100,33,0,0,0,0,0,68,105,102,102,117,115,101,84,101,120,116,117,114,101,0,0,67,68,86,0,0,0,0,0,85,110,105,102,111,114,109,32,99,111,110,115,116,97,110,116,115,32,105,110,32,115,104,97,100,101,114,32,112,114,111,103,114,97,109,58,0,0,0,0,80,67,67,0,0,0,0,0,70,97,109,105,108,121,79,116,104,101,114,66,108,117,101,115,0,0,0,0,0,0,0,0,67,65,80,95,72,69,73,71,72,84,0,0,0,0,0,0,98,97,100,32,68,81,84,32,116,97,98,108,101,0,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,32,69,114,114,111,114,58,32,71,76,69,83,50,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,111,116,104,101,114,32,97,100,100,114,101,115,115,105,110,103,32,109,111,100,101,115,32,116,104,97,110,32,71,76,95,67,76,65,77,80,95,84,79,95,69,68,71,69,32,119,104,101,110,32,115,105,122,101,32,105,115,32,110,111,116,32,112,111,119,50,33,32,83,105,122,101,32,119,97,115,32,37,100,120,37,100,32,105,110,32,116,101,120,116,117,114,101,32,39,37,115,39,46,32,40,71,76,69,83,50,32,119,105,108,108,32,110,111,119,32,115,105,108,101,110,116,108,121,32,114,101,110,100,101,114,32,98,108,97,99,107,41,0,0,0,0,0,87,111,114,108,100,86,105,101,119,80,114,111,106,0,0,0,78,68,86,0,0,0,0,0,71,108,86,97,108,105,100,97,116,101,80,114,111,103,114,97,109,32,114,101,116,117,114,110,101,100,58,10,37,115,0,0,78,111,116,105,99,101,0,0,70,97,109,105,108,121,66,108,117,101,115,0,0,0,0,0,65,86,71,95,76,79,87,69,82,67,65,83,69,95,87,73,68,84,72,0,0,0,0,0,98,97,100,32,68,81,84,32,116,121,112,101,0,0,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,58,32,73,110,118,97,108,105,100,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,109,97,103,32,102,105,108,116,101,114,32,115,112,101,99,105,102,105,101,100,32,40,37,115,41,33,0,89,111,117,32,99,97,110,110,111,116,32,99,97,108,108,32,71,108,71,101,110,82,101,110,100,101,114,98,117,102,102,101,114,115,32,119,105,116,104,32,110,61,37,100,32,62,32,48,32,97,110,100,32,98,117,102,102,101,114,115,32,61,61,32,110,117,108,108,32,112,111,105,110,116,101,114,33,0,0,0,86,105,101,119,80,114,111,106,0,0,0,0,0,0,0,0,70,111,110,116,66,66,111,120,0,0,0,0,0,0,0,0,65,99,116,105,118,101,32,117,110,105,102,111,114,109,32,99,111,110,115,116,97,110,116,32,97,116,32,105,110,100,101,120,32,37,100,58,32,37,115,44,32,116,121,112,101,58,32,37,115,44,32,115,105,122,101,58,32,37,100,44,32,108,111,99,97,116,105,111,110,58,32,37,100,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,79,116,104,101,114,66,108,117,101,115,0,0,0,0,0,0,65,86,71,95,67,65,80,73,84,65,76,95,87,73,68,84,72,0,0,0,0,0,0,0,70,84,95,68,111,110,101,95,70,114,101,101,84,121,112,101,32,102,97,105,108,101,100,33,0,0,0,0,0,0,0,0,115,97,109,112,108,101,114,50,68,83,104,97,100,111,119,0,98,97,100,32,68,82,73,32,108,101,110,0,0,0,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,58,32,73,110,118,97,108,105,100,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,109,105,110,32,102,105,108,116,101,114,32,115,112,101,99,105,102,105,101,100,32,40,37,115,41,33,0,71,108,71,101,110,70,114,97,109,101,98,117,102,102,101,114,115,32,103,101,110,101,114,97,116,101,100,32,97,32,70,66,79,32,119,105,116,104,32,110,97,109,101,32,48,46,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,99,114,101,97,116,101,100,44,32,111,114,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,97,99,116,105,118,101,44,32,111,114,32,116,104,105,115,32,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,105,115,32,98,114,111,107,101,110,33,0,0,0,35,118,101,114,115,105,111,110,0,0,0,0,0,0,0,0,105,110,99,111,114,114,101,99,116,32,100,97,116,97,32,99,104,101,99,107,0,0,0,0,73,116,97,108,105,99,0,0,46,110,111,116,100,101,102,0,82,101,103,117,108,97,114,0,84,114,117,101,84,121,112,101,0,0,0,0,0,0,0,0,98,100,102,0,0,0,0,0,87,111,114,108,100,86,105,101,119,0,0,0,0,0,0,0,65,120,105,115,76,97,98,101,108,0,0,0,0,0,0,0,70,65,77,73,76,89,95,78,65,77,69,0,0,0,0,0,83,116,114,111,107,101,87,105,100,116,104,0,0,0,0,0,65,99,116,105,118,101,32,118,101,114,116,101,120,32,97,116,116,114,105,98,117,116,101,32,97,116,32,105,110,100,101,120,32,37,100,58,32,37,115,44,32,116,121,112,101,58,32,37,115,44,32,115,105,122,101,58,32,37,100,44,32,108,111,99,97,116,105,111,110,58,32,37,100,46,0,0,0,0,0,0,77,101,116,114,105,99,115,83,101,116,115,0,0,0,0,0,66,108,117,101,86,97,108,117,101,115,0,0,0,0,0,0,95,88,70,82,69,69,56,54,95,71,76,89,80,72,95,82,65,78,71,69,83,0,0,0,66,111,108,100,0,0,0,0,82,101,103,117,108,97,114,0,112,114,111,103,114,101,115,115,105,118,101,32,106,112,101,103,0,0,0,0,0,0,0,0,80,79,73,78,84,95,83,73,90,69,0,0,0,0,0,0,71,76,95,83,72,79,82,84,0,0,0,0,0,0,0,0,47,46,46,110,97,109,101,100,102,111,114,107,47,114,115,114,99,0,0,0,0,0,0,0,103,108,121,112,104,45,100,105,99,116,0,0,0,0,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,58,32,73,110,118,97,108,105,100,32,99,111,109,98,105,110,97,116,105,111,110,32,111,102,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,109,105,110,32,40,37,115,41,32,97,110,100,32,109,105,112,32,40,37,115,41,32,102,105,108,116,101,114,115,32,115,112,101,99,105,102,105,101,100,33,0,0,0,0,87,111,114,108,100,0,0,0,70,111,110,116,84,121,112,101,0,0,0,0,0,0,0,0,71,76,95,65,67,84,73,86,69,95,85,78,73,70,79,82,77,83,0,0,0,0,0,0,77,97,112,112,105,110,103,83,99,104,101,109,101,0,0,0,66,108,117,101,70,117,122,122,0,0,0,0,0,0,0,0,69,78,68,80,82,79,80,69,82,84,73,69,83,0,0,0,58,32,0,0,0,0,0,0,101,120,112,101,99,116,101,100,32,109,97,114,107,101,114,0,47,0,0,0,0,0,0,0,115,97,109,112,108,101,114,50,68,0,0,0,0,0,0,0,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,32,69,114,114,111,114,58,32,71,76,69,83,50,32,119,105,108,108,32,110,111,119,32,115,105,108,101,110,116,108,121,32,114,101,110,100,101,114,32,98,108,97,99,107,32,115,105,110,99,101,32,109,105,112,109,97,112,112,105,110,103,32,119,97,115,32,115,112,101,99,105,102,105,101,100,32,102,111,114,32,97,32,110,111,110,45,112,111,119,50,32,116,101,120,116,117,114,101,33,32,75,105,108,108,105,110,103,32,109,105,112,109,97,112,115,32,102,114,111,109,32,116,101,120,116,117,114,101,32,39,37,115,39,32,97,115,32,97,32,119,111,114,107,97,114,111,117,110,100,46,0,0,0,0,0,0,0,89,111,117,32,99,97,110,110,111,116,32,99,97,108,108,32,71,108,71,101,110,70,114,97,109,101,98,117,102,102,101,114,115,32,119,105,116,104,32,110,61,37,100,32,62,32,48,32,97,110,100,32,98,117,102,102,101,114,115,32,61,61,32,110,117,108,108,32,112,111,105,110,116,101,114,33,0,0,0,0,70,97,105,108,101,100,32,116,111,32,112,97,114,115,101,32,46,100,100,115,32,102,105,108,101,32,65,76,80,72,65,32,98,105,116,32,102,111,114,109,97,116,32,82,58,37,48,56,88,44,32,71,58,37,48,56,88,44,32,66,58,37,48,56,88,44,32,65,58,32,37,48,56,88,33,0,0,0,0,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,66,77,80,76,111,97,100,101,114,46,99,112,112,0,0,0,0,70,79,82,77,65,84,61,51,50,45,98,105,116,95,114,108,101,95,114,103,98,101,0,0,80,97,105,110,116,84,121,112,101,0,0,0,0,0,0,0,71,76,95,65,67,84,73,86,69,95,65,84,84,82,73,66,85,84,69,83,0,0,0,0,76,0,0,0,0,0,0,0,66,108,117,101,83,104,105,102,116,0,0,0,0,0,0,0,45,0,0,0,0,0,0,0,99,114,110,100,95,109,97,108,108,111,99,58,32,111,117,116,32,111,102,32,109,101,109,111,114,121,0,0,0,0,0,0,98,97,100,32,84,81,0,0,71,114,97,112,104,105,99,115,58,58,65,112,112,108,121,84,101,120,116,117,114,101,83,97,109,112,108,101,114,58,32,67,97,110,110,111,116,32,97,112,112,108,121,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,112,97,114,97,109,101,116,101,114,115,32,116,111,32,116,101,120,116,117,114,101,32,117,110,105,116,32,37,100,44,32,115,105,110,99,101,32,105,116,32,100,111,101,115,32,110,111,116,32,104,97,118,101,32,97,32,116,101,120,116,117,114,101,32,98,111,117,110,100,33,0,0,0,0,0,0,112,111,115,0,0,0,0,0,70,114,101,101,84,121,112,101,32,67,80,85,32,83,116,97,103,105,110,103,0,0,0,0,115,116,100,58,58,98,97,100,95,99,97,115,116,0,0,0,70,111,110,116,78,97,109,101,0,0,0,0,0,0,0,0,71,76,95,65,84,84,65,67,72,69,68,95,83,72,65,68,69,82,83,0,0,0,0,0,75,80,89,0,0,0,0,0,66,108,117,101,83,99,97,108,101,0,0,0,0,0,0,0,68,69,70,65,85,76,84,95,67,72,65,82,0,0,0,0,98,97,100,32,86,0,0,0,73,110,118,97,108,105,100,32,115,116,114,105,110,103,32,39,37,115,39,32,105,110,32,83,116,114,105,110,103,84,111,86,101,114,116,101,120,68,97,116,97,83,101,109,97,110,116,105,99,33,0,0,0,0,0,0,67,97,110,110,111,116,32,114,101,110,100,101,114,32,117,115,105,110,103,32,97,32,118,101,114,116,101,120,32,98,117,102,102,101,114,32,119,104,105,99,104,32,105,115,32,110,111,116,32,98,111,117,110,100,32,116,111,32,97,32,109,97,116,101,114,105,97,108,33,32,84,104,101,32,99,117,114,114,101,110,116,108,121,32,97,99,116,105,118,101,32,109,97,116,101,114,105,97,108,32,105,115,32,110,111,116,32,107,110,111,119,110,44,32,115,111,32,112,108,101,97,115,101,32,99,97,108,108,32,86,101,114,116,101,120,66,117,102,102,101,114,58,58,66,105,110,100,84,111,77,97,116,101,114,105,97,108,32,111,110,99,101,32,97,116,32,108,111,97,100,32,116,105,109,101,32,98,101,102,111,114,101,32,99,97,108,108,105,110,103,32,71,114,97,112,104,105,99,115,58,58,65,112,112,108,121,86,101,114,116,101,120,66,117,102,102,101,114,33,0,0,0,0,0,115,116,111,110,101,115,46,98,109,112,0,0,0,0,0,0,100,111,99,117,109,101,110,116,46,85,82,76,59,0,0,0,70,111,114,99,101,66,111,108,100,0,0,0,0,0,0,0,71,76,95,73,78,70,79,95,76,79,71,95,76,69,78,71,84,72,0,0,0,0,0,0,75,80,88,0,0,0,0,0,112,97,115,115,119,111,114,100,0,0,0,0,0,0,0,0,66,73,84,77,65,80,0,0,108,111,99,97,108,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,0,0,0,98,97,100,32,72,0,0,0,66,105,78,111,114,109,97,108,0,0,0,0,0,0,0,0,82,101,110,100,101,114,105,110,103,32,117,115,105,110,103,32,67,80,85,32,109,101,109,111,114,121,33,0,0,0,0,0,117,118,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,112,97,114,115,101,32,71,76,32,115,104,97,100,101,114,32,117,110,105,102,111,114,109,32,101,110,116,114,121,32,39,37,115,39,33,32,84,104,101,32,108,105,110,101,32,115,104,111,117,108,100,32,98,101,32,111,102,32,102,111,114,109,32,39,117,110,105,102,111,114,109,32,116,121,112,101,32,110,97,109,101,59,39,33,0,0,69,120,112,97,110,115,105,111,110,70,97,99,116,111,114,0,71,76,95,86,65,76,73,68,65,84,69,95,83,84,65,84,85,83,0,0,0,0,0,0,75,80,72,0,0,0,0,0,76,97,110,103,117,97,103,101,71,114,111,117,112,0,0,0,66,66,88,0,0,0,0,0,98,97,100,32,99,111,109,112,111,110,101,110,116,32,73,68,0,0,0,0,0,0,0,0,80,111,115,84,0,0,0,0,101,103,108,71,101,116,69,114,114,111,114,58,32,34,37,115,34,32,102,97,105,108,101,100,58,32,69,114,114,111,114,32,48,120,37,88,32,114,101,99,101,105,118,101,100,33,0,0,73,109,97,103,101,58,58,67,114,101,97,116,101,78,101,119,32,102,97,105,108,101,100,33,0,0,0,0,0,0,0,0,110,111,114,109,97,108,0,0,79,112,101,110,71,76,32,69,83,32,71,76,83,76,32,37,100,46,37,100,0,0,0,0,73,110,118,97,108,105,100,32,99,97,108,108,32,116,111,32,73,109,97,103,101,58,58,67,114,101,97,116,101,78,101,119,40,119,105,100,116,104,61,37,100,44,32,104,101,105,103,104,116,61,37,100,44,32,102,111,114,109,97,116,61,37,115,41,33,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,83,99,114,101,101,110,79,114,105,101,110,116,97,116,105,111,110,76,97,110,100,115,99,97,112,101,0,0,0,0,0,0,83,116,101,109,83,110,97,112,86,0,0,0,0,0,0,0,71,76,95,76,73,78,75,95,83,84,65,84,85,83,0,0,75,80,0,0,0,0,0,0,108,101,110,73,86,0,0,0,68,87,73,68,84,72,0,0,37,0,0,0,73,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,58,0,0,0,37,0,0,0,83,0,0,0,32,0,0,0,37,0,0,0,112,0,0,0,0,0,0,0,98,97,100,32,99,111,109,112,111,110,101,110,116,32,99,111,117,110,116,0,0,0,0,0,84,101,120,67,111,111,114,100,0,0,0,0,0,0,0,0,68,101,102,97,117,108,116,32,103,102,120,97,112,105,32,111,102,102,115,99,114,101,101,110,32,70,66,79,0,0,0,0,84,101,120,116,117,114,101,32,102,111,114,109,97,116,32,37,115,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,112,111,115,0,0,0,0,0,71,108,71,101,110,66,117,102,102,101,114,115,32,103,101,110,101,114,97,116,101,100,32,97,32,86,66,79,47,86,65,79,32,119,105,116,104,32,110,97,109,101,32,48,46,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,99,114,101,97,116,101,100,44,32,111,114,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,97,99,116,105,118,101,44,32,111,114,32,116,104,105,115,32,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,105,115,32,98,114,111,107,101,110,33,0,0,0,0,117,110,107,110,111,119,110,32,99,111,109,112,114,101,115,115,105,111,110,32,109,101,116,104,111,100,0,0,0,0,0,0,59,0,0,0,0,0,0,0,97,117,116,111,102,105,116,116,101,114,0,0,0,0,0,0,37,73,58,37,77,58,37,83,32,37,112,0,0,0,0,0,83,116,101,109,83,110,97,112,72,0,0,0,0,0,0,0,71,76,95,68,69,76,69,84,69,95,83,84,65,84,85,83,0,0,0,0,0,0,0,0,73,116,97,108,105,99,65,110,103,108,101,0,0,0,0,0,85,110,105,113,117,101,73,68,0,0,0,0,0,0,0,0,83,87,73,68,84,72,0,0,119,105,110,102,111,110,116,115,0,0,0,0,0,0,0,0,48,32,119,105,100,116,104,0,67,111,108,0,0,0,0,0,71,76,95,69,88,84,95,116,101,120,116,117,114,101,95,102,105,108,116,101,114,95,97,110,105,115,111,116,114,111,112,105,99,0,0,0,0,0,0,0,78,111,116,32,101,110,111,117,103,104,32,105,110,105,116,105,97,108,32,98,121,116,101,32,100,97,116,97,32,112,97,115,115,101,100,32,105,110,32,116,111,32,99,111,110,116,97,105,110,32,116,104,101,32,119,104,111,108,101,32,116,101,120,116,117,114,101,32,109,101,109,111,114,121,32,119,104,101,110,32,99,114,101,97,116,105,110,103,32,116,101,120,116,117,114,101,32,39,37,115,39,33,32,37,100,32,98,121,116,101,115,32,110,101,101,100,101,100,44,32,104,97,100,32,37,100,32,98,121,116,101,115,0,0,0,0,83,99,114,101,101,110,82,101,115,105,122,101,100,46,32,37,100,120,37,100,44,32,37,115,0,0,0,0,0,0,0,0,116,121,112,101,52,50,0,0,117,110,105,102,111,114,109,0,37,0,0,0,97,0,0,0,32,0,0,0,37,0,0,0,98,0,0,0,32,0,0,0,37,0,0,0,100,0,0,0,32,0,0,0,37,0,0,0,72,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,58,0,0,0,37,0,0,0,83,0,0,0,32,0,0,0,37,0,0,0,89,0,0,0,0,0,0,0,0,0,0,0,116,114,117,101,116,121,112,101,0,0,0,0,0,0,0,0,77,105,110,70,101,97,116,117,114,101,0,0,0,0,0,0,37,115,58,32,37,100,0,0,73,115,70,105,120,101,100,86,0,0,0,0,0,0,0,0,83,116,114,111,107,101,87,105,100,116,104,0,0,0,0,0,69,78,67,79,68,73,78,71,0,0,0,0,0,0,0,0,116,121,112,101,49,0,0,0,110,111,32,104,101,97,100,101,114,32,104,101,105,103,104,116,0,0,0,0,0,0,0,0,80,111,115,0,0,0,0,0,79,69,83,95,116,101,120,116,117,114,101,95,104,97,108,102,95,102,108,111,97,116,0,0,84,101,120,116,117,114,101,58,58,67,114,101,97,116,101,78,101,119,32,102,97,105,108,101,100,33,32,78,111,116,32,101,110,111,117,103,104,32,105,110,105,116,105,97,108,32,98,121,116,101,32,100,97,116,97,32,112,97,115,115,101,100,32,105,110,32,116,111,32,99,111,110,116,97,105,110,32,116,104,101,32,119,104,111,108,101,32,116,101,120,116,117,114,101,32,109,101,109,111,114,121,33,32,78,111,116,32,99,114,101,97,116,105,110,103,32,116,104,101,32,116,101,120,116,117,114,101,33,0,0,0,0,0,0,0,0,116,114,117,101,116,121,112,101,0,0,0,0,0,0,0,0,115,99,114,101,101,110,72,97,108,102,83,105,122,101,0,0,115,109,111,111,116,104,0,0,115,102,110,116,0,0,0,0,114,97,115,116,101,114,49,0,112,115,110,97,109,101,115,0,112,115,104,105,110,116,101,114,0,0,0,0,0,0,0,0,42,47,0,0,0,0,0,0,37,97,32,37,98,32,37,100,32,37,72,58,37,77,58,37,83,32,37,89,0,0,0,0,84,121,112,101,32,52,50,0,83,116,100,86,87,0,0,0,79,98,106,101,99,116,32,105,115,32,110,101,105,116,104,101,114,32,97,32,115,104,97,100,101,114,32,111,98,106,101,99,116,32,111,114,32,97,32,112,114,111,103,114,97,109,32,111,98,106,101,99,116,33,0,0,73,115,70,105,120,101,100,80,105,116,99,104,0,0,0,0,70,111,114,99,101,66,111,108,100,84,104,114,101,115,104,111,108,100,0,0,0,0,0,0,83,84,65,82,84,67,72,65,82,0,0,0,0,0,0,0,115,97,109,112,108,101,114,67,117,98,101,0,0,0,0,0,70,114,101,101,84,121,112,101,32,71,108,121,112,104,32,67,97,99,104,101,0,0,0,0,111,110,108,121,32,56,45,98,105,116,0,0,0,0,0,0,66,105,84,97,110,103,101,110,116,0,0,0,0,0,0,0,79,69,83,95,116,101,120,116,117,114,101,95,102,108,111,97,116,0,0,0,0,0,0,0,115,116,98,95,108,111,97,100,32,115,117,99,99,101,115,115,102,117,108,108,121,32,108,111,97,100,101,100,32,105,109,97,103,101,44,32,98,117,116,32,114,101,116,117,114,101,110,100,32,112,97,114,97,109,101,116,101,114,115,32,97,114,101,32,119,114,111,110,103,33,0,0,115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,0,100,105,102,102,117,115,101,45,115,104,97,100,111,119,46,104,108,115,108,0,0,0,0,0,112,115,97,117,120,0,0,0,112,102,114,0,0,0,0,0,89,111,117,32,99,97,110,110,111,116,32,99,97,108,108,32,71,108,71,101,110,66,117,102,102,101,114,115,32,119,105,116,104,32,110,61,37,100,32,62,32,48,32,97,110,100,32,98,117,102,102,101,114,115,32,61,61,32,110,117,108,108,32,112,111,105,110,116,101,114,33,0,70,97,105,108,101,100,32,116,111,32,112,97,114,115,101,32,71,76,83,76,32,115,104,97,100,105,110,103,32,108,97,110,103,117,97,103,101,32,118,101,114,115,105,111,110,32,102,114,111,109,32,115,116,114,105,110,103,32,39,37,115,39,33,0,110,101,101,100,32,100,105,99,116,105,111,110,97,114,121,0,112,99,102,0,0,0,0,0,66,111,108,100,0,0,0,0,82,101,103,117,108,97,114,0,112,115,97,117,120,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,103,108,121,112,104,45,100,105,99,116,0,0,0,0,0,0,47,42,0,0,0,0,0,0,65,115,99,101,110,100,101,114,0,0,0,0,0,0,0,0,80,70,82,0,0,0,0,0,37,0,0,0,72,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,58,0,0,0,37,0,0,0,83,0,0,0,0,0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,83,116,100,72,87,0,0,0,73,115,67,73,68,70,111,110,116,0,0,0,0,0,0,0,71,76,95,73,78,70,79,95,76,79,71,95,76,69,78,71,84,72,58,32,37,100,0,0,108,101,110,66,117,105,108,100,67,104,97,114,65,114,114,97,121,0,0,0,0,0,0,0,69,78,68,67,72,65,82,0,82,101,103,117,108,97,114,0,112,115,104,105,110,116,101,114,0,0,0,0,0,0,0,0,99,97,110,118,97,115,0,0,98,97,100,32,83,79,70,32,108,101,110,0,0,0,0,0,65,86,69,82,65,71,69,95,87,73,68,84,72,0,0,0,67,117,115,116,111,109,0,0,87,69,66,71,76,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,0,0,0,0,71,76,95,85,78,83,73,71,78,69,68,95,66,89,84,69,0,0,0,0,0,0,0,0,73,110,118,97,108,105,100,32,110,117,109,98,101,114,32,111,102,32,116,101,120,116,117,114,101,32,99,104,97,110,110,101,108,115,33,0,0,0,0,0,114,101,115,111,117,114,99,101,46,102,114,107,47,0,0,0,35,100,101,102,105,110,101,32,83,72,65,68,79,87,95,49,84,65,80,10,0,0,0,0,116,49,99,105,100,0,0,0,99,102,102,0,0,0,0,0,47,47,0,0,0,0,0,0,37,72,58,37,77,58,37,83,0,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,105,110,102,111,0,70,97,109,105,108,121,79,116,104,101,114,66,108,117,101,115,0,0,0,0,0,0,0,0,73,115,66,97,115,101,70,111,110,116,0,0,0,0,0,0,71,76,95,67,79,77,80,73,76,69,95,83,84,65,84,85,83,58,32,37,100,0,0,0,83,117,98,114,67,111,117,110,116,0,0,0,0,0,0,0,69,78,68,70,79,78,84,0,37,100,0,0,0,0,0,0,110,111,32,83,79,70,0,0,80,111,115,105,116,105,111,110,84,0,0,0,0,0,0,0,77,79,90,95,87,69,66,71,76,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,115,116,98,105,95,108,111,97,100,32,115,117,99,99,101,115,115,102,117,108,108,121,32,108,111,97,100,101,100,32,105,109,97,103,101,32,34,37,115,34,44,32,98,117,116,32,116,104,101,32,114,101,116,117,114,110,101,100,32,105,109,97,103,101,32,115,105,122,101,32,105,115,32,105,110,118,97,108,105,100,32,40,37,100,120,37,100,41,33,0,0,0,0,0,0,0,76,111,97,100,84,101,120,116,117,114,101,68,97,116,97,70,114,111,109,80,75,77,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,105,109,97,103,101,32,100,97,116,97,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,33,32,82,101,97,100,32,37,100,32,98,121,116,101,115,44,32,101,120,112,101,99,116,101,100,32,37,100,32,98,121,116,101,115,46,0,35,100,101,102,105,110,101,32,83,72,65,68,79,87,95,57,84,65,80,83,10,0,0,0,84,101,120,116,117,114,101,58,58,67,111,110,118,101,114,116,84,111,70,111,114,109,97,116,58,32,67,111,110,118,101,114,115,105,111,110,32,102,114,111,109,32,102,111,114,109,97,116,32,39,37,115,39,32,116,111,32,102,111,114,109,97,116,32,39,37,115,39,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,33,0,0,0,67,97,108,108,105,110,103,32,71,108,86,105,101,119,112,111,114,116,32,119,105,116,104,32,105,110,118,97,108,105,100,32,110,101,103,97,116,105,118,101,32,104,101,105,103,104,116,32,61,32,37,100,33,0,0,0,70,97,105,108,101,100,32,116,111,32,112,97,114,115,101,32,46,100,100,115,32,102,105,108,101,32,76,85,77,73,78,65,78,67,69,32,98,105,116,32,102,111,114,109,97,116,32,82,58,37,48,56,88,44,32,71,58,37,48,56,88,44,32,66,58,37,48,56,88,44,32,65,58,32,37,48,56,88,33,0,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,66,77,80,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,34,37,115,34,32,102,111,114,32,114,101,97,100,105,110,103,33,0,35,63,82,65,68,73,65,78,67,69,0,0,0,0,0,0,98,100,102,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,98,117,105,108,100,32,115,104,97,100,101,114,33,0,114,98,0,0,0,0,0,0,37,0,0,0,109,0,0,0,47,0,0,0,37,0,0,0,100,0,0,0,47,0,0,0,37,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,102,111,110,116,45,110,97,109,101,0,0,0,0,70,97,109,105,108,121,66,108])
.concat([117,101,115,0,0,0,0,0,70,117,108,108,78,97,109,101,0,0,0,0,0,0,0,0,71,76,95,68,69,76,69,84,69,95,83,84,65,84,85,83,58,32,37,100,0,0,0,0,83,68,66,121,116,101,115,0,70,79,78,84,95,68,69,83,67,69,78,84,0,0,0,0,99,114,110,100,95,109,97,108,108,111,99,58,32,115,105,122,101,32,116,111,111,32,98,105,103,0,0,0,0,0,0,0,71,76,95,66,89,84,69,0,73,110,118,97,108,105,100,32,84,101,120,116,117,114,101,70,111,114,109,97,116,32,105,110,32,66,105,116,115,80,101,114,80,105,120,101,108,40,102,111,114,109,97,116,41,33,0,0,110,111,32,83,79,73,0,0,66,111,110,101,87,101,105,103,104,116,115,0,0,0,0,0,87,69,66,75,73,84,95,87,69,66,71,76,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,0,0,0,0,0,115,116,98,105,95,108,111,97,100,32,115,117,99,99,101,115,115,102,117,108,108,121,32,108,111,97,100,101,100,32,105,109,97,103,101,32,34,37,115,34,44,32,98,117,116,32,116,104,101,32,114,101,116,117,114,110,101,100,32,105,109,97,103,101,32,99,111,110,116,97,105,110,115,32,48,32,99,111,108,111,114,32,99,104,97,110,110,101,108,115,33,0,0,0,0,0,46,65,112,112,108,101,68,111,117,98,108,101,47,0,0,0,114,118,58,49,49,46,48,0,99,111,108,111,114,0,0,0,35,100,101,102,105,110,101,32,83,67,82,69,69,78,83,80,65,67,69,95,74,73,84,84,69,82,95,83,72,65,68,79,87,83,10,0,0,0,0,0,84,114,105,100,101,110,116,0,67,97,108,108,105,110,103,32,71,108,86,105,101,119,112,111,114,116,32,119,105,116,104,32,105,110,118,97,108,105,100,32,110,101,103,97,116,105,118,101,32,119,105,100,116,104,32,61,32,37,100,33,0,0,0,0,40,73,110,118,97,108,105,100,32,101,110,117,109,32,105,110,32,84,101,120,116,117,114,101,70,105,108,116,101,114,77,111,100,101,84,111,83,116,114,105,110,103,41,0,0,0,0,0,99,105,100,0,0,0,0,0,84,101,120,116,117,114,101,70,105,108,116,101,114,65,110,105,115,111,116,114,111,112,105,99,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,105,108,116,101,114,76,105,110,101,97,114,0,0,0,0,0,84,101,120,116,117,114,101,70,105,108,116,101,114,80,111,105,110,116,0,0,0,0,0,0,83,104,97,100,101,114,58,58,76,111,97,100,70,114,111,109,83,116,114,105,110,103,32,40,110,97,109,101,61,39,37,115,39,41,32,102,97,105,108,101,100,33,0,0,0,0,0,0,84,101,120,116,117,114,101,70,105,108,116,101,114,73,110,118,97,108,105,100,0,0,0,0,37,109,47,37,100,47,37,121,0,0,0,0,0,0,0,0,103,108,121,112,104,45,100,105,99,116,0,0,0,0,0,0,79,116,104,101,114,66,108,117,101,115,0,0,0,0,0,0,70,111,110,116,78,97,109,101,0,0,0,0,0,0,0,0,71,76,95,83,72,65,68,69,82,95,84,89,80,69,58,32,85,110,107,110,111,119,110,32,40,37,100,41,33,0,0,0,83,117,98,114,77,97,112,79,102,102,115,101,116,0,0,0,70,79,78,84,95,65,83,67,69,78,84,0,0,0,0,0,40,73,110,118,97,108,105,100,32,84,101,120,116,117,114,101,65,100,100,114,101,115,115,77,111,100,101,33,41,0,0,0,84,101,120,116,117,114,101,65,100,100,114,101,115,115,77,105,114,114,111,114,79,110,99,101,0,0,0,0,0,0,0,0,98,97,100,32,112,110,103,32,115,105,103,0,0,0,0,0,66,111,110,101,73,110,100,105,99,101,115,0,0,0,0,0,71,76,95,79,69,83,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,0,0,0,115,116,98,105,95,108,111,97,100,32,102,97,105,108,101,100,32,116,111,32,108,111,97,100,32,105,109,97,103,101,32,34,37,115,34,33,32,82,101,97,115,111,110,58,32,37,115,0,84,101,120,116,117,114,101,65,100,100,114,101,115,115,66,111,114,100,101,114,0,0,0,0,83,104,97,100,111,119,32,109,97,112,32,115,97,109,112,108,101,114,115,32,40,72,97,114,100,119,97,114,101,32,80,67,70,32,102,105,108,116,101,114,105,110,103,41,32,105,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,32,111,110,32,116,104,101,32,99,117,114,114,101,110,116,32,112,108,97,116,102,111,114,109,44,32,80,67,70,32,115,104,97,100,111,119,115,32,110,111,116,32,101,110,97,98,108,101,100,46,0,67,97,108,108,105,110,103,32,97,112,112,108,105,99,97,116,105,111,110,32,109,97,105,110,40,41,46,0,0,0,0,0,73,110,100,101,120,66,117,102,102,101,114,58,58,85,112,100,97,116,101,84,111,71,112,117,32,102,97,105,108,101,100,58,32,78,111,32,99,112,117,45,115,105,100,101,32,105,110,100,101,120,32,98,117,102,102,101,114,32,100,97,116,97,32,112,114,101,115,101,110,116,33,0,84,101,120,116,117,114,101,65,100,100,114,101,115,115,73,110,118,97,108,105,100,0,0,0,73,110,118,97,108,105,100,32,84,101,120,116,117,114,101,70,111,114,109,97,116,32,101,110,117,109,32,118,97,108,117,101,33,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,76,52,65,52,95,85,78,79,82,77,0,0,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,33,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,76,56,95,85,78,79,82,77,0,0,37,33,80,83,45,84,114,117,101,84,121,112,101,70,111,110,116,0,0,0,0,0,0,0,66,108,117,101,86,97,108,117,101,115,0,0,0,0,0,0,70,111,110,116,66,66,111,120,0,0,0,0,0,0,0,0,71,76,95,83,72,65,68,69,82,95,84,89,80,69,58,32,71,76,95,70,82,65,71,77,69,78,84,95,83,72,65,68,69,82,0,0,0,0,0,0,70,111,110,116,84,121,112,101,0,0,0,0,0,0,0,0,37,104,100,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,49,48,71,49,48,82,49,48,65,50,95,85,78,79,82,77,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,88,56,95,85,78,79,82,77,0,0,0,0,105,110,118,97,108,105,100,32,102,105,108,116,101,114,0,0,85,86,0,0,0,0,0,0,73,110,118,97,108,105,100,32,105,110,100,101,120,84,121,112,101,32,37,100,32,105,110,32,73,110,100,101,120,66,117,102,102,101,114,58,58,73,110,100,101,120,83,105,122,101,66,121,116,101,115,33,0,0,0,0,71,76,95,69,88,84,95,97,98,103,114,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,105,109,97,103,101,32,102,105,108,101,32,34,37,115,34,33,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,52,71,52,82,52,88,52,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,50,71,51,82,51,65,56,95,85,78,79,82,77,0,0,0,0,115,104,97,100,111,119,77,97,112,83,105,122,101,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,50,71,51,82,51,95,85,78,79,82,77,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,95,85,78,79,82,77,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,83,56,95,85,73,78,84,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,52,71,52,66,52,65,52,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,68,51,50,95,85,78,79,82,77,0,84,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,39,37,115,39,32,105,115,32,110,111,116,32,117,115,101,100,32,105,110,32,109,97,116,101,114,105,97,108,32,39,37,115,39,46,0,0,0,0,0,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,71,76,83,104,97,100,101,114,46,99,112,112,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,71,51,66,50,95,85,78,79,82,77,0,0,0,0,0,0,102,0,0,0,97,0,0,0,108,0,0,0,115,0,0,0,101,0,0,0,0,0,0,0,73,83,79,76,97,116,105,110,49,69,110,99,111,100,105,110,103,0,0,0,0,0,0,0,66,108,117,101,70,117,122,122,0,0,0,0,0,0,0,0,70,97,109,105,108,121,78,97,109,101,0,0,0,0,0,0,71,76,95,83,72,65,68,69,82,95,84,89,80,69,58,32,71,76,95,86,69,82,84,69,88,95,83,72,65,68,69,82,0,0,0,0,0,0,0,0,80,97,105,110,116,84,121,112,101,0,0,0,0,0,0,0,67,72,65,82,83,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,53,71,53,82,53,88,49,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,76,56,65,56,95,85,78,79,82,77,0,0,0,0,0,0,0,0,110,111,116,32,101,110,111,117,103,104,32,112,105,120,101,108,115,0,0,0,0,0,0,0,67,111,108,111,114,0,0,0,101,103,108,83,119,97,112,73,110,116,101,114,118,97,108,0,46,98,109,112,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,52,71,52,82,52,65,52,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,65,52,66,52,71,52,82,52,95,85,78,79,82,77,0,0,0,0,70,97,105,108,101,100,32,116,111,32,99,114,101,97,116,101,32,100,101,112,116,104,32,116,101,120,116,117,114,101,33,32,78,111,32,100,101,112,116,104,32,116,101,120,116,117,114,101,32,102,111,114,109,97,116,115,32,97,114,101,32,115,117,112,112,111,114,116,101,100,33,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,65,49,66,53,71,53,82,53,95,85,78,79,82,77,0,0,0,0,67,97,108,108,105,110,103,32,71,108,67,108,101,97,114,32,119,105,116,104,32,105,110,118,97,108,105,100,32,109,97,115,107,32,118,97,108,117,101,32,37,120,33,32,79,110,108,121,32,118,97,108,105,100,32,112,97,114,97,109,101,116,101,114,115,32,97,114,101,32,99,111,109,98,105,110,97,116,105,111,110,115,32,111,102,32,71,76,95,67,79,76,79,82,95,66,85,70,70,69,82,95,66,73,84,32,124,32,71,76,95,68,69,80,84,72,95,66,85,70,70,69,82,95,66,73,84,32,124,32,71,76,95,83,84,69,78,67,73,76,95,66,85,70,70,69,82,95,66,73,84,33,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,69,84,67,49,95,82,71,66,56,95,79,69,83,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,65,56,80,56,0,0,0,0,0,0,37,112,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,80,56,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,73,65,52,52,0,0,0,0,0,0,40,110,111,110,97,109,101,41,0,0,0,0,0,0,0,0,83,104,97,100,101,114,58,58,76,111,97,100,70,114,111,109,70,105,108,101,32,102,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,33,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,65,73,52,52,0,0,0,0,0,0,69,120,112,101,114,116,69,110,99,111,100,105,110,103,0,0,66,108,117,101,83,104,105,102,116,0,0,0,0,0,0,0,69,115,99,67,104,97,114,0,71,108,73,115,83,104,97,100,101,114,58,32,116,114,117,101,0,0,0,0,0,0,0,0,70,83,84,121,112,101,0,0,83,73,90,69,0,0,0,0,102,97,108,115,101,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,78,86,49,49,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,89,50,49,54,0,0,0,0,0,0,110,111,32,73,68,65,84,0,84,97,110,103,101,110,116,0,46,99,114,110,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,89,50,49,48,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,89,85,89,50,0,0,0,0,0,0,83,104,97,100,111,119,32,68,101,112,116,104,32,109,97,112,32,116,101,120,116,117,114,101,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,52,50,48,95,79,80,65,81,85,69,0,0,0,0,0,0,0,0,103,108,67,108,101,97,114,40,109,97,115,107,32,61,32,48,41,32,100,111,101,115,32,110,111,116,32,104,97,118,101,32,97,110,121,32,101,102,102,101,99,116,33,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,80,48,49,54,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,80,48,49,48,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,78,86,49,50,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,89,52,49,54,0,0,0,0,0,0,112,105,120,101,108,0,0,0,114,98,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,89,52,49,48,0,0,0,0,0,0,83,116,97,110,100,97,114,100,69,110,99,111,100,105,110,103,0,0,0,0,0,0,0,0,66,108,117,101,83,99,97,108,101,0,0,0,0,0,0,0,69,110,100,84,114,97,99,107,75,101,114,110,0,0,0,0,71,76,69,83,50,32,111,98,106,101,99,116,32,37,100,58,0,0,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,84,104,105,99,107,110,101,115,115,0,0,0,0,0,0,70,79,78,84,0,0,0,0,116,0,0,0,114,0,0,0,117,0,0,0,101,0,0,0,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,65,89,85,86,0,0,0,0,0,0,69,114,114,111,114,58,32,37,115,10,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,55,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,111,117,116,111,102,100,97,116,97,0,0,0,0,0,0,0,78,111,114,109,97,108,0,0,101,103,108,81,117,101,114,121,83,117,114,102,97,99,101,32,104,101,105,103,104,116,0,0,46,112,107,109,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,55,95,85,78,79,82,77,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,55,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,115,104,97,100,111,119,109,97,112,46,104,108,115,108,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,54,72,95,83,70,49,54,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,54,72,95,85,70,49,54,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,54,72,95,84,89,80,69,76,69,83,83,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,88,56,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,88,56,95,84,89,80,69,76,69,83,83,0,118,101,114,116,101,120,0,0,46,104,108,115,108,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,65,56,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,0,0,0,115,102,110,116,115,0,0,0,112,97,115,115,119,111,114,100,0,0,0,0,0,0,0,0,69,110,100,75,101,114,110,80,97,105,114,115,0,0,0,0,85,110,107,110,111,119,110,32,71,76,32,116,121,112,101,33,0,0,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,80,111,115,105,116,105,111,110,0,0,0,0,0,0,0,70,79,78,84,66,79,85,78,68,73,78,71,66,79,88,0,116,114,117,101,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,65,56,95,84,89,80,69,76,69,83,83,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,48,71,49,48,66,49,48,95,88,82,95,66,73,65,83,95,65,50,95,85,78,79,82,77,0,0,0,0,0,0,0,0,111,117,116,111,102,109,101,109,0,0,0,0,0,0,0,0,80,111,115,105,116,105,111,110,0,0,0,0,0,0,0,0,101,103,108,81,117,101,114,121,83,117,114,102,97,99,101,32,119,105,100,116,104,0,0,0,46,100,100,115,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,88,56,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,56,71,56,82,56,65,56,95,85,78,79,82,77,0,0,0,0,37,115,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,53,71,53,82,53,65,49,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,53,71,54,82,53,95,85,78,79,82,77,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,53,95,83,78,79,82,77,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,53,95,85,78,79,82,77,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,53,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,83,104,97,100,101,114,67,111,110,115,116,97,110,116,66,117,102,102,101,114,58,58,66,105,110,100,84,111,77,97,116,101,114,105,97,108,58,32,87,97,114,110,105,110,103,58,32,67,97,110,110,111,116,32,102,105,110,100,32,117,110,105,102,111,114,109,32,119,105,116,104,32,110,97,109,101,32,34,37,115,34,32,119,104,101,110,32,98,105,110,100,105,110,103,32,97,32,67,66,32,116,111,32,37,115,32,115,104,97,100,101,114,32,111,102,32,109,97,116,101,114,105,97,108,32,39,37,115,39,33,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,52,95,83,78,79,82,77,0,46,102,120,0,0,0,0,0,67,104,97,114,83,116,114,105,110,103,115,0,0,0,0,0,76,97,110,103,117,97,103,101,71,114,111,117,112,0,0,0,69,110,100,75,101,114,110,68,97,116,97,0,0,0,0,0,71,76,95,83,65,77,80,76,69,82,95,67,85,66,69,0,105,115,70,105,120,101,100,80,105,116,99,104,0,0,0,0,32,43,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,52,95,85,78,79,82,77,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,52,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,110,111,32,80,76,84,69,0,85,110,117,115,101,100,0,0,58,32,0,0,0,0,0,0,101,103,108,77,97,107,101,67,117,114,114,101,110,116,32,102,97,105,108,101,100,33,0,0,85,110,115,117,112,112,111,114,116,101,100,32,67,82,78,32,102,111,114,109,97,116,32,39,37,100,39,32,101,110,99,111,117,110,116,101,114,101,100,33,32,65,100,100,32,115,117,112,112,111,114,116,32,102,111,114,32,105,116,33,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,51,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,51,95,85,78,79,82,77,0,68,117,109,109,121,32,99,111,108,111,114,32,116,101,120,116,117,114,101,32,102,111,114,32,70,66,79,32,99,111,108,111,114,32,97,116,116,97,99,104,109,101,110,116,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,51,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,50,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,50,95,85,78,79,82,77,0,105,110,99,111,114,114,101,99,116,32,104,101,97,100,101,114,32,99,104,101,99,107,0,0,66,111,108,100,32,73,116,97,108,105,99,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,50,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,112,115,97,117,120,0,0,0,112,111,115,116,115,99,114,105,112,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,46,110,111,116,100,101,102,0,115,109,111,111,116,104,45,108,99,100,118,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,49,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,102,111,110,116,45,110,97,109,101,0,0,0,0,67,111,117,108,100,32,110,111,116,32,102,105,110,100,32,116,104,101,32,97,115,115,111,99,105,97,116,101,100,32,116,101,120,116,117,114,101,32,39,37,115,39,32,109,97,116,99,104,105,110,103,32,116,104,101,32,116,101,120,116,117,114,101,32,115,97,109,112,108,101,114,32,39,37,115,39,32,105,110,32,99,111,110,115,116,97,110,116,32,98,117,102,102,101,114,33,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,49,95,85,78,79,82,77,0,116,114,117,101,0,0,0,0,46,103,108,115,108,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,56,56,53,57,0,0,0,0,69,110,99,111,100,105,110,103,0,0,0,0,0,0,0,0,108,101,110,73,86,0,0,0,69,110,100,70,111,110,116,77,101,116,114,105,99,115,0,0,71,76,95,83,65,77,80,76,69,82,95,50,68,0,0,0,73,116,97,108,105,99,65,110,103,108,101,0,0,0,0,0,83,84,65,82,84,80,82,79,80,69,82,84,73,69,83,0,112,115,97,117,120,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,67,49,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,71,56,82,56,95,71,56,66,56,95,85,78,79,82,77,0,0,0,84,104,101,114,101,32,119,101,114,101,32,37,100,32,117,110,114,101,97,100,32,98,121,116,101,115,32,97,116,32,116,104,101,32,101,110,100,32,111,102,32,97,32,46,100,100,115,32,102,105,108,101,46,32,84,104,105,115,32,109,97,121,32,105,110,100,105,99,97,116,101,32,101,105,116,104,101,114,32,119,97,115,116,101,100,32,112,97,100,100,105,110,103,32,98,121,116,101,115,32,97,116,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,102,105,108,101,44,32,111,114,32,116,104,97,116,32,114,101,97,100,105,110,103,32,46,100,100,115,32,102,105,108,101,32,102,97,105,108,101,100,46,0,0,0,116,82,78,83,32,119,105,116,104,32,97,108,112,104,97,0,70,65,77,73,76,89,95,78,65,77,69,0,0,0,0,0,85,110,97,98,108,101,32,116,111,32,101,103,108,77,97,107,101,67,117,114,114,101,110,116,0,0,0,0,0,0,0,0,70,97,105,108,101,100,32,116,114,97,110,115,99,111,100,105,110,103,32,116,101,120,116,117,114,101,33,0,0,0,0,0,46,114,101,115,111,117,114,99,101,47,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,95,66,56,71,56,95,85,78,79,82,77,0,0,0,116,114,117,101,116,121,112,101,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,57,71,57,66,57,69,53,95,83,72,65,82,69,68,69,88,80,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,95,85,78,79,82,77,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,65,56,95,85,78,79,82,77,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,95,83,73,78,84,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,95,83,78,79,82,77,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,95,85,73,78,84,0,0,0,115,97,109,112,108,101,114,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,95,85,78,79,82,77,0,0,95,0,0,0,0,0,0,0,70,111,110,116,77,97,116,114,105,120,0,0,0,0,0,0,85,110,105,113,117,101,73,68,0,0,0,0,0,0,0,0,69,110,100,68,105,114,101,99,116,105,111,110,0,0,0,0,80,67,70,0,0,0,0,0,87,101,105,103,104,116,0,0,71,76,95,70,76,79,65,84,95,77,65,84,52,0,0,0,83,84,65,82,84,70,79,78,84,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,95,83,73,78,84,0,0,78,111,116,32,101,110,111,117,103,104,32,112,105,120,101,108,32,98,121,116,101,115,32,105,110,32,105,110,112,117,116,32,46,100,100,115,32,102,105,108,101,33,32,77,105,112,32,108,101,118,101,108,32,37,100,32,114,101,113,117,105,114,101,115,32,37,100,32,98,121,116,101,115,44,32,98,117,116,32,111,110,108,121,32,37,100,32,108,101,102,116,32,105,110,32,102,105,108,101,33,0,0,0,0,98,97,100,32,116,82,78,83,32,108,101,110,0,0,0,0,101,103,108,77,97,107,101,67,117,114,114,101,110,116,0,0,67,111,117,108,100,32,110,111,116,32,117,110,112,97,99,107,32,46,99,114,110,32,102,105,108,101,115,33,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,95,83,78,79,82,77,0,73,110,32,102,117,110,99,116,105,111,110,32,0,0,0,0,76,111,97,100,84,101,120,116,117,114,101,68,97,116,97,70,114,111,109,80,75,77,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,105,109,97,103,101,32,104,101,97,100,101,114,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,33,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,95,85,73,78,84,0,0,68,117,109,109,121,32,99,111,108,111,114,32,116,97,114,103,101,116,32,102,111,114,32,115,104,97,100,111,119,32,109,97,112,32,70,66,79,58,32,37,115,32,40,75,101,121,68,41,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,95,85,78,79,82,77,0,67,97,110,110,111,116,32,100,101,99,111,100,101,32,68,88,84,49,32,105,109,97,103,101,44,32,110,111,116,32,101,110,111,117,103,104,32,112,105,120,101,108,32,100,97,116,97,32,105,110,32,100,101,115,116,105,110,97,116,105,111,110,33,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,68,49,54,95,85,78,79,82,77,0,117,110,107,110,111,119,110,32,105,109,97,103,101,32,116,121,112,101,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,95,70,76,79,65,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,114,98,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,95,83,73,78,84,0,115,97,109,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,95,83,78,79,82,77,0,0,0,0,0,0,0,0,112,115,0,0,0,0,0,0,70,111,110,116,66,66,111,120,0,0,0,0,0,0,0,0,70,83,84,121,112,101,0,0,105,111,115,95,98,97,115,101,58,58,99,108,101,97,114,0,69,110,100,67,111,109,112,111,115,105,116,101,115,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,70,97,109,105,108,121,78,97,109,101,0,0,0,0,0,0,71,76,95,70,76,79,65,84,95,77,65,84,51,0,0,0,67,79,77,77,69,78,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,95,85,73,78,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,95,85,78,79,82,77,0,0,0,0,0,0,0,0,67,97,110,110,111,116,32,108,111,97,100,32,118,111,108,117,109,101,32,116,101,120,116,117,114,101,115,32,102,114,111,109,32,68,68,83,0,0,0,0,116,82,78,83,32,98,101,102,111,114,101,32,80,76,84,69,0,0,0,0,0,0,0,0,67,58,92,80,114,111,106,101,99,116,115,92,71,114,97,112,104,105,99,115,69,110,103,105,110,101,92,115,114,99,92,83,104,97,100,101,114,46,99,112,112,0,0,0,0,0,0,0,79,117,116,32,111,102,32,109,101,109,111,114,121,33,0,0,73,110,105,116,105,97,108,105,122,101,100,32,97,32,71,76,69,83,37,100,32,99,111,110,116,101,120,116,32,118,105,97,32,69,71,76,46,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,95,84,89,80,69,76,69,83,83,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,88,50,52,95,84,89,80,69,76,69,83,83,95,71,56,95,85,73,78,84,0,0,0,0,0,0,100,105,115,97,98,108,101,100,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,50,52,95,85,78,79,82,77,95,88,56,95,84,89,80,69,76,69,83,83,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,68,50,52,95,85,78,79,82,77,95,83,56,95,85,73,78,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,50,52,71,56,95,84,89,80,69,76,69,83,83,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,95,83,73,78,84,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,95,85,73,78,84,0,0,71,76,67,111,110,115,116,97,110,116,84,121,112,101,83,105,122,101,66,121,116,101,115,58,32,85,110,107,110,111,119,110,32,71,76,101,110,117,109,32,116,121,112,101,40,37,100,41,32,114,101,99,101,105,118,101,100,33,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,95,70,76,79,65,84,0,118,115,0,0,0,0,0,0,83,116,114,111,107,101,87,105,100,116,104,0,0,0,0,0,114,98,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,84,104,105,99,107,110,101,115,115,0,0,0,0,0,0,69,110,100,67,104,97,114,77,101,116,114,105,99,115,0,0,98,100,102,0,0,0,0,0,70,117,108,108,78,97,109,101,0,0,0,0,0,0,0,0,71,76,95,70,76,79,65,84,95,77,65,84,50,0,0,0,40,71,76,101,110,117,109,32,48,120,37,88,41,0,0,0,82,101,103,117,108,97,114,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,68,51,50,95,70,76,79,65,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,84,104,101,32,102,105,108,101,32,105,115,32,97,32,99,117,98,101,109,97,112,32,98,117,116,32,100,111,101,115,32,110,111,116,32,99,111,110,116,97,105,110,32,97,108,108,32,54,32,102,97,99,101,115,32,111,102,32,116,104,101,32,99,117,98,101,109,97,112,33,32,76,111,97,100,105,110,103,32,112,97,114,116,105,97,108,32,99,117,98,101,109,97,112,32,102,105,108,101,115,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,33,0,0,116,82,78,83,32,97,102,116,101,114,32,73,68,65,84,0,99,114,110,100,95,117,110,112,97,99,107,95,98,101,103,105,110,40,41,32,102,97,105,108,101,100,33,0,0,0,0,0,101,103,108,67,114,101,97,116,101,67,111,110,116,101,120,116,32,102,97,105,108,101,100,33,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,95,83,73,78,84,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,95,83,78,79,82,77,0,0,0,0,0,0,101,110,97,98,108,101,100,0,67,58,47,80,114,111,106,101,99,116,115,47,71,114,97,112,104,105,99,115,69,110,103,105,110,101,47,46,46,47,71,114,97,112,104,105,99,115,69,110,103,105,110,101,47,115,114,99,47,99,114,117,110,99,104,47,99,114,110,95,100,101,99,111,109,112,46,104,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,95,85,73,78,84,0,0,0,0,0,0,0,73,110,118,97,108,105,100,32,84,101,120,116,117,114,101,70,111,114,109,97,116,32,105,110,32,66,105,116,115,80,101,114,80,105,120,101,108,40,102,111,114,109,97,116,41,33,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,95,85,78,79,82,77,0,0,0,0,0,0,47,95,95,95,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,95,70,76,79,65,84,0,0,0,0,0,0,95,95,95,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,95,84,89,80,69,76,69,83,83,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,83,73,78,84,0,0,0,0,0,71,76,67,111,110,115,116,97,110,116,84,121,112,101,84,111,83,104,97,100,101,114,67,111,110,115,116,97,110,116,84,121,112,101,58,32,85,110,107,110,111,119,110,32,71,76,101,110,117,109,32,116,121,112,101,40,37,100,41,32,114,101,99,101,105,118,101,100,33,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,83,78,79,82,77,0,0,0,0,73,110,118,97,108,105,100,32,101,110,117,109,40,37,100,41,32,112,97,115,115,101,100,32,116,111,32,83,104,97,100,101,114,84,121,112,101,84,111,71,76,69,83,83,104,97,100,101,114,69,110,117,109,33,0,0,70,111,110,116,84,121,112,101,0,0,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,80,111,115,105,116,105,111,110,0,0,0,0,0,0,0,69,110,100,65,120,105,115,0,82,101,103,117,108,97,114,0,78,111,116,105,99,101,0,0,71,76,95,66,79,79,76,95,86,69,67,52,0,0,0,0,65,68,68,95,83,84,89,76,69,95,78,65,77,69,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,85,73,78,84,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,85,78,79,82,77,95,83,82,71,66,0,0,0,0,0,0,0,65,114,114,97,121,115,32,111,102,32,116,101,120,116,117,114,101,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,105,110,118,97,108,105,100,32,80,76,84,69,0,0,0,0,99,114,110,100,95,103,101,116,95,116,101,120,116,117,114,101,95,105,110,102,111,40,41,32,102,97,105,108,101,100,33,0,101,103,108,67,114,101,97,116,101,67,111,110,116,101,120,116,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,85,78,79,82,77,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,84,89,80,69,76,69,83,83,0,83,99,114,101,101,110,45,115,112,97,99,101,32,106,105,116,116,101,114,32,112,97,116,116,101,114,110,58,32,37,115,32,40,75,101,121,74,41,0,0,68,101,99,111,100,101,68,88,84,49,32,102,97,105,108,101,100,33,32,83,111,117,114,99,101,32,105,109,97,103,101,32,98,117,102,102,101,114,32,105,115,32,110,117,108,108,33,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,49,71,49,49,66,49,48,95,70,76,79,65,84,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,48,71,49,48,66,49,48,65,50,95,85,73,78,84,0,0,80,114,101,115,115,85,112,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,48,71,49,48,66,49,48,65,50,95,85,78,79,82,77,0,80,114,101,115,115,77,111,118,101,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,48,71,49,48,66,49,48,65,50,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,112,97,114,115,101,32,46,100,100,115,32,102,105,108,101,32,82,71,66,32,99,111,108,111,114,32,98,105,116,32,102,111,114,109,97,116,32,82,58,37,48,56,88,44,32,71,58,37,48,56,88,44,32,66,58,37,48,56,88,44,32,65,58,32,37,48,56,88,33,0,80,114,101,115,115,68,111,119,110,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,88,51,50,95,84,89,80,69,76,69,83,83,95,71,56,88,50,52,95,85,73,78,84,0,0,0,71,76,95,66,79,79,76,95,86,69,67,52,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,80,114,101,115,115,78,111,110,101,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,95,70,76,79,65,84,95,88,56,88,50,52,95,84,89,80,69,76,69,83,83,0,0,103,108,67,114,101,97,116,101,83,104,97,100,101,114,32,102,97,105,108,101,100,33,0,0,80,97,105,110,116,84,121,112,101,0,0,0,0,0,0,0,105,115,70,105,120,101,100,80,105,116,99,104,0,0,0,0,69,110,99,111,100,105,110,103,83,99,104,101,109,101,0,0,65,68,68,95,83,84,89,76,69,95,78,65,77,69,0,0,118,101,114,115,105,111,110,0,71,76,95,66,79,79,76,95,86,69,67,51,0,0,0,0,83,69,84,87,73,68,84,72,95,78,65,77,69,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,68,51,50,95,70,76,79,65,84,95,83,56,88,50,52,95,85,73,78,84,0,0,0,0,0,0,114,98,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,56,88,50,52,95,84,89,80,69,76,69,83,83,0,67,97,110,110,111,116,32,108,111,97,100,32,40,68,88,49,48,41,32,68,68,83,32,102,105,108,101,115,32,116,104,97,116,32,97,114,101,32,110,111,116,32,50,68,32,116,101,120,116,117,114,101,115,33,0,0,102,105,114,115,116,32,110,111,116,32,73,72,68,82,0,0,84,104,101,32,105,110,112,117,116,32,102,105,108,101,32,119,97,115,32,48,32,98,121,116,101,115,32,105,110,32,115,105,122,101,44,32,111,114,32,102,97,105,108,101,100,32,116,111,32,114,101,97,100,32,105,110,112,117,116,32,102,105,108,101,32,100,97,116,97,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,33,0,0,0,101,103,108,67,114,101,97,116,101,87,105,110,100,111,119,83,117,114,102,97,99,101,32,102,97,105,108,101,100,33,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,95,83,73,78,84,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,95,85,73,78,84,0,0,0,0,0,0,0,110,101,97,114,101,115,116,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,95,70,76,79,65,84,0,0,0,0,0,0,39,93,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,95,84,89,80,69,76,69,83,83,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,66,49,54,65,49,54,95,83,73,78,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,66,49,54,65,49,54,95,83,78,79,82,77,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,66,49,54,65,49,54,95,85,73,78,84,0,71,76,95,66,79,79,76,95,86,69,67,51,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,66,49,54,65,49,54,95,85,78,79,82,77,0,0,0,0,0,0,0,0,32,32,37,50,100,58,32,37,115,0,0,0,0,0,0,0,105,110,99,111,109,112,108,101,116,101,32,100,121,110,97,109,105,99,32,98,105,116,32,108,101,110,103,116,104,115,32,116,114,101,101,0,0,0,0,0,70,111,110,116,78,97,109,101,0,0,0,0,0,0,0,0,73,116,97,108,105,99,65,110,103,108,101,0,0,0,0,0,68,101,115,99,101,110,100,101,114,0,0,0,0,0,0,0,83,69,84,87,73,68,84,72,95,78,65,77,69,0,0,0,67,73,68,67,111,117,110,116,0,0,0,0,0,0,0,0,71,76,95,66,79,79,76,95,86,69,67,50,0,0,0,0,66,111,108,100,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,66,49,54,65,49,54,95,70,76,79,65,84,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,49,54,71,49,54,66,49,54,65,49,54,95,84,89,80,69,76,69,83,83,0,0,0,0,0,68,68,83,32,104,101,97,100,101,114,32,104,97,115,32,68,88,49,48,32,101,120,116,101,110,115,105,111,110,44,32,98,117,116,32,110,111,116,32,101,110,111,117,103,104,32,115,112,97,99,101,32,102,111,114,32,68,88,49,48,32,104,101,97,100,101,114,33,0,0,0,0,70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,37,117,98,32,111,102,32,105,109,97,103,101,32,100,97,116,97])
.concat([32,102,114,111,109,32,66,77,80,32,102,105,108,101,32,40,103,111,116,32,111,110,108,121,32,37,117,98,41,33,0,0,48,45,112,105,120,101,108,32,105,109,97,103,101,0,0,0,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,67,82,78,70,105,108,101,58,32,84,104,101,32,105,110,112,117,116,32,102,105,108,101,32,119,97,115,32,48,32,98,121,116,101,115,32,105,110,32,115,105,122,101,44,32,111,114,32,102,97,105,108,101,100,32,116,111,32,114,101,97,100,32,105,110,112,117,116,32,102,105,108,101,32,100,97,116,97,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,33,0,101,103,108,67,114,101,97,116,101,87,105,110,100,111,119,83,117,114,102,97,99,101,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,95,83,73,78,84,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,95,85,73,78,84,0,0,0,0,108,105,110,101,97,114,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,95,70,76,79,65,84,0,0,0,91,100,101,108,101,116,101,100,32,39,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,95,84,89,80,69,76,69,83,83,0,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,65,51,50,95,83,73,78,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,65,51,50,95,85,73,78,84,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,65,51,50,95,70,76,79,65,84,0,0,0,0,0,0,0,0,71,76,95,66,79,79,76,95,86,69,67,50,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,51,50,71,51,50,66,51,50,65,51,50,95,84,89,80,69,76,69,83,83,0,0,0,0,0,84,104,101,32,99,111,110,116,101,110,116,32,102,111,114,32,116,104,101,32,115,104,97,100,101,114,32,116,104,97,116,32,102,97,105,108,101,100,32,116,111,32,99,111,109,112,105,108,101,58,0,0,0,0,0,0,111,118,101,114,115,117,98,115,99,114,105,98,101,100,32,100,121,110,97,109,105,99,32,98,105,116,32,108,101,110,103,116,104,115,32,116,114,101,101,0,70,83,84,121,112,101,0,0,87,101,105,103,104,116,0,0,67,104,97,114,97,99,116,101,114,115,0,0,0,0,0,0,66,111,108,100,0,0,0,0,71,68,66,121,116,101,115,0,71,76,95,66,79,79,76,0,87,69,73,71,72,84,95,78,65,77,69,0,0,0,0,0,84,101,120,116,117,114,101,70,111,114,109,97,116,95,85,78,75,78,79,87,78,0,0,0,118,101,99,116,111,114,0,0,68,68,83,32,114,101,97,100,101,114,32,114,101,112,111,114,116,115,32,105,110,118,97,108,105,100,32,109,105,112,32,109,97,112,32,99,111,117,110,116,32,37,100,33,0,0,0,0,70,97,105,108,101,100,32,116,111,32,97,108,108,111,99,97,116,101,32,37,100,98,32,102,111,114,32,105,109,97,103,101,32,102,105,108,101,33,0,0,98,97,100,32,105,110,116,101,114,108,97,99,101,32,109,101,116,104,111,100,0,0,0,0,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,32,102,111,114,32,114,101,97,100,105,110,103,33,0,0,0,101,103,108,67,104,111,111,115,101,67,111,110,102,105,103,32,102,97,105,108,101,100,33,0,83,104,97,100,111,119,32,109,97,112,32,102,105,108,116,101,114,105,110,103,32,109,111,100,101,58,32,37,115,32,40,75,101,121,70,41,0,0,0,0,67,97,110,110,111,116,32,115,101,116,32,101,108,101,109,101,110,116,32,111,102,32,116,121,112,101,32,37,115,32,105,110,32,118,101,114,116,101,120,32,98,117,102,102,101,114,44,32,116,104,101,32,100,97,116,97,32,99,104,97,110,110,101,108,32,105,115,32,109,105,115,115,105,110,103,33,0,0,0,0,91,100,101,108,101,116,101,100,0,0,0,0,0,0,0,0,71,76,95,66,79,79,76,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,46,46,46,32,97,110,100,32,117,110,102,111,114,116,117,110,97,116,101,108,121,32,71,76,95,73,78,70,79,95,76,79,71,95,76,69,78,71,84,72,32,105,115,32,122,101,114,111,32,102,111,114,32,116,104,101,32,99,111,109,112,105,108,97,116,105,111,110,32,45,32,117,110,107,110,111,119,110,32,101,114,114,111,114,33,0,0,0,101,109,112,116,121,32,100,105,115,116,97,110,99,101,32,116,114,101,101,32,119,105,116,104,32,108,101,110,103,116,104,115,0,0,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,84,104,105,99,107,110,101,115,115,0,0,0,0,0,0,70,97,109,105,108,121,78,97,109,101,0,0,0,0,0,0,67,104,97,114,97,99,116,101,114,83,101,116,0,0,0,0,87,69,73,71,72,84,95,78,65,77,69,0,0,0,0,0,70,68,66,121,116,101,115,0,71,76,95,73,78,84,95,86,69,67,52,0,0,0,0,0,73,116,97,108,105,99,0,0,37,46,48,76,102,0,0,0,40,117,110,107,110,111,119,110,32,82,101,115,117,108,116,67,111,100,101,41,0,0,0,0,51,68,32,116,101,120,116,117,114,101,115,32,97,114,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,33,32,46,100,100,115,32,102,105,108,101,32,104,97,100,32,100,101,112,116,104,32,37,100,46,0,0,73,110,118,97,108,105,100,32,66,77,80,32,105,110,112,117,116,32,105,109,97,103,101,32,115,105,122,101,33,32,83,105,122,101,58,32,37,100,32,98,121,116,101,115,44,32,119,105,100,116,104,58,32,37,100,44,32,104,101,105,103,104,116,58,32,37,100,44,32,98,112,112,58,32,37,100,0,0,0,0,98,97,100,32,102,105,108,116,101,114,32,109,101,116,104,111,100,0,0,0,0,0,0,0,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,67,82,78,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,32,102,111,114,32,114,101,97,100,105,110,103,33,0,101,103,108,67,104,111,111,115,101,67,111,110,102,105,103,0,80,67,70,32,115,97,109,112,108,105,110,103,58,32,100,105,115,97,98,108,101,100,44,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,116,104,105,115,32,116,97,114,103,101,116,32,112,108,97,116,102,111,114,109,0,0,0,71,76,95,73,78,84,95,86,69,67,52,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,0,40,117,110,107,110,111,119,110,32,115,104,97,100,101,114,32,116,121,112,101,41,0,0,0,105,110,99,111,109,112,108,101,116,101,32,100,105,115,116,97,110,99,101,32,116,114,101,101,0,0,0,0,0,0,0,0,85,110,100,101,114,108,105,110,101,80,111,115,105,116,105,111,110,0,0,0,0,0,0,0,70,117,108,108,78,97,109,101,0,0,0,0,0,0,0,0,67,104,97,114,87,105,100,116,104,0,0,0,0,0,0,0,73,116,97,108,105,99,0,0,67,73,68,77,97,112,79,102,102,115,101,116,0,0,0,0,71,76,95,73,78,84,95,86,69,67,51,0,0,0,0,0,79,98,108,105,113,117,101,0,109,111,110,101,121,95,103,101,116,32,101,114,114,111,114,0,69,95,85,110,115,117,112,112,111,114,116,101,100,0,0,0,73,110,118,97,108,105,100,32,105,109,97,103,101,32,100,105,109,101,110,115,105,111,110,115,32,37,100,120,37,100,33,0,80,97,108,101,116,116,105,122,101,100,32,66,77,80,32,102,111,114,109,97,116,115,32,97,114,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,98,97,100,32,99,111,109,112,32,109,101,116,104,111,100,0,76,111,97,100,84,101,120,116,117,114,101,68,97,116,97,70,114,111,109,80,75,77,70,105,108,101,32,102,97,105,108,101,100,33,0,0,0,0,0,0,101,103,108,71,101,116,67,111,110,102,105,103,115,32,102,97,105,108,101,100,32,116,111,32,114,101,116,117,114,110,32,118,97,108,105,100,32,99,111,110,102,105,103,117,114,97,116,105,111,110,115,33,0,0,0,0,78,117,109,98,101,114,32,111,102,32,115,97,109,112,108,101,100,32,116,97,112,115,58,32,37,100,32,40,75,101,121,49,47,75,101,121,50,47,75,101,121,51,41,0,0,0,0,0,71,108,71,101,110,84,101,120,116,117,114,101,115,32,103,101,110,101,114,97,116,101,100,32,97,32,116,101,120,116,117,114,101,32,110,97,109,101,32,48,46,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,99,114,101,97,116,101,100,44,32,111,114,32,71,76,32,99,111,110,116,101,120,116,32,110,111,116,32,97,99,116,105,118,101,44,32,111,114,32,116,104,105,115,32,71,76,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,105,115,32,98,114,111,107,101,110,33,0,0,0,0,0,0,0,0,73,110,118,97,108,105,100,32,84,101,120,116,117,114,101,70,111,114,109,97,116,32,105,110,32,66,105,116,115,80,101,114,80,105,120,101,108,40,102,111,114,109,97,116,41,33,0,0,40,110,117,108,108,41,0,0,73,110,118,97,108,105,100,32,84,101,120,116,117,114,101,70,111,114,109,97,116,32,105,110,32,66,105,116,115,80,101,114,80,105,120,101,108,40,102,111,114,109,97,116,41,33,0,0,105,110,118,97,108,105,100,32,119,105,110,100,111,119,32,115,105,122,101,0,0,0,0,0,82,101,103,117,108,97,114,0,89,111,117,32,99,97,110,110,111,116,32,99,97,108,108,32,71,108,71,101,110,84,101,120,116,117,114,101,115,32,119,105,116,104,32,110,61,37,100,32,62,32,48,32,97,110,100,32,116,101,120,116,117,114,101,115,32,61,61,32,110,117,108,108,32,112,111,105,110,116,101,114,33,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,112,115,104,105,110,116,101,114,0,0,0,0,0,0,0,0,115,102,110,116,0,0,0,0,115,109,111,111,116,104,45,108,99,100,0,0,0,0,0,0,115,102,110,116,45,116,97,98,108,101,0,0,0,0,0,0,114,97,115,116,101,114,53,0,112,111,115,116,115,99,114,105,112,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,83,97,116,0,0,0,0,0,71,76,95,73,78,84,95,86,69,67,51,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,0,83,116,97,114,116,70,111,110,116,77,101,116,114,105,99,115,0,0,0,0,0,0,0,0,112,102,114,45,109,101,116,114,105,99,115,0,0,0,0,0,71,76,95,70,82,65,71,77,69,78,84,95,83,72,65,68,69,82,0,0,0,0,0,0,111,118,101,114,115,117,98,115,99,114,105,98,101,100,32,100,105,115,116,97,110,99,101,32,116,114,101,101,0,0,0,0,49,48,54,52,54,0,0,0,105,115,70,105,120,101,100,80,105,116,99,104,0,0,0,0,78,111,116,105,99,101,0,0,67,97,112,72,101,105,103,104,116,0,0,0,0,0,0,0,79,98,108,105,113,117,101,0,105,111,115,116,114,101,97,109,0,0,0,0,0,0,0,0,70,114,105,0,0,0,0,0,85,73,68,66,97,115,101,0,67,73,68,0,0,0,0,0,71,76,95,73,78,84,95,86,69,67,50,0,0,0,0,0,83,76,65,78,84,0,0,0,112,115,104,105,110,116,101,114,0,0,0,0,0,0,0,0,37,76,102,0,0,0,0,0,115,102,110,116,0,0,0,0,84,104,117,0,0,0,0,0,69,95,79,117,116,79,102,77,101,109,111,114,121,0,0,0,68,68,83,32,102,105,108,101,32,104,97,115,32,117,110,101,120,112,101,99,116,101,100,32,68,68,83,95,80,73,88,69,76,70,79,82,77,65,84,32,115,105,122,101,32,102,105,101,108,100,32,40,37,100,32,98,121,116,101,115,41,46,32,73,103,110,111,114,105,110,103,32,116,104,105,115,32,97,110,100,32,97,115,115,117,109,105,110,103,32,116,104,101,32,115,105,122,101,32,116,111,32,98,101,32,115,105,122,101,111,102,40,68,68,83,95,80,73,88,69,76,70,79,82,77,65,84,41,61,37,100,32,98,121,116,101,115,46,0,0,0,0,0,0,80,97,108,101,116,116,105,122,101,100,32,102,111,114,109,97,116,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,98,97,100,32,99,116,121,112,101,0,0,0,0,0,0,0,83,80,65,67,73,78,71,0,87,101,100,0,0,0,0,0,76,111,97,100,105,110,103,32,80,75,77,32,102,105,108,101,32,37,115,0,0,0,0,0,101,103,108,71,101,116,67,111,110,102,105,103,115,0,0,0,37,0,0,0,0,0,0,0,116,121,112,101,49,0,0,0,84,117,101,0,0,0,0,0,83,104,97,100,111,119,32,109,97,112,32,115,105,122,101,58,32,37,100,120,37,100,32,40,75,101,121,85,112,47,75,101,121,68,111,119,110,41,0,0,77,111,110,0,0,0,0,0,83,117,110,0,0,0,0,0,40,110,111,110,97,109,101,41,0,0,0,0,0,0,0,0,80,111,105,110,116,83,97,109,112,108,101,82,101,115,105,122,101,73,109,97,103,101,32,102,97,105,108,101,100,33,32,68,101,115,116,105,110,97,116,105,111,110,32,98,121,116,101,115,105,122,101,32,100,111,101,115,110,39,116,32,109,97,116,99,104,33,0,0,0,0,0,0,83,97,116,117,114,100,97,121,0,0,0,0,0,0,0,0,70,114,105,100,97,121,0,0,87,97,114,110,105,110,103,58,32,37,115,10,0,0,0,0,84,104,117,114,115,100,97,121,0,0,0,0,0,0,0,0,87,101,100,110,101,115,100,97,121,0,0,0,0,0,0,0,71,76,95,73,78,84,95,86,69,67,50,32,117,110,115,117,112,112,111,114,116,101,100,33,0,0,0,0,0,0,0,0,71,76,95,86,69,82,84,69,88,95,83,72,65,68,69,82,0,0,0,0,0,0,0,0,105,110,99,111,109,112,108,101,116,101,32,108,105,116,101,114,97,108,47,108,101,110,103,116,104,32,116,114,101,101,0,0,73,116,97,108,105,99,65,110,103,108,101,0,0,0,0,0,118,101,114,115,105,111,110,0,67,72,0,0,0,0,0,0,84,117,101,115,100,97,121,0,83,76,65,78,84,0,0,0,83,117,112,112,108,101,109,101,110,116,0,0,0,0,0,0,116,116,45,99,109,97,112,115,0,0,0,0,0,0,0,0,71,76,95,70,76,79,65,84,95,86,69,67,52,0,0,0,49,0,0,0,0,0,0,0,77,111,110,100,97,121,0,0,69,95,66,97,100,80,97,114,97,109,101,116,101,114,0,0,32,102,114,111,109,32,0,0,37,115,40,37,117,41,58,32,65,115,115,101,114,116,105,111,110,32,102,97,105,108,117,114,101,58,32,34,37,115,34,10,0,0,0,0,0,0,0,0,82,101,112,111,114,116,101,100,32,68,68,83,32,104,101,97,100,101,114,32,115,105,122,101,32,105,115,32,116,111,111,32,115,109,97,108,108,33,32,40,37,100,32,98,121,116,101,115,41,46,32,83,104,111,117,108,100,32,98,101,32,97,116,32,108,101,97,115,116,32,115,105,122,101,111,102,40,68,68,83,95,72,69,65,68,69,82,41,61,37,100,32,98,121,116,101,115,46,0,0,0,0,0,0,85,110,115,117,112,112,111,114,116,101,100,32,66,77,80,32,99,111,109,112,114,101,115,115,105,111,110,32,37,100,32,117,115,101,100,33,0,0,0,0,56,98,105,116,32,111,110,108,121,0,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,101,109,112,116,121,32,102,105,108,101,32,115,116,114,105,110,103,33,0,0,0,0,0,0,0,83,117,110,100,97,121,0,0,70,97,105,108,101,100,32,116,111,32,108,111,97,100,32,68,68,83,32,116,101,120,116,117,114,101,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,33,0,0,0,0,0,0,101,103,108,71,101,116,67,111,110,102,105,103,115,32,102,97,105,108,101,100,32,116,111,32,114,101,116,117,114,110,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,118,97,108,105,100,32,99,111,110,102,105,103,117,114,97,116,105,111,110,115,33,0,0,0,0,0,0,76,111,97,100,84,101,120,116,117,114,101,68,97,116,97,70,114,111,109,80,75,77,70,105,108,101,58,32,70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,102,105,108,101,32,39,37,115,39,33,0,0,0,115,104,97,100,111,119,77,97,112,95,115,97,109,112,108,101,114,0,0,0,0,0,0,0,83,0,0,0,97,0,0,0,116,0,0,0,0,0,0,0,68,101,99,111,100,105,110,103,32,68,88,84,49,32,105,110,116,111,32,111,116,104,101,114,32,102,111,114,109,97,116,115,32,116,104,97,110,32,84,101,120,116,117,114,101,70,111,114,109,97,116,95,66,53,71,54,82,53,95,85,78,79,82,77,32,97,110,100,32,84,101,120,116,117,114,101,70,111,114,109,97,116,95,82,56,71,56,66,56,65,56,95,85,78,79,82,77,32,97,114,101,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,33,0,0,70,0,0,0,114,0,0,0,105,0,0,0,0,0,0,0,80,111,105,110,116,83,97,109,112,108,101,82,101,115,105,122,101,73,109,97,103,101,32,102,97,105,108,101,100,33,32,83,111,117,114,99,101,32,98,121,116,101,115,105,122,101,32,100,111,101,115,110,39,116,32,109,97,116,99,104,33,0,0,0,84,0,0,0,104,0,0,0,117,0,0,0,0,0,0,0,87,0,0,0,101,0,0,0,100,0,0,0,0,0,0,0,84,0,0,0,117,0,0,0,101,0,0,0,0,0,0,0,77,0,0,0,111,0,0,0,110,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,99,111,109,112,105,108,101,32,115,104,97,100,101,114,32,37,115,58,10,37,115,10,0,0,0,0,0,0,0,0,111,118,101,114,115,117,98,115,99,114,105,98,101,100,32,108,105,116,101,114,97,108,47,108,101,110,103,116,104,32,116,114,101,101,0,0,0,0,0,0,87,101,105,103,104,116,0,0,67,104,97,114,83,116,114,105,110,103,115,0,0,0,0,0,83,108,97,110,116,0,0,0,67,67,0,0,0,0,0,0,117,110,115,112,101,99,105,102,105,101,100,32,105,111,115,116,114,101,97,109,95,99,97,116,101,103,111,114,121,32,101,114,114,111,114,0,0,0,0,0,83,0,0,0,117,0,0,0,110,0,0,0,0,0,0,0,67,72,65,82,83,69,84,95,69,78,67,79,68,73,78,71,0,0,0,0,0,0,0,0,79,114,100,101,114,105,110,103,0,0,0,0,0,0,0,0,103,108,121,112,104,45,100,105,99,116,0,0,0,0,0,0,71,76,95,70,76,79,65,84,95,86,69,67,51,0,0,0,56,56,53,57,0,0,0,0,99,102,102,0,0,0,0,0,83,0,0,0,97,0,0,0,116,0,0,0,117,0,0,0,114,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,69,95,67,111,114,114,117,112,116,101,100,73,110,112,117,116,0,0,0,0,0,0,0,0,68,68,83,32,102,105,108,101,32,114,101,112,111,114,116,115,32,104,101,97,100,101,114,32,115,105,122,101,32,102,105,101,108,100,32,97,115,32,122,101,114,111,46,32,65,115,115,117,109,105,110,103,32,115,105,122,101,111,102,40,68,68,83,95,72,69,65,68,69,82,41,61,37,100,32,105,110,115,116,101,97,100,46,0,0,0,0,0,73,102,32,121,111,117,32,97,114,101,32,117,115,105,110,103,32,71,73,77,80,44,32,115,116,111,114,101,32,116,104,101,32,105,109,97,103,101,115,32,105,110,32,66,71,82,65,32,102,111,114,109,97,116,44,32,105,110,115,116,101,97,100,32,111,102,32,66,71,82,88,32,102,111,114,109,97,116,33,0,116,111,111,32,108,97,114,103,101,0,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,115,104,97,100,101,114,32,100,97,116,97,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,33,0,0,0,0,0,0,70,0,0,0,114,0,0,0,105,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,114,101,97,100,32,98,121,116,101,115,32,102,114,111,109,32,102,105,108,101,32,39,37,115,39,44,32,111,114,32,105,116,115,32,115,105,122,101,32,119,97,115,32,48,33,0,37,100,46,37,100,32,37,53,49,48,115,0,0,0,0,0,91,48,93,0,0,0,0,0,66,68,70,0,0,0,0,0,84,0,0,0,104,0,0,0,117,0,0,0,114,0,0,0,115,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,115,104,97,100,111,119,77,97,112,0,0,0,0,0,0,0,120,102,56,54,45,100,114,105,118,101,114,45,110,97,109,101,0,0,0,0,0,0,0,0,87,0,0,0,101,0,0,0,100,0,0,0,110,0,0,0,101,0,0,0,115,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,84,0,0,0,117,0,0,0,101,0,0,0,115,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,95,77,85,76,69,95,82,69,76,65,84,73,86,69,95,67,79,77,80,79,83,69,0,0,80,111,105,110,116,83,97,109,112,108,101,82,101,115,105,122,101,73,109,97,103,101,32,102,97,105,108,101,100,33,32,67,97,110,110,111,116,32,114,101,115,105,122,101,32,105,109,97,103,101,115,32,111,102,32,102,111,114,109,97,116,32,39,37,115,39,33,0,0,0,0,0,77,0,0,0,111,0,0,0,110,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,95,77,85,76,69,95,66,65,83,69,76,73,78,69,95,79,70,70,83,69,84,0,0,0,83,0,0,0,117,0,0,0,110,0,0,0,100,0,0,0,97,0,0,0,121,0,0,0,0,0,0,0,0,0,0,0,88,95,72,69,73,71,72,84,0,0,0,0,0,0,0,0,87,69,73,71,72,84,0,0,68,101,99,0,0,0,0,0,85,78,68,69,82,76,73,78,69,95,84,72,73,67,75,78,69,83,83,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,99,111,109,112,105,108,101,32,115,104,97,100,101,114,32,39,37,115,39,33,0,0,105,110,118,97,108,105,100,32,100,105,115,116,97,110,99,101,32,99,111,100,101,0,0,0,70,97,109,105,108,121,78,97,109,101,0,0,0,0,0,0,70,111,110,116,68,105,114,101,99,116,111,114,121,0,0,0,79,112,116,105,99,97,108,83,105,122,101,0,0,0,0,0,67,0,0,0,0,0,0,0,78,111,118,0,0,0,0,0,67,72,65,82,83,69,84,95,82,69,71,73,83,84,82,89,0,0,0,0,0,0,0,0,85,78,68,69,82,76,73,78,69,95,80,79,83,73,84,73,79,78,0,0,0,0,0,0,82,101,103,105,115,116,114,121,0,0,0,0,0,0,0,0,112,111,115,116,115,99,114,105,112,116,45,102,111,110,116,45,110,97,109,101,0,0,0,0,71,76,95,70,76,79,65,84,95,86,69,67,50,0,0,0,49,48,54,52,54,0,0,0,79,84,84,79,0,0,0,0,79,99,116,0,0,0,0,0,83,85,80,69,82,83,67,82,73,80,84,95,89,0,0,0,69,95,70,105,108,101,78,111,116,70,111,117,110,100,0,0,68,68,83,32,102,105,108,101,32,114,101,112,111,114,116,115,32,117,110,101,120,112,101,99,116,101,100,108,121,32,108,97,114,103,101,32,104,101,97,100,101,114,32,115,105,122,101,32,37,100,32,98,121,116,101,115,46,32,69,120,112,101,99,116,101,100,32,116,111,32,103,101,116,32,115,105,122,101,111,102,40,68,68,83,95,72,69,65,68,69,82,41,32,40,37,100,41,32,105,110,115,116,101,97,100,46,32,65,115,115,117,109,105,110,103,32,116,104,101,32,101,120,116,114,97,32,98,121,116,101,115,32,97,114,101,32,112,97,100,100,105,110,103,47,111,116,104,101,114,32,101,120,116,114,97,32,100,97,116,97,32,97,116,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,104,101,97,100,101,114,44,32,97,110,100,32,115,107,105,112,112,105,110,103,32,105,116,46,0,0,0,0,0,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,66,77,80,70,105,108,101,58,32,85,110,115,117,112,112,111,114,116,101,100,32,66,77,80,32,99,111,109,112,114,101,115,115,105,111,110,32,37,100,32,117,115,101,100,33,0,0,98,97,100,32,73,72,68,82,32,108,101,110,0,0,0,0,83,101,112,0,0,0,0,0,83,85,80,69,82,83,67,82,73,80,84,95,88,0,0,0,70,105,108,101,32,39,37,115,39,32,99,111,117,108,100,32,110,111,116,32,98,101,32,111,112,101,110,101,100,33,0,0,101,103,108,73,110,105,116,105,97,108,105,122,101,32,102,97,105,108,101,100,33,0,0,0,65,117,103,0,0,0,0,0,83,85,80,69,82,83,67,82,73,80,84,95,83,73,90,69,0,0,0,0,0,0,0,0,68,101,112,116,104,83,116,97,116,101,58,58,67,114,101,97,116,101,58,32,69,114,114,111,114,33,32,67,97,110,110,111,116,32,104,97,118,101,32,122,45,119,114,105,116,101,115,32,111,110,32,98,117,116,32,122,45,116,101,115,116,115,32,111,102,102,33,32,67,114,101,97,116,105,110,103,32,68,101,112,116,104,83,116,97,116,101,32,119,105,116,104,32,98,111,116,104,32,122,45,119,114,105,116,101,115,32,97,110,100,32,122,45,116,101,115,116,115,32,111,102,102,33,0,0,0,0,0,108,105,103,104,116,86,105,101,119,80,114,111,106,0,0,0,117,118,0,0,0,0,0,0,69,109,115,99,114,105,112,116,101,110,32,109,97,105,110,40,41,46,0,0,0,0,0,0,248,176,1,0,1,0,0,0,1,0,0,0,0,0,0,0,40,140,1,0,2,0,0,0,1,0,0,0,0,0,0,0,208,121,1,0,2,0,0,0,1,0,0,0,0,0,0,0,136,120,1,0,2,0,0,0,1,0,0,0,0,0,0,0,88,119,1,0,2,0,0,0,1,0,0,0,0,0,0,0,216,117,1,0,1,0,0,0,1,0,0,0,0,0,0,0,248,74,1,0,1,0,0,0,1,0,0,0,0,0,0,0,32,80,1,0,1,0,0,0,1,0,0,0,0,0,0,0,224,170,1,0,1,0,0,0,1,0,0,0,0,0,0,0,224,115,1,0,1,0,0,0,1,0,0,0,0,0,0,0,128,128,1,0,3,0,0,0,1,0,0,0,0,0,0,0,8,115,1,0,3,0,0,0,1,0,0,0,0,0,0,0,104,113,1,0,1,0,0,0,1,0,0,0,0,0,0,0,104,112,1,0,2,0,0,0,1,0,0,0,0,0,0,0,8,111,1,0,1,0,0,0,1,0,0,0,0,0,0,0,248,165,1,0,1,0,0,0,1,0,0,0,0,0,0,0,40,109,1,0,2,0,0,0,1,0,0,0,0,0,0,0,48,157,1,0,1,0,0,0,1,0,0,0,0,0,0,0,96,107,1,0,1,0,0,0,1,0,0,0,0,0,0,0,8,147,1,0,2,0,0,0,1,0,0,0,0,0,0,0,64,144,1,0,2,0,0,0,1,0,0,0,0,0,0,0,88,106,1,0,1,0,0,0,1,0,0,0,0,0,0,0,48,105,1,0,1,0,0,0,1,0,0,0,0,0,0,0,232,103,1,0,2,0,0,0,1,0,0,0,0,0,0,0,208,102,1,0,2,0,0,0,1,0,0,0,0,0,0,0,144,101,1,0,2,0,0,0,1,0,0,0,0,0,0,0,104,100,1,0,2,0,0,0,1,0,0,0,0,0,0,0,128,99,1,0,1,0,0,0,1,0,0,0,0,0,0,0,88,109,1,0,2,0,0,0,1,0,0,0,0,0,0,0,64,124,1,0,2,0,0,0,1,0,0,0,0,0,0,0,248,97,1,0,2,0,0,0,1,0,0,0,0,0,0,0,64,96,1,0,2,0,0,0,1,0,0,0,0,0,0,0,88,94,1,0,2,0,0,0,1,0,0,0,0,0,0,0,160,92,1,0,2,0,0,0,1,0,0,0,0,0,0,0,136,91,1,0,2,0,0,0,1,0,0,0,0,0,0,0,176,90,1,0,2,0,0,0,1,0,0,0,0,0,0,0,40,90,1,0,2,0,0,0,1,0,0,0,0,0,0,0,144,89,1,0,2,0,0,0,1,0,0,0,0,0,0,0,168,88,1,0,2,0,0,0,1,0,0,0,0,0,0,0,248,87,1,0,2,0,0,0,1,0,0,0,0,0,0,0,32,87,1,0,2,0,0,0,1,0,0,0,0,0,0,0,184,85,1,0,2,0,0,0,1,0,0,0,0,0,0,0,168,84,1,0,2,0,0,0,1,0,0,0,0,0,0,0,0,84,1,0,2,0,0,0,1,0,0,0,0,0,0,0,136,83,1,0,2,0,0,0,1,0,0,0,0,0,0,0,56,83,1,0,2,0,0,0,1,0,0,0,0,0,0,0,208,82,1,0,2,0,0,0,1,0,0,0,0,0,0,0,88,82,1,0,2,0,0,0,1,0,0,0,0,0,0,0,224,81,1,0,2,0,0,0,1,0,0,0,0,0,0,0,8,81,1,0,2,0,0,0,1,0,0,0,0,0,0,0,80,80,1,0,2,0,0,0,1,0,0,0,0,0,0,0,224,79,1,0,2,0,0,0,1,0,0,0,0,0,0,0,176,78,1,0,2,0,0,0,1,0,0,0,0,0,0,0,112,78,1,0,2,0,0,0,1,0,0,0,0,0,0,0,40,78,1,0,2,0,0,0,1,0,0,0,0,0,0,0,224,77,1,0,2,0,0,0,1,0,0,0,0,0,0,0,80,77,1,0,2,0,0,0,1,0,0,0,0,0,0,0,8,77,1,0,2,0,0,0,1,0,0,0,0,0,0,0,184,76,1,0,2,0,0,0,1,0,0,0,0,0,0,0,40,76,1,0,3,0,0,0,1,0,0,0,0,0,0,0,32,75,1,0,3,0,0,0,1,0,0,0,0,0,0,0,184,74,1,0,2,0,0,0,1,0,0,0,0,0,0,0,152,96,1,0,3,0,0,0,1,0,0,0,0,0,0,0,8,86,1,0,3,0,0,0,1,0,0,0,0,0,0,0,72,180,1,0,1,0,0,0,1,0,0,0,0,0,0,0,248,194,1,0,1,0,0,0,1,0,0,0,0,0,0,0,80,73,1,0,2,0,0,0,1,0,0,0,0,0,0,0,0,196,1,0,1,0,0,0,1,0,0,0,0,0,0,0,48,73,1,0,2,0,0,0,1,0,0,0,0,0,0,0,16,73,1,0,2,0,0,0,1,0,0,0,0,0,0,0,248,72,1,0,2,0,0,0,1,0,0,0,0,0,0,0,152,72,1,0,2,0,0,0,1,0,0,0,0,0,0,0,120,72,1,0,2,0,0,0,1,0,0,0,0,0,0,0,160,207,1,0,2,0,0,0,1,0,0,0,0,0,0,0,80,207,1,0,2,0,0,0,1,0,0,0,0,0,0,0,8,206,1,0,2,0,0,0,1,0,0,0,0,0,0,0,160,205,1,0,2,0,0,0,1,0,0,0,0,0,0,0,248,204,1,0,2,0,0,0,1,0,0,0,0,0,0,0,232,204,1,0,3,0,0,0,1,0,0,0,0,0,0,0,168,186,1,0,1,0,0,0,1,0,0,0,0,0,0,0,216,204,1,0,2,0,0,0,1,0,0,0,0,0,0,0,160,204,1,0,2,0,0,0,1,0,0,0,0,0,0,0,32,204,1,0,2,0,0,0,1,0,0,0,0,0,0,0,82,101,115,117,108,116,32,71,114,97,112,104,105,99,115,58,58,83,101,116,82,101,110,100,101,114,84,97,114,103,101,116,40,105,110,116,44,32,84,101,120,116,117,114,101,32,42,42,44,32,84,101,120,116,117,114,101,32,42,44,32,84,101,120,116,117,114,101,32,42,41,0,82,101,115,117,108,116,32,71,114,97,112,104,105,99,115,58,58,67,114,101,97,116,101,87,105,110,100,111,119,40,115,116,114,117,99,116,32,101,110,103,105,110,101,32,42,44,32,84,101,120,116,117,114,101,70,111,114,109,97,116,44,32,84,101,120,116,117,114,101,70,111,114,109,97,116,44,32,105,110,116,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,67,114,101,97,116,101,78,101,119,40,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,84,101,120,116,117,114,101,84,121,112,101,44,32,84,101,120,116,117,114,101,70,111,114,109,97,116,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,44,32,99,111,110,115,116,32,117,56,32,42,44,32,115,105,122,101,95,116,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,67,114,101,97,116,101,71,80,85,40,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,84,101,120,116,117,114,101,84,121,112,101,44,32,84,101,120,116,117,114,101,70,111,114,109,97,116,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,44,32,99,111,110,115,116,32,73,109,97,103,101,32,42,44,32,105,110,116,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,67,114,101,97,116,101,66,101,115,116,77,97,116,99,104,105,110,103,40,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,84,101,120,116,117,114,101,84,121,112,101,44,32,84,101,120,116,117,114,101,70,111,114,109,97,116,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,44,32,99,111,110,115,116,32,73,109,97,103,101,32,42,44,32,105,110,116,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,0,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,67,114,101,97,116,101,77,97,105,110,77,101,109,111,114,121,40,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,84,101,120,116,117,114,101,84,121,112,101,44,32,84,101,120,116,117,114,101,70,111,114,109,97,116,44,32,99,111,110,115,116,32,73,109,97,103,101,32,42,44,32,105,110,116,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,80,75,77,70,105,108,101,40,99,111,110,115,116,32,99,104,97,114,32,42,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,68,68,83,70,105,108,101,40,99,111,110,115,116,32,99,104,97,114,32,42,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,67,82,78,70,105,108,101,40,99,111,110,115,116,32,99,104,97,114,32,42,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,66,77,80,70,105,108,101,40,99,111,110,115,116,32,99,104,97,114,32,42,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,83,101,116,78,117,109,77,105,112,109,97,112,115,40,105,110,116,44,32,98,111,111,108,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,41,0,0,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,70,105,108,101,40,70,105,108,101,32,38,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,44,32,98,111,111,108,41,0,0,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,76,111,97,100,70,114,111,109,70,105,108,101,40,99,111,110,115,116,32,99,104,97,114,32,42,44,32,82,101,115,111,117,114,99,101,85,115,97,103,101,44,32,65,99,99,101,115,115,70,108,97,103,115,44,32,98,111,111,108,41,0,0,0,0,115,116,97,116,105,99,32,82,101,115,117,108,116,32,84,101,120,116,117,114,101,58,58,67,111,112,121,82,101,103,105,111,110,50,68,40,84,101,120,116,117,114,101,32,38,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,84,101,120,116,117,114,101,32,38,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,83,104,97,100,101,114,58,58,76,111,97,100,70,114,111,109,83,116,114,105,110,103,40,83,104,97,100,101,114,84,121,112,101,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,83,104,97,100,101,114,58,58,76,111,97,100,70,114,111,109,70,105,108,101,40,83,104,97,100,101,114,84,121,112,101,44,32,70,105,108,101,32,38,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,0,0,0,0,0,0,82,101,115,117,108,116,32,83,104,97,100,101,114,58,58,76,111,97,100,70,114,111,109,70,105,108,101,40,83,104,97,100,101,114,84,121,112,101,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,44,32,99,111,110,115,116,32,99,104,97,114,32,42,41,0,82,101,115,117,108,116,32,80,97,114,115,101,68,68,83,70,114,111,109,70,105,108,101,73,110,77,101,109,111,114,121,40,117,56,32,42,44,32,105,110,116,44,32,68,68,83,68,101,115,99,32,38,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,49,50,51,52,53,54,55,56,57,0,0,0,0,0,0,48,49,50,51,52,53,54,55,56,57,0,0,0,0,0,0,37,0,0,0,89,0,0,0,45,0,0,0,37,0,0,0,109,0,0,0,45,0,0,0,37,0,0,0,100,0,0,0,37,0,0,0,72,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,58,0,0,0,37,0,0,0,83,0,0,0,37,0,0,0,72,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,0,0,0,0,37,0,0,0,73,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,58,0,0,0,37,0,0,0,83,0,0,0,32,0,0,0,37,0,0,0,112,0,0,0,0,0,0,0,37,0,0,0,109,0,0,0,47,0,0,0,37,0,0,0,100,0,0,0,47,0,0,0,37,0,0,0,121,0,0,0,37,0,0,0,72,0,0,0,58,0,0,0,37,0,0,0,77,0,0,0,58,0,0,0,37,0,0,0,83,0,0,0,37,72,58,37,77,58,37,83,37,72,58,37,77,0,0,0,37,73,58,37,77,58,37,83,32,37,112,0,0,0,0,0,37,89,45,37,109,45,37,100,37,109,47,37,100,47,37,121,37,72,58,37,77,58,37,83,37,0,0,0,0,0,0,0,37,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,152,48,0,0,2,0,0,0,56,48,0,0,0,0,0,0,0,0,128,191,0,0,128,191,0,0,0,0,0,0,0,0,0,0,128,63,0,0,128,191,0,0,128,63,0,0,0,0,0,0,128,191,0,0,128,63,0,0,0,0,0,0,128,63,0,0,128,191,0,0,128,63,0,0,0,0,0,0,128,63,0,0,128,63,0,0,128,191,0,0,128,63,0,0,0,0,0,0,128,63,0,0,128,63,0,0,128,63,0,0,128,63,6,0,16,0,40,0,0,0,20,0,0,0,45,0,0,0,55,0,0,0,0,0,0,0,16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,137,80,78,71,13,10,26,10,88,88,88,88,32,99,104,117,110,107,32,110,111,116,32,107,110,111,119,110,0,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,8,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,8,247,1,0,52,0,0,0,54,0,0,0,118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,247,1,0,94,1,0,0,28,1,0,0,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,247,1,0,10,1,0,0,210,1,0,0,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,247,1,0,26,0,0,0,10,0,0,0,208,0,0,0,0,0,0,0])
.concat([0,0,0,0,0,0,0,0,0,0,0,0,72,247,1,0,26,0,0,0,28,0,0,0,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,247,1,0,32,1,0,0,150,0,0,0,80,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,247,1,0,204,1,0,0,72,1,0,0,80,0,0,0,4,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,247,1,0,26,1,0,0,74,1,0,0,80,0,0,0,12,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,247,1,0,206,1,0,0,108,0,0,0,80,0,0,0,10,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,248,1,0,200,1,0,0,162,0,0,0,80,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,248,1,0,24,1,0,0,198,0,0,0,80,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,248,1,0,86,1,0,0,200,0,0,0,80,0,0,0,212,0,0,0,4,0,0,0,34,0,0,0,26,0,0,0,16,0,0,0,60,0,0,0,4,0,0,0,248,255,255,255,160,248,1,0,34,0,0,0,16,0,0,0,6,0,0,0,22,0,0,0,4,0,0,0,56,0,0,0,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,248,1,0,174,1,0,0,146,1,0,0,80,0,0,0,32,0,0,0,12,0,0,0,66,0,0,0,24,0,0,0,14,0,0,0,2,0,0,0,6,0,0,0,248,255,255,255,200,248,1,0,110,0,0,0,188,0,0,0,204,0,0,0,216,0,0,0,170,0,0,0,2,0,0,0,88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,248,1,0,140,0,0,0,78,1,0,0,80,0,0,0,80,0,0,0,72,0,0,0,18,0,0,0,76,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,249,1,0,148,1,0,0,114,0,0,0,80,0,0,0,230,0,0,0,138,0,0,0,28,0,0,0,88,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,249,1,0,180,1,0,0,2,0,0,0,80,0,0,0,102,0,0,0,40,0,0,0,98,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,249,1,0,76,0,0,0,6,0,0,0,80,0,0,0,150,0,0,0,22,0,0,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,249,1,0,128,1,0,0,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,88,249,1,0,50,0,0,0,240,0,0,0,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,249,1,0,8,0,0,0,38,1,0,0,80,0,0,0,32,0,0,0,6,0,0,0,8,0,0,0,4,0,0,0,32,0,0,0,4,0,0,0,2,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,136,249,1,0,174,0,0,0,164,0,0,0,80,0,0,0,26,0,0,0,28,0,0,0,40,0,0,0,34,0,0,0,38,0,0,0,8,0,0,0,6,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,249,1,0,66,0,0,0,36,0,0,0,80,0,0,0,52,0,0,0,50,0,0,0,36,0,0,0,44,0,0,0,30,0,0,0,48,0,0,0,42,0,0,0,58,0,0,0,56,0,0,0,54,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,249,1,0,90,0,0,0,4,0,0,0,80,0,0,0,62,0,0,0,74,0,0,0,22,0,0,0,70,0,0,0,64,0,0,0,72,0,0,0,68,0,0,0,28,0,0,0,78,0,0,0,76,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,249,1,0,136,0,0,0,160,0,0,0,80,0,0,0,108,0,0,0,36,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,249,1,0,48,0,0,0,46,1,0,0,80,0,0,0,76,0,0,0,46,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,250,1,0,14,0,0,0,70,1,0,0,80,0,0,0,2,0,0,0,12,0,0,0,64,0,0,0,210,0,0,0,178,0,0,0,94,0,0,0,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,250,1,0,54,1,0,0,230,0,0,0,80,0,0,0,14,0,0,0,16,0,0,0,78,0,0,0,84,0,0,0,14,0,0,0,82,0,0,0,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,250,1,0,54,1,0,0,30,0,0,0,80,0,0,0,6,0,0,0,4,0,0,0,24,0,0,0,174,0,0,0,96,0,0,0,50,0,0,0,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,250,1,0,54,1,0,0,128,0,0,0,80,0,0,0,8,0,0,0,10,0,0,0,86,0,0,0,52,0,0,0,116,0,0,0,52,0,0,0,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,136,250,1,0,54,1,0,0,60,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,152,250,1,0,100,0,0,0,8,1,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,250,1,0,54,1,0,0,142,0,0,0,80,0,0,0,96,0,0,0,66,0,0,0,56,0,0,0,90,0,0,0,88,0,0,0,124,0,0,0,232,0,0,0,20,0,0,0,46,0,0,0,82,0,0,0,66,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,250,1,0,208,1,0,0,62,0,0,0,80,0,0,0,206,0,0,0,16,0,0,0,174,0,0,0,140,0,0,0,56,0,0,0,58,0,0,0,112,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,250,1,0,216,0,0,0,140,1,0,0,126,0,0,0,34,0,0,0,134,0,0,0,138,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,251,1,0,54,1,0,0,136,1,0,0,80,0,0,0,8,0,0,0,10,0,0,0,86,0,0,0,52,0,0,0,116,0,0,0,52,0,0,0,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,251,1,0,54,1,0,0,166,1,0,0,80,0,0,0,8,0,0,0,10,0,0,0,86,0,0,0,52,0,0,0,116,0,0,0,52,0,0,0,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,251,1,0,172,1,0,0,160,1,0,0,50,0,0,0,100,0,0,0,14,0,0,0,38,0,0,0,152,0,0,0,180,0,0,0,132,0,0,0,48,0,0,0,44,0,0,0,48,0,0,0,174,0,0,0,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,251,1,0,12,0,0,0,208,0,0,0,94,0,0,0,152,0,0,0,36,0,0,0,34,0,0,0,82,0,0,0,146,0,0,0,92,0,0,0,12,0,0,0,20,0,0,0,58,1,0,0,84,0,0,0,224,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,96,251,1,0,114,1,0,0,116,1,0,0,252,255,255,255,252,255,255,255,96,251,1,0,102,1,0,0,220,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,120,251,1,0,130,1,0,0,162,1,0,0,252,255,255,255,252,255,255,255,120,251,1,0,196,0,0,0,98,1,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,144,251,1,0,156,0,0,0,190,1,0,0,248,255,255,255,248,255,255,255,144,251,1,0,126,1,0,0,158,1,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,168,251,1,0,194,0,0,0,106,1,0,0,248,255,255,255,248,255,255,255,168,251,1,0,236,0,0,0,86,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,251,1,0,104,1,0,0,56,1,0,0,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,251,1,0,182,1,0,0,154,1,0,0,34,0,0,0,100,0,0,0,14,0,0,0,38,0,0,0,92,0,0,0,180,0,0,0,132,0,0,0,48,0,0,0,44,0,0,0,48,0,0,0,130,0,0,0,60,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,251,1,0,4,1,0,0,48,1,0,0,64,0,0,0,152,0,0,0,36,0,0,0,34,0,0,0,154,0,0,0,146,0,0,0,92,0,0,0,12,0,0,0,20,0,0,0,58,1,0,0,158,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,252,1,0,142,1,0,0,246,0,0,0,80,0,0,0,108,0,0,0,206,0,0,0,78,0,0,0,128,0,0,0,10,0,0,0,58,0,0,0,86,0,0,0,46,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,252,1,0,190,0,0,0,96,0,0,0,80,0,0,0,196,0,0,0,202,0,0,0,104,0,0,0,118,0,0,0,122,0,0,0,138,0,0,0,200,0,0,0,82,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,252,1,0,152,1,0,0,204,0,0,0,80,0,0,0,28,0,0,0,94,0,0,0,130,0,0,0,80,0,0,0,134,0,0,0,84,0,0,0,168,0,0,0,92,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,136,252,1,0,138,0,0,0,36,1,0,0,80,0,0,0,184,0,0,0,190,0,0,0,56,0,0,0,114,0,0,0,52,0,0,0,44,0,0,0,128,0,0,0,110,0,0,0,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,252,1,0,92,1,0,0,24,0,0,0,70,0,0,0,100,0,0,0,14,0,0,0,38,0,0,0,152,0,0,0,180,0,0,0,132,0,0,0,112,0,0,0,220,0,0,0,72,0,0,0,174,0,0,0,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,252,1,0,20,0,0,0,132,1,0,0,100,0,0,0,152,0,0,0,36,0,0,0,34,0,0,0,82,0,0,0,146,0,0,0,92,0,0,0,172,0,0,0,40,0,0,0,10,0,0,0,84,0,0,0,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,252,1,0,194,1,0,0,96,1,0,0,112,0,0,0,250,0,0,0,48,0,0,0,2,0,0,0,8,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,253,1,0,66,1,0,0,202,1,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,253,1,0,120,0,0,0,232,0,0,0,112,0,0,0,42,0,0,0,12,0,0,0,216,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,253,1,0,62,1,0,0,46,0,0,0,112,0,0,0,124,0,0,0,74,0,0,0,68,1,0,0,0,0,0,0,0,0,0,0,83,116,57,116,121,112,101,95,105,110,102,111,0,0,0,0,83,116,57,101,120,99,101,112,116,105,111,110,0,0,0,0,83,116,57,98,97,100,95,97,108,108,111,99,0,0,0,0,83,116,56,98,97,100,95,99,97,115,116,0,0,0,0,0,83,116,49,51,114,117,110,116,105,109,101,95,101,114,114,111,114,0,0,0,0,0,0,0,83,116,49,50,108,101,110,103,116,104,95,101,114,114,111,114,0,0,0,0,0,0,0,0,83,116,49,49,108,111,103,105,99,95,101,114,114,111,114,0,78,83,116,51,95,95,49,57,116,105,109,101,95,98,97,115,101,69,0,0,0,0,0,0,78,83,116,51,95,95,49,57,109,111,110,101,121,95,112,117,116,73,119,78,83,95,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,69,69,0,0,0,78,83,116,51,95,95,49,57,109,111,110,101,121,95,112,117,116,73,99,78,83,95,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,69,69,0,0,0,78,83,116,51,95,95,49,57,109,111,110,101,121,95,103,101,116,73,119,78,83,95,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,69,69,0,0,0,78,83,116,51,95,95,49,57,109,111,110,101,121,95,103,101,116,73,99,78,83,95,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,69,69,0,0,0,78,83,116,51,95,95,49,57,98,97,115,105,99,95,105,111,115,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,57,98,97,115,105,99,95,105,111,115,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,57,95,95,110,117,109,95,112,117,116,73,119,69,69,0,0,0,78,83,116,51,95,95,49,57,95,95,110,117,109,95,112,117,116,73,99,69,69,0,0,0,78,83,116,51,95,95,49,57,95,95,110,117,109,95,103,101,116,73,119,69,69,0,0,0,78,83,116,51,95,95,49,57,95,95,110,117,109,95,103,101,116,73,99,69,69,0,0,0,78,83,116,51,95,95,49,56,116,105,109,101,95,112,117,116,73,119,78,83,95,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,69,69,0,0,0,0,78,83,116,51,95,95,49,56,116,105,109,101,95,112,117,116,73,99,78,83,95,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,69,69,0,0,0,0,78,83,116,51,95,95,49,56,116,105,109,101,95,103,101,116,73,119,78,83,95,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,69,69,0,0,0,0,78,83,116,51,95,95,49,56,116,105,109,101,95,103,101,116,73,99,78,83,95,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,69,69,0,0,0,0,78,83,116,51,95,95,49,56,110,117,109,112,117,110,99,116,73,119,69,69,0,0,0,0,78,83,116,51,95,95,49,56,110,117,109,112,117,110,99,116,73,99,69,69,0,0,0,0,78,83,116,51,95,95,49,56,109,101,115,115,97,103,101,115,73,119,69,69,0,0,0,0,78,83,116,51,95,95,49,56,109,101,115,115,97,103,101,115,73,99,69,69,0,0,0,0,78,83,116,51,95,95,49,56,105,111,115,95,98,97,115,101,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,56,105,111,115,95,98,97,115,101,55,102,97,105,108,117,114,101,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,55,110,117,109,95,112,117,116,73,119,78,83,95,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,55,110,117,109,95,112,117,116,73,99,78,83,95,49,57,111,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,55,110,117,109,95,103,101,116,73,119,78,83,95,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,55,110,117,109,95,103,101,116,73,99,78,83,95,49,57,105,115,116,114,101,97,109,98,117,102,95,105,116,101,114,97,116,111,114,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,55,99,111,108,108,97,116,101,73,119,69,69,0,0,0,0,0,78,83,116,51,95,95,49,55,99,111,108,108,97,116,101,73,99,69,69,0,0,0,0,0,78,83,116,51,95,95,49,55,99,111,100,101,99,118,116,73,119,99,49,49,95,95,109,98,115,116,97,116,101,95,116,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,55,99,111,100,101,99,118,116,73,99,99,49,49,95,95,109,98,115,116,97,116,101,95,116,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,55,99,111,100,101,99,118,116,73,68,115,99,49,49,95,95,109,98,115,116,97,116,101,95,116,69,69,0,0,0,0,0,0,78,83,116,51,95,95,49,55,99,111,100,101,99,118,116,73,68,105,99,49,49,95,95,109,98,115,116,97,116,101,95,116,69,69,0,0,0,0,0,0,78,83,116,51,95,95,49,54,108,111,99,97,108,101,53,102,97,99,101,116,69,0,0,0,78,83,116,51,95,95,49,54,108,111,99,97,108,101,53,95,95,105,109,112,69,0,0,0,78,83,116,51,95,95,49,53,99,116,121,112,101,73,119,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,53,99,116,121,112,101,73,99,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,50,48,95,95,116,105,109,101,95,103,101,116,95,99,95,115,116,111,114,97,103,101,73,119,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,50,48,95,95,116,105,109,101,95,103,101,116,95,99,95,115,116,111,114,97,103,101,73,99,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,57,95,95,105,111,115,116,114,101,97,109,95,99,97,116,101,103,111,114,121,69,0,0,0,78,83,116,51,95,95,49,49,55,95,95,119,105,100,101,110,95,102,114,111,109,95,117,116,102,56,73,76,106,51,50,69,69,69,0,0,0,0,0,0,78,83,116,51,95,95,49,49,54,95,95,110,97,114,114,111,119,95,116,111,95,117,116,102,56,73,76,106,51,50,69,69,69,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,53,98,97,115,105,99,95,115,116,114,101,97,109,98,117,102,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,53,98,97,115,105,99,95,115,116,114,101,97,109,98,117,102,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,52,101,114,114,111,114,95,99,97,116,101,103,111,114,121,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,52,95,95,115,104,97,114,101,100,95,99,111,117,110,116,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,52,95,95,110,117,109,95,112,117,116,95,98,97,115,101,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,52,95,95,110,117,109,95,103,101,116,95,98,97,115,101,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,51,109,101,115,115,97,103,101,115,95,98,97,115,101,69,0,78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,111,115,116,114,101,97,109,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,0,0,78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,111,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,105,115,116,114,101,97,109,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,69,69,0,0,78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,105,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,78,83,116,51,95,95,49,49,50,115,121,115,116,101,109,95,101,114,114,111,114,69,0,0,78,83,116,51,95,95,49,49,50,99,111,100,101,99,118,116,95,98,97,115,101,69,0,0,78,83,116,51,95,95,49,49,50,95,95,100,111,95,109,101,115,115,97,103,101,69,0,0,78,83,116,51,95,95,49,49,49,95,95,115,116,100,111,117,116,98,117,102,73,119,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,49,95,95,115,116,100,111,117,116,98,117,102,73,99,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,49,95,95,109,111,110,101,121,95,112,117,116,73,119,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,49,95,95,109,111,110,101,121,95,112,117,116,73,99,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,49,95,95,109,111,110,101,121,95,103,101,116,73,119,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,49,95,95,109,111,110,101,121,95,103,101,116,73,99,69,69,0,0,0,0,0,0,0,0,78,83,116,51,95,95,49,49,48,109,111,110,101,121,112,117,110,99,116,73,119,76,98,49,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,49,48,109,111,110,101,121,112,117,110,99,116,73,119,76,98,48,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,49,48,109,111,110,101,121,112,117,110,99,116,73,99,76,98,49,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,49,48,109,111,110,101,121,112,117,110,99,116,73,99,76,98,48,69,69,69,0,0,0,0,0,78,83,116,51,95,95,49,49,48,109,111,110,101,121,95,98,97,115,101,69,0,0,0,0,78,83,116,51,95,95,49,49,48,99,116,121,112,101,95,98,97,115,101,69,0,0,0,0,78,83,116,51,95,95,49,49,48,95,95,116,105,109,101,95,112,117,116,69,0,0,0,0,78,83,116,51,95,95,49,49,48,95,95,115,116,100,105,110,98,117,102,73,119,69,69,0,78,83,116,51,95,95,49,49,48,95,95,115,116,100,105,110,98,117,102,73,99,69,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,49,95,95,118,109,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,0,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,0,0,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,0,0,0,0,0,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,0,0,0,0,0,0,0,78,49,48,86,111,105,100,69,118,101,110,116,52,73,56,71,114,97,112,104,105,99,115,105,105,105,49,55,83,99,114,101,101,110,79,114,105,101,110,116,97,116,105,111,110,69,49,55,67,108,97,115,115,69,118,101,110,116,72,97,110,100,108,101,114,73,49,49,65,112,112,108,105,99,97,116,105,111,110,69,69,0,0,0,0,0,0,0,78,49,48,86,111,105,100,69,118,101,110,116,52,73,56,71,114,97,112,104,105,99,115,105,105,105,49,55,83,99,114,101,101,110,79,114,105,101,110,116,97,116,105,111,110,69,49,50,69,118,101,110,116,72,97,110,100,108,101,114,69,0,0,0,57,77,97,105,110,67,108,97,115,115,0,0,0,0,0,0,49,49,65,112,112,108,105,99,97,116,105,111,110,0,0,0,0,0,0,0,152,234,1,0,0,0,0,0,168,234,1,0,0,0,0,0,184,234,1,0,0,247,1,0,0,0,0,0,0,0,0,0,200,234,1,0,0,247,1,0,0,0,0,0,0,0,0,0,216,234,1,0,0,247,1,0,0,0,0,0,0,0,0,0,240,234,1,0,72,247,1,0,0,0,0,0,0,0,0,0,8,235,1,0,0,247,1,0,0,0,0,0,0,0,0,0,24,235,1,0,0,234,1,0,48,235,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,8,252,1,0,0,0,0,0,0,234,1,0,120,235,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,16,252,1,0,0,0,0,0,0,234,1,0,192,235,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,24,252,1,0,0,0,0,0,0,234,1,0,8,236,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,32,252,1,0,0,0,0,0,0,0,0,0,80,236,1,0,80,249,1,0,0,0,0,0,0,0,0,0,128,236,1,0,80,249,1,0,0,0,0,0,0,234,1,0,176,236,1,0,0,0,0,0,1,0,0,0,72,251,1,0,0,0,0,0,0,234,1,0,200,236,1,0,0,0,0,0,1,0,0,0,72,251,1,0,0,0,0,0,0,234,1,0,224,236,1,0,0,0,0,0,1,0,0,0,80,251,1,0,0,0,0,0,0,234,1,0,248,236,1,0,0,0,0,0,1,0,0,0,80,251,1,0,0,0,0,0,0,234,1,0,16,237,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,184,252,1,0,0,8,0,0,0,234,1,0,88,237,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,184,252,1,0,0,8,0,0,0,234,1,0,160,237,1,0,0,0,0,0,3,0,0,0,136,250,1,0,2,0,0,0,88,247,1,0,2,0,0,0,232,250,1,0,0,8,0,0,0,234,1,0,232,237,1,0,0,0,0,0,3,0,0,0,136,250,1,0,2,0,0,0,88,247,1,0,2,0,0,0,240,250,1,0,0,8,0,0,0,0,0,0,48,238,1,0,136,250,1,0,0,0,0,0,0,0,0,0,72,238,1,0,136,250,1,0,0,0,0,0,0,234,1,0,96,238,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,88,251,1,0,2,0,0,0,0,234,1,0,120,238,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,88,251,1,0,2,0,0,0,0,0,0,0,144,238,1,0,0,0,0,0,168,238,1,0,192,251,1,0,0,0,0,0,0,234,1,0,200,238,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,0,248,1,0,0,0,0,0,0,234,1,0,16,239,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,24,248,1,0,0,0,0,0,0,234,1,0,88,239,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,48,248,1,0,0,0,0,0,0,234,1,0,160,239,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,72,248,1,0,0,0,0,0,0,0,0,0,232,239,1,0,136,250,1,0,0,0,0,0,0,0,0,0,0,240,1,0,136,250,1,0,0,0,0,0,0,234,1,0,24,240,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,208,251,1,0,2,0,0,0,0,234,1,0,64,240,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,208,251,1,0,2,0,0,0,0,234,1,0,104,240,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,208,251,1,0,2,0,0,0,0,234,1,0,144,240,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,208,251,1,0,2,0,0,0,0,0,0,0,184,240,1,0,64,251,1,0,0,0,0,0,0,0,0,0,208,240,1,0,136,250,1,0,0,0,0,0,0,234,1,0,232,240,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,176,252,1,0,2,0,0,0,0,234,1,0,0,241,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,176,252,1,0,2,0,0,0,0,0,0,0,24,241,1,0,0,0,0,0,64,241,1,0,0,0,0,0,104,241,1,0,216,251,1,0,0,0,0,0,0,0,0,0,136,241,1,0,104,250,1,0,0,0,0,0,0,0,0,0,176,241,1,0,104,250,1,0,0,0,0,0,0,0,0,0,216,241,1,0,0,0,0,0,16,242,1,0,0,0,0,0,72,242,1,0,0,0,0,0,104,242,1,0,0,0,0,0,136,242,1,0,0,0,0,0,168,242,1,0,0,0,0,0,200,242,1,0,0,234,1,0,224,242,1,0,0,0,0,0,1,0,0,0,224,247,1,0,3,244,255,255,0,234,1,0,16,243,1,0,0,0,0,0,1,0,0,0,240,247,1,0,3,244,255,255,0,234,1,0,64,243,1,0,0,0,0,0,1,0,0,0,224,247,1,0,3,244,255,255,0,234,1,0,112,243,1,0,0,0,0,0,1,0,0,0,240,247,1,0,3,244,255,255,0,0,0,0,160,243,1,0,40,247,1,0,0,0,0,0,0,0,0,0,184,243,1,0,0,0,0,0,208,243,1,0,56,251,1,0,0,0,0,0,0,0,0,0,232,243,1,0,40,251,1,0,0,0,0,0,0,0,0,0,8,244,1,0,48,251,1,0,0,0,0,0,0,0,0,0,40,244,1,0,0,0,0,0,72,244,1,0,0,0,0,0,104,244,1,0,0,0,0,0,136,244,1,0,0,234,1,0,168,244,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,168,252,1,0,2,0,0,0,0,234,1,0,200,244,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,168,252,1,0,2,0,0,0,0,234,1,0,232,244,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,168,252,1,0,2,0,0,0,0,234,1,0,8,245,1,0,0,0,0,0,2,0,0,0,136,250,1,0,2,0,0,0,168,252,1,0,2,0,0,0,0,0,0,0,40,245,1,0,0,0,0,0,64,245,1,0,0,0,0,0,88,245,1,0,0,0,0,0,112,245,1,0,40,251,1,0,0,0,0,0,0,0,0,0,136,245,1,0,48,251,1,0,0,0,0,0,0,0,0,0,160,245,1,0,0,253,1,0,0,0,0,0,0,0,0,0,200,245,1,0,0,253,1,0,0,0,0,0,0,0,0,0,240,245,1,0,16,253,1,0,0,0,0,0,0,0,0,0,24,246,1,0,248,246,1,0,0,0,0,0,0,0,0,0,64,246,1,0,48,253,1,0,0,0,0,0,0,0,0,0,152,246,1,0,0,0,0,0,216,246,1,0,0,0,0,0,232,246,1,0,56,253,1,0,0,0,0,0,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,65,66,67,68,69,70,120,88,43,45,112,80,105,73,110,78,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,63,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,192,127,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,127,0,0,192,127,0,0,192,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,63,17,18,19,20,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15,16,0,0,0,1,2,2,3,3,3,3,4,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,2,1,2,0,0,0,1,0,2,1,0,2,0,0,1,2,3,60,0,0,0,0,0,0,0,0,2,3,4,5,6,7,1,0,2,3,1,0,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,7,0,0,0,9,0,0,0,13,0,0,0,17,0,0,0,25,0,0,0,33,0,0,0,49,0,0,0,65,0,0,0,97,0,0,0,129,0,0,0,193,0,0,0,1,1,0,0,129,1,0,0,1,2,0,0,1,3,0,0,1,4,0,0,1,6,0,0,1,8,0,0,1,12,0,0,1,16,0,0,1,24,0,0,1,32,0,0,1,48,0,0,1,64,0,0,1,96,0,0,0,0,0,0,0,0,0,0,0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,0,0,0,0,0,1,0,0,0,3,0,0,0,7,0,0,0,15,0,0,0,31,0,0,0,63,0,0,0,127,0,0,0,255,0,0,0,255,1,0,0,255,3,0,0,255,7,0,0,255,15,0,0,255,31,0,0,255,63,0,0,255,127,0,0,255,255,0,0,0,0,0,0,97,116,116,114,105,98,117,116,101,32,118,101,99,52,32,112,111,115,59,10,97,116,116,114,105,98,117,116,101,32,118,101,99,52,32,99,111,108,111,114,59,10,97,116,116,114,105,98,117,116,101,32,118,101,99,50,32,117,118,59,10,118,97,114,121,105,110,103,32,118,101,99,50,32,112,115,84,101,120,59,10,118,97,114,121,105,110,103,32,118,101,99,52,32,112,115,67,111,108,111,114,59,10,118,111,105,100,32,109,97,105,110,40,41,10,123,10,103,108,95,80,111,115,105,116,105,111,110,32,61,32,112,111,115,59,10,112,115,84,101,120,32,61,32,117,118,59,10,112,115,67,111,108,111,114,32,61,32,99,111,108,111,114,59,10,125,10,0,112,114,101,99,105,115,105,111,110,32,108,111,119,112,32,102,108,111,97,116,59,10,118,97,114,121,105,110,103,32,118,101,99,50,32,112,115,84,101,120,59,10,118,97,114,121,105,110,103,32,118,101,99,52,32,112,115,67,111,108,111,114,59,10,117,110,105,102,111,114,109,32,115,97,109,112,108,101,114,50,68,32,100,105,102,102,117,115,101,84,101,120,116,117,114,101,59,10,118,111,105,100,32,109,97,105,110,40,41,10,123,10,118,101,99,52,32,116,101,120,67,111,108,111,114,32,61,32,116,101,120,116,117,114,101,50,68,40,100,105,102,102,117,115,101,84,101,120,116,117,114,101,44,32,112,115,84,101,120,41,59,10,103,108,95,70,114,97,103,67,111,108,111,114,32,61,32,116,101,120,67,111,108,111,114,42,112,115,67,111,108,111,114,59,10,125,10,0,0,0,62,0,0,0,120,0,0,0,186,0,0,0,0,0,0,0,0,1,0,5,6,0,0,0,160,179,1,0,72,179,1,0,192,178,1,0,152,178,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,11,0,0,0,13,0,0,0,15,0,0,0,17,0,0,0,19,0,0,0,23,0,0,0,27,0,0,0,31,0,0,0,35,0,0,0,43,0,0,0,51,0,0,0,59,0,0,0,67,0,0,0,83,0,0,0,99,0,0,0,115,0,0,0,131,0,0,0,163,0,0,0,195,0,0,0,227,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,63,0,0,0,0,46,186,232,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,2,0,0,0,3,0,0,0,3,0,0,0,4,0,0,0,4,0,0,0,5,0,0,0,5,0,0,0,6,0,0,0,6,0,0,0,7,0,0,0,7,0,0,0,8,0,0,0,8,0,0,0,9,0,0,0,9,0,0,0,10,0,0,0,10,0,0,0,11,0,0,0,11,0,0,0,12,0,0,0,12,0,0,0,13,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,4,0,20,0,16,4,0,0,16,4,4,0,16,4,8,0,16,4,12,0,12,2,16,0,12,2,18,0,0,0,0,0,4,0,16,0,17,4,0,0,12,2,4,0,12,2,6,0,12,2,8,0,12,2,10,0,12,2,12,0,12,2,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,32,32,32,32,32,2,2,0,80,16,16,16,16,16,16,16,16,0,0,16,0,16,16,16,16,18,16,0,34,1,17,16,32,0,16,32,16,16,0,16,16,0,0,0,0,16,16,16,16,16,0,32,32,0,0,32,32,0,0,32,17,32,17,17,17,32,33,33,1,1,0,0,16,33,33,33,33,33,33,17,17,16,0,33,33,17,16,16,16,33,33,33,33,17,17,17,17,17,17,17,17,17,17,17,17,32,16,16,16,16,16,16,16,32,32,0,0,0,0,16,16,0,32,32,0,0,16,32,32,17,16,51,33,33,16,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32])
, "i8", ALLOC_NONE, Runtime.GLOBAL_BASE)
var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);
assert(tempDoublePtr % 8 == 0);
function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}
function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}
  function ___cxa_guard_acquire(variable) {
      if (!HEAP8[(variable)]) { // ignore SAFE_HEAP stuff because llvm mixes i64 and i8 here
        HEAP8[(variable)]=1;
        return 1;
      }
      return 0;
    }
  function _emscripten_run_script_string(ptr) {
      var s = eval(Pointer_stringify(ptr)) + '';
      var me = _emscripten_run_script_string;
      if (!me.bufferSize || me.bufferSize < s.length+1) {
        if (me.bufferSize) _free(me.buffer);
        me.bufferSize = s.length+1;
        me.buffer = _malloc(me.bufferSize);
      }
      writeStringToMemory(s, me.buffer);
      return me.buffer;
    }
  function _llvm_eh_exception() {
      return HEAP32[((_llvm_eh_exception.buf)>>2)];
    }
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return !!__ZSt18uncaught_exceptionv.uncaught_exception;
    }
  function ___cxa_is_number_type(type) {
      var isNumber = false;
      try { if (type == __ZTIi) isNumber = true } catch(e){}
      try { if (type == __ZTIj) isNumber = true } catch(e){}
      try { if (type == __ZTIl) isNumber = true } catch(e){}
      try { if (type == __ZTIm) isNumber = true } catch(e){}
      try { if (type == __ZTIx) isNumber = true } catch(e){}
      try { if (type == __ZTIy) isNumber = true } catch(e){}
      try { if (type == __ZTIf) isNumber = true } catch(e){}
      try { if (type == __ZTId) isNumber = true } catch(e){}
      try { if (type == __ZTIe) isNumber = true } catch(e){}
      try { if (type == __ZTIc) isNumber = true } catch(e){}
      try { if (type == __ZTIa) isNumber = true } catch(e){}
      try { if (type == __ZTIh) isNumber = true } catch(e){}
      try { if (type == __ZTIs) isNumber = true } catch(e){}
      try { if (type == __ZTIt) isNumber = true } catch(e){}
      return isNumber;
    }function ___cxa_does_inherit(definiteType, possibilityType, possibility) {
      if (possibility == 0) return false;
      if (possibilityType == 0 || possibilityType == definiteType)
        return true;
      var possibility_type_info;
      if (___cxa_is_number_type(possibilityType)) {
        possibility_type_info = possibilityType;
      } else {
        var possibility_type_infoAddr = HEAP32[((possibilityType)>>2)] - 8;
        possibility_type_info = HEAP32[((possibility_type_infoAddr)>>2)];
      }
      switch (possibility_type_info) {
      case 0: // possibility is a pointer
        // See if definite type is a pointer
        var definite_type_infoAddr = HEAP32[((definiteType)>>2)] - 8;
        var definite_type_info = HEAP32[((definite_type_infoAddr)>>2)];
        if (definite_type_info == 0) {
          // Also a pointer; compare base types of pointers
          var defPointerBaseAddr = definiteType+8;
          var defPointerBaseType = HEAP32[((defPointerBaseAddr)>>2)];
          var possPointerBaseAddr = possibilityType+8;
          var possPointerBaseType = HEAP32[((possPointerBaseAddr)>>2)];
          return ___cxa_does_inherit(defPointerBaseType, possPointerBaseType, possibility);
        } else
          return false; // one pointer and one non-pointer
      case 1: // class with no base class
        return false;
      case 2: // class with base class
        var parentTypeAddr = possibilityType + 8;
        var parentType = HEAP32[((parentTypeAddr)>>2)];
        return ___cxa_does_inherit(definiteType, parentType, possibility);
      default:
        return false; // some unencountered type
      }
    }
  function ___resumeException(ptr) {
      if (HEAP32[((_llvm_eh_exception.buf)>>2)] == 0) HEAP32[((_llvm_eh_exception.buf)>>2)]=ptr;
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";;
    }function ___cxa_find_matching_catch(thrown, throwntype) {
      if (thrown == -1) thrown = HEAP32[((_llvm_eh_exception.buf)>>2)];
      if (throwntype == -1) throwntype = HEAP32[(((_llvm_eh_exception.buf)+(4))>>2)];
      var typeArray = Array.prototype.slice.call(arguments, 2);
      // If throwntype is a pointer, this means a pointer has been
      // thrown. When a pointer is thrown, actually what's thrown
      // is a pointer to the pointer. We'll dereference it.
      if (throwntype != 0 && !___cxa_is_number_type(throwntype)) {
        var throwntypeInfoAddr= HEAP32[((throwntype)>>2)] - 8;
        var throwntypeInfo= HEAP32[((throwntypeInfoAddr)>>2)];
        if (throwntypeInfo == 0)
          thrown = HEAP32[((thrown)>>2)];
      }
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        if (___cxa_does_inherit(typeArray[i], throwntype, thrown))
          return ((asm["setTempRet0"](typeArray[i]),thrown)|0);
      }
      // Shouldn't happen unless we have bogus data in typeArray
      // or encounter a type for which emscripten doesn't have suitable
      // typeinfo defined. Best-efforts match just in case.
      return ((asm["setTempRet0"](throwntype),thrown)|0);
    }function ___gxx_personality_v0() {
    }
  function _atexit(func, arg) {
      __ATEXIT__.unshift({ func: func, arg: arg });
    }var ___cxa_atexit=_atexit;
  function ___cxa_guard_abort() {}
  function ___cxa_guard_release() {}
  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      Module['exit'](status);
    }function _exit(status) {
      __exit(status);
    }function __ZSt9terminatev() {
      _exit(-1234);
    }
  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
      Module['noExitRuntime'] = true;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from non-main loop sources
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
        if (Module['preMainLoop']) {
          Module['preMainLoop']();
        }
        try {
          Runtime.dynCall('v', func);
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
            throw e;
          }
        }
        if (Module['postMainLoop']) {
          Module['postMainLoop']();
        }
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from the main loop itself
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
        Browser.mainLoop.scheduler();
      }
      if (fps && fps > 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          setTimeout(Browser.mainLoop.runner, 1000/fps); // doing this each time means that on exception, we stop
        }
      } else {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        }
      }
      Browser.mainLoop.scheduler();
      if (simulateInfiniteLoop) {
        throw 'SimulateInfiniteLoop';
      }
    }
  Module["_memcpy"] = _memcpy;var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;
  function _llvm_umul_with_overflow_i32(x, y) {
      x = x>>>0;
      y = y>>>0;
      return ((asm["setTempRet0"](x*y > 4294967295),(x*y)>>>0)|0);
    }
  function _llvm_uadd_with_overflow_i32(x, y) {
      x = x>>>0;
      y = y>>>0;
      return ((asm["setTempRet0"](x+y > 4294967295),(x+y)>>>0)|0);
    }
  Module["_strlen"] = _strlen;
  var _llvm_va_start=undefined;
  function __reallyNegative(x) {
      return x < 0 || (x === 0 && (1/x) === -Infinity);
    }function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      function getNextArg(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'double') {
          ret = HEAPF64[(((varargs)+(argIndex))>>3)];
        } else if (type == 'i64') {
          ret = [HEAP32[(((varargs)+(argIndex))>>2)],
                 HEAP32[(((varargs)+(argIndex+8))>>2)]];
          argIndex += 8; // each 32-bit chunk is in a 64-bit block
        } else {
          type = 'i32'; // varargs are always i32, i64, or double
          ret = HEAP32[(((varargs)+(argIndex))>>2)];
        }
        argIndex += Math.max(Runtime.getNativeFieldSize(type), Runtime.getAlignSize(type, null, true));
        return ret;
      }
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex+1)|0)];
        if (curr == 37) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          }
          // Handle width.
          var width = 0;
          if (next == 42) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[((textIndex+1)|0)];
            }
          }
          // Handle precision.
          var precisionSet = false, precision = -1;
          if (next == 46) {
            precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
            if (next == 42) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP8[((textIndex+1)|0)];
                if (precisionChr < 48 ||
                    precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[((textIndex+1)|0)];
          }
          if (precision === -1) {
            precision = 6; // Standard default.
            precisionSet = false;
          }
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1; // char (actually i32 in varargs)
              } else {
                argSize = 2; // short (actually i32 in varargs)
              }
              break;
            case 'l':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[((textIndex+1)|0)];
          // Handle type specifier.
          switch (String.fromCharCode(next)) {
            case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p': {
              // Integer.
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              var currArg = getNextArg('i' + (argSize * 8));
              var origArg = currArg;
              var argText;
              // Flatten i64-1 [low, high] into a (slightly rounded) double
              if (argSize == 8) {
                currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
              }
              // Truncate to requested size.
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              // Format the number.
              var currAbsArg = Math.abs(currArg);
              var prefix = '';
              if (next == 100 || next == 105) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null); else
                argText = reSign(currArg, 8 * argSize, 1).toString(10);
              } else if (next == 117) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true); else
                argText = unSign(currArg, 8 * argSize, 1).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                if (argSize == 8 && i64Math) {
                  if (origArg[1]) {
                    argText = (origArg[1]>>>0).toString(16);
                    var lower = (origArg[0]>>>0).toString(16);
                    while (lower.length < 8) lower = '0' + lower;
                    argText += lower;
                  } else {
                    argText = (origArg[0]>>>0).toString(16);
                  }
                } else
                if (currArg < 0) {
                  // Represent negative numbers in hex as 2's complement.
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join('');
                  while (argText.length < argSize * 2) argText = 'f' + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = '(nil)';
                } else {
                  prefix = '0x';
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = '0' + argText;
                }
              }
              // Add sign if needed
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = '+' + prefix;
                } else if (flagPadSign) {
                  prefix = ' ' + prefix;
                }
              }
              // Move sign to prefix so we zero-pad after the sign
              if (argText.charAt(0) == '-') {
                prefix = '-' + prefix;
                argText = argText.substr(1);
              }
              // Add padding.
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad) {
                    argText = '0' + argText;
                  } else {
                    prefix = ' ' + prefix;
                  }
                }
              }
              // Insert the result into the buffer.
              argText = prefix + argText;
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': {
              // Float.
              var currArg = getNextArg('double');
              var argText;
              if (isNaN(currArg)) {
                argText = 'nan';
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? '-' : '') + 'inf';
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
                // Convert g/G to f/F or e/E, as per:
                // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  // Make sure the exponent has at least 2 digits.
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && __reallyNegative(currArg)) {
                    argText = '-' + argText;
                  }
                }
                var parts = argText.split('e');
                if (isGeneral && !flagAlternative) {
                  // Discard trailing zeros and periods.
                  while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                         (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  // Make sure we have a period in alternative mode.
                  if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                  // Zero pad until required precision.
                  while (precision > effectivePrecision++) parts[0] += '0';
                }
                argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
                // Capitalize 'E' if needed.
                if (next == 69) argText = argText.toUpperCase();
                // Add sign.
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = '+' + argText;
                  } else if (flagPadSign) {
                    argText = ' ' + argText;
                  }
                }
              }
              // Add padding.
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                    argText = argText[0] + '0' + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? '0' : ' ') + argText;
                  }
                }
              }
              // Adjust case.
              if (next < 97) argText = argText.toUpperCase();
              // Insert the result into the buffer.
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 's': {
              // String.
              var arg = getNextArg('i8*');
              var argLength = arg ? _strlen(arg) : '(null)'.length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[((arg++)|0)]);
                }
              } else {
                ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case 'c': {
              // Character.
              if (flagLeftAlign) ret.push(getNextArg('i8'));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg('i8'));
              break;
            }
            case 'n': {
              // Write the length written so far to the next parameter.
              var ptr = getNextArg('i32*');
              HEAP32[((ptr)>>2)]=ret.length
              break;
            }
            case '%': {
              // Literal percent sign.
              ret.push(curr);
              break;
            }
            default: {
              // Unknown specifiers remain untouched.
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[(i)]);
              }
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _snprintf(s, n, format, varargs) {
      // int snprintf(char *restrict s, size_t n, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var limit = (n === undefined) ? result.length
                                    : Math.min(result.length, Math.max(n - 1, 0));
      if (s < 0) {
        s = -s;
        var buf = _malloc(limit+1);
        HEAP32[((s)>>2)]=buf;
        s = buf;
      }
      for (var i = 0; i < limit; i++) {
        HEAP8[(((s)+(i))|0)]=result[i];
      }
      if (limit < n || (n === undefined)) HEAP8[(((s)+(i))|0)]=0;
      return result.length;
    }function _vsnprintf(s, n, format, va_arg) {
      return _snprintf(s, n, format, HEAP32[((va_arg)>>2)]);
    }
  Module["_memset"] = _memset;var _llvm_memset_p0i8_i64=_memset;
  function _llvm_lifetime_start() {}
  function _llvm_lifetime_end() {}
  function ___cxa_call_unexpected(exception) {
      Module.printErr('Unexpected exception thrown, this is not properly supported - aborting');
      ABORT = true;
      throw exception;
    }
  function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
  function ___cxa_free_exception(ptr) {
      try {
        return _free(ptr);
      } catch(e) { // XXX FIXME
      }
    }
  function ___cxa_throw(ptr, type, destructor) {
      if (!___cxa_throw.initialized) {
        try {
          HEAP32[((__ZTVN10__cxxabiv119__pointer_type_infoE)>>2)]=0; // Workaround for libcxxabi integration bug
        } catch(e){}
        try {
          HEAP32[((__ZTVN10__cxxabiv117__class_type_infoE)>>2)]=1; // Workaround for libcxxabi integration bug
        } catch(e){}
        try {
          HEAP32[((__ZTVN10__cxxabiv120__si_class_type_infoE)>>2)]=2; // Workaround for libcxxabi integration bug
        } catch(e){}
        ___cxa_throw.initialized = true;
      }
      HEAP32[((_llvm_eh_exception.buf)>>2)]=ptr
      HEAP32[(((_llvm_eh_exception.buf)+(4))>>2)]=type
      HEAP32[(((_llvm_eh_exception.buf)+(8))>>2)]=destructor
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exception = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exception++;
      }
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";;
    }
  var JsInput={keyEvent:0,mouseEvent:0,wheelEvent:0,emscripten_remove_eventlisteners_registered:false,register_remove_eventlisteners:function () {
        if (!JsInput.emscripten_remove_eventlisteners_registered) {
        __ATEXIT__.push({ func: function() {
            for(var i = JsInput.eventHandlers.length-1; i >= 0; --i) {
              JsInput._removeHandler(i);
            }
           } });
          JsInput.emscripten_remove_eventlisteners_registered = true;
        }
      },findEventTarget:function (target) {
        if (target) {
          return document.getElementById(Pointer_stringify(target));
        } else {
          return window;
        }
      },eventHandlers:[],_removeHandler:function (i) {
        JsInput.eventHandlers[i].target.removeEventListener(JsInput.eventHandlers[i].eventTypeString, JsInput.eventHandlers[i].handlerFunc, true);
        JsInput.eventHandlers.splice(i, 1);
      },registerOrRemoveHandler:function (eventHandler) {
        if (eventHandler.callbackfunc) {
          eventHandler.target.addEventListener(eventHandler.eventTypeString, eventHandler.handlerFunc, true);
          JsInput.eventHandlers.push(eventHandler);
          JsInput.register_remove_eventlisteners();
        } else {
          for(var i = 0; i < JsInput.eventHandlers.length; ++i) {
            if (JsInput.eventHandlers[i].target == eventHandler.target
             && JsInput.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
               JsInput._removeHandler(i--);
             }
          }
        }
      },registerKeyEventCallback:function (target, userData, callbackfunc, eventTypeId, eventTypeString) {
        if (!JsInput.keyEvent) {
          JsInput.keyEvent = _malloc(100);
          if (Module['freeAtExit']) {
            Module['freeAtExit'].push(JsInput.keyEvent);
          }
        }
        var handlerFunc = function(event) {
          var e = event || window.event;
          if (e.key) {
            // Cap to the fixed allocation space. Currently assuming that we ever get one or at most two unicode chars here.
            // Report back if this can actually truncate?
            if (e.key.length > 7) {
              e.key = e.key.substring(0, 7);
            }
            stringToUTF32(e.key, JsInput.keyEvent);
          } else {
            HEAP32[((JsInput.keyEvent)>>2)]=0
          }
          HEAP32[(((JsInput.keyEvent)+(32))>>2)]=e.location
          HEAP32[(((JsInput.keyEvent)+(36))>>2)]=e.ctrlKey
          HEAP32[(((JsInput.keyEvent)+(40))>>2)]=e.shiftKey
          HEAP32[(((JsInput.keyEvent)+(44))>>2)]=e.altKey
          HEAP32[(((JsInput.keyEvent)+(48))>>2)]=e.metaKey
          HEAP32[(((JsInput.keyEvent)+(52))>>2)]=e.repeat
          if (e.locale) {
            // Cap to the fixed allocation space. Currently assuming that only get strings of fixed size like "en-us".
            if (e.locale.length > 7) {
              e.locale = e.locale.substring(0, 7);
            }
            stringToUTF32(e.locale, JsInput.keyEvent + 56);
          } else {
            HEAP32[(((JsInput.keyEvent)+(56))>>2)]=0
          }
          HEAP32[(((JsInput.keyEvent)+(88))>>2)]=e.charCode
          HEAP32[(((JsInput.keyEvent)+(92))>>2)]=e.keyCode
          HEAP32[(((JsInput.keyEvent)+(96))>>2)]=e.which
          var shouldCancel = Runtime.dynCall('iiii', callbackfunc, [eventTypeId, JsInput.keyEvent, userData]);
          if (shouldCancel) {
            e.preventDefault();
          }
        };
        var eventHandler = {
          target: JsInput.findEventTarget(target),
          eventTypeString: eventTypeString,
          callbackfunc: callbackfunc,
          handlerFunc: handlerFunc
        };
        JsInput.registerOrRemoveHandler(eventHandler);
      },registerMouseEventCallback:function (target, userData, callbackfunc, eventTypeId, eventTypeString) {
        if (!JsInput.mouseEvent) {
          JsInput.mouseEvent = _malloc(48);
          if (Module['freeAtExit']) {
            Module['freeAtExit'].push(JsInput.mouseEvent);
          }
        }
        var handlerFunc = function(event) {
          var e = event || window.event;
          var rect = Module['canvas'].getBoundingClientRect();
          HEAP32[((JsInput.mouseEvent)>>2)]=e.screenX
          HEAP32[(((JsInput.mouseEvent)+(4))>>2)]=e.screenY
          HEAP32[(((JsInput.mouseEvent)+(8))>>2)]=e.clientX
          HEAP32[(((JsInput.mouseEvent)+(12))>>2)]=e.clientY
          HEAP32[(((JsInput.mouseEvent)+(16))>>2)]=e.ctrlKey
          HEAP32[(((JsInput.mouseEvent)+(20))>>2)]=e.shiftKey
          HEAP32[(((JsInput.mouseEvent)+(24))>>2)]=e.altKey
          HEAP32[(((JsInput.mouseEvent)+(28))>>2)]=e.metaKey
          HEAP16[(((JsInput.mouseEvent)+(32))>>1)]=e.button
          HEAP16[(((JsInput.mouseEvent)+(34))>>1)]=e.buttons
          HEAP32[(((JsInput.mouseEvent)+(36))>>2)]=e.clientX - rect.left
          HEAP32[(((JsInput.mouseEvent)+(40))>>2)]=e.clientY - rect.top
          var shouldCancel = Runtime.dynCall('iiii', callbackfunc, [eventTypeId, JsInput.mouseEvent, userData]);
          if (shouldCancel) {
            e.preventDefault();
          }
        };
        var eventHandler = {
          target: JsInput.findEventTarget(target),
          eventTypeString: eventTypeString,
          callbackfunc: callbackfunc,
          handlerFunc: handlerFunc
        };
        JsInput.registerOrRemoveHandler(eventHandler);
      },registerWheelEventCallback:function (target, userData, callbackfunc, eventTypeId, eventTypeString) {
        if (!JsInput.wheelEvent) {
          JsInput.wheelEvent = _malloc(76);
          if (Module['freeAtExit']) {
            Module['freeAtExit'].push(JsInput.wheelEvent);
          }
        }
        var handlerFunc = function(event) {
          var e = event || window.event;
          var rect = Module['canvas'].getBoundingClientRect();
          HEAP32[((JsInput.wheelEvent)>>2)]=e.screenX
          HEAP32[(((JsInput.wheelEvent)+(4))>>2)]=e.screenY
          HEAP32[(((JsInput.wheelEvent)+(8))>>2)]=e.clientX
          HEAP32[(((JsInput.wheelEvent)+(12))>>2)]=e.clientY
          HEAP32[(((JsInput.wheelEvent)+(16))>>2)]=e.ctrlKey
          HEAP32[(((JsInput.wheelEvent)+(20))>>2)]=e.shiftKey
          HEAP32[(((JsInput.wheelEvent)+(24))>>2)]=e.altKey
          HEAP32[(((JsInput.wheelEvent)+(28))>>2)]=e.metaKey
          HEAP16[(((JsInput.wheelEvent)+(32))>>1)]=e.button
          HEAP16[(((JsInput.wheelEvent)+(34))>>1)]=e.buttons
          HEAP32[(((JsInput.wheelEvent)+(36))>>2)]=e.clientX - rect.left
          HEAP32[(((JsInput.wheelEvent)+(40))>>2)]=e.clientY - rect.top
          HEAPF64[(((JsInput.wheelEvent)+(48))>>3)]=e.deltaX
          HEAPF64[(((JsInput.wheelEvent)+(56))>>3)]=e.deltaY
          HEAPF64[(((JsInput.wheelEvent)+(64))>>3)]=e.deltaZ
          HEAP32[(((JsInput.wheelEvent)+(72))>>2)]=e.deltaMode
          var shouldCancel = Runtime.dynCall('iiii', callbackfunc, [eventTypeId, JsInput.wheelEvent, userData]);
          if (shouldCancel) {
            e.preventDefault();
          }
        };
        var eventHandler = {
          target: JsInput.findEventTarget(target),
          eventTypeString: eventTypeString,
          callbackfunc: callbackfunc,
          handlerFunc: handlerFunc
        };
        JsInput.registerOrRemoveHandler(eventHandler);
      }};function _emscripten_set_click_callback(target, userData, callbackfunc) {
      JsInput.registerMouseEventCallback(target, userData, callbackfunc, 3 /*Click*/, "click");
    }
  function _emscripten_set_dblclick_callback(target, userData, callbackfunc) {
      JsInput.registerMouseEventCallback(target, userData, callbackfunc, 6 /*DblClick*/, "dblclick");
    }
  function _emscripten_set_keydown_callback(target, userData, callbackfunc) {
      JsInput.registerKeyEventCallback(target, userData, callbackfunc, 1 /*KeyDown*/, "keydown");
    }
  function _emscripten_set_keyup_callback(target, userData, callbackfunc) {
      JsInput.registerKeyEventCallback(target, userData, callbackfunc, 2 /*KeyUp*/, "keyup");
    }
  function _emscripten_set_mousedown_callback(target, userData, callbackfunc) {
      JsInput.registerMouseEventCallback(target, userData, callbackfunc, 4 /*MouseDown*/, "mousedown");
    }
  function _emscripten_set_mouseup_callback(target, userData, callbackfunc) {
      JsInput.registerMouseEventCallback(target, userData, callbackfunc, 5 /*MouseUp*/, "mouseup");
    }
  function _emscripten_set_mousemove_callback(target, userData, callbackfunc) {
      JsInput.registerMouseEventCallback(target, userData, callbackfunc, 7 /*MouseMove*/, "mousemove");
    }
  function _emscripten_set_wheel_callback(target, userData, callbackfunc) {
      JsInput.registerWheelEventCallback(target, userData, callbackfunc, 8 /*Wheel*/, "wheel");
    }
  var _llvm_memset_p0i8_i32=_memset;
  function _strstr(ptr1, ptr2) {
      var check = 0, start;
      do {
        if (!check) {
          start = ptr1;
          check = ptr2;
        }
        var curr1 = HEAP8[((ptr1++)|0)];
        var curr2 = HEAP8[((check++)|0)];
        if (curr2 == 0) return start;
        if (curr2 != curr1) {
          // rewind to one character after start, to find ez in eeez
          ptr1 = start + 1;
          check = 0;
        }
      } while (curr1);
      return 0;
    }
  var GL={counter:1,lastError:0,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],uniforms:[],shaders:[],byteSizeByTypeRoot:5120,byteSizeByType:[1,1,2,2,4,4,4,2,3,4,8],programInfos:{},stringCache:{},packAlignment:4,unpackAlignment:4,init:function () {
        GL.createLog2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        Browser.moduleContextCreatedCallbacks.push(GL.initExtensions);
      },recordError:function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },getNewId:function (table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },MINI_TEMP_BUFFER_SIZE:16,miniTempBuffer:null,miniTempBufferViews:[0],MAX_TEMP_BUFFER_SIZE:2097152,tempVertexBuffers1:[],tempVertexBufferCounters1:[],tempVertexBuffers2:[],tempVertexBufferCounters2:[],numTempVertexBuffersPerSize:64,tempIndexBuffers:[],tempQuadIndexBuffer:null,log2ceilLookup:null,createLog2ceilLookup:function (maxValue) {
        GL.log2ceilLookup = new Uint8Array(maxValue+1);
        var log2 = 0;
        var pow2 = 1;
        GL.log2ceilLookup[0] = 0;
        for(var i = 1; i <= maxValue; ++i) {
          if (i > pow2) {
            pow2 <<= 1;
            ++log2;
          }
          GL.log2ceilLookup[i] = log2;
        }
      },generateTempBuffers:function (quads) {
        var largestIndex = GL.log2ceilLookup[GL.MAX_TEMP_BUFFER_SIZE];
        GL.tempVertexBufferCounters1.length = GL.tempVertexBufferCounters2.length = largestIndex+1;
        GL.tempVertexBuffers1.length = GL.tempVertexBuffers2.length = largestIndex+1;
        GL.tempIndexBuffers.length = largestIndex+1;
        for(var i = 0; i <= largestIndex; ++i) {
          GL.tempIndexBuffers[i] = null; // Created on-demand
          GL.tempVertexBufferCounters1[i] = GL.tempVertexBufferCounters2[i] = 0;
          var ringbufferLength = GL.numTempVertexBuffersPerSize;
          GL.tempVertexBuffers1[i] = [];
          GL.tempVertexBuffers2[i] = [];
          var ringbuffer1 = GL.tempVertexBuffers1[i];
          var ringbuffer2 = GL.tempVertexBuffers2[i];
          ringbuffer1.length = ringbuffer2.length = ringbufferLength;
          for(var j = 0; j < ringbufferLength; ++j) {
            ringbuffer1[j] = ringbuffer2[j] = null; // Created on-demand
          }
        }
        if (quads) {
          // GL_QUAD indexes can be precalculated
          GL.tempQuadIndexBuffer = GLctx.createBuffer();
          GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, GL.tempQuadIndexBuffer);
          var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
          var quadIndexes = new Uint16Array(numIndexes);
          var i = 0, v = 0;
          while (1) {
            quadIndexes[i++] = v;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+1;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+2;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+2;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+3;
            if (i >= numIndexes) break;
            v += 4;
          }
          GLctx.bufferData(GLctx.ELEMENT_ARRAY_BUFFER, quadIndexes, GLctx.STATIC_DRAW);
          GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, null);
        }
      },getTempVertexBuffer:function getTempVertexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup[sizeBytes];
        var ringbuffer = GL.tempVertexBuffers1[idx];
        var nextFreeBufferIndex = GL.tempVertexBufferCounters1[idx];
        GL.tempVertexBufferCounters1[idx] = (GL.tempVertexBufferCounters1[idx]+1) & (GL.numTempVertexBuffersPerSize-1);
        var vbo = ringbuffer[nextFreeBufferIndex];
        if (vbo) {
          return vbo;
        }
        var prevVBO = GLctx.getParameter(GLctx.ARRAY_BUFFER_BINDING);
        ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
        GLctx.bindBuffer(GLctx.ARRAY_BUFFER, ringbuffer[nextFreeBufferIndex]);
        GLctx.bufferData(GLctx.ARRAY_BUFFER, 1 << idx, GLctx.DYNAMIC_DRAW);
        GLctx.bindBuffer(GLctx.ARRAY_BUFFER, prevVBO);
        return ringbuffer[nextFreeBufferIndex];
      },getTempIndexBuffer:function getTempIndexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup[sizeBytes];
        var ibo = GL.tempIndexBuffers[idx];
        if (ibo) {
          return ibo;
        }
        var prevIBO = GLctx.getParameter(GLctx.ELEMENT_ARRAY_BUFFER_BINDING);
        GL.tempIndexBuffers[idx] = GLctx.createBuffer();
        GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, GL.tempIndexBuffers[idx]);
        GLctx.bufferData(GLctx.ELEMENT_ARRAY_BUFFER, 1 << idx, GLctx.DYNAMIC_DRAW);
        GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, prevIBO);
        return GL.tempIndexBuffers[idx];
      },newRenderingFrameStarted:function newRenderingFrameStarted() {
        var vb = GL.tempVertexBuffers1;
        GL.tempVertexBuffers1 = GL.tempVertexBuffers2;
        GL.tempVertexBuffers2 = vb;
        vb = GL.tempVertexBufferCounters1;
        GL.tempVertexBufferCounters1 = GL.tempVertexBufferCounters2;
        GL.tempVertexBufferCounters2 = vb;
        var largestIndex = GL.log2ceilLookup[GL.MAX_TEMP_BUFFER_SIZE];
        for(var i = 0; i <= largestIndex; ++i) {
          GL.tempVertexBufferCounters1[i] = 0;
        }
      },findToken:function (source, token) {
        function isIdentChar(ch) {
          if (ch >= 48 && ch <= 57) // 0-9
            return true;
          if (ch >= 65 && ch <= 90) // A-Z
            return true;
          if (ch >= 97 && ch <= 122) // a-z
            return true;
          return false;
        }
        var i = -1;
        do {
          i = source.indexOf(token, i + 1);
          if (i < 0) {
            break;
          }
          if (i > 0 && isIdentChar(source[i - 1])) {
            continue;
          }
          i += token.length;
          if (i < source.length - 1 && isIdentChar(source[i + 1])) {
            continue;
          }
          return true;
        } while (true);
        return false;
      },getSource:function (shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var frag;
          if (length) {
            var len = HEAP32[(((length)+(i*4))>>2)];
            if (len < 0) {
              frag = Pointer_stringify(HEAP32[(((string)+(i*4))>>2)]);
            } else {
              frag = Pointer_stringify(HEAP32[(((string)+(i*4))>>2)], len);
            }
          } else {
            frag = Pointer_stringify(HEAP32[(((string)+(i*4))>>2)]);
          }
          source += frag;
        }
        // Let's see if we need to enable the standard derivatives extension
        type = GLctx.getShaderParameter(GL.shaders[shader], 0x8B4F /* GL_SHADER_TYPE */);
        if (type == 0x8B30 /* GL_FRAGMENT_SHADER */) {
          if (GL.findToken(source, "dFdx") ||
              GL.findToken(source, "dFdy") ||
              GL.findToken(source, "fwidth")) {
            source = "#extension GL_OES_standard_derivatives : enable\n" + source;
            var extension = GLctx.getExtension("OES_standard_derivatives");
          }
        }
        return source;
      },computeImageSize:function (width, height, sizePerPixel, alignment) {
        function roundedToNextMultipleOf(x, y) {
          return Math.floor((x + y - 1) / y) * y
        }
        var plainRowSize = width * sizePerPixel;
        var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
        return (height <= 0) ? 0 :
                 ((height - 1) * alignedRowSize + plainRowSize);
      },get:function (name_, p, type) {
        // Guard against user passing a null pointer.
        // Note that GLES2 spec does not say anything about how passing a null pointer should be treated.
        // Testing on desktop core GL 3, the application crashes on glGetIntegerv to a null pointer, but
        // better to report an error instead of doing anything random.
        if (!p) {
          GL.recordError(0x0501 /* GL_INVALID_VALUE */);
          return;
        }
        var ret = undefined;
        switch(name_) { // Handle a few trivial GLES values
          case 0x8DFA: // GL_SHADER_COMPILER
            ret = 1;
            break;
          case 0x8DF8: // GL_SHADER_BINARY_FORMATS
            if (type !== 'Integer') {
              GL.recordError(0x0500); // GL_INVALID_ENUM
            }
            return; // Do not write anything to the out pointer, since no binary formats are supported.
          case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
            ret = 0;
            break;
          case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
            // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be queried for length),
            // so implement it ourselves to allow C++ GLES2 code get the length.
            var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
            ret = formats.length;
            break;
          case 0x8B9A: // GL_IMPLEMENTATION_COLOR_READ_TYPE
            ret = 0x1401; // GL_UNSIGNED_BYTE
            break;
          case 0x8B9B: // GL_IMPLEMENTATION_COLOR_READ_FORMAT
            ret = 0x1908; // GL_RGBA
            break;
        }
        if (ret === undefined) {
          var result = GLctx.getParameter(name_);
          switch (typeof(result)) {
            case "number":
              ret = result;
              break;
            case "boolean":
              ret = result ? 1 : 0;
              break;
            case "string":
              GL.recordError(0x0500); // GL_INVALID_ENUM
              return;
            case "object":
              if (result === null) {
                // null is a valid result for some (e.g., which buffer is bound - perhaps nothing is bound), but otherwise
                // can mean an invalid name_, which we need to report as an error
                switch(name_) {
                  case 0x8894: // ARRAY_BUFFER_BINDING
                  case 0x8B8D: // CURRENT_PROGRAM
                  case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                  case 0x8CA6: // FRAMEBUFFER_BINDING
                  case 0x8CA7: // RENDERBUFFER_BINDING
                  case 0x8069: // TEXTURE_BINDING_2D
                  case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                    ret = 0;
                    break;
                  }
                  default: {
                    GL.recordError(0x0500); // GL_INVALID_ENUM
                    return;
                  }
                }
              } else if (result instanceof Float32Array ||
                         result instanceof Uint32Array ||
                         result instanceof Int32Array ||
                         result instanceof Array) {
                for (var i = 0; i < result.length; ++i) {
                  switch (type) {
                    case 'Integer': HEAP32[(((p)+(i*4))>>2)]=result[i];   break;
                    case 'Float':   HEAPF32[(((p)+(i*4))>>2)]=result[i]; break;
                    case 'Boolean': HEAP8[(((p)+(i))|0)]=result[i] ? 1 : 0;    break;
                    default: throw 'internal glGet error, bad type: ' + type;
                  }
                }
                return;
              } else if (result instanceof WebGLBuffer ||
                         result instanceof WebGLProgram ||
                         result instanceof WebGLFramebuffer ||
                         result instanceof WebGLRenderbuffer ||
                         result instanceof WebGLTexture) {
                ret = result.name | 0;
              } else {
                GL.recordError(0x0500); // GL_INVALID_ENUM
                return;
              }
              break;
            default:
              GL.recordError(0x0500); // GL_INVALID_ENUM
              return;
          }
        }
        switch (type) {
          case 'Integer': HEAP32[((p)>>2)]=ret;    break;
          case 'Float':   HEAPF32[((p)>>2)]=ret;  break;
          case 'Boolean': HEAP8[(p)]=ret ? 1 : 0; break;
          default: throw 'internal glGet error, bad type: ' + type;
        }
      },getTexPixelData:function (type, format, width, height, pixels, internalFormat) {
        var sizePerPixel;
        switch (type) {
          case 0x1401 /* GL_UNSIGNED_BYTE */:
            switch (format) {
              case 0x1906 /* GL_ALPHA */:
              case 0x1909 /* GL_LUMINANCE */:
                sizePerPixel = 1;
                break;
              case 0x1907 /* GL_RGB */:
                sizePerPixel = 3;
                break;
              case 0x1908 /* GL_RGBA */:
                sizePerPixel = 4;
                break;
              case 0x190A /* GL_LUMINANCE_ALPHA */:
                sizePerPixel = 2;
                break;
              default:
                throw 'Invalid format (' + format + ')';
            }
            break;
          case 0x1403 /* GL_UNSIGNED_SHORT */:
            if (format == 0x1902 /* GL_DEPTH_COMPONENT */) {
              sizePerPixel = 2;
            } else {
              throw 'Invalid format (' + format + ')';
            }
            break;
          case 0x1405 /* GL_UNSIGNED_INT */:
            if (format == 0x1902 /* GL_DEPTH_COMPONENT */) {
              sizePerPixel = 4;
            } else {
              throw 'Invalid format (' + format + ')';
            }
            break;
          case 0x84FA /* UNSIGNED_INT_24_8_WEBGL */:
            sizePerPixel = 4;
            break;
          case 0x8363 /* GL_UNSIGNED_SHORT_5_6_5 */:
          case 0x8033 /* GL_UNSIGNED_SHORT_4_4_4_4 */:
          case 0x8034 /* GL_UNSIGNED_SHORT_5_5_5_1 */:
            sizePerPixel = 2;
            break;
          case 0x1406 /* GL_FLOAT */:
            switch (format) {
              case 0x1907 /* GL_RGB */:
                sizePerPixel = 3*4;
                break;
              case 0x1908 /* GL_RGBA */:
                sizePerPixel = 4*4;
                break;
              default:
                throw 'Invalid format (' + format + ')';
            }
            internalFormat = GLctx.RGBA;
            break;
          default:
            throw 'Invalid type (' + type + ')';
        }
        var bytes = GL.computeImageSize(width, height, sizePerPixel, GL.unpackAlignment);
        if (type == 0x1401 /* GL_UNSIGNED_BYTE */) {
          pixels = HEAPU8.subarray((pixels),(pixels+bytes));
        } else if (type == 0x1406 /* GL_FLOAT */) {
          pixels = HEAPF32.subarray((pixels)>>2,(pixels+bytes)>>2);
        } else if (type == 0x1405 /* GL_UNSIGNED_INT */ || type == 0x84FA /* UNSIGNED_INT_24_8_WEBGL */) {
          pixels = HEAPU32.subarray((pixels)>>2,(pixels+bytes)>>2);
        } else {
          pixels = HEAPU16.subarray((pixels)>>1,(pixels+bytes)>>1);
        }
        return {
          pixels: pixels,
          internalFormat: internalFormat
        }
      },initExtensions:function () {
        if (GL.initExtensions.done) return;
        GL.initExtensions.done = true;
        if (!Module.useWebGL) return; // an app might link both gl and 2d backends
        GL.miniTempBuffer = new Float32Array(GL.MINI_TEMP_BUFFER_SIZE);
        for (var i = 0; i < GL.MINI_TEMP_BUFFER_SIZE; i++) {
          GL.miniTempBufferViews[i] = GL.miniTempBuffer.subarray(0, i+1);
        }
        GL.maxVertexAttribs = GLctx.getParameter(GLctx.MAX_VERTEX_ATTRIBS);
        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist. 
        GL.compressionExt = GLctx.getExtension('WEBGL_compressed_texture_s3tc') ||
                            GLctx.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
                            GLctx.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        GL.anisotropicExt = GLctx.getExtension('EXT_texture_filter_anisotropic') ||
                            GLctx.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
                            GLctx.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        GL.floatExt = GLctx.getExtension('OES_texture_float');
        // Extension available from Firefox 26 and Google Chrome 30
        GL.instancedArraysExt = GLctx.getExtension('ANGLE_instanced_arrays');
        // These are the 'safe' feature-enabling extensions that don't add any performance impact related to e.g. debugging, and
        // should be enabled by default so that client GLES2/GL code will not need to go through extra hoops to get its stuff working.
        // As new extensions are ratified at http://www.khronos.org/registry/webgl/extensions/ , feel free to add your new extensions
        // here, as long as they don't produce a performance impact for users that might not be using those extensions.
        // E.g. debugging-related extensions should probably be off by default.
        var automaticallyEnabledExtensions = [ "OES_texture_float", "OES_texture_half_float", "OES_standard_derivatives",
                                               "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture",
                                               "OES_element_index_uint", "EXT_texture_filter_anisotropic", "ANGLE_instanced_arrays",
                                               "OES_texture_float_linear", "OES_texture_half_float_linear", "WEBGL_compressed_texture_atc",
                                               "WEBGL_compressed_texture_pvrtc", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float",
                                               "EXT_frag_depth", "EXT_sRGB", "WEBGL_draw_buffers", "WEBGL_shared_resources" ];
        function shouldEnableAutomatically(extension) {
          for(var i in automaticallyEnabledExtensions) {
            var include = automaticallyEnabledExtensions[i];
            if (ext.indexOf(include) != -1) {
              return true;
            }
          }
          return false;
        }
        var extensions = GLctx.getSupportedExtensions();
        for(var e in extensions) {
          var ext = extensions[e].replace('MOZ_', '').replace('WEBKIT_', '');
          if (automaticallyEnabledExtensions.indexOf(ext) != -1) {
            GLctx.getExtension(ext); // Calling .getExtension enables that extension permanently, no need to store the return value to be enabled.
          }
        }
      },populateUniformTable:function (program) {
        var p = GL.programs[program];
        GL.programInfos[program] = {
          uniforms: {},
          maxUniformLength: 0, // This is eagerly computed below, since we already enumerate all uniforms anyway.
          maxAttributeLength: -1 // This is lazily computed and cached, computed when/if first asked, "-1" meaning not computed yet.
        };
        var ptable = GL.programInfos[program];
        var utable = ptable.uniforms;
        // A program's uniform table maps the string name of an uniform to an integer location of that uniform.
        // The global GL.uniforms map maps integer locations to WebGLUniformLocations.
        var numUniforms = GLctx.getProgramParameter(p, GLctx.ACTIVE_UNIFORMS);
        for (var i = 0; i < numUniforms; ++i) {
          var u = GLctx.getActiveUniform(p, i);
          var name = u.name;
          ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length+1);
          // Strip off any trailing array specifier we might have got, e.g. "[0]".
          if (name.indexOf(']', name.length-1) !== -1) {
            var ls = name.lastIndexOf('[');
            name = name.slice(0, ls);
          }
          // Optimize memory usage slightly: If we have an array of uniforms, e.g. 'vec3 colors[3];', then 
          // only store the string 'colors' in utable, and 'colors[0]', 'colors[1]' and 'colors[2]' will be parsed as 'colors'+i.
          // Note that for the GL.uniforms table, we still need to fetch the all WebGLUniformLocations for all the indices.
          var loc = GLctx.getUniformLocation(p, name);
          var id = GL.getNewId(GL.uniforms);
          utable[name] = [u.size, id];
          GL.uniforms[id] = loc;
          for (var j = 1; j < u.size; ++j) {
            var n = name + '['+j+']';
            loc = GLctx.getUniformLocation(p, n);
            id = GL.getNewId(GL.uniforms);
            GL.uniforms[id] = loc;
          }
        }
      }};function _glGetString(name_) {
      if (GL.stringCache[name_]) return GL.stringCache[name_];
      var ret; 
      switch(name_) {
        case 0x1F00 /* GL_VENDOR */:
        case 0x1F01 /* GL_RENDERER */:
        case 0x1F02 /* GL_VERSION */:
          ret = allocate(intArrayFromString(GLctx.getParameter(name_)), 'i8', ALLOC_NORMAL);
          break;
        case 0x1F03 /* GL_EXTENSIONS */:
          var exts = GLctx.getSupportedExtensions();
          var gl_exts = [];
          for (i in exts) {
            gl_exts.push(exts[i]);
            gl_exts.push("GL_" + exts[i]);
          }
          ret = allocate(intArrayFromString(gl_exts.join(' ')), 'i8', ALLOC_NORMAL);
          break;
        case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
          ret = allocate(intArrayFromString('OpenGL ES GLSL 1.00 (WebGL)'), 'i8', ALLOC_NORMAL);
          break;
        default:
          GL.recordError(0x0500/*GL_INVALID_ENUM*/);
          return 0;
      }
      GL.stringCache[name_] = ret;
      return ret;
    }
  function __getFloat(text) {
      return /^[+-]?[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?/.exec(text);
    }function __scanString(format, get, unget, varargs) {
      if (!__scanString.whiteSpace) {
        __scanString.whiteSpace = {};
        __scanString.whiteSpace[32] = 1;
        __scanString.whiteSpace[9] = 1;
        __scanString.whiteSpace[10] = 1;
        __scanString.whiteSpace[11] = 1;
        __scanString.whiteSpace[12] = 1;
        __scanString.whiteSpace[13] = 1;
      }
      // Supports %x, %4x, %d.%d, %lld, %s, %f, %lf.
      // TODO: Support all format specifiers.
      format = Pointer_stringify(format);
      var soFar = 0;
      if (format.indexOf('%n') >= 0) {
        // need to track soFar
        var _get = get;
        get = function get() {
          soFar++;
          return _get();
        }
        var _unget = unget;
        unget = function unget() {
          soFar--;
          return _unget();
        }
      }
      var formatIndex = 0;
      var argsi = 0;
      var fields = 0;
      var argIndex = 0;
      var next;
      mainLoop:
      for (var formatIndex = 0; formatIndex < format.length;) {
        if (format[formatIndex] === '%' && format[formatIndex+1] == 'n') {
          var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
          argIndex += Runtime.getAlignSize('void*', null, true);
          HEAP32[((argPtr)>>2)]=soFar;
          formatIndex += 2;
          continue;
        }
        if (format[formatIndex] === '%') {
          var nextC = format.indexOf('c', formatIndex+1);
          if (nextC > 0) {
            var maxx = 1;
            if (nextC > formatIndex+1) {
              var sub = format.substring(formatIndex+1, nextC);
              maxx = parseInt(sub);
              if (maxx != sub) maxx = 0;
            }
            if (maxx) {
              var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
              argIndex += Runtime.getAlignSize('void*', null, true);
              fields++;
              for (var i = 0; i < maxx; i++) {
                next = get();
                HEAP8[((argPtr++)|0)]=next;
              }
              formatIndex += nextC - formatIndex + 1;
              continue;
            }
          }
        }
        // handle %[...]
        if (format[formatIndex] === '%' && format.indexOf('[', formatIndex+1) > 0) {
          var match = /\%([0-9]*)\[(\^)?(\]?[^\]]*)\]/.exec(format.substring(formatIndex));
          if (match) {
            var maxNumCharacters = parseInt(match[1]) || Infinity;
            var negateScanList = (match[2] === '^');
            var scanList = match[3];
            // expand "middle" dashs into character sets
            var middleDashMatch;
            while ((middleDashMatch = /([^\-])\-([^\-])/.exec(scanList))) {
              var rangeStartCharCode = middleDashMatch[1].charCodeAt(0);
              var rangeEndCharCode = middleDashMatch[2].charCodeAt(0);
              for (var expanded = ''; rangeStartCharCode <= rangeEndCharCode; expanded += String.fromCharCode(rangeStartCharCode++));
              scanList = scanList.replace(middleDashMatch[1] + '-' + middleDashMatch[2], expanded);
            }
            var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
            argIndex += Runtime.getAlignSize('void*', null, true);
            fields++;
            for (var i = 0; i < maxNumCharacters; i++) {
              next = get();
              if (negateScanList) {
                if (scanList.indexOf(String.fromCharCode(next)) < 0) {
                  HEAP8[((argPtr++)|0)]=next;
                } else {
                  unget();
                  break;
                }
              } else {
                if (scanList.indexOf(String.fromCharCode(next)) >= 0) {
                  HEAP8[((argPtr++)|0)]=next;
                } else {
                  unget();
                  break;
                }
              }
            }
            // write out null-terminating character
            HEAP8[((argPtr++)|0)]=0;
            formatIndex += match[0].length;
            continue;
          }
        }      
        // remove whitespace
        while (1) {
          next = get();
          if (next == 0) return fields;
          if (!(next in __scanString.whiteSpace)) break;
        }
        unget();
        if (format[formatIndex] === '%') {
          formatIndex++;
          var suppressAssignment = false;
          if (format[formatIndex] == '*') {
            suppressAssignment = true;
            formatIndex++;
          }
          var maxSpecifierStart = formatIndex;
          while (format[formatIndex].charCodeAt(0) >= 48 &&
                 format[formatIndex].charCodeAt(0) <= 57) {
            formatIndex++;
          }
          var max_;
          if (formatIndex != maxSpecifierStart) {
            max_ = parseInt(format.slice(maxSpecifierStart, formatIndex), 10);
          }
          var long_ = false;
          var half = false;
          var longLong = false;
          if (format[formatIndex] == 'l') {
            long_ = true;
            formatIndex++;
            if (format[formatIndex] == 'l') {
              longLong = true;
              formatIndex++;
            }
          } else if (format[formatIndex] == 'h') {
            half = true;
            formatIndex++;
          }
          var type = format[formatIndex];
          formatIndex++;
          var curr = 0;
          var buffer = [];
          // Read characters according to the format. floats are trickier, they may be in an unfloat state in the middle, then be a valid float later
          if (type == 'f' || type == 'e' || type == 'g' ||
              type == 'F' || type == 'E' || type == 'G') {
            next = get();
            while (next > 0 && (!(next in __scanString.whiteSpace)))  {
              buffer.push(String.fromCharCode(next));
              next = get();
            }
            var m = __getFloat(buffer.join(''));
            var last = m ? m[0].length : 0;
            for (var i = 0; i < buffer.length - last + 1; i++) {
              unget();
            }
            buffer.length = last;
          } else {
            next = get();
            var first = true;
            // Strip the optional 0x prefix for %x.
            if ((type == 'x' || type == 'X') && (next == 48)) {
              var peek = get();
              if (peek == 120 || peek == 88) {
                next = get();
              } else {
                unget();
              }
            }
            while ((curr < max_ || isNaN(max_)) && next > 0) {
              if (!(next in __scanString.whiteSpace) && // stop on whitespace
                  (type == 's' ||
                   ((type === 'd' || type == 'u' || type == 'i') && ((next >= 48 && next <= 57) ||
                                                                     (first && next == 45))) ||
                   ((type === 'x' || type === 'X') && (next >= 48 && next <= 57 ||
                                     next >= 97 && next <= 102 ||
                                     next >= 65 && next <= 70))) &&
                  (formatIndex >= format.length || next !== format[formatIndex].charCodeAt(0))) { // Stop when we read something that is coming up
                buffer.push(String.fromCharCode(next));
                next = get();
                curr++;
                first = false;
              } else {
                break;
              }
            }
            unget();
          }
          if (buffer.length === 0) return 0;  // Failure.
          if (suppressAssignment) continue;
          var text = buffer.join('');
          var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
          argIndex += Runtime.getAlignSize('void*', null, true);
          switch (type) {
            case 'd': case 'u': case 'i':
              if (half) {
                HEAP16[((argPtr)>>1)]=parseInt(text, 10);
              } else if (longLong) {
                (tempI64 = [parseInt(text, 10)>>>0,(tempDouble=parseInt(text, 10),(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((argPtr)>>2)]=tempI64[0],HEAP32[(((argPtr)+(4))>>2)]=tempI64[1]);
              } else {
                HEAP32[((argPtr)>>2)]=parseInt(text, 10);
              }
              break;
            case 'X':
            case 'x':
              HEAP32[((argPtr)>>2)]=parseInt(text, 16)
              break;
            case 'F':
            case 'f':
            case 'E':
            case 'e':
            case 'G':
            case 'g':
            case 'E':
              // fallthrough intended
              if (long_) {
                HEAPF64[((argPtr)>>3)]=parseFloat(text)
              } else {
                HEAPF32[((argPtr)>>2)]=parseFloat(text)
              }
              break;
            case 's':
              var array = intArrayFromString(text);
              for (var j = 0; j < array.length; j++) {
                HEAP8[(((argPtr)+(j))|0)]=array[j]
              }
              break;
          }
          fields++;
        } else if (format[formatIndex].charCodeAt(0) in __scanString.whiteSpace) {
          next = get();
          while (next in __scanString.whiteSpace) {
            if (next <= 0) break mainLoop;  // End of input.
            next = get();
          }
          unget(next);
          formatIndex++;
        } else {
          // Not a specifier.
          next = get();
          if (format[formatIndex].charCodeAt(0) !== next) {
            unget(next);
            break mainLoop;
          }
          formatIndex++;
        }
      }
      return fields;
    }function _sscanf(s, format, varargs) {
      // int sscanf(const char *restrict s, const char *restrict format, ... );
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/scanf.html
      var index = 0;
      function get() { return HEAP8[(((s)+(index++))|0)]; };
      function unget() { index--; };
      return __scanString(format, get, unget, varargs);
    }
  function _glGetIntegerv(name_, p) {
      return GL.get(name_, p, 'Integer');
    }
  function _glGetBooleanv(name_, p) {
      return GL.get(name_, p, 'Boolean');
    }
  function _glClear(x0) { GLctx.clear(x0) }
  function _glViewport(x0, x1, x2, x3) { GLctx.viewport(x0, x1, x2, x3) }
  function _glGenBuffers(n, buffers) {
      for (var i = 0; i < n; i++) {
        var id = GL.getNewId(GL.buffers);
        var buffer = GLctx.createBuffer();
        buffer.name = id;
        GL.buffers[id] = buffer;
        HEAP32[(((buffers)+(i*4))>>2)]=id;
      }
    }
  function _glDeleteBuffers(n, buffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GL.currArrayBuffer) GL.currArrayBuffer = 0;
        if (id == GL.currElementArrayBuffer) GL.currElementArrayBuffer = 0;
      }
    }
  function _glBindBuffer(target, buffer) {
      var bufferObj = buffer ? GL.buffers[buffer] : null;
      GLctx.bindBuffer(target, bufferObj);
    }
  function _glGenFramebuffers(n, ids) {
      for (var i = 0; i < n; ++i) {
        var id = GL.getNewId(GL.framebuffers);
        var framebuffer = GLctx.createFramebuffer();
        framebuffer.name = id;
        GL.framebuffers[id] = framebuffer;
        HEAP32[(((ids)+(i*4))>>2)]=id;
      }
    }
  function _glGenRenderbuffers(n, renderbuffers) {
      for (var i = 0; i < n; i++) {
        var id = GL.getNewId(GL.renderbuffers);
        var renderbuffer = GLctx.createRenderbuffer();
        renderbuffer.name = id;
        GL.renderbuffers[id] = renderbuffer;
        HEAP32[(((renderbuffers)+(i*4))>>2)]=id;
      }
    }
  function _glDeleteFramebuffers(n, framebuffers) {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    }
  function _glDeleteRenderbuffers(n, renderbuffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    }
  function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
      GLctx.vertexAttribPointer(index, size, type, normalized, stride, ptr);
    }
  function _glEnableVertexAttribArray(index) {
      GLctx.enableVertexAttribArray(index);
    }
  function _glDisableVertexAttribArray(index) {
      GLctx.disableVertexAttribArray(index);
    }
  function _glUseProgram(program) {
      GLctx.useProgram(program ? GL.programs[program] : null);
    }
  function _glBindTexture(target, texture) {
      GLctx.bindTexture(target, texture ? GL.textures[texture] : null);
    }
  function _glActiveTexture(x0) { GLctx.activeTexture(x0) }
  function _glGetProgramiv(program, pname, p) {
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        HEAP32[((p)>>2)]=GLctx.getProgramInfoLog(GL.programs[program]).length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        var ptable = GL.programInfos[program];
        if (ptable) {
          HEAP32[((p)>>2)]=ptable.maxUniformLength;
          return;
        } else if (program < GL.counter) {
          GL.recordError(0x0502 /* GL_INVALID_OPERATION */);
        } else {
          GL.recordError(0x0501 /* GL_INVALID_VALUE */);
        }
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        var ptable = GL.programInfos[program];
        if (ptable) {
          if (ptable.maxAttributeLength == -1) {
            var program = GL.programs[program];
            var numAttribs = GLctx.getProgramParameter(program, GLctx.ACTIVE_ATTRIBUTES);
            ptable.maxAttributeLength = 0; // Spec says if there are no active attribs, 0 must be returned.
            for(var i = 0; i < numAttribs; ++i) {
              var activeAttrib = GLctx.getActiveAttrib(program, i);
              ptable.maxAttributeLength = Math.max(ptable.maxAttributeLength, activeAttrib.name.length+1);
            }
          }
          HEAP32[((p)>>2)]=ptable.maxAttributeLength;
          return;
        } else if (program < GL.counter) {
          GL.recordError(0x0502 /* GL_INVALID_OPERATION */);
        } else {
          GL.recordError(0x0501 /* GL_INVALID_VALUE */);
        }
      } else {
        HEAP32[((p)>>2)]=GLctx.getProgramParameter(GL.programs[program], pname);
      }
    }
  function _glGetActiveUniform(program, index, bufSize, length, size, type, name) {
      program = GL.programs[program];
      var info = GLctx.getActiveUniform(program, index);
      var infoname = info.name.slice(0, Math.max(0, bufSize - 1));
      writeStringToMemory(infoname, name);
      if (length) {
        HEAP32[((length)>>2)]=infoname.length;
      }
      if (size) {
        HEAP32[((size)>>2)]=info.size;
      }
      if (type) {
        HEAP32[((type)>>2)]=info.type;
      }
    }
  function _glGetUniformLocation(program, name) {
      name = Pointer_stringify(name);
      var arrayOffset = 0;
      // If user passed an array accessor "[index]", parse the array index off the accessor.
      if (name.indexOf(']', name.length-1) !== -1) {
        var ls = name.lastIndexOf('[');
        var arrayIndex = name.slice(ls+1, -1);
        if (arrayIndex.length > 0) {
          arrayOffset = parseInt(arrayIndex);
          if (arrayOffset < 0) {
            return -1;
          }
        }
        name = name.slice(0, ls);
      }
      var ptable = GL.programInfos[program];
      if (!ptable) {
        return -1;
      }
      var utable = ptable.uniforms;
      var uniformInfo = utable[name]; // returns pair [ dimension_of_uniform_array, uniform_location ]
      if (uniformInfo && arrayOffset < uniformInfo[0]) { // Check if user asked for an out-of-bounds element, i.e. for 'vec4 colors[3];' user could ask for 'colors[10]' which should return -1.
        return uniformInfo[1]+arrayOffset;
      } else {
        return -1;
      }
    }
  function _glDrawArrays(mode, first, count) {
      GLctx.drawArrays(mode, first, count);
    }
  function _glBufferData(target, size, data, usage) {
      switch (usage) { // fix usages, WebGL only has *_DRAW
        case 0x88E1: // GL_STREAM_READ
        case 0x88E2: // GL_STREAM_COPY
          usage = 0x88E0; // GL_STREAM_DRAW
          break;
        case 0x88E5: // GL_STATIC_READ
        case 0x88E6: // GL_STATIC_COPY
          usage = 0x88E4; // GL_STATIC_DRAW
          break;
        case 0x88E9: // GL_DYNAMIC_READ
        case 0x88EA: // GL_DYNAMIC_COPY
          usage = 0x88E8; // GL_DYNAMIC_DRAW
          break;
      }
      GLctx.bufferData(target, HEAPU8.subarray(data, data+size), usage);
    }
  function _glBufferSubData(target, offset, size, data) {
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    }
  function _glCreateShader(shaderType) {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
      return id;
    }
  function _glShaderSource(shader, count, string, length) {
      var source = GL.getSource(shader, count, string, length);
      GLctx.shaderSource(GL.shaders[shader], source);
    }
  function _glCompileShader(shader) {
      GLctx.compileShader(GL.shaders[shader]);
    }
  function _glGetShaderiv(shader, pname, p) {
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        HEAP32[((p)>>2)]=GLctx.getShaderInfoLog(GL.shaders[shader]).length + 1;
      } else {
        HEAP32[((p)>>2)]=GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    }
  function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      // Work around a bug in Chromium which causes getShaderInfoLog to return null
      if (!log) {
        log = "";
      }
      log = log.substr(0, maxLength - 1);
      writeStringToMemory(log, infoLog);
      if (length) {
        HEAP32[((length)>>2)]=log.length
      }
    }
  function _glDeleteShader(shader) {
      GLctx.deleteShader(GL.shaders[shader]);
      GL.shaders[shader] = null;
    }
  function _glValidateProgram(program) {
      GLctx.validateProgram(GL.programs[program]);
    }
  function _glLinkProgram(program) {
      GLctx.linkProgram(GL.programs[program]);
      GL.programInfos[program] = null; // uniforms no longer keep the same names after linking
      GL.populateUniformTable(program);
    }
  function _glDeleteProgram(program) {
      var program = GL.programs[program];
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[program] = null;
      GL.programInfos[program] = null;
    }
  function _glIsShader(shader) {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    }
  function _glIsProgram(program) {
      var program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    }
  function _glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
      program = GL.programs[program];
      var info = GLctx.getActiveAttrib(program, index);
      var infoname = info.name.slice(0, Math.max(0, bufSize - 1));
      writeStringToMemory(infoname, name);
      if (length) {
        HEAP32[((length)>>2)]=infoname.length;
      }
      if (size) {
        HEAP32[((size)>>2)]=info.size;
      }
      if (type) {
        HEAP32[((type)>>2)]=info.type;
      }
    }
  function _glGetAttribLocation(program, name) {
      program = GL.programs[program];
      name = Pointer_stringify(name);
      return GLctx.getAttribLocation(program, name);
    }
  function _strncmp(px, py, n) {
      var i = 0;
      while (i < n) {
        var x = HEAPU8[(((px)+(i))|0)];
        var y = HEAPU8[(((py)+(i))|0)];
        if (x == y && x == 0) return 0;
        if (x == 0) return -1;
        if (y == 0) return 1;
        if (x == y) {
          i ++;
          continue;
        } else {
          return x > y ? 1 : -1;
        }
      }
      return 0;
    }function _strcmp(px, py) {
      return _strncmp(px, py, TOTAL_MEMORY);
    }
  function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      // Work around a bug in Chromium which causes getProgramInfoLog to return null
      if (!log) {
        log = "";
      }
      log = log.substr(0, maxLength - 1);
      writeStringToMemory(log, infoLog);
      if (length) {
        HEAP32[((length)>>2)]=log.length
      }
    }
  function _glAttachShader(program, shader) {
      GLctx.attachShader(GL.programs[program],
                              GL.shaders[shader]);
    }
  function _glCreateProgram() {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      program.name = id;
      GL.programs[id] = program;
      return id;
    }
  function _glUniform1i(location, v0) {
      location = GL.uniforms[location];
      GLctx.uniform1i(location, v0);
    }
  function _glUniform1f(location, v0) {
      location = GL.uniforms[location];
      GLctx.uniform1f(location, v0);
    }
  function _glUniform2f(location, v0, v1) {
      location = GL.uniforms[location];
      GLctx.uniform2f(location, v0, v1);
    }
  function _glUniform3f(location, v0, v1, v2) {
      location = GL.uniforms[location];
      GLctx.uniform3f(location, v0, v1, v2);
    }
  function _glUniform4f(location, v0, v1, v2, v3) {
      location = GL.uniforms[location];
      GLctx.uniform4f(location, v0, v1, v2, v3);
    }
  function _glUniformMatrix2fv(location, count, transpose, value) {
      location = GL.uniforms[location];
      var view;
      if (count == 1) {
        // avoid allocation for the common case of uploading one uniform matrix
        view = GL.miniTempBufferViews[3];
        for (var i = 0; i < 4; i++) {
          view[i] = HEAPF32[(((value)+(i*4))>>2)];
        }
      } else {
        view = HEAPF32.subarray((value)>>2,(value+count*16)>>2);
      }
      GLctx.uniformMatrix2fv(location, transpose, view);
    }
  function _glUniformMatrix3fv(location, count, transpose, value) {
      location = GL.uniforms[location];
      var view;
      if (count == 1) {
        // avoid allocation for the common case of uploading one uniform matrix
        view = GL.miniTempBufferViews[8];
        for (var i = 0; i < 9; i++) {
          view[i] = HEAPF32[(((value)+(i*4))>>2)];
        }
      } else {
        view = HEAPF32.subarray((value)>>2,(value+count*36)>>2);
      }
      GLctx.uniformMatrix3fv(location, transpose, view);
    }
  function _glUniformMatrix4fv(location, count, transpose, value) {
      location = GL.uniforms[location];
      var view;
      if (count == 1) {
        // avoid allocation for the common case of uploading one uniform matrix
        view = GL.miniTempBufferViews[15];
        for (var i = 0; i < 16; i++) {
          view[i] = HEAPF32[(((value)+(i*4))>>2)];
        }
      } else {
        view = HEAPF32.subarray((value)>>2,(value+count*64)>>2);
      }
      GLctx.uniformMatrix4fv(location, transpose, view);
    }
  function _glGenTextures(n, textures) {
      for (var i = 0; i < n; i++) {
        var id = GL.getNewId(GL.textures);
        var texture = GLctx.createTexture();
        texture.name = id;
        GL.textures[id] = texture;
        HEAP32[(((textures)+(i*4))>>2)]=id;
      }
    }
  function _glDeleteTextures(n, textures) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    }
  function _glTexParameteri(x0, x1, x2) { GLctx.texParameteri(x0, x1, x2) }
  function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
      if (data) {
        data = HEAPU8.subarray((data),(data+imageSize));
      } else {
        data = null;
      }
      // N.b. using array notation explicitly to not confuse Closure minification.
      GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, data);
    }
  function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
      if (pixels) {
        var data = GL.getTexPixelData(type, format, width, height, pixels, internalFormat);
        pixels = data.pixels;
        internalFormat = data.internalFormat;
      } else {
        pixels = null;
      }
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
    }
  function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
      if (pixels) {
        var data = GL.getTexPixelData(type, format, width, height, pixels, -1);
        pixels = data.pixels;
      } else {
        pixels = null;
      }
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
    }
  function _glEnable(x0) { GLctx.enable(x0) }
  function _glDisable(x0) { GLctx.disable(x0) }
  function _glCullFace(x0) { GLctx.cullFace(x0) }
  function _glFrontFace(x0) { GLctx.frontFace(x0) }
  function _glDepthMask(x0) { GLctx.depthMask(x0) }
  function _glDepthFunc(x0) { GLctx.depthFunc(x0) }
  function _glStencilMask(x0) { GLctx.stencilMask(x0) }
  function _glColorMask(x0, x1, x2, x3) { GLctx.colorMask(x0, x1, x2, x3) }
  function _glClearDepthf(x0) { GLctx.clearDepth(x0) }
  function _glClearStencil(x0) { GLctx.clearStencil(x0) }
  function _glClearColor(x0, x1, x2, x3) { GLctx.clearColor(x0, x1, x2, x3) }
  function _glPolygonOffset(x0, x1) { GLctx.polygonOffset(x0, x1) }
  function _glBlendEquation(x0) { GLctx.blendEquation(x0) }
  function _glBlendEquationSeparate(x0, x1) { GLctx.blendEquationSeparate(x0, x1) }
  function _glBlendFunc(x0, x1) { GLctx.blendFunc(x0, x1) }
  function _glBlendFuncSeparate(x0, x1, x2, x3) { GLctx.blendFuncSeparate(x0, x1, x2, x3) }
  function _glDrawElements(mode, count, type, indices) {
      GLctx.drawElements(mode, count, type, indices);
    }
  function _glBindAttribLocation(program, index, name) {
      name = Pointer_stringify(name);
      GLctx.bindAttribLocation(GL.programs[program], index, name);
    }
  function _glBindFramebuffer(target, framebuffer) {
      GLctx.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : null);
    }
  function _glBindRenderbuffer(target, renderbuffer) {
      GLctx.bindRenderbuffer(target, renderbuffer ? GL.renderbuffers[renderbuffer] : null);
    }
  function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    }
  function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    }
  function _glRenderbufferStorage(x0, x1, x2, x3) { GLctx.renderbufferStorage(x0, x1, x2, x3) }
  Module["_memmove"] = _memmove;var _llvm_memmove_p0i8_p0i8_i32=_memmove;
  function _emscripten_get_canvas_size(width, height, isFullscreen) {
      var canvas = Module['canvas'];
      HEAP32[((width)>>2)]=canvas.width;
      HEAP32[((height)>>2)]=canvas.height;
      HEAP32[((isFullscreen)>>2)]=Browser.isFullScreen ? 1 : 0;
    }
  function _emscripten_set_canvas_size(width, height) {
      Browser.setCanvasSize(width, height);
    }
  function _set_window_resize_handler(userData, resizeHandler) {
      var handlerFunc = function(event) {
        // windows.innerWidth/Height gives the size of the browser window area that shows HTML content, including the area under the scrollbars if they exist.
        // document.body.clientWidth/Height gives the size that the content takes up on the browser client area, excluding the scrollbars.
        // Therefore pass a slightly peculiar combo of these two to guarantee that a left-right scrollbar never appears if there is more than one screenful
        // of content in the page.
        Runtime.dynCall('viii', resizeHandler, [document.body.clientWidth, window.innerHeight, userData]);
      }
      window.addEventListener("resize", handlerFunc, true);
    }
  var EGL={errorCode:12288,defaultDisplayInitialized:false,currentContext:0,currentReadSurface:0,currentDrawSurface:0,stringCache:{},setErrorCode:function (code) {
        EGL.errorCode = code;
      },chooseConfig:function (display, attribList, config, config_size, numConfigs) { 
        if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
          EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
          return 0;
        }
        // TODO: read attribList.
        if ((!config || !config_size) && !numConfigs) {
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
        }
        if (numConfigs) {
          HEAP32[((numConfigs)>>2)]=1; // Total number of supported configs: 1.
        }
        if (config && config_size > 0) {
          HEAP32[((config)>>2)]=62002; 
        }
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      }};function _eglQuerySurface(display, surface, attribute, value) { 
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (surface != 62006 /* Magic ID for Emscripten 'default surface' */) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 0;
      }
      if (!value) {
        EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
        return 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      switch(attribute) {
      case 0x3028: // EGL_CONFIG_ID
        HEAP32[((value)>>2)]=62002;
          return 1;
      case 0x3058: // EGL_LARGEST_PBUFFER
        // Odd EGL API: If surface is not a pbuffer surface, 'value' should not be written to. It's not specified as an error, so true should(?) be returned.
        // Existing Android implementation seems to do so at least.
        return 1;
      case 0x3057: // EGL_WIDTH
        HEAP32[((value)>>2)]=Module.canvas.width;
        return 1;
      case 0x3056: // EGL_HEIGHT
        HEAP32[((value)>>2)]=Module.canvas.height;
        return 1;
      case 0x3090: // EGL_HORIZONTAL_RESOLUTION
        HEAP32[((value)>>2)]=-1;
        return 1;
      case 0x3091: // EGL_VERTICAL_RESOLUTION
        HEAP32[((value)>>2)]=-1;
        return 1;
      case 0x3092: // EGL_PIXEL_ASPECT_RATIO
        HEAP32[((value)>>2)]=-1;
        return 1;
      case 0x3086: // EGL_RENDER_BUFFER
        // The main surface is bound to the visible canvas window - it's always backbuffered. 
        // Alternative to EGL_BACK_BUFFER would be EGL_SINGLE_BUFFER.
        HEAP32[((value)>>2)]=0x3084; 
        return 1;
      case 0x3099: // EGL_MULTISAMPLE_RESOLVE
        HEAP32[((value)>>2)]=0x309A; 
        return 1;
      case 0x3093: // EGL_SWAP_BEHAVIOR
        // The two possibilities are EGL_BUFFER_PRESERVED and EGL_BUFFER_DESTROYED. Slightly unsure which is the
        // case for browser environment, but advertise the 'weaker' behavior to be sure.
        HEAP32[((value)>>2)]=0x3095;
        return 1;
      case 0x3080: // EGL_TEXTURE_FORMAT
      case 0x3081: // EGL_TEXTURE_TARGET
      case 0x3082: // EGL_MIPMAP_TEXTURE
      case 0x3083: // EGL_MIPMAP_LEVEL
        // This is a window surface, not a pbuffer surface. Spec:
        // "Querying EGL_TEXTURE_FORMAT, EGL_TEXTURE_TARGET, EGL_MIPMAP_TEXTURE, or EGL_MIPMAP_LEVEL for a non-pbuffer surface is not an error, but value is not modified."
        // So pass-through.
        return 1;
      default:
        EGL.setErrorCode(0x3004 /* EGL_BAD_ATTRIBUTE */);
        return 0;
      }
    }
  function _eglGetDisplay(nativeDisplayType) {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      // Note: As a 'conformant' implementation of EGL, we would prefer to init here only if the user
      //       calls this function with EGL_DEFAULT_DISPLAY. Other display IDs would be preferred to be unsupported
      //       and EGL_NO_DISPLAY returned. Uncomment the following code lines to do this.
      // Instead, an alternative route has been preferred, namely that the Emscripten EGL implementation
      // "emulates" X11, and eglGetDisplay is expected to accept/receive a pointer to an X11 Display object.
      // Therefore, be lax and allow anything to be passed in, and return the magic handle to our default EGLDisplay object.
  //    if (nativeDisplayType == 0 /* EGL_DEFAULT_DISPLAY */) {
          return 62000; // Magic ID for Emscripten 'default display'
  //    }
  //    else
  //      return 0; // EGL_NO_DISPLAY
    }
  function _eglInitialize(display, majorVersion, minorVersion) {
      if (display == 62000 /* Magic ID for Emscripten 'default display' */) {
        if (majorVersion) {
          HEAP32[((majorVersion)>>2)]=1; // Advertise EGL Major version: '1'
        }
        if (minorVersion) {
          HEAP32[((minorVersion)>>2)]=4; // Advertise EGL Minor version: '4'
        }
        EGL.defaultDisplayInitialized = true;
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      } 
      else {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
    }
  function _eglQueryString(display, name) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy. 
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.stringCache[name]) return EGL.stringCache[name];
      var ret;
      switch(name) {
        case 0x3053 /* EGL_VENDOR */: ret = allocate(intArrayFromString("Emscripten"), 'i8', ALLOC_NORMAL); break;
        case 0x3054 /* EGL_VERSION */: ret = allocate(intArrayFromString("1.4 Emscripten EGL"), 'i8', ALLOC_NORMAL); break;
        case 0x3055 /* EGL_EXTENSIONS */:  ret = allocate(intArrayFromString(""), 'i8', ALLOC_NORMAL); break; // Currently not supporting any EGL extensions.
        case 0x308D /* EGL_CLIENT_APIS */: ret = allocate(intArrayFromString("OpenGL_ES"), 'i8', ALLOC_NORMAL); break;
        default:
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
      }
      EGL.stringCache[name] = ret;
      return ret;
    }
  function _eglGetConfigs(display, configs, config_size, numConfigs) { 
      return EGL.chooseConfig(display, 0, configs, config_size, numConfigs);
    }
  function _eglChooseConfig(display, attrib_list, configs, config_size, numConfigs) { 
      return EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs);
    }
  function _eglCreateWindowSurface(display, config, win, attrib_list) { 
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002 /* Magic ID for the only EGLConfig supported by Emscripten */) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      // TODO: Examine attrib_list! Parameters that can be present there are:
      // - EGL_RENDER_BUFFER (must be EGL_BACK_BUFFER)
      // - EGL_VG_COLORSPACE (can't be set)
      // - EGL_VG_ALPHA_FORMAT (can't be set)
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 62006; /* Magic ID for Emscripten 'default surface' */
    }
  var GLUT={initTime:null,idleFunc:null,displayFunc:null,keyboardFunc:null,keyboardUpFunc:null,specialFunc:null,specialUpFunc:null,reshapeFunc:null,motionFunc:null,passiveMotionFunc:null,mouseFunc:null,buttons:0,modifiers:0,initWindowWidth:256,initWindowHeight:256,initDisplayMode:18,windowX:0,windowY:0,windowWidth:0,windowHeight:0,saveModifiers:function (event) {
        GLUT.modifiers = 0;
        if (event['shiftKey'])
          GLUT.modifiers += 1; /* GLUT_ACTIVE_SHIFT */
        if (event['ctrlKey'])
          GLUT.modifiers += 2; /* GLUT_ACTIVE_CTRL */
        if (event['altKey'])
          GLUT.modifiers += 4; /* GLUT_ACTIVE_ALT */
      },onMousemove:function (event) {
        /* Send motion event only if the motion changed, prevents
         * spamming our app with uncessary callback call. It does happen in
         * Chrome on Windows.
         */
        var lastX = Browser.mouseX;
        var lastY = Browser.mouseY;
        Browser.calculateMouseEvent(event);
        var newX = Browser.mouseX;
        var newY = Browser.mouseY;
        if (newX == lastX && newY == lastY) return;
        if (GLUT.buttons == 0 && event.target == Module["canvas"] && GLUT.passiveMotionFunc) {
          event.preventDefault();
          GLUT.saveModifiers(event);
          Runtime.dynCall('vii', GLUT.passiveMotionFunc, [lastX, lastY]);
        } else if (GLUT.buttons != 0 && GLUT.motionFunc) {
          event.preventDefault();
          GLUT.saveModifiers(event);
          Runtime.dynCall('vii', GLUT.motionFunc, [lastX, lastY]);
        }
      },getSpecialKey:function (keycode) {
          var key = null;
          switch (keycode) {
            case 8:  key = 120 /* backspace */; break;
            case 46: key = 111 /* delete */; break;
            case 0x70 /*DOM_VK_F1*/: key = 1 /* GLUT_KEY_F1 */; break;
            case 0x71 /*DOM_VK_F2*/: key = 2 /* GLUT_KEY_F2 */; break;
            case 0x72 /*DOM_VK_F3*/: key = 3 /* GLUT_KEY_F3 */; break;
            case 0x73 /*DOM_VK_F4*/: key = 4 /* GLUT_KEY_F4 */; break;
            case 0x74 /*DOM_VK_F5*/: key = 5 /* GLUT_KEY_F5 */; break;
            case 0x75 /*DOM_VK_F6*/: key = 6 /* GLUT_KEY_F6 */; break;
            case 0x76 /*DOM_VK_F7*/: key = 7 /* GLUT_KEY_F7 */; break;
            case 0x77 /*DOM_VK_F8*/: key = 8 /* GLUT_KEY_F8 */; break;
            case 0x78 /*DOM_VK_F9*/: key = 9 /* GLUT_KEY_F9 */; break;
            case 0x79 /*DOM_VK_F10*/: key = 10 /* GLUT_KEY_F10 */; break;
            case 0x7a /*DOM_VK_F11*/: key = 11 /* GLUT_KEY_F11 */; break;
            case 0x7b /*DOM_VK_F12*/: key = 12 /* GLUT_KEY_F12 */; break;
            case 0x25 /*DOM_VK_LEFT*/: key = 100 /* GLUT_KEY_LEFT */; break;
            case 0x26 /*DOM_VK_UP*/: key = 101 /* GLUT_KEY_UP */; break;
            case 0x27 /*DOM_VK_RIGHT*/: key = 102 /* GLUT_KEY_RIGHT */; break;
            case 0x28 /*DOM_VK_DOWN*/: key = 103 /* GLUT_KEY_DOWN */; break;
            case 0x21 /*DOM_VK_PAGE_UP*/: key = 104 /* GLUT_KEY_PAGE_UP */; break;
            case 0x22 /*DOM_VK_PAGE_DOWN*/: key = 105 /* GLUT_KEY_PAGE_DOWN */; break;
            case 0x24 /*DOM_VK_HOME*/: key = 106 /* GLUT_KEY_HOME */; break;
            case 0x23 /*DOM_VK_END*/: key = 107 /* GLUT_KEY_END */; break;
            case 0x2d /*DOM_VK_INSERT*/: key = 108 /* GLUT_KEY_INSERT */; break;
            case 16   /*DOM_VK_SHIFT*/:
            case 0x05 /*DOM_VK_LEFT_SHIFT*/:
              key = 112 /* GLUT_KEY_SHIFT_L */;
              break;
            case 0x06 /*DOM_VK_RIGHT_SHIFT*/:
              key = 113 /* GLUT_KEY_SHIFT_R */;
              break;
            case 17   /*DOM_VK_CONTROL*/:
            case 0x03 /*DOM_VK_LEFT_CONTROL*/:
              key = 114 /* GLUT_KEY_CONTROL_L */;
              break;
            case 0x04 /*DOM_VK_RIGHT_CONTROL*/:
              key = 115 /* GLUT_KEY_CONTROL_R */;
              break;
            case 18   /*DOM_VK_ALT*/:
            case 0x02 /*DOM_VK_LEFT_ALT*/:
              key = 116 /* GLUT_KEY_ALT_L */;
              break;
            case 0x01 /*DOM_VK_RIGHT_ALT*/:
              key = 117 /* GLUT_KEY_ALT_R */;
              break;
          };
          return key;
      },getASCIIKey:function (event) {
        if (event['ctrlKey'] || event['altKey'] || event['metaKey']) return null;
        var keycode = event['keyCode'];
        /* The exact list is soooo hard to find in a canonical place! */
        if (48 <= keycode && keycode <= 57)
          return keycode; // numeric  TODO handle shift?
        if (65 <= keycode && keycode <= 90)
          return event['shiftKey'] ? keycode : keycode + 32;
        if (96 <= keycode && keycode <= 105)
          return keycode - 48; // numpad numbers    
        if (106 <= keycode && keycode <= 111)
          return keycode - 106 + 42; // *,+-./  TODO handle shift?
        switch (keycode) {
          case 9:  // tab key
          case 13: // return key
          case 27: // escape
          case 32: // space
          case 61: // equal
            return keycode;
        }
        var s = event['shiftKey'];
        switch (keycode) {
          case 186: return s ? 58 : 59; // colon / semi-colon
          case 187: return s ? 43 : 61; // add / equal (these two may be wrong)
          case 188: return s ? 60 : 44; // less-than / comma
          case 189: return s ? 95 : 45; // dash
          case 190: return s ? 62 : 46; // greater-than / period
          case 191: return s ? 63 : 47; // forward slash
          case 219: return s ? 123 : 91; // open bracket
          case 220: return s ? 124 : 47; // back slash
          case 221: return s ? 125 : 93; // close braket
          case 222: return s ? 34 : 39; // single quote
        }
        return null;
      },onKeydown:function (event) {
        if (GLUT.specialFunc || GLUT.keyboardFunc) {
          var key = GLUT.getSpecialKey(event['keyCode']);
          if (key !== null) {
            if( GLUT.specialFunc ) {
              event.preventDefault();
              GLUT.saveModifiers(event);
              Runtime.dynCall('viii', GLUT.specialFunc, [key, Browser.mouseX, Browser.mouseY]);
            }
          }
          else
          {
            key = GLUT.getASCIIKey(event);
            if( key !== null && GLUT.keyboardFunc ) {
              event.preventDefault();
              GLUT.saveModifiers(event);
              Runtime.dynCall('viii', GLUT.keyboardFunc, [key, Browser.mouseX, Browser.mouseY]);
            }
          }
        }
      },onKeyup:function (event) {
        if (GLUT.specialUpFunc || GLUT.keyboardUpFunc) {
          var key = GLUT.getSpecialKey(event['keyCode']);
          if (key !== null) {
            if(GLUT.specialUpFunc) {
              event.preventDefault ();
              GLUT.saveModifiers(event);
              Runtime.dynCall('viii', GLUT.specialUpFunc, [key, Browser.mouseX, Browser.mouseY]);
            }
          }
          else
          {
            key = GLUT.getASCIIKey(event);
            if( key !== null && GLUT.keyboardUpFunc ) {
              event.preventDefault ();
              GLUT.saveModifiers(event);
              Runtime.dynCall('viii', GLUT.keyboardUpFunc, [key, Browser.mouseX, Browser.mouseY]);
            }
          }
        }
      },onMouseButtonDown:function (event) {
        Browser.calculateMouseEvent(event);
        GLUT.buttons |= (1 << event['button']);
        if (event.target == Module["canvas"] && GLUT.mouseFunc) {
          try {
            event.target.setCapture();
          } catch (e) {}
          event.preventDefault();
          GLUT.saveModifiers(event);
          Runtime.dynCall('viiii', GLUT.mouseFunc, [event['button'], 0/*GLUT_DOWN*/, Browser.mouseX, Browser.mouseY]);
        }
      },onMouseButtonUp:function (event) {
        Browser.calculateMouseEvent(event);
        GLUT.buttons &= ~(1 << event['button']);
        if (GLUT.mouseFunc) {
          event.preventDefault();
          GLUT.saveModifiers(event);
          Runtime.dynCall('viiii', GLUT.mouseFunc, [event['button'], 1/*GLUT_UP*/, Browser.mouseX, Browser.mouseY]);
        }
      },onMouseWheel:function (event) {
        Browser.calculateMouseEvent(event);
        // cross-browser wheel delta
        var e = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var button = 3; // wheel up
        if (delta < 0) {
          button = 4; // wheel down
        }
        if (GLUT.mouseFunc) {
          event.preventDefault();
          GLUT.saveModifiers(event);
          Runtime.dynCall('viiii', GLUT.mouseFunc, [button, 0/*GLUT_DOWN*/, Browser.mouseX, Browser.mouseY]);
        }
      },onFullScreenEventChange:function (event) {
        var width;
        var height;
        if (document["fullScreen"] || document["mozFullScreen"] || document["webkitIsFullScreen"]) {
          width = screen["width"];
          height = screen["height"];
        } else {
          width = GLUT.windowWidth;
          height = GLUT.windowHeight;
          // TODO set position
          document.removeEventListener('fullscreenchange', GLUT.onFullScreenEventChange, true);
          document.removeEventListener('mozfullscreenchange', GLUT.onFullScreenEventChange, true);
          document.removeEventListener('webkitfullscreenchange', GLUT.onFullScreenEventChange, true);
        }
        Browser.setCanvasSize(width, height);
        /* Can't call _glutReshapeWindow as that requests cancelling fullscreen. */
        if (GLUT.reshapeFunc) {
          // console.log("GLUT.reshapeFunc (from FS): " + width + ", " + height);
          Runtime.dynCall('vii', GLUT.reshapeFunc, [width, height]);
        }
        _glutPostRedisplay();
      },requestFullScreen:function () {
        var RFS = Module["canvas"]['requestFullscreen'] ||
                  Module["canvas"]['requestFullScreen'] ||
                  Module["canvas"]['mozRequestFullScreen'] ||
                  Module["canvas"]['webkitRequestFullScreen'] ||
                  (function() {});
        RFS.apply(Module["canvas"], []);
      },cancelFullScreen:function () {
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['webkitCancelFullScreen'] ||
                  (function() {});
        CFS.apply(document, []);
      }};function _glutInitDisplayMode(mode) {
      GLUT.initDisplayMode = mode;
    }
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  var ___errno_state=0;function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      HEAP32[((___errno_state)>>2)]=value
      return value;
    }
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          if (stream.tty.output.length) {
            stream.tty.ops.put_char(stream.tty, 10);
          }
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              result = process['stdin']['read']();
              if (!result) {
                if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                  return null;  // EOF
                }
                return undefined;  // no data available
              }
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }}};
  var MEMFS={ops_table:null,CONTENT_OWNING:1,CONTENT_FLEXIBLE:2,CONTENT_FIXED:3,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 0777, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.contents = [];
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },ensureFlexible:function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
          var contents = node.contents;
          node.contents = Array.prototype.slice.call(contents);
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.contents.length;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            if (attr.size < contents.length) contents.length = attr.size;
            else while (attr.size > contents.length) contents.push(0);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0777 | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else
          {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          var node = stream.node;
          node.timestamp = Date.now();
          var contents = node.contents;
          if (length && contents.length === 0 && position === 0 && buffer.subarray) {
            // just replace it with the new data
            if (canOwn && offset === 0) {
              node.contents = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
              node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
            } else {
              node.contents = new Uint8Array(buffer.subarray(offset, offset+length));
              node.contentMode = MEMFS.CONTENT_FIXED;
            }
            return length;
          }
          MEMFS.ensureFlexible(node);
          var contents = node.contents;
          while (contents.length < position) contents.push(0);
          for (var i = 0; i < length; i++) {
            contents[position + i] = buffer[offset + i];
          }
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.contents.length;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.ungotten = [];
          stream.position = position;
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.ensureFlexible(stream.node);
          var contents = stream.node.contents;
          var limit = offset + length;
          while (limit > contents.length) contents.push(0);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        }}};
  var IDBFS={dbs:{},indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },reconcile:function (src, dst, callback) {
        var total = 0;
        var create = {};
        for (var key in src.files) {
          if (!src.files.hasOwnProperty(key)) continue;
          var e = src.files[key];
          var e2 = dst.files[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create[key] = e;
            total++;
          }
        }
        var remove = {};
        for (var key in dst.files) {
          if (!dst.files.hasOwnProperty(key)) continue;
          var e = dst.files[key];
          var e2 = src.files[key];
          if (!e2) {
            remove[key] = e;
            total++;
          }
        }
        if (!total) {
          // early out
          return callback(null);
        }
        var completed = 0;
        function done(err) {
          if (err) return callback(err);
          if (++completed >= total) {
            return callback(null);
          }
        };
        // create a single transaction to handle and IDB reads / writes we'll need to do
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        transaction.onerror = function transaction_onerror() { callback(this.error); };
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
        for (var path in create) {
          if (!create.hasOwnProperty(path)) continue;
          var entry = create[path];
          if (dst.type === 'local') {
            // save file to local
            try {
              if (FS.isDir(entry.mode)) {
                FS.mkdir(path, entry.mode);
              } else if (FS.isFile(entry.mode)) {
                var stream = FS.open(path, 'w+', 0666);
                FS.write(stream, entry.contents, 0, entry.contents.length, 0, true /* canOwn */);
                FS.close(stream);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // save file to IDB
            var req = store.put(entry, path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
        for (var path in remove) {
          if (!remove.hasOwnProperty(path)) continue;
          var entry = remove[path];
          if (dst.type === 'local') {
            // delete file from local
            try {
              if (FS.isDir(entry.mode)) {
                // TODO recursive delete?
                FS.rmdir(path);
              } else if (FS.isFile(entry.mode)) {
                FS.unlink(path);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // delete file from IDB
            var req = store.delete(path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
      },getLocalSet:function (mount, callback) {
        var files = {};
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
        var check = FS.readdir(mount.mountpoint)
          .filter(isRealDir)
          .map(toAbsolute(mount.mountpoint));
        while (check.length) {
          var path = check.pop();
          var stat, node;
          try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path)
              .filter(isRealDir)
              .map(toAbsolute(path)));
            files[path] = { mode: stat.mode, timestamp: stat.mtime };
          } else if (FS.isFile(stat.mode)) {
            files[path] = { contents: node.contents, mode: stat.mode, timestamp: stat.mtime };
          } else {
            return callback(new Error('node type not supported'));
          }
        }
        return callback(null, { type: 'local', files: files });
      },getDB:function (name, callback) {
        // look it up in the cache
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        req.onupgradeneeded = function req_onupgradeneeded() {
          db = req.result;
          db.createObjectStore(IDBFS.DB_STORE_NAME);
        };
        req.onsuccess = function req_onsuccess() {
          db = req.result;
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function req_onerror() {
          callback(this.error);
        };
      },getRemoteSet:function (mount, callback) {
        var files = {};
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function transaction_onerror() { callback(this.error); };
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          store.openCursor().onsuccess = function store_openCursor_onsuccess(event) {
            var cursor = event.target.result;
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, files: files });
            }
            files[cursor.key] = cursor.value;
            cursor.continue();
          };
        });
      }};
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          return flags;
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.position = position;
          return position;
        }}};
  var _stdin=allocate(1, "i32*", ALLOC_STATIC);
  var _stdout=allocate(1, "i32*", ALLOC_STATIC);
  var _stderr=allocate(1, "i32*", ALLOC_STATIC);
  function _fflush(stream) {
      // int fflush(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
      // we don't currently perform any user-space buffering of data
    }var FS={root:null,mounts:[],devices:[null],streams:[null],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || { recurse_count: 0 };
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
        // start at the root
        var current = FS.root;
        var current_path = '/';
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            current = current.mount.root;
          }
          // follow symlinks
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
            this.parent = null;
            this.mount = null;
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            FS.hashAddNode(this);
          };
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
          FS.FSNode.prototype = {};
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); },
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); },
            },
          });
        }
        return new FS.FSNode(parent, name, mode, rdev);
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        return FS.nodePermissions(dir, 'x');
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if ((flags & 2097155) !== 0 ||  // opening for write
              (flags & 512)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 1;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        if (stream.__proto__) {
          // reuse the object
          stream.__proto__ = FS.FSStream.prototype;
        } else {
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
        var completed = 0;
        var total = FS.mounts.length;
        function done(err) {
          if (err) {
            return callback(err);
          }
          if (++completed >= total) {
            callback(null);
          }
        };
        // sync all mounts
        for (var i = 0; i < FS.mounts.length; i++) {
          var mount = FS.mounts[i];
          if (!mount.type.syncfs) {
            done(null);
            continue;
          }
          mount.type.syncfs(mount, populate, done);
        }
      },mount:function (type, opts, mountpoint) {
        var lookup;
        if (mountpoint) {
          lookup = FS.lookupPath(mountpoint, { follow: false });
          mountpoint = lookup.path;  // use the absolute path
        }
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          root: null
        };
        // create a root node for the fs
        var root = type.mount(mount);
        root.mount = mount;
        mount.root = root;
        // assign the mount info to the mountpoint's node
        if (lookup) {
          lookup.node.mount = mount;
          lookup.node.mounted = true;
          // compatibility update FS.root if we mount to /
          if (mountpoint === '/') {
            FS.root = mount.root;
          }
        }
        // add to our cached list of mounts
        FS.mounts.push(mount);
        return root;
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 0666;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 0777;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 0666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // POSIX says unlink should set EPERM, not EISDIR
          if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function (path) {
        var lookup = FS.lookupPath(path, { follow: false });
        var link = lookup.node;
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 0666 : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // check permissions
        var err = FS.mayOpen(node, flags);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        return stream;
      },close:function (stream) {
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = '';
          var utf8 = new Runtime.UTF8Processor();
          for (var i = 0; i < length; i++) {
            ret += utf8.processCChar(buf[i]);
          }
        } else if (opts.encoding === 'binary') {
          ret = buf;
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var utf8 = new Runtime.UTF8Processor();
          var buf = new Uint8Array(utf8.processJSString(data));
          FS.write(stream, buf, 0, buf.length, 0);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0);
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function() { return 0; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        HEAP32[((_stdin)>>2)]=stdin.fd;
        assert(stdin.fd === 1, 'invalid handle for stdin (' + stdin.fd + ')');
        var stdout = FS.open('/dev/stdout', 'w');
        HEAP32[((_stdout)>>2)]=stdout.fd;
        assert(stdout.fd === 2, 'invalid handle for stdout (' + stdout.fd + ')');
        var stderr = FS.open('/dev/stderr', 'w');
        HEAP32[((_stderr)>>2)]=stderr.fd;
        assert(stderr.fd === 3, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
          this.message = ERRNO_MESSAGES[errno];
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.root = FS.createNode(null, '/', 16384 | 0777, 0);
        FS.mount(MEMFS, {}, '/');
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
        FS.ensureErrnoError();
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []; // Loaded chunks. Index is the chunk number
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = Math.floor(idx / this.chunkSize);
            return this.getter(chunkNum)[chunkOffset];
          }
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          }
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
              // Find length
              var xhr = new XMLHttpRequest();
              xhr.open('HEAD', url, false);
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              var datalength = Number(xhr.getResponseHeader("Content-length"));
              var header;
              var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
              var chunkSize = 1024*1024; // Chunk size in bytes
              if (!hasByteServing) chunkSize = datalength;
              // Function to get a range from the remote URL.
              var doXHR = (function(from, to) {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
                // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                // Some hints to the browser that we want binary data.
                if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType('text/plain; charset=x-user-defined');
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                  return new Uint8Array(xhr.response || []);
                } else {
                  return intArrayFromString(xhr.responseText || '', true);
                }
              });
              var lazyArray = this;
              lazyArray.setDataGetter(function(chunkNum) {
                var start = chunkNum * chunkSize;
                var end = (chunkNum+1) * chunkSize - 1; // including this byte
                end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
                  lazyArray.chunks[chunkNum] = doXHR(start, end);
                }
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum];
              });
              this._length = datalength;
              this._chunkSize = chunkSize;
              this.lengthKnown = true;
          }
          var lazyArray = new LazyUint8Array();
          Object.defineProperty(lazyArray, "length", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._length;
              }
          });
          Object.defineProperty(lazyArray, "chunkSize", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._chunkSize;
              }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        function processData(byteArray) {
          function finish(byteArray) {
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency('cp ' + fullname);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency('cp ' + fullname);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            continue;
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};var Browser={mainLoop:{scheduler:null,shouldPause:false,paused:false,queue:[],pause:function () {
          Browser.mainLoop.shouldPause = true;
        },resume:function () {
          if (Browser.mainLoop.paused) {
            Browser.mainLoop.paused = false;
            Browser.mainLoop.scheduler();
          }
          Browser.mainLoop.shouldPause = false;
        },updateStatus:function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
        // Canvas event setup
        var canvas = Module['canvas'];
        canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                    canvas['mozRequestPointerLock'] ||
                                    canvas['webkitRequestPointerLock'];
        canvas.exitPointerLock = document['exitPointerLock'] ||
                                 document['mozExitPointerLock'] ||
                                 document['webkitExitPointerLock'] ||
                                 function(){}; // no-op if function does not exist
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas;
        }
        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
        if (Module['elementPointerLock']) {
          canvas.addEventListener("click", function(ev) {
            if (!Browser.pointerLock && canvas.requestPointerLock) {
              canvas.requestPointerLock();
              ev.preventDefault();
            }
          }, false);
        }
      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        try {
          if (useWebGL) {
            var contextAttributes = {
              antialias: false,
              alpha: false
            };
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
            var errorInfo = '?';
            function onContextCreationError(event) {
              errorInfo = event.statusMessage || errorInfo;
            }
            canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
            try {
              ['experimental-webgl', 'webgl'].some(function(webglId) {
                return ctx = canvas.getContext(webglId, contextAttributes);
              });
            } finally {
              canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
            }
          } else {
            ctx = canvas.getContext('2d');
          }
          if (!ctx) throw ':(';
        } catch (e) {
          Module.print('Could not create canvas: ' + [errorInfo, e]);
          return null;
        }
        if (useWebGL) {
          // Set the background of the WebGL canvas to black
          canvas.style.backgroundColor = "black";
          // Warn on context loss
          canvas.addEventListener('webglcontextlost', function(event) {
            alert('WebGL context lost. You will need to reload the page.');
          }, false);
        }
        if (setInModule) {
          GLctx = Module.ctx = ctx;
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
        var canvas = Module['canvas'];
        function fullScreenChange() {
          Browser.isFullScreen = false;
          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
               document['fullScreenElement'] || document['fullscreenElement']) === canvas) {
            canvas.cancelFullScreen = document['cancelFullScreen'] ||
                                      document['mozCancelFullScreen'] ||
                                      document['webkitCancelFullScreen'];
            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullScreen = true;
            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
          } else if (Browser.resizeCanvas){
            Browser.setWindowedCanvasSize();
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
        }
        if (!Browser.fullScreenHandlersInstalled) {
          Browser.fullScreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullScreenChange, false);
          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
        }
        canvas.requestFullScreen = canvas['requestFullScreen'] ||
                                   canvas['mozRequestFullScreen'] ||
                                   (canvas['webkitRequestFullScreen'] ? function() { canvas['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
        canvas.requestFullScreen();
      },requestAnimationFrame:function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
          setTimeout(func, 1000/60);
        } else {
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window['requestAnimationFrame'] ||
                                           window['mozRequestAnimationFrame'] ||
                                           window['webkitRequestAnimationFrame'] ||
                                           window['msRequestAnimationFrame'] ||
                                           window['oRequestAnimationFrame'] ||
                                           window['setTimeout'];
          }
          window.requestAnimationFrame(func);
        }
      },safeCallback:function (func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },safeRequestAnimationFrame:function (func) {
        return Browser.requestAnimationFrame(function() {
          if (!ABORT) func();
        });
      },safeSetTimeout:function (func, timeout) {
        return setTimeout(function() {
          if (!ABORT) func();
        }, timeout);
      },safeSetInterval:function (func, timeout) {
        return setInterval(function() {
          if (!ABORT) func();
        }, timeout);
      },getMimetype:function (name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function (func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function (event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function (event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          // check if SDL is available
          if (typeof SDL != "undefined") {
          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
          	// just add the mouse delta to the current absolut mouse position
          	// FIXME: ideally this should be clamped against the canvas size and zero
          	Browser.mouseX += Browser.mouseMovementX;
          	Browser.mouseY += Browser.mouseMovementY;
          }        
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var x, y;
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
          if (event.type == 'touchstart' ||
              event.type == 'touchend' ||
              event.type == 'touchmove') {
            var t = event.touches.item(0);
            if (t) {
              x = t.pageX - (scrollX + rect.left);
              y = t.pageY - (scrollY + rect.top);
            } else {
              return;
            }
          } else {
            x = event.pageX - (scrollX + rect.left);
            y = event.pageY - (scrollY + rect.top);
          }
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },xhrLoad:function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
          } else {
            onerror();
          }
        };
        xhr.onerror = onerror;
        xhr.send(null);
      },asyncLoad:function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (!noRunDep) removeRunDependency('al ' + url);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (!noRunDep) addRunDependency('al ' + url);
      },resizeListeners:[],updateResizeListeners:function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        canvas.width = width;
        canvas.height = height;
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
        var canvas = Module['canvas'];
        this.windowedWidth = canvas.width;
        this.windowedHeight = canvas.height;
        canvas.width = screen.width;
        canvas.height = screen.height;
        // check if SDL is available   
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function () {
        var canvas = Module['canvas'];
        canvas.width = this.windowedWidth;
        canvas.height = this.windowedHeight;
        // check if SDL is available       
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      }};function _glutCreateWindow(name) {
      var contextAttributes = {
        antialias: ((GLUT.initDisplayMode & 0x0080 /*GLUT_MULTISAMPLE*/) != 0),
        depth: ((GLUT.initDisplayMode & 0x0010 /*GLUT_DEPTH*/) != 0),
        stencil: ((GLUT.initDisplayMode & 0x0020 /*GLUT_STENCIL*/) != 0)
      };
      Module.ctx = Browser.createContext(Module['canvas'], true, true, contextAttributes);
      return Module.ctx ? 1 /* a new GLUT window ID for the created context */ : 0 /* failure */;
    }function _eglCreateContext(display, config, hmm, contextAttribs) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      // EGL 1.4 spec says default EGL_CONTEXT_CLIENT_VERSION is GLES1, but this is not supported by Emscripten.
      // So user must pass EGL_CONTEXT_CLIENT_VERSION == 2 to initialize EGL.
      var glesContextVersion = 1;
      for(;;) {
          var param = HEAP32[((contextAttribs)>>2)];
          if (!param) break;
          var value = HEAP32[(((contextAttribs)+(4))>>2)];
          if (param == 0x3098 /*EGL_CONTEXT_CLIENT_VERSION*/) {
            glesContextVersion = value;
          }
          contextAttribs += 8;
      }
      if (glesContextVersion != 2) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0; /* EGL_NO_CONTEXT */
      }
      _glutInitDisplayMode(0x92 /* GLUT_RGBA | GLUT_DOUBLE | GLUT_DEPTH | GLUT_MULTISAMPLE */);
      EGL.windowID = _glutCreateWindow();
      if (EGL.windowID != 0) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        // Note: This function only creates a context, but it shall not make it active.
        return 62004; // Magic ID for Emscripten EGLContext
      } else {
        EGL.setErrorCode(0x3009 /* EGL_BAD_MATCH */); // By the EGL 1.4 spec, an implementation that does not support GLES2 (WebGL in this case), this error code is set.
        return 0; /* EGL_NO_CONTEXT */
      }
    }
  function _eglMakeCurrent(display, draw, read, context) { 
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0 /* EGL_FALSE */;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy. 
      if (context != 0 && context != 62004 /* Magic ID for Emscripten EGLContext */) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
      if ((read != 0 && read != 62006) || (draw != 0 && draw != 62006 /* Magic ID for Emscripten 'default surface' */)) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 0;
      }
      EGL.currentContext = context;
      EGL.currentDrawSurface = draw;
      EGL.currentReadSurface = read;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1 /* EGL_TRUE */;
    }
  function _eglSwapInterval(display, interval) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      // \todo Could we use this function to specify the rate for requestAnimationFrame+main loop? 
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  function _eglBindAPI(api) {
      if (api == 0x30A0 /* EGL_OPENGL_ES_API */) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      } else { // if (api == 0x30A1 /* EGL_OPENVG_API */ || api == 0x30A2 /* EGL_OPENGL_API */) {
        EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
        return 0;
      }
    }
  function _eglWaitClient() {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  function _eglWaitNative(nativeEngineId) {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  function _glutDestroyWindow(name) {
      Module.ctx = Browser.destroyContext(Module['canvas'], true, true);
      return 1;
    }function _eglDestroyContext(display, context) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (context != 62004 /* Magic ID for Emscripten EGLContext */) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  function _eglTerminate(display) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      EGL.currentContext = 0;
      EGL.currentReadSurface = 0;
      EGL.currentDrawSurface = 0;
      EGL.defaultDisplayInitialized = false;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  function _eglGetError() { 
      return EGL.errorCode;
    }
  function _browser_info() {
          idstr = "";
          if (navigator.vendor && navigator.vendor.length > 0)
              idstr += navigator.vendor + " ";
          if (navigator.platform && navigator.platform.length > 0)
              idstr += navigator.platform + " ";
          if (navigator.cpuClass && navigator.cpuClass.length > 0)
              idstr += navigator.cpuClass + " ";
          if (navigator.appName && navigator.appName.length > 0)
              idstr += navigator.appName + " ";
          if (navigator.userAgent && navigator.userAgent.length > 0)
              idstr += navigator.userAgent + " ";
          if (navigator.systemLanguage && navigator.systemLanguage.length > 0)
              idstr += navigator.systemLanguage + " ";
          else if (navigator.userLanguage && navigator.userLanguage.length > 0)
              idstr += navigator.userLanguage + " ";
          else if (navigator.language && navigator.language.length > 0)
              idstr += navigator.language + " ";
          return allocate(intArrayFromString(idstr.trim()), 'i8', ALLOC_STACK);
      }
  Module["_strcpy"] = _strcpy;
  Module["_tolower"] = _tolower;
  Module["_strncasecmp"] = _strncasecmp; 
  Module["_strcasecmp"] = _strcasecmp;
  var _mkport=undefined;var SOCKFS={mount:function (mount) {
        return FS.createNode(null, '/', 16384 | 0777, 0);
      },createSocket:function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
        return sock;
      },getSocket:function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function (stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function (stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function (stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function () {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function (sock, addr, port) {
          var ws;
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              var url = 'ws://' + addr + ':' + port;
              // the node ws library API is slightly different than the browser's
              var opts = ENVIRONMENT_IS_NODE ? {headers: {'websocket-protocol': ['binary']}} : ['binary'];
              // If node we use the ws library.
              var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
              ws = new WebSocket(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
          return peer;
        },getPeer:function (sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function (sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function (sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function (sock, peer) {
          var first = true;
          var handleOpen = function () {
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            assert(typeof data !== 'string' && data.byteLength !== undefined);  // must receive an ArrayBuffer
            data = new Uint8Array(data);  // make a typed array view on the array buffer
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
          };
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('error', function() {
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
          }
        },poll:function (sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
          return mask;
        },ioctl:function (sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function (sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function (sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port || _mkport();
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function (sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
          }
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function (sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              // push to queue for accept to pick up
              sock.pending.push(newsock);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
            }
          });
          sock.server.on('closed', function() {
            sock.server = null;
          });
          sock.server.on('error', function() {
            // don't throw
          });
        },accept:function (listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function (sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function (sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          var data;
          if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
            data = buffer.slice(offset, offset + length);
          } else {  // ArrayBufferView
            data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
          }
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function (sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }}};function _send(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _write(fd, buf, len);
    }
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var bytesWritten = _write(stream, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return 0;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }
  function _recv(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _read(fd, buf, len);
    }
  function _pread(fildes, buf, nbyte, offset) {
      // ssize_t pread(int fildes, void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _read(fildes, buf, nbyte) {
      // ssize_t read(int fildes, void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fread(ptr, size, nitems, stream) {
      // size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fread.html
      var bytesToRead = nitems * size;
      if (bytesToRead == 0) {
        return 0;
      }
      var bytesRead = 0;
      var streamObj = FS.getStream(stream);
      if (!streamObj) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      while (streamObj.ungotten.length && bytesToRead > 0) {
        HEAP8[((ptr++)|0)]=streamObj.ungotten.pop()
        bytesToRead--;
        bytesRead++;
      }
      var err = _read(stream, ptr, bytesToRead);
      if (err == -1) {
        if (streamObj) streamObj.error = true;
        return 0;
      }
      bytesRead += err;
      if (bytesRead < bytesToRead) streamObj.eof = true;
      return Math.floor(bytesRead / size);
    }
  function _sprintf(s, format, varargs) {
      // int sprintf(char *restrict s, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      return _snprintf(s, undefined, format, varargs);
    }
  function _fputs(s, stream) {
      // int fputs(const char *restrict s, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputs.html
      return _write(stream, s, _strlen(s));
    }
  function _fputc(c, stream) {
      // int fputc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputc.html
      var chr = unSign(c & 0xFF);
      HEAP8[((_fputc.ret)|0)]=chr
      var ret = _write(stream, _fputc.ret, 1);
      if (ret == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return -1;
      } else {
        return chr;
      }
    }function _puts(s) {
      // int puts(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/puts.html
      // NOTE: puts() always writes an extra newline.
      var stdout = HEAP32[((_stdout)>>2)];
      var ret = _fputs(s, stdout);
      if (ret < 0) {
        return ret;
      } else {
        var newlineRet = _fputc(10, stdout);
        return (newlineRet < 0) ? -1 : ret + 1;
      }
    }
  function _llvm_va_end() {}
  function _open(path, oflag, varargs) {
      // int open(const char *path, int oflag, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/open.html
      var mode = HEAP32[((varargs)>>2)];
      path = Pointer_stringify(path);
      try {
        var stream = FS.open(path, oflag, mode);
        return stream.fd;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fopen(filename, mode) {
      // FILE *fopen(const char *restrict filename, const char *restrict mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fopen.html
      var flags;
      mode = Pointer_stringify(mode);
      if (mode[0] == 'r') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 0;
        }
      } else if (mode[0] == 'w') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 512;
      } else if (mode[0] == 'a') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 1024;
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var ret = _open(filename, flags, allocate([0x1FF, 0, 0, 0], 'i32', ALLOC_STACK));  // All creation permissions.
      return (ret == -1) ? 0 : ret;
    }
  function _close(fildes) {
      // int close(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/close.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        FS.close(stream);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _fsync(fildes) {
      // int fsync(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fsync.html
      var stream = FS.getStream(fildes);
      if (stream) {
        // We write directly to the file system, so there's nothing to do here.
        return 0;
      } else {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
    }function _fclose(stream) {
      // int fclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fclose.html
      _fsync(stream);
      return _close(stream);
    }
  function _ftell(stream) {
      // long ftell(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ftell.html
      stream = FS.getStream(stream);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      if (FS.isChrdev(stream.node.mode)) {
        ___setErrNo(ERRNO_CODES.ESPIPE);
        return -1;
      } else {
        return stream.position;
      }
    }
  function _lseek(fildes, offset, whence) {
      // off_t lseek(int fildes, off_t offset, int whence);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/lseek.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        return FS.llseek(stream, offset, whence);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fseek(stream, offset, whence) {
      // int fseek(FILE *stream, long offset, int whence);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fseek.html
      var ret = _lseek(stream, offset, whence);
      if (ret == -1) {
        return -1;
      }
      stream = FS.getStream(stream);
      stream.eof = false;
      return 0;
    }
  function _isspace(chr) {
      return (chr == 32) || (chr >= 9 && chr <= 13);
    }function __parseInt(str, endptr, base, min, max, bits, unsign) {
      // Skip space.
      while (_isspace(HEAP8[(str)])) str++;
      // Check for a plus/minus sign.
      var multiplier = 1;
      if (HEAP8[(str)] == 45) {
        multiplier = -1;
        str++;
      } else if (HEAP8[(str)] == 43) {
        str++;
      }
      // Find base.
      var finalBase = base;
      if (!finalBase) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            finalBase = 16;
            str += 2;
          } else {
            finalBase = 8;
            str++;
          }
        }
      } else if (finalBase==16) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            str += 2;
          }
        }
      }
      if (!finalBase) finalBase = 10;
      // Get digits.
      var chr;
      var ret = 0;
      while ((chr = HEAP8[(str)]) != 0) {
        var digit = parseInt(String.fromCharCode(chr), finalBase);
        if (isNaN(digit)) {
          break;
        } else {
          ret = ret * finalBase + digit;
          str++;
        }
      }
      // Apply sign.
      ret *= multiplier;
      // Set end pointer.
      if (endptr) {
        HEAP32[((endptr)>>2)]=str
      }
      // Unsign if needed.
      if (unsign) {
        if (Math.abs(ret) > max) {
          ret = max;
          ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          ret = unSign(ret, bits);
        }
      }
      // Validate range.
      if (ret > max || ret < min) {
        ret = ret > max ? max : min;
        ___setErrNo(ERRNO_CODES.ERANGE);
      }
      if (bits == 64) {
        return ((asm["setTempRet0"]((tempDouble=ret,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)),ret>>>0)|0);
      }
      return ret;
    }function _strtol(str, endptr, base) {
      return __parseInt(str, endptr, base, -2147483648, 2147483647, 32);  // LONG_MIN, LONG_MAX.
    }
  var _llvm_pow_f64=Math_pow;
  function _feof(stream) {
      // int feof(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/feof.html
      stream = FS.getStream(stream);
      return Number(stream && stream.eof);
    }
  function _llvm_bswap_i16(x) {
      return ((x&0xff)<<8) | ((x>>8)&0xff);
    }
  function ___cxa_begin_catch(ptr) {
      __ZSt18uncaught_exceptionv.uncaught_exception--;
      return ptr;
    }
  function ___cxa_end_catch() {
      if (___cxa_end_catch.rethrown) {
        ___cxa_end_catch.rethrown = false;
        return;
      }
      // Clear state flag.
      asm['setThrew'](0);
      // Clear type.
      HEAP32[(((_llvm_eh_exception.buf)+(4))>>2)]=0
      // Call destructor if one is registered then clear it.
      var ptr = HEAP32[((_llvm_eh_exception.buf)>>2)];
      var destructor = HEAP32[(((_llvm_eh_exception.buf)+(8))>>2)];
      if (destructor) {
        Runtime.dynCall('vi', destructor, [ptr]);
        HEAP32[(((_llvm_eh_exception.buf)+(8))>>2)]=0
      }
      // Free ptr if it isn't null.
      if (ptr) {
        ___cxa_free_exception(ptr);
        HEAP32[((_llvm_eh_exception.buf)>>2)]=0
      }
    }
  function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }
  function _strchr(ptr, chr) {
      ptr--;
      do {
        ptr++;
        var val = HEAP8[(ptr)];
        if (val == chr) return ptr;
      } while (val);
      return 0;
    }
  function _access(path, amode) {
      // int access(const char *path, int amode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/access.html
      path = Pointer_stringify(path);
      if (amode & ~7) {
        // need a valid mode
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      }
      var node;
      try {
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        ___setErrNo(ERRNO_CODES.EACCES);
        return -1;
      }
      return 0;
    }
  function _stat(path, buf, dontResolveLastLink) {
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/stat.html
      // int stat(const char *path, struct stat *buf);
      // NOTE: dontResolveLastLink is a shortcut for lstat(). It should never be
      //       used in client code.
      path = typeof path !== 'string' ? Pointer_stringify(path) : path;
      try {
        var stat = dontResolveLastLink ? FS.lstat(path) : FS.stat(path);
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode
        HEAP32[(((buf)+(16))>>2)]=stat.nlink
        HEAP32[(((buf)+(20))>>2)]=stat.uid
        HEAP32[(((buf)+(24))>>2)]=stat.gid
        HEAP32[(((buf)+(28))>>2)]=stat.rdev
        HEAP32[(((buf)+(32))>>2)]=0;
        HEAP32[(((buf)+(36))>>2)]=stat.size
        HEAP32[(((buf)+(40))>>2)]=4096
        HEAP32[(((buf)+(44))>>2)]=stat.blocks
        HEAP32[(((buf)+(48))>>2)]=Math.floor(stat.atime.getTime() / 1000)
        HEAP32[(((buf)+(52))>>2)]=0
        HEAP32[(((buf)+(56))>>2)]=Math.floor(stat.mtime.getTime() / 1000)
        HEAP32[(((buf)+(60))>>2)]=0
        HEAP32[(((buf)+(64))>>2)]=Math.floor(stat.ctime.getTime() / 1000)
        HEAP32[(((buf)+(68))>>2)]=0
        HEAP32[(((buf)+(72))>>2)]=stat.ino
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  var _sqrtf=Math_sqrt;
  var _atan2=Math_atan2;
  var _sinf=Math_sin;
  var _cosf=Math_cos;
  var _tanf=Math_tan;
  var _atanf=Math_atan;
  var _floorf=Math_floor;
  function _printf(format, varargs) {
      // int printf(const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var stdout = HEAP32[((_stdout)>>2)];
      return _fprintf(stdout, format, varargs);
    }
  function _emscripten_get_now() {
      if (!_emscripten_get_now.actual) {
        if (ENVIRONMENT_IS_NODE) {
          _emscripten_get_now.actual = function _emscripten_get_now_actual() {
            var t = process['hrtime']();
            return t[0] * 1e3 + t[1] / 1e6;
          }
        } else if (typeof dateNow !== 'undefined') {
          _emscripten_get_now.actual = dateNow;
        } else if (ENVIRONMENT_IS_WEB && window['performance'] && window['performance']['now']) {
          _emscripten_get_now.actual = function _emscripten_get_now_actual() { return window['performance']['now'](); };
        } else {
          _emscripten_get_now.actual = Date.now;
        }
      }
      return _emscripten_get_now.actual();
    }
  function _putchar(c) {
      // int putchar(int c);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/putchar.html
      return _fputc(c, HEAP32[((_stdout)>>2)]);
    } 
  Module["_saveSetjmp"] = _saveSetjmp;
  Module["_testSetjmp"] = _testSetjmp;function _longjmp(env, value) {
      asm['setThrew'](env, value || 1);
      throw 'longjmp';
    }
  Module["_memcmp"] = _memcmp;
  function _qsort(base, num, size, cmp) {
      if (num == 0 || size == 0) return;
      // forward calls to the JavaScript sort method
      // first, sort the items logically
      var keys = [];
      for (var i = 0; i < num; i++) keys.push(i);
      keys.sort(function(a, b) {
        return Module['dynCall_iii'](cmp, base+a*size, base+b*size);
      });
      // apply the sort
      var temp = _malloc(num*size);
      _memcpy(temp, base, num*size);
      for (var i = 0; i < num; i++) {
        if (keys[i] == i) continue; // already in place
        _memcpy(base+i*size, temp+keys[i]*size, size);
      }
      _free(temp);
    }
  function _strrchr(ptr, chr) {
      var ptr2 = ptr + _strlen(ptr);
      do {
        if (HEAP8[(ptr2)] == chr) return ptr2;
        ptr2--;
      } while (ptr2 >= ptr);
      return 0;
    }
  Module["_strncpy"] = _strncpy;
  Module["_strcat"] = _strcat;
  function _atoi(ptr) {
      return _strtol(ptr, null, 10);
    }var _atol=_atoi;
  function _memchr(ptr, chr, num) {
      chr = unSign(chr);
      for (var i = 0; i < num; i++) {
        if (HEAP8[(ptr)] == chr) return ptr;
        ptr++;
      }
      return 0;
    }
  var _setjmp=undefined;
  function _pthread_mutex_lock() {}
  function _pthread_mutex_unlock() {}
  function _pthread_cond_broadcast() {
      return 0;
    }
  function _pthread_cond_wait() {
      return 0;
    }
  function _ungetc(c, stream) {
      // int ungetc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ungetc.html
      stream = FS.getStream(stream);
      if (!stream) {
        return -1;
      }
      if (c === -1) {
        // do nothing for EOF character
        return c;
      }
      c = unSign(c & 0xFF);
      stream.ungotten.push(c);
      stream.eof = false;
      return c;
    }
  function _fgetc(stream) {
      // int fgetc(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fgetc.html
      var streamObj = FS.getStream(stream);
      if (!streamObj) return -1;
      if (streamObj.eof || streamObj.error) return -1;
      var ret = _fread(_fgetc.ret, 1, 1, stream);
      if (ret == 0) {
        return -1;
      } else if (ret == -1) {
        streamObj.error = true;
        return -1;
      } else {
        return HEAPU8[((_fgetc.ret)|0)];
      }
    }var _getc=_fgetc;
  function ___errno_location() {
      return ___errno_state;
    }
  function _strerror_r(errnum, strerrbuf, buflen) {
      if (errnum in ERRNO_MESSAGES) {
        if (ERRNO_MESSAGES[errnum].length > buflen - 1) {
          return ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          var msg = ERRNO_MESSAGES[errnum];
          writeAsciiToMemory(msg, strerrbuf);
          return 0;
        }
      } else {
        return ___setErrNo(ERRNO_CODES.EINVAL);
      }
    }function _strerror(errnum) {
      if (!_strerror.buffer) _strerror.buffer = _malloc(256);
      _strerror_r(errnum, _strerror.buffer, 256);
      return _strerror.buffer;
    }
  function _abort() {
      Module['abort']();
    }
  function ___cxa_rethrow() {
      ___cxa_end_catch.rethrown = true;
      throw HEAP32[((_llvm_eh_exception.buf)>>2)] + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";;
    }
  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 79:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: return 1;
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }
  function _isxdigit(chr) {
      return (chr >= 48 && chr <= 57) ||
             (chr >= 97 && chr <= 102) ||
             (chr >= 65 && chr <= 70);
    }var _isxdigit_l=_isxdigit;
  function _isdigit(chr) {
      return chr >= 48 && chr <= 57;
    }var _isdigit_l=_isdigit;
  function _catopen() { throw 'TODO: ' + aborter }
  function _catgets() { throw 'TODO: ' + aborter }
  function _catclose() { throw 'TODO: ' + aborter }
  function _newlocale(mask, locale, base) {
      return _malloc(4);
    }
  function _freelocale(locale) {
      _free(locale);
    }
  function _isascii(chr) {
      return chr >= 0 && (chr & 0x80) == 0;
    }
  function ___ctype_b_loc() {
      // http://refspecs.freestandards.org/LSB_3.0.0/LSB-Core-generic/LSB-Core-generic/baselib---ctype-b-loc.html
      var me = ___ctype_b_loc;
      if (!me.ret) {
        var values = [
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,8195,8194,8194,8194,8194,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,24577,49156,49156,49156,
          49156,49156,49156,49156,49156,49156,49156,49156,49156,49156,49156,49156,55304,55304,55304,55304,55304,55304,55304,55304,
          55304,55304,49156,49156,49156,49156,49156,49156,49156,54536,54536,54536,54536,54536,54536,50440,50440,50440,50440,50440,
          50440,50440,50440,50440,50440,50440,50440,50440,50440,50440,50440,50440,50440,50440,50440,49156,49156,49156,49156,49156,
          49156,54792,54792,54792,54792,54792,54792,50696,50696,50696,50696,50696,50696,50696,50696,50696,50696,50696,50696,50696,
          50696,50696,50696,50696,50696,50696,50696,49156,49156,49156,49156,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ];
        var i16size = 2;
        var arr = _malloc(values.length * i16size);
        for (var i = 0; i < values.length; i++) {
          HEAP16[(((arr)+(i * i16size))>>1)]=values[i]
        }
        me.ret = allocate([arr + 128 * i16size], 'i16*', ALLOC_NORMAL);
      }
      return me.ret;
    }
  function ___ctype_tolower_loc() {
      // http://refspecs.freestandards.org/LSB_3.1.1/LSB-Core-generic/LSB-Core-generic/libutil---ctype-tolower-loc.html
      var me = ___ctype_tolower_loc;
      if (!me.ret) {
        var values = [
          128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,
          158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,
          188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,
          218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,
          248,249,250,251,252,253,254,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
          33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,97,98,99,100,101,102,103,
          104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,91,92,93,94,95,96,97,98,99,100,101,102,103,
          104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,
          134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,
          164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,
          194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,
          224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,
          254,255
        ];
        var i32size = 4;
        var arr = _malloc(values.length * i32size);
        for (var i = 0; i < values.length; i++) {
          HEAP32[(((arr)+(i * i32size))>>2)]=values[i]
        }
        me.ret = allocate([arr + 128 * i32size], 'i32*', ALLOC_NORMAL);
      }
      return me.ret;
    }
  function ___ctype_toupper_loc() {
      // http://refspecs.freestandards.org/LSB_3.1.1/LSB-Core-generic/LSB-Core-generic/libutil---ctype-toupper-loc.html
      var me = ___ctype_toupper_loc;
      if (!me.ret) {
        var values = [
          128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,
          158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,
          188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,
          218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,
          248,249,250,251,252,253,254,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
          33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,
          73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
          81,82,83,84,85,86,87,88,89,90,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,
          145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,
          175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,
          205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,
          235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255
        ];
        var i32size = 4;
        var arr = _malloc(values.length * i32size);
        for (var i = 0; i < values.length; i++) {
          HEAP32[(((arr)+(i * i32size))>>2)]=values[i]
        }
        me.ret = allocate([arr + 128 * i32size], 'i32*', ALLOC_NORMAL);
      }
      return me.ret;
    }
  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]);
      return sum;
    }
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month 
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
      return newDate;
    }function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)]
      };
      var pattern = Pointer_stringify(format);
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate date representation
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      };
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      };
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        };
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      };
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      };
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else { 
            return thisDate.getFullYear()-1;
          }
      };
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls(Math.floor(year/100),2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year. 
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes 
          // January 4th, which is also the week that includes the first Thursday of the year, and 
          // is also the first week that contains at least four days in the year. 
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of 
          // the last week of the preceding year; thus, for Saturday 2nd January 1999, 
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th, 
          // or 31st is a Monday, it and any following days are part of week 1 of the following year. 
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          return leadingNulls(date.tm_hour < 13 ? date.tm_hour : date.tm_hour-12, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour > 0 && date.tm_hour < 13) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          var day = new Date(date.tm_year+1900, date.tm_mon+1, date.tm_mday, 0, 0, 0, 0);
          return day.getDay() || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53]. 
          // The first Sunday of January is the first day of week 1; 
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week) 
          // as a decimal number [01,53]. If the week containing 1 January has four 
          // or more days in the new year, then it is considered week 1. 
          // Otherwise, it is the last week of the previous year, and the next week is week 1. 
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          } 
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          var day = new Date(date.tm_year+1900, date.tm_mon+1, date.tm_mday, 0, 0, 0, 0);
          return day.getDay();
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53]. 
          // The first Monday of January is the first day of week 1; 
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ),
          // or by no characters if no timezone is determinable. 
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich). 
          // If tm_isdst is zero, the standard time offset is used. 
          // If tm_isdst is greater than zero, the daylight savings time offset is used. 
          // If tm_isdst is negative, no characters are returned. 
          // FIXME: we cannot determine time zone (or can we?)
          return '';
        },
        '%Z': function(date) {
          // Replaced by the timezone name or abbreviation, or by no bytes if no timezone information exists. [ tm_isdst]
          // FIXME: we cannot determine time zone (or can we?)
          return '';
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      } 
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }var _strftime_l=_strftime;
  function __parseInt64(str, endptr, base, min, max, unsign) {
      var isNegative = false;
      // Skip space.
      while (_isspace(HEAP8[(str)])) str++;
      // Check for a plus/minus sign.
      if (HEAP8[(str)] == 45) {
        str++;
        isNegative = true;
      } else if (HEAP8[(str)] == 43) {
        str++;
      }
      // Find base.
      var ok = false;
      var finalBase = base;
      if (!finalBase) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            finalBase = 16;
            str += 2;
          } else {
            finalBase = 8;
            ok = true; // we saw an initial zero, perhaps the entire thing is just "0"
          }
        }
      } else if (finalBase==16) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            str += 2;
          }
        }
      }
      if (!finalBase) finalBase = 10;
      var start = str;
      // Get digits.
      var chr;
      while ((chr = HEAP8[(str)]) != 0) {
        var digit = parseInt(String.fromCharCode(chr), finalBase);
        if (isNaN(digit)) {
          break;
        } else {
          str++;
          ok = true;
        }
      }
      if (!ok) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return ((asm["setTempRet0"](0),0)|0);
      }
      // Set end pointer.
      if (endptr) {
        HEAP32[((endptr)>>2)]=str
      }
      try {
        var numberString = isNegative ? '-'+Pointer_stringify(start, str - start) : Pointer_stringify(start, str - start);
        i64Math.fromString(numberString, finalBase, min, max, unsign);
      } catch(e) {
        ___setErrNo(ERRNO_CODES.ERANGE); // not quite correct
      }
      return ((asm["setTempRet0"](((HEAP32[(((tempDoublePtr)+(4))>>2)])|0)),((HEAP32[((tempDoublePtr)>>2)])|0))|0);
    }function _strtoull(str, endptr, base) {
      return __parseInt64(str, endptr, base, 0, '18446744073709551615', true);  // ULONG_MAX.
    }var _strtoull_l=_strtoull;
  function _strtoll(str, endptr, base) {
      return __parseInt64(str, endptr, base, '-9223372036854775808', '9223372036854775807');  // LLONG_MIN, LLONG_MAX.
    }var _strtoll_l=_strtoll;
  function _uselocale(locale) {
      return 0;
    }
  function _asprintf(s, format, varargs) {
      return _sprintf(-s, format, varargs);
    }function _vasprintf(s, format, va_arg) {
      return _asprintf(s, format, HEAP32[((va_arg)>>2)]);
    }
  function _vsscanf(s, format, va_arg) {
      return _sscanf(s, format, HEAP32[((va_arg)>>2)]);
    }
  var _fabs=Math_abs;
  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) self.alloc(bytes);
      return ret;  // Previous break location.
    }
  function _time(ptr) {
      var ret = Math.floor(Date.now()/1000);
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret
      }
      return ret;
    }
  function _copysign(a, b) {
      return __reallyNegative(a) === __reallyNegative(b) ? a : -a;
    }var _copysignl=_copysign;
  function _fmod(x, y) {
      return x % y;
    }var _fmodl=_fmod;
_llvm_eh_exception.buf = allocate(12, "void*", ALLOC_STATIC);
var GLctx; GL.init()
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) { Browser.requestFullScreen(lockPointer, resizeCanvas) };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
FS.staticInit();__ATINIT__.unshift({ func: function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() } });__ATMAIN__.push({ func: function() { FS.ignorePermissions = false } });__ATEXIT__.push({ func: function() { FS.quit() } });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4); HEAP32[((___errno_state)>>2)]=0;
__ATINIT__.unshift({ func: function() { TTY.init() } });__ATEXIT__.push({ func: function() { TTY.shutdown() } });TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); NODEFS.staticInit(); }
__ATINIT__.push({ func: function() { SOCKFS.root = FS.mount(SOCKFS, {}, null); } });
_fputc.ret = allocate([0], "i8", ALLOC_STATIC);
_fgetc.ret = allocate([0], "i8", ALLOC_STATIC);
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);
staticSealed = true; // seal the static portion of memory
STACK_MAX = STACK_BASE + 5242880;
DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);
assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
var Math_min = Math.min;
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viffff(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viffff"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiffiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiffiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiid(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiid"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vifff(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_vifff"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiid(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiid"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    return Module["dynCall_iiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    return Module["dynCall_iiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viif(index,a1,a2,a3) {
  try {
    Module["dynCall_viif"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer){"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.cttz_i8|0;var n=env.ctlz_i8|0;var o=env.__ZTVN10__cxxabiv117__class_type_infoE|0;var p=env.___fsmu8|0;var q=env._stdout|0;var r=env.___dso_handle|0;var s=env._stdin|0;var t=env.__ZTVN10__cxxabiv120__si_class_type_infoE|0;var u=env._stderr|0;var v=+env.NaN;var w=+env.Infinity;var x=0;var y=0;var z=0;var A=0;var B=0,C=0,D=0,E=0,F=0.0,G=0,H=0,I=0,J=0.0;var K=0;var L=0;var M=0;var N=0;var O=0;var P=0;var Q=0;var R=0;var S=0;var T=0;var U=global.Math.floor;var V=global.Math.abs;var W=global.Math.sqrt;var X=global.Math.pow;var Y=global.Math.cos;var Z=global.Math.sin;var _=global.Math.tan;var $=global.Math.acos;var aa=global.Math.asin;var ba=global.Math.atan;var ca=global.Math.atan2;var da=global.Math.exp;var ea=global.Math.log;var fa=global.Math.ceil;var ga=global.Math.imul;var ha=env.abort;var ia=env.assert;var ja=env.asmPrintInt;var ka=env.asmPrintFloat;var la=env.min;var ma=env.invoke_iiiiiiii;var na=env.invoke_viiiii;var oa=env.invoke_vi;var pa=env.invoke_vii;var qa=env.invoke_iiiiiii;var ra=env.invoke_ii;var sa=env.invoke_viffff;var ta=env.invoke_iiiii;var ua=env.invoke_viiiiiffiii;var va=env.invoke_iiii;var wa=env.invoke_viiiiid;var xa=env.invoke_viiiiiiii;var ya=env.invoke_vifff;var za=env.invoke_viiiiii;var Aa=env.invoke_viff;var Ba=env.invoke_viiiiiii;var Ca=env.invoke_viiiiiid;var Da=env.invoke_viiiiiiiii;var Ea=env.invoke_iii;var Fa=env.invoke_iiiiii;var Ga=env.invoke_iiiiiiiiii;var Ha=env.invoke_viii;var Ia=env.invoke_v;var Ja=env.invoke_iiiiiiiii;var Ka=env.invoke_viif;var La=env.invoke_viiii;var Ma=env._llvm_lifetime_end;var Na=env._glClearColor;var Oa=env._sysconf;var Pa=env._lseek;var Qa=env.__scanString;var Ra=env._glGenTextures;var Sa=env._fread;var Ta=env._eglTerminate;var Ua=env._pthread_mutex_lock;var Va=env._emscripten_run_script_string;var Wa=env.___cxa_end_catch;var Xa=env._glLinkProgram;var Ya=env._strtoull;var Za=env._glBindTexture;var _a=env._fflush;var $a=env._isxdigit;var ab=env._strtol;var bb=env._glFramebufferRenderbuffer;var cb=env._glGetString;var db=env._fwrite;var eb=env._llvm_eh_exception;var fb=env._fputs;var gb=env._llvm_umul_with_overflow_i32;var hb=env._emscripten_get_now;var ib=env._emscripten_set_mouseup_callback;var jb=env._eglCreateContext;var kb=env._glCompileShader;var lb=env._isspace;var mb=env._glDepthFunc;var nb=env._glDeleteTextures;var ob=env._eglBindAPI;var pb=env._read;var qb=env._fclose;var rb=env._glGenRenderbuffers;var sb=env._eglMakeCurrent;var tb=env._glClearDepthf;var ub=env._glClearStencil;var vb=env._strrchr;var wb=env._emscripten_set_keydown_callback;var xb=env._strstr;var yb=env._fsync;var zb=env.___cxa_guard_abort;var Ab=env._newlocale;var Bb=env.___gxx_personality_v0;var Cb=env._eglSwapInterval;var Db=env._pthread_cond_wait;var Eb=env._glUniform1f;var Fb=env._fmod;var Gb=env.___resumeException;var Hb=env._glCreateShader;var Ib=env._strcmp;var Jb=env._glUniform1i;var Kb=env._glGetActiveAttrib;var Lb=env._cosf;var Mb=env._vsscanf;var Nb=env._glDeleteRenderbuffers;var Ob=env._fputc;var Pb=env._snprintf;var Qb=env._glUniform2f;var Rb=env.__isLeapYear;var Sb=env._stat;var Tb=env._glGetProgramiv;var Ub=env._glVertexAttribPointer;var Vb=env.__getFloat;var Wb=env._atexit;var Xb=env._eglQueryString;var Yb=env.___cxa_free_exception;var Zb=env._glGetUniformLocation;var _b=env._close;var $b=env._feof;var ac=env._glBindFramebuffer;var bc=env._asprintf;var cc=env._glCullFace;var dc=env.___cxa_rethrow;var ec=env.___setErrNo;var fc=env._open;var gc=env._emscripten_set_keyup_callback;var hc=env._eglWaitClient;var ic=env._access;var jc=env._eglGetError;var kc=env._ftell;var lc=env._glDeleteProgram;var mc=env._exit;var nc=env._sprintf;var oc=env._glRenderbufferStorage;var pc=env.___ctype_b_loc;var qc=env._glutDestroyWindow;var rc=env._freelocale;var sc=env._glAttachShader;var tc=env._emscripten_set_main_loop;var uc=env._catgets;var vc=env._emscripten_set_mousemove_callback;var wc=env._llvm_uadd_with_overflow_i32;var xc=env._browser_info;var yc=env.___cxa_is_number_type;var zc=env.__arraySum;var Ac=env.___cxa_does_inherit;var Bc=env._glUniform3f;var Cc=env.___cxa_guard_acquire;var Dc=env._glBindAttribLocation;var Ec=env._emscripten_get_canvas_size;var Fc=env._glDrawElements;var Gc=env._glColorMask;var Hc=env._sinf;var Ic=env._printf;var Jc=env._eglInitialize;var Kc=env._recv;var Lc=env.__parseInt64;var Mc=env.__ZSt18uncaught_exceptionv;var Nc=env._glBufferSubData;var Oc=env.___cxa_call_unexpected;var Pc=env._eglGetConfigs;var Qc=env._copysign;var Rc=env._memchr;var Sc=env._glGetShaderiv;var Tc=env.__exit;var Uc=env._eglWaitNative;var Vc=env._eglQuerySurface;var Wc=env._strncmp;var Xc=env._pread;var Yc=env._floorf;var Zc=env.___cxa_throw;var _c=env._glPolygonOffset;var $c=env._glUseProgram;var ad=env._send;var bd=env._glShaderSource;var cd=env._glBindRenderbuffer;var dd=env._glCompressedTexImage2D;var ed=env._fopen;var fd=env._glDeleteFramebuffers;var gd=env._glDrawArrays;var hd=env._glIsProgram;var id=env._glTexSubImage2D;var jd=env._sqrtf;var kd=env._glDisable;var ld=env._puts;var md=env._glClear;var nd=env._qsort;var od=env._glBlendFuncSeparate;var pd=env._eglDestroyContext;var qd=env._glActiveTexture;var rd=env._glEnableVertexAttribArray;var sd=env._glBindBuffer;var td=env.___cxa_find_matching_catch;var ud=env._glUniform4f;var vd=env._glFramebufferTexture2D;var wd=env._glUniformMatrix2fv;var xd=env._eglCreateWindowSurface;var yd=env._glUniformMatrix3fv;var zd=env._glutCreateWindow;var Ad=env._glBufferData;var Bd=env.__formatString;var Cd=env._pthread_cond_broadcast;var Dd=env.__ZSt9terminatev;var Ed=env._atoi;var Fd=env._isascii;var Gd=env._pthread_mutex_unlock;var Hd=env._putchar;var Id=env._glGenFramebuffers;var Jd=env._llvm_pow_f64;var Kd=env._sbrk;var Ld=env._tanf;var Md=env._fgetc;var Nd=env.___errno_location;var Od=env._strerror;var Pd=env._glGetIntegerv;var Qd=env._catclose;var Rd=env._llvm_lifetime_start;var Sd=env._glTexParameteri;var Td=env.__parseInt;var Ud=env.___cxa_guard_release;var Vd=env._ungetc;var Wd=env._fprintf;var Xd=env._uselocale;var Yd=env._vsnprintf;var Zd=env._glDisableVertexAttribArray;var _d=env._sscanf;var $d=env._glTexImage2D;var ae=env._glGetProgramInfoLog;var be=env._glStencilMask;var ce=env._glBlendEquation;var de=env._glGetShaderInfoLog;var ee=env._abort;var fe=env._glIsShader;var ge=env._emscripten_set_wheel_callback;var he=env._isdigit;var ie=env._strtoll;var je=env.__addDays;var ke=env._glEnable;var le=env._atanf;var me=env._fabs;var ne=env.__reallyNegative;var oe=env._write;var pe=env._fseek;var qe=env._glBlendEquationSeparate;var re=env._glGenBuffers;var se=env._glGetAttribLocation;var te=env.___cxa_allocate_exception;var ue=env._glDeleteShader;var ve=env._glBlendFunc;var we=env._glCreateProgram;var xe=env._strchr;var ye=env._set_window_resize_handler;var ze=env._longjmp;var Ae=env._vasprintf;var Be=env._glViewport;var Ce=env._emscripten_set_mousedown_callback;var De=env._catopen;var Ee=env.___ctype_toupper_loc;var Fe=env.___cxa_begin_catch;var Ge=env.___ctype_tolower_loc;var He=env._glDepthMask;var Ie=env._llvm_va_end;var Je=env._eglChooseConfig;var Ke=env._glUniformMatrix4fv;var Le=env._glGetActiveUniform;var Me=env._pwrite;var Ne=env._strerror_r;var Oe=env._emscripten_set_click_callback;var Pe=env._glFrontFace;var Qe=env._glDeleteBuffers;var Re=env._eglGetDisplay;var Se=env._emscripten_set_canvas_size;var Te=env._atan2;var Ue=env._glutInitDisplayMode;var Ve=env._glGetBooleanv;var We=env._strftime;var Xe=env._llvm_bswap_i16;var Ye=env._time;var Ze=env._glValidateProgram;var _e=env._emscripten_set_dblclick_callback;var $e=0.0;
// EMSCRIPTEN_START_FUNCS
function kN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;e=a+c>>>0;return(K=b+d+(e>>>0<a>>>0|0)>>>0,e|0)|0}function lN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;e=b-d>>>0;e=b-d-(c>>>0>a>>>0|0)>>>0;return(K=e,a-c>>>0|0)|0}function mN(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){K=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}K=a<<c-32;return 0}function nN(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){K=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}K=0;return b>>>c-32|0}function oN(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){K=b>>c;return a>>>c|(b&(1<<c)-1)<<32-c}K=(b|0)<0?-1:0;return b>>c-32|0}function pN(b){b=b|0;var c=0;c=a[n+(b>>>24)|0]|0;if((c|0)<8)return c|0;c=a[n+(b>>16&255)|0]|0;if((c|0)<8)return c+8|0;c=a[n+(b>>8&255)|0]|0;if((c|0)<8)return c+16|0;return(a[n+(b&255)|0]|0)+24|0}function qN(b){b=b|0;var c=0;c=a[m+(b&255)|0]|0;if((c|0)<8)return c|0;c=a[m+(b>>8&255)|0]|0;if((c|0)<8)return c+8|0;c=a[m+(b>>16&255)|0]|0;if((c|0)<8)return c+16|0;return(a[m+(b>>>24)|0]|0)+24|0}function rN(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;c=a&65535;d=b&65535;e=ga(d,c)|0;f=a>>>16;a=(e>>>16)+(ga(d,f)|0)|0;d=b>>>16;b=ga(d,c)|0;return(K=(a>>>16)+(ga(d,f)|0)+(((a&65535)+b|0)>>>16)|0,a+b<<16|e&65535|0)|0}function sN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=b>>31|((b|0)<0?-1:0)<<1;f=((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1;g=d>>31|((d|0)<0?-1:0)<<1;h=((d|0)<0?-1:0)>>31|((d|0)<0?-1:0)<<1;i=lN(e^a,f^b,e,f)|0;b=K;a=g^e;e=h^f;f=lN((xN(i,b,lN(g^c,h^d,g,h)|0,K,0)|0)^a,K^e,a,e)|0;return(K=K,f)|0}function tN(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0;f=i;i=i+8|0;g=f|0;h=b>>31|((b|0)<0?-1:0)<<1;j=((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1;k=e>>31|((e|0)<0?-1:0)<<1;l=((e|0)<0?-1:0)>>31|((e|0)<0?-1:0)<<1;m=lN(h^a,j^b,h,j)|0;b=K;xN(m,b,lN(k^d,l^e,k,l)|0,K,g)|0;l=lN(c[g>>2]^h,c[g+4>>2]^j,h,j)|0;j=K;i=f;return(K=j,l)|0}function uN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=a;a=c;c=rN(e,a)|0;f=K;return(K=(ga(b,a)|0)+(ga(d,e)|0)+f|f&0,c|0|0)|0}function vN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;e=xN(a,b,c,d,0)|0;return(K=K,e)|0}function wN(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=i;i=i+8|0;g=f|0;xN(a,b,d,e,g)|0;i=f;return(K=c[g+4>>2]|0,c[g>>2]|0)|0}function xN(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,L=0,M=0;g=a;h=b;i=h;j=d;k=e;l=k;if((i|0)==0){m=(f|0)!=0;if((l|0)==0){if(m){c[f>>2]=(g>>>0)%(j>>>0);c[f+4>>2]=0}n=0;o=(g>>>0)/(j>>>0)>>>0;return(K=n,o)|0}else{if(!m){n=0;o=0;return(K=n,o)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;n=0;o=0;return(K=n,o)|0}}m=(l|0)==0;do{if((j|0)==0){if(m){if((f|0)!=0){c[f>>2]=(i>>>0)%(j>>>0);c[f+4>>2]=0}n=0;o=(i>>>0)/(j>>>0)>>>0;return(K=n,o)|0}if((g|0)==0){if((f|0)!=0){c[f>>2]=0;c[f+4>>2]=(i>>>0)%(l>>>0)}n=0;o=(i>>>0)/(l>>>0)>>>0;return(K=n,o)|0}p=l-1|0;if((p&l|0)==0){if((f|0)!=0){c[f>>2]=a|0;c[f+4>>2]=p&i|b&0}n=0;o=i>>>((qN(l|0)|0)>>>0);return(K=n,o)|0}p=(pN(l|0)|0)-(pN(i|0)|0)|0;if(p>>>0<=30){q=p+1|0;r=31-p|0;s=q;t=i<<r|g>>>(q>>>0);u=i>>>(q>>>0);v=0;w=g<<r;break}if((f|0)==0){n=0;o=0;return(K=n,o)|0}c[f>>2]=a|0;c[f+4>>2]=h|b&0;n=0;o=0;return(K=n,o)|0}else{if(!m){r=(pN(l|0)|0)-(pN(i|0)|0)|0;if(r>>>0<=31){q=r+1|0;p=31-r|0;x=r-31>>31;s=q;t=g>>>(q>>>0)&x|i<<p;u=i>>>(q>>>0)&x;v=0;w=g<<p;break}if((f|0)==0){n=0;o=0;return(K=n,o)|0}c[f>>2]=a|0;c[f+4>>2]=h|b&0;n=0;o=0;return(K=n,o)|0}p=j-1|0;if((p&j|0)!=0){x=(pN(j|0)|0)+33-(pN(i|0)|0)|0;q=64-x|0;r=32-x|0;y=r>>31;z=x-32|0;A=z>>31;s=x;t=r-1>>31&i>>>(z>>>0)|(i<<r|g>>>(x>>>0))&A;u=A&i>>>(x>>>0);v=g<<q&y;w=(i<<q|g>>>(z>>>0))&y|g<<r&x-33>>31;break}if((f|0)!=0){c[f>>2]=p&g;c[f+4>>2]=0}if((j|0)==1){n=h|b&0;o=a|0|0;return(K=n,o)|0}else{p=qN(j|0)|0;n=i>>>(p>>>0)|0;o=i<<32-p|g>>>(p>>>0)|0;return(K=n,o)|0}}}while(0);if((s|0)==0){B=w;C=v;D=u;E=t;F=0;G=0}else{g=d|0|0;d=k|e&0;e=kN(g,d,-1,-1)|0;k=K;i=w;w=v;v=u;u=t;t=s;s=0;while(1){H=w>>>31|i<<1;I=s|w<<1;j=u<<1|i>>>31|0;a=u>>>31|v<<1|0;lN(e,k,j,a)|0;b=K;h=b>>31|((b|0)<0?-1:0)<<1;J=h&1;L=lN(j,a,h&g,(((b|0)<0?-1:0)>>31|((b|0)<0?-1:0)<<1)&d)|0;M=K;b=t-1|0;if((b|0)==0){break}else{i=H;w=I;v=M;u=L;t=b;s=J}}B=H;C=I;D=M;E=L;F=0;G=J}J=C;C=0;if((f|0)!=0){c[f>>2]=E;c[f+4>>2]=D}n=(J|0)>>>31|(B|C)<<1|(C<<1|J>>>31)&0|F;o=(J<<1|0>>>31)&-2|G;return(K=n,o)|0}function yN(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;return af[a&3](b|0,c|0,d|0,e|0,f|0,g|0,h|0)|0}function zN(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;bf[a&15](b|0,c|0,d|0,e|0,f|0)}function AN(a,b){a=a|0;b=b|0;cf[a&511](b|0)}function BN(a,b,c){a=a|0;b=b|0;c=c|0;df[a&255](b|0,c|0)}function CN(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return ef[a&7](b|0,c|0,d|0,e|0,f|0,g|0)|0}function DN(a,b){a=a|0;b=b|0;return ff[a&255](b|0)|0}function EN(a,b,c,d,e,f){a=a|0;b=b|0;c=+c;d=+d;e=+e;f=+f;gf[a&3](b|0,+c,+d,+e,+f)}function FN(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return hf[a&127](b|0,c|0,d|0,e|0)|0}function GN(a,b,c,d,e,f,g,h,i,j,k){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=+g;h=+h;i=i|0;j=j|0;k=k|0;jf[a&3](b|0,c|0,d|0,e|0,f|0,+g,+h,i|0,j|0,k|0)}function HN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return kf[a&255](b|0,c|0,d|0)|0}function IN(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=+g;lf[a&15](b|0,c|0,d|0,e|0,f|0,+g)}function JN(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;mf[a&31](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0)}function KN(a,b,c,d,e){a=a|0;b=b|0;c=+c;d=+d;e=+e;nf[a&7](b|0,+c,+d,+e)}function LN(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;of[a&63](b|0,c|0,d|0,e|0,f|0,g|0)}function MN(a,b,c,d){a=a|0;b=b|0;c=+c;d=+d;pf[a&3](b|0,+c,+d)}function NN(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;qf[a&127](b|0,c|0,d|0,e|0,f|0,g|0,h|0)}function ON(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=+h;rf[a&7](b|0,c|0,d|0,e|0,f|0,g|0,+h)}function PN(a,b,c,d,e,f,g,h,i,j){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;sf[a&7](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0,j|0)}function QN(a,b,c){a=a|0;b=b|0;c=c|0;return tf[a&511](b|0,c|0)|0}function RN(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return uf[a&127](b|0,c|0,d|0,e|0,f|0)|0}function SN(a,b,c,d,e,f,g,h,i,j){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;return vf[a&3](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0,j|0)|0}function TN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;wf[a&63](b|0,c|0,d|0)}function UN(a){a=a|0;xf[a&7]()}function VN(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;return yf[a&31](b|0,c|0,d|0,e|0,f|0,g|0,h|0,i|0)|0}function WN(a,b,c,d){a=a|0;b=b|0;c=c|0;d=+d;zf[a&7](b|0,c|0,+d)}function XN(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;Af[a&63](b|0,c|0,d|0,e|0)}function YN(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;ha(0);return 0}function ZN(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ha(1)}function _N(a){a=a|0;ha(2)}function $N(a,b){a=a|0;b=b|0;ha(3)}function aO(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;ha(4);return 0}function bO(a){a=a|0;ha(5);return 0}function cO(a,b,c,d,e){a=a|0;b=+b;c=+c;d=+d;e=+e;ha(6)}function dO(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;ha(7);return 0}function eO(a,b,c,d,e,f,g,h,i,j){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=+f;g=+g;h=h|0;i=i|0;j=j|0;ha(8)}function fO(a,b,c){a=a|0;b=b|0;c=c|0;ha(9);return 0}function gO(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=+f;ha(10)}function hO(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;ha(11)}function iO(a,b,c,d){a=a|0;b=+b;c=+c;d=+d;ha(12)}function jO(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;ha(13)}function kO(a,b,c){a=a|0;b=+b;c=+c;ha(14)}function lO(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;ha(15)}function mO(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=+g;ha(16)}function nO(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;ha(17)}function oO(a,b){a=a|0;b=b|0;ha(18);return 0}function pO(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ha(19);return 0}function qO(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;ha(20);return 0}function rO(a,b,c){a=a|0;b=b|0;c=c|0;ha(21)}function sO(){ha(22)}function tO(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;ha(23);return 0}function uO(a,b,c){a=a|0;b=b|0;c=+c;ha(24)}function vO(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;ha(25)}
// EMSCRIPTEN_END_FUNCS
var af=[YN,YN,iy,YN];var bf=[ZN,ZN,xM,ZN,yM,ZN,tg,ZN,wM,ZN,Su,ZN,ZN,ZN,ZN,ZN];var cf=[_N,_N,CJ,_N,WF,_N,xJ,_N,kH,_N,$D,_N,LE,_N,HJ,_N,qx,_N,zg,_N,HD,_N,Cu,_N,uD,_N,UD,_N,TD,_N,GK,_N,ZD,_N,cv,_N,tG,_N,rB,_N,Lm,_N,Jk,_N,zo,_N,jg,_N,MF,_N,IF,_N,NM,_N,MM,_N,Gu,_N,UD,_N,SJ,_N,gK,_N,jM,_N,uG,_N,_y,_N,Oy,_N,lz,_N,jj,_N,yJ,_N,Uk,_N,TJ,_N,vA,_N,UL,_N,mF,_N,kv,_N,XF,_N,ru,_N,Jt,_N,zI,_N,xA,_N,MJ,_N,YC,_N,Ft,_N,IB,_N,VI,_N,Fw,_N,mM,_N,cL,_N,Px,_N,zE,_N,kl,_N,$s,_N,Yf,_N,ky,_N,RK,_N,Ht,_N,RL,_N,sA,_N,SF,_N,eI,_N,fL,_N,VJ,_N,DM,_N,ry,_N,fC,_N,rJ,_N,ju,_N,Cv,_N,qF,_N,kB,_N,RF,_N,$H,_N,XG,_N,NL,_N,fv,_N,ak,_N,Hu,_N,YG,_N,Iu,_N,iC,_N,kw,_N,al,_N,Ck,_N,Os,_N,gz,_N,AI,_N,Ms,_N,lF,_N,xF,_N,YH,_N,LH,_N,JF,_N,oI,_N,nB,_N,KE,_N,ah,_N,ov,_N,Js,_N,GF,_N,Pv,_N,BF,_N,Rg,_N,Eu,_N,zA,_N,Dk,_N,qK,_N,jl,_N,jz,_N,nF,_N,jy,_N,HF,_N,Tk,_N,lD,_N,KI,_N,TL,_N,nM,_N,Cw,_N,cA,_N,Jj,_N,Av,_N,AD,_N,$k,_N,LJ,_N,ZD,_N,yk,_N,UJ,_N,QJ,_N,so,_N,_n,_N,Ct,_N,ZH,_N,eJ,_N,iM,_N,Zx,_N,sJ,_N,SL,_N,dI,_N,jH,_N,$j,_N,Kv,_N,$x,_N,LF,_N,BD,_N,Og,_N,tm,_N,NF,_N,hE,_N,pM,_N,kj,_N,ig,_N,tu,_N,ug,_N,fg,_N,yK,_N,lJ,_N,dJ,_N,YI,_N,eL,_N,oE,_N,vq,_N,wj,_N,MH,_N,hM,_N,us,_N,tD,_N,jM,_N,qM,_N,wF,_N,au,_N,CF,_N,iE,_N,kF,_N,Zu,_N,Tu,_N,Ag,_N,AF,_N,zF,_N,Xs,_N,um,_N,tw,_N,QL,_N,sF,_N,HE,_N,vF,_N,ID,_N,OJ,_N,bL,_N,Lj,_N,KF,_N,LI,_N,pB,_N,xH,_N,dL,_N,Vf,_N,pI,_N,nD,_N,hD,_N,rF,_N,YE,_N,uF,_N,ps,_N,aL,_N,$u,_N,PL,_N,ZE,_N,yH,_N,ok,_N,oM,_N,DJ,_N,mD,_N,Qs,_N,vj,_N,yw,_N,pF,_N,Xf,_N,lM,_N,Xr,_N,Jn,_N,aI,_N,vg,_N,mJ,_N,WI,_N,hK,_N,YD,_N,Xt,_N,Yn,_N,ol,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N,_N];var df=[$N,$N,Nv,$N,oL,$N,wB,$N,xB,$N,QI,$N,nl,$N,RA,$N,aC,$N,lL,$N,Mm,$N,JI,$N,LA,$N,YB,$N,kL,$N,yI,$N,yB,$N,oD,$N,Ou,$N,BJ,$N,XD,$N,xp,$N,kI,$N,TI,$N,MA,$N,_E,$N,jI,$N,PA,$N,hI,$N,RI,$N,PJ,$N,TA,$N,CD,$N,OA,$N,Np,$N,vD,$N,UI,$N,cg,$N,nL,$N,OI,$N,tI,$N,II,$N,vI,$N,$r,$N,mL,$N,Wo,$N,xI,$N,ME,$N,UA,$N,GJ,$N,JD,$N,vB,$N,DI,$N,pL,$N,nI,$N,mI,$N,UB,$N,iI,$N,dD,$N,EI,$N,xn,$N,FI,$N,QA,$N,NA,$N,PI,$N,sI,$N,SA,$N,uI,$N,Ek,$N,GI,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N,$N];var ef=[aO,aO,$v,aO,gy,aO,aO,aO];var ff=[bO,bO,wL,bO,DL,bO,vL,bO,nv,bO,Ws,bO,TE,bO,vK,bO,tL,bO,It,bO,UE,bO,BL,bO,wA,bO,iu,bO,qI,bO,tz,bO,zH,bO,rL,bO,lt,bO,cw,bO,LD,bO,ml,bO,gF,bO,Py,bO,fF,bO,kz,bO,XK,bO,iB,bO,xL,bO,dB,bO,Ns,bO,qB,bO,jB,bO,kM,bO,ev,bO,Gt,bO,jL,bO,yt,bO,iv,bO,lw,bO,hL,bO,QE,bO,uK,bO,SI,bO,yL,bO,_s,bO,pD,bO,rI,bO,NK,bO,Is,bO,Ps,bO,NB,bO,jv,bO,Bt,bO,MI,bO,qL,bO,wD,bO,Sv,bO,YK,bO,OM,bO,rA,bO,At,bO,Zf,bO,EF,bO,lI,bO,Ju,bO,Uv,bO,BB,bO,Tv,bO,iL,bO,yA,bO,zv,bO,Xu,bO,RE,bO,mt,bO,bA,bO,cF,bO,DD,bO,$z,bO,Vt,bO,aA,bO,xK,bO,mz,bO,_v,bO,wI,bO,CL,bO,KD,bO,MK,bO,oB,bO,DK,bO,dF,bO,dw,bO,fI,bO,yn,bO,sL,bO,gI,bO,_D,bO,eC,bO,BI,bO,FK,bO,HI,bO,CI,bO,uL,bO,NI,bO,VD,bO,CK,bO,NH,bO,dv,bO,AL,bO,jt,bO,xD,bO,zL,bO,$K,bO,kt,bO,QK,bO,gL,bO,DB,bO,Jx,bO,su,bO,fz,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO,bO];var gf=[cO,cO,Jp,cO];var hf=[dO,dO,_r,dO,vs,dO,Du,dO,Wr,dO,aB,dO,wt,dO,Qy,dO,bv,dO,Ry,dO,nz,dO,nw,dO,st,dO,mw,dO,Qt,dO,sB,dO,Nu,dO,oz,dO,Qx,dO,xv,dO,_z,dO,Rs,dO,Kt,dO,cz,dO,Vy,dO,BA,dO,Ex,dO,JB,dO,YJ,dO,nK,dO,EB,dO,gB,dO,AA,dO,XJ,dO,Oq,dO,ZC,dO,bu,dO,Ss,dO,ey,dO,Fx,dO,gD,dO,dK,dO,tx,dO,nu,dO,vu,dO,ZJ,dO,uu,dO,Uy,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO,dO];var jf=[eO,eO,rj,eO];var kf=[fO,fO,Iz,fO,eD,fO,Jg,fO,Hs,fO,hu,fO,QF,fO,Dz,fO,jK,fO,Kg,fO,bK,fO,Wu,fO,Mg,fO,Cx,fO,Kz,fO,Yu,fO,sy,fO,Ov,fO,xu,fO,av,fO,Dx,fO,cC,fO,bz,fO,Cz,fO,rM,fO,ly,fO,ny,fO,py,fO,Hz,fO,wx,fO,$A,fO,wn,fO,Tx,fO,eK,fO,hy,fO,Rx,fO,Rz,fO,VF,fO,Lg,fO,cD,fO,gu,fO,Au,fO,WE,fO,ut,fO,ZA,fO,WB,fO,SE,fO,St,fO,WJ,fO,yu,fO,$E,fO,EJ,fO,ty,fO,Lz,fO,Ez,fO,_B,fO,oK,fO,xx,fO,Hx,fO,ar,fO,YA,fO,zu,fO,$J,fO,FA,fO,Gs,fO,qD,fO,eF,fO,cE,fO,ou,fO,dE,fO,lK,fO,qA,fO,Pz,fO,Oz,fO,pw,fO,zJ,fO,NE,fO,ux,fO,Qz,fO,ED,fO,Mu,fO,oA,fO,dA,fO,Jz,fO,_q,fO,Ty,fO,Bu,fO,iF,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO,fO];var lf=[gO,gO,uH,gO,sH,gO,hH,gO,eH,gO,gO,gO,gO,gO,gO,gO];var mf=[hO,hO,Hk,hO,bI,hO,_H,hO,vm,hO,XI,hO,fJ,hO,$I,hO,qo,hO,hJ,hO,hO,hO,hO,hO,hO,hO,hO,hO,hO,hO,hO,hO];var nf=[iO,iO,Yo,iO,ep,iO,iO,iO];var of=[jO,jO,zM,jO,qH,jO,mH,jO,AM,jO,ww,jO,vH,jO,aF,jO,sw,jO,wg,jO,xw,jO,AJ,jO,iH,jO,ZG,jO,_G,jO,BM,jO,lH,jO,cH,jO,OE,jO,rw,jO,FJ,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO,jO];var pf=[kO,kO,_o,kO];var qf=[lO,lO,EH,lO,OH,lO,wJ,lO,pH,lO,qJ,lO,AH,lO,DH,lO,RH,lO,po,lO,PG,lO,aG,lO,CH,lO,QH,lO,kG,lO,DG,lO,rH,lO,PH,lO,zG,lO,dH,lO,bH,lO,HG,lO,BG,lO,qG,lO,FG,lO,xG,lO,vG,lO,NG,lO,LG,lO,JG,lO,SH,lO,YF,lO,eG,lO,BH,lO,iG,lO,cG,lO,gG,lO,_F,lO,oG,lO,mG,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO,lO];var rf=[mO,mO,tJ,mO,nJ,mO,mO,mO];var sf=[nO,nO,yi,nO,TH,nO,FH,nO];var tf=[oO,oO,XA,oO,Ly,oO,Ku,oO,_A,oO,MD,oO,dy,oO,cB,oO,Ax,oO,xs,oO,mv,oO,ws,oO,Ks,oO,Nw,oO,CA,oO,Hw,oO,cy,oO,gw,oO,Rw,oO,vv,oO,kx,oO,ct,oO,zt,oO,cK,oO,hF,oO,qz,oO,os,oO,Zw,oO,mK,oO,uB,oO,By,oO,Ys,oO,zB,oO,jx,oO,Yw,oO,Ny,oO,yD,oO,FD,oO,Ow,oO,RB,oO,cx,oO,Tw,oO,oy,oO,jw,oO,_J,oO,Vs,oO,qv,oO,cu,oO,rz,oO,Tt,oO,QB,oO,Rt,oO,lv,oO,_x,oO,dx,oO,bx,oO,kg,oO,yx,oO,Dv,oO,rs,oO,Zr,oO,AB,oO,Pw,oO,gv,oO,Lw,oO,hv,oO,Zs,oO,Gx,oO,Nt,oO,ix,oO,Yx,oO,qs,oO,ox,oO,$y,oO,pv,oO,lx,oO,Qw,oO,Sx,oO,LB,oO,Wx,oO,Dt,oO,$w,oO,Wt,oO,jr,oO,Kw,oO,mx,oO,vx,oO,kK,oO,Zt,oO,Uw,oO,xt,oO,SB,oO,HA,oO,Iw,oO,Ww,oO,Sw,oO,GB,oO,Lt,oO,EA,oO,Uu,oO,bB,oO,sv,oO,qy,oO,iK,oO,Us,oO,hB,oO,ZB,oO,px,oO,Ot,oO,TB,oO,by,oO,Zv,oO,XE,oO,tt,oO,Ut,oO,jF,oO,aK,oO,_w,oO,du,oO,my,oO,bw,oO,GA,oO,nx,oO,xz,oO,Ux,oO,bt,oO,fy,oO,CB,oO,Bx,oO,Yt,oO,tA,oO,Mw,oO,ew,oO,eB,oO,fx,oO,VB,oO,aw,oO,at,oO,ay,oO,sx,oO,Xx,oO,hz,oO,ss,oO,lu,oO,lB,oO,ax,oO,Vx,oO,bC,oO,az,oO,ku,oO,pA,oO,_t,oO,tB,oO,Fs,oO,Pt,oO,Mt,oO,PB,oO,VE,oO,rD,oO,vt,oO,pu,oO,uz,oO,hx,oO,Ay,oO,Xw,oO,XB,oO,Lx,oO,ex,oO,gx,oO,KB,oO,Jw,oO,zx,oO,FB,oO,$B,oO,Vw,oO,rx,oO,OB,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO,oO];var uf=[pO,pO,mr,pO,Kx,pO,mB,pO,$t,pO,nr,pO,on,pO,yv,pO,sn,pO,rn,pO,fK,pO,DA,pO,LK,pO,qn,pO,pr,pO,Zq,pO,fB,pO,Qu,pO,zs,pO,or,pO,uy,pO,Ts,pO,rr,pO,dC,pO,pK,pO,OK,pO,ZK,pO,uA,pO,Ru,pO,Nx,pO,Dl,pO,Ls,pO,BK,pO,HB,pO,pz,pO,qr,pO,Ox,pO,mu,pO,OF,pO,tK,pO,Cs,pO,wK,pO,qu,pO,WK,pO,kr,pO,Mx,pO,iz,pO,EK,pO,sr,pO,Es,pO,lr,pO,pn,pO,Lu,pO,Et,pO,TF,pO,ts,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO,pO];var vf=[qO,qO,_u,qO];var wf=[rO,rO,Lv,rO,hw,rO,yz,rO,Dq,rO,iw,rO,vz,rO,vw,rO,zz,rO,wz,rO,Sy,rO,ow,rO,wv,rO,Nm,rO,My,rO,Di,rO,qw,rO,bE,rO,FF,rO,Bq,rO,xo,rO,Mv,rO,Gv,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO,rO];var xf=[sO,sO,Tf,sO,Sf,sO,sO,sO];var yf=[tO,tO,zK,tO,JK,tO,HK,tO,SK,tO,UK,tO,AK,tO,rK,tO,sK,tO,tO,tO,tO,tO,tO,tO,tO,tO,tO,tO,tO,tO,tO,tO];var zf=[uO,uO,Jo,uO,Fo,uO,Kp,uO];var Af=[vO,vO,gq,vO,Fv,vO,Pu,vO,Xn,vO,Tz,vO,Vu,vO,Sz,vO,Vz,vO,Fu,vO,tM,vO,uM,vO,Xy,vO,Mo,vO,sM,vO,Wz,vO,Ai,vO,PE,vO,UF,vO,bF,vO,Uz,vO,Ev,vO,Xz,vO,PF,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO,vO];return{_memcmp:hN,_strlen:_M,_strcat:jN,_free:DM,_main:Uf,_testSetjmp:gN,_strncpy:iN,_memmove:aN,__GLOBAL__I_a3066:bq,_tolower:cN,_saveSetjmp:fN,_memset:$M,_malloc:CM,_memcpy:ZM,_strcasecmp:eN,_realloc:EM,_strncasecmp:dN,__GLOBAL__I_a3890:OD,__GLOBAL__I_a:xi,_strcpy:bN,__GLOBAL__I_a2204:oo,runPostSets:Rf,stackAlloc:Bf,stackSave:Cf,stackRestore:Df,setThrew:Ef,setTempRet0:Hf,setTempRet1:If,setTempRet2:Jf,setTempRet3:Kf,setTempRet4:Lf,setTempRet5:Mf,setTempRet6:Nf,setTempRet7:Of,setTempRet8:Pf,setTempRet9:Qf,dynCall_iiiiiiii:yN,dynCall_viiiii:zN,dynCall_vi:AN,dynCall_vii:BN,dynCall_iiiiiii:CN,dynCall_ii:DN,dynCall_viffff:EN,dynCall_iiiii:FN,dynCall_viiiiiffiii:GN,dynCall_iiii:HN,dynCall_viiiiid:IN,dynCall_viiiiiiii:JN,dynCall_vifff:KN,dynCall_viiiiii:LN,dynCall_viff:MN,dynCall_viiiiiii:NN,dynCall_viiiiiid:ON,dynCall_viiiiiiiii:PN,dynCall_iii:QN,dynCall_iiiiii:RN,dynCall_iiiiiiiiii:SN,dynCall_viii:TN,dynCall_v:UN,dynCall_iiiiiiiii:VN,dynCall_viif:WN,dynCall_viiii:XN}})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_viffff": invoke_viffff, "invoke_iiiii": invoke_iiiii, "invoke_viiiiiffiii": invoke_viiiiiffiii, "invoke_iiii": invoke_iiii, "invoke_viiiiid": invoke_viiiiid, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_vifff": invoke_vifff, "invoke_viiiiii": invoke_viiiiii, "invoke_viff": invoke_viff, "invoke_viiiiiii": invoke_viiiiiii, "invoke_viiiiiid": invoke_viiiiiid, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_iiiiiiiiii": invoke_iiiiiiiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiiiiiii": invoke_iiiiiiiii, "invoke_viif": invoke_viif, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_glClearColor": _glClearColor, "_sysconf": _sysconf, "_lseek": _lseek, "__scanString": __scanString, "_glGenTextures": _glGenTextures, "_fread": _fread, "_eglTerminate": _eglTerminate, "_pthread_mutex_lock": _pthread_mutex_lock, "_emscripten_run_script_string": _emscripten_run_script_string, "___cxa_end_catch": ___cxa_end_catch, "_glLinkProgram": _glLinkProgram, "_strtoull": _strtoull, "_glBindTexture": _glBindTexture, "_fflush": _fflush, "_isxdigit": _isxdigit, "_strtol": _strtol, "_glFramebufferRenderbuffer": _glFramebufferRenderbuffer, "_glGetString": _glGetString, "_fwrite": _fwrite, "_llvm_eh_exception": _llvm_eh_exception, "_fputs": _fputs, "_llvm_umul_with_overflow_i32": _llvm_umul_with_overflow_i32, "_emscripten_get_now": _emscripten_get_now, "_emscripten_set_mouseup_callback": _emscripten_set_mouseup_callback, "_eglCreateContext": _eglCreateContext, "_glCompileShader": _glCompileShader, "_isspace": _isspace, "_glDepthFunc": _glDepthFunc, "_glDeleteTextures": _glDeleteTextures, "_eglBindAPI": _eglBindAPI, "_read": _read, "_fclose": _fclose, "_glGenRenderbuffers": _glGenRenderbuffers, "_eglMakeCurrent": _eglMakeCurrent, "_glClearDepthf": _glClearDepthf, "_glClearStencil": _glClearStencil, "_strrchr": _strrchr, "_emscripten_set_keydown_callback": _emscripten_set_keydown_callback, "_strstr": _strstr, "_fsync": _fsync, "___cxa_guard_abort": ___cxa_guard_abort, "_newlocale": _newlocale, "___gxx_personality_v0": ___gxx_personality_v0, "_eglSwapInterval": _eglSwapInterval, "_pthread_cond_wait": _pthread_cond_wait, "_glUniform1f": _glUniform1f, "_fmod": _fmod, "___resumeException": ___resumeException, "_glCreateShader": _glCreateShader, "_strcmp": _strcmp, "_glUniform1i": _glUniform1i, "_glGetActiveAttrib": _glGetActiveAttrib, "_cosf": _cosf, "_vsscanf": _vsscanf, "_glDeleteRenderbuffers": _glDeleteRenderbuffers, "_fputc": _fputc, "_snprintf": _snprintf, "_glUniform2f": _glUniform2f, "__isLeapYear": __isLeapYear, "_stat": _stat, "_glGetProgramiv": _glGetProgramiv, "_glVertexAttribPointer": _glVertexAttribPointer, "__getFloat": __getFloat, "_atexit": _atexit, "_eglQueryString": _eglQueryString, "___cxa_free_exception": ___cxa_free_exception, "_glGetUniformLocation": _glGetUniformLocation, "_close": _close, "_feof": _feof, "_glBindFramebuffer": _glBindFramebuffer, "_asprintf": _asprintf, "_glCullFace": _glCullFace, "___cxa_rethrow": ___cxa_rethrow, "___setErrNo": ___setErrNo, "_open": _open, "_emscripten_set_keyup_callback": _emscripten_set_keyup_callback, "_eglWaitClient": _eglWaitClient, "_access": _access, "_eglGetError": _eglGetError, "_ftell": _ftell, "_glDeleteProgram": _glDeleteProgram, "_exit": _exit, "_sprintf": _sprintf, "_glRenderbufferStorage": _glRenderbufferStorage, "___ctype_b_loc": ___ctype_b_loc, "_glutDestroyWindow": _glutDestroyWindow, "_freelocale": _freelocale, "_glAttachShader": _glAttachShader, "_emscripten_set_main_loop": _emscripten_set_main_loop, "_catgets": _catgets, "_emscripten_set_mousemove_callback": _emscripten_set_mousemove_callback, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_browser_info": _browser_info, "___cxa_is_number_type": ___cxa_is_number_type, "__arraySum": __arraySum, "___cxa_does_inherit": ___cxa_does_inherit, "_glUniform3f": _glUniform3f, "___cxa_guard_acquire": ___cxa_guard_acquire, "_glBindAttribLocation": _glBindAttribLocation, "_emscripten_get_canvas_size": _emscripten_get_canvas_size, "_glDrawElements": _glDrawElements, "_glColorMask": _glColorMask, "_sinf": _sinf, "_printf": _printf, "_eglInitialize": _eglInitialize, "_recv": _recv, "__parseInt64": __parseInt64, "__ZSt18uncaught_exceptionv": __ZSt18uncaught_exceptionv, "_glBufferSubData": _glBufferSubData, "___cxa_call_unexpected": ___cxa_call_unexpected, "_eglGetConfigs": _eglGetConfigs, "_copysign": _copysign, "_memchr": _memchr, "_glGetShaderiv": _glGetShaderiv, "__exit": __exit, "_eglWaitNative": _eglWaitNative, "_eglQuerySurface": _eglQuerySurface, "_strncmp": _strncmp, "_pread": _pread, "_floorf": _floorf, "___cxa_throw": ___cxa_throw, "_glPolygonOffset": _glPolygonOffset, "_glUseProgram": _glUseProgram, "_send": _send, "_glShaderSource": _glShaderSource, "_glBindRenderbuffer": _glBindRenderbuffer, "_glCompressedTexImage2D": _glCompressedTexImage2D, "_fopen": _fopen, "_glDeleteFramebuffers": _glDeleteFramebuffers, "_glDrawArrays": _glDrawArrays, "_glIsProgram": _glIsProgram, "_glTexSubImage2D": _glTexSubImage2D, "_sqrtf": _sqrtf, "_glDisable": _glDisable, "_puts": _puts, "_glClear": _glClear, "_qsort": _qsort, "_glBlendFuncSeparate": _glBlendFuncSeparate, "_eglDestroyContext": _eglDestroyContext, "_glActiveTexture": _glActiveTexture, "_glEnableVertexAttribArray": _glEnableVertexAttribArray, "_glBindBuffer": _glBindBuffer, "___cxa_find_matching_catch": ___cxa_find_matching_catch, "_glUniform4f": _glUniform4f, "_glFramebufferTexture2D": _glFramebufferTexture2D, "_glUniformMatrix2fv": _glUniformMatrix2fv, "_eglCreateWindowSurface": _eglCreateWindowSurface, "_glUniformMatrix3fv": _glUniformMatrix3fv, "_glutCreateWindow": _glutCreateWindow, "_glBufferData": _glBufferData, "__formatString": __formatString, "_pthread_cond_broadcast": _pthread_cond_broadcast, "__ZSt9terminatev": __ZSt9terminatev, "_atoi": _atoi, "_isascii": _isascii, "_pthread_mutex_unlock": _pthread_mutex_unlock, "_putchar": _putchar, "_glGenFramebuffers": _glGenFramebuffers, "_llvm_pow_f64": _llvm_pow_f64, "_sbrk": _sbrk, "_tanf": _tanf, "_fgetc": _fgetc, "___errno_location": ___errno_location, "_strerror": _strerror, "_glGetIntegerv": _glGetIntegerv, "_catclose": _catclose, "_llvm_lifetime_start": _llvm_lifetime_start, "_glTexParameteri": _glTexParameteri, "__parseInt": __parseInt, "___cxa_guard_release": ___cxa_guard_release, "_ungetc": _ungetc, "_fprintf": _fprintf, "_uselocale": _uselocale, "_vsnprintf": _vsnprintf, "_glDisableVertexAttribArray": _glDisableVertexAttribArray, "_sscanf": _sscanf, "_glTexImage2D": _glTexImage2D, "_glGetProgramInfoLog": _glGetProgramInfoLog, "_glStencilMask": _glStencilMask, "_glBlendEquation": _glBlendEquation, "_glGetShaderInfoLog": _glGetShaderInfoLog, "_abort": _abort, "_glIsShader": _glIsShader, "_emscripten_set_wheel_callback": _emscripten_set_wheel_callback, "_isdigit": _isdigit, "_strtoll": _strtoll, "__addDays": __addDays, "_glEnable": _glEnable, "_atanf": _atanf, "_fabs": _fabs, "__reallyNegative": __reallyNegative, "_write": _write, "_fseek": _fseek, "_glBlendEquationSeparate": _glBlendEquationSeparate, "_glGenBuffers": _glGenBuffers, "_glGetAttribLocation": _glGetAttribLocation, "___cxa_allocate_exception": ___cxa_allocate_exception, "_glDeleteShader": _glDeleteShader, "_glBlendFunc": _glBlendFunc, "_glCreateProgram": _glCreateProgram, "_strchr": _strchr, "_set_window_resize_handler": _set_window_resize_handler, "_longjmp": _longjmp, "_vasprintf": _vasprintf, "_glViewport": _glViewport, "_emscripten_set_mousedown_callback": _emscripten_set_mousedown_callback, "_catopen": _catopen, "___ctype_toupper_loc": ___ctype_toupper_loc, "___cxa_begin_catch": ___cxa_begin_catch, "___ctype_tolower_loc": ___ctype_tolower_loc, "_glDepthMask": _glDepthMask, "_llvm_va_end": _llvm_va_end, "_eglChooseConfig": _eglChooseConfig, "_glUniformMatrix4fv": _glUniformMatrix4fv, "_glGetActiveUniform": _glGetActiveUniform, "_pwrite": _pwrite, "_strerror_r": _strerror_r, "_emscripten_set_click_callback": _emscripten_set_click_callback, "_glFrontFace": _glFrontFace, "_glDeleteBuffers": _glDeleteBuffers, "_eglGetDisplay": _eglGetDisplay, "_emscripten_set_canvas_size": _emscripten_set_canvas_size, "_atan2": _atan2, "_glutInitDisplayMode": _glutInitDisplayMode, "_glGetBooleanv": _glGetBooleanv, "_strftime": _strftime, "_llvm_bswap_i16": _llvm_bswap_i16, "_time": _time, "_glValidateProgram": _glValidateProgram, "_emscripten_set_dblclick_callback": _emscripten_set_dblclick_callback, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZTVN10__cxxabiv117__class_type_infoE": __ZTVN10__cxxabiv117__class_type_infoE, "___fsmu8": ___fsmu8, "_stdout": _stdout, "___dso_handle": ___dso_handle, "_stdin": _stdin, "__ZTVN10__cxxabiv120__si_class_type_infoE": __ZTVN10__cxxabiv120__si_class_type_infoE, "_stderr": _stderr }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _strcat = Module["_strcat"] = asm["_strcat"];
var _free = Module["_free"] = asm["_free"];
var _main = Module["_main"] = asm["_main"];
var _testSetjmp = Module["_testSetjmp"] = asm["_testSetjmp"];
var _strncpy = Module["_strncpy"] = asm["_strncpy"];
var _memmove = Module["_memmove"] = asm["_memmove"];
var __GLOBAL__I_a3066 = Module["__GLOBAL__I_a3066"] = asm["__GLOBAL__I_a3066"];
var _tolower = Module["_tolower"] = asm["_tolower"];
var _saveSetjmp = Module["_saveSetjmp"] = asm["_saveSetjmp"];
var _memset = Module["_memset"] = asm["_memset"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _strcasecmp = Module["_strcasecmp"] = asm["_strcasecmp"];
var _realloc = Module["_realloc"] = asm["_realloc"];
var _strncasecmp = Module["_strncasecmp"] = asm["_strncasecmp"];
var __GLOBAL__I_a3890 = Module["__GLOBAL__I_a3890"] = asm["__GLOBAL__I_a3890"];
var __GLOBAL__I_a = Module["__GLOBAL__I_a"] = asm["__GLOBAL__I_a"];
var _strcpy = Module["_strcpy"] = asm["_strcpy"];
var __GLOBAL__I_a2204 = Module["__GLOBAL__I_a2204"] = asm["__GLOBAL__I_a2204"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viffff = Module["dynCall_viffff"] = asm["dynCall_viffff"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiiffiii = Module["dynCall_viiiiiffiii"] = asm["dynCall_viiiiiffiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiid = Module["dynCall_viiiiid"] = asm["dynCall_viiiiid"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_vifff = Module["dynCall_vifff"] = asm["dynCall_vifff"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_viiiiiid = Module["dynCall_viiiiiid"] = asm["dynCall_viiiiiid"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = asm["dynCall_iiiiiiiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = asm["dynCall_iiiiiiiii"];
var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
Runtime.stackAlloc = function(size) { return asm['stackAlloc'](size) };
Runtime.stackSave = function() { return asm['stackSave']() };
Runtime.stackRestore = function(top) { asm['stackRestore'](top) };
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
// === Auto-generated postamble setup entry stuff ===
if (memoryInitializer) {
  function applyData(data) {
    HEAPU8.set(data, STATIC_BASE);
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    applyData(Module['readBinary'](memoryInitializer));
  } else {
    addRunDependency('memory initializer');
    Browser.asyncLoad(memoryInitializer, function(data) {
      applyData(data);
      removeRunDependency('memory initializer');
    }, function(data) {
      throw 'could not load memory initializer ' + memoryInitializer;
    });
  }
}
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;
var initialStackTop;
var preloadStartTime = null;
var calledMain = false;
dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun'] && shouldRunNow) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}
Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');
  args = args || [];
  if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
    Module.printErr('preload time: ' + (Date.now() - preloadStartTime) + ' ms');
  }
  ensureInitRuntime();
  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);
  initialStackTop = STACKTOP;
  try {
    var ret = Module['_main'](argc, argv, 0);
    // if we're not running an evented main loop, it's time to exit
    if (!Module['noExitRuntime']) {
      exit(ret);
    }
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}
function run(args) {
  args = args || Module['arguments'];
  if (preloadStartTime === null) preloadStartTime = Date.now();
  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }
  preRun();
  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame
  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;
    ensureInitRuntime();
    preMain();
    if (Module['_main'] && shouldRunNow) {
      Module['callMain'](args);
    }
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      if (!ABORT) doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = Module.run = run;
function exit(status) {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;
  // exit the runtime
  exitRuntime();
  // TODO We should handle this differently based on environment.
  // In the browser, the best we can do is throw an exception
  // to halt execution, but in node we could process.exit and
  // I'd imagine SM shell would have something equivalent.
  // This would let us set a proper exit status (which
  // would be great for checking test exit statuses).
  // https://github.com/kripken/emscripten/issues/1371
  // throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;
function abort(text) {
  if (text) {
    Module.print(text);
    Module.printErr(text);
  }
  ABORT = true;
  EXITSTATUS = 1;
  throw 'abort() at ' + stackTrace();
}
Module['abort'] = Module.abort = abort;
// {{PRE_RUN_ADDITIONS}}
if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}
// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}
run();
// {{POST_RUN_ADDITIONS}}
// {{MODULE_ADDITIONS}}