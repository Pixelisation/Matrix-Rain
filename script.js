const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let maxCharCount = 100000;
let fallingCharArray = [];
let fontSize = 12;
let maxColumns = canvasWidth / fontSize;
let frames = 0;
let charArray = [
  '一个', '一世', '吨', '米', '是的', '你', '私', '時間', 'バツ', '중', '큐', '승', '유', '피'
]
