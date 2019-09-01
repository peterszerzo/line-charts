(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Area$Data = F3(
	function (nora, noah, nina) {
		return {nina: nina, noah: noah, nora: nora};
	});
var author$project$Area$RecieveData = function (a) {
	return {$: 'RecieveData', a: a};
};
var author$project$Area$Datum = F2(
	function (time, velocity) {
		return {time: time, velocity: velocity};
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$mul = _Basics_mul;
var elm$time$Time$Jan = {$: 'Jan'};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$utc = A2(elm$time$Time$Zone, 0, _List_Nil);
var justinmimbs$time_extra$Time$Extra$Hour = {$: 'Hour'};
var justinmimbs$time_extra$Time$Extra$Parts = F7(
	function (year, month, day, hour, minute, second, millisecond) {
		return {day: day, hour: hour, millisecond: millisecond, minute: minute, month: month, second: second, year: year};
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var justinmimbs$date$Date$Days = {$: 'Days'};
var justinmimbs$date$Date$Months = {$: 'Months'};
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var elm$core$Basics$modBy = _Basics_modBy;
var elm$core$Basics$sub = _Basics_sub;
var justinmimbs$date$Date$RD = function (a) {
	return {$: 'RD', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Basics$or = _Basics_or;
var justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2(elm$core$Basics$modBy, 4, y)) && A2(elm$core$Basics$modBy, 100, y)) || (!A2(elm$core$Basics$modBy, 400, y));
};
var justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m.$) {
			case 'Jan':
				return 0;
			case 'Feb':
				return 31;
			case 'Mar':
				return 59 + leapDays;
			case 'Apr':
				return 90 + leapDays;
			case 'May':
				return 120 + leapDays;
			case 'Jun':
				return 151 + leapDays;
			case 'Jul':
				return 181 + leapDays;
			case 'Aug':
				return 212 + leapDays;
			case 'Sep':
				return 243 + leapDays;
			case 'Oct':
				return 273 + leapDays;
			case 'Nov':
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$toFloat = _Basics_toFloat;
var justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return elm$core$Basics$floor(a / b);
	});
var justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2(justinmimbs$date$Date$floorDiv, y, 4) - A2(justinmimbs$date$Date$floorDiv, y, 100)) + A2(justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$time$Time$Apr = {$: 'Apr'};
var elm$time$Time$Aug = {$: 'Aug'};
var elm$time$Time$Dec = {$: 'Dec'};
var elm$time$Time$Feb = {$: 'Feb'};
var elm$time$Time$Jul = {$: 'Jul'};
var elm$time$Time$Jun = {$: 'Jun'};
var elm$time$Time$Mar = {$: 'Mar'};
var elm$time$Time$May = {$: 'May'};
var elm$time$Time$Nov = {$: 'Nov'};
var elm$time$Time$Oct = {$: 'Oct'};
var elm$time$Time$Sep = {$: 'Sep'};
var justinmimbs$date$Date$numberToMonth = function (mn) {
	var _n0 = A2(elm$core$Basics$max, 1, mn);
	switch (_n0) {
		case 1:
			return elm$time$Time$Jan;
		case 2:
			return elm$time$Time$Feb;
		case 3:
			return elm$time$Time$Mar;
		case 4:
			return elm$time$Time$Apr;
		case 5:
			return elm$time$Time$May;
		case 6:
			return elm$time$Time$Jun;
		case 7:
			return elm$time$Time$Jul;
		case 8:
			return elm$time$Time$Aug;
		case 9:
			return elm$time$Time$Sep;
		case 10:
			return elm$time$Time$Oct;
		case 11:
			return elm$time$Time$Nov;
		default:
			return elm$time$Time$Dec;
	}
};
var justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2(justinmimbs$date$Date$daysInMonth, y, m);
			var mn = justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {day: d, month: m, year: y};
			}
		}
	});
var justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2(justinmimbs$date$Date$floorDiv, a, b),
			A2(elm$core$Basics$modBy, b, a));
	});
var justinmimbs$date$Date$year = function (_n0) {
	var rd = _n0.a;
	var _n1 = A2(justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _n1.a;
	var r400 = _n1.b;
	var _n2 = A2(justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _n2.a;
	var r100 = _n2.b;
	var _n3 = A2(justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _n3.a;
	var r4 = _n3.b;
	var _n4 = A2(justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _n4.a;
	var r1 = _n4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var justinmimbs$date$Date$toOrdinalDate = function (_n0) {
	var rd = _n0.a;
	var y = justinmimbs$date$Date$year(
		justinmimbs$date$Date$RD(rd));
	return {
		ordinalDay: rd - justinmimbs$date$Date$daysBeforeYear(y),
		year: y
	};
};
var justinmimbs$date$Date$toCalendarDate = function (_n0) {
	var rd = _n0.a;
	var date = justinmimbs$date$Date$toOrdinalDate(
		justinmimbs$date$Date$RD(rd));
	return A3(justinmimbs$date$Date$toCalendarDateHelp, date.year, elm$time$Time$Jan, date.ordinalDay);
};
var justinmimbs$date$Date$add = F3(
	function (unit, n, _n0) {
		var rd = _n0.a;
		switch (unit.$) {
			case 'Years':
				return A3(
					justinmimbs$date$Date$add,
					justinmimbs$date$Date$Months,
					12 * n,
					justinmimbs$date$Date$RD(rd));
			case 'Months':
				var date = justinmimbs$date$Date$toCalendarDate(
					justinmimbs$date$Date$RD(rd));
				var wholeMonths = ((12 * (date.year - 1)) + (justinmimbs$date$Date$monthToNumber(date.month) - 1)) + n;
				var m = justinmimbs$date$Date$numberToMonth(
					A2(elm$core$Basics$modBy, 12, wholeMonths) + 1);
				var y = A2(justinmimbs$date$Date$floorDiv, wholeMonths, 12) + 1;
				return justinmimbs$date$Date$RD(
					(justinmimbs$date$Date$daysBeforeYear(y) + A2(justinmimbs$date$Date$daysBeforeMonth, y, m)) + A2(
						elm$core$Basics$min,
						date.day,
						A2(justinmimbs$date$Date$daysInMonth, y, m)));
			case 'Weeks':
				return justinmimbs$date$Date$RD(rd + (7 * n));
			default:
				return justinmimbs$date$Date$RD(rd + n);
		}
	});
var elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return elm$core$Basics$floor(numerator / denominator);
	});
var elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var elm$time$Time$toAdjustedMinutes = F2(
	function (_n0, time) {
		var defaultOffset = _n0.a;
		var eras = _n0.b;
		return A3(
			elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				elm$time$Time$flooredDiv,
				elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2(elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var elm$time$Time$toDay = F2(
	function (zone, time) {
		return elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _n0 = elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_n0) {
			case 1:
				return elm$time$Time$Jan;
			case 2:
				return elm$time$Time$Feb;
			case 3:
				return elm$time$Time$Mar;
			case 4:
				return elm$time$Time$Apr;
			case 5:
				return elm$time$Time$May;
			case 6:
				return elm$time$Time$Jun;
			case 7:
				return elm$time$Time$Jul;
			case 8:
				return elm$time$Time$Aug;
			case 9:
				return elm$time$Time$Sep;
			case 10:
				return elm$time$Time$Oct;
			case 11:
				return elm$time$Time$Nov;
			default:
				return elm$time$Time$Dec;
		}
	});
var elm$time$Time$toYear = F2(
	function (zone, time) {
		return elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return justinmimbs$date$Date$RD(
			(justinmimbs$date$Date$daysBeforeYear(y) + A2(justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
				elm$core$Basics$clamp,
				1,
				A2(justinmimbs$date$Date$daysInMonth, y, m),
				d));
	});
var justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			justinmimbs$date$Date$fromCalendarDate,
			A2(elm$time$Time$toYear, zone, posix),
			A2(elm$time$Time$toMonth, zone, posix),
			A2(elm$time$Time$toDay, zone, posix));
	});
var justinmimbs$time_extra$Time$Extra$Day = {$: 'Day'};
var justinmimbs$time_extra$Time$Extra$Millisecond = {$: 'Millisecond'};
var justinmimbs$time_extra$Time$Extra$Month = {$: 'Month'};
var justinmimbs$date$Date$toRataDie = function (_n0) {
	var rd = _n0.a;
	return rd;
};
var justinmimbs$time_extra$Time$Extra$dateToMillis = function (date) {
	var daysSinceEpoch = justinmimbs$date$Date$toRataDie(date) - 719163;
	return daysSinceEpoch * 86400000;
};
var elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			elm$core$Basics$modBy,
			24,
			A2(
				elm$time$Time$flooredDiv,
				A2(elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var elm$time$Time$toMillis = F2(
	function (_n0, time) {
		return A2(
			elm$core$Basics$modBy,
			1000,
			elm$time$Time$posixToMillis(time));
	});
var elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			elm$core$Basics$modBy,
			60,
			A2(elm$time$Time$toAdjustedMinutes, zone, time));
	});
var elm$time$Time$toSecond = F2(
	function (_n0, time) {
		return A2(
			elm$core$Basics$modBy,
			60,
			A2(
				elm$time$Time$flooredDiv,
				elm$time$Time$posixToMillis(time),
				1000));
	});
var justinmimbs$time_extra$Time$Extra$timeFromClock = F4(
	function (hour, minute, second, millisecond) {
		return (((hour * 3600000) + (minute * 60000)) + (second * 1000)) + millisecond;
	});
var justinmimbs$time_extra$Time$Extra$timeFromPosix = F2(
	function (zone, posix) {
		return A4(
			justinmimbs$time_extra$Time$Extra$timeFromClock,
			A2(elm$time$Time$toHour, zone, posix),
			A2(elm$time$Time$toMinute, zone, posix),
			A2(elm$time$Time$toSecond, zone, posix),
			A2(elm$time$Time$toMillis, zone, posix));
	});
var justinmimbs$time_extra$Time$Extra$toOffset = F2(
	function (zone, posix) {
		var millis = elm$time$Time$posixToMillis(posix);
		var localMillis = justinmimbs$time_extra$Time$Extra$dateToMillis(
			A2(justinmimbs$date$Date$fromPosix, zone, posix)) + A2(justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix);
		return ((localMillis - millis) / 60000) | 0;
	});
var justinmimbs$time_extra$Time$Extra$posixFromDateTime = F3(
	function (zone, date, time) {
		var millis = justinmimbs$time_extra$Time$Extra$dateToMillis(date) + time;
		var offset0 = A2(
			justinmimbs$time_extra$Time$Extra$toOffset,
			zone,
			elm$time$Time$millisToPosix(millis));
		var posix1 = elm$time$Time$millisToPosix(millis - (offset0 * 60000));
		var offset1 = A2(justinmimbs$time_extra$Time$Extra$toOffset, zone, posix1);
		if (_Utils_eq(offset0, offset1)) {
			return posix1;
		} else {
			var posix2 = elm$time$Time$millisToPosix(millis - (offset1 * 60000));
			var offset2 = A2(justinmimbs$time_extra$Time$Extra$toOffset, zone, posix2);
			return _Utils_eq(offset1, offset2) ? posix2 : posix1;
		}
	});
var justinmimbs$time_extra$Time$Extra$add = F4(
	function (interval, n, zone, posix) {
		add:
		while (true) {
			switch (interval.$) {
				case 'Millisecond':
					return elm$time$Time$millisToPosix(
						elm$time$Time$posixToMillis(posix) + n);
				case 'Second':
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 1000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Minute':
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 60000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Hour':
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 3600000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Day':
					return A3(
						justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							justinmimbs$date$Date$add,
							justinmimbs$date$Date$Days,
							n,
							A2(justinmimbs$date$Date$fromPosix, zone, posix)),
						A2(justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 'Month':
					return A3(
						justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							justinmimbs$date$Date$add,
							justinmimbs$date$Date$Months,
							n,
							A2(justinmimbs$date$Date$fromPosix, zone, posix)),
						A2(justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 'Year':
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Month,
						$temp$n = n * 12,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Quarter':
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Month,
						$temp$n = n * 3,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Week':
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Day,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				default:
					var weekday = interval;
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Day,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
			}
		}
	});
var justinmimbs$time_extra$Time$Extra$partsToPosix = F2(
	function (zone, _n0) {
		var year = _n0.year;
		var month = _n0.month;
		var day = _n0.day;
		var hour = _n0.hour;
		var minute = _n0.minute;
		var second = _n0.second;
		var millisecond = _n0.millisecond;
		return A3(
			justinmimbs$time_extra$Time$Extra$posixFromDateTime,
			zone,
			A3(justinmimbs$date$Date$fromCalendarDate, year, month, day),
			A4(
				justinmimbs$time_extra$Time$Extra$timeFromClock,
				A3(elm$core$Basics$clamp, 0, 23, hour),
				A3(elm$core$Basics$clamp, 0, 59, minute),
				A3(elm$core$Basics$clamp, 0, 59, second),
				A3(elm$core$Basics$clamp, 0, 999, millisecond)));
	});
var author$project$Area$indexToTime = function (index) {
	return A4(
		justinmimbs$time_extra$Time$Extra$add,
		justinmimbs$time_extra$Time$Extra$Hour,
		3 * index,
		elm$time$Time$utc,
		A2(
			justinmimbs$time_extra$Time$Extra$partsToPosix,
			elm$time$Time$utc,
			A7(justinmimbs$time_extra$Time$Extra$Parts, 2000, elm$time$Time$Jan, 1, 0, 0, 0, 0)));
};
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var author$project$Area$toData = function (numbers) {
	var toDatum = F2(
		function (index, velocity) {
			return A2(
				author$project$Area$Datum,
				author$project$Area$indexToTime(index),
				velocity);
		});
	return A2(elm$core$List$indexedMap, toDatum, numbers);
};
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n1 = genA(seed0);
				var a = _n1.a;
				var seed1 = _n1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$random$Random$addOne = function (value) {
	return _Utils_Tuple2(1, value);
};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$float = F2(
	function (a, b) {
		return elm$random$Random$Generator(
			function (seed0) {
				var seed1 = elm$random$Random$next(seed0);
				var range = elm$core$Basics$abs(b - a);
				var n1 = elm$random$Random$peel(seed1);
				var n0 = elm$random$Random$peel(seed0);
				var lo = (134217727 & n1) * 1.0;
				var hi = (67108863 & n0) * 1.0;
				var val = ((hi * 1.34217728e8) + lo) / 9.007199254740992e15;
				var scaled = (val * range) + a;
				return _Utils_Tuple2(
					scaled,
					elm$random$Random$next(seed1));
			});
	});
var elm$random$Random$getByWeight = F3(
	function (_n0, others, countdown) {
		getByWeight:
		while (true) {
			var weight = _n0.a;
			var value = _n0.b;
			if (!others.b) {
				return value;
			} else {
				var second = others.a;
				var otherOthers = others.b;
				if (_Utils_cmp(
					countdown,
					elm$core$Basics$abs(weight)) < 1) {
					return value;
				} else {
					var $temp$_n0 = second,
						$temp$others = otherOthers,
						$temp$countdown = countdown - elm$core$Basics$abs(weight);
					_n0 = $temp$_n0;
					others = $temp$others;
					countdown = $temp$countdown;
					continue getByWeight;
				}
			}
		}
	});
var elm$random$Random$weighted = F2(
	function (first, others) {
		var normalize = function (_n0) {
			var weight = _n0.a;
			return elm$core$Basics$abs(weight);
		};
		var total = normalize(first) + elm$core$List$sum(
			A2(elm$core$List$map, normalize, others));
		return A2(
			elm$random$Random$map,
			A2(elm$random$Random$getByWeight, first, others),
			A2(elm$random$Random$float, 0, total));
	});
var elm$random$Random$uniform = F2(
	function (value, valueList) {
		return A2(
			elm$random$Random$weighted,
			elm$random$Random$addOne(value),
			A2(elm$core$List$map, elm$random$Random$addOne, valueList));
	});
var elm_community$random_extra$Random$Extra$bool = A2(
	elm$random$Random$uniform,
	true,
	_List_fromArray(
		[false]));
var author$project$Random$Pipeline$generate = function (f) {
	return A2(
		elm$random$Random$map,
		function (_n0) {
			return f;
		},
		elm_community$random_extra$Random$Extra$bool);
};
var elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$append = _Utils_append;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0.a;
		return elm$random$Random$Generate(
			A2(elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			elm$random$Random$Generate(
				A2(elm$random$Random$map, tagger, generator)));
	});
var author$project$Random$Pipeline$send = elm$random$Random$generate;
var elm$random$Random$map2 = F3(
	function (func, _n0, _n1) {
		var genA = _n0.a;
		var genB = _n1.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n2 = genA(seed0);
				var a = _n2.a;
				var seed1 = _n2.b;
				var _n3 = genB(seed1);
				var b = _n3.a;
				var seed2 = _n3.b;
				return _Utils_Tuple2(
					A2(func, a, b),
					seed2);
			});
	});
var author$project$Random$Pipeline$with = elm$random$Random$map2(elm$core$Basics$apR);
var elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _n0 = gen(seed);
				var value = _n0.a;
				var newSeed = _n0.b;
				var $temp$revList = A2(elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var elm$random$Random$list = F2(
	function (n, _n0) {
		var gen = _n0.a;
		return elm$random$Random$Generator(
			function (seed) {
				return A4(elm$random$Random$listHelp, _List_Nil, n, gen, seed);
			});
	});
var author$project$Area$generateData = function () {
	var genNumbers = A2(
		elm$random$Random$list,
		40,
		A2(elm$random$Random$float, 5, 20));
	var compile = F3(
		function (a, b, c) {
			return A3(
				author$project$Area$Data,
				author$project$Area$toData(a),
				author$project$Area$toData(b),
				author$project$Area$toData(c));
		});
	return A2(
		author$project$Random$Pipeline$send,
		author$project$Area$RecieveData,
		A2(
			author$project$Random$Pipeline$with,
			genNumbers,
			A2(
				author$project$Random$Pipeline$with,
				genNumbers,
				A2(
					author$project$Random$Pipeline$with,
					genNumbers,
					author$project$Random$Pipeline$generate(compile)))));
}();
var author$project$Area$init = _Utils_Tuple2(
	{
		data: A3(author$project$Area$Data, _List_Nil, _List_Nil, _List_Nil),
		hinted: _List_Nil
	},
	author$project$Area$generateData);
var author$project$Lines$Data = F6(
	function (denmark, sweden, iceland, greenland, norway, finland) {
		return {denmark: denmark, finland: finland, greenland: greenland, iceland: iceland, norway: norway, sweden: sweden};
	});
var author$project$Lines$RecieveData = function (a) {
	return {$: 'RecieveData', a: a};
};
var author$project$Lines$Datum = F2(
	function (time, rain) {
		return {rain: rain, time: time};
	});
var author$project$Lines$indexToTime = function (index) {
	return A4(
		justinmimbs$time_extra$Time$Extra$add,
		justinmimbs$time_extra$Time$Extra$Month,
		index,
		elm$time$Time$utc,
		A2(
			justinmimbs$time_extra$Time$Extra$partsToPosix,
			elm$time$Time$utc,
			A7(justinmimbs$time_extra$Time$Extra$Parts, 2000, elm$time$Time$Jan, 1, 0, 0, 0, 0)));
};
var author$project$Lines$toData = function (numbers) {
	var toDatum = F2(
		function (index, rain) {
			return A2(
				author$project$Lines$Datum,
				author$project$Lines$indexToTime(index),
				rain);
		});
	return A2(elm$core$List$indexedMap, toDatum, numbers);
};
var author$project$Lines$generateData = function () {
	var genNumbers = F2(
		function (min, max) {
			return A2(
				elm$random$Random$list,
				10,
				A2(elm$random$Random$float, min, max));
		});
	var compile = F6(
		function (a, b, c, d, e, f) {
			return A6(
				author$project$Lines$Data,
				author$project$Lines$toData(a),
				author$project$Lines$toData(b),
				author$project$Lines$toData(c),
				author$project$Lines$toData(d),
				author$project$Lines$toData(e),
				author$project$Lines$toData(f));
		});
	return A2(
		author$project$Random$Pipeline$send,
		author$project$Lines$RecieveData,
		A2(
			author$project$Random$Pipeline$with,
			A2(genNumbers, 70, 90),
			A2(
				author$project$Random$Pipeline$with,
				A2(genNumbers, 80, 100),
				A2(
					author$project$Random$Pipeline$with,
					A2(genNumbers, 40, 90),
					A2(
						author$project$Random$Pipeline$with,
						A2(genNumbers, 30, 60),
						A2(
							author$project$Random$Pipeline$with,
							A2(genNumbers, 20, 60),
							A2(
								author$project$Random$Pipeline$with,
								A2(genNumbers, 50, 90),
								author$project$Random$Pipeline$generate(compile))))))));
}();
var author$project$Lines$init = _Utils_Tuple2(
	{
		data: A6(author$project$Lines$Data, _List_Nil, _List_Nil, _List_Nil, _List_Nil, _List_Nil, _List_Nil),
		hinted: elm$core$Maybe$Nothing
	},
	author$project$Lines$generateData);
var author$project$Main$AreaMsg = function (a) {
	return {$: 'AreaMsg', a: a};
};
var author$project$Main$LinesMsg = function (a) {
	return {$: 'LinesMsg', a: a};
};
var author$project$Main$SelectionMsg = function (a) {
	return {$: 'SelectionMsg', a: a};
};
var author$project$Main$SteppedMsg = function (a) {
	return {$: 'SteppedMsg', a: a};
};
var author$project$Main$TicksMsg = function (a) {
	return {$: 'TicksMsg', a: a};
};
var elm$json$Json$Encode$null = _Json_encodeNull;
var author$project$Main$highlight = _Platform_outgoingPort(
	'highlight',
	function ($) {
		return elm$json$Json$Encode$null;
	});
var author$project$Selection$Data = F3(
	function (sanJose, sanDiego, sanFransisco) {
		return {sanDiego: sanDiego, sanFransisco: sanFransisco, sanJose: sanJose};
	});
var author$project$Selection$RecieveData = function (a) {
	return {$: 'RecieveData', a: a};
};
var author$project$Selection$Datum = F2(
	function (time, displacement) {
		return {displacement: displacement, time: time};
	});
var justinmimbs$time_extra$Time$Extra$Minute = {$: 'Minute'};
var author$project$Selection$indexToTime = function (index) {
	return A4(
		justinmimbs$time_extra$Time$Extra$add,
		justinmimbs$time_extra$Time$Extra$Minute,
		15 * index,
		elm$time$Time$utc,
		A2(
			justinmimbs$time_extra$Time$Extra$partsToPosix,
			elm$time$Time$utc,
			A7(justinmimbs$time_extra$Time$Extra$Parts, 2015, elm$time$Time$Jan, 1, 0, 0, 0, 0)));
};
var author$project$Selection$toData = function (numbers) {
	var toDatum = F2(
		function (index, displacement) {
			return A2(
				author$project$Selection$Datum,
				author$project$Selection$indexToTime(index),
				displacement);
		});
	return A2(elm$core$List$indexedMap, toDatum, numbers);
};
var author$project$Selection$generateData = function () {
	var genNumbers = F2(
		function (min, max) {
			return A2(
				elm$random$Random$list,
				201,
				A2(elm$random$Random$float, min, max));
		});
	var compile = F3(
		function (a, b, c) {
			return A3(
				author$project$Selection$Data,
				author$project$Selection$toData(a),
				author$project$Selection$toData(b),
				author$project$Selection$toData(c));
		});
	return A2(
		author$project$Random$Pipeline$send,
		author$project$Selection$RecieveData,
		A2(
			author$project$Random$Pipeline$with,
			A2(genNumbers, -8, 8),
			A2(
				author$project$Random$Pipeline$with,
				A2(genNumbers, -7, 7),
				A2(
					author$project$Random$Pipeline$with,
					A2(genNumbers, -10, 10),
					author$project$Random$Pipeline$generate(compile)))));
}();
var author$project$Selection$init = _Utils_Tuple2(
	{
		data: A3(author$project$Selection$Data, _List_Nil, _List_Nil, _List_Nil),
		dragging: false,
		hinted: elm$core$Maybe$Nothing,
		hovered: elm$core$Maybe$Nothing,
		selection: elm$core$Maybe$Nothing
	},
	author$project$Selection$generateData);
var author$project$Stepped$Data = F2(
	function (year, price) {
		return {price: price, year: year};
	});
var author$project$Stepped$initData = _List_fromArray(
	[
		A2(author$project$Stepped$Data, 1980, 0.12),
		A2(author$project$Stepped$Data, 1981, 0.14),
		A2(author$project$Stepped$Data, 1982, 0.155),
		A2(author$project$Stepped$Data, 1983, 0.16),
		A2(author$project$Stepped$Data, 1984, 0.17),
		A2(author$project$Stepped$Data, 1985, 0.17),
		A2(author$project$Stepped$Data, 1986, 0.18),
		A2(author$project$Stepped$Data, 1987, 0.18),
		A2(author$project$Stepped$Data, 1988, 0.19),
		A2(author$project$Stepped$Data, 1989, 0.2),
		A2(author$project$Stepped$Data, 1990, 0.22),
		A2(author$project$Stepped$Data, 1991, 0.24),
		A2(author$project$Stepped$Data, 1992, 0.24),
		A2(author$project$Stepped$Data, 1993, 0.25),
		A2(author$project$Stepped$Data, 1994, 0.25),
		A2(author$project$Stepped$Data, 1995, 0.25),
		A2(author$project$Stepped$Data, 1996, 0.26),
		A2(author$project$Stepped$Data, 1997, 0.26),
		A2(author$project$Stepped$Data, 1998, 0.26),
		A2(author$project$Stepped$Data, 1999, 0.26),
		A2(author$project$Stepped$Data, 2000, 0.27),
		A2(author$project$Stepped$Data, 2001, 0.27),
		A2(author$project$Stepped$Data, 2002, 0.27),
		A2(author$project$Stepped$Data, 2003, 0.28),
		A2(author$project$Stepped$Data, 2004, 0.28),
		A2(author$project$Stepped$Data, 2005, 0.3),
		A2(author$project$Stepped$Data, 2006, 0.32),
		A2(author$project$Stepped$Data, 2007, 0.34),
		A2(author$project$Stepped$Data, 2008, 0.36),
		A2(author$project$Stepped$Data, 2009, 0.39),
		A2(author$project$Stepped$Data, 2010, 0.41),
		A2(author$project$Stepped$Data, 2011, 0.46),
		A2(author$project$Stepped$Data, 2012, 0.6)
	]);
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Stepped$init = _Utils_Tuple2(
	{data: author$project$Stepped$initData, hinted: elm$core$Maybe$Nothing},
	elm$core$Platform$Cmd$none);
var author$project$Ticks$Data = F3(
	function (nora, noah, nina) {
		return {nina: nina, noah: noah, nora: nora};
	});
var author$project$Ticks$RecieveNumbers = function (a) {
	return {$: 'RecieveNumbers', a: a};
};
var elm$random$Random$map3 = F4(
	function (func, _n0, _n1, _n2) {
		var genA = _n0.a;
		var genB = _n1.a;
		var genC = _n2.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n3 = genA(seed0);
				var a = _n3.a;
				var seed1 = _n3.b;
				var _n4 = genB(seed1);
				var b = _n4.a;
				var seed2 = _n4.b;
				var _n5 = genC(seed2);
				var c = _n5.a;
				var seed3 = _n5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var author$project$Ticks$getNumbers = function () {
	var genNumbers = F2(
		function (min, max) {
			return A2(
				elm$random$Random$list,
				10,
				A2(elm$random$Random$float, min, max));
		});
	return A2(
		elm$random$Random$generate,
		author$project$Ticks$RecieveNumbers,
		A4(
			elm$random$Random$map3,
			F3(
				function (a, b, c) {
					return _Utils_Tuple3(a, b, c);
				}),
			A2(genNumbers, 9, 12),
			A2(genNumbers, 7, 10),
			A2(genNumbers, 2, 10)));
}();
var author$project$Ticks$init = _Utils_Tuple2(
	{
		data: A3(author$project$Ticks$Data, _List_Nil, _List_Nil, _List_Nil),
		hinted: elm$core$Maybe$Nothing
	},
	author$project$Ticks$getNumbers);
var elm$core$Platform$Cmd$map = _Platform_map;
var author$project$Main$init = function () {
	var _n0 = author$project$Ticks$init;
	var ticks = _n0.a;
	var cmdTicks = _n0.b;
	var _n1 = author$project$Stepped$init;
	var stepped = _n1.a;
	var cmdStepped = _n1.b;
	var _n2 = author$project$Selection$init;
	var selection = _n2.a;
	var cmdSelection = _n2.b;
	var _n3 = author$project$Lines$init;
	var lines = _n3.a;
	var cmdLines = _n3.b;
	var _n4 = author$project$Area$init;
	var area = _n4.a;
	var cmdArea = _n4.b;
	return _Utils_Tuple2(
		{area: area, focused: 0, isSourceOpen: false, lines: lines, selection: selection, stepped: stepped, ticks: ticks},
		elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2(elm$core$Platform$Cmd$map, author$project$Main$SelectionMsg, cmdSelection),
					A2(elm$core$Platform$Cmd$map, author$project$Main$AreaMsg, cmdArea),
					A2(elm$core$Platform$Cmd$map, author$project$Main$SteppedMsg, cmdStepped),
					A2(elm$core$Platform$Cmd$map, author$project$Main$TicksMsg, cmdTicks),
					A2(elm$core$Platform$Cmd$map, author$project$Main$LinesMsg, cmdLines),
					author$project$Main$highlight(_Utils_Tuple0)
				])));
}();
var author$project$Area$addCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	});
var author$project$Area$setData = F2(
	function (data, model) {
		return _Utils_update(
			model,
			{data: data});
	});
var author$project$Area$setHint = F2(
	function (hinted, model) {
		return _Utils_update(
			model,
			{hinted: hinted});
	});
var author$project$Area$update = F2(
	function (msg, model) {
		if (msg.$ === 'RecieveData') {
			var data = msg.a;
			return A2(
				author$project$Area$addCmd,
				elm$core$Platform$Cmd$none,
				A2(author$project$Area$setData, data, model));
		} else {
			var points = msg.a;
			return A2(
				author$project$Area$addCmd,
				elm$core$Platform$Cmd$none,
				A2(author$project$Area$setHint, points, model));
		}
	});
var author$project$Lines$addCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	});
var author$project$Lines$setData = F2(
	function (data, model) {
		return _Utils_update(
			model,
			{data: data});
	});
var author$project$Lines$setHint = F2(
	function (hinted, model) {
		return _Utils_update(
			model,
			{hinted: hinted});
	});
var author$project$Lines$update = F2(
	function (msg, model) {
		if (msg.$ === 'RecieveData') {
			var numbers = msg.a;
			return A2(
				author$project$Lines$addCmd,
				elm$core$Platform$Cmd$none,
				A2(author$project$Lines$setData, numbers, model));
		} else {
			var point = msg.a;
			return A2(
				author$project$Lines$addCmd,
				elm$core$Platform$Cmd$none,
				A2(author$project$Lines$setHint, point, model));
		}
	});
var elm$json$Json$Encode$bool = _Json_wrap;
var author$project$Main$setBodyScroll = _Platform_outgoingPort('setBodyScroll', elm$json$Json$Encode$bool);
var author$project$Selection$Selection = F2(
	function (xStart, xEnd) {
		return {xEnd: xEnd, xStart: xStart};
	});
var author$project$Selection$addCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	});
var author$project$Selection$getSelectionXStart = F2(
	function (hovered, model) {
		var _n0 = model.selection;
		if (_n0.$ === 'Just') {
			var selection = _n0.a;
			return selection.xStart;
		} else {
			return hovered;
		}
	});
var author$project$Selection$setData = F2(
	function (data, model) {
		return _Utils_update(
			model,
			{data: data});
	});
var author$project$Selection$setDragging = F2(
	function (dragging, model) {
		return _Utils_update(
			model,
			{dragging: dragging});
	});
var author$project$Selection$setHint = F2(
	function (hinted, model) {
		return _Utils_update(
			model,
			{hinted: hinted});
	});
var author$project$Selection$setHovered = F2(
	function (hovered, model) {
		return _Utils_update(
			model,
			{hovered: hovered});
	});
var author$project$Selection$setSelection = F2(
	function (selection, model) {
		return _Utils_update(
			model,
			{selection: selection});
	});
var author$project$Selection$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'RecieveData':
				var data = msg.a;
				return A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(author$project$Selection$setData, data, model));
			case 'Hold':
				var point = msg.a;
				return A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(
						author$project$Selection$setDragging,
						true,
						A2(author$project$Selection$setSelection, elm$core$Maybe$Nothing, model)));
			case 'Move':
				var point = msg.a;
				if (model.dragging) {
					var start = A2(author$project$Selection$getSelectionXStart, point.x, model);
					var newSelection = A2(author$project$Selection$Selection, start, point.x);
					return A2(
						author$project$Selection$addCmd,
						elm$core$Platform$Cmd$none,
						A2(
							author$project$Selection$setHovered,
							elm$core$Maybe$Just(point.x),
							A2(
								author$project$Selection$setSelection,
								elm$core$Maybe$Just(newSelection),
								model)));
				} else {
					return A2(
						author$project$Selection$addCmd,
						elm$core$Platform$Cmd$none,
						A2(
							author$project$Selection$setHovered,
							elm$core$Maybe$Just(point.x),
							model));
				}
			case 'Drop':
				var point = msg.a;
				return _Utils_eq(
					point.x,
					A2(author$project$Selection$getSelectionXStart, point.x, model)) ? A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(
						author$project$Selection$setDragging,
						false,
						A2(author$project$Selection$setSelection, elm$core$Maybe$Nothing, model))) : A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(author$project$Selection$setDragging, false, model));
			case 'LeaveChart':
				var point = msg.a;
				return A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(author$project$Selection$setHovered, elm$core$Maybe$Nothing, model));
			case 'LeaveContainer':
				var point = msg.a;
				return A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(
						author$project$Selection$setHovered,
						elm$core$Maybe$Nothing,
						A2(author$project$Selection$setDragging, false, model)));
			default:
				var datum = msg.a;
				return A2(
					author$project$Selection$addCmd,
					elm$core$Platform$Cmd$none,
					A2(author$project$Selection$setHint, datum, model));
		}
	});
