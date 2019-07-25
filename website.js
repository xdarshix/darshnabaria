var colors = ['#FFE3F4', '#AEF3B3', '#6CD4DF', '#F2EF8E', '#8E92F2', '#F28E8E'];

var changeBG = function() {
  document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
};

changeBG();

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
