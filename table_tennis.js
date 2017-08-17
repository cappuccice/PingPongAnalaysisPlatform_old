//仮
var player = "選手A";
var net = "レット";
var service = "ミドル";
var higher = "低い";
var form = "チキータ";
var course = "フォア前";

var receive ="フォア";
var side = "フロント";


var larryCount = 2;
var headCount = 2;




$('#nextBall').on('click', function(){
  larryCount = larryCount + 1;
  $('tr:last').append(
      $('<td>').append(receive),
      $('<td>').append(net),
      $('<td>').append(form),
      $('<td>').append(course),
  )
  if(headCount < larryCount){
    headCount = larryCount;
    var li = "<th>" + headCount + "打球目</th>"
    $('#oppai').append(
      $('<th colspan="4">').append(li)
    )
    $('#oppai2').append(
      $('<th>').append("<th>打球位置</th>"),
      $('<th>').append("<th>ラケット面</th>"),
      $('<th>').append("<th>打法</th>"),
      $('<th>').append("<th>コース</th>"),
    )
  }
});

$('#nextService').on('click', function() {
  $('#table_body').append(
    $('<tr>').append(
      $('<td>').append(player),
      $('<td>').append(net),
      $('<td>').append(service),
      $('<td>').append(higher),
      $('<td>').append(form),
      $('<td>').append(course),
      $('<td>').append(receive),
      $('<td>').append(side),
      $('<td>').append(form),
      $('<td>').append(course)
    )
  )
  larryCount = 2;
});




function movieChange(){
  //inputフィールドのテキスト内容を文字列として取得
  var str = document.getElementById("url").value

  //下の関数が起動
  //str ->上の文字列(埋め込みリンク)
  //"\"" ->"で文字列を分割する
  var youtube_url = splitString(str,"\"");

  console.log(youtube_url);

  //埋め込みリンクをidがmovieのsrc(ソース)に適応
  document.getElementById("movie_src").src = youtube_url;
}

//渡された文字列を分割する関数
function splitString (stringToSplit,separator) {
  //splitを使うと、指定した文字で分割できる
  //今回の場合は"
  var arrayOfStrings = stringToSplit.split(separator);

  //分割した文字列は配列に入る
  //それを表示している
  for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log(i + arrayOfStrings[i]);;
  }
  //分割した文字列の配列5番目にurlが入っているのでリターン
  return arrayOfStrings[5];
}

// 作成するテーブルの定義
 var r_end = 5;  // 行数
 var c_end = 4;  // 列数

/*------------------------------------------------
 jQuery で動的にテーブルを作成する
--------------------------------------------------*/