var author$project$Stepped$addCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, cmd);
	});
var author$project$Stepped$setHint = F2(
	function (hinted, model) {
		return _Utils_update(
			model,
			{hinted: hinted});
	});
var author$project$Stepped$update = F2(
	function (msg, model) {
		var point = msg.a;
		return A2(
			author$project$Stepped$addCmd,
			elm$core$Platform$Cmd$none,
			A2(author$project$Stepped$setHint, point, model));
	});
var author$project$Ticks$addCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	});
var author$project$LineChart$Coordinate$Point = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var author$project$Ticks$toData = function (numbers) {
	return A2(
		elm$core$List$indexedMap,
		function (i) {
			return author$project$LineChart$Coordinate$Point(i);
		},
		numbers);
};
var author$project$Ticks$setData = F2(
	function (_n0, model) {
		var n1 = _n0.a;
		var n2 = _n0.b;
		var n3 = _n0.c;
		return _Utils_update(
			model,
			{
				data: A3(
					author$project$Ticks$Data,
					author$project$Ticks$toData(n1),
					author$project$Ticks$toData(n2),
					author$project$Ticks$toData(n3))
			});
	});
var author$project$Ticks$setHint = F2(
	function (hinted, model) {
		return _Utils_update(
			model,
			{hinted: hinted});
	});
var author$project$Ticks$update = F2(
	function (msg, model) {
		if (msg.$ === 'RecieveNumbers') {
			var numbers = msg.a;
			return A2(
				author$project$Ticks$addCmd,
				elm$core$Platform$Cmd$none,
				A2(author$project$Ticks$setData, numbers, model));
		} else {
			var point = msg.a;
			return A2(
				author$project$Ticks$addCmd,
				elm$core$Platform$Cmd$none,
				A2(author$project$Ticks$setHint, point, model));
		}
	});
var elm$core$Basics$not = _Basics_not;
var author$project$Main$update = F2(
	function (msgArg, model) {
		switch (msgArg.$) {
			case 'Focus':
				var id = msgArg.a;
				var isSourceOpen = (model.isSourceOpen && _Utils_eq(model.focused, id)) ? false : ((!_Utils_eq(model.focused, id)) ? true : (!model.isSourceOpen));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focused: id, isSourceOpen: isSourceOpen}),
					author$project$Main$setBodyScroll(isSourceOpen));
			case 'CloseSource':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isSourceOpen: false}),
					author$project$Main$setBodyScroll(false));
			case 'SelectionMsg':
				var msg = msgArg.a;
				var _n1 = A2(author$project$Selection$update, msg, model.selection);
				var selection = _n1.a;
				var cmd = _n1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{selection: selection}),
					A2(elm$core$Platform$Cmd$map, author$project$Main$SelectionMsg, cmd));
			case 'AreaMsg':
				var msg = msgArg.a;
				var _n2 = A2(author$project$Area$update, msg, model.area);
				var area = _n2.a;
				var cmd = _n2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{area: area}),
					A2(elm$core$Platform$Cmd$map, author$project$Main$AreaMsg, cmd));
			case 'SteppedMsg':
				var msg = msgArg.a;
				var _n3 = A2(author$project$Stepped$update, msg, model.stepped);
				var stepped = _n3.a;
				var cmd = _n3.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{stepped: stepped}),
					A2(elm$core$Platform$Cmd$map, author$project$Main$SteppedMsg, cmd));
			case 'TicksMsg':
				var msg = msgArg.a;
				var _n4 = A2(author$project$Ticks$update, msg, model.ticks);
				var ticks = _n4.a;
				var cmd = _n4.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ticks: ticks}),
					A2(elm$core$Platform$Cmd$map, author$project$Main$TicksMsg, cmd));
			default:
				var msg = msgArg.a;
				var _n5 = A2(author$project$Lines$update, msg, model.lines);
				var lines = _n5.a;
				var cmd = _n5.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{lines: lines}),
					A2(elm$core$Platform$Cmd$map, author$project$Main$LinesMsg, cmd));
		}
	});
var author$project$Area$Hint = function (a) {
	return {$: 'Hint', a: a};
};
var author$project$LineChart$Container$Margin = F4(
	function (top, right, bottom, left) {
		return {bottom: bottom, left: left, right: right, top: top};
	});
var author$project$Internal$Container$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Container$custom = author$project$Internal$Container$Config;
var author$project$LineChart$Container$custom = author$project$Internal$Container$custom;
var author$project$Internal$Container$Relative = {$: 'Relative'};
var author$project$Internal$Container$relative = author$project$Internal$Container$Relative;
var author$project$LineChart$Container$relative = author$project$Internal$Container$relative;
var author$project$Area$containerConfig = author$project$LineChart$Container$custom(
	{
		attributesHtml: _List_Nil,
		attributesSvg: _List_Nil,
		id: 'line-chart-area',
		margin: A4(author$project$LineChart$Container$Margin, 30, 100, 30, 70),
		size: author$project$LineChart$Container$relative
	});
var ryannhg$date_format$DateFormat$DayOfMonthSuffix = {$: 'DayOfMonthSuffix'};
var ryannhg$date_format$DateFormat$dayOfMonthSuffix = ryannhg$date_format$DateFormat$DayOfMonthSuffix;
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			elm$core$String$slice,
			-n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$toLower = _String_toLower;
var elm$core$String$toUpper = _String_toUpper;
var elm$time$Time$Fri = {$: 'Fri'};
var elm$time$Time$Mon = {$: 'Mon'};
var elm$time$Time$Sat = {$: 'Sat'};
var elm$time$Time$Sun = {$: 'Sun'};
var elm$time$Time$Thu = {$: 'Thu'};
var elm$time$Time$Tue = {$: 'Tue'};
var elm$time$Time$Wed = {$: 'Wed'};
var elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _n0 = A2(
			elm$core$Basics$modBy,
			7,
			A2(
				elm$time$Time$flooredDiv,
				A2(elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_n0) {
			case 0:
				return elm$time$Time$Thu;
			case 1:
				return elm$time$Time$Fri;
			case 2:
				return elm$time$Time$Sat;
			case 3:
				return elm$time$Time$Sun;
			case 4:
				return elm$time$Time$Mon;
			case 5:
				return elm$time$Time$Tue;
			default:
				return elm$time$Time$Wed;
		}
	});
var ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.toAmPm(
			A2(elm$time$Time$toHour, zone, posix));
	});
var ryannhg$date_format$DateFormat$dayOfMonth = elm$time$Time$toDay;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var ryannhg$date_format$DateFormat$days = _List_fromArray(
	[elm$time$Time$Sun, elm$time$Time$Mon, elm$time$Time$Tue, elm$time$Time$Wed, elm$time$Time$Thu, elm$time$Time$Fri, elm$time$Time$Sat]);
var ryannhg$date_format$DateFormat$dayOfWeek = F2(
	function (zone, posix) {
		return function (_n1) {
			var i = _n1.a;
			return i;
		}(
			A2(
				elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, elm$time$Time$Sun),
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (_n0) {
							var day = _n0.b;
							return _Utils_eq(
								day,
								A2(elm$time$Time$toWeekday, zone, posix));
						},
						A2(
							elm$core$List$indexedMap,
							F2(
								function (i, day) {
									return _Utils_Tuple2(i, day);
								}),
							ryannhg$date_format$DateFormat$days)))));
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
	return A2(elm$core$Basics$modBy, 4, year_) ? false : (A2(elm$core$Basics$modBy, 100, year_) ? true : (A2(elm$core$Basics$modBy, 400, year_) ? false : true));
};
var ryannhg$date_format$DateFormat$daysInMonth = F2(
	function (year_, month) {
		switch (month.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var ryannhg$date_format$DateFormat$months = _List_fromArray(
	[elm$time$Time$Jan, elm$time$Time$Feb, elm$time$Time$Mar, elm$time$Time$Apr, elm$time$Time$May, elm$time$Time$Jun, elm$time$Time$Jul, elm$time$Time$Aug, elm$time$Time$Sep, elm$time$Time$Oct, elm$time$Time$Nov, elm$time$Time$Dec]);
var ryannhg$date_format$DateFormat$monthPair = F2(
	function (zone, posix) {
		return A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, elm$time$Time$Jan),
			elm$core$List$head(
				A2(
					elm$core$List$filter,
					function (_n0) {
						var i = _n0.a;
						var m = _n0.b;
						return _Utils_eq(
							m,
							A2(elm$time$Time$toMonth, zone, posix));
					},
					A2(
						elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						ryannhg$date_format$DateFormat$months))));
	});
var ryannhg$date_format$DateFormat$monthNumber_ = F2(
	function (zone, posix) {
		return 1 + function (_n0) {
			var i = _n0.a;
			var m = _n0.b;
			return i;
		}(
			A2(ryannhg$date_format$DateFormat$monthPair, zone, posix));
	});
var ryannhg$date_format$DateFormat$dayOfYear = F2(
	function (zone, posix) {
		var monthsBeforeThisOne = A2(
			elm$core$List$take,
			A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix) - 1,
			ryannhg$date_format$DateFormat$months);
		var daysBeforeThisMonth = elm$core$List$sum(
			A2(
				elm$core$List$map,
				ryannhg$date_format$DateFormat$daysInMonth(
					A2(elm$time$Time$toYear, zone, posix)),
				monthsBeforeThisOne));
		return daysBeforeThisMonth + A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix);
	});
var ryannhg$date_format$DateFormat$quarter = F2(
	function (zone, posix) {
		return (A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix) / 4) | 0;
	});
var ryannhg$date_format$DateFormat$toFixedLength = F2(
	function (totalChars, num) {
		var numStr = elm$core$String$fromInt(num);
		var numZerosNeeded = totalChars - elm$core$String$length(numStr);
		var zeros = A2(
			elm$core$String$join,
			'',
			A2(
				elm$core$List$map,
				function (_n0) {
					return '0';
				},
				A2(elm$core$List$range, 1, numZerosNeeded)));
		return _Utils_ap(zeros, numStr);
	});
var ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
var elm$core$Basics$round = _Basics_round;
var ryannhg$date_format$DateFormat$millisecondsPerYear = elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
var ryannhg$date_format$DateFormat$firstDayOfYear = F2(
	function (zone, time) {
		return elm$time$Time$millisToPosix(
			ryannhg$date_format$DateFormat$millisecondsPerYear * A2(elm$time$Time$toYear, zone, time));
	});
var ryannhg$date_format$DateFormat$weekOfYear = F2(
	function (zone, posix) {
		var firstDay = A2(ryannhg$date_format$DateFormat$firstDayOfYear, zone, posix);
		var firstDayOffset = A2(ryannhg$date_format$DateFormat$dayOfWeek, zone, firstDay);
		var daysSoFar = A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix);
		return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
	});
var ryannhg$date_format$DateFormat$year = F2(
	function (zone, time) {
		return elm$core$String$fromInt(
			A2(elm$time$Time$toYear, zone, time));
	});
var ryannhg$date_format$DateFormat$piece = F4(
	function (language, zone, posix, token) {
		switch (token.$) {
			case 'MonthNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthNameAbbreviated':
				return language.toMonthAbbreviation(
					A2(elm$time$Time$toMonth, zone, posix));
			case 'MonthNameFull':
				return language.toMonthName(
					A2(elm$time$Time$toMonth, zone, posix));
			case 'QuarterNumber':
				return elm$core$String$fromInt(
					1 + A2(ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'QuarterSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					1 + A2(ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'DayOfMonthNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfYearNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfWeekNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekNameAbbreviated':
				return language.toWeekdayAbbreviation(
					A2(elm$time$Time$toWeekday, zone, posix));
			case 'DayOfWeekNameFull':
				return language.toWeekdayName(
					A2(elm$time$Time$toWeekday, zone, posix));
			case 'WeekOfYearNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'YearNumberLastTwo':
				return A2(
					elm$core$String$right,
					2,
					A2(ryannhg$date_format$DateFormat$year, zone, posix));
			case 'YearNumber':
				return A2(ryannhg$date_format$DateFormat$year, zone, posix);
			case 'AmPmUppercase':
				return elm$core$String$toUpper(
					A3(ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'AmPmLowercase':
				return elm$core$String$toLower(
					A3(ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'HourMilitaryNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(elm$time$Time$toHour, zone, posix));
			case 'HourNumber':
				return elm$core$String$fromInt(
					ryannhg$date_format$DateFormat$toNonMilitary(
						A2(elm$time$Time$toHour, zone, posix)));
			case 'HourFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					ryannhg$date_format$DateFormat$toNonMilitary(
						A2(elm$time$Time$toHour, zone, posix)));
			case 'HourMilitaryFromOneNumber':
				return elm$core$String$fromInt(
					1 + A2(elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFromOneFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					1 + A2(elm$time$Time$toHour, zone, posix));
			case 'MinuteNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toMinute, zone, posix));
			case 'MinuteFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(elm$time$Time$toMinute, zone, posix));
			case 'SecondNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toSecond, zone, posix));
			case 'SecondFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(elm$time$Time$toSecond, zone, posix));
			case 'MillisecondNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toMillis, zone, posix));
			case 'MillisecondFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2(elm$time$Time$toMillis, zone, posix));
			default:
				var string = token.a;
				return string;
		}
	});
var ryannhg$date_format$DateFormat$formatWithLanguage = F4(
	function (language, tokens, zone, time) {
		return A2(
			elm$core$String$join,
			'',
			A2(
				elm$core$List$map,
				A3(ryannhg$date_format$DateFormat$piece, language, zone, time),
				tokens));
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var ryannhg$date_format$DateFormat$Language$Language = F6(
	function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
		return {toAmPm: toAmPm, toMonthAbbreviation: toMonthAbbreviation, toMonthName: toMonthName, toOrdinalSuffix: toOrdinalSuffix, toWeekdayAbbreviation: toWeekdayAbbreviation, toWeekdayName: toWeekdayName};
	});
var ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
	return (hour > 11) ? 'pm' : 'am';
};
var ryannhg$date_format$DateFormat$Language$toEnglishMonthName = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var ryannhg$date_format$DateFormat$Language$toEnglishSuffix = function (num) {
	var _n0 = A2(elm$core$Basics$modBy, 100, num);
	switch (_n0) {
		case 11:
			return 'th';
		case 12:
			return 'th';
		case 13:
			return 'th';
		default:
			var _n1 = A2(elm$core$Basics$modBy, 10, num);
			switch (_n1) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
	}
};
var ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var ryannhg$date_format$DateFormat$Language$english = A6(
	ryannhg$date_format$DateFormat$Language$Language,
	ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
	A2(
		elm$core$Basics$composeR,
		ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
		elm$core$String$left(3)),
	ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
	A2(
		elm$core$Basics$composeR,
		ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
		elm$core$String$left(3)),
	ryannhg$date_format$DateFormat$Language$toEnglishAmPm,
	ryannhg$date_format$DateFormat$Language$toEnglishSuffix);
var ryannhg$date_format$DateFormat$format = ryannhg$date_format$DateFormat$formatWithLanguage(ryannhg$date_format$DateFormat$Language$english);
var ryannhg$date_format$DateFormat$MonthNameAbbreviated = {$: 'MonthNameAbbreviated'};
var ryannhg$date_format$DateFormat$monthNameAbbreviated = ryannhg$date_format$DateFormat$MonthNameAbbreviated;
var ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 'Text', a: a};
};
var ryannhg$date_format$DateFormat$text = ryannhg$date_format$DateFormat$Text;
var ryannhg$date_format$DateFormat$YearNumber = {$: 'YearNumber'};
var ryannhg$date_format$DateFormat$yearNumber = ryannhg$date_format$DateFormat$YearNumber;
var author$project$Area$formatX = function (datum) {
	return A3(
		ryannhg$date_format$DateFormat$format,
		_List_fromArray(
			[
				ryannhg$date_format$DateFormat$dayOfMonthSuffix,
				ryannhg$date_format$DateFormat$text('. '),
				ryannhg$date_format$DateFormat$monthNameAbbreviated,
				ryannhg$date_format$DateFormat$text(', '),
				ryannhg$date_format$DateFormat$yearNumber
			]),
		elm$time$Time$utc,
		datum.time);
};
var author$project$Area$round100 = function (_float) {
	return elm$core$Basics$round(_float * 100) / 100;
};
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$Area$formatY = function (datum) {
	return elm$core$String$fromFloat(
		author$project$Area$round100(datum.velocity)) + ' m/s';
};
var author$project$Internal$Area$Stacked = function (a) {
	return {$: 'Stacked', a: a};
};
var author$project$Internal$Area$stacked = author$project$Internal$Area$Stacked;
var author$project$LineChart$Area$stacked = author$project$Internal$Area$stacked;
var author$project$Internal$Axis$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Axis$custom = author$project$Internal$Axis$Config;
var author$project$Internal$Axis$Line$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Axis$Line$custom = author$project$Internal$Axis$Line$Config;
var author$project$Internal$Coordinate$smallestRange = F2(
	function (data, range_) {
		return {
			max: A2(elm$core$Basics$min, data.max, range_.max),
			min: A2(elm$core$Basics$max, data.min, range_.min)
		};
	});
var author$project$Internal$Axis$Line$rangeFrame = function (color) {
	return author$project$Internal$Axis$Line$custom(
		F2(
			function (data, range) {
				var smallest = A2(author$project$Internal$Coordinate$smallestRange, data, range);
				return {color: color, end: smallest.max, events: _List_Nil, start: smallest.min, width: 1};
			}));
};
var author$project$Internal$Axis$Range$Padded = F2(
	function (a, b) {
		return {$: 'Padded', a: a, b: b};
	});
var author$project$Internal$Axis$Range$padded = author$project$Internal$Axis$Range$Padded;
var author$project$Internal$Axis$Ticks$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Axis$Ticks$custom = author$project$Internal$Axis$Ticks$Config;
var author$project$Internal$Axis$Title$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Axis$Title$custom = F4(
	function (position, x, y, title) {
		return author$project$Internal$Axis$Title$Config(
			{
				offset: _Utils_Tuple2(x, y),
				position: position,
				view: title
			});
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$svg$Svg$text = elm$virtual_dom$VirtualDom$text;
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$text_ = elm$svg$Svg$trustedNode('text');
var elm$svg$Svg$tspan = elm$svg$Svg$trustedNode('tspan');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var author$project$Internal$Svg$label = F2(
	function (color, string) {
		return A2(
			elm$svg$Svg$text_,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$fill(color),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$tspan,
					_List_Nil,
					_List_fromArray(
						[
							elm$svg$Svg$text(string)
						]))
				]));
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var author$project$Internal$Axis$Title$atPosition = F3(
	function (position, x, y) {
		return A2(
			elm$core$Basics$composeL,
			A3(author$project$Internal$Axis$Title$custom, position, x, y),
			author$project$Internal$Svg$label('inherit'));
	});
var author$project$Internal$Axis$Title$atDataMax = function () {
	var position = F2(
		function (data, range) {
			return A2(elm$core$Basics$min, data.max, range.max);
		});
	return author$project$Internal$Axis$Title$atPosition(position);
}();
var author$project$Internal$Axis$Values$Around = function (a) {
	return {$: 'Around', a: a};
};
var author$project$Internal$Axis$Values$around = author$project$Internal$Axis$Values$Around;
var author$project$Internal$Axis$Values$ceilingTo = F2(
	function (prec, number) {
		return prec * elm$core$Basics$ceiling(number / prec);
	});
var author$project$Internal$Axis$Values$getBeginning = F2(
	function (min, interval) {
		var multiple = min / interval;
		return _Utils_eq(
			multiple,
			elm$core$Basics$round(multiple)) ? min : A2(author$project$Internal$Axis$Values$ceilingTo, interval, min);
	});
var elm$core$String$toFloat = _String_toFloat;
var elm$core$Basics$isInfinite = _Basics_isInfinite;
var elm$core$Basics$isNaN = _Basics_isNaN;
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$String$cons = _String_cons;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3(elm$core$String$repeatHelp, n, chunk, '');
	});
var elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				elm$core$String$repeat,
				n - elm$core$String$length(string),
				elm$core$String$fromChar(_char)));
	});
var elm$core$String$reverse = _String_reverse;
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			elm$core$List$any,
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('0'))) && (!_Utils_eq(
					c,
					_Utils_chr('.')));
			},
			elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var elm$core$Char$fromCode = _Char_fromCode;
var myrho$elm_round$Round$increaseNum = function (_n0) {
	var head = _n0.a;
	var tail = _n0.b;
	if (_Utils_eq(
		head,
		_Utils_chr('9'))) {
		var _n1 = elm$core$String$uncons(tail);
		if (_n1.$ === 'Nothing') {
			return '01';
		} else {
			var headtail = _n1.a;
			return A2(
				elm$core$String$cons,
				_Utils_chr('0'),
				myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			elm$core$String$cons,
			elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var myrho$elm_round$Round$splitComma = function (str) {
	var _n0 = A2(elm$core$String$split, '.', str);
	if (_n0.b) {
		if (_n0.b.b) {
			var before = _n0.a;
			var _n1 = _n0.b;
			var after = _n1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _n0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$core$String$toInt = _String_toInt;
var elm$core$Tuple$mapFirst = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var myrho$elm_round$Round$toDecimal = function (fl) {
	var _n0 = A2(
		elm$core$String$split,
		'e',
		elm$core$String$fromFloat(
			elm$core$Basics$abs(fl)));
	if (_n0.b) {
		if (_n0.b.b) {
			var num = _n0.a;
			var _n1 = _n0.b;
			var exp = _n1.a;
			var e = A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$String$toInt(
					A2(elm$core$String$startsWith, '+', exp) ? A2(elm$core$String$dropLeft, 1, exp) : exp));
			var _n2 = myrho$elm_round$Round$splitComma(num);
			var before = _n2.a;
			var after = _n2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				elm$core$Maybe$withDefault,
				'0',
				A2(
					elm$core$Maybe$map,
					function (_n3) {
						var a = _n3.a;
						var b = _n3.b;
						return a + ('.' + b);
					},
					A2(
						elm$core$Maybe$map,
						elm$core$Tuple$mapFirst(elm$core$String$fromChar),
						elm$core$String$uncons(
							_Utils_ap(
								A2(
									elm$core$String$repeat,
									elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(
				elm$core$String$padRight,
				e + 1,
				_Utils_chr('0'),
				total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _n0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if (elm$core$Basics$isInfinite(fl) || elm$core$Basics$isNaN(fl)) {
			return elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _n0 = myrho$elm_round$Round$splitComma(
				myrho$elm_round$Round$toDecimal(
					elm$core$Basics$abs(fl)));
			var before = _n0.a;
			var after = _n0.b;
			var r = elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2(elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					elm$core$String$padRight,
					r,
					_Utils_chr('0'),
					_Utils_ap(before, after)));
			var totalLen = elm$core$String$length(normalized);
			var roundDigitIndex = A2(elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3(elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3(elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? elm$core$String$reverse(
				A2(
					elm$core$Maybe$withDefault,
					'1',
					A2(
						elm$core$Maybe$map,
						myrho$elm_round$Round$increaseNum,
						elm$core$String$uncons(
							elm$core$String$reverse(remains))))) : remains;
			var numLen = elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					elm$core$String$repeat,
					elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				elm$core$String$length(after)) < 0) ? (A3(elm$core$String$slice, 0, numLen - s, num) + ('.' + A3(elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(
					elm$core$String$padRight,
					s,
					_Utils_chr('0'),
					after))));
			return A2(myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var myrho$elm_round$Round$round = myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _n0 = elm$core$String$uncons(str);
			if (_n0.$ === 'Nothing') {
				return false;
			} else {
				if ('5' === _n0.a.a.valueOf()) {
					if (_n0.a.b === '') {
						var _n1 = _n0.a;
						return !signed;
					} else {
						var _n2 = _n0.a;
						return true;
					}
				} else {
					var _n3 = _n0.a;
					var _int = _n3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						elm$core$Char$toCode(_int));
				}
			}
		}));
var author$project$Internal$Axis$Values$correctFloat = function (prec) {
	return A2(
		elm$core$Basics$composeR,
		myrho$elm_round$Round$round(prec),
		A2(
			elm$core$Basics$composeR,
			elm$core$String$toFloat,
			elm$core$Maybe$withDefault(0)));
};
var author$project$Internal$Axis$Values$getMultiples = F3(
	function (magnitude, allowDecimals, hasTickAmount) {
		var defaults = hasTickAmount ? _List_fromArray(
			[1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) : _List_fromArray(
			[1, 2, 2.5, 5, 10]);
		return allowDecimals ? defaults : ((magnitude === 1) ? A2(
			elm$core$List$filter,
			function (n) {
				return _Utils_eq(
					elm$core$Basics$round(n),
					n);
			},
			defaults) : ((magnitude <= 0.1) ? _List_fromArray(
			[1 / magnitude]) : defaults));
	});
var author$project$Internal$Axis$Values$getPrecision = function (number) {
	var _n0 = A2(
		elm$core$String$split,
		'e',
		elm$core$String$fromFloat(number));
	if ((_n0.b && _n0.b.b) && (!_n0.b.b.b)) {
		var before = _n0.a;
		var _n1 = _n0.b;
		var after = _n1.a;
		return elm$core$Basics$abs(
			A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$String$toInt(after)));
	} else {
		var _n2 = A2(
			elm$core$String$split,
			'.',
			elm$core$String$fromFloat(number));
		if ((_n2.b && _n2.b.b) && (!_n2.b.b.b)) {
			var before = _n2.a;
			var _n3 = _n2.b;
			var after = _n3.a;
			return elm$core$String$length(after);
		} else {
			return 0;
		}
	}
};
var elm$core$Basics$e = _Basics_e;
var elm$core$Basics$pow = _Basics_pow;
var author$project$Internal$Utils$magnitude = function (num) {
	return A2(
		elm$core$Basics$pow,
		10,
		elm$core$Basics$floor(
			A2(elm$core$Basics$logBase, elm$core$Basics$e, num) / A2(elm$core$Basics$logBase, elm$core$Basics$e, 10)));
};
var author$project$Internal$Axis$Values$getInterval = F3(
	function (intervalRaw, allowDecimals, hasTickAmount) {
		var magnitude = author$project$Internal$Utils$magnitude(intervalRaw);
		var multiples = A3(author$project$Internal$Axis$Values$getMultiples, magnitude, allowDecimals, hasTickAmount);
		var normalized = intervalRaw / magnitude;
		var findMultipleExact = function (multiples_) {
			findMultipleExact:
			while (true) {
				if (multiples_.b) {
					var m1 = multiples_.a;
					var rest = multiples_.b;
					if (_Utils_cmp(m1 * magnitude, intervalRaw) > -1) {
						return m1;
					} else {
						var $temp$multiples_ = rest;
						multiples_ = $temp$multiples_;
						continue findMultipleExact;
					}
				} else {
					return 1;
				}
			}
		};
		var findMultiple = function (multiples_) {
			findMultiple:
			while (true) {
				if (multiples_.b) {
					if (multiples_.b.b) {
						var m1 = multiples_.a;
						var _n2 = multiples_.b;
						var m2 = _n2.a;
						var rest = _n2.b;
						if (_Utils_cmp(normalized, (m1 + m2) / 2) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = A2(elm$core$List$cons, m2, rest);
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					} else {
						var m1 = multiples_.a;
						var rest = multiples_.b;
						if (_Utils_cmp(normalized, m1) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = rest;
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					}
				} else {
					return 1;
				}
			}
		};
		var multiple = hasTickAmount ? findMultipleExact(multiples) : findMultiple(multiples);
		var precision = author$project$Internal$Axis$Values$getPrecision(magnitude) + author$project$Internal$Axis$Values$getPrecision(multiple);
		return A2(author$project$Internal$Axis$Values$correctFloat, precision, multiple * magnitude);
	});
var author$project$Internal$Axis$Values$positions = F5(
	function (range, beginning, interval, m, acc) {
		positions:
		while (true) {
			var next = A2(
				author$project$Internal$Axis$Values$correctFloat,
				author$project$Internal$Axis$Values$getPrecision(interval),
				beginning + (m * interval));
			if (_Utils_cmp(next, range.max) > 0) {
				return acc;
			} else {
				var $temp$range = range,
					$temp$beginning = beginning,
					$temp$interval = interval,
					$temp$m = m + 1,
					$temp$acc = _Utils_ap(
					acc,
					_List_fromArray(
						[next]));
				range = $temp$range;
				beginning = $temp$beginning;
				interval = $temp$interval;
				m = $temp$m;
				acc = $temp$acc;
				continue positions;
			}
		}
	});
var author$project$Internal$Axis$Values$values = F4(
	function (allowDecimals, exact, amountRough, range) {
		var intervalRough = (range.max - range.min) / amountRough;
		var interval = A3(author$project$Internal$Axis$Values$getInterval, intervalRough, allowDecimals, exact);
		var intervalSafe = (!interval) ? 1 : interval;
		var beginning = A2(author$project$Internal$Axis$Values$getBeginning, range.min, intervalSafe);
		var amountRoughSafe = (!amountRough) ? 1 : amountRough;
		return A5(author$project$Internal$Axis$Values$positions, range, beginning, intervalSafe, 0, _List_Nil);
	});
var author$project$Internal$Axis$Values$float = function (amount) {
	if (amount.$ === 'Exactly') {
		var amount_ = amount.a;
		return A3(author$project$Internal$Axis$Values$values, true, true, amount_);
	} else {
		var amount_ = amount.a;
		return A3(author$project$Internal$Axis$Values$values, true, false, amount_);
	}
};
var author$project$Internal$Axis$Tick$Negative = {$: 'Negative'};
var author$project$Internal$Axis$Tick$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Axis$Tick$custom = author$project$Internal$Axis$Tick$Config;
var avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			avh4$elm_color$Color$RgbaSpace,
			avh4$elm_color$Color$scaleFrom255(r),
			avh4$elm_color$Color$scaleFrom255(g),
			avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var author$project$LineChart$Colors$gray = A3(avh4$elm_color$Color$rgb255, 163, 163, 163);
var author$project$Internal$Axis$Tick$float = function (n) {
	return author$project$Internal$Axis$Tick$custom(
		{
			color: author$project$LineChart$Colors$gray,
			direction: author$project$Internal$Axis$Tick$Negative,
			grid: true,
			label: elm$core$Maybe$Just(
				A2(
					author$project$Internal$Svg$label,
					'inherit',
					elm$core$String$fromFloat(n))),
			length: 5,
			position: n,
			width: 1
		});
};
var author$project$LineChart$Axis$Tick$float = author$project$Internal$Axis$Tick$float;
var author$project$Internal$Axis$default = F3(
	function (pixels_, title_, variable_) {
		return author$project$Internal$Axis$custom(
			{
				axisLine: author$project$Internal$Axis$Line$rangeFrame(author$project$LineChart$Colors$gray),
				pixels: pixels_,
				range: A2(author$project$Internal$Axis$Range$padded, 20, 20),
				ticks: author$project$Internal$Axis$Ticks$custom(
					F2(
						function (data, range_) {
							var smallest = A2(author$project$Internal$Coordinate$smallestRange, data, range_);
							var rangeSmall = smallest.max - smallest.min;
							var rangeLong = range_.max - range_.min;
							var diff = 1 - ((rangeLong - rangeSmall) / rangeLong);
							var amount = elm$core$Basics$round((diff * pixels_) / 90);
							return A2(
								elm$core$List$map,
								author$project$LineChart$Axis$Tick$float,
								A2(
									author$project$Internal$Axis$Values$float,
									author$project$Internal$Axis$Values$around(amount),
									smallest));
						})),
				title: A3(author$project$Internal$Axis$Title$atDataMax, 0, 0, title_),
				variable: A2(elm$core$Basics$composeL, elm$core$Maybe$Just, variable_)
			});
	});
var author$project$LineChart$Axis$default = author$project$Internal$Axis$default;
var author$project$LineChart$Axis$Tick$Day = {$: 'Day'};
var author$project$LineChart$Axis$Tick$Hour = {$: 'Hour'};
var author$project$LineChart$Axis$Tick$Millisecond = {$: 'Millisecond'};
var author$project$LineChart$Axis$Tick$Minute = {$: 'Minute'};
var author$project$LineChart$Axis$Tick$Month = {$: 'Month'};
var author$project$LineChart$Axis$Tick$Second = {$: 'Second'};
var author$project$LineChart$Axis$Tick$Year = {$: 'Year'};
var author$project$Internal$Axis$Values$Time$all = _List_fromArray(
	[author$project$LineChart$Axis$Tick$Millisecond, author$project$LineChart$Axis$Tick$Second, author$project$LineChart$Axis$Tick$Minute, author$project$LineChart$Axis$Tick$Hour, author$project$LineChart$Axis$Tick$Day, author$project$LineChart$Axis$Tick$Month, author$project$LineChart$Axis$Tick$Year]);
var justinmimbs$time_extra$Time$Extra$Second = {$: 'Second'};
var justinmimbs$time_extra$Time$Extra$Year = {$: 'Year'};
var author$project$Internal$Axis$Values$Time$toExtraUnit = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return justinmimbs$time_extra$Time$Extra$Millisecond;
		case 'Second':
			return justinmimbs$time_extra$Time$Extra$Second;
		case 'Minute':
			return justinmimbs$time_extra$Time$Extra$Minute;
		case 'Hour':
			return justinmimbs$time_extra$Time$Extra$Hour;
		case 'Day':
			return justinmimbs$time_extra$Time$Extra$Day;
		case 'Month':
			return justinmimbs$time_extra$Time$Extra$Month;
		default:
			return justinmimbs$time_extra$Time$Extra$Year;
	}
};
var author$project$Internal$Axis$Values$Time$monthToInt = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var author$project$Internal$Axis$Values$Time$unitFunc = function (unit_) {
	switch (unit_.$) {
		case 'Millisecond':
			return elm$time$Time$toMillis(elm$time$Time$utc);
		case 'Second':
			return elm$time$Time$toSecond(elm$time$Time$utc);
		case 'Minute':
			return elm$time$Time$toMinute(elm$time$Time$utc);
		case 'Hour':
			return elm$time$Time$toHour(elm$time$Time$utc);
		case 'Day':
			return elm$time$Time$toDay(elm$time$Time$utc);
		case 'Month':
			return function (time) {
				return author$project$Internal$Axis$Values$Time$monthToInt(
					A2(elm$time$Time$toMonth, elm$time$Time$utc, time));
			};
		default:
			return elm$time$Time$toSecond(elm$time$Time$utc);
	}
};
var justinmimbs$date$Date$Day = {$: 'Day'};
var justinmimbs$date$Date$Friday = {$: 'Friday'};
var justinmimbs$date$Date$Monday = {$: 'Monday'};
var justinmimbs$date$Date$Month = {$: 'Month'};
var justinmimbs$date$Date$Quarter = {$: 'Quarter'};
var justinmimbs$date$Date$Saturday = {$: 'Saturday'};
var justinmimbs$date$Date$Sunday = {$: 'Sunday'};
var justinmimbs$date$Date$Thursday = {$: 'Thursday'};
var justinmimbs$date$Date$Tuesday = {$: 'Tuesday'};
var justinmimbs$date$Date$Wednesday = {$: 'Wednesday'};
var justinmimbs$date$Date$Week = {$: 'Week'};
var justinmimbs$date$Date$Year = {$: 'Year'};
var justinmimbs$date$Date$weekdayNumber = function (_n0) {
	var rd = _n0.a;
	var _n1 = A2(elm$core$Basics$modBy, 7, rd);
	if (!_n1) {
		return 7;
	} else {
		var n = _n1;
		return n;
	}
};
var justinmimbs$date$Date$weekdayToNumber = function (wd) {
	switch (wd.$) {
		case 'Mon':
			return 1;
		case 'Tue':
			return 2;
		case 'Wed':
			return 3;
		case 'Thu':
			return 4;
		case 'Fri':
			return 5;
		case 'Sat':
			return 6;
		default:
			return 7;
	}
};
var justinmimbs$date$Date$daysSincePreviousWeekday = F2(
	function (wd, date) {
		return A2(
			elm$core$Basics$modBy,
			7,
			(justinmimbs$date$Date$weekdayNumber(date) + 7) - justinmimbs$date$Date$weekdayToNumber(wd));
	});
var justinmimbs$date$Date$firstOfMonth = F2(
	function (y, m) {
		return justinmimbs$date$Date$RD(
			(justinmimbs$date$Date$daysBeforeYear(y) + A2(justinmimbs$date$Date$daysBeforeMonth, y, m)) + 1);
	});
var justinmimbs$date$Date$firstOfYear = function (y) {
	return justinmimbs$date$Date$RD(
		justinmimbs$date$Date$daysBeforeYear(y) + 1);
};
var justinmimbs$date$Date$month = A2(
	elm$core$Basics$composeR,
	justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.month;
	});
var justinmimbs$date$Date$monthToQuarter = function (m) {
	return ((justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var justinmimbs$date$Date$quarter = A2(elm$core$Basics$composeR, justinmimbs$date$Date$month, justinmimbs$date$Date$monthToQuarter);
var justinmimbs$date$Date$quarterToMonth = function (q) {
	return justinmimbs$date$Date$numberToMonth((q * 3) - 2);
};
var justinmimbs$date$Date$floor = F2(
	function (interval, date) {
		var rd = date.a;
		switch (interval.$) {
			case 'Year':
				return justinmimbs$date$Date$firstOfYear(
					justinmimbs$date$Date$year(date));
			case 'Quarter':
				return A2(
					justinmimbs$date$Date$firstOfMonth,
					justinmimbs$date$Date$year(date),
					justinmimbs$date$Date$quarterToMonth(
						justinmimbs$date$Date$quarter(date)));
			case 'Month':
				return A2(
					justinmimbs$date$Date$firstOfMonth,
					justinmimbs$date$Date$year(date),
					justinmimbs$date$Date$month(date));
			case 'Week':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Mon, date));
			case 'Monday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Mon, date));
			case 'Tuesday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Tue, date));
			case 'Wednesday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Wed, date));
			case 'Thursday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Thu, date));
			case 'Friday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Fri, date));
			case 'Saturday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Sat, date));
			case 'Sunday':
				return justinmimbs$date$Date$RD(
					rd - A2(justinmimbs$date$Date$daysSincePreviousWeekday, elm$time$Time$Sun, date));
			default:
				return date;
		}
	});
var justinmimbs$time_extra$Time$Extra$floorDate = F3(
	function (dateInterval, zone, posix) {
		return A3(
			justinmimbs$time_extra$Time$Extra$posixFromDateTime,
			zone,
			A2(
				justinmimbs$date$Date$floor,
				dateInterval,
				A2(justinmimbs$date$Date$fromPosix, zone, posix)),
			0);
	});
var justinmimbs$time_extra$Time$Extra$floor = F3(
	function (interval, zone, posix) {
		switch (interval.$) {
			case 'Millisecond':
				return posix;
			case 'Second':
				return A3(
					justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2(justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2(elm$time$Time$toHour, zone, posix),
						A2(elm$time$Time$toMinute, zone, posix),
						A2(elm$time$Time$toSecond, zone, posix),
						0));
			case 'Minute':
				return A3(
					justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2(justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2(elm$time$Time$toHour, zone, posix),
						A2(elm$time$Time$toMinute, zone, posix),
						0,
						0));
			case 'Hour':
				return A3(
					justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2(justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2(elm$time$Time$toHour, zone, posix),
						0,
						0,
						0));
			case 'Day':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Day, zone, posix);
			case 'Month':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Month, zone, posix);
			case 'Year':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Year, zone, posix);
			case 'Quarter':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Quarter, zone, posix);
			case 'Week':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Week, zone, posix);
			case 'Monday':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Monday, zone, posix);
			case 'Tuesday':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Tuesday, zone, posix);
			case 'Wednesday':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Wednesday, zone, posix);
			case 'Thursday':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Thursday, zone, posix);
			case 'Friday':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Friday, zone, posix);
			case 'Saturday':
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Saturday, zone, posix);
			default:
				return A3(justinmimbs$time_extra$Time$Extra$floorDate, justinmimbs$date$Date$Sunday, zone, posix);
		}
	});
var justinmimbs$time_extra$Time$Extra$ceiling = F3(
	function (interval, zone, posix) {
		var floored = A3(justinmimbs$time_extra$Time$Extra$floor, interval, zone, posix);
		return _Utils_eq(floored, posix) ? posix : A4(justinmimbs$time_extra$Time$Extra$add, interval, 1, zone, floored);
	});
var author$project$Internal$Axis$Values$Time$beginAt = F4(
	function (zone, min, unit, multiple) {
		var multiMod = function (x) {
			return A2(
				elm$core$Basics$modBy,
				multiple,
				multiple - A2(elm$core$Basics$modBy, multiple, x));
		};
		var firstWholeUnit = A3(
			justinmimbs$time_extra$Time$Extra$ceiling,
			author$project$Internal$Axis$Values$Time$toExtraUnit(unit),
			zone,
			min);
		var firstInUnit = A2(author$project$Internal$Axis$Values$Time$unitFunc, unit, firstWholeUnit);
		var addAmount = function () {
			switch (unit.$) {
				case 'Month':
					return multiMod(firstInUnit - 1);
				case 'Day':
					return multiMod(firstInUnit - 1);
				default:
					return multiMod(firstInUnit);
			}
		}();
		return A4(
			justinmimbs$time_extra$Time$Extra$add,
			author$project$Internal$Axis$Values$Time$toExtraUnit(unit),
			addAmount,
			zone,
			firstWholeUnit);
	});
var author$project$Internal$Axis$Values$Time$multiples = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return _List_fromArray(
				[2, 5, 10, 20, 25, 50, 100, 200, 500]);
		case 'Second':
			return _List_fromArray(
				[1, 2, 5, 10, 15, 30]);
		case 'Minute':
			return _List_fromArray(
				[1, 2, 5, 10, 15, 30]);
		case 'Hour':
			return _List_fromArray(
				[1, 2, 3, 4, 6, 8, 12]);
		case 'Day':
			return _List_fromArray(
				[1, 2, 7, 14]);
		case 'Month':
			return _List_fromArray(
				[1, 2, 3, 6]);
		default:
			return _List_fromArray(
				[1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000, 10000]);
	}
};
var author$project$Internal$Axis$Values$Time$toMs = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return 1;
		case 'Second':
			return 1000;
		case 'Minute':
			return 60000;
		case 'Hour':
			return 3600000;
		case 'Day':
			return 24 * 3600000;
		case 'Month':
			return (28 * 24) * 3600000;
		default:
			return (364 * 24) * 3600000;
	}
};
var author$project$Internal$Axis$Values$Time$findBestMultiple = F2(
	function (interval, unit) {
		var middleOfNext = F2(
			function (m1, m2) {
				return ((m1 * author$project$Internal$Axis$Values$Time$toMs(unit)) + (m2 * author$project$Internal$Axis$Values$Time$toMs(unit))) / 2;
			});
		var findBest_ = function (multiples_) {
			findBest_:
			while (true) {
				if (multiples_.b) {
					if (multiples_.b.b) {
						var m1 = multiples_.a;
						var _n1 = multiples_.b;
						var m2 = _n1.a;
						var rest = _n1.b;
						if (_Utils_cmp(
							interval,
							A2(middleOfNext, m1, m2)) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = A2(elm$core$List$cons, m2, rest);
							multiples_ = $temp$multiples_;
							continue findBest_;
						}
					} else {
						var m = multiples_.a;
						return m;
					}
				} else {
					return 1;
				}
			}
		};
		return findBest_(
			author$project$Internal$Axis$Values$Time$multiples(unit));
	});
