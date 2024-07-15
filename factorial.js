function tofindfact(num){
    if(num<=1){
        return 1;
    }
    else{
        return num*tofindfact(num-1);
    }
}
document.write(tofindfact(5)+" is the factorial");