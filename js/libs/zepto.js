/*from tccdn minify at 2015-3-24 18:50:40,file：/touch/app/public/zepto.20141205.js*/
var Zepto = (function () { var n, u, F, a, N = [], q = N.slice, G = N.filter, h = window.document, K = {}, O = {}, W = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 }, y = /^\s*<(\w+|!)[^>]*>/, M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, I = /^(?:body|html)$/i, p = /([A-Z])/g, E = ["val", "css", "html", "text", "data", "width", "height", "offset"], z = ["after", "prepend", "before", "append"], v = h.createElement("table"), P = h.createElement("tr"), i = { tr: h.createElement("tbody"), tbody: v, thead: v, tfoot: v, td: P, th: P, "*": h.createElement("div") }, w = /complete|loaded|interactive/, l = /^[\w-]*$/, e = {}, g = e.toString, d = {}, U, Q, H = h.createElement("div"), X = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, B = Array.isArray || function (aa) { return aa instanceof Array }; d.matches = function (ae, aa) { if (!aa || !ae || ae.nodeType !== 1) { return false } var ac = ae.webkitMatchesSelector || ae.mozMatchesSelector || ae.oMatchesSelector || ae.matchesSelector; if (ac) { return ac.call(ae, aa) } var ad, af = ae.parentNode, ab = !af; if (ab) { (af = H).appendChild(ae) } ad = ~d.qsa(af, aa).indexOf(ae); ab && H.removeChild(ae); return ad }; function Z(aa) { return aa == null ? String(aa) : e[g.call(aa)] || "object" } function r(aa) { return Z(aa) == "function" } function L(aa) { return aa != null && aa == aa.window } function x(aa) { return aa != null && aa.nodeType == aa.DOCUMENT_NODE } function J(aa) { return Z(aa) == "object" } function Y(aa) { return J(aa) && !L(aa) && Object.getPrototypeOf(aa) == Object.prototype } function C(aa) { return typeof aa.length == "number" } function V(aa) { return G.call(aa, function (ab) { return ab != null }) } function D(aa) { return aa.length > 0 ? F.fn.concat.apply([], aa) : aa } U = function (aa) { return aa.replace(/-+(.)?/g, function (ab, ac) { return ac ? ac.toUpperCase() : "" }) }; function o(aa) { return aa.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() } Q = function (aa) { return G.call(aa, function (ac, ab) { return aa.indexOf(ac) == ab }) }; function R(aa) { return aa in O ? O[aa] : (O[aa] = new RegExp("(^|\\s)" + aa + "(\\s|$)")) } function f(aa, ab) { return (typeof ab == "number" && !W[o(aa)]) ? ab + "px" : ab } function S(ac) { var aa, ab; if (!K[ac]) { aa = h.createElement(ac); h.body.appendChild(aa); ab = getComputedStyle(aa, "").getPropertyValue("display"); aa.parentNode.removeChild(aa); ab == "none" && (ab = "block"); K[ac] = ab } return K[ac] } function t(aa) { return "children" in aa ? q.call(aa.children) : F.map(aa.childNodes, function (ab) { if (ab.nodeType == 1) { return ab } }) } d.fragment = function (ae, ac, ad) { var af, ab, aa; if (M.test(ae)) { af = F(h.createElement(RegExp.$1)) } if (!af) { if (ae.replace) { ae = ae.replace(k, "<$1></$2>") } if (ac === n) { ac = y.test(ae) && RegExp.$1 } if (!(ac in i)) { ac = "*" } aa = i[ac]; aa.innerHTML = "" + ae; af = F.each(q.call(aa.childNodes), function () { aa.removeChild(this) }) } if (Y(ad)) { ab = F(af); F.each(ad, function (ag, ah) { if (E.indexOf(ag) > -1) { ab[ag](ah) } else { ab.attr(ag, ah) } }) } return af }; d.Z = function (ab, aa) { ab = ab || []; ab.__proto__ = F.fn; ab.selector = aa || ""; return ab }; d.isZ = function (aa) { return aa instanceof d.Z }; d.init = function (aa, ab) { var ac; if (!aa) { return d.Z() } else { if (typeof aa == "string") { aa = aa.trim(); if (aa[0] == "<" && y.test(aa)) { ac = d.fragment(aa, RegExp.$1, ab), aa = null } else { if (ab !== n) { return F(ab).find(aa) } else { ac = d.qsa(h, aa) } } } else { if (r(aa)) { return F(h).ready(aa) } else { if (d.isZ(aa)) { return aa } else { if (B(aa)) { ac = V(aa) } else { if (J(aa)) { ac = [aa], aa = null } else { if (y.test(aa)) { ac = d.fragment(aa.trim(), RegExp.$1, ab), aa = null } else { if (ab !== n) { return F(ab).find(aa) } else { ac = d.qsa(h, aa) } } } } } } } } return d.Z(ac, aa) }; F = function (aa, ab) { return d.init(aa, ab) }; function m(ac, ab, aa) { for (u in ab) { if (aa && (Y(ab[u]) || B(ab[u]))) { if (Y(ab[u]) && !Y(ac[u])) { ac[u] = {} } if (B(ab[u]) && !B(ac[u])) { ac[u] = [] } m(ac[u], ab[u], aa) } else { if (ab[u] !== n) { ac[u] = ab[u] } } } } F.extend = function (ac) { var aa, ab = q.call(arguments, 1); if (typeof ac == "boolean") { aa = ac; ac = ab.shift() } ab.forEach(function (ad) { m(ac, ad, aa) }); return ac }; d.qsa = function (ac, aa) { var af, ag = aa[0] == "#", ab = !ag && aa[0] == ".", ad = ag || ab ? aa.slice(1) : aa, ae = l.test(ad); return (x(ac) && ae && ag) ? ((af = ac.getElementById(ad)) ? [af] : []) : (ac.nodeType !== 1 && ac.nodeType !== 9) ? [] : q.call(ae && !ag ? ab ? ac.getElementsByClassName(ad) : ac.getElementsByTagName(aa) : ac.querySelectorAll(aa)) }; function A(ab, aa) { return aa == null ? F(ab) : F(ab).filter(aa) } F.contains = function (aa, ab) { return aa !== ab && aa.contains(ab) }; function s(ac, ab, aa, ad) { return r(ab) ? ab.call(ac, aa, ad) : ab } function b(ab, aa, ac) { ac == null ? ab.removeAttribute(aa) : ab.setAttribute(aa, ac) } function T(ac, ad) { var aa = ac.className, ab = aa && aa.baseVal !== n; if (ad === n) { return ab ? aa.baseVal : aa } ab ? (aa.baseVal = ad) : (ac.className = ad) } function j(ab) { var aa; try { return ab ? ab == "true" || (ab == "false" ? false : ab == "null" ? null : !/^0/.test(ab) && !isNaN(aa = Number(ab)) ? aa : /^[\[\{]/.test(ab) ? F.parseJSON(ab) : ab) : ab } catch (ac) { return ab } } F.type = Z; F.isFunction = r; F.isWindow = L; F.isArray = B; F.isPlainObject = Y; F.isEmptyObject = function (ab) { var aa; for (aa in ab) { return false } return true }; F.inArray = function (ab, ac, aa) { return N.indexOf.call(ac, ab, aa) }; F.camelCase = U; F.trim = function (aa) { return aa == null ? "" : String.prototype.trim.call(aa) }; F.uuid = 0; F.support = {}; F.expr = {}; F.map = function (ae, af) { var ad, aa = [], ac, ab; if (C(ae)) { for (ac = 0; ac < ae.length; ac++) { ad = af(ae[ac], ac); if (ad != null) { aa.push(ad) } } } else { for (ab in ae) { ad = af(ae[ab], ab); if (ad != null) { aa.push(ad) } } } return D(aa) }; F.each = function (ac, ad) { var ab, aa; if (C(ac)) { for (ab = 0; ab < ac.length; ab++) { if (ad.call(ac[ab], ab, ac[ab]) === false) { return ac } } } else { for (aa in ac) { if (ad.call(ac[aa], aa, ac[aa]) === false) { return ac } } } return ac }; F.grep = function (aa, ab) { return G.call(aa, ab) }; if (window.JSON) { F.parseJSON = JSON.parse } F.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (ab, aa) { e["[object " + aa + "]"] = aa.toLowerCase() }); F.fn = { forEach: N.forEach, reduce: N.reduce, push: N.push, sort: N.sort, indexOf: N.indexOf, concat: N.concat, map: function (aa) { return F(F.map(this, function (ac, ab) { return aa.call(ac, ab, ac) })) }, slice: function () { return F(q.apply(this, arguments)) }, ready: function (aa) { if (w.test(h.readyState) && h.body) { aa(F) } else { h.addEventListener("DOMContentLoaded", function () { aa(F) }, false) } return this }, get: function (aa) { return aa === n ? q.call(this) : this[aa >= 0 ? aa : aa + this.length] }, toArray: function () { return this.get() }, size: function () { return this.length }, remove: function () { return this.each(function () { if (this.parentNode != null) { this.parentNode.removeChild(this) } }) }, each: function (aa) { N.every.call(this, function (ac, ab) { return aa.call(ac, ab, ac) !== false }); return this }, filter: function (aa) { if (r(aa)) { return this.not(this.not(aa)) } return F(G.call(this, function (ab) { return d.matches(ab, aa) })) }, add: function (aa, ab) { return F(Q(this.concat(F(aa, ab)))) }, is: function (aa) { return this.length > 0 && d.matches(this[0], aa) }, not: function (aa) { var ab = []; if (r(aa) && aa.call !== n) { this.each(function (ad) { if (!aa.call(this, ad)) { ab.push(this) } }) } else { var ac = typeof aa == "string" ? this.filter(aa) : (C(aa) && r(aa.item)) ? q.call(aa) : F(aa); this.forEach(function (ad) { if (ac.indexOf(ad) < 0) { ab.push(ad) } }) } return F(ab) }, has: function (aa) { return this.filter(function () { return J(aa) ? F.contains(this, aa) : F(this).find(aa).size() }) }, eq: function (aa) { return aa === -1 ? this.slice(aa) : this.slice(aa, +aa + 1) }, first: function () { var aa = this[0]; return aa && !J(aa) ? aa : F(aa) }, last: function () { var aa = this[this.length - 1]; return aa && !J(aa) ? aa : F(aa) }, find: function (ab) { var aa, ac = this; if (typeof ab == "object") { aa = F(ab).filter(function () { var ad = this; return N.some.call(ac, function (ae) { return F.contains(ae, ad) }) }) } else { if (this.length == 1) { aa = F(d.qsa(this[0], ab)) } else { aa = this.map(function () { return d.qsa(this, ab) }) } } return aa }, closest: function (aa, ab) { var ac = this[0], ad = false; if (typeof aa == "object") { ad = F(aa) } while (ac && !(ad ? ad.indexOf(ac) >= 0 : d.matches(ac, aa))) { ac = ac !== ab && !x(ac) && ac.parentNode } return F(ac) }, parents: function (aa) { var ac = [], ab = this; while (ab.length > 0) { ab = F.map(ab, function (ad) { if ((ad = ad.parentNode) && !x(ad) && ac.indexOf(ad) < 0) { ac.push(ad); return ad } }) } return A(ac, aa) }, parent: function (aa) { return A(Q(this.pluck("parentNode")), aa) }, children: function (aa) { return A(this.map(function () { return t(this) }), aa) }, contents: function () { return this.map(function () { return q.call(this.childNodes) }) }, siblings: function (aa) { return A(this.map(function (ab, ac) { return G.call(t(ac.parentNode), function (ad) { return ad !== ac }) }), aa) }, empty: function () { return this.each(function () { this.innerHTML = "" }) }, pluck: function (aa) { return F.map(this, function (ab) { return ab[aa] }) }, show: function () { return this.each(function () { this.style.display == "none" && (this.style.display = ""); if (getComputedStyle(this, "").getPropertyValue("display") == "none") { this.style.display = S(this.nodeName) } }) }, replaceWith: function (aa) { return this.before(aa).remove() }, wrap: function (aa) { var ab = r(aa); if (this[0] && !ab) { var ac = F(aa).get(0), ad = ac.parentNode || this.length > 1 } return this.each(function (ae) { F(this).wrapAll(ab ? aa.call(this, ae) : ad ? ac.cloneNode(true) : ac) }) }, wrapAll: function (aa) { if (this[0]) { F(this[0]).before(aa = F(aa)); var ab; while ((ab = aa.children()).length) { aa = ab.first() } F(aa).append(this) } return this }, wrapInner: function (aa) { var ab = r(aa); return this.each(function (ad) { var ac = F(this), ae = ac.contents(), af = ab ? aa.call(this, ad) : aa; ae.length ? ae.wrapAll(af) : ac.append(af) }) }, unwrap: function () { this.parent().each(function () { F(this).replaceWith(F(this).children()) }); return this }, clone: function () { return this.map(function () { return this.cloneNode(true) }) }, hide: function () { return this.css("display", "none") }, toggle: function (aa) { return this.each(function () { var ab = F(this); (aa === n ? ab.css("display") == "none" : aa) ? ab.show() : ab.hide() }) }, prev: function (aa) { return F(this.pluck("previousElementSibling")).filter(aa || "*") }, next: function (aa) { return F(this.pluck("nextElementSibling")).filter(aa || "*") }, html: function (aa) { return arguments.length === 0 ? (this.length > 0 ? this[0].innerHTML : null) : this.each(function (ab) { var ac = this.innerHTML; F(this).empty().append(s(this, aa, ab, ac)) }) }, text: function (aa) { return arguments.length === 0 ? (this.length > 0 ? this[0].textContent : null) : this.each(function () { this.textContent = (aa === n) ? "" : "" + aa }) }, attr: function (ab, ac) { var aa; return (typeof ab == "string" && ac === n) ? (this.length == 0 || this[0].nodeType !== 1 ? n : (ab == "value" && this[0].nodeName == "INPUT") ? this.val() : (!(aa = this[0].getAttribute(ab)) && ab in this[0]) ? this[0][ab] : aa) : this.each(function (ad) { if (this.nodeType !== 1) { return } if (J(ab)) { for (u in ab) { b(this, u, ab[u]) } } else { b(this, ab, s(this, ac, ad, this.getAttribute(ab))) } }) }, removeAttr: function (aa) { return this.each(function () { this.nodeType === 1 && b(this, aa) }) }, prop: function (aa, ab) { aa = X[aa] || aa; return (ab === n) ? (this[0] && this[0][aa]) : this.each(function (ac) { this[aa] = s(this, ab, ac, this[aa]) }) }, data: function (aa, ac) { var ab = this.attr("data-" + aa.replace(p, "-$1").toLowerCase(), ac); return ab !== null ? j(ab) : n }, val: function (aa) { return arguments.length === 0 ? (this[0] && (this[0].multiple ? F(this[0]).find("option").filter(function () { return this.selected }).pluck("value") : this[0].value)) : this.each(function (ab) { this.value = s(this, aa, ab, this.value) }) }, offset: function (ab) { if (ab) { return this.each(function (ad) { var ag = F(this), af = s(this, ab, ad, ag.offset()), ac = ag.offsetParent().offset(), ae = { top: af.top - ac.top, left: af.left - ac.left }; if (ag.css("position") == "static") { ae.position = "relative" } ag.css(ae) }) } if (this.length == 0) { return null } var aa = this[0].getBoundingClientRect(); return { left: aa.left + window.pageXOffset, top: aa.top + window.pageYOffset, width: Math.round(aa.width), height: Math.round(aa.height)} }, css: function (af, ae) { if (arguments.length < 2) { var ac = this[0], aa = getComputedStyle(ac, ""); if (!ac) { return } if (typeof af == "string") { return ac.style[U(af)] || aa.getPropertyValue(af) } else { if (B(af)) { var ad = {}; F.each(B(af) ? af : [af], function (ag, ah) { ad[ah] = (ac.style[U(ah)] || aa.getPropertyValue(ah)) }); return ad } } } var ab = ""; if (Z(af) == "string") { if (!ae && ae !== 0) { this.each(function () { this.style.removeProperty(o(af)) }) } else { ab = o(af) + ":" + f(af, ae) } } else { for (u in af) { if (!af[u] && af[u] !== 0) { this.each(function () { this.style.removeProperty(o(u)) }) } else { ab += o(u) + ":" + f(u, af[u]) + ";" } } } return this.each(function () { this.style.cssText += ";" + ab }) }, index: function (aa) { return aa ? this.indexOf(F(aa)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function (aa) { if (!aa) { return false } return N.some.call(this, function (ab) { return this.test(T(ab)) }, R(aa)) }, addClass: function (aa) { if (!aa) { return this } return this.each(function (ab) { a = []; var ad = T(this), ac = s(this, aa, ab, ad); ac.split(/\s+/g).forEach(function (ae) { if (!F(this).hasClass(ae)) { a.push(ae) } }, this); a.length && T(this, ad + (ad ? " " : "") + a.join(" ")) }) }, removeClass: function (aa) { return this.each(function (ab) { if (aa === n) { return T(this, "") } a = T(this); s(this, aa, ab, a).split(/\s+/g).forEach(function (ac) { a = a.replace(R(ac), " ") }); T(this, a.trim()) }) }, toggleClass: function (ab, aa) { if (!ab) { return this } return this.each(function (ac) { var ae = F(this), ad = s(this, ab, ac, T(this)); ad.split(/\s+/g).forEach(function (af) { (aa === n ? !ae.hasClass(af) : aa) ? ae.addClass(af) : ae.removeClass(af) }) }) }, scrollTop: function (ab) { if (!this.length) { return } var aa = "scrollTop" in this[0]; if (ab === n) { return aa ? this[0].scrollTop : this[0].pageYOffset } return this.each(aa ? function () { this.scrollTop = ab } : function () { this.scrollTo(this.scrollX, ab) }) }, scrollLeft: function (ab) { if (!this.length) { return } var aa = "scrollLeft" in this[0]; if (ab === n) { return aa ? this[0].scrollLeft : this[0].pageXOffset } return this.each(aa ? function () { this.scrollLeft = ab } : function () { this.scrollTo(ab, this.scrollY) }) }, position: function () { if (!this.length) { return } var ac = this[0], ab = this.offsetParent(), ad = this.offset(), aa = I.test(ab[0].nodeName) ? { top: 0, left: 0} : ab.offset(); ad.top -= parseFloat(F(ac).css("margin-top")) || 0; ad.left -= parseFloat(F(ac).css("margin-left")) || 0; aa.top += parseFloat(F(ab[0]).css("border-top-width")) || 0; aa.left += parseFloat(F(ab[0]).css("border-left-width")) || 0; return { top: ad.top - aa.top, left: ad.left - aa.left} }, offsetParent: function () { return this.map(function () { var aa = this.offsetParent || h.body; while (aa && !I.test(aa.nodeName) && F(aa).css("position") == "static") { aa = aa.offsetParent } return aa }) } }; F.fn.detach = F.fn.remove; ["width", "height"].forEach(function (ab) { var aa = ab.replace(/./, function (ac) { return ac[0].toUpperCase() }); F.fn[ab] = function (ad) { var ae, ac = this[0]; if (ad === n) { return L(ac) ? ac["inner" + aa] : x(ac) ? ac.documentElement["scroll" + aa] : (ae = this.offset()) && ae[ab] } else { return this.each(function (af) { ac = F(this); ac.css(ab, s(this, ad, af, ac[ab]())) }) } } }); function c(ac, aa) { aa(ac); for (var ab in ac.childNodes) { c(ac.childNodes[ab], aa) } } z.forEach(function (ac, ab) { var aa = ab % 2; F.fn[ac] = function () { var ad, ae = F.map(arguments, function (ah) { ad = Z(ah); return ad == "object" || ad == "array" || ah == null ? ah : d.fragment(ah) }), af, ag = this.length > 1; if (ae.length < 1) { return this } return this.each(function (ah, ai) { af = aa ? ai : ai.parentNode; ai = ab == 0 ? ai.nextSibling : ab == 1 ? ai.firstChild : ab == 2 ? ai : null; ae.forEach(function (aj) { if (ag) { aj = aj.cloneNode(true) } else { if (!af) { return F(aj).remove() } } c(af.insertBefore(aj, ai), function (ak) { if (ak.nodeName != null && ak.nodeName.toUpperCase() === "SCRIPT" && (!ak.type || ak.type === "text/javascript") && !ak.src) { window["eval"].call(window, ak.innerHTML) } }) }) }) }; F.fn[aa ? ac + "To" : "insert" + (ab ? "Before" : "After")] = function (ad) { F(ad)[ac](this); return this } }); d.Z.prototype = F.fn; d.uniq = Q; d.deserializeValue = j; F.zepto = d; return F })(); window.Zepto = Zepto; window.$ === undefined && (window.$ = Zepto); (function (d) { var f = 1, h, s = Array.prototype.slice, a = d.isFunction, k = function (z) { return typeof z == "string" }, r = {}, o = {}, g = "onfocusin" in window, p = { focus: "focusin", blur: "focusout" }, w = { mouseenter: "mouseover", mouseleave: "mouseout" }; o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents"; function b(z) { return z._zid || (z._zid = f++) } function l(A, C, B, z) { C = q(C); if (C.ns) { var D = v(C.ns) } return (r[b(A)] || []).filter(function (E) { return E && (!C.e || E.e == C.e) && (!C.ns || D.test(E.ns)) && (!B || b(E.fn) === b(B)) && (!z || E.sel == z) }) } function q(z) { var A = ("" + z).split("."); return { e: A[0], ns: A.slice(1).sort().join(" ")} } function v(z) { return new RegExp("(?:^| )" + z.replace(" ", " .* ?") + "(?: |$)") } function j(z, A) { return z.del && (!g && (z.e in p)) || !!A } function u(z) { return w[z] || (g && p[z]) || z } function n(C, G, D, B, A, H, F) { var z = b(C), E = (r[z] || (r[z] = [])); G.split(/\s/).forEach(function (J) { if (J == "ready") { return d(document).ready(D) } var I = q(J); I.fn = D; I.sel = A; if (I.e in w) { D = function (M) { var L = M.relatedTarget; if (!L || (L !== this && !d.contains(this, L))) { return I.fn.apply(this, arguments) } } } I.del = H; var K = H || D; I.proxy = function (M) { M = x(M); if (M.isImmediatePropagationStopped()) { return } M.data = B; var L = K.apply(C, M._args == h ? [M] : [M].concat(M._args)); if (L === false) { M.preventDefault(), M.stopPropagation() } return L }; I.i = E.length; E.push(I); if ("addEventListener" in C) { C.addEventListener(u(I.e), I.proxy, j(I, F)) } }) } function y(C, B, D, z, A) { var E = b(C); (B || "").split(/\s/).forEach(function (F) { l(C, F, D, z).forEach(function (G) { delete r[E][G.i]; if ("removeEventListener" in C) { C.removeEventListener(u(G.e), G.proxy, j(G, A)) } }) }) } d.event = { add: n, remove: y }; d.proxy = function (B, A) { if (a(B)) { var z = function () { return B.apply(A, arguments) }; z._zid = b(B); return z } else { if (k(A)) { return d.proxy(B[A], B) } else { throw new TypeError("expected function") } } }; d.fn.bind = function (z, A, B) { return this.on(z, A, B) }; d.fn.unbind = function (z, A) { return this.off(z, A) }; d.fn.one = function (A, z, B, C) { return this.on(A, z, B, C, 1) }; var t = function () { return true }, i = function () { return false }, e = /^([A-Z]|returnValue$|layer[XY]$)/, m = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" }; function x(z, A) { if (A || !z.isDefaultPrevented) { A || (A = z); d.each(m, function (C, B) { var D = A[C]; z[C] = function () { this[B] = t; return D && D.apply(A, arguments) }; z[B] = i }); if (A.defaultPrevented !== h ? A.defaultPrevented : "returnValue" in A ? A.returnValue === false : A.getPreventDefault && A.getPreventDefault()) { z.isDefaultPrevented = t } } return z } function c(B) { var A, z = { originalEvent: B }; for (A in B) { if (!e.test(A) && B[A] !== h) { z[A] = B[A] } } return x(z, B) } d.fn.delegate = function (z, A, B) { return this.on(A, z, B) }; d.fn.undelegate = function (z, A, B) { return this.off(A, z, B) }; d.fn.live = function (z, A) { d(document.body).delegate(this.selector, z, A); return this }; d.fn.die = function (z, A) { d(document.body).undelegate(this.selector, z, A); return this }; d.fn.on = function (D, z, E, G, C) { var B, A, F = this; if (D && !k(D)) { d.each(D, function (I, H) { F.on(I, z, E, H, C) }); return F } if (!k(z) && !a(G) && G !== false) { G = E, E = z, z = h } if (a(E) || E === false) { G = E, E = h } if (G === false) { G = i } return F.each(function (H, I) { if (C) { B = function (J) { y(I, J.type, G); return G.apply(this, arguments) } } if (z) { A = function (L) { var J, K = d(L.target).closest(z, I).get(0); if (K && K !== I) { J = d.extend(c(L), { currentTarget: K, liveFired: I }); return (B || G).apply(K, [J].concat(s.call(arguments, 1))) } } } n(I, D, G, E, z, A || B) }) }; d.fn.off = function (A, z, C) { var B = this; if (A && !k(A)) { d.each(A, function (E, D) { B.off(E, z, D) }); return B } if (!k(z) && !a(C) && C !== false) { C = z, z = h } if (C === false) { C = i } return B.each(function () { y(this, A, C, z) }) }; d.fn.trigger = function (A, z) { A = (k(A) || d.isPlainObject(A)) ? d.Event(A) : x(A); A._args = z; return this.each(function () { if ("dispatchEvent" in this) { this.dispatchEvent(A) } else { d(this).triggerHandler(A, z) } }) }; d.fn.triggerHandler = function (B, A) { var C, z; this.each(function (E, D) { C = c(k(B) ? d.Event(B) : B); C._args = A; C.target = D; d.each(l(D, B.type || B), function (F, G) { z = G.proxy(C); if (C.isImmediatePropagationStopped()) { return false } }) }); return z }; ("focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error").split(" ").forEach(function (z) { d.fn[z] = function (A) { return A ? this.bind(z, A) : this.trigger(z) } }); ["focus", "blur"].forEach(function (z) { d.fn[z] = function (A) { if (A) { this.bind(z, A) } else { this.each(function () { try { this[z]() } catch (B) { } }) } return this } }); d.Event = function (C, B) { if (!k(C)) { B = C, C = B.type } var D = document.createEvent(o[C] || "Events"), z = true; if (B) { for (var A in B) { (A == "bubbles") ? (z = !!B[A]) : (D[A] = B[A]) } } D.initEvent(C, z, true); return x(D) } })(Zepto); (function ($) { var jsonpID = 0, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/; function triggerAndReturn(context, eventName, data) { var event = $.Event(eventName); $(context).trigger(event, data); return !event.isDefaultPrevented() } function triggerGlobal(settings, context, eventName, data) { if (settings.global) { return triggerAndReturn(context || document, eventName, data) } } $.active = 0; function ajaxStart(settings) { if (settings.global && $.active++ === 0) { triggerGlobal(settings, null, "ajaxStart") } } function ajaxStop(settings) { if (settings.global && !(--$.active)) { triggerGlobal(settings, null, "ajaxStop") } } function ajaxBeforeSend(xhr, settings) { var context = settings.context; if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, "ajaxBeforeSend", [xhr, settings]) === false) { return false } triggerGlobal(settings, context, "ajaxSend", [xhr, settings]) } function ajaxSuccess(data, xhr, settings, deferred) { var context = settings.context, status = "success"; settings.success.call(context, data, status, xhr); if (deferred) { deferred.resolveWith(context, [data, status, xhr]) } triggerGlobal(settings, context, "ajaxSuccess", [xhr, settings, data]); ajaxComplete(status, xhr, settings) } function ajaxError(error, type, xhr, settings, deferred) { var context = settings.context; settings.error.call(context, xhr, type, error); if (deferred) { deferred.rejectWith(context, [xhr, type, error]) } triggerGlobal(settings, context, "ajaxError", [xhr, settings, error || type]); ajaxComplete(type, xhr, settings) } function ajaxComplete(status, xhr, settings) { var context = settings.context; settings.complete.call(context, xhr, status); triggerGlobal(settings, context, "ajaxComplete", [xhr, settings]); ajaxStop(settings) } function empty() { } $.ajaxJSONP = function (options, deferred) { if (!("type" in options)) { return $.ajax(options) } var _callbackName = options.jsonpCallback, callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || ("jsonp" + (++jsonpID)), script = document.createElement("script"), originalCallback = window[callbackName], responseData, abort = function (errorType) { $(script).triggerHandler("error", errorType || "abort") }, xhr = { abort: abort }, abortTimeout; if (deferred) { deferred.promise(xhr) } $(script).on("load error", function (e, errorType) { clearTimeout(abortTimeout); $(script).off().remove(); if (e.type == "error" || !responseData) { ajaxError(null, errorType || "error", xhr, options, deferred) } else { ajaxSuccess(responseData[0], xhr, options, deferred) } window[callbackName] = originalCallback; if (responseData && $.isFunction(originalCallback)) { originalCallback(responseData[0]) } originalCallback = responseData = undefined }); if (ajaxBeforeSend(xhr, options) === false) { abort("abort"); return xhr } window[callbackName] = function () { responseData = arguments }; script.src = options.url.replace(/\?(.+)=\?/, "?$1=" + callbackName); document.head.appendChild(script); if (options.timeout > 0) { abortTimeout = setTimeout(function () { abort("timeout") }, options.timeout) } return xhr }; $.ajaxSettings = { type: "GET", beforeSend: empty, success: empty, error: empty, complete: empty, context: null, global: true, xhr: function () { return new window.XMLHttpRequest() }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: jsonType, xml: "application/xml, text/xml", html: htmlType, text: "text/plain" }, crossDomain: false, timeout: 0, processData: true, cache: true }; function mimeToDataType(mime) { if (mime) { mime = mime.split(";", 2)[0] } return mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text" } function appendQuery(url, query) { if (query == "") { return url } return (url + "&" + query).replace(/[&?]{1,2}/, "?") } function serializeData(options) { if (options.processData && options.data && $.type(options.data) != "string") { options.data = $.param(options.data, options.traditional) } if (options.data && (!options.type || options.type.toUpperCase() == "GET")) { options.url = appendQuery(options.url, options.data), options.data = undefined } } $.ajax = function (options) { var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred(); for (key in $.ajaxSettings) { if (settings[key] === undefined) { settings[key] = $.ajaxSettings[key] } } ajaxStart(settings); if (!settings.crossDomain) { settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host } if (!settings.url) { settings.url = window.location.toString() } serializeData(settings); if (settings.cache === false) { settings.url = appendQuery(settings.url, "_=" + Date.now()) } var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url); if (dataType == "jsonp" || hasPlaceholder) { if (!hasPlaceholder) { settings.url = appendQuery(settings.url, settings.jsonp ? (settings.jsonp + "=?") : settings.jsonp === false ? "" : "callback=?") } return $.ajaxJSONP(settings, deferred) } var mime = settings.accepts[dataType], headers = {}, setHeader = function (name, value) { headers[name.toLowerCase()] = [name, value] }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader, abortTimeout; if (deferred) { deferred.promise(xhr) } if (!settings.crossDomain) { setHeader("X-Requested-With", "XMLHttpRequest") } setHeader("Accept", mime || "*/*"); if (mime = settings.mimeType || mime) { if (mime.indexOf(",") > -1) { mime = mime.split(",", 2)[0] } xhr.overrideMimeType && xhr.overrideMimeType(mime) } if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET")) { setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded") } if (settings.headers) { for (name in settings.headers) { setHeader(name, settings.headers[name]) } } xhr.setRequestHeader = setHeader; xhr.onreadystatechange = function () { if (xhr.readyState == 4) { xhr.onreadystatechange = empty; clearTimeout(abortTimeout); var result, error = false; if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == "file:")) { dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")); result = xhr.responseText; try { if (dataType == "script") { (1, eval)(result) } else { if (dataType == "xml") { result = xhr.responseXML } else { if (dataType == "json") { result = blankRE.test(result) ? null : $.parseJSON(result) } } } } catch (e) { error = e } if (error) { ajaxError(error, "parsererror", xhr, settings, deferred) } else { ajaxSuccess(result, xhr, settings, deferred) } } else { ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred) } } }; if (ajaxBeforeSend(xhr, settings) === false) { xhr.abort(); ajaxError(null, "abort", xhr, settings, deferred); return xhr } if (settings.xhrFields) { for (name in settings.xhrFields) { xhr[name] = settings.xhrFields[name] } } var async = "async" in settings ? settings.async : true; xhr.open(settings.type, settings.url, async, settings.username, settings.password); for (name in headers) { nativeSetHeader.apply(xhr, headers[name]) } if (settings.timeout > 0) { abortTimeout = setTimeout(function () { xhr.onreadystatechange = empty; xhr.abort(); ajaxError(null, "timeout", xhr, settings, deferred) }, settings.timeout) } xhr.send(settings.data ? settings.data : null); return xhr }; function parseArguments(url, data, success, dataType) { if ($.isFunction(data)) { dataType = success, success = data, data = undefined } if (!$.isFunction(success)) { dataType = success, success = undefined } return { url: url, data: data, success: success, dataType: dataType} } $.get = function () { return $.ajax(parseArguments.apply(null, arguments)) }; $.post = function () { var options = parseArguments.apply(null, arguments); options.type = "POST"; return $.ajax(options) }; $.getJSON = function () { var options = parseArguments.apply(null, arguments); options.dataType = "json"; return $.ajax(options) }; $.fn.load = function (url, data, success) { if (!this.length) { return this } var self = this, parts = url.split(/\s/), selector, options = parseArguments(url, data, success), callback = options.success; if (parts.length > 1) { options.url = parts[0], selector = parts[1] } options.success = function (response) { self.html(selector ? $("<div>").html(response.replace(rscript, "")).find(selector) : response); callback && callback.apply(self, arguments) }; $.ajax(options); return this }; var escape = encodeURIComponent; function serialize(params, obj, traditional, scope) { var type, array = $.isArray(obj), hash = $.isPlainObject(obj); $.each(obj, function (key, value) { type = $.type(value); if (scope) { key = traditional ? scope : scope + "[" + (hash || type == "object" || type == "array" ? key : "") + "]" } if (!scope && array) { params.add(value.name, value.value) } else { if (type == "array" || (!traditional && type == "object")) { serialize(params, value, traditional, key) } else { params.add(key, value) } } }) } $.param = function (obj, traditional) { var params = []; params.add = function (k, v) { this.push(escape(k) + "=" + escape(v)) }; serialize(params, obj, traditional); return params.join("&").replace(/%20/g, "+") } })(Zepto); (function (a) { a.fn.serializeArray = function () { var b = [], c; a([].slice.call(this.get(0).elements)).each(function () { c = a(this); var d = c.attr("type"); if (this.nodeName.toLowerCase() != "fieldset" && !this.disabled && d != "submit" && d != "reset" && d != "button" && ((d != "radio" && d != "checkbox") || this.checked)) { b.push({ name: c.attr("name"), value: c.val() }) } }); return b }; a.fn.serialize = function () { var b = []; this.serializeArray().forEach(function (c) { b.push(encodeURIComponent(c.name) + "=" + encodeURIComponent(c.value)) }); return b.join("&") }; a.fn.submit = function (c) { if (c) { this.bind("submit", c) } else { if (this.length) { var b = a.Event("submit"); this.eq(0).trigger(b); if (!b.isDefaultPrevented()) { this.get(0).submit() } } } return this } })(Zepto); (function (b) { if (!("__proto__" in {})) { b.extend(b.zepto, { Z: function (e, d) { e = e || []; b.extend(e, b.fn); e.selector = d || ""; e.__Z = true; return e }, isZ: function (d) { return b.type(d) === "array" && "__Z" in d } }) } try { getComputedStyle(undefined) } catch (c) { var a = getComputedStyle; window.getComputedStyle = function (d) { try { return a(d) } catch (f) { return null } } } })(Zepto); (function (b) { function a(u) { var k = this.os = {}, v = this.browser = {}, d = u.match(/Web[kK]it[\/]{0,1}([\d.]+)/), w = u.match(/(Android);?[\s\/]+([\d.]+)?/), o = u.match(/(iPad).*OS\s([\d_]+)/), i = u.match(/(iPod)(.*OS\s([\d_]+))?/), g = !o && u.match(/(iPhone\sOS)\s([\d_]+)/), c = u.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), q = c && u.match(/TouchPad/), h = u.match(/Kindle\/([\d.]+)/), t = u.match(/Silk\/([\d._]+)/), p = u.match(/(BlackBerry).*Version\/([\d.]+)/), m = u.match(/(BB10).*Version\/([\d.]+)/), e = u.match(/(RIM\sTablet\sOS)\s([\d.]+)/), n = u.match(/PlayBook/), s = u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/), j = u.match(/Firefox\/([\d.]+)/), r = u.match(/MSIE\s([\d.]+)/), l = d && u.match(/Mobile\//) && !s, f = u.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !s; if (v.webkit = !!d) { v.version = d[1] } if (w) { k.android = true, k.version = w[2] } if (g && !i) { k.ios = k.iphone = true, k.version = g[2].replace(/_/g, ".") } if (o) { k.ios = k.ipad = true, k.version = o[2].replace(/_/g, ".") } if (i) { k.ios = k.ipod = true, k.version = i[3] ? i[3].replace(/_/g, ".") : null } if (c) { k.webos = true, k.version = c[2] } if (q) { k.touchpad = true } if (p) { k.blackberry = true, k.version = p[2] } if (m) { k.bb10 = true, k.version = m[2] } if (e) { k.rimtabletos = true, k.version = e[2] } if (n) { v.playbook = true } if (h) { k.kindle = true, k.version = h[1] } if (t) { v.silk = true, v.version = t[1] } if (!t && k.android && u.match(/Kindle Fire/)) { v.silk = true } if (s) { v.chrome = true, v.version = s[1] } if (j) { v.firefox = true, v.version = j[1] } if (r) { v.ie = true, v.version = r[1] } if (l && (u.match(/Safari/) || !!k.ios)) { v.safari = true } if (f) { v.webview = true } k.tablet = !!(o || n || (w && !u.match(/Mobile/)) || (j && u.match(/Tablet/)) || (r && !u.match(/Phone/) && u.match(/Touch/))); k.phone = !!(!k.tablet && !k.ipod && (w || g || c || p || m || (s && u.match(/Android/)) || (s && u.match(/CriOS\/([\d.]+)/)) || (j && u.match(/Mobile/)) || (r && u.match(/Touch/)))) } a.call(b, navigator.userAgent); b.__detect = a })(Zepto); (function (d, f) { var q = "", v, g, o, p = { Webkit: "webkit", Moz: "", O: "o" }, m = window.document, a = m.createElement("div"), n = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, k, r, j, l, e, i, u, t, b, s = {}; function c(w) { return w.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase() } function h(w) { return v ? v + w : w.toLowerCase() } d.each(p, function (x, w) { if (a.style[x + "TransitionProperty"] !== f) { q = "-" + x.toLowerCase() + "-"; v = w; return false } }); k = q + "transform"; s[r = q + "transition-property"] = s[j = q + "transition-duration"] = s[e = q + "transition-delay"] = s[l = q + "transition-timing-function"] = s[i = q + "animation-name"] = s[u = q + "animation-duration"] = s[b = q + "animation-delay"] = s[t = q + "animation-timing-function"] = ""; d.fx = { off: (v === f && a.style.transitionProperty === f), speeds: { _default: 400, fast: 200, slow: 600 }, cssPrefix: q, transitionEnd: h("TransitionEnd"), animationEnd: h("AnimationEnd") }; d.fn.animate = function (x, y, z, A, w) { if (d.isFunction(y)) { A = y, z = f, y = f } if (d.isFunction(z)) { A = z, z = f } if (d.isPlainObject(y)) { z = y.easing, A = y.complete, w = y.delay, y = y.duration } if (y) { y = (typeof y == "number" ? y : (d.fx.speeds[y] || d.fx.speeds._default)) / 1000 } if (w) { w = parseFloat(w) / 1000 } return this.anim(x, y, z, A, w) }; d.fn.anim = function (E, z, y, G, A) { var F, C = {}, I, D = "", B = this, x, H = d.fx.transitionEnd, w = false; if (z === f) { z = d.fx.speeds._default / 1000 } if (A === f) { A = 0 } if (d.fx.off) { z = 0 } if (typeof E == "string") { C[i] = E; C[u] = z + "s"; C[b] = A + "s"; C[t] = (y || "linear"); H = d.fx.animationEnd } else { I = []; for (F in E) { if (n.test(F)) { D += F + "(" + E[F] + ") " } else { C[F] = E[F], I.push(c(F)) } } if (D) { C[k] = D, I.push(k) } if (z > 0 && typeof E === "object") { C[r] = I.join(", "); C[j] = z + "s"; C[e] = A + "s"; C[l] = (y || "linear") } } x = function (J) { if (typeof J !== "undefined") { if (J.target !== J.currentTarget) { return } d(J.target).unbind(H, x) } else { d(this).unbind(H, x) } w = true; d(this).css(s); G && G.call(this) }; if (z > 0) { this.bind(H, x); setTimeout(function () { if (w) { return } x.call(B) }, (z * 1000) + 25) } this.size() && this.get(0).clientLeft; this.css(C); if (z <= 0) { setTimeout(function () { B.each(function () { x.call(this) }) }, 0) } return this }; a = null })(Zepto); (function (e, b) { var h = window.document, a = h.documentElement, c = e.fn.show, i = e.fn.hide, g = e.fn.toggle; function d(l, m, j, n, o) { if (typeof m == "function" && !o) { o = m, m = b } var k = { opacity: j }; if (n) { k.scale = n; l.css(e.fx.cssPrefix + "transform-origin", "0 0") } return l.animate(k, m, null, o) } function f(j, k, l, m) { return d(j, k, 0, l, function () { i.call(e(this)); m && m.call(this) }) } e.fn.show = function (j, k) { c.call(this); if (j === b) { j = 0 } else { this.css("opacity", 0) } return d(this, j, 1, "1,1", k) }; e.fn.hide = function (j, k) { if (j === b) { return i.call(this) } else { return f(this, j, "0,0", k) } }; e.fn.toggle = function (j, k) { if (j === b || typeof j == "boolean") { return g.call(this, j) } else { return this.each(function () { var l = e(this); l[l.css("display") == "none" ? "show" : "hide"](j, k) }) } }; e.fn.fadeTo = function (k, j, l) { return d(this, k, j, null, l) }; e.fn.fadeIn = function (j, l) { var k = this.css("opacity"); if (k > 0) { this.css("opacity", 0) } else { k = 1 } return c.call(this).fadeTo(j, k, l) }; e.fn.fadeOut = function (j, k) { return f(this, j, null, k) }; e.fn.fadeToggle = function (j, k) { return this.each(function () { var l = e(this); l[(l.css("opacity") == 0 || l.css("display") == "none") ? "fadeIn" : "fadeOut"](j, k) }) } })(Zepto); (function (c) { var a = [], b; c.fn.remove = function () { return this.each(function () { if (this.parentNode) { if (this.tagName === "IMG") { a.push(this); this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; if (b) { clearTimeout(b) } b = setTimeout(function () { a = [] }, 60000) } this.parentNode.removeChild(this) } }) } })(Zepto); (function (d) { var e = {}, g = d.fn.data, b = d.camelCase, c = d.expando = "Zepto" + (+new Date()), i = []; function f(m, k) { var n = m[c], j = n && e[n]; if (k === undefined) { return j || h(m) } else { if (j) { if (k in j) { return j[k] } var l = b(k); if (l in j) { return j[l] } } return g.call(d(m), k) } } function h(l, k, m) { var n = l[c] || (l[c] = ++d.uuid), j = e[n] || (e[n] = a(l)); if (k !== undefined) { j[b(k)] = m } return j } function a(k) { var j = {}; d.each(k.attributes || i, function (m, l) { if (l.name.indexOf("data-") == 0) { j[b(l.name.replace("data-", ""))] = d.zepto.deserializeValue(l.value) } }); return j } d.fn.data = function (j, k) { return k === undefined ? d.isPlainObject(j) ? this.each(function (l, m) { d.each(j, function (n, o) { h(m, n, o) }) }) : this.length == 0 ? undefined : f(this[0], j) : this.each(function () { h(this, j, k) }) }; d.fn.removeData = function (j) { if (typeof j == "string") { j = j.split(/\s+/) } return this.each(function () { var l = this[c], k = l && e[l]; if (k) { d.each(j || k, function (m) { delete k[j ? b(this) : m] }) } }) }; ["remove", "empty"].forEach(function (j) { var k = d.fn[j]; d.fn[j] = function () { var l = this.find("*"); if (j === "remove") { l = l.add(this) } l.removeData(); return k.call(this) } }) })(Zepto); (function (g) { var e = g.zepto, j = e.qsa, h = e.matches; function f(k) { k = g(k); return !!(k.width() || k.height()) && k.css("display") !== "none" } var c = g.expr[":"] = { visible: function () { if (f(this)) { return this } }, hidden: function () { if (!f(this)) { return this } }, selected: function () { if (this.selected) { return this } }, checked: function () { if (this.checked) { return this } }, parent: function () { return this.parentNode }, first: function (k) { if (k === 0) { return this } }, last: function (k, l) { if (k === l.length - 1) { return this } }, eq: function (k, l, m) { if (k === m) { return this } }, contains: function (k, l, m) { if (g(this).text().indexOf(m) > -1) { return this } }, has: function (k, l, m) { if (e.qsa(this, m).length) { return this } } }; var b = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), d = /^\s*>/, i = "Zepto" + (+new Date()); function a(p, o) { p = p.replace(/=#\]/g, '="#"]'); var n, k, m = b.exec(p); if (m && m[2] in c) { n = c[m[2]], k = m[3]; p = m[1]; if (k) { var l = Number(k); if (isNaN(l)) { k = k.replace(/^["']|["']$/g, "") } else { k = l } } } return o(p, n, k) } e.qsa = function (l, k) { return a(k, function (q, o, m) { try { var p; if (!q && o) { q = "*" } else { if (d.test(q)) { p = g(l).addClass(i), q = "." + i + " " + q } } var n = j(l, q) } catch (r) { console.error("error performing selector: %o", k); throw r } finally { if (p) { p.removeClass(i) } } return !o ? n : e.uniq(g.map(n, function (t, s) { return o.call(t, s, n, m) })) }) }; e.matches = function (l, k) { return a(k, function (o, n, m) { return (!o || h(l, o)) && (!n || n.call(l, null, m) === l) }) } })(Zepto); (function (i) { var g = {}, c, l, h, a, e = 500, m; function j(p, o, r, q) { return Math.abs(p - o) >= Math.abs(r - q) ? (p - o > 0 ? "Left" : "Right") : (r - q > 0 ? "Up" : "Down") } function n() { a = null; if (g.last) { g.el.trigger("longTap"); g = {} } } function d() { if (a) { clearTimeout(a) } a = null } function f() { if (c) { clearTimeout(c) } if (l) { clearTimeout(l) } if (h) { clearTimeout(h) } if (a) { clearTimeout(a) } c = l = h = a = null; g = {} } function k(o) { return (o.pointerType == "touch" || o.pointerType == o.MSPOINTER_TYPE_TOUCH) && o.isPrimary } function b(p, o) { return (p.type == "pointer" + o || p.type.toLowerCase() == "mspointer" + o) } i(document).ready(function () { var q, t, p = 0, o = 0, s, r; if ("MSGesture" in window) { m = new MSGesture(); m.target = document.body } i(document).bind("MSGestureEnd", function (v) { var u = v.velocityX > 1 ? "Right" : v.velocityX < -1 ? "Left" : v.velocityY > 1 ? "Down" : v.velocityY < -1 ? "Up" : null; if (u) { g.el.trigger("swipe"); g.el.trigger("swipe" + u) } }).on("touchstart MSPointerDown pointerdown", function (u) { if ((r = b(u, "down")) && !k(u)) { return } s = r ? u : u.touches[0]; if (u.touches && u.touches.length === 1 && g.x2) { g.x2 = undefined; g.y2 = undefined } q = Date.now(); t = q - (g.last || q); g.el = i("tagName" in s.target ? s.target : s.target.parentNode); c && clearTimeout(c); g.x1 = s.pageX; g.y1 = s.pageY; if (t > 0 && t <= 250) { g.isDoubleTap = true } g.last = q; a = setTimeout(n, e); if (m && r) { m.addPointer(u.pointerId) } }).on("touchmove MSPointerMove pointermove", function (u) { if ((r = b(u, "move")) && !k(u)) { return } s = r ? u : u.touches[0]; d(); g.x2 = s.pageX; g.y2 = s.pageY; p += Math.abs(g.x1 - g.x2); o += Math.abs(g.y1 - g.y2) }).on("touchend MSPointerUp pointerup", function (u) { if ((r = b(u, "up")) && !k(u)) { return } d(); if ((g.x2 && Math.abs(g.x1 - g.x2) > 30) || (g.y2 && Math.abs(g.y1 - g.y2) > 30)) { h = setTimeout(function () { g.el.trigger("swipe"); g.el.trigger("swipe" + (j(g.x1, g.x2, g.y1, g.y2))); g = {} }, 0) } else { if ("last" in g) { if (p < 30 && o < 30) { l = setTimeout(function () { var v = i.Event("tap"); v.cancelTouch = f; g.el.trigger(v); if (g.isDoubleTap) { if (g.el) { g.el.trigger("doubleTap") } g = {} } else { c = setTimeout(function () { c = null; if (g.el) { g.el.trigger("singleTap") } g = {} }, 250) } }, 0) } else { g = {} } } } p = o = 0 }).on("touchcancel MSPointerCancel pointercancel", f); i(window).on("scroll", f) }); ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (o) { i.fn[o] = function (p) { return this.on(o, p) } }) })(Zepto); (function (a) { if (String.prototype.trim === a) { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, "") } } if (Array.prototype.reduce === a) { Array.prototype.reduce = function (c) { if (this === void 0 || this === null) { throw new TypeError() } var f = Object(this), b = f.length >>> 0, e = 0, d; if (typeof c != "function") { throw new TypeError() } if (b == 0 && arguments.length == 1) { throw new TypeError() } if (arguments.length >= 2) { d = arguments[1] } else { do { if (e in f) { d = f[e++]; break } if (++e >= b) { throw new TypeError() } } while (true) } while (e < b) { if (e in f) { d = c.call(a, d, f[e], e, f) } e++ } return d } } })();

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function(options) {
    options = $.extend({}, options)

    var memory, // Last fire value (for non-forgettable lists)
        fired,  // Flag to know if list was already fired
        firing, // Flag to know if list is currently firing
        firingStart, // First callback to fire (used internally by add and fireWith)
        firingLength, // End of the loop when firing
        firingIndex, // Index of currently firing callback (modified by remove if needed)
        list = [], // Actual callback list
        stack = !options.once && [], // Stack of fire calls for repeatable lists
        fire = function(data) {
          memory = options.memory && data
          fired = true
          firingIndex = firingStart || 0
          firingStart = 0
          firingLength = list.length
          firing = true
          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false
              break
            }
          }
          firing = false
          if (list) {
            if (stack) stack.length && fire(stack.shift())
            else if (memory) list.length = 0
            else Callbacks.disable()
          }
        },

        Callbacks = {
          add: function() {
            if (list) {
              var start = list.length,
                  add = function(args) {
                    $.each(args, function(_, arg){
                      if (typeof arg === "function") {
                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
                      }
                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
                    })
                  }
              add(arguments)
              if (firing) firingLength = list.length
              else if (memory) {
                firingStart = start
                fire(memory)
              }
            }
            return this
          },
          remove: function() {
            if (list) {
              $.each(arguments, function(_, arg){
                var index
                while ((index = $.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1)
                  // Handle firing indexes
                  if (firing) {
                    if (index <= firingLength) --firingLength
                    if (index <= firingIndex) --firingIndex
                  }
                }
              })
            }
            return this
          },
          has: function(fn) {
            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
          },
          empty: function() {
            firingLength = list.length = 0
            return this
          },
          disable: function() {
            list = stack = memory = undefined
            return this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            stack = undefined;
            if (!memory) Callbacks.disable()
            return this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || []
              args = [context, args.slice ? args.slice() : args]
              if (firing) stack.push(args)
              else fire(args)
            }
            return this
          },
          fire: function() {
            return Callbacks.fireWith(this, arguments)
          },
          fired: function() {
            return !!fired
          }
        }

    return Callbacks
  }
})(Zepto);

//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
//
//     Some code (c) 2005, 2013 jQuery Foundation, Inc. and other contributors

;(function($){
  var slice = Array.prototype.slice

  function Deferred(func) {
    var tuples = [
          // action, add listener, listener list, final state
          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
          [ "notify", "progress", $.Callbacks({memory:1}) ]
        ],
        state = "pending",
        promise = {
          state: function() {
            return state
          },
          always: function() {
            deferred.done(arguments).fail(arguments)
            return this
          },
          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
            var fns = arguments
            return Deferred(function(defer){
              $.each(tuples, function(i, tuple){
                var fn = $.isFunction(fns[i]) && fns[i]
                deferred[tuple[1]](function(){
                  var returned = fn && fn.apply(this, arguments)
                  if (returned && $.isFunction(returned.promise)) {
                    returned.promise()
                      .done(defer.resolve)
                      .fail(defer.reject)
                      .progress(defer.notify)
                  } else {
                    var context = this === promise ? defer.promise() : this,
                        values = fn ? [returned] : arguments
                    defer[tuple[0] + "With"](context, values)
                  }
                })
              })
              fns = null
            }).promise()
          },

          promise: function(obj) {
            return obj != null ? $.extend( obj, promise ) : promise
          }
        },
        deferred = {}

    $.each(tuples, function(i, tuple){
      var list = tuple[2],
          stateString = tuple[3]

      promise[tuple[1]] = list.add

      if (stateString) {
        list.add(function(){
          state = stateString
        }, tuples[i^1][2].disable, tuples[2][2].lock)
      }

      deferred[tuple[0]] = function(){
        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
        return this
      }
      deferred[tuple[0] + "With"] = list.fireWith
    })

    promise.promise(deferred)
    if (func) func.call(deferred, deferred)
    return deferred
  }

  $.when = function(sub) {
    var resolveValues = slice.call(arguments),
        len = resolveValues.length,
        i = 0,
        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
        deferred = remain === 1 ? sub : Deferred(),
        progressValues, progressContexts, resolveContexts,
        updateFn = function(i, ctx, val){
          return function(value){
            ctx[i] = this
            val[i] = arguments.length > 1 ? slice.call(arguments) : value
            if (val === progressValues) {
              deferred.notifyWith(ctx, val)
            } else if (!(--remain)) {
              deferred.resolveWith(ctx, val)
            }
          }
        }

    if (len > 1) {
      progressValues = new Array(len)
      progressContexts = new Array(len)
      resolveContexts = new Array(len)
      for ( ; i < len; ++i ) {
        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
          resolveValues[i].promise()
            .done(updateFn(i, resolveContexts, resolveValues))
            .fail(deferred.reject)
            .progress(updateFn(i, progressContexts, progressValues))
        } else {
          --remain
        }
      }
    }
    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
    return deferred.promise()
  }

  $.Deferred = Deferred
})(Zepto);

Zepto.cookie = function (h, m, j) {
    if (typeof m != "undefined") {
        j = j || {};
        if (m === null) {
            m = "";
            j.expires = -1
        }
        var f = "";
        if (j.expires && (typeof j.expires == "number" || j.expires.toUTCString)) {
            var d;
            if (typeof j.expires == "number") {
                d = new Date();
                d.setTime(d.getTime() + (j.expires * 24 * 60 * 60 * 1000))
            } else {
                d = j.expires
            }
            f = "; expires=" + d.toUTCString()
        }
        var k = j.path ? "; path=" + j.path : "";
        var e = j.domain ? "; domain=" + j.domain : "";
        var l = j.secure ? "; secure" : "";
        document.cookie = [h, "=", encodeURIComponent(m), f, k, e, l].join("")
    } else {
        var c = null;
        if (document.cookie && document.cookie != "") {
            var b = document.cookie.split(";");
            for (var g = 0; g < b.length; g++) {
                var a = Zepto.trim(b[g]);
                if (a.substring(0, h.length + 1) == (h + "=")) {
                    c = decodeURIComponent(a.substring(h.length + 1));
                    break
                }
            }
        }
        return c
    }
};

$.fn.show = function () {
    this.each(function (a, b) {
        b.style.display = "block";
    })
    return this;
}
