let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

let lesson2 = {
    materia: 'História',    
    numeroEstudantes: 20,   
    professor: 'Carlos',    
  };
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //////////////////////////////////////////////////////////////////////
//
  function modLesson2(object, key, values) {
    object[key] = values;
  };

  modLesson2(lesson2, 'turno', 'noite');

  ///////////////////////////////////////////////////////////////////////

  function showKeys(object) {
    return Object.keys(object);
  };

  /////////////////////////////////////////////////////////////////////////

  function showLength(object){
    return Object.entries(object).length;
  };

/////////////////////////////////////////////////////////////////////////////

function showValues(object) {
    return Object.values(object);
}

//////////////////////////////////////////////////////////////////////////////

let allLessons = { 
    lesson1, 
    lesson2, 
    lesson3,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function allStudy(allLessons) {
    return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getValueByNumber(object, index) {
    return Object.values(object)[index];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function verifyPair(object, key, value) {
    return Object.keys(object)[3] === key && object[key] === value;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false