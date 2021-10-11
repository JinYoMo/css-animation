(function(){
    //转盘抽奖顺序
   const wards=['1元','2元','3元','5元','再来','算法','0.5元','0.1元','0.2元','0.6元','0.5元','再来'];
    //渲染 dom
    let fragment = document.createDocumentFragment();
    for(let i=0,len=wards.length;i<len;i++){
        let piece=document.createElement('div');
        piece.className='piece piece-'+i;
        piece.innerHTML='<span>'+wards[i]+'</span>';
        fragment.appendChild(piece);
    }
    $('#piece_wrap')[0].appendChild(fragment);

    //生成从start-end的随机数
    function randomArr(start,end){
        return Math.round(start + Math.random() * (end-start))
    }
    
    //转动逻辑
    let radis=30, //每个扇形区域的度数
    n = randomArr(0,360/radis), //计算随机中奖的位置
    initRadis = 720, //初始转动的角度
    time = 16*1000, //转动时间
    once = true, //限制一个转动周期只能点击一次
    totalRadis = initRadis + radis * n +radis / 2; //转动角度计算公式
    $('.start').on('click',function(){
        if(once){
            once = false;
            $('#piece_wrap').css({
                'transform':'rotate('+totalRadis+'deg)',
                'transition':'transform 16s cubic-bezier(0,.47,.31,1.03)'
            });
            setTimeout(function(){
                once=true;
                alert('恭喜你抽中了'+wards[n]+'!');
                $('#piece_wrap').css({
                    'transform':'rotate('+0+'deg)',
                    'transition':'none'
                })
            },time)
        }
    })
})()