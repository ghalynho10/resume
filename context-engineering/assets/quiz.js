/* Reusable quiz. Usage:
 *   <div id="quiz"></div>
 *   <script src="../assets/quiz.js"></script>
 *   <script>Quiz.mount('#quiz', [{q:'...', options:['a','b','c','d'], answer:0, why:'...'}]);</script>
 * Rule: every option must have the same word count (and similar length), so form gives no clue.
 * Quiz.mount warns in the console (and on the page) when a question breaks the rule.
 * Feedback is immediate; the first click on a question is the answer that counts.
 */
(function () {
  function words(s) { return s.trim().split(/\s+/).length; }
  function check(item, i) {
    var wc = item.options.map(words), min = Math.min.apply(null, wc), max = Math.max.apply(null, wc);
    var len = item.options.map(function (o) { return o.length; });
    var lmin = Math.min.apply(null, len), lmax = Math.max.apply(null, len);
    var problems = [];
    if (min !== max) problems.push('word counts differ (' + wc.join(',') + ')');
    if (lmax - lmin > Math.max(8, lmax * 0.25)) problems.push('character lengths differ (' + len.join(',') + ')');
    if (problems.length) console.warn('Quiz Q' + (i + 1) + ': ' + problems.join('; '));
    return problems;
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
  function shuffle(order) { for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[j]; order[j] = t; } return order; }

  window.Quiz = {
    check: check,
    mount: function (sel, items, opts) {
      var root = typeof sel === 'string' ? document.querySelector(sel) : sel;
      var done = 0, correct = 0, total = items.length;
      var score = el('p', 'score'); score.setAttribute('aria-live', 'polite');
      root.classList.add('quiz');
      items.forEach(function (item, qi) {
        var problems = check(item, qi);
        var box = el('div', 'q');
        box.appendChild(el('p', 'q-text', (qi + 1) + '. ' + item.q));
        var list = el('div', 'opts'); list.setAttribute('role', 'group');
        var fb = el('p', 'fb'); fb.setAttribute('aria-live', 'polite');
        var order = shuffle(item.options.map(function (_, i) { return i; }));
        var buttons = [];
        order.forEach(function (oi) {
          var b = el('button', 'opt', item.options[oi]); b.type = 'button';
          b.addEventListener('click', function () {
            if (box.dataset.answered) return;
            box.dataset.answered = '1'; done++;
            var ok = oi === item.answer; if (ok) correct++;
            b.classList.add(ok ? 'right' : 'wrong');
            if (!ok) buttons.forEach(function (x) { if (x.oi === item.answer) x.b.classList.add('right'); });
            buttons.forEach(function (x) { x.b.disabled = true; });
            fb.className = 'fb ' + (ok ? 'ok' : 'no');
            fb.textContent = (ok ? 'Right. ' : 'Not quite. ') + item.why;
            score.textContent = done === total ? 'Score: ' + correct + ' / ' + total + '. Paste this back to your teacher, with the questions you found hard.' : '';
            if (opts && opts.onAnswer) opts.onAnswer(qi, ok);
          });
          buttons.push({ b: b, oi: oi }); list.appendChild(b);
        });
        box.appendChild(list); box.appendChild(fb);
        if (problems.length) box.appendChild(el('p', 'fb no', 'Authoring warning: ' + problems.join('; ')));
        root.appendChild(box);
      });
      root.appendChild(score);
    }
  };
})();
