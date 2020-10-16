if (!window.myPlugin){
    window.myPlugin = {};
}
/* 瀑布流 */
window.myPlugin.createWaterFall = function(option){
    var defaulOption = {
        minGap:10,
        mingap:10,
        imgSrcs: [],
        imgWidth:220 ,
        container:document.body
    };
    var option = Object.assign({},defaulOption,option);
    //创建图片元素
    createImgs();
    function createImgs(){
        for(var i=0;i<option.imgSrcs.length;i++){
             var img = document.createElement('img');
             img.src = option.imgSrcs[i];
             option.container.appendChild(img);
        }
    }
}