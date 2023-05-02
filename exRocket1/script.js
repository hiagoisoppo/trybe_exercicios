const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
  try {
    let person = '';
    for (i = 0; i < clients.length; i += 1) {
      if (clients[i].name.includes(name)) {
        person = `Destinatário: ${clients[i].name}. Endereço: ${clients[i].address.street}, ${clients[i].address.number}, ${clients[i].address.neighborhood}, ${clients[i].address.city} - ${clients[i].address.state}. CEP: ${clients[i].address.cep} `;
      }
    }
    if (person === '') {
      throw new Error('Pessoa não encontrada, tente novamente');
    }
    return person;
  } catch (error) {
    return error.message;
  }
};

const findPersonByPosition = (position) => {
  try {
    if (clients[position] !== undefined) {
      return `Cliente: ${clients[position].name}. Email: ${clients[position].email}`;
    } else {
      throw new Error('Posição inválida, tente novamente');
    }
  } catch (error) {
    return error.message;
  }
};

const findPeopleByState = (state) => {
  try {
    const peoplesInState = [];
    for (i = 0; i < clients.length; i += 1) {
      if (clients[i].address.state.includes(state)) {
        peoplesInState.push(clients[i].name);
      }
    }
    if (peoplesInState[0] === undefined) {
      throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
    };
    return peoplesInState;
  } catch (error) {
    return error.message;
  }
};

console.log(' ');
console.log(findPersonByName('Ana'));
console.log(findPersonByName('Hiago'));

console.log(' ');
console.log(findPersonByPosition(3));
console.log(findPersonByPosition(11));

console.log(' ');
console.log(findPeopleByState('SP'));
console.log(findPeopleByState('SC'));