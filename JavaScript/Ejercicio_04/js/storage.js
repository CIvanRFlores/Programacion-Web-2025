import { insertHomework } from "./homeworks.js";
import { homework } from "./main.js";

const saveList = JSON.parse(localStorage.getItem('homeworks'));
saveList.forEach(hw => {
    homework.value = hw;
    insertHomework(homework);                
});