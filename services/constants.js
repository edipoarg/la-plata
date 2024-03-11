import "process";
/*const sheetKey = process.env.VITE_SHEET_KEY;
/*const sheetId = process.env.VITE_SHEET_ID;*/
const tsvId = process.env.VITE_TSV_ID;

const constants = {
  sheetUrl: `https://sheets.googleapis.com/v4/spreadsheets/1avxRdP_eGCOy07w7lR8d_Q12Ivm4G4GkBBQeloJnyvE/values/1!A:H?key=AKfycbwUkV1eUy8gUQ_znTGw76C979RLoO7J1HeXv14xFEvUD9vxjQfK3bJ5JBODTgDy2ODO`,
  tsvUrl: `https://docs.google.com/spreadsheets/d/e/${tsvId}/pub?output=tsv`,
};

export default constants;
