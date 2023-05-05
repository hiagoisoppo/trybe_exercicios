const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
//metodo 1
emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));
//metodo2
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
});