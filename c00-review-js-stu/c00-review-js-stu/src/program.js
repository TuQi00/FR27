import { question } from "readline-sync";
import { booksData } from "../data/data.js";
import * as features from "./feature.js";



/**
 * Hàm in ra menu của chương trình
 */
function menu() {
  console.log("============= MinShop =============");
  console.log("1. So luong sach cua NXB.");
  console.log("2. Tim sach theo ten.");
  console.log("3. Sap xep theo gia.");
  console.log("4. Them san pham.");
  console.log("5. Xoa san pham.");
  console.log("6. Cap nhat san pham.");
  console.log("============= Menu ===============");
}



/**
 * Hàm chạy chương trình chính
 */
function run() {
  let choice = 0;
  
  do {
    menu();
    choice = Number(question('Chon chuc nang (Nhap so 0 de dung): '));
    console.clear();
    switch (choice) {
      case 1:
        features.filterByProvider(booksData);
        break;
      case 2:
        features.searchByName(booksData, 't')
        break;
      case 3:
        features.sortByPrice(booksData)
        break;
      case 4:
        features.addBook(booksData)
        break;
      case 5:
        features.removeBook(booksData)
        break;
      case 6:
        features.updateBook(booksData)
        break;
      case 7:
          features.printData(booksData)
          break;
    }
    question('Nhan phim bat ky de tiep tuc...');
    console.clear();
  } while (choice !== 0);
  console.info("Cam on ban da su dung ung dung. Tam biet!");
}

export {run};