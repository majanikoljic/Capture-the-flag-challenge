// put your word here, which will satisfy the automatic grading portion
// this should be a single word and not a URL

// put your word here, which will satisfy the automatic grading portion
// this should be a single word and not a URL

export const FLAG = "these";

/*
Script I used to retrieve flag:

const chars = [];

document.querySelectorAll('section[data-id^="92"]').forEach(section => {
  section.querySelectorAll('article[data-class$="45"]').forEach(article => {
    article.querySelectorAll('div[data-tag*="78"]').forEach(div => {
      const b = div.querySelector('b.ref[value]');
      if (b) {
        chars.push(b.getAttribute('value'));
      }
    });
  });
});

console.log(chars.join(''));
*/
