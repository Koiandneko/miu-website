'use strict';
// 开场原文节选；仅展示预告，不载入完整剧本。
const excerpt = [
  ['我', '你真的要跟着？'],
  ['她', '嗯。'],
  ['我', '跟到什么时候？'],
  ['她', '等我想起来。'],
  ['我', '想起来什么？'],
  ['她', '那件很重要的事。'],
  ['我', '要是一直想不起来呢？'],
  ['', '她没有立刻回答，看了一眼前面的路。'],
  ['她', '那就一直跟着。'],
  ['', '……'],
  ['', '好像不小心捡到了什么很麻烦的东西。'],
];
let current = 0;
const speaker = document.getElementById('speaker');
const line = document.getElementById('line');
const page = document.getElementById('page');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
function renderExcerpt() {
  [speaker.textContent, line.textContent] = excerpt[current];
  speaker.hidden = !excerpt[current][0];
  page.textContent = `${String(current + 1).padStart(2, '0')} / ${String(excerpt.length).padStart(2, '0')}`;
  previous.disabled = current === 0;
  next.textContent = current === excerpt.length - 1 ? '再读一遍 ↺' : '下一句 →';
}
previous.addEventListener('click', () => { current = Math.max(0, current - 1); renderExcerpt(); });
next.addEventListener('click', () => { current = (current + 1) % excerpt.length; renderExcerpt(); });
renderExcerpt();
