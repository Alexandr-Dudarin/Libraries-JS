    import ru from "./data/ru.js"
    import en from "./data/ru.js"

    const changeLanguage = document.getElementById('changeLanguage');

    const output = (err, t) => {
      if (err) {
    return console.log('something went wrong loading', err);
}
  changeLanguage.innerHTML = t('changeLanguage');  
  document.getElementById('enterLogin').innerHTML = t('enterLogin');
  document.getElementById('password').innerHTML = t('password');
  document.getElementById('enter').innerHTML = t('enter');
  document.getElementById('paragraph').innerHTML = t('paragraph');
  document.getElementById('enterLoginRegistr').innerHTML = t('enterLoginRegistr');
  document.getElementById('enterEmail').innerHTML = t('enterEmail');
  document.getElementById('passwordRegistr').innerHTML = t('passwordRegistr');
  document.getElementById('passwordConfirm').innerHTML = t('passwordConfirm');
  document.getElementById('dateBirth').innerHTML = t('dateBirth');
  document.getElementById('avatarUpload').innerHTML = t('avatarUpload');
  document.getElementById('buttonRegistr').innerHTML = t('buttonRegistr');
}

i18next.init(
    {
  lng: 'ru',
  debug: true,
  resources: {
    ru,
     en
  }
}, 
output
);
changeLanguage.onclick = () => {
    const lang = i18next.language === "ru" ? "en" : "ru";
    i18next.changeLanguage(lang, output);
}