var author$project$Internal$Axis$Values$Time$highestMultiple = A2(
	elm$core$Basics$composeR,
	elm$core$List$reverse,
	A2(
		elm$core$Basics$composeR,
		elm$core$List$head,
		A2(
			elm$core$Basics$composeR,
			elm$core$Maybe$withDefault(0),
			elm$core$Basics$toFloat)));
var author$project$Internal$Axis$Values$Time$findBestUnit = F2(
	function (interval, units_) {
		var middleOfNext = F2(
			function (u1, u2) {
				return ((author$project$Internal$Axis$Values$Time$toMs(u1) * author$project$Internal$Axis$Values$Time$highestMultiple(
					author$project$Internal$Axis$Values$Time$multiples(u1))) + author$project$Internal$Axis$Values$Time$toMs(u2)) / 2;
			});
		var findBest_ = F2(
			function (units__, u0) {
				findBest_:
				while (true) {
					if (units__.b) {
						if (units__.b.b) {
							var u1 = units__.a;
							var _n1 = units__.b;
							var u2 = _n1.a;
							var rest = _n1.b;
							if (_Utils_cmp(
								interval,
								A2(middleOfNext, u1, u2)) < 1) {
								return u1;
							} else {
								var $temp$units__ = A2(elm$core$List$cons, u2, rest),
									$temp$u0 = u1;
								units__ = $temp$units__;
								u0 = $temp$u0;
								continue findBest_;
							}
						} else {
							var u = units__.a;
							return u;
						}
					} else {
						return author$project$LineChart$Axis$Tick$Year;
					}
				}
			});
		return A2(findBest_, units_, author$project$LineChart$Axis$Tick$Year);
	});
var author$project$Internal$Axis$Values$Time$floatToPosix = function (ms) {
	return elm$time$Time$millisToPosix(
		elm$core$Basics$round(ms));
};
var elm$core$Basics$truncate = _Basics_truncate;
var justinmimbs$time_extra$Time$Extra$Week = {$: 'Week'};
var justinmimbs$time_extra$Time$Extra$toFractionalDay = F2(
	function (zone, posix) {
		return A2(justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix) / 86400000;
	});
var justinmimbs$time_extra$Time$Extra$toMonths = F2(
	function (zone, posix) {
		var wholeMonths = (12 * (A2(elm$time$Time$toYear, zone, posix) - 1)) + (justinmimbs$date$Date$monthToNumber(
			A2(elm$time$Time$toMonth, zone, posix)) - 1);
		var fractionalMonth = (A2(elm$time$Time$toDay, zone, posix) + A2(justinmimbs$time_extra$Time$Extra$toFractionalDay, zone, posix)) / 100;
		return wholeMonths + fractionalMonth;
	});
var justinmimbs$time_extra$Time$Extra$toRataDieMoment = F2(
	function (zone, posix) {
		return justinmimbs$date$Date$toRataDie(
			A2(justinmimbs$date$Date$fromPosix, zone, posix)) + A2(justinmimbs$time_extra$Time$Extra$toFractionalDay, zone, posix);
	});
var justinmimbs$time_extra$Time$Extra$diff = F4(
	function (interval, zone, posix1, posix2) {
		diff:
		while (true) {
			switch (interval.$) {
				case 'Millisecond':
					return elm$time$Time$posixToMillis(posix2) - elm$time$Time$posixToMillis(posix1);
				case 'Second':
					return (A4(justinmimbs$time_extra$Time$Extra$diff, justinmimbs$time_extra$Time$Extra$Millisecond, zone, posix1, posix2) / 1000) | 0;
				case 'Minute':
					return (A4(justinmimbs$time_extra$Time$Extra$diff, justinmimbs$time_extra$Time$Extra$Millisecond, zone, posix1, posix2) / 60000) | 0;
				case 'Hour':
					return (A4(justinmimbs$time_extra$Time$Extra$diff, justinmimbs$time_extra$Time$Extra$Millisecond, zone, posix1, posix2) / 3600000) | 0;
				case 'Day':
					return (A2(justinmimbs$time_extra$Time$Extra$toRataDieMoment, zone, posix2) - A2(justinmimbs$time_extra$Time$Extra$toRataDieMoment, zone, posix1)) | 0;
				case 'Month':
					return (A2(justinmimbs$time_extra$Time$Extra$toMonths, zone, posix2) - A2(justinmimbs$time_extra$Time$Extra$toMonths, zone, posix1)) | 0;
				case 'Year':
					return (A4(justinmimbs$time_extra$Time$Extra$diff, justinmimbs$time_extra$Time$Extra$Month, zone, posix1, posix2) / 12) | 0;
				case 'Quarter':
					return (A4(justinmimbs$time_extra$Time$Extra$diff, justinmimbs$time_extra$Time$Extra$Month, zone, posix1, posix2) / 3) | 0;
				case 'Week':
					return (A4(justinmimbs$time_extra$Time$Extra$diff, justinmimbs$time_extra$Time$Extra$Day, zone, posix1, posix2) / 7) | 0;
				default:
					var weekday = interval;
					var $temp$interval = justinmimbs$time_extra$Time$Extra$Week,
						$temp$zone = zone,
						$temp$posix1 = A3(justinmimbs$time_extra$Time$Extra$floor, weekday, zone, posix1),
						$temp$posix2 = A3(justinmimbs$time_extra$Time$Extra$floor, weekday, zone, posix2);
					interval = $temp$interval;
					zone = $temp$zone;
					posix1 = $temp$posix1;
					posix2 = $temp$posix2;
					continue diff;
			}
		}
	});
var author$project$Internal$Axis$Values$Time$getUnitChange = F4(
	function (interval, zone, value, next_) {
		var equalBy = function (unit) {
			return !A4(
				justinmimbs$time_extra$Time$Extra$diff,
				author$project$Internal$Axis$Values$Time$toExtraUnit(unit),
				zone,
				A3(
					justinmimbs$time_extra$Time$Extra$floor,
					author$project$Internal$Axis$Values$Time$toExtraUnit(unit),
					zone,
					value),
				A3(
					justinmimbs$time_extra$Time$Extra$floor,
					author$project$Internal$Axis$Values$Time$toExtraUnit(unit),
					zone,
					next_));
		};
		var unitChange_ = function (units) {
			unitChange_:
			while (true) {
				if (units.b) {
					var unit = units.a;
					var rest = units.b;
					if (_Utils_cmp(
						author$project$Internal$Axis$Values$Time$toMs(unit),
						author$project$Internal$Axis$Values$Time$toMs(interval)) < 1) {
						var $temp$units = rest;
						units = $temp$units;
						continue unitChange_;
					} else {
						if (!equalBy(unit)) {
							return elm$core$Maybe$Just(unit);
						} else {
							return elm$core$Maybe$Nothing;
						}
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		};
		return unitChange_(author$project$Internal$Axis$Values$Time$all);
	});
var author$project$Internal$Axis$Values$Time$next = F4(
	function (zone, timestamp, unit, multiple) {
		return A4(
			justinmimbs$time_extra$Time$Extra$add,
			author$project$Internal$Axis$Values$Time$toExtraUnit(unit),
			multiple,
			zone,
			timestamp);
	});
var author$project$Internal$Axis$Values$Time$posixsToFloat = function (posix) {
	return elm$time$Time$posixToMillis(posix);
};
var author$project$LineChart$Axis$Tick$Interval = F2(
	function (unit, multiple) {
		return {multiple: multiple, unit: unit};
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var author$project$Internal$Axis$Values$Time$values = F3(
	function (zone, amountRough, range) {
		var intervalRough = (range.max - range.min) / amountRough;
		var unit = A2(author$project$Internal$Axis$Values$Time$findBestUnit, intervalRough, author$project$Internal$Axis$Values$Time$all);
		var multiple = A2(author$project$Internal$Axis$Values$Time$findBestMultiple, intervalRough, unit);
		var toTime = F3(
			function (unitChange, value, isFirst) {
				return {
					change: unitChange,
					interval: A2(author$project$LineChart$Axis$Tick$Interval, unit, multiple),
					isFirst: isFirst,
					timestamp: value,
					zone: zone
				};
			});
		var toTimes = F3(
			function (values_, unitChange, acc) {
				toTimes:
				while (true) {
					if (values_.b) {
						if (values_.b.b) {
							var value = values_.a;
							var _n1 = values_.b;
							var next_ = _n1.a;
							var rest = _n1.b;
							var newUnitChange = A4(author$project$Internal$Axis$Values$Time$getUnitChange, unit, zone, value, next_);
							var isFirst = elm$core$List$isEmpty(acc);
							var newAcc = A2(
								elm$core$List$cons,
								A3(toTime, unitChange, value, isFirst),
								acc);
							var $temp$values_ = A2(elm$core$List$cons, next_, rest),
								$temp$unitChange = newUnitChange,
								$temp$acc = newAcc;
							values_ = $temp$values_;
							unitChange = $temp$unitChange;
							acc = $temp$acc;
							continue toTimes;
						} else {
							var value = values_.a;
							return A2(
								elm$core$List$cons,
								A3(
									toTime,
									unitChange,
									value,
									elm$core$List$isEmpty(acc)),
								acc);
						}
					} else {
						return acc;
					}
				}
			});
		var interval = author$project$Internal$Axis$Values$Time$toMs(unit) * multiple;
		var beginning = A4(
			author$project$Internal$Axis$Values$Time$beginAt,
			zone,
			author$project$Internal$Axis$Values$Time$floatToPosix(range.min),
			unit,
			multiple);
		var toPositions = F2(
			function (acc, i) {
				toPositions:
				while (true) {
					var next_ = A4(author$project$Internal$Axis$Values$Time$next, zone, beginning, unit, i * multiple);
					if (_Utils_cmp(
						author$project$Internal$Axis$Values$Time$posixsToFloat(next_),
						range.max) > 0) {
						return acc;
					} else {
						var $temp$acc = _Utils_ap(
							acc,
							_List_fromArray(
								[next_])),
							$temp$i = i + 1;
						acc = $temp$acc;
						i = $temp$i;
						continue toPositions;
					}
				}
			});
		return A3(
			toTimes,
			A2(toPositions, _List_Nil, 0),
			elm$core$Maybe$Nothing,
			_List_Nil);
	});
var author$project$Internal$Axis$Values$time = author$project$Internal$Axis$Values$Time$values;
var author$project$LineChart$Axis$Tick$custom = author$project$Internal$Axis$Tick$custom;
var ryannhg$date_format$DateFormat$AmPmLowercase = {$: 'AmPmLowercase'};
var ryannhg$date_format$DateFormat$amPmLowercase = ryannhg$date_format$DateFormat$AmPmLowercase;
var ryannhg$date_format$DateFormat$DayOfWeekNameAbbreviated = {$: 'DayOfWeekNameAbbreviated'};
var ryannhg$date_format$DateFormat$dayOfWeekNameAbbreviated = ryannhg$date_format$DateFormat$DayOfWeekNameAbbreviated;
var ryannhg$date_format$DateFormat$HourNumber = {$: 'HourNumber'};
var ryannhg$date_format$DateFormat$hourNumber = ryannhg$date_format$DateFormat$HourNumber;
var ryannhg$date_format$DateFormat$MillisecondNumber = {$: 'MillisecondNumber'};
var ryannhg$date_format$DateFormat$millisecondNumber = ryannhg$date_format$DateFormat$MillisecondNumber;
var ryannhg$date_format$DateFormat$MinuteNumber = {$: 'MinuteNumber'};
var ryannhg$date_format$DateFormat$minuteNumber = ryannhg$date_format$DateFormat$MinuteNumber;
var ryannhg$date_format$DateFormat$SecondNumber = {$: 'SecondNumber'};
var ryannhg$date_format$DateFormat$secondNumber = ryannhg$date_format$DateFormat$SecondNumber;
var author$project$LineChart$Axis$Tick$formatBold = function (unit) {
	var tokens = function () {
		switch (unit.$) {
			case 'Millisecond':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$millisecondNumber]);
			case 'Second':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$secondNumber]);
			case 'Minute':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$minuteNumber]);
			case 'Hour':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$hourNumber, ryannhg$date_format$DateFormat$amPmLowercase]);
			case 'Day':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$dayOfWeekNameAbbreviated]);
			case 'Month':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$monthNameAbbreviated]);
			default:
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$yearNumber]);
		}
	}();
	return ryannhg$date_format$DateFormat$format(tokens);
};
var ryannhg$date_format$DateFormat$MinuteFixed = {$: 'MinuteFixed'};
var ryannhg$date_format$DateFormat$minuteFixed = ryannhg$date_format$DateFormat$MinuteFixed;
var author$project$LineChart$Axis$Tick$formatNorm = function (unit) {
	var tokens = function () {
		switch (unit.$) {
			case 'Millisecond':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$millisecondNumber]);
			case 'Second':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$secondNumber]);
			case 'Minute':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$minuteFixed]);
			case 'Hour':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$hourNumber, ryannhg$date_format$DateFormat$amPmLowercase]);
			case 'Day':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$dayOfMonthSuffix]);
			case 'Month':
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$monthNameAbbreviated]);
			default:
				return _List_fromArray(
					[ryannhg$date_format$DateFormat$yearNumber]);
		}
	}();
	return ryannhg$date_format$DateFormat$format(tokens);
};
var author$project$LineChart$Axis$Tick$nextUnit = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return author$project$LineChart$Axis$Tick$Second;
		case 'Second':
			return author$project$LineChart$Axis$Tick$Minute;
		case 'Minute':
			return author$project$LineChart$Axis$Tick$Hour;
		case 'Hour':
			return author$project$LineChart$Axis$Tick$Day;
		case 'Day':
			return author$project$LineChart$Axis$Tick$Month;
		case 'Month':
			return author$project$LineChart$Axis$Tick$Year;
		default:
			return author$project$LineChart$Axis$Tick$Year;
	}
};
var author$project$LineChart$Axis$Tick$format = function (_n0) {
	var zone = _n0.zone;
	var change = _n0.change;
	var interval = _n0.interval;
	var timestamp = _n0.timestamp;
	var isFirst = _n0.isFirst;
	if (isFirst) {
		return A3(
			author$project$LineChart$Axis$Tick$formatBold,
			author$project$LineChart$Axis$Tick$nextUnit(interval.unit),
			zone,
			timestamp);
	} else {
		if (change.$ === 'Just') {
			var change_ = change.a;
			return A3(author$project$LineChart$Axis$Tick$formatBold, change_, zone, timestamp);
		} else {
			return A3(author$project$LineChart$Axis$Tick$formatNorm, interval.unit, zone, timestamp);
		}
	}
};
var author$project$LineChart$Axis$Tick$negative = author$project$Internal$Axis$Tick$Negative;
var avh4$elm_color$Color$gray = A4(avh4$elm_color$Color$RgbaSpace, 211 / 255, 215 / 255, 207 / 255, 1.0);
var author$project$LineChart$Axis$Tick$time = function (time_) {
	return author$project$LineChart$Axis$Tick$custom(
		{
			color: avh4$elm_color$Color$gray,
			direction: author$project$LineChart$Axis$Tick$negative,
			grid: true,
			label: elm$core$Maybe$Just(
				A2(
					author$project$Internal$Svg$label,
					'inherit',
					author$project$LineChart$Axis$Tick$format(time_))),
			length: 5,
			position: elm$time$Time$posixToMillis(time_.timestamp),
			width: 1
		});
};
var author$project$Internal$Axis$time = F4(
	function (zone, pixels_, title_, variable_) {
		return author$project$Internal$Axis$custom(
			{
				axisLine: author$project$Internal$Axis$Line$rangeFrame(author$project$LineChart$Colors$gray),
				pixels: pixels_,
				range: A2(author$project$Internal$Axis$Range$padded, 20, 20),
				ticks: author$project$Internal$Axis$Ticks$custom(
					F2(
						function (data, range_) {
							var smallest = A2(author$project$Internal$Coordinate$smallestRange, data, range_);
							var rangeSmall = smallest.max - smallest.min;
							var rangeLong = range_.max - range_.min;
							var diff = 1 - ((rangeLong - rangeSmall) / rangeLong);
							var amount = elm$core$Basics$round((diff * pixels_) / 90);
							return A2(
								elm$core$List$map,
								author$project$LineChart$Axis$Tick$time,
								A3(author$project$Internal$Axis$Values$time, zone, amount, smallest));
						})),
				title: A3(author$project$Internal$Axis$Title$atDataMax, 0, 0, title_),
				variable: A2(elm$core$Basics$composeL, elm$core$Maybe$Just, variable_)
			});
	});
var author$project$LineChart$Axis$time = author$project$Internal$Axis$time;
var author$project$Internal$Axis$Intersection$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Data$Point = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var author$project$Internal$Axis$Intersection$custom = F2(
	function (toX, toY) {
		return author$project$Internal$Axis$Intersection$Config(
			function (_n0) {
				var x = _n0.x;
				var y = _n0.y;
				return A2(
					author$project$Internal$Data$Point,
					toX(x),
					toY(y));
			});
	});
var author$project$Internal$Axis$Intersection$default = A2(
	author$project$Internal$Axis$Intersection$custom,
	function ($) {
		return $.min;
	},
	function ($) {
		return $.min;
	});
var author$project$LineChart$Axis$Intersection$default = author$project$Internal$Axis$Intersection$default;
var author$project$Internal$Dots$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Dots$custom = function (style_) {
	return author$project$Internal$Dots$Config(
		{
			individual: function (_n0) {
				return style_;
			},
			legend: function (_n1) {
				return style_;
			}
		});
};
var author$project$LineChart$Dots$custom = author$project$Internal$Dots$custom;
var author$project$Internal$Dots$Empty = function (a) {
	return {$: 'Empty', a: a};
};
var author$project$Internal$Dots$Style = function (a) {
	return {$: 'Style', a: a};
};
var author$project$Internal$Dots$style = F2(
	function (radius, variety) {
		return author$project$Internal$Dots$Style(
			{radius: radius, variety: variety});
	});
var author$project$Internal$Dots$empty = F2(
	function (radius, border) {
		return A2(
			author$project$Internal$Dots$style,
			radius,
			author$project$Internal$Dots$Empty(border));
	});
var author$project$LineChart$Dots$empty = author$project$Internal$Dots$empty;
var author$project$Internal$Events$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Events$custom = author$project$Internal$Events$Config;
var author$project$Internal$Events$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var author$project$Internal$Coordinate$lengthX = function (system) {
	return A2(elm$core$Basics$max, 1, (system.frame.size.width - system.frame.margin.left) - system.frame.margin.right);
};
var author$project$Internal$Coordinate$reachX = function (system) {
	var diff = system.x.max - system.x.min;
	return (diff > 0) ? diff : 1;
};
var author$project$LineChart$Coordinate$scaleSvgX = F2(
	function (system, value) {
		return (value * author$project$Internal$Coordinate$lengthX(system)) / author$project$Internal$Coordinate$reachX(system);
	});
var author$project$LineChart$Coordinate$toSvgX = F2(
	function (system, value) {
		return A2(author$project$LineChart$Coordinate$scaleSvgX, system, value - system.x.min) + system.frame.margin.left;
	});
var author$project$Internal$Events$distanceX = F3(
	function (system, searched, dot) {
		return elm$core$Basics$abs(
			A2(author$project$LineChart$Coordinate$toSvgX, system, dot.x) - A2(author$project$LineChart$Coordinate$toSvgX, system, searched.x));
	});
var author$project$Internal$Events$getNearestXHelp = F3(
	function (points, system, searched) {
		var distanceX_ = A2(author$project$Internal$Events$distanceX, system, searched);
		var getClosest = F2(
			function (point, allClosest) {
				var _n0 = elm$core$List$head(allClosest);
				if (_n0.$ === 'Just') {
					var closest = _n0.a;
					return _Utils_eq(closest.point.x, point.point.x) ? A2(elm$core$List$cons, point, allClosest) : ((_Utils_cmp(
						distanceX_(closest.point),
						distanceX_(point.point)) > 0) ? _List_fromArray(
						[point]) : allClosest);
				} else {
					return _List_fromArray(
						[point]);
				}
			});
		return A3(elm$core$List$foldl, getClosest, _List_Nil, points);
	});
var author$project$LineChart$Coordinate$scaleDataX = F2(
	function (system, value) {
		return (value * author$project$Internal$Coordinate$reachX(system)) / author$project$Internal$Coordinate$lengthX(system);
	});
var author$project$LineChart$Coordinate$toDataX = F2(
	function (system, value) {
		return system.x.min + A2(author$project$LineChart$Coordinate$scaleDataX, system, value - system.frame.margin.left);
	});
var author$project$Internal$Coordinate$lengthY = function (system) {
	return A2(elm$core$Basics$max, 1, (system.frame.size.height - system.frame.margin.bottom) - system.frame.margin.top);
};
var author$project$Internal$Coordinate$reachY = function (system) {
	var diff = system.y.max - system.y.min;
	return (diff > 0) ? diff : 1;
};
var author$project$LineChart$Coordinate$scaleDataY = F2(
	function (system, value) {
		return (value * author$project$Internal$Coordinate$reachY(system)) / author$project$Internal$Coordinate$lengthY(system);
	});
var author$project$LineChart$Coordinate$toDataY = F2(
	function (system, value) {
		return system.y.max - A2(author$project$LineChart$Coordinate$scaleDataY, system, value - system.frame.margin.top);
	});
var author$project$LineChart$Coordinate$toData = F2(
	function (system, point) {
		return {
			x: A2(author$project$LineChart$Coordinate$toDataX, system, point.x),
			y: A2(author$project$LineChart$Coordinate$toDataY, system, point.y)
		};
	});
var author$project$Internal$Events$getNearestX = author$project$Internal$Events$Decoder(
	F3(
		function (points, system, searchedSvg) {
			var searched = A2(author$project$LineChart$Coordinate$toData, system, searchedSvg);
			return A2(
				elm$core$List$map,
				function ($) {
					return $.user;
				},
				A3(author$project$Internal$Events$getNearestXHelp, points, system, searched));
		}));
var author$project$Internal$Events$Event = F2(
	function (a, b) {
		return {$: 'Event', a: a, b: b};
	});
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$svg$Svg$Events$on = elm$html$Html$Events$on;
var author$project$Internal$Events$onMouseLeave = function (msg) {
	return A2(
		author$project$Internal$Events$Event,
		false,
		F2(
			function (_n0, _n1) {
				return A2(
					elm$svg$Svg$Events$on,
					'mouseleave',
					elm$json$Json$Decode$succeed(msg));
			}));
};
var author$project$Internal$Events$Options = F3(
	function (stopPropagation, preventDefault, catchOutsideChart) {
		return {catchOutsideChart: catchOutsideChart, preventDefault: preventDefault, stopPropagation: stopPropagation};
	});
var author$project$Internal$Events$map = F2(
	function (f, _n0) {
		var a = _n0.a;
		return author$project$Internal$Events$Decoder(
			F3(
				function (ps, s, p) {
					return f(
						A3(a, ps, s, p));
				}));
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$float = _Json_decodeFloat;
var debois$elm_dom$DOM$offsetHeight = A2(elm$json$Json$Decode$field, 'offsetHeight', elm$json$Json$Decode$float);
var debois$elm_dom$DOM$offsetWidth = A2(elm$json$Json$Decode$field, 'offsetWidth', elm$json$Json$Decode$float);
var debois$elm_dom$DOM$offsetLeft = A2(elm$json$Json$Decode$field, 'offsetLeft', elm$json$Json$Decode$float);
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					elm$json$Json$Decode$field,
					'offsetParent',
					elm$json$Json$Decode$null(x)),
					A2(elm$json$Json$Decode$field, 'offsetParent', decoder)
				]));
	});
