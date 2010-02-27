/**
 * Hiraganize.js
 * Copyright (c) 2010 Taiyoh TANAKA
 *
 * http://github.com/taiyoh/hiraganize/raw/master/hiraganize.js
 *
 * Version:: 0.1
 * License:: MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

if (typeof Hiraganize == 'undefined') Hiraganize = new Object;

//<!-- overwrite this you want!
Hiraganize.preLoadCheck = true; // or false

Hiraganize.setting = {
	prefix : '',
	suffix : '.png'
};
// overwrite this you want!-->

Hiraganize.map = {
	'a' : 'あ',
	'i' : 'い',
	'u' : 'う',
	'e' : 'え',
	'o' : 'お',
	'k'	: {
		'a' : 'か',
		'i' : 'き',
		'u' : 'く',
		'e' : 'け',
		'o' : 'こ',
		'y' : {
			'a' : 'きゃ',
			'u' : 'きゅ',
			'o' : 'きょ'
		}
	},
	's'	: {
		'a' : 'さ',
		'i' : 'し',
		'u' : 'す',
		'e' : 'せ',
		'o' : 'そ',
		'y' : {
			'a' : 'しゃ',
			'u' : 'しゅ',
			'o' : 'しょ'
		},
		'h' : {
			'a' : 'しゃ',
			'i' : 'し',
			'u' : 'しゅ',
			'e' : 'しぇ',
			'o' : 'しょ'
		}
	},
	't'	: {
		'a' : 'た',
		'i' : 'ち',
		'u' : 'つ',
		'e' : 'て',
		'o' : 'と',
		'y' : {
			'a' : 'ちゃ',
			'u' : 'ちゅ',
			'o' : 'ちょ'
		},
		's' : {
			'u' : 'つ'
		}
	},
	'c' : {
		'a' : 'きゃ',
		'i' : 'し',
		'u' : 'く',
		'e' : 'せ',
		'o' : 'こ',
		'h' : {
			'a' : 'ちゃ',
			'i' : 'ち',
			'u' : 'ちゅ',
			'e' : 'ちぇ',
			'o' : 'ちょ'
		},
		'y' : {
			'a' : 'ちゃ',
			'u' : 'ちゅ',
			'o' : 'ちょ'
		}
	},
	'n'	: {
		'a' : 'な',
		'i' : 'に',
		'u' : 'ぬ',
		'e' : 'ね',
		'o' : 'の',
		'n' : 'ん',
		'y' : {
			'a' : 'にゃ',
			'u' : 'にゅ',
			'o' : 'にょ'
		}

	},
	'h'	: {
		'a' : 'は',
		'i' : 'ひ',
		'u' : 'ふ',
		'e' : 'へ',
		'o' : 'ほ',
		'y' : {
			'a' : 'ひゃ',
			'u' : 'ひゅ',
			'o' : 'ひょ'
		}

	},
	'm'	: {
		'a' : 'ま',
		'i' : 'み',
		'u' : 'む',
		'e' : 'め',
		'o' : 'も',
		'y' : {
			'a' : 'みゃ',
			'u' : 'みゅ',
			'o' : 'みょ'
		}

	},
	'y'	: {
		'a' : 'や',
		'i' : 'ゐ',
		'u' : 'ゆ',
		'e' : 'ゑ',
		'o' : 'よ'
	},
	'r'	: {
		'a' : 'ら',
		'i' : 'り',
		'u' : 'る',
		'e' : 'れ',
		'o' : 'ろ',
		'y' : {
			'a' : 'りゃ',
			'u' : 'りゅ',
			'o' : 'りょ'
		}

	},
	'w'	: {
		'a' : 'わ',
		'i' : 'うぃ',
		'e' : 'うぇ',
		'o' : 'を'
	},
	'g'	: {
		'a' : 'が',
		'i' : 'ぎ',
		'u' : 'ぐ',
		'e' : 'げ',
		'o' : 'ご',
		'y' : {
			'a' : 'ぎゃ',
			'u' : 'ぎゅ',
			'o' : 'ぎょ'
		}

	},
	'z'	: {
		'a' : 'ざ',
		'i' : 'じ',
		'u' : 'ず',
		'e' : 'ぜ',
		'o' : 'ぞ',
		'y' : {
			'a' : 'じゃ',
			'u' : 'じゅ',
			'o' : 'じょ'
		}

	},
	'j'	: {
		'a' : 'じゃ',
		'i' : 'じ',
		'u' : 'じゅ',
		'e' : 'じぇ',
		'o' : 'じょ'
	},
	'd'	: {
		'a' : 'だ',
		'i' : 'ぢ',
		'u' : 'づ',
		'e' : 'で',
		'o' : 'ど',
		'y' : {
			'a' : 'ぢゃ',
			'u' : 'ぢゅ',
			'o' : 'ぢょ'
		}
	},
	'b'	: {
		'a' : 'ば',
		'i' : 'び',
		'u' : 'ぶ',
		'e' : 'べ',
		'o' : 'ぼ',
		'y' : {
			'a' : 'びゃ',
			'u' : 'びゅ',
			'o' : 'びょ'
		}
	},
	'p'	: {
		'a' : 'ぱ',
		'i' : 'ぴ',
		'u' : 'ぷ',
		'e' : 'ぺ',
		'o' : 'ぽ',
		'y' : {
			'a' : 'ぴゃ',
			'u' : 'ぴゅ',
			'o' : 'ぴょ'
		}
	},
	'l'	: {
		'a' : 'ら',
		'i' : 'り',
		'u' : 'る',
		'e' : 'れ',
		'o' : 'ろ',
		'y' : {
			'a' : 'りゃ',
			'u' : 'りゅ',
			'o' : 'りょ'
		}

	},
	'f'	: {
		'a' : 'ふぁ',
		'i' : 'ふぃ',
		'u' : 'ふ',
		'e' : 'ふぇ',
		'o' : 'ふぉ'
	},
	'v'	: {
		'a' : 'ば',
		'i' : 'び',
		'u' : 'ぶ',
		'e' : 'べ',
		'o' : 'ぼ'
	},
	'q'	: {
		'a' : 'くぁ',
		'i' : 'くぃ',
		'u' : 'く',
		'e' : 'くぇ',
		'o' : 'くぉ'
	},
	',' : '、',
	'.' : '。',
	' ' : ' '
};

Hiraganize.pool = {
	text : [],
	list : [],
	add : function(step) {
		var raw = step.getPooled();
		if (raw != ' ') { Hiraganize.pool.list.push(raw); }
		Hiraganize.pool.text.push(step.getMapped());
	},
	tagify : function(prefix, suffix, attr) {
		return Hiraganize.tagify(Hiraganize.pool.list, prefix, suffix, attr);
	},
	getText : function() {
		var	txt = [];
		for (var i = 0, l = Hiraganize.pool.text.length; i < l; i++) {
			var w = Hiraganize.pool.text[i];
			if (typeof w == 'string') txt.push(w);
		}
		return txt.join('');
	}
};

Hiraganize.Step = function() {
	this.map  = Hiraganize.map;
	this.pool =	[];
	this.status = true;
};

Hiraganize.Step.prototype =	{
	push : function(c) {
		if (this.map[c]) {
			this.map = this.map[c];
			this.pool.push(String(c));
		}
		else if (/[\[`~!@#$%^&*()_\-+={}\\'";:/?><\]]/.test(c)) {
			this.pool.push(c);
			this.map = c;
			this.status = false;
		}
		else if (this.pool[this.pool.length - 1] == c) {
			Hiraganize.pool.text.push('っ');
			Hiraganize.pool.list.push('tt');
		}
		else {
			this.status = false;
		}
	},
	isTerminated : function() {
		return !this.status || typeof this.map != 'object';
	},
	getPooled : function() {
		return this.pool.join('');
	},
	getMapped : function() {
		return this.map;
	},
	clone : function() {
		return new Hiraganize.Step;
	}
};

Hiraganize.init = function() {
	Hiraganize.pool.text = [];
	Hiraganize.pool.list = [];
};

Hiraganize.walk = function(text) {
	Hiraganize.init();
	var chars =	text.split('');
	var	step  = new Hiraganize.Step;
	for (var i = 0, l = chars.length; i < l; i++) {
		var c =	chars[i];
		step.push(c.toLowerCase());
		if (step.isTerminated()) {
			Hiraganize.pool.add(step);
			step = step.clone();
		}
	}
	return Hiraganize.pool.getText();
};

Hiraganize.tagify = function(list, prefix, suffix, attr) {
	prefix = prefix || Hiraganize.setting.prefix;
	suffix = suffix || Hiraganize.setting.suffix;
	attr = attr ? ' '+attr : '';
	var img = [];
	for (var i = 0, l = list.length; i < l; i++) {
		var n = list[i];
		var src = ['<img src="', prefix, n, suffix, '" alt="', n, '"', attr, '/>'].join('');
		if (Hiraganize.preLoadCheck) (new Image).src = src;
		img.push(src);
	}
	return img.join('');
};
