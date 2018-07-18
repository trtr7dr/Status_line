
function Status_line(id, h, back, tops) {
    this.id = typeof id !== 'undefined' ? id : 'status-line';
    this.h = typeof h !== 'undefined' ? h : '5px';
    this.back = typeof back !== 'undefined' ? back : '#E91E63';
    this.tops = typeof tops !== 'undefined' ? tops : '0px';

    window.onload=function(){
        var d=document.createElement('div');
        d.innerHTML = '<span></span>';
        d.id = this.id;
        document.body.appendChild(d);
        jQuery("#" + this.id ).css({
            'position' : 'fixed',
            'z-index' : 1,
            'width' : '100%',
            'left' : 0,
            'top' : this.tops
        });
        jQuery("#" + this.id + " span" ).css({
            'display' : 'block',
            'width' : '0%',
            'height' : this.h,
            'background' : this.back
        });
    }

    window.onscroll=function(){
        var scrolled=window.pageYOffset||document.documentElement.scrollTop;
        var document_height=jQuery(document).height()-950;
        var percent=(scrolled*100/document_height);
        jQuery("#" + this.id + " span").css('width',percent+'%');
    };
    
}

 Status_line(); // статусная строка по умолчанию
 
