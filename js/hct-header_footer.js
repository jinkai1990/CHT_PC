function header(index) {
  var strVar = "";
  strVar += "<div class=\"well02 clearfix\">";
  strVar += "  <div class=\"header_top of_height\">";
  strVar += "     <div class=\"header_f \">";
  // 判断用户是否登陆
  // 用户未登陆
  strVar += "        <p class=\"header_p p6\">您好，请";
  strVar += "<a href=\"hct_login.html#pos\" class=\"red color6\">登录<\/a>或<a href=\"hct_register.html\" class=\"red color6\">注册<\/a>";
  strVar += "         <\/p>";
  // 用户未登陆 end
  // 用户已登陆
  strVar += "        <p class=\"header_p p6\"  style=\"\">欢迎回来，<a href=\"hct_personal-center.html\" class=\"red\">张三丰</a> 个人中心";
  strVar += "         <\/p>";
  // 用户已登陆 end

  strVar += "     <\/div>";
  strVar += "    <h1 class=\"title red\">中国合唱新作品推广平台<\/h1> ";

  strVar += "     <div class=\"header_r\">";
  strVar += "       <form action=\"\" class=\"form\"> ";
  strVar += "          <input type=\"text\" value=\"\" name=\"\" class=\"input_search fl\" /> ";
  strVar += "            <input type=\"submit\" value=\"\" class=\"submit_btn fl\" /> ";
  strVar += "        <\/form> ";
  strVar += "      <\/div>";
  strVar += "    ";
  strVar += "   <\/div> ";

  strVar += "   <div class=\"nav  ta_center\">  ";
  strVar += "    <ul class=\"ul_nav \">";
  strVar += "       <li ><a href=\"hct_index.html\" class=\"li_a\">首页<\/a><\/li>";
  strVar += "         <li ><a href=\"hct_product-list.html\" class=\"li_a\">合唱乐谱<\/a><\/li>";
  strVar += "         <li ><a href=\"hct_composer-list.html\" class=\"li_a\">作曲家<\/a><\/li>";
  strVar += "         <li ><a href=\"hct_legal-demand.html\" class=\"li_a\">正版查验<\/a><\/li>";
  strVar += "          <li class=\"info_menu\"><a href=\"hct_information-list.html\" class=\"li_a menu_a\">最新资讯<\/a>";
  strVar += "              <ul class=\"new_menu\">";
  strVar += "                  <li class=\"menu_li\"><a href=\"hct_information-list.html\" class=\"li_new\">乐谱资讯<\/a><\/li>";
  strVar += "                  <li class=\"menu_li\"><a href=\"hct_information-list.html\" class=\"li_new\">演出活动<\/a><\/li>";
  strVar += "                  <li class=\"menu_li\"><a href=\"hct_information-list.html\" class=\"li_new\">侵权公告<\/a><\/li>";

  strVar += "    ";
  strVar += "    ";
  strVar += "               <\/ul>";

  strVar += "        <\/li>";
  strVar += "          <li ><a href=\"hct_relation.html\" class=\"li_a\">联系我们<\/a><\/li>";
  strVar += "     <\/ul>";
  strVar += "    <\/div>";
  strVar += "    ";
  strVar += "<\/div>";


  var headerId = document.getElementById('new_header');
  headerId.innerHTML = strVar;
  $('.ul_nav li').eq(index).addClass("active");

}

function new_footers() {
  var strVar = "";
  strVar += "<div class=\"footer\">  ";
  strVar += "   <ul class=\"footer_ul\">";
  strVar += "       <li><a href=\"\" class=\"li_a\">正版倡议<\/a><\/li>";
  strVar += "       <li><a href=\"\" class=\"li_a\">版权声明<\/a><\/li> ";
  strVar += "       <li><a href=\"hct_legal-report.html\" class=\"li_a\">侵权投诉<\/a><\/li> ";
  strVar += "        <li><a href=\"hct_information-list.html\" class=\"li_a\">最新资讯<\/a><\/li>";
  strVar += "       <li><a href=\"\" class=\"li_a\">常见问题<\/a><\/li>";
  strVar += "       <li><a href=\"hct_relation.html\" class=\"li_a\">联系我们<\/a><\/li>";
  strVar += "  <\/ul>";
  strVar += "     <div class=\"erwei_box\"> ";
  strVar += "         <img src=\"./images/erwei.gif\" width=\"97\" height=\"97\" class=\"erwie_img\" />";
  strVar += "          <p class=\"cao\">扫一扫关注我们<\/p>";

  strVar += "     <\/div>";

  strVar += "  <p class=\" footer_b ta_center\">COPYRIGHT © 2017 KIMBERLITE DIAMOND 广ICP备11008681号<\/p>";

  strVar += "<\/div>  ";
  strVar += " ";
  var footerId = document.getElementById('footer');
  footerId.innerHTML = strVar;
}

function sides() {
  var strVar = "";
  strVar += "  <a  class=\"btn_top\"><\/a>";

  var sidesId = document.getElementById('izl_rmenu');
  sidesId.innerHTML = strVar;
}

$(function () {
  header(header_index);
  new_footers();
  sides();
});

