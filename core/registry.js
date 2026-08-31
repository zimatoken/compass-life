window.SOS_QUIZ_REGISTRY = {};
function SOS_REGISTER_QUIZ(data) {
  const key = data.meta.module + "::" + data.meta.category + "::" + data.meta.lang;
  window.SOS_QUIZ_REGISTRY[key] = data;
  console.log('[Registry] Зарегистрирован:', key);
}
function SOS_GET_QUIZ(module, category, lang) {
  const key = module + "::" + category + "::" + lang;
  let quiz = window.SOS_QUIZ_REGISTRY[key];
  if(!quiz && lang !== 'ru') quiz = window.SOS_QUIZ_REGISTRY[module + "::" + category + "::ru"];
  return quiz;
}
window.SOS_REGISTER_QUIZ = SOS_REGISTER_QUIZ;
window.SOS_GET_QUIZ = SOS_GET_QUIZ;
console.log('✅ Registry загружен');