var debois$elm_dom$DOM$offsetTop = A2(elm$json$Json$Decode$field, 'offsetTop', elm$json$Json$Decode$float);
var debois$elm_dom$DOM$scrollLeft = A2(elm$json$Json$Decode$field, 'scrollLeft', elm$json$Json$Decode$float);
var debois$elm_dom$DOM$scrollTop = A2(elm$json$Json$Decode$field, 'scrollTop', elm$json$Json$Decode$float);
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$map4 = _Json_map4;
var debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			elm$json$Json$Decode$andThen,
			function (_n0) {
				var x_ = _n0.a;
				var y_ = _n0.b;
				return A2(
					debois$elm_dom$DOM$offsetParent,
					_Utils_Tuple2(x_, y_),
					A2(debois$elm_dom$DOM$position, x_, y_));
			},
			A5(
				elm$json$Json$Decode$map4,
				F4(
					function (scrollLeftP, scrollTopP, offsetLeftP, offsetTopP) {
						return _Utils_Tuple2((x + offsetLeftP) - scrollLeftP, (y + offsetTopP) - scrollTopP);
					}),
				debois$elm_dom$DOM$scrollLeft,
				debois$elm_dom$DOM$scrollTop,
				debois$elm_dom$DOM$offsetLeft,
				debois$elm_dom$DOM$offsetTop));
	});
var elm$json$Json$Decode$map3 = _Json_map3;
var debois$elm_dom$DOM$boundingClientRect = A4(
	elm$json$Json$Decode$map3,
	F3(
		function (_n0, width, height) {
			var x = _n0.a;
			var y = _n0.b;
			return {height: height, left: x, top: y, width: width};
		}),
	A2(debois$elm_dom$DOM$position, 0, 0),
	debois$elm_dom$DOM$offsetWidth,
	debois$elm_dom$DOM$offsetHeight);
var debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2(elm$json$Json$Decode$field, 'parentElement', decoder);
};
var elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		elm$json$Json$Decode$andThen,
		thunk,
		elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
function author$project$Internal$Events$cyclic$position() {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				debois$elm_dom$DOM$boundingClientRect,
				elm$json$Json$Decode$lazy(
				function (_n0) {
					return debois$elm_dom$DOM$parentElement(
						author$project$Internal$Events$cyclic$position());
				})
			]));
}
try {
	var author$project$Internal$Events$position = author$project$Internal$Events$cyclic$position();
	author$project$Internal$Events$cyclic$position = function () {
		return author$project$Internal$Events$position;
	};
} catch ($) {
throw 'Some top-level definitions from `Internal.Events` are causing infinite recursion:\n\n  ┌─────┐\n  │    position\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var debois$elm_dom$DOM$target = function (decoder) {
	return A2(elm$json$Json$Decode$field, 'target', decoder);
};
var author$project$Internal$Events$toJsonDecoder = F4(
	function (options, data, system, _n0) {
		var decoder = _n0.a;
		var withOptions = function (msg) {
			return {message: msg, preventDefault: options.preventDefault, stopPropagation: options.stopPropagation};
		};
		var handle = F3(
			function (mouseX, mouseY, _n1) {
				var left = _n1.left;
				var top = _n1.top;
				var height = _n1.height;
				var width = _n1.width;
				var y = mouseY - top;
				var x = mouseX - left;
				var widthPercent = width / system.frame.size.width;
				var newSize = {height: height, width: width};
				var heightPercent = height / system.frame.size.height;
				var newMargin = {bottom: system.frame.margin.bottom * heightPercent, left: system.frame.margin.left * widthPercent, right: system.frame.margin.right * widthPercent, top: system.frame.margin.top * heightPercent};
				var newSystem = _Utils_update(
					system,
					{
						frame: {margin: newMargin, size: newSize}
					});
				return A3(
					decoder,
					data,
					newSystem,
					A2(author$project$LineChart$Coordinate$Point, x, y));
			});
		return A2(
			elm$json$Json$Decode$map,
			withOptions,
			A4(
				elm$json$Json$Decode$map3,
				handle,
				A2(elm$json$Json$Decode$field, 'pageX', elm$json$Json$Decode$float),
				A2(elm$json$Json$Decode$field, 'pageY', elm$json$Json$Decode$float),
				debois$elm_dom$DOM$target(author$project$Internal$Events$position)));
	});
var elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var elm$svg$Svg$Events$custom = elm$html$Html$Events$custom;
var author$project$Internal$Events$on = F3(
	function (event, toMsg, decoder) {
		return A2(
			author$project$Internal$Events$Event,
			false,
			F2(
				function (data, system) {
					var defaultOptions = A3(author$project$Internal$Events$Options, false, false, false);
					return A2(
						elm$svg$Svg$Events$custom,
						event,
						A4(
							author$project$Internal$Events$toJsonDecoder,
							defaultOptions,
							data,
							system,
							A2(author$project$Internal$Events$map, toMsg, decoder)));
				}));
	});
var author$project$Internal$Events$onMouseMove = author$project$Internal$Events$on('mousemove');
var author$project$Internal$Events$hoverMany = function (msg) {
	return author$project$Internal$Events$custom(
		_List_fromArray(
			[
				A2(author$project$Internal$Events$onMouseMove, msg, author$project$Internal$Events$getNearestX),
				author$project$Internal$Events$onMouseLeave(
				msg(_List_Nil))
			]));
};
var author$project$LineChart$Events$hoverMany = author$project$Internal$Events$hoverMany;
var author$project$Internal$Grid$Dots = F2(
	function (a, b) {
		return {$: 'Dots', a: a, b: b};
	});
var author$project$Internal$Grid$dots = author$project$Internal$Grid$Dots;
var author$project$LineChart$Grid$dots = author$project$Internal$Grid$dots;
var author$project$Internal$Interpolation$Monotone = {$: 'Monotone'};
var author$project$LineChart$Interpolation$monotone = author$project$Internal$Interpolation$Monotone;
var author$project$Internal$Junk$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Junk$find = F2(
	function (hovered, data) {
		find:
		while (true) {
			if (!hovered.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var first = hovered.a;
				var rest = hovered.b;
				if (A2(
					elm$core$List$any,
					elm$core$Basics$eq(first),
					data)) {
					return elm$core$Maybe$Just(first);
				} else {
					var $temp$hovered = rest,
						$temp$data = data;
					hovered = $temp$hovered;
					data = $temp$data;
					continue find;
				}
			}
		}
	});
var author$project$Internal$Junk$shouldFlip = F2(
	function (system, x) {
		return _Utils_cmp(x - system.x.min, system.x.max - x) > 0;
	});
var author$project$Internal$Junk$standardStyles = _List_fromArray(
	[
		_Utils_Tuple2('padding', '5px'),
		_Utils_Tuple2('min-width', '100px'),
		_Utils_Tuple2('background', 'rgba(255,255,255,0.8)'),
		_Utils_Tuple2('border', '1px solid #d3d3d3'),
		_Utils_Tuple2('border-radius', '5px'),
		_Utils_Tuple2('pointer-events', 'none')
	]);
var author$project$LineChart$Coordinate$scaleSvgY = F2(
	function (system, value) {
		return (value * author$project$Internal$Coordinate$lengthY(system)) / author$project$Internal$Coordinate$reachY(system);
	});
var author$project$LineChart$Coordinate$toSvgY = F2(
	function (system, value) {
		return A2(author$project$LineChart$Coordinate$scaleSvgY, system, system.y.max - value) + system.frame.margin.top;
	});
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var author$project$Internal$Junk$hoverAt = F5(
	function (system, x, y, styles, view) {
		var yPercentage = (A2(author$project$LineChart$Coordinate$toSvgY, system, y) * 100) / system.frame.size.height;
		var space = A2(author$project$Internal$Junk$shouldFlip, system, x) ? (-15) : 15;
		var xPercentage = ((A2(author$project$LineChart$Coordinate$toSvgX, system, x) + space) * 100) / system.frame.size.width;
		var positionStyles = _List_fromArray(
			[
				_Utils_Tuple2(
				'left',
				elm$core$String$fromFloat(xPercentage) + '%'),
				_Utils_Tuple2(
				'top',
				elm$core$String$fromFloat(yPercentage) + '%'),
				_Utils_Tuple2('margin-right', '-400px'),
				_Utils_Tuple2('position', 'absolute'),
				A2(author$project$Internal$Junk$shouldFlip, system, x) ? _Utils_Tuple2('transform', 'translateX(-100%)') : _Utils_Tuple2('transform', 'translateX(0)')
			]);
		var containerStyles = _Utils_ap(
			author$project$Internal$Junk$standardStyles,
			_Utils_ap(positionStyles, styles));
		return A2(
			elm$html$Html$div,
			A2(
				elm$core$List$map,
				function (_n0) {
					var p = _n0.a;
					var v = _n0.b;
					return A2(elm$html$Html$Attributes$style, p, v);
				},
				containerStyles),
			view);
	});
var author$project$Internal$Junk$middle = F2(
	function (r, system) {
		var range = r(system);
		return range.min + ((range.max - range.min) / 2);
	});
var author$project$Internal$Junk$hover = F3(
	function (system, x, styles) {
		var y = A2(
			author$project$Internal$Junk$middle,
			function ($) {
				return $.y;
			},
			system);
		var containerStyles = _Utils_ap(
			_List_fromArray(
				[
					A2(author$project$Internal$Junk$shouldFlip, system, x) ? _Utils_Tuple2('transform', 'translate(-100%, -50%)') : _Utils_Tuple2('transform', 'translate(0, -50%)')
				]),
			styles);
		return A4(author$project$Internal$Junk$hoverAt, system, x, y, containerStyles);
	});
var elm$html$Html$p = _VirtualDom_node('p');
var author$project$Internal$Junk$viewHeader = elm$html$Html$p(
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'margin-top', '3px'),
			A2(elm$html$Html$Attributes$style, 'margin-bottom', '5px'),
			A2(elm$html$Html$Attributes$style, 'padding', '3px'),
			A2(elm$html$Html$Attributes$style, 'border-bottom', '1px solid rgb(163, 163, 163)')
		]));
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Internal$Junk$viewRow = F3(
	function (color, label, value) {
		return A2(
			elm$html$Html$p,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin', '3px'),
					A2(elm$html$Html$Attributes$style, 'color', color)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label + (': ' + value))
				]));
	});
var author$project$Internal$Utils$viewMaybe = F2(
	function (a, view) {
		return A2(
			elm$core$Maybe$withDefault,
			elm$svg$Svg$text(''),
			A2(elm$core$Maybe$map, view, a));
	});
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var avh4$elm_color$Color$toCssString = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	var roundTo = function (x) {
		return elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return elm$core$Basics$round(x * 10000) / 100;
	};
	return elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				elm$core$String$fromFloat(
				pct(r)),
				'%,',
				elm$core$String$fromFloat(
				pct(g)),
				'%,',
				elm$core$String$fromFloat(
				pct(b)),
				'%,',
				elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var author$project$Internal$Junk$hoverManyHtml = F8(
	function (system, toX, toY, formatX, formatY, first, hovered, series) {
		var x = A2(
			elm$core$Maybe$withDefault,
			A2(
				author$project$Internal$Junk$middle,
				function ($) {
					return $.x;
				},
				system),
			toX(first));
		var viewValue = function (_n0) {
			var color = _n0.a;
			var label = _n0.b;
			var data = _n0.c;
			return A2(
				author$project$Internal$Utils$viewMaybe,
				A2(author$project$Internal$Junk$find, hovered, data),
				function (hovered_) {
					return A3(
						author$project$Internal$Junk$viewRow,
						avh4$elm_color$Color$toCssString(color),
						label,
						formatY(hovered_));
				});
		};
		return A4(
			author$project$Internal$Junk$hover,
			system,
			x,
			_List_Nil,
			A2(
				elm$core$List$cons,
				author$project$Internal$Junk$viewHeader(
					_List_fromArray(
						[
							elm$html$Html$text(
							formatX(first))
						])),
				A2(elm$core$List$map, viewValue, series)));
	});
var author$project$Internal$Junk$Layers = F3(
	function (below, above, html) {
		return {above: above, below: below, html: html};
	});
var author$project$Internal$Junk$none = author$project$Internal$Junk$Config(
	F4(
		function (_n0, _n1, _n2, _n3) {
			return A3(author$project$Internal$Junk$Layers, _List_Nil, _List_Nil, _List_Nil);
		}));
var author$project$Internal$Path$Line = function (a) {
	return {$: 'Line', a: a};
};
var author$project$Internal$Path$Move = function (a) {
	return {$: 'Move', a: a};
};
var author$project$Internal$Path$join = function (commands) {
	return A2(elm$core$String$join, ' ', commands);
};
var author$project$Internal$Path$bool = function (bool_) {
	return bool_ ? '1' : '0';
};
var author$project$Internal$Path$point = function (point_) {
	return elm$core$String$fromFloat(point_.x) + (' ' + elm$core$String$fromFloat(point_.y));
};
var author$project$Internal$Path$points = function (points_) {
	return A2(
		elm$core$String$join,
		',',
		A2(elm$core$List$map, author$project$Internal$Path$point, points_));
};
var author$project$Internal$Path$toString = function (command) {
	switch (command.$) {
		case 'Close':
			return 'Z';
		case 'Move':
			var p = command.a;
			return 'M' + author$project$Internal$Path$point(p);
		case 'Line':
			var p = command.a;
			return 'L' + author$project$Internal$Path$point(p);
		case 'Horizontal':
			var x = command.a;
			return 'H' + elm$core$String$fromFloat(x);
		case 'Vertical':
			var y = command.a;
			return 'V' + elm$core$String$fromFloat(y);
		case 'CubicBeziers':
			var c1 = command.a;
			var c2 = command.b;
			var p = command.c;
			return 'C' + author$project$Internal$Path$points(
				_List_fromArray(
					[c1, c2, p]));
		case 'CubicBeziersShort':
			var c1 = command.a;
			var p = command.b;
			return 'Q' + author$project$Internal$Path$points(
				_List_fromArray(
					[c1, p]));
		case 'QuadraticBeziers':
			var c1 = command.a;
			var p = command.b;
			return 'Q' + author$project$Internal$Path$points(
				_List_fromArray(
					[c1, p]));
		case 'QuadraticBeziersShort':
			var p = command.a;
			return 'T' + author$project$Internal$Path$point(p);
		default:
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var p = command.f;
			return 'A' + author$project$Internal$Path$join(
				_List_fromArray(
					[
						elm$core$String$fromFloat(rx),
						elm$core$String$fromFloat(ry),
						elm$core$String$fromInt(xAxisRotation),
						author$project$Internal$Path$bool(largeArcFlag),
						author$project$Internal$Path$bool(sweepFlag),
						author$project$Internal$Path$point(p)
					]));
	}
};
var author$project$Internal$Path$Arc = F6(
	function (a, b, c, d, e, f) {
		return {$: 'Arc', a: a, b: b, c: c, d: d, e: e, f: f};
	});
var author$project$Internal$Path$Close = {$: 'Close'};
var author$project$Internal$Path$CubicBeziers = F3(
	function (a, b, c) {
		return {$: 'CubicBeziers', a: a, b: b, c: c};
	});
var author$project$Internal$Path$CubicBeziersShort = F2(
	function (a, b) {
		return {$: 'CubicBeziersShort', a: a, b: b};
	});
var author$project$Internal$Path$Horizontal = function (a) {
	return {$: 'Horizontal', a: a};
};
var author$project$Internal$Path$QuadraticBeziers = F2(
	function (a, b) {
		return {$: 'QuadraticBeziers', a: a, b: b};
	});
var author$project$Internal$Path$QuadraticBeziersShort = function (a) {
	return {$: 'QuadraticBeziersShort', a: a};
};
var author$project$Internal$Path$Vertical = function (a) {
	return {$: 'Vertical', a: a};
};
var author$project$LineChart$Coordinate$toSvg = F2(
	function (system, point) {
		return {
			x: A2(author$project$LineChart$Coordinate$toSvgX, system, point.x),
			y: A2(author$project$LineChart$Coordinate$toSvgY, system, point.y)
		};
	});
var author$project$Internal$Path$translate = F2(
	function (system, command) {
		switch (command.$) {
			case 'Move':
				var p = command.a;
				return author$project$Internal$Path$Move(
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			case 'Line':
				var p = command.a;
				return author$project$Internal$Path$Line(
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			case 'Horizontal':
				var x = command.a;
				return author$project$Internal$Path$Horizontal(
					A2(author$project$LineChart$Coordinate$toSvgX, system, x));
			case 'Vertical':
				var y = command.a;
				return author$project$Internal$Path$Vertical(
					A2(author$project$LineChart$Coordinate$toSvgY, system, y));
			case 'CubicBeziers':
				var c1 = command.a;
				var c2 = command.b;
				var p = command.c;
				return A3(
					author$project$Internal$Path$CubicBeziers,
					A2(author$project$LineChart$Coordinate$toSvg, system, c1),
					A2(author$project$LineChart$Coordinate$toSvg, system, c2),
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			case 'CubicBeziersShort':
				var c1 = command.a;
				var p = command.b;
				return A2(
					author$project$Internal$Path$CubicBeziersShort,
					A2(author$project$LineChart$Coordinate$toSvg, system, c1),
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			case 'QuadraticBeziers':
				var c1 = command.a;
				var p = command.b;
				return A2(
					author$project$Internal$Path$QuadraticBeziers,
					A2(author$project$LineChart$Coordinate$toSvg, system, c1),
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			case 'QuadraticBeziersShort':
				var p = command.a;
				return author$project$Internal$Path$QuadraticBeziersShort(
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			case 'Arc':
				var rx = command.a;
				var ry = command.b;
				var xAxisRotation = command.c;
				var largeArcFlag = command.d;
				var sweepFlag = command.e;
				var p = command.f;
				return A6(
					author$project$Internal$Path$Arc,
					rx,
					ry,
					xAxisRotation,
					largeArcFlag,
					sweepFlag,
					A2(author$project$LineChart$Coordinate$toSvg, system, p));
			default:
				return author$project$Internal$Path$Close;
		}
	});
var author$project$Internal$Path$description = F2(
	function (system, commands) {
		return author$project$Internal$Path$join(
			A2(
				elm$core$List$map,
				A2(
					elm$core$Basics$composeR,
					author$project$Internal$Path$translate(system),
					author$project$Internal$Path$toString),
				commands));
	});
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var author$project$Internal$Path$viewPath = function (attributes) {
	return A2(elm$svg$Svg$path, attributes, _List_Nil);
};
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var author$project$Internal$Path$view = F3(
	function (system, attributes, commands) {
		return author$project$Internal$Path$viewPath(
			_Utils_ap(
				attributes,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$d(
						A2(author$project$Internal$Path$description, system, commands))
					])));
	});
var author$project$Internal$Utils$concat = F3(
	function (first, second, third) {
		return _Utils_ap(
			first,
			_Utils_ap(second, third));
	});
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var author$project$Internal$Svg$vertical = F5(
	function (system, userAttributes, x, y1, y2) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A3(
			author$project$Internal$Path$view,
			system,
			attributes,
			_List_fromArray(
				[
					author$project$Internal$Path$Move(
					{x: x, y: y1}),
					author$project$Internal$Path$Line(
					{x: x, y: y1}),
					author$project$Internal$Path$Line(
					{x: x, y: y2})
				]));
	});
var author$project$Internal$Svg$verticalGrid = F3(
	function (system, userAttributes, x) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A5(author$project$Internal$Svg$vertical, system, attributes, x, system.y.min, system.y.max);
	});
var author$project$Internal$Junk$hoverMany = F3(
	function (hovered, formatX, formatY) {
		if (!hovered.b) {
			return author$project$Internal$Junk$none;
		} else {
			var first = hovered.a;
			var rest = hovered.b;
			return author$project$Internal$Junk$Config(
				F4(
					function (series, toX, toY, system) {
						var xValue = A2(
							elm$core$Maybe$withDefault,
							0,
							toX(first));
						return {
							above: _List_Nil,
							below: _List_fromArray(
								[
									A3(author$project$Internal$Svg$verticalGrid, system, _List_Nil, xValue)
								]),
							html: _List_fromArray(
								[
									A8(author$project$Internal$Junk$hoverManyHtml, system, toX, toY, formatX, formatY, first, hovered, series)
								])
						};
					}));
		}
	});
var author$project$LineChart$Junk$hoverMany = author$project$Internal$Junk$hoverMany;
var author$project$Internal$Legends$Grouped = F2(
	function (a, b) {
		return {$: 'Grouped', a: a, b: b};
	});
var author$project$Internal$Svg$Transfrom = F2(
	function (a, b) {
		return {$: 'Transfrom', a: a, b: b};
	});
var author$project$Internal$Svg$offset = F2(
	function (x, y) {
		return A2(author$project$Internal$Svg$Transfrom, x, y);
	});
var author$project$Internal$Svg$addPosition = F2(
	function (_n0, _n1) {
		var x = _n0.a;
		var y = _n0.b;
		var xf = _n1.a;
		var yf = _n1.b;
		return A2(author$project$Internal$Svg$Transfrom, xf + x, yf + y);
	});
var author$project$Internal$Svg$toPosition = A2(
	elm$core$List$foldr,
	author$project$Internal$Svg$addPosition,
	A2(author$project$Internal$Svg$Transfrom, 0, 0));
var elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var author$project$Internal$Svg$transform = function (translations) {
	var _n0 = author$project$Internal$Svg$toPosition(translations);
	var x = _n0.a;
	var y = _n0.b;
	return elm$svg$Svg$Attributes$transform(
		'translate(' + (elm$core$String$fromFloat(x) + (', ' + (elm$core$String$fromFloat(y) + ')'))));
};
var elm$svg$Svg$g = elm$svg$Svg$trustedNode('g');
var elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var author$project$Internal$Legends$defaultLegend = F2(
	function (index, _n0) {
		var sample = _n0.sample;
		var label = _n0.label;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__legend'),
					author$project$Internal$Svg$transform(
					_List_fromArray(
						[
							A2(author$project$Internal$Svg$offset, 20, index * 20)
						]))
				]),
			_List_fromArray(
				[
					sample,
					A2(
					elm$svg$Svg$g,
					_List_fromArray(
						[
							author$project$Internal$Svg$transform(
							_List_fromArray(
								[
									A2(author$project$Internal$Svg$offset, 40, 4)
								]))
						]),
					_List_fromArray(
						[
							A2(author$project$Internal$Svg$label, 'inherit', label)
						]))
				]));
	});
var author$project$Internal$Svg$move = F3(
	function (system, x, y) {
		return A2(
			author$project$Internal$Svg$Transfrom,
			A2(author$project$LineChart$Coordinate$toSvgX, system, x),
			A2(author$project$LineChart$Coordinate$toSvgY, system, y));
	});
var author$project$Internal$Legends$defaultLegends = F8(
	function (toX, toY, offsetX, offsetY, hovered, _arguments, system, legends) {
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__legends'),
					author$project$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(
							author$project$Internal$Svg$move,
							system,
							toX(system.x),
							toY(system.y)),
							A2(author$project$Internal$Svg$offset, offsetX, offsetY)
						]))
				]),
			A2(elm$core$List$indexedMap, author$project$Internal$Legends$defaultLegend, legends));
	});
var author$project$Internal$Legends$hover = function (data) {
	return A2(
		author$project$Internal$Legends$Grouped,
		30,
		A5(
			author$project$Internal$Legends$defaultLegends,
			function ($) {
				return $.max;
			},
			function ($) {
				return $.max;
			},
			0,
			10,
			data));
};
var author$project$Internal$Legends$default = author$project$Internal$Legends$hover(_List_Nil);
var author$project$LineChart$Legends$default = author$project$Internal$Legends$default;
var author$project$Internal$Line$Config = function (a) {
	return {$: 'Config', a: a};
};
var author$project$Internal$Line$Style = function (a) {
	return {$: 'Style', a: a};
};
var author$project$Internal$Line$style = F2(
	function (width, color_) {
		return author$project$Internal$Line$Style(
			{color: color_, width: width});
	});
var author$project$Internal$Line$default = author$project$Internal$Line$Config(
	function (_n0) {
		return A2(author$project$Internal$Line$style, 1, elm$core$Basics$identity);
	});
var author$project$LineChart$Line$default = author$project$Internal$Line$default;
var author$project$Area$chartConfig = function (model) {
	return {
		area: author$project$LineChart$Area$stacked(0.5),
		container: author$project$Area$containerConfig,
		dots: author$project$LineChart$Dots$custom(
			A2(author$project$LineChart$Dots$empty, 5, 1)),
		events: author$project$LineChart$Events$hoverMany(author$project$Area$Hint),
		grid: A2(author$project$LineChart$Grid$dots, 1, author$project$LineChart$Colors$gray),
		interpolation: author$project$LineChart$Interpolation$monotone,
		intersection: author$project$LineChart$Axis$Intersection$default,
		junk: A3(author$project$LineChart$Junk$hoverMany, model.hinted, author$project$Area$formatX, author$project$Area$formatY),
		legends: author$project$LineChart$Legends$default,
		line: author$project$LineChart$Line$default,
		x: A4(
			author$project$LineChart$Axis$time,
			elm$time$Time$utc,
			1270,
			'time',
			A2(
				elm$core$Basics$composeL,
				A2(elm$core$Basics$composeL, elm$core$Basics$toFloat, elm$time$Time$posixToMillis),
				function ($) {
					return $.time;
				})),
		y: A3(
			author$project$LineChart$Axis$default,
			450,
			'velocity',
			function ($) {
				return $.velocity;
			})
	};
};
var author$project$Internal$Line$Series = function (a) {
	return {$: 'Series', a: a};
};
var author$project$Internal$Line$SeriesConfig = F5(
	function (color, shape, dashing, label, data) {
		return {color: color, dashing: dashing, data: data, label: label, shape: shape};
	});
var author$project$Internal$Line$line = F4(
	function (color_, shape_, label_, data_) {
		return author$project$Internal$Line$Series(
			A5(author$project$Internal$Line$SeriesConfig, color_, shape_, _List_Nil, label_, data_));
	});
var author$project$LineChart$line = author$project$Internal$Line$line;
var author$project$Internal$Axis$variable = function (_n0) {
	var config = _n0.a;
	return config.variable;
};
var author$project$Internal$Utils$toChartAreaId = function (id) {
	return 'chart__chart-area--' + id;
};
var elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var author$project$Internal$Svg$withinChartArea = function (_n0) {
	var id = _n0.id;
	return elm$svg$Svg$Attributes$clipPath(
		'url(#' + (author$project$Internal$Utils$toChartAreaId(id) + ')'));
};
var elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var author$project$Internal$Axis$attributesLine = F2(
	function (system, _n0) {
		var events = _n0.events;
		var width = _n0.width;
		var color = _n0.color;
		return _Utils_ap(
			events,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(width)),
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(color)),
					author$project$Internal$Svg$withinChartArea(system)
				]));
	});
var author$project$Internal$Svg$horizontal = F5(
	function (system, userAttributes, y, x1, x2) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A3(
			author$project$Internal$Path$view,
			system,
			attributes,
			_List_fromArray(
				[
					author$project$Internal$Path$Move(
					{x: x1, y: y}),
					author$project$Internal$Path$Line(
					{x: x1, y: y}),
					author$project$Internal$Path$Line(
					{x: x2, y: y})
				]));
	});
var author$project$Internal$Axis$viewHorizontalAxisLine = F3(
	function (system, axisPosition, config) {
		return A5(
			author$project$Internal$Svg$horizontal,
			system,
			A2(author$project$Internal$Axis$attributesLine, system, config),
			axisPosition,
			config.start,
			config.end);
	});
var author$project$Internal$Axis$attributesTick = function (_n0) {
	var width = _n0.width;
	var color = _n0.color;
	return _List_fromArray(
		[
			elm$svg$Svg$Attributes$strokeWidth(
			elm$core$String$fromFloat(width)),
			elm$svg$Svg$Attributes$stroke(
			avh4$elm_color$Color$toCssString(color))
		]);
};
var author$project$Internal$Axis$Tick$isPositive = function (direction) {
	if (direction.$ === 'Positive') {
		return true;
	} else {
		return false;
	}
};
var author$project$Internal$Axis$lengthOfTick = function (_n0) {
	var length = _n0.length;
	var direction = _n0.direction;
	return author$project$Internal$Axis$Tick$isPositive(direction) ? (-length) : length;
};
var author$project$Internal$Svg$Middle = {$: 'Middle'};
var author$project$Internal$Svg$anchorStyle = function (anchor) {
	var anchorString = function () {
		switch (anchor.$) {
			case 'Start':
				return 'start';
			case 'Middle':
				return 'middle';
			default:
				return 'end';
		}
	}();
	return elm$svg$Svg$Attributes$style('text-anchor: ' + (anchorString + ';'));
};
var author$project$Internal$Axis$viewHorizontalLabel = F4(
	function (system, _n0, position, view) {
		var direction = _n0.direction;
		var length = _n0.length;
		var yOffset = author$project$Internal$Axis$Tick$isPositive(direction) ? ((-5) - length) : (15 + length);
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					author$project$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(author$project$Internal$Svg$move, system, position.x, position.y),
							A2(author$project$Internal$Svg$offset, 0, yOffset)
						])),
					author$project$Internal$Svg$anchorStyle(author$project$Internal$Svg$Middle)
				]),
			_List_fromArray(
				[view]));
	});
var elm$svg$Svg$line = elm$svg$Svg$trustedNode('line');
var elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var author$project$Internal$Svg$xTick = F5(
	function (system, height, userAttributes, y, x) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray))
				]),
			userAttributes,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgX, system, x))),
					elm$svg$Svg$Attributes$x2(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgX, system, x))),
					elm$svg$Svg$Attributes$y1(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgY, system, y))),
					elm$svg$Svg$Attributes$y2(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgY, system, y) + height))
				]));
		return A2(elm$svg$Svg$line, attributes, _List_Nil);
	});
var author$project$Internal$Axis$viewHorizontalTick = F3(
	function (system, point, tick) {
		var x = point.x;
		var y = point.y;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__tick')
				]),
			_List_fromArray(
				[
					A5(
					author$project$Internal$Svg$xTick,
					system,
					author$project$Internal$Axis$lengthOfTick(tick),
					author$project$Internal$Axis$attributesTick(tick),
					y,
					x),
					A2(
					author$project$Internal$Utils$viewMaybe,
					tick.label,
					A3(author$project$Internal$Axis$viewHorizontalLabel, system, tick, point))
				]));
	});
var author$project$Internal$Svg$Start = {$: 'Start'};
var author$project$Internal$Axis$viewHorizontalTitle = F3(
	function (system, at, _n0) {
		var title = _n0.title;
		var position = at(
			A2(title.position, system.xData, system.x));
		var _n1 = title.offset;
		var xOffset = _n1.a;
		var yOffset = _n1.b;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__title'),
					author$project$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(author$project$Internal$Svg$move, system, position.x, position.y),
							A2(author$project$Internal$Svg$offset, xOffset + 15, yOffset + 5)
						])),
					author$project$Internal$Svg$anchorStyle(author$project$Internal$Svg$Start)
				]),
			_List_fromArray(
				[title.view]));
	});
var author$project$Internal$Axis$Intersection$getY = function (_n0) {
	var func = _n0.a;
	return A2(
		elm$core$Basics$composeL,
		function ($) {
			return $.y;
		},
		func);
};
var author$project$Internal$Axis$Line$config = function (_n0) {
	var config_ = _n0.a;
	return config_;
};
var author$project$Internal$Axis$Tick$properties = function (_n0) {
	var properties_ = _n0.a;
	return properties_;
};
var author$project$Internal$Axis$Ticks$ticks = F3(
	function (dataRange, range, _n0) {
		var values = _n0.a;
		return A2(
			elm$core$List$map,
			author$project$Internal$Axis$Tick$properties,
			A2(values, dataRange, range));
	});
var author$project$Internal$Axis$Title$config = function (_n0) {
	var title = _n0.a;
	return title;
};
var author$project$Internal$Axis$viewHorizontal = F3(
	function (system, intersection, _n0) {
		var config = _n0.a;
		var viewConfig = {
			intersection: A2(author$project$Internal$Axis$Intersection$getY, intersection, system),
			line: A3(author$project$Internal$Axis$Line$config, config.axisLine, system.xData, system.x),
			ticks: A3(author$project$Internal$Axis$Ticks$ticks, system.xData, system.x, config.ticks),
			title: author$project$Internal$Axis$Title$config(config.title)
		};
		var viewAxisLine = A2(author$project$Internal$Axis$viewHorizontalAxisLine, system, viewConfig.intersection);
		var at = function (x) {
			return {x: x, y: viewConfig.intersection};
		};
		var viewTick = function (tick) {
			return A3(
				author$project$Internal$Axis$viewHorizontalTick,
				system,
				at(tick.position),
				tick);
		};
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__axis--horizontal')
				]),
			_List_fromArray(
				[
					A3(author$project$Internal$Axis$viewHorizontalTitle, system, at, viewConfig),
					viewAxisLine(viewConfig.line),
					A2(
					elm$svg$Svg$g,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$class('chart__ticks')
						]),
					A2(elm$core$List$map, viewTick, viewConfig.ticks))
				]));
	});
var author$project$Internal$Axis$viewVerticalAxisLine = F3(
	function (system, axisPosition, config) {
		return A5(
			author$project$Internal$Svg$vertical,
			system,
			A2(author$project$Internal$Axis$attributesLine, system, config),
			axisPosition,
			config.start,
			config.end);
	});
var author$project$Internal$Svg$End = {$: 'End'};
var author$project$Internal$Axis$viewVerticalLabel = F4(
	function (system, _n0, position, view) {
		var direction = _n0.direction;
		var length = _n0.length;
		var xOffset = author$project$Internal$Axis$Tick$isPositive(direction) ? (5 + length) : ((-5) - length);
		var anchor = author$project$Internal$Axis$Tick$isPositive(direction) ? author$project$Internal$Svg$Start : author$project$Internal$Svg$End;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					author$project$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(author$project$Internal$Svg$move, system, position.x, position.y),
							A2(author$project$Internal$Svg$offset, xOffset, 5)
						])),
					author$project$Internal$Svg$anchorStyle(anchor)
				]),
			_List_fromArray(
				[view]));
	});
