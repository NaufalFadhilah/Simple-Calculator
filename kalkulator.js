// insert value
function insert(num) {
  document.form.textarea.value = document.form.textarea.value + num;
}
// count
function count() {
  let result = document.form.textarea.value;
  document.form.textarea.value = eval(result);
}
// clean
function clean() {
  document.form.textarea.value = '';
}

// delete
function del() {
  let result = document.form.textarea.value;
  document.form.textarea.value = result.substring(0, result.length - 1);
}
