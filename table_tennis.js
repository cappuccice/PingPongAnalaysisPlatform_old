//仮
document.getElementById("PPAP").src = "PPAPS.jpg";

var player = "";
var net = "";
var service = "";
var higher = "";
var form = "";
var course = "";

var receive ="";
var side = "";
var rform = "";
var rcourse = "";

var modeshift = false;

var larryCount = 2;
var headCount = 2;
var playerCount = 0;
var AService = 1;
var BService = 1;
var serviceChange = 0;
var changeCount = 0;

$(function(){
    $('html').keyup(function(e){
        switch(e.which){
            case 13: // Enter
              if(serviceChange == 0 || serviceChange == 1){
                player = "選手A" + AService;
                AService++;
                serviceChange++;
                changeCount = 0;
              }else{
                player = "選手B" + BService;
                BService++;
                changeCount++;
                if(changeCount == 2){
                  serviceChange = 0;
                }
              }
              $("#player").val(player);
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
                  $('<td>').append(rform),
                  $('<td>').append(rcourse)
                )
              )
              larryCount = 2;
              net = "";
              service = "";
              higher = "";
              form = "";
              course = "";

              receive ="";
              side = "";
              rform = "";
              rcourse = "";
              $("#net").val("");
              $("#service").val("");
              $("#higher").val("");
              $("#form").val("");
              $("#course").val("");
              $("#receive").val("");
              $("#side").val("");
              $("#rform").val("");
              $("#rcourse").val("");



            break;

            case 9: // Tab
              larryCount = larryCount + 1;
              $('tr:last').append(
                  $('<td>').append(receive),
                  $('<td>').append(side),
                  $('<td>').append(rform),
                  $('<td>').append(rcourse),
              )
              if(headCount < larryCount){
                headCount = larryCount;
                var li = "<th>" + headCount + "打球目</th>"
                //$('oppai5').text(li);               )
                $('#oppai').append(
                  $('<th colspan="4">').append(li)
                )
                $('#oppai2').append(
                  $('<th>').append("<th>打球位置</th>"),
                  $('<th>').append("<th>ラケット面</th>"),
                  $('<th>').append("<th>打法</th>"),
                  $('<th>').append("<th>コース</th>"),
                )
                /*$('#oppai3').append(
                  $('<th>').append("<th><input type="text" size="8" maxlength="8" name="receive" value=""></th>"),
                  $('<th>').append("<th><input type="text" size="10" maxlength="10" name="side" value=""></th>"),
                  $('<th>').append("<th><input type="text" size="3" maxlength="3" name="form" value=""></th>"),
                  $('<th>').append("<th><input type="text" size="6" maxlength="6" name="course" value=""></th>"),
                )*/
              }
            break;
            //キー入力の実装
            //レット
            case 81: // Q
              if(net==null){
                $("#net").val("レット");
                net = "レット";
              }else{
                $("#net").val("");
                net = null;
              }
            break;
            //サービス位置
            case 87: // W
              if(modeshift == false){
                $("#service").val("フロント");
                service = "フロント";
              }else{
                $("#receive").val("フロント");
                receive = "フロント";
              }
            break;

            case 83: // s
              if(modeshift == false){
                $("#service").val("ミドル");
                service = "ミドル";
              }else{
                $("#receive").val("ミドル");
                receive = "ミドル";
              }
            break;

            case 88: // x
              if(modeshift == false){
                $("#service").val("バック");
                service = "バック";
              }else{
                $("#receive").val("バック");
                receive = "バック";
              }
            break;
            //サービス高さ
            case 69: // E
              if(modeshift == false){
                $("#higher").val("低い");
                higher = "低い";
              }else{
                $("#side").val("フォア");
                side = "フォア";
              }
            break;

            case 68: // D
              if(modeshift == false){
                $("#higher").val("普通");
                higher = "普通";
              }else{
                $("#side").val("バック");
                side = "バック";
              }
            break;

            case 67: // C
              if(modeshift == false){
                $("#higher").val("高い");
                higher = "高い";
              }else{
              }
            break;
            //フォーム
            case 82: // R
              if(modeshift == false){
                $("#form").val("横回転");
                form = "横回転";
              }else{
                $("#rform").val("横回転");
                rform = "横回転";
              }
            break;

            case 70: // F
              if(modeshift == false){
                $("#form").val("巻き込み");
                form = "巻き込み";
              }else{
                $("#rform").val("巻き込み");
                rform = "巻き込み";
              }
            break;

            case 86: // V
              if(modeshift == false){
                $("#form").val("YG");
                form = "YG";
              }else{
                $("#rform").val("YG");
                rform = "YG";
              }
            break;

            case 84: // T
              if(modeshift == false){
                $("#form").val("縦回転");
                form = "縦回転";
              }else{
                $("#rform").val("縦回転");
                rform = "縦回転";
              }
            break;

            case 71: // G
              if(modeshift == false){
                $("#form").val("バックハンド");
                form = "バックハンド";
              }else{
                $("#rform").val("バックハンド");
                rform = "バックハンド";
              }
            break;

            case 66: // B
              if(modeshift == false){
                $("#form").val("しゃがみ");
                form = "しゃがみ";
              }else{
                $("#rform").val("しゃがみ");
                rform = "しゃがみ";
              }
            break;
            //コース
            case 89: // Y
              if(modeshift == false){
                $("#course").val("左フォア");
                course = "左フォア";
              }else{
                $("#rcourse").val("左フォア");
                rcourse = "左フォア";
              }
            break;

            case 72: // H
              if(modeshift == false){
                $("#course").val("左センター");
                course = "左センター";
              }else{
                $("#rcourse").val("左センター");
                rcourse = "左センター";
              }
            break;

            case 78: // N
              if(modeshift == false){
                $("#course").val("左バック");
                course = "左バック";
              }else{
                $("#rcourse").val("左バック");
                rcourse = "左バック";
              }
            break;

            case 85: // U
              if(modeshift == false){
                $("#course").val("中フォア");
                course = "中フォア";
              }else{
                $("#rcourse").val("中フォア");
                rcourse = "中フォア";
              }
            break;

            case 74: // J
              if(modeshift == false){
                $("#course").val("中センター");
                course = "中センター";
              }else{
                $("#rcourse").val("中センター");
                rcourse = "中センター";
              }
            break;

            case 77: // M
              if(modeshift == false){
                $("#course").val("中バック");
                course = "中バック";
              }else{
                $("#rcourse").val("中バック");
                rcourse = "中バック";
              }
            break;

            case 73: // I
              if(modeshift == false){
                $("#course").val("右フォア");
                course = "右フォア";
              }else{
                $("#rcourse").val("右フォア");
                rcourse = "右フォア";
              }
            break;

            case 75: // K
              if(modeshift == false){
                $("#course").val("右センター");
                course = "右センター";
              }else{
                $("#rcourse").val("右センター");
                rcourse = "右センター";
              }
            break;

            case 188: // <
              if(modeshift == false){
                $("#course").val("右バック");
                course = "右バック";
              }else{
                $("#rcourse").val("右バック");
                rcourse = "右バック";
              }
            break;

            case 16: //Shift
              if(modeshift == false){
                modeshift = true;
                document.getElementById("PPAP").src = "PPAPR.jpg";
              }else{
                modeshift = false;
                document.getElementById("PPAP").src = "PPAPS.jpg";
              }
            break;

        }
    });
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