var author$project$Internal$Svg$yTick = F5(
	function (system, width, userAttributes, x, y) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__tick'),
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray))
				]),
			userAttributes,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgX, system, x))),
					elm$svg$Svg$Attributes$x2(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgX, system, x) - width)),
					elm$svg$Svg$Attributes$y1(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgY, system, y))),
					elm$svg$Svg$Attributes$y2(
					elm$core$String$fromFloat(
						A2(author$project$LineChart$Coordinate$toSvgY, system, y)))
				]));
		return A2(elm$svg$Svg$line, attributes, _List_Nil);
	});
var author$project$Internal$Axis$viewVerticalTick = F3(
	function (system, point, tick) {
		var x = point.x;
		var y = point.y;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__tick')
				]),
			_List_fromArray(
				[
					A5(
					author$project$Internal$Svg$yTick,
					system,
					author$project$Internal$Axis$lengthOfTick(tick),
					author$project$Internal$Axis$attributesTick(tick),
					x,
					y),
					A2(
					author$project$Internal$Utils$viewMaybe,
					tick.label,
					A3(author$project$Internal$Axis$viewVerticalLabel, system, tick, point))
				]));
	});
var author$project$Internal$Axis$viewVerticalTitle = F3(
	function (system, at, _n0) {
		var title = _n0.title;
		var position = at(
			A2(title.position, system.yData, system.y));
		var _n1 = title.offset;
		var xOffset = _n1.a;
		var yOffset = _n1.b;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__title'),
					author$project$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(author$project$Internal$Svg$move, system, position.x, position.y),
							A2(author$project$Internal$Svg$offset, xOffset + 2, yOffset - 10)
						])),
					author$project$Internal$Svg$anchorStyle(author$project$Internal$Svg$End)
				]),
			_List_fromArray(
				[title.view]));
	});
var author$project$Internal$Axis$Intersection$getX = function (_n0) {
	var func = _n0.a;
	return A2(
		elm$core$Basics$composeL,
		function ($) {
			return $.x;
		},
		func);
};
var author$project$Internal$Axis$viewVertical = F3(
	function (system, intersection, _n0) {
		var config = _n0.a;
		var viewConfig = {
			intersection: A2(author$project$Internal$Axis$Intersection$getX, intersection, system),
			line: A3(author$project$Internal$Axis$Line$config, config.axisLine, system.yData, system.y),
			ticks: A3(author$project$Internal$Axis$Ticks$ticks, system.yData, system.y, config.ticks),
			title: author$project$Internal$Axis$Title$config(config.title)
		};
		var viewAxisLine = A2(author$project$Internal$Axis$viewVerticalAxisLine, system, viewConfig.intersection);
		var at = function (y) {
			return {x: viewConfig.intersection, y: y};
		};
		var viewTick = function (tick) {
			return A3(
				author$project$Internal$Axis$viewVerticalTick,
				system,
				at(tick.position),
				tick);
		};
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__axis--vertical')
				]),
			_List_fromArray(
				[
					A3(author$project$Internal$Axis$viewVerticalTitle, system, at, viewConfig),
					viewAxisLine(viewConfig.line),
					A2(
					elm$svg$Svg$g,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$class('chart__ticks')
						]),
					A2(elm$core$List$map, viewTick, viewConfig.ticks))
				]));
	});
var author$project$Internal$Container$properties = F2(
	function (f, _n0) {
		var properties_ = _n0.a;
		return f(properties_);
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var author$project$Internal$Events$toContainerAttributes = F3(
	function (data, system, _n0) {
		var events = _n0.a;
		var order = function (_n1) {
			var outside = _n1.a;
			var event = _n1.b;
			return outside ? elm$core$Maybe$Just(
				A2(event, data, system)) : elm$core$Maybe$Nothing;
		};
		return A2(elm$core$List$filterMap, order, events);
	});
var author$project$Internal$Axis$ticks = function (_n0) {
	var config = _n0.a;
	return config.ticks;
};
var elm$svg$Svg$circle = elm$svg$Svg$trustedNode('circle');
var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var author$project$Internal$Svg$gridDot = F3(
	function (radius, color, point) {
		return A2(
			elm$svg$Svg$circle,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$cx(
					elm$core$String$fromFloat(point.x)),
					elm$svg$Svg$Attributes$cy(
					elm$core$String$fromFloat(point.y)),
					elm$svg$Svg$Attributes$r(
					elm$core$String$fromFloat(radius)),
					elm$svg$Svg$Attributes$fill(
					avh4$elm_color$Color$toCssString(color))
				]),
			_List_Nil);
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var author$project$Internal$Grid$viewDots = F5(
	function (system, verticals, horizontals, radius, color) {
		var dot = F2(
			function (x, y) {
				return A2(
					author$project$LineChart$Coordinate$toSvg,
					system,
					A2(author$project$LineChart$Coordinate$Point, x, y));
			});
		var dots_ = function (g) {
			return A2(
				elm$core$List$map,
				dot(g),
				horizontals);
		};
		var alldots = A2(elm$core$List$concatMap, dots_, verticals);
		return A2(
			elm$core$List$map,
			A2(author$project$Internal$Svg$gridDot, radius, color),
			alldots);
	});
var author$project$Internal$Svg$horizontalGrid = F3(
	function (system, userAttributes, y) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A5(author$project$Internal$Svg$horizontal, system, attributes, y, system.x.min, system.x.max);
	});
var author$project$Internal$Grid$viewLines = F5(
	function (system, verticals, horizontals, width, color) {
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$strokeWidth(
				elm$core$String$fromFloat(width)),
				elm$svg$Svg$Attributes$stroke(
				avh4$elm_color$Color$toCssString(color))
			]);
		return _Utils_ap(
			A2(
				elm$core$List$map,
				A2(author$project$Internal$Svg$horizontalGrid, system, attributes),
				horizontals),
			A2(
				elm$core$List$map,
				A2(author$project$Internal$Svg$verticalGrid, system, attributes),
				verticals));
	});
var author$project$Internal$Grid$view = F4(
	function (system, xAxis, yAxis, grid) {
		var hasGrid = function (tick) {
			return tick.grid ? elm$core$Maybe$Just(tick.position) : elm$core$Maybe$Nothing;
		};
		var horizontals = A2(
			elm$core$List$filterMap,
			hasGrid,
			A3(
				author$project$Internal$Axis$Ticks$ticks,
				system.yData,
				system.y,
				author$project$Internal$Axis$ticks(yAxis)));
		var verticals = A2(
			elm$core$List$filterMap,
			hasGrid,
			A3(
				author$project$Internal$Axis$Ticks$ticks,
				system.xData,
				system.x,
				author$project$Internal$Axis$ticks(xAxis)));
		if (grid.$ === 'Dots') {
			var radius = grid.a;
			var color = grid.b;
			return A5(author$project$Internal$Grid$viewDots, system, verticals, horizontals, radius, color);
		} else {
			var width = grid.a;
			var color = grid.b;
			return A5(author$project$Internal$Grid$viewLines, system, verticals, horizontals, width, color);
		}
	});
var author$project$Internal$Junk$addBelow = F2(
	function (below, layers) {
		return _Utils_update(
			layers,
			{
				below: _Utils_ap(below, layers.below)
			});
	});
var author$project$Internal$Junk$getLayers = F5(
	function (series, toX, toY, system, _n0) {
		var toLayers = _n0.a;
		return A4(toLayers, series, toX, toY, system);
	});
var author$project$Internal$Line$label = function (_n0) {
	var config = _n0.a;
	return config.label;
};
var author$project$Internal$Legends$viewFree = F5(
	function (system, placement, viewLabel, line, data) {
		var _n0 = function () {
			if (placement.$ === 'Beginning') {
				return _Utils_Tuple3(data, author$project$Internal$Svg$End, -10);
			} else {
				return _Utils_Tuple3(
					elm$core$List$reverse(data),
					author$project$Internal$Svg$Start,
					10);
			}
		}();
		var orderedPoints = _n0.a;
		var anchor = _n0.b;
		var xOffset = _n0.c;
		var transform = function (_n3) {
			var x = _n3.x;
			var y = _n3.y;
			return author$project$Internal$Svg$transform(
				_List_fromArray(
					[
						A3(author$project$Internal$Svg$move, system, x, y),
						A2(author$project$Internal$Svg$offset, xOffset, 3)
					]));
		};
		var viewLegend = function (_n2) {
			var point = _n2.point;
			return A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						transform(point),
						author$project$Internal$Svg$anchorStyle(anchor)
					]),
				_List_fromArray(
					[
						viewLabel(
						author$project$Internal$Line$label(line))
					]));
		};
		return A2(
			author$project$Internal$Utils$viewMaybe,
			elm$core$List$head(orderedPoints),
			viewLegend);
	});
var author$project$Internal$Legends$viewFrees = F3(
	function (_n0, placement, view_) {
		var system = _n0.system;
		var lines = _n0.lines;
		var data = _n0.data;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__legends')
				]),
			A3(
				elm$core$List$map2,
				A3(author$project$Internal$Legends$viewFree, system, placement, view_),
				lines,
				data));
	});
var elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var author$project$Internal$Dots$varietyAttributes = F2(
	function (color, variety) {
		switch (variety.$) {
			case 'Empty':
				var width = variety.a;
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$stroke(
						avh4$elm_color$Color$toCssString(color)),
						elm$svg$Svg$Attributes$strokeWidth(
						elm$core$String$fromInt(width)),
						elm$svg$Svg$Attributes$fill('white')
					]);
			case 'Aura':
				var width = variety.a;
				var opacity = variety.b;
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$stroke(
						avh4$elm_color$Color$toCssString(color)),
						elm$svg$Svg$Attributes$strokeWidth(
						elm$core$String$fromInt(width)),
						elm$svg$Svg$Attributes$strokeOpacity(
						elm$core$String$fromFloat(opacity)),
						elm$svg$Svg$Attributes$fill(
						avh4$elm_color$Color$toCssString(color))
					]);
			case 'Disconnected':
				var width = variety.a;
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$stroke('white'),
						elm$svg$Svg$Attributes$strokeWidth(
						elm$core$String$fromInt(width)),
						elm$svg$Svg$Attributes$fill(
						avh4$elm_color$Color$toCssString(color))
					]);
			default:
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$fill(
						avh4$elm_color$Color$toCssString(color))
					]);
		}
	});
var elm$core$Basics$pi = _Basics_pi;
var elm$core$Basics$sqrt = _Basics_sqrt;
var author$project$Internal$Dots$viewCircle = F5(
	function (events, variety, color, area, point) {
		var radius = elm$core$Basics$sqrt(area / elm$core$Basics$pi);
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$cx(
				elm$core$String$fromFloat(point.x)),
				elm$svg$Svg$Attributes$cy(
				elm$core$String$fromFloat(point.y)),
				elm$svg$Svg$Attributes$r(
				elm$core$String$fromFloat(radius))
			]);
		return A2(
			elm$svg$Svg$circle,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(author$project$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var author$project$Internal$Dots$pathPlus = F2(
	function (area, point) {
		var side = elm$core$Basics$sqrt(area / 5);
		var r6 = side / 2;
		var r3 = side;
		var commands = _List_fromArray(
			[
				'M' + (elm$core$String$fromFloat(point.x - r6) + (' ' + elm$core$String$fromFloat((point.y - r3) - r6))),
				'v' + elm$core$String$fromFloat(r3),
				'h' + elm$core$String$fromFloat(-r3),
				'v' + elm$core$String$fromFloat(r3),
				'h' + elm$core$String$fromFloat(r3),
				'v' + elm$core$String$fromFloat(r3),
				'h' + elm$core$String$fromFloat(r3),
				'v' + elm$core$String$fromFloat(-r3),
				'h' + elm$core$String$fromFloat(r3),
				'v' + elm$core$String$fromFloat(-r3),
				'h' + elm$core$String$fromFloat(-r3),
				'v' + elm$core$String$fromFloat(-r3),
				'h' + elm$core$String$fromFloat(-r3),
				'v' + elm$core$String$fromFloat(r3)
			]);
		return A2(elm$core$String$join, ' ', commands);
	});
var author$project$Internal$Dots$viewCross = F5(
	function (events, variety, color, area, point) {
		var rotation = 'rotate(45 ' + (elm$core$String$fromFloat(point.x) + (' ' + (elm$core$String$fromFloat(point.y) + ')')));
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$d(
				A2(author$project$Internal$Dots$pathPlus, area, point)),
				elm$svg$Svg$Attributes$transform(rotation)
			]);
		return A2(
			elm$svg$Svg$path,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(author$project$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var elm$svg$Svg$rect = elm$svg$Svg$trustedNode('rect');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var author$project$Internal$Dots$viewDiamond = F5(
	function (events, variety, color, area, point) {
		var side = elm$core$Basics$sqrt(area);
		var rotation = 'rotate(45 ' + (elm$core$String$fromFloat(point.x) + (' ' + (elm$core$String$fromFloat(point.y) + ')')));
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x(
				elm$core$String$fromFloat(point.x - (side / 2))),
				elm$svg$Svg$Attributes$y(
				elm$core$String$fromFloat(point.y - (side / 2))),
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(side)),
				elm$svg$Svg$Attributes$height(
				elm$core$String$fromFloat(side)),
				elm$svg$Svg$Attributes$transform(rotation)
			]);
		return A2(
			elm$svg$Svg$rect,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(author$project$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var author$project$Internal$Dots$viewPlus = F5(
	function (events, variety, color, area, point) {
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$d(
				A2(author$project$Internal$Dots$pathPlus, area, point))
			]);
		return A2(
			elm$svg$Svg$path,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(author$project$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var author$project$Internal$Dots$viewSquare = F5(
	function (events, variety, color, area, point) {
		var side = elm$core$Basics$sqrt(area);
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x(
				elm$core$String$fromFloat(point.x - (side / 2))),
				elm$svg$Svg$Attributes$y(
				elm$core$String$fromFloat(point.y - (side / 2))),
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(side)),
				elm$svg$Svg$Attributes$height(
				elm$core$String$fromFloat(side))
			]);
		return A2(
			elm$svg$Svg$rect,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(author$project$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * elm$core$Basics$pi) / 180;
};
var elm$core$Basics$tan = _Basics_tan;
var author$project$Internal$Dots$pathTriangle = F2(
	function (area, point) {
		var side = elm$core$Basics$sqrt(
			(area * 4) / elm$core$Basics$sqrt(3));
		var height = (elm$core$Basics$sqrt(3) * side) / 2;
		var fromMiddle = height - ((elm$core$Basics$tan(
			elm$core$Basics$degrees(30)) * side) / 2);
		var commands = _List_fromArray(
			[
				'M' + (elm$core$String$fromFloat(point.x) + (' ' + elm$core$String$fromFloat(point.y - fromMiddle))),
				'l' + (elm$core$String$fromFloat((-side) / 2) + (' ' + elm$core$String$fromFloat(height))),
				'h' + elm$core$String$fromFloat(side),
				'z'
			]);
		return A2(elm$core$String$join, ' ', commands);
	});
var author$project$Internal$Dots$viewTriangle = F5(
	function (events, variety, color, area, point) {
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$d(
				A2(author$project$Internal$Dots$pathTriangle, area, point))
			]);
		return A2(
			elm$svg$Svg$path,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(author$project$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var author$project$Internal$Dots$viewShape = F5(
	function (system, _n0, shape, color, point) {
		var radius = _n0.radius;
		var variety = _n0.variety;
		var view_ = function () {
			switch (shape.$) {
				case 'Circle':
					return author$project$Internal$Dots$viewCircle;
				case 'Triangle':
					return author$project$Internal$Dots$viewTriangle;
				case 'Square':
					return author$project$Internal$Dots$viewSquare;
				case 'Diamond':
					return author$project$Internal$Dots$viewDiamond;
				case 'Cross':
					return author$project$Internal$Dots$viewCross;
				case 'Plus':
					return author$project$Internal$Dots$viewPlus;
				default:
					return F5(
						function (_n2, _n3, _n4, _n5, _n6) {
							return elm$svg$Svg$text('');
						});
			}
		}();
		var size = (2 * elm$core$Basics$pi) * radius;
		var pointSvg = A2(author$project$LineChart$Coordinate$toSvg, system, point);
		return A5(view_, _List_Nil, variety, color, size, pointSvg);
	});
var author$project$Internal$Dots$viewSample = F5(
	function (_n0, shape, color, system, data) {
		var config = _n0.a;
		var _n1 = config.legend(
			A2(
				elm$core$List$map,
				function ($) {
					return $.user;
				},
				data));
		var style_ = _n1.a;
		return A4(author$project$Internal$Dots$viewShape, system, style_, shape, color);
	});
var author$project$Internal$Line$color = F3(
	function (_n0, _n1, data_) {
		var config = _n0.a;
		var line_ = _n1.a;
		var _n2 = config(
			A2(
				elm$core$List$map,
				function ($) {
					return $.user;
				},
				data_));
		var style_ = _n2.a;
		return style_.color(line_.color);
	});
var author$project$Internal$Line$shape = function (_n0) {
	var config = _n0.a;
	return config.shape;
};
var author$project$Internal$Area$hasArea = function (config) {
	switch (config.$) {
		case 'None':
			return false;
		case 'Normal':
			return true;
		case 'Stacked':
			return true;
		default:
			return true;
	}
};
var author$project$Internal$Area$opacity = function (config) {
	switch (config.$) {
		case 'None':
			return 0;
		case 'Normal':
			var opacity_ = config.a;
			return opacity_;
		case 'Stacked':
			var opacity_ = config.a;
			return opacity_;
		default:
			var opacity_ = config.a;
			return opacity_;
	}
};
var author$project$Internal$Line$toAreaAttributes = F3(
	function (_n0, _n1, area) {
		var serie = _n0.a;
		var style_ = _n1.a;
		return _List_fromArray(
			[
				elm$svg$Svg$Attributes$class('chart__interpolation__area__fragment'),
				elm$svg$Svg$Attributes$fill(
				avh4$elm_color$Color$toCssString(
					style_.color(serie.color)))
			]);
	});
var elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var author$project$Internal$Line$toSeriesAttributes = F2(
	function (_n0, _n1) {
		var serie = _n0.a;
		var style_ = _n1.a;
		return _List_fromArray(
			[
				elm$svg$Svg$Attributes$style('pointer-events: none;'),
				elm$svg$Svg$Attributes$class('chart__interpolation__line__fragment'),
				elm$svg$Svg$Attributes$stroke(
				avh4$elm_color$Color$toCssString(
					style_.color(serie.color))),
				elm$svg$Svg$Attributes$strokeWidth(
				elm$core$String$fromFloat(style_.width)),
				elm$svg$Svg$Attributes$strokeDasharray(
				A2(
					elm$core$String$join,
					' ',
					A2(elm$core$List$map, elm$core$String$fromFloat, serie.dashing))),
				elm$svg$Svg$Attributes$fill('transparent')
			]);
	});
var author$project$Internal$Utils$viewIf = F2(
	function (condition, view) {
		return condition ? view(_Utils_Tuple0) : elm$svg$Svg$text('');
	});
var elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var author$project$Internal$Line$viewSample = F5(
	function (_n0, line_, area, data_, sampleWidth) {
		var look = _n0.a;
		var style_ = look(
			A2(
				elm$core$List$map,
				function ($) {
					return $.user;
				},
				data_));
		var sizeAttributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x1('0'),
				elm$svg$Svg$Attributes$y1('0'),
				elm$svg$Svg$Attributes$x2(
				elm$core$String$fromFloat(sampleWidth)),
				elm$svg$Svg$Attributes$y2('0')
			]);
		var rectangleAttributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x('0'),
				elm$svg$Svg$Attributes$y('0'),
				elm$svg$Svg$Attributes$height('9'),
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(sampleWidth))
			]);
		var lineAttributes = A2(author$project$Internal$Line$toSeriesAttributes, line_, style_);
		var areaAttributes = A2(
			elm$core$List$cons,
			elm$svg$Svg$Attributes$fillOpacity(
				elm$core$String$fromFloat(
					author$project$Internal$Area$opacity(area))),
			A3(author$project$Internal$Line$toAreaAttributes, line_, style_, area));
		var viewRectangle = function (_n1) {
			return A2(
				elm$svg$Svg$rect,
				_Utils_ap(areaAttributes, rectangleAttributes),
				_List_Nil);
		};
		return A2(
			elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$line,
					_Utils_ap(lineAttributes, sizeAttributes),
					_List_Nil),
					A2(
					author$project$Internal$Utils$viewIf,
					author$project$Internal$Area$hasArea(area),
					viewRectangle)
				]));
	});
var author$project$Internal$Legends$viewSample = F4(
	function (_n0, sampleWidth, line, data) {
		var system = _n0.system;
		var lineConfig = _n0.lineConfig;
		var dotsConfig = _n0.dotsConfig;
		var area = _n0.area;
		var shape = author$project$Internal$Line$shape(line);
		var dotPosition = A2(
			author$project$LineChart$Coordinate$toData,
			system,
			A2(author$project$Internal$Data$Point, sampleWidth / 2, 0));
		var color = A3(author$project$Internal$Line$color, lineConfig, line, data);
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__sample')
				]),
			_List_fromArray(
				[
					A5(author$project$Internal$Line$viewSample, lineConfig, line, area, data, sampleWidth),
					A6(author$project$Internal$Dots$viewSample, dotsConfig, shape, color, system, data, dotPosition)
				]));
	});
var author$project$Internal$Legends$viewGrouped = F3(
	function (_arguments, sampleWidth, container) {
		var toLegend = F2(
			function (line, data) {
				return {
					label: author$project$Internal$Line$label(line),
					sample: A4(author$project$Internal$Legends$viewSample, _arguments, sampleWidth, line, data)
				};
			});
		var legends = A3(elm$core$List$map2, toLegend, _arguments.lines, _arguments.data);
		return A2(container, _arguments.system, legends);
	});
var author$project$Internal$Legends$view = function (_arguments) {
	var _n0 = _arguments.legends;
	switch (_n0.$) {
		case 'Free':
			var placement = _n0.a;
			var view_ = _n0.b;
			return A3(author$project$Internal$Legends$viewFrees, _arguments, placement, view_);
		case 'Grouped':
			var sampleWidth = _n0.a;
			var container = _n0.b;
			return A3(
				author$project$Internal$Legends$viewGrouped,
				_arguments,
				sampleWidth,
				container(_arguments));
		default:
			return elm$svg$Svg$text('');
	}
};
var author$project$Internal$Line$data = function (_n0) {
	var config = _n0.a;
	return config.data;
};
var author$project$Internal$Area$opacityContainer = function (config) {
	switch (config.$) {
		case 'None':
			return 1;
		case 'Normal':
			var opacity_ = config.a;
			return 1;
		case 'Stacked':
			var opacity_ = config.a;
			return opacity_;
		default:
			var opacity_ = config.a;
			return opacity_;
	}
};
var elm$core$List$map3 = _List_map3;
var author$project$Internal$Line$viewNormal = function (_n0) {
	var areas = _n0.a;
	var lines = _n0.b;
	var dots = _n0.c;
	var view_ = F3(
		function (area_, line_, dots_) {
			return A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__line')
					]),
				_List_fromArray(
					[area_, line_, dots_]));
		});
	return A4(elm$core$List$map3, view_, areas, lines, dots);
};
var author$project$Internal$Data$isWithinRange = F2(
	function (system, point) {
		return _Utils_eq(
			A3(elm$core$Basics$clamp, system.x.min, system.x.max, point.x),
			point.x) && _Utils_eq(
			A3(elm$core$Basics$clamp, system.y.min, system.y.max, point.y),
			point.y);
	});
var author$project$Internal$Interpolation$linear = elm$core$List$map(
	elm$core$List$map(author$project$Internal$Path$Line));
var author$project$Internal$Interpolation$First = {$: 'First'};
var author$project$Internal$Interpolation$Previous = function (a) {
	return {$: 'Previous', a: a};
};
var author$project$Internal$Interpolation$monotoneCurve = F4(
	function (point0, point1, tangent0, tangent1) {
		var dx = (point1.x - point0.x) / 3;
		return A3(
			author$project$Internal$Path$CubicBeziers,
			{x: point0.x + dx, y: point0.y + (dx * tangent0)},
			{x: point1.x - dx, y: point1.y - (dx * tangent1)},
			point1);
	});
var author$project$Internal$Interpolation$slope2 = F3(
	function (point0, point1, t) {
		var h = point1.x - point0.x;
		return h ? ((((3 * (point1.y - point0.y)) / h) - t) / 2) : t;
	});
var author$project$Internal$Interpolation$sign = function (x) {
	return (x < 0) ? (-1) : 1;
};
var author$project$Internal$Interpolation$toH = F2(
	function (h0, h1) {
		return (!h0) ? ((h1 < 0) ? (0 * (-1)) : h1) : h0;
	});
var author$project$Internal$Interpolation$slope3 = F3(
	function (point0, point1, point2) {
		var h1 = point2.x - point1.x;
		var h0 = point1.x - point0.x;
		var s0h = A2(author$project$Internal$Interpolation$toH, h0, h1);
		var s0 = (point1.y - point0.y) / s0h;
		var s1h = A2(author$project$Internal$Interpolation$toH, h1, h0);
		var s1 = (point2.y - point1.y) / s1h;
		var p = ((s0 * h1) + (s1 * h0)) / (h0 + h1);
		var slope = (author$project$Internal$Interpolation$sign(s0) + author$project$Internal$Interpolation$sign(s1)) * A2(
			elm$core$Basics$min,
			A2(
				elm$core$Basics$min,
				elm$core$Basics$abs(s0),
				elm$core$Basics$abs(s1)),
			0.5 * elm$core$Basics$abs(p));
		return elm$core$Basics$isNaN(slope) ? 0 : slope;
	});
var author$project$Internal$Interpolation$monotonePart = F2(
	function (points, _n0) {
		var tangent = _n0.a;
		var commands = _n0.b;
		var _n1 = _Utils_Tuple2(tangent, points);
		_n1$4:
		while (true) {
			if (_n1.a.$ === 'First') {
				if (_n1.b.b && _n1.b.b.b) {
					if (_n1.b.b.b.b) {
						var _n2 = _n1.a;
						var _n3 = _n1.b;
						var p0 = _n3.a;
						var _n4 = _n3.b;
						var p1 = _n4.a;
						var _n5 = _n4.b;
						var p2 = _n5.a;
						var rest = _n5.b;
						var t1 = A3(author$project$Internal$Interpolation$slope3, p0, p1, p2);
						var t0 = A3(author$project$Internal$Interpolation$slope2, p0, p1, t1);
						return A2(
							author$project$Internal$Interpolation$monotonePart,
							A2(
								elm$core$List$cons,
								p1,
								A2(elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								author$project$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4(author$project$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var _n9 = _n1.a;
						var _n10 = _n1.b;
						var p0 = _n10.a;
						var _n11 = _n10.b;
						var p1 = _n11.a;
						var t1 = A3(author$project$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							author$project$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4(author$project$Internal$Interpolation$monotoneCurve, p0, p1, t1, t1),
										author$project$Internal$Path$Line(p1)
									])));
					}
				} else {
					break _n1$4;
				}
			} else {
				if (_n1.b.b && _n1.b.b.b) {
					if (_n1.b.b.b.b) {
						var t0 = _n1.a.a;
						var _n6 = _n1.b;
						var p0 = _n6.a;
						var _n7 = _n6.b;
						var p1 = _n7.a;
						var _n8 = _n7.b;
						var p2 = _n8.a;
						var rest = _n8.b;
						var t1 = A3(author$project$Internal$Interpolation$slope3, p0, p1, p2);
						return A2(
							author$project$Internal$Interpolation$monotonePart,
							A2(
								elm$core$List$cons,
								p1,
								A2(elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								author$project$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4(author$project$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var t0 = _n1.a.a;
						var _n12 = _n1.b;
						var p0 = _n12.a;
						var _n13 = _n12.b;
						var p1 = _n13.a;
						var t1 = A3(author$project$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							author$project$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4(author$project$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1),
										author$project$Internal$Path$Line(p1)
									])));
					}
				} else {
					break _n1$4;
				}
			}
		}
		return _Utils_Tuple2(tangent, commands);
	});
var author$project$Internal$Interpolation$monotoneSection = F2(
	function (points, _n0) {
		var tangent = _n0.a;
		var acc = _n0.b;
		var _n1 = function () {
			if (points.b) {
				var p0 = points.a;
				var rest = points.b;
				return A2(
					author$project$Internal$Interpolation$monotonePart,
					A2(elm$core$List$cons, p0, rest),
					_Utils_Tuple2(
						tangent,
						_List_fromArray(
							[
								author$project$Internal$Path$Line(p0)
							])));
			} else {
				return _Utils_Tuple2(tangent, _List_Nil);
			}
		}();
		var t0 = _n1.a;
		var commands = _n1.b;
		return _Utils_Tuple2(
			t0,
			A2(elm$core$List$cons, commands, acc));
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var author$project$Internal$Interpolation$monotone = function (sections) {
	return A3(
		elm$core$List$foldr,
		author$project$Internal$Interpolation$monotoneSection,
		_Utils_Tuple2(author$project$Internal$Interpolation$First, _List_Nil),
		sections).b;
};
var author$project$Internal$Interpolation$after = F2(
	function (a, b) {
		return _List_fromArray(
			[
				a,
				A2(author$project$Internal$Data$Point, b.x, a.y),
				b
			]);
	});
var author$project$Internal$Interpolation$stepped = function (sections) {
	var expand = F2(
		function (result, section) {
			expand:
			while (true) {
				if (section.a.b) {
					if (section.a.b.b) {
						var _n1 = section.a;
						var a = _n1.a;
						var _n2 = _n1.b;
						var b = _n2.a;
						var rest = _n2.b;
						var broken = section.b;
						var $temp$result = _Utils_ap(
							result,
							A2(author$project$Internal$Interpolation$after, a, b)),
							$temp$section = _Utils_Tuple2(
							A2(elm$core$List$cons, b, rest),
							broken);
						result = $temp$result;
						section = $temp$section;
						continue expand;
					} else {
						if (section.b.$ === 'Just') {
							var _n3 = section.a;
							var last = _n3.a;
							var broken = section.b.a;
							return _Utils_ap(
								result,
								_List_fromArray(
									[
										A2(author$project$Internal$Data$Point, broken.x, last.y)
									]));
						} else {
							var _n4 = section.a;
							var last = _n4.a;
							var _n5 = section.b;
							return result;
						}
					}
				} else {
					return result;
				}
			}
		});
	return A2(
		elm$core$List$map,
		A2(
			elm$core$Basics$composeR,
			expand(_List_Nil),
			elm$core$List$map(author$project$Internal$Path$Line)),
		sections);
};
var elm$core$Tuple$mapSecond = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var author$project$Internal$Interpolation$toCommands = F2(
	function (interpolation, data) {
		var pointsSections = elm$core$List$map(
			A2(
				elm$core$Basics$composeR,
				elm$core$Tuple$mapFirst(
					elm$core$List$map(
						function ($) {
							return $.point;
						})),
				elm$core$Tuple$mapSecond(
					elm$core$Maybe$map(
						function ($) {
							return $.point;
						}))));
		var points = elm$core$List$map(
			A2(
				elm$core$Basics$composeR,
				elm$core$Tuple$first,
				elm$core$List$map(
					function ($) {
						return $.point;
					})));
		switch (interpolation.$) {
			case 'Linear':
				return author$project$Internal$Interpolation$linear(
					points(data));
			case 'Monotone':
				return author$project$Internal$Interpolation$monotone(
					points(data));
			default:
				return author$project$Internal$Interpolation$stepped(
					pointsSections(data));
		}
	});
var author$project$Internal$Area$opacitySingle = function (config) {
	switch (config.$) {
		case 'None':
			return 0;
		case 'Normal':
			var opacity_ = config.a;
			return opacity_;
		case 'Stacked':
			var opacity_ = config.a;
			return 1;
		default:
			var opacity_ = config.a;
			return 1;
	}
};
var author$project$Internal$Path$toPoint = function (command) {
	switch (command.$) {
		case 'Close':
			return A2(author$project$LineChart$Coordinate$Point, 0, 0);
		case 'Move':
			var p = command.a;
			return p;
		case 'Line':
			var p = command.a;
			return p;
		case 'Horizontal':
			var x = command.a;
			return A2(author$project$LineChart$Coordinate$Point, x, 0);
		case 'Vertical':
			var y = command.a;
			return A2(author$project$LineChart$Coordinate$Point, 0, y);
		case 'CubicBeziers':
			var c1 = command.a;
			var c2 = command.b;
			var p = command.c;
			return p;
		case 'CubicBeziersShort':
			var c1 = command.a;
			var p = command.b;
			return p;
		case 'QuadraticBeziers':
			var c1 = command.a;
			var p = command.b;
			return p;
		case 'QuadraticBeziersShort':
			var p = command.a;
			return p;
		default:
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var p = command.f;
			return p;
	}
};
var author$project$Internal$Utils$towardsZero = function (_n0) {
	var max = _n0.max;
	var min = _n0.min;
	return A3(elm$core$Basics$clamp, min, max, 0);
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var author$project$Internal$Utils$last = function (list) {
	return elm$core$List$head(
		A2(
			elm$core$List$drop,
			elm$core$List$length(list) - 1,
			list));
};
var author$project$Internal$Utils$lastSafe = F2(
	function (first, rest) {
		return A2(
			elm$core$Maybe$withDefault,
			first,
			author$project$Internal$Utils$last(rest));
	});
var author$project$Internal$Utils$viewWithEdges = F2(
	function (stuff, view) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return A3(
				view,
				first,
				rest,
				A2(author$project$Internal$Utils$lastSafe, first, rest));
		} else {
			return elm$svg$Svg$text('');
		}
	});
var author$project$LineChart$Junk$withinChartArea = author$project$Internal$Svg$withinChartArea;
var author$project$Internal$Line$viewArea = F5(
	function (_n0, line_, style_, interpolation, data_) {
		var system = _n0.system;
		var lineConfig = _n0.lineConfig;
		var area = _n0.area;
		var ground = function (point) {
			return A2(
				author$project$Internal$Data$Point,
				point.x,
				author$project$Internal$Utils$towardsZero(system.y));
		};
		var commands = F3(
			function (first, middle, last) {
				return A3(
					author$project$Internal$Utils$concat,
					_List_fromArray(
						[
							author$project$Internal$Path$Move(
							ground(
								author$project$Internal$Path$toPoint(first))),
							author$project$Internal$Path$Line(
							author$project$Internal$Path$toPoint(first))
						]),
					interpolation,
					_List_fromArray(
						[
							author$project$Internal$Path$Line(
							ground(
								author$project$Internal$Path$toPoint(last)))
						]));
			});
		var attributes = A2(
			elm$core$List$cons,
			author$project$LineChart$Junk$withinChartArea(system),
			A2(
				elm$core$List$cons,
				elm$svg$Svg$Attributes$fillOpacity(
					elm$core$String$fromFloat(
						author$project$Internal$Area$opacitySingle(area))),
				A3(author$project$Internal$Line$toAreaAttributes, line_, style_, area)));
		return A2(
			author$project$Internal$Utils$viewWithEdges,
			interpolation,
			F3(
				function (first, middle, last) {
					return A3(
						author$project$Internal$Path$view,
						system,
						attributes,
						A3(commands, first, middle, last));
				}));
	});
var author$project$Internal$Dots$view = F2(
	function (_n0, data) {
		var system = _n0.system;
		var dotsConfig = _n0.dotsConfig;
		var shape = _n0.shape;
		var color = _n0.color;
		var _n1 = dotsConfig;
		var config = _n1.a;
		var _n2 = config.individual(data.user);
		var style_ = _n2.a;
		return A5(author$project$Internal$Dots$viewShape, system, style_, shape, color, data.point);
	});
var author$project$Internal$Line$viewDot = F3(
	function (_arguments, _n0, _n1) {
		var lineConfig = _n0.a;
		var style_ = _n1.a;
		return author$project$Internal$Dots$view(
			{
				color: style_.color(lineConfig.color),
				dotsConfig: _arguments.dotsConfig,
				shape: lineConfig.shape,
				system: _arguments.system
			});
	});
var author$project$Internal$Utils$viewWithFirst = F2(
	function (stuff, view) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return A2(view, first, rest);
		} else {
			return elm$svg$Svg$text('');
		}
	});
var author$project$Internal$Line$viewSeries = F5(
	function (_n0, line_, style_, interpolation, data_) {
		var system = _n0.system;
		var lineConfig = _n0.lineConfig;
		var attributes = A2(
			elm$core$List$cons,
			author$project$LineChart$Junk$withinChartArea(system),
			A2(author$project$Internal$Line$toSeriesAttributes, line_, style_));
		return A2(
			author$project$Internal$Utils$viewWithFirst,
			data_,
			F2(
				function (first, _n1) {
					return A3(
						author$project$Internal$Path$view,
						system,
						attributes,
						A2(
							elm$core$List$cons,
							author$project$Internal$Path$Move(first.point),
							interpolation));
				}));
	});
var author$project$Internal$Utils$part = F4(
	function (isReal, points, current, parts) {
		part:
		while (true) {
			if (points.b) {
				var first = points.a;
				var rest = points.b;
				if (isReal(first)) {
					var $temp$isReal = isReal,
						$temp$points = rest,
						$temp$current = _Utils_ap(
						current,
						_List_fromArray(
							[first])),
						$temp$parts = parts;
					isReal = $temp$isReal;
					points = $temp$points;
					current = $temp$current;
					parts = $temp$parts;
					continue part;
				} else {
					var $temp$isReal = isReal,
						$temp$points = rest,
						$temp$current = _List_Nil,
						$temp$parts = A2(
						elm$core$List$cons,
						_Utils_Tuple2(
							current,
							elm$core$Maybe$Just(first)),
						parts);
					isReal = $temp$isReal;
					points = $temp$points;
					current = $temp$current;
					parts = $temp$parts;
					continue part;
				}
			} else {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(current, elm$core$Maybe$Nothing),
					parts);
			}
		}
	});
