function expand_checkbox() {
    // var remember = document.querySelector("input[name=expand]");
    var remember = document.getElementById("expand-checkbox");
    var content_boxes = document.querySelectorAll(".content-boxes");
    remember.addEventListener('change',function(){
        
        if(this.checked)
        {
            for(let i = 0; i < content_boxes.length ; i++)
            {
                let item = content_boxes.item(i);
                item.style.height = "fit-content";
                item.style.marginTop = "2vw";
            }
        }else{
            for(let i = 0; i < content_boxes.length ; i++)
                {
                    let item = content_boxes.item(i);
                    item.style.height = "";
                    item.style.marginTop = "";
                    
                    
                }
        }
    })
}
expand_checkbox();
