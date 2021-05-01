/**
 * Data Extractor.
 * author - Solaiman Shadin
 * created_at - 010/6/2021
 */

const rowUniversities  = require('./row/rowAllUniversities.js');
const rowCollages  = require('./row/rowCollages');
const rowMazors  = require('./row/rowAcademicMazors');
const rowBanglaSchoolList  = require('./row/rowBanglaMediumSchoolList');
const rowEnglishSchoolList  = require('./row/rowEnglishMediumSchools');

// Extract university
const universities = rowUniversities.map(data => data.university ).filter(data=> data);

// Extract collages
const collages = rowCollages.map(data => data?.Name?.replace(/\[\w\]/, '') ).filter(data=> data?.length > 1);

// extract mazors 
const mazors = [...rowMazors.map(data=> data.value)]
const uniqueMazors = [...new Set(mazors)]

// Extract bangla medium school
const banglaSchools = rowBanglaSchoolList.map(data => data.INSTITUTE_NAME_NEW)

// Extract English medium school
const engMediumSchools = rowEnglishSchoolList.map(data => data['Name of School'])

// create data file
fs = require('fs');
fs.writeFile('englishMediumSchools.json', JSON.stringify(engMediumSchools), function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