var author$project$Internal$Line$viewSingle = F3(
	function (_arguments, line_, data_) {
		var style_ = function (_n1) {
			var look = _n1.a;
			return look(
				A2(
					elm$core$List$map,
					function ($) {
						return $.user;
					},
					data_));
		}(_arguments.lineConfig);
		var sections = A4(
			author$project$Internal$Utils$part,
			function ($) {
				return $.isReal;
			},
			data_,
			_List_Nil,
			_List_Nil);
		var parts = A2(elm$core$List$map, elm$core$Tuple$first, sections);
		var viewDots = A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__dots')
				]),
			A2(
				elm$core$List$map,
				A3(author$project$Internal$Line$viewDot, _arguments, line_, style_),
				A2(
					elm$core$List$filter,
					A2(
						elm$core$Basics$composeL,
						author$project$Internal$Data$isWithinRange(_arguments.system),
						function ($) {
							return $.point;
						}),
					elm$core$List$concat(parts))));
		var commands = A2(author$project$Internal$Interpolation$toCommands, _arguments.interpolation, sections);
		var viewAreas = function (_n0) {
			return A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__interpolation__area')
					]),
				A3(
					elm$core$List$map2,
					A3(author$project$Internal$Line$viewArea, _arguments, line_, style_),
					commands,
					parts));
		};
		var viewSeriess = A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__interpolation__line')
				]),
			A3(
				elm$core$List$map2,
				A3(author$project$Internal$Line$viewSeries, _arguments, line_, style_),
				commands,
				parts));
		return _Utils_Tuple3(
			A2(
				author$project$Internal$Utils$viewIf,
				author$project$Internal$Area$hasArea(_arguments.area),
				viewAreas),
			viewSeriess,
			viewDots);
	});
var author$project$Internal$Line$viewStacked = F2(
	function (area, _n0) {
		var areas = _n0.a;
		var lines = _n0.b;
		var dots = _n0.c;
		var toList = F2(
			function (l, d) {
				return _List_fromArray(
					[l, d]);
			});
		var opacity = 'opacity: ' + elm$core$String$fromFloat(
			author$project$Internal$Area$opacityContainer(area));
		var bottoms = elm$core$List$concat(
			A3(elm$core$List$map2, toList, lines, dots));
		return _List_fromArray(
			[
				A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__bottoms'),
						elm$svg$Svg$Attributes$style(opacity)
					]),
				areas),
				A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__tops')
					]),
				bottoms)
			]);
	});
var author$project$Internal$Utils$unzip3 = function (pairs) {
	var step = F2(
		function (_n0, _n1) {
			var a = _n0.a;
			var b = _n0.b;
			var c = _n0.c;
			var aas = _n1.a;
			var bs = _n1.b;
			var cs = _n1.c;
			return _Utils_Tuple3(
				A2(elm$core$List$cons, a, aas),
				A2(elm$core$List$cons, b, bs),
				A2(elm$core$List$cons, c, cs));
		});
	return A3(
		elm$core$List$foldr,
		step,
		_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
		pairs);
};
var author$project$Internal$Line$view = F3(
	function (_arguments, lines, datas) {
		var container = elm$svg$Svg$g(
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__lines')
				]));
		var buildSeriesViews = (author$project$Internal$Area$opacityContainer(_arguments.area) < 1) ? author$project$Internal$Line$viewStacked(_arguments.area) : author$project$Internal$Line$viewNormal;
		return container(
			buildSeriesViews(
				author$project$Internal$Utils$unzip3(
					A3(
						elm$core$List$map2,
						author$project$Internal$Line$viewSingle(_arguments),
						lines,
						datas))));
	});
var author$project$Internal$Events$toChartAttributes = F3(
	function (data, system, _n0) {
		var events = _n0.a;
		var order = function (_n1) {
			var outside = _n1.a;
			var event = _n1.b;
			return outside ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
				A2(event, data, system));
		};
		return A2(elm$core$List$filterMap, order, events);
	});
var author$project$LineChart$chartAreaAttributes = function (system) {
	return _List_fromArray(
		[
			elm$svg$Svg$Attributes$x(
			elm$core$String$fromFloat(system.frame.margin.left)),
			elm$svg$Svg$Attributes$y(
			elm$core$String$fromFloat(system.frame.margin.top)),
			elm$svg$Svg$Attributes$width(
			elm$core$String$fromFloat(
				author$project$Internal$Coordinate$lengthX(system))),
			elm$svg$Svg$Attributes$height(
			elm$core$String$fromFloat(
				author$project$Internal$Coordinate$lengthY(system)))
		]);
};
var author$project$LineChart$chartAreaPlatform = F3(
	function (config, data, system) {
		var attributes = elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						elm$svg$Svg$Attributes$fill('transparent')
					]),
					author$project$LineChart$chartAreaAttributes(system),
					A3(author$project$Internal$Events$toChartAttributes, data, system, config.events)
				]));
		return A2(elm$svg$Svg$rect, attributes, _List_Nil);
	});
var elm$svg$Svg$clipPath = elm$svg$Svg$trustedNode('clipPath');
var elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var author$project$LineChart$clipPath = function (system) {
	return A2(
		elm$svg$Svg$clipPath,
		_List_fromArray(
			[
				elm$svg$Svg$Attributes$id(
				author$project$Internal$Utils$toChartAreaId(system.id))
			]),
		_List_fromArray(
			[
				A2(
				elm$svg$Svg$rect,
				author$project$LineChart$chartAreaAttributes(system),
				_List_Nil)
			]));
};
var author$project$Internal$Container$sizeStyles = F3(
	function (_n0, width, height) {
		var properties_ = _n0.a;
		var _n1 = properties_.size;
		if (_n1.$ === 'Static') {
			return _List_fromArray(
				[
					A2(
					elm$html$Html$Attributes$style,
					'height',
					elm$core$String$fromFloat(height) + 'px'),
					A2(
					elm$html$Html$Attributes$style,
					'width',
					elm$core$String$fromFloat(width) + 'px')
				]);
		} else {
			return _List_Nil;
		}
	});
var author$project$LineChart$container = F4(
	function (config, _n0, junkHtml, plot) {
		var frame = _n0.frame;
		var userAttributes = A2(
			author$project$Internal$Container$properties,
			function ($) {
				return $.attributesHtml;
			},
			config.container);
		var sizeStyles = A3(author$project$Internal$Container$sizeStyles, config.container, frame.size.width, frame.size.height);
		var styles = A2(
			elm$core$List$cons,
			A2(elm$html$Html$Attributes$style, 'position', 'relative'),
			sizeStyles);
		return A2(
			elm$html$Html$div,
			_Utils_ap(styles, userAttributes),
			A2(elm$core$List$cons, plot, junkHtml));
	});
var author$project$Internal$Data$Data = F3(
	function (user, point, isReal) {
		return {isReal: isReal, point: point, user: user};
	});
var author$project$LineChart$setY = F2(
	function (datum, y) {
		return A3(
			author$project$Internal$Data$Data,
			datum.user,
			A2(author$project$Internal$Data$Point, datum.point.x, y),
			datum.isReal);
	});
var author$project$LineChart$normalize = function (datasets) {
	if (datasets.b) {
		var highest = datasets.a;
		var belows = datasets.b;
		var toPercentage = F2(
			function (highest_, datum) {
				return A2(author$project$LineChart$setY, datum, (100 * datum.point.y) / highest_.point.y);
			});
		return A2(
			elm$core$List$map,
			A2(elm$core$List$map2, toPercentage, highest),
			A2(elm$core$List$cons, highest, belows));
	} else {
		return datasets;
	}
};
var author$project$Internal$Utils$withFirst = F2(
	function (stuff, process) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return elm$core$Maybe$Just(
				A2(process, first, rest));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$LineChart$addBelows = F2(
	function (alldata, dataBelowAll) {
		var add = F2(
			function (below, datum) {
				return A2(author$project$LineChart$setY, below, below.point.y + datum.point.y);
			});
		var iterate = F4(
			function (datum0, dataTop, dataBelowTop, result) {
				iterate:
				while (true) {
					var _n0 = _Utils_Tuple2(dataTop, dataBelowTop);
					if (_n0.a.b) {
						if (_n0.b.b) {
							var _n1 = _n0.a;
							var datum1 = _n1.a;
							var data = _n1.b;
							var _n2 = _n0.b;
							var datumBelow = _n2.a;
							var dataBelow = _n2.b;
							if (_Utils_cmp(datum1.point.x, datumBelow.point.x) > 0) {
								if (datumBelow.isReal) {
									var $temp$datum0 = datum0,
										$temp$dataTop = A2(elm$core$List$cons, datum1, data),
										$temp$dataBelowTop = dataBelow,
										$temp$result = A2(
										elm$core$List$cons,
										A2(add, datumBelow, datum0),
										result);
									datum0 = $temp$datum0;
									dataTop = $temp$dataTop;
									dataBelowTop = $temp$dataBelowTop;
									result = $temp$result;
									continue iterate;
								} else {
									var breakdata = _Utils_update(
										datum0,
										{isReal: false});
									var $temp$datum0 = datum0,
										$temp$dataTop = A2(elm$core$List$cons, datum1, data),
										$temp$dataBelowTop = dataBelow,
										$temp$result = A2(
										elm$core$List$cons,
										A2(add, datumBelow, datum0),
										result);
									datum0 = $temp$datum0;
									dataTop = $temp$dataTop;
									dataBelowTop = $temp$dataBelowTop;
									result = $temp$result;
									continue iterate;
								}
							} else {
								var $temp$datum0 = datum1,
									$temp$dataTop = data,
									$temp$dataBelowTop = A2(elm$core$List$cons, datumBelow, dataBelow),
									$temp$result = result;
								datum0 = $temp$datum0;
								dataTop = $temp$dataTop;
								dataBelowTop = $temp$dataBelowTop;
								result = $temp$result;
								continue iterate;
							}
						} else {
							var _n4 = _n0.a;
							var datum1 = _n4.a;
							var data = _n4.b;
							return result;
						}
					} else {
						if (_n0.b.b) {
							var _n3 = _n0.b;
							var datumBelow = _n3.a;
							var dataBelow = _n3.b;
							if (_Utils_cmp(datum0.point.x, datumBelow.point.x) < 1) {
								var $temp$datum0 = datum0,
									$temp$dataTop = _List_Nil,
									$temp$dataBelowTop = dataBelow,
									$temp$result = A2(
									elm$core$List$cons,
									A2(add, datumBelow, datum0),
									result);
								datum0 = $temp$datum0;
								dataTop = $temp$dataTop;
								dataBelowTop = $temp$dataBelowTop;
								result = $temp$result;
								continue iterate;
							} else {
								var $temp$datum0 = datum0,
									$temp$dataTop = _List_Nil,
									$temp$dataBelowTop = dataBelow,
									$temp$result = A2(elm$core$List$cons, datumBelow, result);
								datum0 = $temp$datum0;
								dataTop = $temp$dataTop;
								dataBelowTop = $temp$dataBelowTop;
								result = $temp$result;
								continue iterate;
							}
						} else {
							return result;
						}
					}
				}
			});
		return elm$core$List$reverse(
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					author$project$Internal$Utils$withFirst,
					alldata,
					F2(
						function (first, rest) {
							return A4(iterate, first, rest, dataBelowAll, _List_Nil);
						}))));
	});
var author$project$LineChart$stack = function (dataset) {
	var stackBelows = F2(
		function (dataset_, result) {
			if (dataset_.b) {
				var data = dataset_.a;
				var belows = dataset_.b;
				return A2(
					stackBelows,
					belows,
					A2(
						elm$core$List$cons,
						A3(elm$core$List$foldl, author$project$LineChart$addBelows, data, belows),
						result));
			} else {
				return result;
			}
		});
	return elm$core$List$reverse(
		A2(stackBelows, dataset, _List_Nil));
};
var author$project$LineChart$toDataPoints = F2(
	function (config, lines) {
		var y = author$project$Internal$Axis$variable(config.y);
		var x = author$project$Internal$Axis$variable(config.x);
		var addPoint = function (datum) {
			var _n1 = _Utils_Tuple2(
				x(datum),
				y(datum));
			if (_n1.a.$ === 'Just') {
				if (_n1.b.$ === 'Just') {
					var x_ = _n1.a.a;
					var y_ = _n1.b.a;
					return elm$core$Maybe$Just(
						A3(
							author$project$Internal$Data$Data,
							datum,
							A2(author$project$Internal$Data$Point, x_, y_),
							true));
				} else {
					var x_ = _n1.a.a;
					var _n2 = _n1.b;
					return elm$core$Maybe$Just(
						A3(
							author$project$Internal$Data$Data,
							datum,
							A2(author$project$Internal$Data$Point, x_, 0),
							false));
				}
			} else {
				if (_n1.b.$ === 'Just') {
					var _n3 = _n1.a;
					var y_ = _n1.b.a;
					return elm$core$Maybe$Nothing;
				} else {
					var _n4 = _n1.a;
					var _n5 = _n1.b;
					return elm$core$Maybe$Nothing;
				}
			}
		};
		var data = A2(
			elm$core$List$map,
			A2(
				elm$core$Basics$composeR,
				author$project$Internal$Line$data,
				elm$core$List$filterMap(addPoint)),
			lines);
		var _n0 = config.area;
		switch (_n0.$) {
			case 'None':
				return data;
			case 'Normal':
				return data;
			case 'Stacked':
				return author$project$LineChart$stack(data);
			default:
				return author$project$LineChart$normalize(
					author$project$LineChart$stack(data));
		}
	});
var author$project$Internal$Axis$pixels = function (_n0) {
	var config = _n0.a;
	return config.pixels;
};
var author$project$Internal$Axis$range = function (_n0) {
	var config = _n0.a;
	return config.range;
};
var author$project$LineChart$Coordinate$Range = F2(
	function (min, max) {
		return {max: max, min: min};
	});
var author$project$Internal$Axis$Range$applyX = F2(
	function (range, system) {
		switch (range.$) {
			case 'Padded':
				var padMin = range.a;
				var padMax = range.b;
				var _n1 = system;
				var frame = _n1.frame;
				var _n2 = frame;
				var size = _n2.size;
				var system_ = _Utils_update(
					system,
					{
						frame: _Utils_update(
							frame,
							{
								size: _Utils_update(
									size,
									{
										width: A2(elm$core$Basics$max, 1, (size.width - padMin) - padMax)
									})
							})
					});
				var scale = author$project$LineChart$Coordinate$scaleDataX(system_);
				return A2(
					author$project$LineChart$Coordinate$Range,
					system.x.min - scale(padMin),
					system.x.max + scale(padMax));
			case 'Window':
				var min = range.a;
				var max = range.b;
				return A2(author$project$LineChart$Coordinate$Range, min, max);
			default:
				var toRange = range.a;
				return toRange(system.x);
		}
	});
var author$project$Internal$Axis$Range$applyY = F2(
	function (range, system) {
		switch (range.$) {
			case 'Padded':
				var padMin = range.a;
				var padMax = range.b;
				var _n1 = system;
				var frame = _n1.frame;
				var _n2 = frame;
				var size = _n2.size;
				var system_ = _Utils_update(
					system,
					{
						frame: _Utils_update(
							frame,
							{
								size: _Utils_update(
									size,
									{
										height: A2(elm$core$Basics$max, 1, (size.height - padMin) - padMax)
									})
							})
					});
				var scale = author$project$LineChart$Coordinate$scaleDataY(system_);
				return A2(
					author$project$LineChart$Coordinate$Range,
					system.y.min - scale(padMin),
					system.y.max + scale(padMax));
			case 'Window':
				var min = range.a;
				var max = range.b;
				return A2(author$project$LineChart$Coordinate$Range, min, max);
			default:
				var toRange = range.a;
				return toRange(system.y);
		}
	});
var author$project$Internal$Coordinate$Frame = F2(
	function (margin, size) {
		return {margin: margin, size: size};
	});
var author$project$Internal$Coordinate$Size = F2(
	function (width, height) {
		return {height: height, width: width};
	});
var author$project$Internal$Coordinate$ground = function (range_) {
	return _Utils_update(
		range_,
		{
			min: A2(elm$core$Basics$min, range_.min, 0)
		});
};
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Internal$Coordinate$maximum = function (toValue) {
	return A2(
		elm$core$Basics$composeR,
		elm$core$List$map(toValue),
		A2(
			elm$core$Basics$composeR,
			elm$core$List$maximum,
			elm$core$Maybe$withDefault(1)));
};
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Internal$Coordinate$minimum = function (toValue) {
	return A2(
		elm$core$Basics$composeR,
		elm$core$List$map(toValue),
		A2(
			elm$core$Basics$composeR,
			elm$core$List$minimum,
			elm$core$Maybe$withDefault(0)));
};
var author$project$Internal$Coordinate$range = F2(
	function (toValue, data) {
		var range_ = {
			max: A2(author$project$Internal$Coordinate$maximum, toValue, data),
			min: A2(author$project$Internal$Coordinate$minimum, toValue, data)
		};
		return _Utils_eq(range_.min, range_.max) ? _Utils_update(
			range_,
			{max: range_.max + 1}) : range_;
	});
var author$project$LineChart$toSystem = F2(
	function (config, data) {
		var yRange = A2(
			author$project$Internal$Coordinate$range,
			A2(
				elm$core$Basics$composeR,
				function ($) {
					return $.point;
				},
				function ($) {
					return $.y;
				}),
			data);
		var xRange = A2(
			author$project$Internal$Coordinate$range,
			A2(
				elm$core$Basics$composeR,
				function ($) {
					return $.point;
				},
				function ($) {
					return $.x;
				}),
			data);
		var size = A2(
			author$project$Internal$Coordinate$Size,
			author$project$Internal$Axis$pixels(config.x),
			author$project$Internal$Axis$pixels(config.y));
		var hasArea = author$project$Internal$Area$hasArea(config.area);
		var container_ = A2(author$project$Internal$Container$properties, elm$core$Basics$identity, config.container);
		var frame = A2(author$project$Internal$Coordinate$Frame, container_.margin, size);
		var adjustDomainRange = function (domain) {
			return hasArea ? author$project$Internal$Coordinate$ground(domain) : domain;
		};
		var system = {
			frame: frame,
			id: container_.id,
			x: xRange,
			xData: xRange,
			y: adjustDomainRange(yRange),
			yData: yRange
		};
		return _Utils_update(
			system,
			{
				x: A2(
					author$project$Internal$Axis$Range$applyX,
					author$project$Internal$Axis$range(config.x),
					system),
				y: A2(
					author$project$Internal$Axis$Range$applyY,
					author$project$Internal$Axis$range(config.y),
					system)
			});
	});
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var author$project$LineChart$viewBoxAttribute = function (_n0) {
	var frame = _n0.frame;
	return elm$svg$Svg$Attributes$viewBox(
		'0 0 ' + (elm$core$String$fromFloat(frame.size.width) + (' ' + elm$core$String$fromFloat(frame.size.height))));
};
var elm$svg$Svg$defs = elm$svg$Svg$trustedNode('defs');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var author$project$LineChart$viewCustom = F2(
	function (config, lines) {
		var junkLineInfo = function (line_) {
			return _Utils_Tuple3(
				A3(author$project$Internal$Line$color, config.line, line_, _List_Nil),
				author$project$Internal$Line$label(line_),
				author$project$Internal$Line$data(line_));
		};
		var getJunk = A3(
			author$project$Internal$Junk$getLayers,
			A2(elm$core$List$map, junkLineInfo, lines),
			author$project$Internal$Axis$variable(config.x),
			author$project$Internal$Axis$variable(config.y));
		var data = A2(author$project$LineChart$toDataPoints, config, lines);
		var dataAll = elm$core$List$concat(data);
		var dataSafe = A2(
			elm$core$List$map,
			elm$core$List$filter(
				function ($) {
					return $.isReal;
				}),
			data);
		var dataAllSafe = elm$core$List$concat(dataSafe);
		var system = A2(author$project$LineChart$toSystem, config, dataAllSafe);
		var viewLines = author$project$Internal$Line$view(
			{area: config.area, dotsConfig: config.dots, interpolation: config.interpolation, lineConfig: config.line, system: system});
		var viewLegends = author$project$Internal$Legends$view(
			{
				area: config.area,
				data: dataSafe,
				dotsConfig: config.dots,
				legends: config.legends,
				lineConfig: config.line,
				lines: lines,
				system: system,
				x: author$project$Internal$Axis$variable(config.x),
				y: author$project$Internal$Axis$variable(config.y)
			});
		var attributes = elm$core$List$concat(
			_List_fromArray(
				[
					A2(
					author$project$Internal$Container$properties,
					function ($) {
						return $.attributesSvg;
					},
					config.container),
					A3(author$project$Internal$Events$toContainerAttributes, dataAll, system, config.events),
					_List_fromArray(
					[
						author$project$LineChart$viewBoxAttribute(system)
					])
				]));
		var addGrid = author$project$Internal$Junk$addBelow(
			A4(author$project$Internal$Grid$view, system, config.x, config.y, config.grid));
		var junk = addGrid(
			A2(getJunk, system, config.junk));
		return A4(
			author$project$LineChart$container,
			config,
			system,
			junk.html,
			A2(
				elm$svg$Svg$svg,
				attributes,
				_List_fromArray(
					[
						A2(
						elm$svg$Svg$defs,
						_List_Nil,
						_List_fromArray(
							[
								author$project$LineChart$clipPath(system)
							])),
						A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$class('chart__junk--below')
							]),
						junk.below),
						A2(viewLines, lines, data),
						A3(author$project$LineChart$chartAreaPlatform, config, dataAll, system),
						A3(author$project$Internal$Axis$viewHorizontal, system, config.intersection, config.x),
						A3(author$project$Internal$Axis$viewVertical, system, config.intersection, config.y),
						viewLegends,
						A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$class('chart__junk--above')
							]),
						junk.above)
					])));
	});
var author$project$LineChart$Colors$blue = A3(avh4$elm_color$Color$rgb255, 3, 169, 244);
var author$project$LineChart$Colors$cyan = A3(avh4$elm_color$Color$rgb255, 0, 229, 255);
var author$project$LineChart$Colors$pink = A3(avh4$elm_color$Color$rgb255, 245, 105, 215);
var author$project$Internal$Dots$Circle = {$: 'Circle'};
var author$project$LineChart$Dots$circle = author$project$Internal$Dots$Circle;
var author$project$Internal$Dots$Diamond = {$: 'Diamond'};
var author$project$LineChart$Dots$diamond = author$project$Internal$Dots$Diamond;
var author$project$Internal$Dots$Triangle = {$: 'Triangle'};
var author$project$LineChart$Dots$triangle = author$project$Internal$Dots$Triangle;
var author$project$Area$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				author$project$LineChart$viewCustom,
				author$project$Area$chartConfig(model),
				_List_fromArray(
					[
						A4(author$project$LineChart$line, author$project$LineChart$Colors$pink, author$project$LineChart$Dots$diamond, 'Nora', model.data.nora),
						A4(author$project$LineChart$line, author$project$LineChart$Colors$cyan, author$project$LineChart$Dots$circle, 'Noah', model.data.noah),
						A4(author$project$LineChart$line, author$project$LineChart$Colors$blue, author$project$LineChart$Dots$triangle, 'Nina', model.data.nina)
					]))
			]));
};
var author$project$Internal$Area$None = {$: 'None'};
var author$project$Internal$Area$none = author$project$Internal$Area$None;
var author$project$LineChart$Area$default = author$project$Internal$Area$none;
var author$project$Internal$Dots$Disconnected = function (a) {
	return {$: 'Disconnected', a: a};
};
var author$project$Internal$Dots$disconnected = F2(
	function (radius, border) {
		return A2(
			author$project$Internal$Dots$style,
			radius,
			author$project$Internal$Dots$Disconnected(border));
	});
var author$project$LineChart$Dots$disconnected = author$project$Internal$Dots$disconnected;
var author$project$Internal$Grid$Lines = F2(
	function (a, b) {
		return {$: 'Lines', a: a, b: b};
	});
var author$project$Internal$Grid$lines = author$project$Internal$Grid$Lines;
var author$project$LineChart$Colors$grayLightest = A3(avh4$elm_color$Color$rgb255, 243, 243, 243);
var author$project$Internal$Grid$default = A2(author$project$Internal$Grid$lines, 1, author$project$LineChart$Colors$grayLightest);
var author$project$LineChart$Grid$default = author$project$Internal$Grid$default;
var author$project$LineChart$Junk$default = author$project$Internal$Junk$none;
var author$project$Lines$containerConfig = author$project$LineChart$Container$custom(
	{
		attributesHtml: _List_Nil,
		attributesSvg: _List_Nil,
		id: 'line-chart-lines',
		margin: A4(author$project$LineChart$Container$Margin, 30, 180, 30, 70),
		size: author$project$LineChart$Container$relative
	});
var author$project$LineChart$Events$custom = author$project$Internal$Events$custom;
var author$project$Internal$Events$distanceY = F3(
	function (system, searched, dot) {
		return elm$core$Basics$abs(
			A2(author$project$LineChart$Coordinate$toSvgY, system, dot.y) - A2(author$project$LineChart$Coordinate$toSvgY, system, searched.y));
	});
var author$project$Internal$Events$distance = F3(
	function (system, searched, dot) {
		return elm$core$Basics$sqrt(
			A2(
				elm$core$Basics$pow,
				A3(author$project$Internal$Events$distanceX, system, searched, dot),
				2) + A2(
				elm$core$Basics$pow,
				A3(author$project$Internal$Events$distanceY, system, searched, dot),
				2));
	});
var author$project$Internal$Events$getNearestHelp = F3(
	function (points, system, searched) {
		var distance_ = A2(author$project$Internal$Events$distance, system, searched);
		var getClosest = F2(
			function (point, closest) {
				return (_Utils_cmp(
					distance_(closest.point),
					distance_(point.point)) < 0) ? closest : point;
			});
		return A2(
			author$project$Internal$Utils$withFirst,
			A2(
				elm$core$List$filter,
				function ($) {
					return $.isReal;
				},
				points),
			elm$core$List$foldl(getClosest));
	});
var author$project$Internal$Events$getNearest = author$project$Internal$Events$Decoder(
	F3(
		function (points, system, searchedSvg) {
			var searched = A2(author$project$LineChart$Coordinate$toData, system, searchedSvg);
			return A2(
				elm$core$Maybe$map,
				function ($) {
					return $.user;
				},
				A3(author$project$Internal$Events$getNearestHelp, points, system, searched));
		}));
var author$project$LineChart$Events$getNearest = author$project$Internal$Events$getNearest;
var author$project$LineChart$Events$onMouseLeave = author$project$Internal$Events$onMouseLeave;
var author$project$LineChart$Events$onMouseMove = author$project$Internal$Events$onMouseMove;
var author$project$Lines$Hint = function (a) {
	return {$: 'Hint', a: a};
};
var author$project$Lines$eventsConfig = author$project$LineChart$Events$custom(
	_List_fromArray(
		[
			A2(author$project$LineChart$Events$onMouseMove, author$project$Lines$Hint, author$project$LineChart$Events$getNearest),
			author$project$LineChart$Events$onMouseLeave(
			author$project$Lines$Hint(elm$core$Maybe$Nothing))
		]));
var author$project$Internal$Line$custom = author$project$Internal$Line$Config;
var author$project$LineChart$Line$custom = author$project$Internal$Line$custom;
var author$project$LineChart$Line$style = author$project$Internal$Line$style;
var avh4$elm_color$Color$hsla = F4(
	function (hue, sat, light, alpha) {
		var _n0 = _Utils_Tuple3(hue, sat, light);
		var h = _n0.a;
		var s = _n0.b;
		var l = _n0.c;
		var m2 = (l <= 0.5) ? (l * (s + 1)) : ((l + s) - (l * s));
		var m1 = (l * 2) - m2;
		var hueToRgb = function (h__) {
			var h_ = (h__ < 0) ? (h__ + 1) : ((h__ > 1) ? (h__ - 1) : h__);
			return ((h_ * 6) < 1) ? (m1 + (((m2 - m1) * h_) * 6)) : (((h_ * 2) < 1) ? m2 : (((h_ * 3) < 2) ? (m1 + (((m2 - m1) * ((2 / 3) - h_)) * 6)) : m1));
		};
		var b = hueToRgb(h - (1 / 3));
		var g = hueToRgb(h);
		var r = hueToRgb(h + (1 / 3));
		return A4(avh4$elm_color$Color$RgbaSpace, r, g, b, alpha);
	});
var avh4$elm_color$Color$toHsla = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	var minColor = A2(
		elm$core$Basics$min,
		r,
		A2(elm$core$Basics$min, g, b));
	var maxColor = A2(
		elm$core$Basics$max,
		r,
		A2(elm$core$Basics$max, g, b));
	var l = (minColor + maxColor) / 2;
	var s = _Utils_eq(minColor, maxColor) ? 0 : ((l < 0.5) ? ((maxColor - minColor) / (maxColor + minColor)) : ((maxColor - minColor) / ((2 - maxColor) - minColor)));
	var h1 = _Utils_eq(maxColor, r) ? ((g - b) / (maxColor - minColor)) : (_Utils_eq(maxColor, g) ? (2 + ((b - r) / (maxColor - minColor))) : (4 + ((r - g) / (maxColor - minColor))));
	var h2 = h1 * (1 / 6);
	var h3 = elm$core$Basics$isNaN(h2) ? 0 : ((h2 < 0) ? (h2 + 1) : h2);
	return {alpha: a, hue: h3, lightness: l, saturation: s};
};
var noahzgordon$elm_color_extra$Color$Manipulate$limit = A2(elm$core$Basics$clamp, 0, 1);
var noahzgordon$elm_color_extra$Color$Manipulate$saturate = F2(
	function (offset, cl) {
		var _n0 = avh4$elm_color$Color$toHsla(cl);
		var hue = _n0.hue;
		var saturation = _n0.saturation;
		var lightness = _n0.lightness;
		var alpha = _n0.alpha;
		return A4(
			avh4$elm_color$Color$hsla,
			hue,
			noahzgordon$elm_color_extra$Color$Manipulate$limit(saturation + offset),
			lightness,
			alpha);
	});
