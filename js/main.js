
 $(document).ready(function(){
    $(".top").load("../common/topnav.html");
    $("#headerCon").load("../common/headercontainer.html");
    $("footer.footer").load("../common/footer.html");
    $(".side_sort_bar").load("../common/side_sort_bar.html");
    
    
    
})

// 侧边栏上下切换
$(document).on("click",".first_sort>li h4",function () {
    $(this).next("ul").slideToggle();
    $(this).find(".side_icon").toggleClass("icon_show")

});

// 鞋码
$(".ls_code li").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
});
$(".imglist li").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".imgCover img").attr("src",$(this).find("img").attr("src"));
});
// 商品详情评价切换
$(".g_tabber li").click(function () {
  var index = $(this).index();
  $(".g_tabber li").removeClass("cur");
  $(this).addClass("cur");
  // $(".main_detail_wrapper>div").eq(index).show().siblings().hide();
  if (index == 0) {
    $(".goods_detail").show();
  } else {
    $(".goods_detail").hide();

  }
});
// 评价图片放大缩小
$(".tm_rate_pic li").click(function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
    $(this).parent(".tm_rate_pic").next(".pho_view").hide();

  } else {
    $(this).addClass("selected").siblings().removeClass("selected")
    var src = $(this).find("img").attr("src");
    $(this).parent(".tm_rate_pic").next(".pho_view").show();
    $(this).parent(".tm_rate_pic").next(".pho_view").find("img").attr("src", src)
  }

});

// 分页

$(".rate_paginator").Page({
  Pages: 200,
  PageOn: function (e) { },
JumpOn: function (e) { }
    // ActiveClass: "paging-selecte"
}, true);


// 选展位
$(".select_area").click(function(){
    $(".layer").removeClass("hide");
    $("body").css("overflow","hidden");
    $(".showmodal").addClass("active");
    
});

// 选展位
$(document).on("click",".pos_pa li",function(){
    if($(this).hasClass("status1")){
        $(this).removeClass("status1");
    }else if(!$(this).hasClass("status2")&&!$(this).hasClass("status3")){
        $(this).addClass("status1");
        
    }
});

// 确定
$(".btn_certain").click(function(){

    $(".layer").addClass("hide");
    $("body").css("overflow","");
    $(".showmodal").removeClass("active");
});
// 取消
$(".btn_dismiss").click(function(){
    
    $(".layer").addClass("hide");
    $("body").css("overflow","");
    $(".showmodal").removeClass("active");
});
// 领取优惠券
$(document).on("click",".ti_get",function(){
    $(this).removeClass("ti_get").addClass("has_get");
    $(this).text("已领取");
});
// 优惠券点击
$(".out_tip").click(function(){
  $(".out_wrapper,.out_bor_tac").toggle();
});

// 收藏
$("#btn_collect").click(function(){
    if($(this).hasClass("has_collect")){
        $(this).removeClass("has_collect");
        $(this).find("em").text("收藏");
    }else{
        $(this).addClass("has_collect");
        
        $(this).find("em").text("已收藏");
        
    }
});


$(".ls_type li").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    if($(this).index()==2){
        $(".areachoose").hide();
        $(".num_wrapper").show();
    }    else{
        $(".areachoose").show();
        $(".num_wrapper").hide();
        
        
    }
});

// 减少
$("#decrease").click(function(){
  var val=$(".amount_input").val();
  if(isNaN(val)){
    $(".amount_input").val(1);
  }else{
      val=Math.floor(val);
      if(val==1){
        $(".amount_input").val(1);
      }else{
        $(".amount_input").val(--val);
        
      }

  }
});
// 增加
$("#increase").click(function(){
    var val=$(".amount_input").val();
    if(isNaN(val)){
      $(".amount_input").val(1);
    }else{
        val=Math.floor(val);
        
          $(".amount_input").val(++val);
          
        
  
    }
})