/**
 * Created by admin on 2017/4/18.
 */
window.onload=function () {
    /*删除管理员*/
    removeManager();
    function removeManager(){
        $('.manager-list-remark').find('>input:nth-of-type(1)').on('click',function(){
            $(this).parent().parent().css('display','none');
        });
    }
    /*编辑管理员*/
    // $('.manager-list-remark').find('input:nth-of-type(1)').on('click',function(){
    //     $(this).parent().prev().html('<input type="text" value="123">');
    // })
    // 获取数据
    var oSave=document.getElementById('save');
    oSave.onclick=function(){
        alert(1);
    }
};