var noahzgordon$elm_color_extra$Color$Manipulate$grayscale = function (cl) {
	return A2(noahzgordon$elm_color_extra$Color$Manipulate$saturate, -1, cl);
};
var author$project$Lines$toLineStyle = F2(
	function (maybeHovered, lineData) {
		if (maybeHovered.$ === 'Nothing') {
			return A2(author$project$LineChart$Line$style, 1, elm$core$Basics$identity);
		} else {
			var hovered = maybeHovered.a;
			return A2(
				elm$core$List$any,
				elm$core$Basics$eq(hovered),
				lineData) ? A2(author$project$LineChart$Line$style, 2, elm$core$Basics$identity) : A2(author$project$LineChart$Line$style, 1, noahzgordon$elm_color_extra$Color$Manipulate$grayscale);
		}
	});
var author$project$Lines$lineConfig = function (maybeHovered) {
	return author$project$LineChart$Line$custom(
		author$project$Lines$toLineStyle(maybeHovered));
};
var author$project$LineChart$Axis$custom = author$project$Internal$Axis$custom;
var avh4$elm_color$Color$rgba = F4(
	function (r, g, b, a) {
		return A4(avh4$elm_color$Color$RgbaSpace, r, g, b, a);
	});
var author$project$LineChart$Colors$transparent = A4(avh4$elm_color$Color$rgba, 0, 0, 0, 0);
var author$project$Internal$Axis$Line$none = author$project$Internal$Axis$Line$custom(
	F2(
		function (_n0, _n1) {
			var min = _n1.min;
			var max = _n1.max;
			return {color: author$project$LineChart$Colors$transparent, end: max, events: _List_Nil, start: min, width: 0};
		}));
var author$project$LineChart$Axis$Line$none = author$project$Internal$Axis$Line$none;
var author$project$LineChart$Axis$Range$padded = author$project$Internal$Axis$Range$padded;
var author$project$Internal$Axis$Ticks$timeCustom = F3(
	function (zone, amount, tick) {
		return author$project$Internal$Axis$Ticks$custom(
			F2(
				function (data, range) {
					return A2(
						elm$core$List$map,
						tick,
						A3(
							author$project$Internal$Axis$Values$time,
							zone,
							amount,
							A2(author$project$Internal$Coordinate$smallestRange, data, range)));
				}));
	});
var author$project$LineChart$Axis$Ticks$timeCustom = author$project$Internal$Axis$Ticks$timeCustom;
var author$project$Internal$Axis$Title$atAxisMax = function () {
	var position = F2(
		function (data, range) {
			return range.max;
		});
	return author$project$Internal$Axis$Title$atPosition(position);
}();
var author$project$Internal$Axis$Title$default = A2(author$project$Internal$Axis$Title$atAxisMax, 0, 0);
var author$project$LineChart$Axis$Title$default = author$project$Internal$Axis$Title$default;
var author$project$LineChart$Colors$black = A3(avh4$elm_color$Color$rgb255, 0, 0, 0);
var author$project$LineChart$Junk$label = function (color) {
	return author$project$Internal$Svg$label(
		avh4$elm_color$Color$toCssString(color));
};
var author$project$Lines$tickLabel = author$project$LineChart$Junk$label(author$project$LineChart$Colors$black);
var author$project$Lines$tickTime = function (time) {
	var label = author$project$LineChart$Axis$Tick$format(time);
	return author$project$LineChart$Axis$Tick$custom(
		{
			color: author$project$LineChart$Colors$gray,
			direction: author$project$LineChart$Axis$Tick$negative,
			grid: false,
			label: elm$core$Maybe$Just(
				author$project$Lines$tickLabel(label)),
			length: 5,
			position: elm$time$Time$posixToMillis(time.timestamp),
			width: 1
		});
};
var author$project$Lines$xAxisConfig = author$project$LineChart$Axis$custom(
	{
		axisLine: author$project$LineChart$Axis$Line$none,
		pixels: 1270,
		range: A2(author$project$LineChart$Axis$Range$padded, 20, 20),
		ticks: A3(author$project$LineChart$Axis$Ticks$timeCustom, elm$time$Time$utc, 10, author$project$Lines$tickTime),
		title: author$project$LineChart$Axis$Title$default('Time'),
		variable: A2(
			elm$core$Basics$composeL,
			A2(
				elm$core$Basics$composeL,
				A2(elm$core$Basics$composeL, elm$core$Maybe$Just, elm$core$Basics$toFloat),
				elm$time$Time$posixToMillis),
			function ($) {
				return $.time;
			})
	});
var author$project$LineChart$Axis$Line$rangeFrame = author$project$Internal$Axis$Line$rangeFrame;
var author$project$LineChart$Axis$Ticks$custom = author$project$Internal$Axis$Ticks$custom;
var author$project$LineChart$Axis$Title$atDataMax = author$project$Internal$Axis$Title$atDataMax;
var author$project$Lines$middle = function (r) {
	return r.min + ((r.max - r.min) / 2);
};
var author$project$Lines$tickRain = function (_n0) {
	var value = _n0.a;
	var label = _n0.b;
	return author$project$LineChart$Axis$Tick$custom(
		{
			color: author$project$LineChart$Colors$gray,
			direction: author$project$LineChart$Axis$Tick$negative,
			grid: true,
			label: elm$core$Maybe$Just(
				author$project$Lines$tickLabel(label)),
			length: 5,
			position: value,
			width: 1
		});
};
var author$project$Lines$yAxisConfig = author$project$LineChart$Axis$custom(
	{
		axisLine: author$project$LineChart$Axis$Line$rangeFrame(author$project$LineChart$Colors$gray),
		pixels: 450,
		range: A2(author$project$LineChart$Axis$Range$padded, 20, 20),
		ticks: author$project$LineChart$Axis$Ticks$custom(
			F2(
				function (dataRange, axisRange) {
					return _List_fromArray(
						[
							author$project$Lines$tickRain(
							_Utils_Tuple2(dataRange.min, 'bits')),
							author$project$Lines$tickRain(
							_Utils_Tuple2(
								author$project$Lines$middle(dataRange),
								'some')),
							author$project$Lines$tickRain(
							_Utils_Tuple2(dataRange.max, 'lots'))
						]);
				})),
		title: A3(author$project$LineChart$Axis$Title$atDataMax, -10, -10, 'Rain'),
		variable: A2(
			elm$core$Basics$composeL,
			elm$core$Maybe$Just,
			function ($) {
				return $.rain;
			})
	});
var author$project$Lines$chartConfig = function (model) {
	return {
		area: author$project$LineChart$Area$default,
		container: author$project$Lines$containerConfig,
		dots: author$project$LineChart$Dots$custom(
			A2(author$project$LineChart$Dots$disconnected, 4, 2)),
		events: author$project$Lines$eventsConfig,
		grid: author$project$LineChart$Grid$default,
		interpolation: author$project$LineChart$Interpolation$monotone,
		intersection: author$project$LineChart$Axis$Intersection$default,
		junk: author$project$LineChart$Junk$default,
		legends: author$project$LineChart$Legends$default,
		line: author$project$Lines$lineConfig(model.hinted),
		x: author$project$Lines$xAxisConfig,
		y: author$project$Lines$yAxisConfig
	};
};
var noahzgordon$elm_color_extra$Color$Manipulate$darken = F2(
	function (offset, cl) {
		var _n0 = avh4$elm_color$Color$toHsla(cl);
		var hue = _n0.hue;
		var saturation = _n0.saturation;
		var lightness = _n0.lightness;
		var alpha = _n0.alpha;
		return A4(
			avh4$elm_color$Color$hsla,
			hue,
			saturation,
			noahzgordon$elm_color_extra$Color$Manipulate$limit(lightness - offset),
			alpha);
	});
var noahzgordon$elm_color_extra$Color$Manipulate$lighten = F2(
	function (offset, cl) {
		return A2(noahzgordon$elm_color_extra$Color$Manipulate$darken, -offset, cl);
	});
var author$project$Lines$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				author$project$LineChart$viewCustom,
				author$project$Lines$chartConfig(model),
				_List_fromArray(
					[
						A4(
						author$project$LineChart$line,
						A2(noahzgordon$elm_color_extra$Color$Manipulate$lighten, 0.2, author$project$LineChart$Colors$cyan),
						author$project$LineChart$Dots$circle,
						'Denmark',
						model.data.denmark),
						A4(
						author$project$LineChart$line,
						A2(noahzgordon$elm_color_extra$Color$Manipulate$lighten, 0, author$project$LineChart$Colors$cyan),
						author$project$LineChart$Dots$circle,
						'Sweden',
						model.data.sweden),
						A4(
						author$project$LineChart$line,
						A2(noahzgordon$elm_color_extra$Color$Manipulate$lighten, 0.2, author$project$LineChart$Colors$blue),
						author$project$LineChart$Dots$circle,
						'Iceland',
						model.data.iceland),
						A4(
						author$project$LineChart$line,
						A2(noahzgordon$elm_color_extra$Color$Manipulate$lighten, 0, author$project$LineChart$Colors$blue),
						author$project$LineChart$Dots$circle,
						'Greenland',
						model.data.greenland),
						A4(
						author$project$LineChart$line,
						A2(noahzgordon$elm_color_extra$Color$Manipulate$lighten, 0, author$project$LineChart$Colors$pink),
						author$project$LineChart$Dots$circle,
						'Norway',
						model.data.norway),
						A4(
						author$project$LineChart$line,
						A2(noahzgordon$elm_color_extra$Color$Manipulate$darken, 0.2, author$project$LineChart$Colors$pink),
						author$project$LineChart$Dots$circle,
						'Finland',
						model.data.finland)
					]))
			]));
};
var author$project$Main$Focus = function (a) {
	return {$: 'Focus', a: a};
};
var elm$html$Html$button = _VirtualDom_node('button');
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var elm$html$Html$Lazy$lazy = elm$virtual_dom$VirtualDom$lazy;
var author$project$Main$viewExample = F5(
	function (id, modifier, toMsg, viewArg, model) {
		var _class = 'view__example__container view__example__container--' + modifier;
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(_class)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$map,
					toMsg,
					A2(elm$html$Html$Lazy$lazy, viewArg, model)),
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('view__example__toggle-source'),
							elm$html$Html$Events$onClick(
							author$project$Main$Focus(id))
						]),
					_List_fromArray(
						[
							elm$html$Html$text('see source')
						]))
				]));
	});
var author$project$Area$source = '\n-- MODEL\n\n\ntype alias Model =\n    { data : Data\n    , hinted : List Datum\n    }\n\n\ntype alias Data =\n    { nora : List Datum\n    , noah : List Datum\n    , nina : List Datum\n    }\n\n\ntype alias Datum =\n    { time : Time.Posix\n    , velocity : Float\n    }\n\n\n\n-- INIT\n\n\ninit : ( Model, Cmd Msg )\ninit =\n    ( { data = Data [] [] []\n      , hinted = []\n      }\n    , generateData\n    )\n\n\n\n-- API\n\n\nsetData : Data -> Model -> Model\nsetData data model =\n    { model | data = data }\n\n\nsetHint : List Datum -> Model -> Model\nsetHint hinted model =\n    { model | hinted = hinted }\n\n\n\n-- UPDATE\n\n\ntype Msg\n    = RecieveData Data\n    | Hint (List Datum)\n\n\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        RecieveData data ->\n            model\n                |> setData data\n                |> addCmd Cmd.none\n\n        Hint points ->\n            model\n                |> setHint points\n                |> addCmd Cmd.none\n\n\naddCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )\naddCmd cmd model =\n    ( model, Cmd.none )\n\n\n\n-- VIEW\n\n\nview : Model -> Html.Html Msg\nview model =\n    Html.div []\n        [ LineChart.viewCustom (chartConfig model)\n            [ LineChart.line Colors.pink Dots.diamond "Nora" model.data.nora\n            , LineChart.line Colors.cyan Dots.circle "Noah" model.data.noah\n            , LineChart.line Colors.blue Dots.triangle "Nina" model.data.nina\n            ]\n        ]\n\n\n\n-- CHART CONFIG\n\n\nchartConfig : Model -> LineChart.Config Datum Msg\nchartConfig model =\n    { y = Axis.default 450 "velocity" .velocity\n    , x = Axis.time Time.utc 1270 "time" (toFloat << Time.posixToMillis << .time)\n    , container = containerConfig\n    , interpolation = Interpolation.monotone\n    , intersection = Intersection.default\n    , legends = Legends.default\n    , events = Events.hoverMany Hint\n    , junk = Junk.hoverMany model.hinted formatX formatY\n    , grid = Grid.dots 1 Colors.gray\n    , area = Area.stacked 0.5\n    , line = Line.default\n    , dots = Dots.custom (Dots.empty 5 1)\n    }\n\n\ncontainerConfig : Container.Config Msg\ncontainerConfig =\n    Container.custom\n        { attributesHtml = []\n        , attributesSvg = []\n        , size = Container.relative\n        , margin = Container.Margin 30 100 30 70\n        , id = "line-chart-area"\n        }\n\n\nformatX : Datum -> String\nformatX datum =\n    DateFormat.format\n        [ DateFormat.dayOfMonthSuffix\n        , DateFormat.text ". "\n        , DateFormat.monthNameAbbreviated\n        , DateFormat.text ", "\n        , DateFormat.yearNumber\n        ]\n        Time.utc\n        datum.time\n\n\nformatY : Datum -> String\nformatY datum =\n    String.fromFloat (round100 datum.velocity) ++ " m/s"\n\n\n\n-- UTILS\n\n\nround100 : Float -> Float\nround100 float =\n    toFloat (round (float * 100)) / 100\n\n\n\n-- GENERATE DATA\n\n\ngenerateData : Cmd Msg\ngenerateData =\n    let\n        genNumbers =\n            Random.list 40 (Random.float 5 20)\n\n        compile a b c =\n            Data (toData a) (toData b) (toData c)\n    in\n    Random.Pipeline.generate compile\n        |> Random.Pipeline.with genNumbers\n        |> Random.Pipeline.with genNumbers\n        |> Random.Pipeline.with genNumbers\n        |> Random.Pipeline.send RecieveData\n\n\ntoData : List Float -> List Datum\ntoData numbers =\n    let\n        toDatum index velocity =\n            Datum (indexToTime index) velocity\n    in\n    List.indexedMap toDatum numbers\n\n\nindexToTime : Int -> Time.Posix\nindexToTime index =\n    -- Every 3 hours, starting at Jan 2000\n    Time.Extra.add Time.Extra.Hour\n        (3 * index)\n        Time.utc\n        (Time.Extra.partsToPosix Time.utc <|\n            Time.Extra.Parts 2000 Time.Jan 1 0 0 0 0\n        )\n\n\n\n-- PROGRAM\n\n\nmain : Program () Model Msg\nmain =\n    Browser.element\n        { init = \\_ -> init\n        , update = update\n        , view = view\n        , subscriptions = always Sub.none\n        }\n';
var author$project$Lines$source = '\n-- MODEL\n\n\ntype alias Model =\n    { data : Data\n    , hinted : Maybe Datum\n    }\n\n\ntype alias Data =\n    { denmark : List Datum\n    , sweden : List Datum\n    , iceland : List Datum\n    , greenland : List Datum\n    , norway : List Datum\n    , finland : List Datum\n    }\n\n\ntype alias Datum =\n    { time : Time.Posix\n    , rain : Float\n    }\n\n\n\n-- INIT\n\n\ninit : ( Model, Cmd Msg )\ninit =\n    ( { data = Data [] [] [] [] [] []\n      , hinted = Nothing\n      }\n    , generateData\n    )\n\n\n\n-- API\n\n\nsetData : Data -> Model -> Model\nsetData data model =\n    { model | data = data }\n\n\nsetHint : Maybe Datum -> Model -> Model\nsetHint hinted model =\n    { model | hinted = hinted }\n\n\n\n-- UPDATE\n\n\ntype Msg\n    = RecieveData Data\n    | Hint (Maybe Datum)\n\n\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        RecieveData numbers ->\n            model\n                |> setData numbers\n                |> addCmd Cmd.none\n\n        Hint point ->\n            model\n                |> setHint point\n                |> addCmd Cmd.none\n\n\naddCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )\naddCmd cmd model =\n    ( model, Cmd.none )\n\n\n\n-- VIEW\n\n\nview : Model -> Html.Html Msg\nview model =\n    Html.div []\n        [ LineChart.viewCustom (chartConfig model)\n            [ LineChart.line (Manipulate.lighten 0.2 Colors.cyan) Dots.circle "Denmark" model.data.denmark\n            , LineChart.line (Manipulate.lighten 0 Colors.cyan) Dots.circle "Sweden" model.data.sweden\n            , LineChart.line (Manipulate.lighten 0.2 Colors.blue) Dots.circle "Iceland" model.data.iceland\n            , LineChart.line (Manipulate.lighten 0 Colors.blue) Dots.circle "Greenland" model.data.greenland\n            , LineChart.line (Manipulate.lighten 0 Colors.pink) Dots.circle "Norway" model.data.norway\n            , LineChart.line (Manipulate.darken 0.2 Colors.pink) Dots.circle "Finland" model.data.finland\n            ]\n        ]\n\n\n\n-- CHART CONFIG\n\n\nchartConfig : Model -> LineChart.Config Datum Msg\nchartConfig model =\n    { y = yAxisConfig\n    , x = xAxisConfig\n    , container = containerConfig\n    , interpolation = Interpolation.monotone\n    , intersection = Intersection.default\n    , legends = Legends.default\n    , events = eventsConfig\n    , junk = Junk.default\n    , grid = Grid.default\n    , area = Area.default\n    , line = lineConfig model.hinted\n    , dots = Dots.custom (Dots.disconnected 4 2)\n    }\n\n\n\n-- CHART CONFIG / AXES\n\n\nyAxisConfig : Axis.Config Datum Msg\nyAxisConfig =\n    Axis.custom\n        { title = Title.atDataMax -10 -10 "Rain"\n        , variable = Just << .rain\n        , pixels = 450\n        , range = Range.padded 20 20\n        , axisLine = AxisLine.rangeFrame Colors.gray\n        , ticks =\n            Ticks.custom <|\n                \\dataRange axisRange ->\n                    [ tickRain ( dataRange.min, "bits" )\n                    , tickRain ( middle dataRange, "some" )\n                    , tickRain ( dataRange.max, "lots" )\n                    ]\n        }\n\n\nxAxisConfig : Axis.Config Datum Msg\nxAxisConfig =\n    Axis.custom\n        { title = Title.default "Time"\n        , variable = Just << toFloat << Time.posixToMillis << .time\n        , pixels = 1270\n        , range = Range.padded 20 20\n        , axisLine = AxisLine.none\n        , ticks = Ticks.timeCustom Time.utc 10 tickTime\n        }\n\n\n\n-- CHART CONFIG / AXES / TICKS\n\n\ntickRain : ( Float, String ) -> Tick.Config msg\ntickRain ( value, label ) =\n    Tick.custom\n        { position = value\n        , color = Colors.gray\n        , width = 1\n        , length = 5\n        , grid = True\n        , direction = Tick.negative\n        , label = Just (tickLabel label)\n        }\n\n\ntickTime : Tick.Time -> Tick.Config msg\ntickTime time =\n    let\n        label =\n            Tick.format time\n    in\n    Tick.custom\n        { position = toFloat <| Time.posixToMillis <| time.timestamp\n        , color = Colors.gray\n        , width = 1\n        , length = 5\n        , grid = False\n        , direction = Tick.negative\n        , label = Just (tickLabel label)\n        }\n\n\ntickLabel : String -> Svg.Svg msg\ntickLabel =\n    Junk.label Colors.black\n\n\n\n-- CHART CONFIG / CONTIANER\n\n\ncontainerConfig : Container.Config Msg\ncontainerConfig =\n    Container.custom\n        { attributesHtml = []\n        , attributesSvg = []\n        , size = Container.relative\n        , margin = Container.Margin 30 180 30 70\n        , id = "line-chart-lines"\n        }\n\n\n\n-- CHART CONFIG / EVENTS\n\n\neventsConfig : Events.Config Datum Msg\neventsConfig =\n    Events.custom\n        [ Events.onMouseMove Hint Events.getNearest\n        , Events.onMouseLeave (Hint Nothing)\n        ]\n\n\n\n-- CHART CONFIG / LINE\n\n\nlineConfig : Maybe Datum -> Line.Config Datum\nlineConfig maybeHovered =\n    Line.custom (toLineStyle maybeHovered)\n\n\ntoLineStyle : Maybe Datum -> List Datum -> Line.Style\ntoLineStyle maybeHovered lineData =\n    case maybeHovered of\n        Nothing ->\n            Line.style 1 identity\n\n        Just hovered ->\n            if List.any ((==) hovered) lineData then\n                Line.style 2 identity\n\n            else\n                Line.style 1 Manipulate.grayscale\n\n\n\n-- UTILS\n\n\nround10 : Float -> Float\nround10 float =\n    toFloat (round (float * 10)) / 10\n\n\nmiddle : Coordinate.Range -> Float\nmiddle r =\n    r.min + (r.max - r.min) / 2\n\n\n\n-- GENERATE DATA\n\n\ngenerateData : Cmd Msg\ngenerateData =\n    let\n        genNumbers min max =\n            Random.list 10 (Random.float min max)\n\n        compile a b c d e f =\n            Data (toData a) (toData b) (toData c) (toData d) (toData e) (toData f)\n    in\n    Random.Pipeline.generate compile\n        |> Random.Pipeline.with (genNumbers 50 90)\n        |> Random.Pipeline.with (genNumbers 20 60)\n        |> Random.Pipeline.with (genNumbers 30 60)\n        |> Random.Pipeline.with (genNumbers 40 90)\n        |> Random.Pipeline.with (genNumbers 80 100)\n        |> Random.Pipeline.with (genNumbers 70 90)\n        |> Random.Pipeline.send RecieveData\n\n\ntoData : List Float -> List Datum\ntoData numbers =\n    let\n        toDatum index rain =\n            Datum (indexToTime index) rain\n    in\n    List.indexedMap toDatum numbers\n\n\nindexToTime : Int -> Time.Posix\nindexToTime index =\n    -- Every month, starting at Jan 2000\n    Time.Extra.add Time.Extra.Month\n        index\n        Time.utc\n        (Time.Extra.partsToPosix Time.utc <|\n            Time.Extra.Parts 2000 Time.Jan 1 0 0 0 0\n        )\n\n\n\n-- PROGRAM\n\n\nmain : Program () Model Msg\nmain =\n    Browser.element\n        { init = \\_ -> init\n        , update = update\n        , view = view\n        , subscriptions = always Sub.none\n        }\n';
var author$project$Main$CloseSource = {$: 'CloseSource'};
var author$project$Selection$source = '\nmain : Program () Model Msg\nmain =\n    Browser.element\n        { init = \\_ -> init\n        , update = update\n        , view = view\n        , subscriptions = always Sub.none\n        }\n\n\n\n-- MODEL\n\n\ntype alias Model =\n    { data : Data\n    , hovered : Maybe Float\n    , selection : Maybe Selection\n    , dragging : Bool\n    , hinted : Maybe Datum\n    }\n\n\ntype alias Selection =\n    { xStart : Float\n    , xEnd : Float\n    }\n\n\ntype alias Data =\n    { sanJose : List Datum\n    , sanDiego : List Datum\n    , sanFransisco : List Datum\n    }\n\n\ntype alias Datum =\n    { time : Time.Posix\n    , displacement : Float\n    }\n\n\n\n-- INIT\n\n\ninit : ( Model, Cmd Msg )\ninit =\n    ( { data = Data [] [] []\n      , hovered = Nothing\n      , selection = Nothing\n      , dragging = False\n      , hinted = Nothing\n      }\n    , generateData\n    )\n\n\ngenerateData : Cmd Msg\ngenerateData =\n    let\n        genNumbers min max =\n            Random.list 201 (Random.float min max)\n\n        compile a b c =\n            Data (toData a) (toData b) (toData c)\n    in\n    Random.Pipeline.generate compile\n        |> Random.Pipeline.with (genNumbers -10 10)\n        |> Random.Pipeline.with (genNumbers -7 7)\n        |> Random.Pipeline.with (genNumbers -8 8)\n        |> Random.Pipeline.send RecieveData\n\n\ntoData : List Float -> List Datum\ntoData numbers =\n    let\n        toDatum index displacement =\n            Datum (indexToTime index) displacement\n    in\n    List.indexedMap toDatum numbers\n\n\nindexToTime : Int -> Time.Posix\nindexToTime index =\n    -- Every 15 minutes, starting at Jan 2015\n    Time.Extra.add Time.Extra.Minute\n        (15 * index)\n        Time.utc\n        (Time.Extra.partsToPosix Time.utc <|\n            Time.Extra.Parts 2015 Time.Jan 1 0 0 0 0\n        )\n\n\n\n-- MODEL API\n\n\nsetData : Data -> Model -> Model\nsetData data model =\n    { model | data = data }\n\n\nsetSelection : Maybe Selection -> Model -> Model\nsetSelection selection model =\n    { model | selection = selection }\n\n\nsetDragging : Bool -> Model -> Model\nsetDragging dragging model =\n    { model | dragging = dragging }\n\n\nsetHovered : Maybe Float -> Model -> Model\nsetHovered hovered model =\n    { model | hovered = hovered }\n\n\nsetHint : Maybe Datum -> Model -> Model\nsetHint hinted model =\n    { model | hinted = hinted }\n\n\ngetSelectionXStart : Float -> Model -> Float\ngetSelectionXStart hovered model =\n    case model.selection of\n        Just selection ->\n            selection.xStart\n\n        Nothing ->\n            hovered\n\n\n\n-- UPDATE\n\n\ntype Msg\n    = RecieveData Data\n      -- Chart Main\n    | Hold Coordinate.Point\n    | Move Coordinate.Point\n    | Drop Coordinate.Point\n    | LeaveChart Coordinate.Point\n    | LeaveContainer Coordinate.Point\n      -- Chart Zoom\n    | Hint (Maybe Datum)\n\n\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        RecieveData data ->\n            model\n                |> setData data\n                |> addCmd Cmd.none\n\n        Hold point ->\n            model\n                |> setSelection Nothing\n                |> setDragging True\n                |> addCmd Cmd.none\n\n        Move point ->\n            if model.dragging then\n                let\n                    start =\n                        getSelectionXStart point.x model\n\n                    newSelection =\n                        Selection start point.x\n                in\n                model\n                    |> setSelection (Just newSelection)\n                    |> setHovered (Just point.x)\n                    |> addCmd Cmd.none\n\n            else\n                model\n                    |> setHovered (Just point.x)\n                    |> addCmd Cmd.none\n\n        Drop point ->\n            if point.x == getSelectionXStart point.x model then\n                model\n                    |> setSelection Nothing\n                    |> setDragging False\n                    |> addCmd Cmd.none\n\n            else\n                model\n                    |> setDragging False\n                    |> addCmd Cmd.none\n\n        LeaveChart point ->\n            model\n                |> setHovered Nothing\n                |> addCmd Cmd.none\n\n        LeaveContainer point ->\n            model\n                |> setDragging False\n                |> setHovered Nothing\n                |> addCmd Cmd.none\n\n        Hint datum ->\n            model\n                |> setHint datum\n                |> addCmd Cmd.none\n\n\naddCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )\naddCmd cmd model =\n    ( model, Cmd.none )\n\n\n\n-- VIEW\n\n\nview : Model -> Html.Html Msg\nview model =\n    Html.div [] <|\n        case model.selection of\n            Nothing ->\n                [ viewPlaceholder\n                , viewChartMain model\n                ]\n\n            Just selection ->\n                if selection.xStart == selection.xEnd then\n                    [ viewPlaceholder\n                    , viewChartMain model\n                    ]\n\n                else\n                    [ viewChartZoom model selection\n                    , viewChartMain model\n                    ]\n\n\nviewPlaceholder : Html.Html Msg\nviewPlaceholder =\n    Html.div\n        [ Html.Attributes.class "view__selection__placeholder" ]\n        [ viewInnerPlaceholder ]\n\n\nviewInnerPlaceholder : Html.Html Msg\nviewInnerPlaceholder =\n    Html.div\n        [ Html.Attributes.class "view__selection__placeholder__inner" ]\n        [ viewPlaceholderText ]\n\n\nviewPlaceholderText : Html.Html Msg\nviewPlaceholderText =\n    Html.div\n        [ Html.Attributes.class "view__selection__placeholder__inner__text" ]\n        [ Html.text "Select a range on the chart to the right!" ]\n\n\n\n-- MAIN CHART\n\n\nviewChartMain : Model -> Html.Html Msg\nviewChartMain model =\n    viewChart model.data\n        { range = Range.default\n        , junk = junkConfig model\n        , legends = Legends.default\n        , events = myEvents\n        , width = 670\n        , margin = Container.Margin 30 165 30 70\n        , dots = Dots.custom (Dots.full 0)\n        , id = "line-chart-selection-main"\n        }\n\n\nmyEvents : Events.Config Datum Msg\nmyEvents =\n    let\n        options bool =\n            { stopPropagation = True\n            , preventDefault = True\n            , catchOutsideChart = bool\n            }\n    in\n    Events.custom\n        [ Events.onWithOptions "mousedown" (options False) Hold Events.getData\n        , Events.onWithOptions "mousemove" (options False) Move Events.getData\n        , Events.onWithOptions "mouseup" (options True) Drop Events.getData\n        , Events.onWithOptions "mouseleave" (options False) LeaveChart Events.getData\n        , Events.onWithOptions "mouseleave" (options True) LeaveContainer Events.getData\n        ]\n\n\njunkConfig : Model -> Junk.Config Datum msg\njunkConfig model =\n    Junk.custom <|\n        \\system ->\n            { below = below system model.selection\n            , above = above system model.hovered\n            , html = []\n            }\n\n\nbelow : Coordinate.System -> Maybe Selection -> List (Svg.Svg msg)\nbelow system selection =\n    case selection of\n        Just { xStart, xEnd } ->\n            let\n                attributes =\n                    [ Svg.Attributes.fill "#4646461a" ]\n\n                ( yStart, yEnd ) =\n                    ( system.y.min, system.y.max )\n\n                viewSelection =\n                    Junk.rectangle system attributes xStart xEnd yStart yEnd\n            in\n            [ viewSelection ]\n\n        Nothing ->\n            []\n\n\nabove : Coordinate.System -> Maybe Float -> List (Svg.Svg msg)\nabove system maybeHovered =\n    case maybeHovered of\n        Just hovered ->\n            [ Junk.vertical system [] hovered\n            , title system\n            ]\n\n        Nothing ->\n            [ title system ]\n\n\ntitle : Coordinate.System -> Svg.Svg msg\ntitle system =\n    Junk.labelAt system system.x.max system.y.max 20 -5 "start" Colors.black "Earthquake in"\n\n\n\n-- ZOOM CHART\n\n\nviewChartZoom : Model -> Selection -> Html.Html Msg\nviewChartZoom model selection =\n    viewChart model.data\n        { range = xAxisRangeConfig selection\n        , junk =\n            Junk.hoverOne model.hinted\n                [ ( "time", formatX )\n                , ( "displacement", formatY )\n                ]\n        , events = Events.hoverOne Hint\n        , legends = Legends.none\n        , dots = Dots.hoverOne model.hinted\n        , width = 670\n        , margin = Container.Margin 30 60 30 75\n        , id = "line-chart-zoom"\n        }\n\n\nxAxisRangeConfig : Selection -> Range.Config\nxAxisRangeConfig selection =\n    let\n        xStart =\n            min selection.xStart selection.xEnd\n\n        xEnd =\n            max selection.xStart selection.xEnd\n    in\n    Range.window xStart xEnd\n\n\nformatX : Datum -> String\nformatX datum =\n    DateFormat.format\n        [ DateFormat.hourFixed\n        , DateFormat.text ":"\n        , DateFormat.minuteFixed\n        , DateFormat.amPmLowercase\n        , DateFormat.text ", "\n        , DateFormat.dayOfMonthSuffix\n        , DateFormat.text ". "\n        , DateFormat.monthNameAbbreviated\n        , DateFormat.text ", "\n        , DateFormat.yearNumber\n        ]\n        Time.utc\n        datum.time\n\n\nformatY : Datum -> String\nformatY datum =\n    String.fromFloat (round100 datum.displacement)\n\n\n\n-- VIEW CHART\n\n\ntype alias Config =\n    { range : Range.Config\n    , junk : Junk.Config Datum Msg\n    , events : Events.Config Datum Msg\n    , legends : Legends.Config Datum Msg\n    , dots : Dots.Config Datum\n    , margin : Container.Margin\n    , width : Int\n    , id : String\n    }\n\n\nviewChart : Data -> Config -> Html.Html Msg\nviewChart data { range, junk, events, legends, dots, width, margin, id } =\n    let\n        containerStyles =\n            [ Html.Attributes.style "display" "inline-block"\n            , Html.Attributes.style "width" "50%"\n            , Html.Attributes.style "height" "100%"\n            ]\n    in\n    LineChart.viewCustom\n        { y =\n            Axis.custom\n                { title = Title.atAxisMax 50 0 "displacement"\n                , variable = Just << .displacement\n                , pixels = 450\n                , range = Range.padded 20 20\n                , axisLine = AxisLine.rangeFrame Colors.gray\n                , ticks = Ticks.float 5\n                }\n        , x =\n            Axis.custom\n                { title = Title.default "time"\n                , variable = Just << toFloat << Time.posixToMillis << .time\n                , pixels = width\n                , range = range\n                , axisLine = AxisLine.rangeFrame Colors.gray\n                , ticks = Ticks.time Time.utc 5\n                }\n        , container =\n            Container.custom\n                { attributesHtml = containerStyles\n                , attributesSvg = []\n                , size = Container.static\n                , margin = margin\n                , id = id\n                }\n        , interpolation = Interpolation.monotone\n        , intersection = Intersection.default\n        , legends = legends\n        , events = events\n        , junk = junk\n        , grid = Grid.default\n        , area = Area.default\n        , line = Line.default\n        , dots = dots\n        }\n        [ LineChart.line Colors.pink Dots.circle "San Jose" data.sanJose\n        , LineChart.line Colors.cyan Dots.circle "San Fransisco" data.sanFransisco\n        , LineChart.line Colors.blue Dots.circle "San Diego" data.sanDiego\n        ]\n\n\n\n-- UTILS\n\n\nround100 : Float -> Float\nround100 float =\n    toFloat (round (float * 100)) / 100\n';
var author$project$Stepped$source = '\nmain : Program () Model Msg\nmain =\n    Browser.element\n        { init = \\_ -> init\n        , update = update\n        , view = view\n        , subscriptions = always Sub.none\n        }\n\n\n\n-- MODEL\n\n\ntype alias Model =\n    { data : List Data\n    , hinted : Maybe Data\n    }\n\n\ntype alias Data =\n    { year : Int\n    , price : Float\n    }\n\n\n\n-- INIT\n\n\ninit : ( Model, Cmd Msg )\ninit =\n    ( { data = initData\n      , hinted = Nothing\n      }\n    , Cmd.none\n    )\n\n\ninitData : List Data\ninitData =\n    [ Data 1980 0.12\n    , Data 1981 0.14\n    , Data 1982 0.155\n    , Data 1983 0.16\n    , Data 1984 0.17\n    , Data 1985 0.17\n    , Data 1986 0.18\n    , Data 1987 0.18\n    , Data 1988 0.19\n    , Data 1989 0.2\n    , Data 1990 0.22\n    , Data 1991 0.24\n    , Data 1992 0.24\n    , Data 1993 0.25\n    , Data 1994 0.25\n    , Data 1995 0.25\n    , Data 1996 0.26\n    , Data 1997 0.26\n    , Data 1998 0.26\n    , Data 1999 0.26\n    , Data 2000 0.27\n    , Data 2001 0.27\n    , Data 2002 0.27\n    , Data 2003 0.28\n    , Data 2004 0.28\n    , Data 2005 0.3\n    , Data 2006 0.32\n    , Data 2007 0.34\n    , Data 2008 0.36\n    , Data 2009 0.39\n    , Data 2010 0.41\n    , Data 2011 0.46\n    , Data 2012 0.6\n    ]\n\n\n\n-- MODEL API\n\n\nsetHint : Maybe Data -> Model -> Model\nsetHint hinted model =\n    { model | hinted = hinted }\n\n\n\n-- UPDATE\n\n\ntype Msg\n    = Hint (Maybe Data)\n\n\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        Hint point ->\n            model\n                |> setHint point\n                |> addCmd Cmd.none\n\n\naddCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )\naddCmd cmd model =\n    ( model, cmd )\n\n\n\n-- VIEW\n\n\nview : Model -> Html.Html Msg\nview model =\n    Html.div [] [ chart model ]\n\n\n\n-- CHART\n\n\nchart : Model -> Html.Html Msg\nchart model =\n    LineChart.viewCustom\n        { y =\n            Axis.custom\n                { title = Title.default "price (£)"\n                , variable = Just << .price\n                , pixels = 380\n                , range = Range.padded 20 20\n                , axisLine = AxisLine.full Colors.gray\n                , ticks = Ticks.float 5\n                }\n        , x =\n            let\n                toDate year =\n                    Time.Extra.Parts year Time.Jan 1 0 0 0 0 |> Time.Extra.partsToPosix Time.utc\n            in\n            Axis.custom\n                { title = Title.default "Year"\n                , variable = Just << toFloat << Time.posixToMillis << toDate << .year\n                , pixels = 1270\n                , range = Range.padded 20 20\n                , axisLine = AxisLine.full Colors.gray\n                , ticks = Ticks.time Time.utc 10\n                }\n        , container =\n            Container.custom\n                { attributesHtml = []\n                , attributesSvg = []\n                , size = Container.relative\n                , margin = Container.Margin 30 140 30 70\n                , id = "line-chart-stepped"\n                }\n        , interpolation = Interpolation.stepped\n        , intersection = Intersection.default\n        , legends = Legends.default\n        , events = Events.hoverOne Hint\n        , junk =\n            Junk.hoverOne model.hinted\n                [ ( "year", \\datum -> String.fromInt datum.year )\n                , ( "price", \\datum -> String.fromFloat datum.price ++ "£" )\n                ]\n        , grid = Grid.default\n        , area = Area.default\n        , line = Line.default\n        , dots =\n            let\n                styleLegend _ =\n                    Dots.empty 5 1\n\n                styleIndividual datum =\n                    if Just datum == model.hinted then\n                        Dots.full 5\n\n                    else\n                        Dots.empty 5 1\n            in\n            Dots.customAny\n                { legend = styleLegend\n                , individual = styleIndividual\n                }\n        }\n        [ LineChart.line Colors.pink Dots.circle "UK stamp" model.data ]\n\n\n\n-- UTILS\n\n\nround100 : Float -> Float\nround100 float =\n    toFloat (round (float * 100)) / 100\n';
var elm$html$Html$pre = _VirtualDom_node('pre');
var author$project$Main$viewSource = F2(
	function (id, isSourceOpen) {
		var viewInnerSource = F2(
			function (i, s) {
				return _Utils_eq(i, id) ? A2(
					elm$html$Html$pre,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('shown')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(s)
						])) : A2(
					elm$html$Html$pre,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('hidden')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(s)
						]));
			});
		var viewSources = A2(
			elm$core$List$indexedMap,
			viewInnerSource,
			_List_fromArray(
				[author$project$Area$source, author$project$Selection$source, author$project$Lines$source, author$project$Stepped$source]));
		var classes = isSourceOpen ? 'view__source__container view__source__container--open' : 'view__source__container view__source__container--closed';
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(classes)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(author$project$Main$CloseSource)
						]),
					_List_fromArray(
						[
							elm$html$Html$text('[x] close')
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('view__source__inner elm')
						]),
					viewSources)
				]));
	});
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var author$project$Main$viewTitle = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('view__title__container')
		]),
	_List_fromArray(
		[
			A2(
			elm$html$Html$h1,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('view__title')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('line-charts')
				])),
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('view__github-link')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('https://github.com/terezka/line-charts')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Github')
						])),
					elm$html$Html$text(' / '),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('https://twitter.com/terezk_a')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Twitter')
						])),
					elm$html$Html$text(' / '),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('http://package.elm-lang.org/packages/terezka/line-charts/latest')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Docs')
						]))
				])),
			A2(
			elm$html$Html$p,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('view__tag-line')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('A opinionated library for plotting series in SVG.')
				])),
			A2(
			elm$html$Html$p,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('view__tag-line')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Written in all Elm.')
				]))
		]));
