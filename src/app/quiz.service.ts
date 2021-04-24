import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
quizzes:Quiz[]=[
  {
    question:'Which one of the following river flows between Vindhyan and Satpura ranges?',
    answer:[
      {option:' Narmada',correct:true},
      {option:'Mahanadi',correct:false},
      {option:'Son',correct:false},
      {option:'Netravati',correct:false}
    ]
  },
  {
    question:'The Central Rice Research Station is situated in?',
    answer:[
      {option:'Chennai',correct:false},
      {option:'Cuttack',correct:true},
      {option:'Bangalore',correct:false},
      {option:'Quilon',correct:false}
    ]
  }
  ,
  {
    question:'Who among the following wrote Sanskrit grammar?',
    answer:[
      {option:'Kalidasa',correct:false},
      {option:'Charak',correct:false},
      {option:'Panini',correct:true},
      {option:'Aryabhatt',correct:false}
    ]
  }
  ,

  {
    question:' Which among the following headstreams meets the Ganges in last?',
    answer:[
      {option:'Alaknanda',correct:false},
      {option:'Pindar',correct:false},
      {option:'Mandakini',correct:false},
      {option:'Bhagirathi',correct:true}
    ]
  }
  ,
  {
    question:'The metal whose salts are sensitive to light is?',
    answer:[
      {option:'Zinc',correct:false},
      {option:'Silver',correct:true},
      {option:'Copper',correct:false},
      {option:'luminum',correct:false}
    ]
  }
  ,
  {
    question:'Tsunamis are not caused by',
    answer:[
      {option:'Hurricanes',correct:true},
      {option:'Earthquakes',correct:false},
      {option:'Undersea landslides',correct:false},
      {option:'Volcanic eruptions',correct:false}
    ]
  }
  ,
  {
    question:'D.D.T. was invented by?',
    answer:[
      {option:'Mosley',correct:true},
      {option:'Dalton',correct:false},
      {option:'Karl Benz',correct:false},
      {option:'Rudolf',correct:false}
    ]
  }
  ,
  {
    question:'Volcanic eruption do not occur in the',
    answer:[
      {option:'Baltic sea',correct:true},
      {option:'Black sea',correct:false},
      {option:'Caribbean sea',correct:false},
      {option:'Caspian sea',correct:false}
    ]}
  ,
  {
    question:' Indus river originates in –',
    answer:[
      {option:'Kinnaur',correct:false},
      {option:'Ladakh',correct:false},
      {option:'Nepal',correct:false},
      {option:'Tibet',correct:true}
    ]},
  {
    question:'Where was the electricity supply first introduced in India –',
    answer:[
      {option:'Mumbai',correct:false},
      {option:'Dehradun',correct:false},
      {option:'Darjeeling',correct:true},
      {option:'Chennai',correct:false}
    ]
  }
];
constructor() { }
  getQuizzes(){
    return this.quizzes;
  }
}
