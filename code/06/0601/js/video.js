/*��6��Ԫ ��Ŀ6-1��Ƶ������ js�ļ�*/

//��ȡvideo����
var myVideo = document.getElementById("myVideo");
//���Ʋ���/��ͣ�ķ���
function playPause()
{
    var ppButton=document.getElementById("playPause");
    if (myVideo.paused){
        myVideo.play();
        ppButton.innerHTML="��ͣ";
    }
    else{
        myVideo.pause();
        ppButton.innerHTML="����";
    }
}
//���ƿ��/���˵ķ���
function goBack(val){
    myVideo.currentTime += val;
}
//���������ķ���
function volume(val){
        myVideo.volume+=val;
}
//�����Ƿ����ķ���
function isMuted(){
    var imButton=document.getElementById("isMuted");
    if (myVideo.muted){
        myVideo.muted=false;
        imButton.innerHTML="����";
    }
    else{
        myVideo.muted=true;
        imButton.innerHTML="����";
    }
}