var author$project$Internal$Axis$Range$default = A2(author$project$Internal$Axis$Range$padded, 0, 0);
var author$project$LineChart$Axis$Range$default = author$project$Internal$Axis$Range$default;
var author$project$Internal$Dots$Full = {$: 'Full'};
var author$project$Internal$Dots$full = function (radius) {
	return A2(author$project$Internal$Dots$style, radius, author$project$Internal$Dots$Full);
};
var author$project$LineChart$Dots$full = author$project$Internal$Dots$full;
var author$project$Internal$Junk$custom = function (func) {
	return author$project$Internal$Junk$Config(
		F3(
			function (_n0, _n1, _n2) {
				return func;
			}));
};
var author$project$LineChart$Junk$custom = author$project$Internal$Junk$custom;
var author$project$LineChart$Junk$vertical = F3(
	function (system, attributes, at) {
		return A5(
			author$project$Internal$Svg$vertical,
			system,
			A2(
				elm$core$List$cons,
				author$project$LineChart$Junk$withinChartArea(system),
				attributes),
			at,
			system.y.min,
			system.y.max);
	});
var author$project$LineChart$Junk$move = author$project$Internal$Svg$move;
var author$project$LineChart$Junk$offset = author$project$Internal$Svg$offset;
var author$project$LineChart$Junk$transform = author$project$Internal$Svg$transform;
var author$project$LineChart$Junk$labelAt = F8(
	function (system, x, y, xo, yo, anchor, color, text) {
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					author$project$LineChart$Junk$transform(
					_List_fromArray(
						[
							A3(author$project$LineChart$Junk$move, system, x, y),
							A2(author$project$LineChart$Junk$offset, xo, yo)
						])),
					elm$svg$Svg$Attributes$style('text-anchor: ' + (anchor + ';'))
				]),
			_List_fromArray(
				[
					A2(author$project$LineChart$Junk$label, color, text)
				]));
	});
var author$project$Selection$title = function (system) {
	return A8(author$project$LineChart$Junk$labelAt, system, system.x.max, system.y.max, 20, -5, 'start', author$project$LineChart$Colors$black, 'Earthquake in');
};
var author$project$Selection$above = F2(
	function (system, maybeHovered) {
		if (maybeHovered.$ === 'Just') {
			var hovered = maybeHovered.a;
			return _List_fromArray(
				[
					A3(author$project$LineChart$Junk$vertical, system, _List_Nil, hovered),
					author$project$Selection$title(system)
				]);
		} else {
			return _List_fromArray(
				[
					author$project$Selection$title(system)
				]);
		}
	});
var author$project$Internal$Svg$rectangle = F6(
	function (system, userAttributes, x1, x2, y1, y2) {
		var attributes = A3(
			author$project$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$fill(
					avh4$elm_color$Color$toCssString(author$project$LineChart$Colors$gray))
				]),
			userAttributes,
			_List_Nil);
		return A3(
			author$project$Internal$Path$view,
			system,
			attributes,
			_List_fromArray(
				[
					author$project$Internal$Path$Move(
					{x: x1, y: y1}),
					author$project$Internal$Path$Line(
					{x: x1, y: y2}),
					author$project$Internal$Path$Line(
					{x: x2, y: y2}),
					author$project$Internal$Path$Line(
					{x: x2, y: y1})
				]));
	});
var author$project$LineChart$Junk$rectangle = F2(
	function (system, attributes) {
		return A2(
			author$project$Internal$Svg$rectangle,
			system,
			A2(
				elm$core$List$cons,
				author$project$LineChart$Junk$withinChartArea(system),
				attributes));
	});
var author$project$Selection$below = F2(
	function (system, selection) {
		if (selection.$ === 'Just') {
			var xStart = selection.a.xStart;
			var xEnd = selection.a.xEnd;
			var attributes = _List_fromArray(
				[
					elm$svg$Svg$Attributes$fill('#4646461a')
				]);
			var _n1 = _Utils_Tuple2(system.y.min, system.y.max);
			var yStart = _n1.a;
			var yEnd = _n1.b;
			var viewSelection = A6(author$project$LineChart$Junk$rectangle, system, attributes, xStart, xEnd, yStart, yEnd);
			return _List_fromArray(
				[viewSelection]);
		} else {
			return _List_Nil;
		}
	});
var author$project$Selection$junkConfig = function (model) {
	return author$project$LineChart$Junk$custom(
		function (system) {
			return {
				above: A2(author$project$Selection$above, system, model.hovered),
				below: A2(author$project$Selection$below, system, model.selection),
				html: _List_Nil
			};
		});
};
var author$project$Internal$Events$getData = author$project$Internal$Events$Decoder(
	F3(
		function (points, system, searchedSvg) {
			return A2(author$project$LineChart$Coordinate$toData, system, searchedSvg);
		}));
var author$project$LineChart$Events$getData = author$project$Internal$Events$getData;
var author$project$Internal$Events$onWithOptions = F4(
	function (event, options, toMsg, decoder) {
		return A2(
			author$project$Internal$Events$Event,
			options.catchOutsideChart,
			F2(
				function (data, system) {
					return A2(
						elm$html$Html$Events$custom,
						event,
						A4(
							author$project$Internal$Events$toJsonDecoder,
							options,
							data,
							system,
							A2(author$project$Internal$Events$map, toMsg, decoder)));
				}));
	});
var author$project$LineChart$Events$onWithOptions = author$project$Internal$Events$onWithOptions;
var author$project$Selection$Drop = function (a) {
	return {$: 'Drop', a: a};
};
var author$project$Selection$Hold = function (a) {
	return {$: 'Hold', a: a};
};
var author$project$Selection$LeaveChart = function (a) {
	return {$: 'LeaveChart', a: a};
};
var author$project$Selection$LeaveContainer = function (a) {
	return {$: 'LeaveContainer', a: a};
};
var author$project$Selection$Move = function (a) {
	return {$: 'Move', a: a};
};
var author$project$Selection$myEvents = function () {
	var options = function (bool) {
		return {catchOutsideChart: bool, preventDefault: true, stopPropagation: true};
	};
	return author$project$LineChart$Events$custom(
		_List_fromArray(
			[
				A4(
				author$project$LineChart$Events$onWithOptions,
				'mousedown',
				options(false),
				author$project$Selection$Hold,
				author$project$LineChart$Events$getData),
				A4(
				author$project$LineChart$Events$onWithOptions,
				'mousemove',
				options(false),
				author$project$Selection$Move,
				author$project$LineChart$Events$getData),
				A4(
				author$project$LineChart$Events$onWithOptions,
				'mouseup',
				options(true),
				author$project$Selection$Drop,
				author$project$LineChart$Events$getData),
				A4(
				author$project$LineChart$Events$onWithOptions,
				'mouseleave',
				options(false),
				author$project$Selection$LeaveChart,
				author$project$LineChart$Events$getData),
				A4(
				author$project$LineChart$Events$onWithOptions,
				'mouseleave',
				options(true),
				author$project$Selection$LeaveContainer,
				author$project$LineChart$Events$getData)
			]));
}();
var author$project$Internal$Axis$Ticks$floatCustom = F2(
	function (amount, tick) {
		return author$project$Internal$Axis$Ticks$custom(
			F2(
				function (data, range) {
					return A2(
						elm$core$List$map,
						tick,
						A2(
							author$project$Internal$Axis$Values$float,
							author$project$Internal$Axis$Values$around(amount),
							A2(author$project$Internal$Coordinate$smallestRange, data, range)));
				}));
	});
var author$project$Internal$Axis$Ticks$float = function (amount) {
	return A2(author$project$Internal$Axis$Ticks$floatCustom, amount, author$project$LineChart$Axis$Tick$float);
};
var author$project$LineChart$Axis$Ticks$float = author$project$Internal$Axis$Ticks$float;
var author$project$Internal$Axis$Ticks$time = F2(
	function (zone, amount) {
		return A3(author$project$Internal$Axis$Ticks$timeCustom, zone, amount, author$project$LineChart$Axis$Tick$time);
	});
var author$project$LineChart$Axis$Ticks$time = author$project$Internal$Axis$Ticks$time;
var author$project$LineChart$Axis$Title$atAxisMax = author$project$Internal$Axis$Title$atAxisMax;
var author$project$Internal$Container$Static = {$: 'Static'};
var author$project$Internal$Container$static = author$project$Internal$Container$Static;
var author$project$LineChart$Container$static = author$project$Internal$Container$static;
var author$project$Selection$viewChart = F2(
	function (data, _n0) {
		var range = _n0.range;
		var junk = _n0.junk;
		var events = _n0.events;
		var legends = _n0.legends;
		var dots = _n0.dots;
		var width = _n0.width;
		var margin = _n0.margin;
		var id = _n0.id;
		var containerStyles = _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'display', 'inline-block'),
				A2(elm$html$Html$Attributes$style, 'width', '50%'),
				A2(elm$html$Html$Attributes$style, 'height', '100%')
			]);
		return A2(
			author$project$LineChart$viewCustom,
			{
				area: author$project$LineChart$Area$default,
				container: author$project$LineChart$Container$custom(
					{attributesHtml: containerStyles, attributesSvg: _List_Nil, id: id, margin: margin, size: author$project$LineChart$Container$static}),
				dots: dots,
				events: events,
				grid: author$project$LineChart$Grid$default,
				interpolation: author$project$LineChart$Interpolation$monotone,
				intersection: author$project$LineChart$Axis$Intersection$default,
				junk: junk,
				legends: legends,
				line: author$project$LineChart$Line$default,
				x: author$project$LineChart$Axis$custom(
					{
						axisLine: author$project$LineChart$Axis$Line$rangeFrame(author$project$LineChart$Colors$gray),
						pixels: width,
						range: range,
						ticks: A2(author$project$LineChart$Axis$Ticks$time, elm$time$Time$utc, 5),
						title: author$project$LineChart$Axis$Title$default('time'),
						variable: A2(
							elm$core$Basics$composeL,
							A2(
								elm$core$Basics$composeL,
								A2(elm$core$Basics$composeL, elm$core$Maybe$Just, elm$core$Basics$toFloat),
								elm$time$Time$posixToMillis),
							function ($) {
								return $.time;
							})
					}),
				y: author$project$LineChart$Axis$custom(
					{
						axisLine: author$project$LineChart$Axis$Line$rangeFrame(author$project$LineChart$Colors$gray),
						pixels: 450,
						range: A2(author$project$LineChart$Axis$Range$padded, 20, 20),
						ticks: author$project$LineChart$Axis$Ticks$float(5),
						title: A3(author$project$LineChart$Axis$Title$atAxisMax, 50, 0, 'displacement'),
						variable: A2(
							elm$core$Basics$composeL,
							elm$core$Maybe$Just,
							function ($) {
								return $.displacement;
							})
					})
			},
			_List_fromArray(
				[
					A4(author$project$LineChart$line, author$project$LineChart$Colors$pink, author$project$LineChart$Dots$circle, 'San Jose', data.sanJose),
					A4(author$project$LineChart$line, author$project$LineChart$Colors$cyan, author$project$LineChart$Dots$circle, 'San Fransisco', data.sanFransisco),
					A4(author$project$LineChart$line, author$project$LineChart$Colors$blue, author$project$LineChart$Dots$circle, 'San Diego', data.sanDiego)
				]));
	});
var author$project$Selection$viewChartMain = function (model) {
	return A2(
		author$project$Selection$viewChart,
		model.data,
		{
			dots: author$project$LineChart$Dots$custom(
				author$project$LineChart$Dots$full(0)),
			events: author$project$Selection$myEvents,
			id: 'line-chart-selection-main',
			junk: author$project$Selection$junkConfig(model),
			legends: author$project$LineChart$Legends$default,
			margin: A4(author$project$LineChart$Container$Margin, 30, 165, 30, 70),
			range: author$project$LineChart$Axis$Range$default,
			width: 670
		});
};
var author$project$Internal$Dots$customAny = author$project$Internal$Dots$Config;
var author$project$Internal$Dots$Aura = F2(
	function (a, b) {
		return {$: 'Aura', a: a, b: b};
	});
var author$project$Internal$Dots$aura = F3(
	function (radius, aura_, opacity) {
		return A2(
			author$project$Internal$Dots$style,
			radius,
			A2(author$project$Internal$Dots$Aura, aura_, opacity));
	});
var author$project$LineChart$Dots$aura = author$project$Internal$Dots$aura;
var author$project$LineChart$Dots$hoverOne = function (maybeHovered) {
	var styleLegend = function (_n0) {
		return A2(author$project$LineChart$Dots$disconnected, 10, 2);
	};
	var styleIndividual = function (datum) {
		return _Utils_eq(
			elm$core$Maybe$Just(datum),
			maybeHovered) ? A3(author$project$LineChart$Dots$aura, 7, 6, 0.3) : A2(author$project$LineChart$Dots$disconnected, 10, 2);
	};
	return author$project$Internal$Dots$customAny(
		{individual: styleIndividual, legend: styleLegend});
};
var author$project$Internal$Events$withinRadius = F4(
	function (system, radius, searched, dot) {
		return _Utils_cmp(
			A3(author$project$Internal$Events$distance, system, searched, dot),
			radius) < 1;
	});
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Internal$Events$getWithin = function (radius) {
	return author$project$Internal$Events$Decoder(
		F3(
			function (points, system, searchedSvg) {
				var searched = A2(author$project$LineChart$Coordinate$toData, system, searchedSvg);
				var keepIfEligible = function (closest) {
					return A4(author$project$Internal$Events$withinRadius, system, radius, searched, closest.point) ? elm$core$Maybe$Just(closest.user) : elm$core$Maybe$Nothing;
				};
				return A2(
					elm$core$Maybe$andThen,
					keepIfEligible,
					A3(author$project$Internal$Events$getNearestHelp, points, system, searched));
			}));
};
var author$project$Internal$Events$hoverOne = function (msg) {
	return author$project$Internal$Events$custom(
		_List_fromArray(
			[
				A2(
				author$project$Internal$Events$onMouseMove,
				msg,
				author$project$Internal$Events$getWithin(30)),
				A3(
				author$project$Internal$Events$on,
				'touchstart',
				msg,
				author$project$Internal$Events$getWithin(100)),
				A3(
				author$project$Internal$Events$on,
				'touchmove',
				msg,
				author$project$Internal$Events$getWithin(100)),
				author$project$Internal$Events$onMouseLeave(
				msg(elm$core$Maybe$Nothing))
			]));
};
var author$project$LineChart$Events$hoverOne = author$project$Internal$Events$hoverOne;
var author$project$Internal$Junk$findSeries = F2(
	function (hovered, datas) {
		findSeries:
		while (true) {
			if (!datas.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var _n1 = datas.a;
				var color = _n1.a;
				var label = _n1.b;
				var data = _n1.c;
				var rest = datas.b;
				var _n2 = A2(
					author$project$Internal$Junk$find,
					_List_fromArray(
						[hovered]),
					data);
				if (_n2.$ === 'Just') {
					var found = _n2.a;
					return elm$core$Maybe$Just(
						_Utils_Tuple3(color, label, data));
				} else {
					var $temp$hovered = hovered,
						$temp$datas = rest;
					hovered = $temp$hovered;
					datas = $temp$datas;
					continue findSeries;
				}
			}
		}
	});
var author$project$Internal$Junk$hoverOneHtml = F6(
	function (series, system, toX, toY, properties, hovered) {
		var y = A2(
			elm$core$Maybe$withDefault,
			A2(
				author$project$Internal$Junk$middle,
				function ($) {
					return $.y;
				},
				system),
			toY(hovered));
		var x = A2(
			elm$core$Maybe$withDefault,
			A2(
				author$project$Internal$Junk$middle,
				function ($) {
					return $.x;
				},
				system),
			toX(hovered));
		var viewValue = function (_n1) {
			var label = _n1.a;
			var value = _n1.b;
			return A3(
				author$project$Internal$Junk$viewRow,
				'inherit',
				label,
				value(hovered));
		};
		var viewColorLabel = F2(
			function (color, label) {
				return A2(
					elm$html$Html$p,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'margin', '0'),
							A2(elm$html$Html$Attributes$style, 'color', color)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(label)
						]));
			});
		var viewHeaderOne = A2(
			author$project$Internal$Utils$viewMaybe,
			A2(author$project$Internal$Junk$findSeries, hovered, series),
			function (_n0) {
				var color = _n0.a;
				var label = _n0.b;
				return author$project$Internal$Junk$viewHeader(
					_List_fromArray(
						[
							A2(
							viewColorLabel,
							avh4$elm_color$Color$toCssString(color),
							label)
						]));
			});
		return A5(
			author$project$Internal$Junk$hoverAt,
			system,
			x,
			y,
			_List_Nil,
			A2(
				elm$core$List$cons,
				viewHeaderOne,
				A2(elm$core$List$map, viewValue, properties)));
	});
var author$project$Internal$Junk$hoverOne = F2(
	function (hovered, properties) {
		return author$project$Internal$Junk$Config(
			F4(
				function (series, toX, toY, system) {
					return {
						above: _List_Nil,
						below: _List_Nil,
						html: _List_fromArray(
							[
								A2(
								author$project$Internal$Utils$viewMaybe,
								hovered,
								A5(author$project$Internal$Junk$hoverOneHtml, series, system, toX, toY, properties))
							])
					};
				}));
	});
var author$project$LineChart$Junk$hoverOne = author$project$Internal$Junk$hoverOne;
var author$project$Internal$Legends$None = {$: 'None'};
var author$project$Internal$Legends$none = author$project$Internal$Legends$None;
var author$project$LineChart$Legends$none = author$project$Internal$Legends$none;
var author$project$Selection$Hint = function (a) {
	return {$: 'Hint', a: a};
};
var ryannhg$date_format$DateFormat$HourFixed = {$: 'HourFixed'};
var ryannhg$date_format$DateFormat$hourFixed = ryannhg$date_format$DateFormat$HourFixed;
var author$project$Selection$formatX = function (datum) {
	return A3(
		ryannhg$date_format$DateFormat$format,
		_List_fromArray(
			[
				ryannhg$date_format$DateFormat$hourFixed,
				ryannhg$date_format$DateFormat$text(':'),
				ryannhg$date_format$DateFormat$minuteFixed,
				ryannhg$date_format$DateFormat$amPmLowercase,
				ryannhg$date_format$DateFormat$text(', '),
				ryannhg$date_format$DateFormat$dayOfMonthSuffix,
				ryannhg$date_format$DateFormat$text('. '),
				ryannhg$date_format$DateFormat$monthNameAbbreviated,
				ryannhg$date_format$DateFormat$text(', '),
				ryannhg$date_format$DateFormat$yearNumber
			]),
		elm$time$Time$utc,
		datum.time);
};
var author$project$Selection$round100 = function (_float) {
	return elm$core$Basics$round(_float * 100) / 100;
};
var author$project$Selection$formatY = function (datum) {
	return elm$core$String$fromFloat(
		author$project$Selection$round100(datum.displacement));
};
var author$project$Internal$Axis$Range$Window = F2(
	function (a, b) {
		return {$: 'Window', a: a, b: b};
	});
var author$project$Internal$Axis$Range$window = author$project$Internal$Axis$Range$Window;
var author$project$LineChart$Axis$Range$window = author$project$Internal$Axis$Range$window;
var author$project$Selection$xAxisRangeConfig = function (selection) {
	var xStart = A2(elm$core$Basics$min, selection.xStart, selection.xEnd);
	var xEnd = A2(elm$core$Basics$max, selection.xStart, selection.xEnd);
	return A2(author$project$LineChart$Axis$Range$window, xStart, xEnd);
};
var author$project$Selection$viewChartZoom = F2(
	function (model, selection) {
		return A2(
			author$project$Selection$viewChart,
			model.data,
			{
				dots: author$project$LineChart$Dots$hoverOne(model.hinted),
				events: author$project$LineChart$Events$hoverOne(author$project$Selection$Hint),
				id: 'line-chart-zoom',
				junk: A2(
					author$project$LineChart$Junk$hoverOne,
					model.hinted,
					_List_fromArray(
						[
							_Utils_Tuple2('time', author$project$Selection$formatX),
							_Utils_Tuple2('displacement', author$project$Selection$formatY)
						])),
				legends: author$project$LineChart$Legends$none,
				margin: A4(author$project$LineChart$Container$Margin, 30, 60, 30, 75),
				range: author$project$Selection$xAxisRangeConfig(selection),
				width: 670
			});
	});
var author$project$Selection$viewPlaceholderText = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('view__selection__placeholder__inner__text')
		]),
	_List_fromArray(
		[
			elm$html$Html$text('Select a range on the chart to the right!')
		]));
var author$project$Selection$viewInnerPlaceholder = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('view__selection__placeholder__inner')
		]),
	_List_fromArray(
		[author$project$Selection$viewPlaceholderText]));
var author$project$Selection$viewPlaceholder = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('view__selection__placeholder')
		]),
	_List_fromArray(
		[author$project$Selection$viewInnerPlaceholder]));
var author$project$Selection$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		function () {
			var _n0 = model.selection;
			if (_n0.$ === 'Nothing') {
				return _List_fromArray(
					[
						author$project$Selection$viewPlaceholder,
						author$project$Selection$viewChartMain(model)
					]);
			} else {
				var selection = _n0.a;
				return _Utils_eq(selection.xStart, selection.xEnd) ? _List_fromArray(
					[
						author$project$Selection$viewPlaceholder,
						author$project$Selection$viewChartMain(model)
					]) : _List_fromArray(
					[
						A2(author$project$Selection$viewChartZoom, model, selection),
						author$project$Selection$viewChartMain(model)
					]);
			}
		}());
};
var author$project$Internal$Axis$Line$full = function (color) {
	return author$project$Internal$Axis$Line$custom(
		F2(
			function (data, range) {
				return {color: color, end: range.max, events: _List_Nil, start: range.min, width: 1};
			}));
};
var author$project$LineChart$Axis$Line$full = author$project$Internal$Axis$Line$full;
var author$project$LineChart$Dots$customAny = author$project$Internal$Dots$customAny;
var author$project$Internal$Interpolation$Stepped = {$: 'Stepped'};
var author$project$LineChart$Interpolation$stepped = author$project$Internal$Interpolation$Stepped;
var author$project$Stepped$Hint = function (a) {
	return {$: 'Hint', a: a};
};
var author$project$Stepped$chart = function (model) {
	return A2(
		author$project$LineChart$viewCustom,
		{
			area: author$project$LineChart$Area$default,
			container: author$project$LineChart$Container$custom(
				{
					attributesHtml: _List_Nil,
					attributesSvg: _List_Nil,
					id: 'line-chart-stepped',
					margin: A4(author$project$LineChart$Container$Margin, 30, 140, 30, 70),
					size: author$project$LineChart$Container$relative
				}),
			dots: function () {
				var styleLegend = function (_n0) {
					return A2(author$project$LineChart$Dots$empty, 5, 1);
				};
				var styleIndividual = function (datum) {
					return _Utils_eq(
						elm$core$Maybe$Just(datum),
						model.hinted) ? author$project$LineChart$Dots$full(5) : A2(author$project$LineChart$Dots$empty, 5, 1);
				};
				return author$project$LineChart$Dots$customAny(
					{individual: styleIndividual, legend: styleLegend});
			}(),
			events: author$project$LineChart$Events$hoverOne(author$project$Stepped$Hint),
			grid: author$project$LineChart$Grid$default,
			interpolation: author$project$LineChart$Interpolation$stepped,
			intersection: author$project$LineChart$Axis$Intersection$default,
			junk: A2(
				author$project$LineChart$Junk$hoverOne,
				model.hinted,
				_List_fromArray(
					[
						_Utils_Tuple2(
						'year',
						function (datum) {
							return elm$core$String$fromInt(datum.year);
						}),
						_Utils_Tuple2(
						'price',
						function (datum) {
							return elm$core$String$fromFloat(datum.price) + '£';
						})
					])),
			legends: author$project$LineChart$Legends$default,
			line: author$project$LineChart$Line$default,
			x: function () {
				var toDate = function (year) {
					return A2(
						justinmimbs$time_extra$Time$Extra$partsToPosix,
						elm$time$Time$utc,
						A7(justinmimbs$time_extra$Time$Extra$Parts, year, elm$time$Time$Jan, 1, 0, 0, 0, 0));
				};
				return author$project$LineChart$Axis$custom(
					{
						axisLine: author$project$LineChart$Axis$Line$full(author$project$LineChart$Colors$gray),
						pixels: 1270,
						range: A2(author$project$LineChart$Axis$Range$padded, 20, 20),
						ticks: A2(author$project$LineChart$Axis$Ticks$time, elm$time$Time$utc, 10),
						title: author$project$LineChart$Axis$Title$default('Year'),
						variable: A2(
							elm$core$Basics$composeL,
							A2(
								elm$core$Basics$composeL,
								A2(
									elm$core$Basics$composeL,
									A2(elm$core$Basics$composeL, elm$core$Maybe$Just, elm$core$Basics$toFloat),
									elm$time$Time$posixToMillis),
								toDate),
							function ($) {
								return $.year;
							})
					});
			}(),
			y: author$project$LineChart$Axis$custom(
				{
					axisLine: author$project$LineChart$Axis$Line$full(author$project$LineChart$Colors$gray),
					pixels: 380,
					range: A2(author$project$LineChart$Axis$Range$padded, 20, 20),
					ticks: author$project$LineChart$Axis$Ticks$float(5),
					title: author$project$LineChart$Axis$Title$default('price (£)'),
					variable: A2(
						elm$core$Basics$composeL,
						elm$core$Maybe$Just,
						function ($) {
							return $.price;
						})
				})
		},
		_List_fromArray(
			[
				A4(author$project$LineChart$line, author$project$LineChart$Colors$pink, author$project$LineChart$Dots$circle, 'UK stamp', model.data)
			]));
};
var author$project$Stepped$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				author$project$Stepped$chart(model)
			]));
};
var author$project$Main$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('view')
			]),
		_List_fromArray(
			[
				author$project$Main$viewTitle,
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('view__body')
					]),
				_List_fromArray(
					[
						A5(author$project$Main$viewExample, 0, 'full', author$project$Main$AreaMsg, author$project$Area$view, model.area),
						A5(author$project$Main$viewExample, 1, 'full', author$project$Main$SelectionMsg, author$project$Selection$view, model.selection),
						A5(author$project$Main$viewExample, 2, 'full', author$project$Main$LinesMsg, author$project$Lines$view, model.lines),
						A5(author$project$Main$viewExample, 3, 'full', author$project$Main$SteppedMsg, author$project$Stepped$view, model.stepped)
					])),
				A2(author$project$Main$viewSource, model.focused, model.isSourceOpen)
			]));
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$contains = _String_contains;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$Main$main = elm$browser$Browser$element(
	{
		init: function (_n0) {
			return author$project$Main$init;
		},
		subscriptions: elm$core$Basics$always(elm$core$Platform$Sub$none),
		update: author$project$Main$update,
		view: author$project$Main$view
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));