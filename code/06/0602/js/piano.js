/*��6��Ԫ ��Ŀ6-2 HTML5 Web���� js�ļ�*/

//ҳ�������Ϻ�ִ��
window.onload = function(){
    //��ȡ���е�div�ټ�
    var mydivs = document.getElementsByTagName("div");
    //��ȡ���е�audio��ƵԴ
    var myaudios = document.getElementsByTagName("audio");
    //ͨ��������±��ȡÿ���ټ���ÿ����Ƶ��������±��0��ʼ��
    // ʹ��forѭ����ѭ��������Ƶ��load()��play()����
    for(var i = 0 ; i <14; i++){
        mydivs[i].index = i;
        //����굥��ĳ���ټ�ʱ��������Ӧ����Ƶ������load()�����������Ҳ��ţ�����play()������
        mydivs[i].onclick = function(){
            myaudios[this.index].load(); //�������������������µ�����
            myaudios[this.index].play();
        }
    }
}
