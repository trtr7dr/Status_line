


function Status_line(id, h, back, tops) {



    this.id = (id != undefined) ? id : 'status-line';
    this.h = (h != undefined) ? h : '5px';
    this.back = (back != undefined) ? back : '#E91E63';
    this.tops = (tops != undefined) ? tops : '0px';

    window.onload=function(){
        var d=document.createElement('div');
        d.innerHTML = '<span></span>';
        d.id = this.id;
        document.body.appendChild(d);
        jQuery("#" + this.id ).css('position','fixed').css('z-index', '1').css('width', '100%').css('left', '0').css('top', this.tops);
        jQuery("#" + this.id + " span").css('width', '0%').css('display', 'block').css('height', this.h).css('background', this.back);
    }

    window.onscroll=function(){
        var scrolled=window.pageYOffset||document.documentElement.scrollTop;
        var document_height=jQuery(document).height()-950;
        var percent=(scrolled*100/document_height);
        jQuery("#" + this.id + " span").css('width',percent+'%');
    };
    
}

 Status_line(); // статусная строка по умолчанию
 
