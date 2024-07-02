let p = fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/");

p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  return response.json();
}).then((values) => {
  console.log(values);
});
