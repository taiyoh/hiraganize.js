/**Header::
 * Hiraganize.js
 * Copyright (c) 2010 Taiyoh TANAKA
 *
 * http://github.com/taiyoh/hiraganize.js/raw/master/hiraganize.js
 *
 * Version:: 0.1.1
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
			'i' : 'きぃ',
			'u' : 'きゅ',
			'e' : 'きぇ',
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
			'i' : 'しぃ',
			'u' : 'しゅ',
			'e' : 'しぇ',
			'o' : 'しょ'
		},
		'h' : {
			'a' : 'しゃ',
			'i' : 'し',
			'u' : 'しゅ',
			'e' : 'しぇ',
			'o' : 'しょ'
		},
		'w' : {
			'a' : 'すぁ',
			'i' : 'すぃ',
			'u' : 'すぅ',
			'e' : 'すぇ',
			'o' : 'すぉ'
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
			'i' : 'ちぃ',
			'u' : 'ちゅ',
			'e' : 'ちぇ',
			'o' : 'ちょ'
		},
		's' : {
			'a' : 'つぁ',
			'i' : 'つぃ',
			'u' : 'つ',
			'e' : 'つぇ',
			'o' : 'つぉ'
		},
		'h' : {
			'a' : 'てゃ',
			'i' : 'てぃ',
			'u' : 'てゅ',
			'e' : 'てぇ',
			'o' : 'てょ'
		},
		'w' : {
			'a' : 'とぁ',
			'i' : 'とぃ',
			'u' : 'とぅ',
			'e' : 'とぇ',
			'o' : 'とぉ'
		}
	},
	'c' : {
		'a' : 'か',
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
			'i' : 'ちぃ',
			'u' : 'ちゅ',
			'e' : 'ちぇ',
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
		"'" : 'ん',
		'y' : {
			'a' : 'にゃ',
			'i' : 'にぃ',
			'u' : 'にゅ',
			'e' : 'にぇ',
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
			'i' : 'ひぃ',
			'u' : 'ひゅ',
			'e' : 'ひぇ',
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
			'i' : 'みぃ',
			'u' : 'みゅ',
			'e' : 'みぇ',
			'o' : 'みょ'
		}

	},
	'y'	: {
		'a' : 'や',
		'i' : 'い',
		'u' : 'ゆ',
		'e' : 'いぇ',
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
			'i' : 'りぃ',
			'u' : 'りゅ',
			'e' : 'りぇ',
			'o' : 'りょ'
		}

	},
	'w'	: {
		'a' : 'わ',
		'i' : 'うぃ',
		'u' : 'う',
		'e' : 'うぇ',
		'o' : 'を',
		'h' : {
			'a' : 'うぁ',
			'i' : 'うぃ',
			'u' : 'う',
			'e' : 'うぇ',
			'o' : 'うぉ'
		}
	},
	'g'	: {
		'a' : 'が',
		'i' : 'ぎ',
		'u' : 'ぐ',
		'e' : 'げ',
		'o' : 'ご',
		'y' : {
			'a' : 'ぎゃ',
			'i' : 'ぎぃ',
			'u' : 'ぎゅ',
			'e' : 'ぎぇ',
			'o' : 'ぎょ'
		},
		'w' : {
			'a' : 'ぐぁ',
			'i' : 'ぐぃ',
			'u' : 'ぐぅ',
			'e' : 'ぐぇ',
			'o' : 'ぐぉ'
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
			'i' : 'じぃ',
			'u' : 'じゅ',
			'e' : 'じぇ',
			'o' : 'じょ'
		}

	},
	'j'	: {
		'a' : 'じゃ',
		'i' : 'じ',
		'u' : 'じゅ',
		'e' : 'じぇ',
		'o' : 'じょ',
		'y' : {
			'a' : 'じゃ',
			'i' : 'じぃ',
			'u' : 'じゅ',
			'e' : 'じぇ',
			'o' : 'じょ'
		}
	},
	'd'	: {
		'a' : 'だ',
		'i' : 'ぢ',
		'u' : 'づ',
		'e' : 'で',
		'o' : 'ど',
		'y' : {
			'a' : 'ぢゃ',
			'i' : 'ぢぃ',
			'u' : 'ぢゅ',
			'e' : 'ぢぇ',
			'o' : 'ぢょ'
		},
		'h' : {
			'a' : 'でゃ',
			'i' : 'でぃ',
			'u' : 'でゅ',
			'e' : 'でぇ',
			'o' : 'でょ'
		},
		'w' : {
			'a' : 'どぁ',
			'i' : 'どぃ',
			'u' : 'どぅ',
			'e' : 'どぇ',
			'o' : 'どぉ'
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
			'i' : 'びぃ',
			'u' : 'びゅ',
			'e' : 'びぇ',
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
			'i' : 'ぴぃ',
			'u' : 'ぴゅ',
			'e' : 'ぴぇ',
			'o' : 'ぴょ'
		}
	},
	'l'	: {
		'a' : 'ぁ',
		'i' : 'ぃ',
		'u' : 'ぅ',
		'e' : 'ぇ',
		'o' : 'ぉ',
		'w' : 'ゎ',
		'y' : {
			'a' : 'ゃ',
			'i' : 'ぃ',
			'u' : 'ゅ',
			'e' : 'ぇ',
			'o' : 'ょ'
		},
		't' : {
			'u' : 'っ',
			's' : {
				'u' : 'っ'
			}
		},
		'k' : {
			'a' : 'ヵ',
			'e' : 'ヶ'
		}

	},
	'f'	: {
		'a' : 'ふぁ',
		'i' : 'ふぃ',
		'u' : 'ふ',
		'e' : 'ふぇ',
		'o' : 'ふぉ',
		'y' : {
			'a' : 'ふゃ',
			'i' : 'ふぃ',
			'u' : 'ふゅ',
			'e' : 'ふぇ',
			'o' : 'ふょ'
		},
		'w' : {
			'a' : 'ふぁ',
			'i' : 'ふぃ',
			'u' : 'ふぅ',
			'e' : 'ふぇ',
			'o' : 'ふぉ'
		}
	},
	'v'	: {
		'a' : 'ヴぁ',
		'i' : 'ヴぃ',
		'u' : 'ヴ',
		'e' : 'ヴぇ',
		'o' : 'ヴぉ',
		'y' : {
			'a' : 'ヴゃ',
			'i' : 'ヴぃ',
			'u' : 'ヴゅ',
			'e' : 'ヴぇ',
			'o' : 'ヴょ'
		}
	},
	'q'	: {
		'a' : 'くぁ',
		'i' : 'くぃ',
		'u' : 'く',
		'e' : 'くぇ',
		'o' : 'くぉ',
		'y' : {
			'a' : 'くゃ',
			'i' : 'くぃ',
			'u' : 'くゅ',
			'e' : 'くぇ',
			'o' : 'くょ'
		},
		'w' : {
			'a' : 'くぁ',
			'i' : 'くぃ',
			'u' : 'くぅ',
			'e' : 'くぇ',
			'o' : 'くぉ'
		}
	},
	'x'	: {
		'a' : 'ぁ',
		'i' : 'ぃ',
		'u' : 'ぅ',
		'e' : 'ぇ',
		'o' : 'ぉ',
		'n' : 'ん',
		'w' : 'ゎ',
		't' : {
			'u' : 'っ'
		},
		'y' : {
			'a' : 'ゃ',
			'i' : 'ぃ',
			'u' : 'ゅ',
			'e' : 'ぇ',
			'o' : 'ょ'
		},
		'k' : {
			'a' : 'ヵ',
			'e' : 'ヶ'
		}

	},
	'-' : 'ー',
	',' : '、',
	'.' : '。',
	' ' : ' '
};

Hiraganize.pool = {
	text : [],
	list : [],
	step : new Object,
	add : function(step) {
		var raw = step.getPooled();
		if (typeof step.map == 'string') {
			Hiraganize.pool.list.push(raw);
		}
		Hiraganize.pool.text.push(step.getMapped());
		Hiraganize.pool.step = step;
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
		if (txt[txt.length - 1] == ' ') {
			txt.pop();
		}
		return txt.join('');
	},
	getStepTerminated : function() {
		if (!Hiraganize.pool.step.isTerminated) {
			return true;
		}
		return Hiraganize.pool.step.isTerminated();
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
			this.status = (typeof this.map != 'string');
		}
		else if (/[\[`~!@#$%^&*()_\-+={}\\'";:/?><1234567890\]]/.test(c)) {
			if (this.pool[this.pool.length - 1] == 'n') {
				Hiraganize.pool.text.push('ん');
				Hiraganize.pool.list.push('nn');
			}
			this.pool.push(c);
			this.map = c;
			this.status = false;
		}
		else if (this.pool[this.pool.length - 1] == c) {
			Hiraganize.pool.text.push('っ');
			Hiraganize.pool.list.push('tt');
		}
		else if (!/[aiueoyn]/.test(c) && this.pool[this.pool.length - 1] == 'n') {
			Hiraganize.pool.text.push('ん');
			Hiraganize.pool.list.push('nn');
			this.map = Hiraganize.map[c];
			this.pool = [String(c)];
		}
		else if (!/[aiueo]/.test(this.pool[this.pool.length - 1]) && !/[aiueo]/.test(c)) {
			Hiraganize.pool.text.push(this.pool.pop());
			this.map = Hiraganize.map[c];
			this.pool.push(String(c));
		}
		else {
			this.status = false;
		}
	},
	isTerminated : function(last) {
		if (last && typeof this.map == 'object') {
			Hiraganize.pool.text.push(this.pool.join(''));
			this.status = false;
		}
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
	Hiraganize.pool.step = new Object;
};

Hiraganize.walk = function(text) {
	Hiraganize.init();
	var chars =	text.split('');
	var	step  = new Hiraganize.Step;
	for (var i = 0, l = chars.length; i < l; i++) {
		var c =	chars[i];
		step.push(c.toLowerCase());
		if (step.isTerminated(i == l - 1)) {
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
