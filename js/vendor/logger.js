(function(window){

    var  logger=function(eleId){
       this.eleId=eleId;
       this.messageLog;
        $("#"+this.eleId).css("position","absolute").css("background-color","red").css("color","white");
    }
    logger.prototype.log=function(msg){
        $("#"+this.eleId).html(msg);
    }

    window.logger=logger;
})(window)
