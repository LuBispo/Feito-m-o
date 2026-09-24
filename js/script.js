function pedir(item){
  var msg = "Olá! Vi a página da Feito à Mão e tenho interesse em " + item + ". Pode me passar mais detalhes?";
  window.open("https://wa.me/5571983515827?text=" + encodeURIComponent(msg), "_blank");
}
