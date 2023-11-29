import { question } from "readline-sync";
import { Book } from "./book.js";
import { booksData } from "../data/data.js";
import { removeDiacritics } from "../ultis/removeDiacritics.js";

export class Program {

    constructor() {
        this.books = [];
        this.loadData(booksData);
    }

    loadData(data) {
        for (let e of data) {
            const newBook = new Book(e);
            this.books.push(newBook);
        }
    }

    menu() {
        console.log("========== Menu ==========");
        console.log("1. Count number of books by publisher.");
        console.log("2. Get average price of books.");
        console.log("3. Find book with highest id.");
        console.log("4. Check if book information is valid.");
        console.log("5. Filter books by price range.");
        console.log("6. Search books by keyword.");
        console.log("========== Choose ============");
    }

    run() {
        let choice = 0;

        do {
            this.menu();
            choice = Number(question('Chon chuc nang (Nhap so 0 de dung): '));
            console.clear();
            switch (choice) {
                case 1:
                    this.filterByProvider();
                    break;
                case 2:
                    this.searchByName('TUoi')
                    break;
                case 3:
                    this.sortByPrice()
                    break;
                case 4:
                    this.addBook()
                    break;
                case 5:
                    this.removeBook()
                    break;
                case 6:
                    this.updateBook()
                    break;
                case 7:
                    this.printData()
                    break;
            }
            question('Nhan phim bat ky de tiep tuc...');
            console.clear();
        } while (choice !== 0);
        console.info("Cam on ban da su dung ung dung. Tam biet!");
    }

    filterByProvider() {
        const ArrClue = new Set();

        for (const value of this.books) {
            if (!ArrClue.has(value.provider)) {
                ArrClue.add(value.provider);
            }
        }

        console.log('Goi y: ', [...ArrClue].join(', '));

        const provider = question('nhap provider: ')

        const result = this.books.filter((d) => d.provider == provider)
        console.log(result);
    }
    
    searchByName(keyword) {
        const matchingBooks = [];
    
        const keywordNoDiacritics = removeDiacritics(keyword).toLowerCase();
        for (const book of booksData) {
            const bookNoDiacritics = removeDiacritics(book.name).toLowerCase();
            
            if (bookNoDiacritics.includes(keywordNoDiacritics)) {
                matchingBooks.push(book);
            }
        }
        console.log(matchingBooks);
    }
    
    sortByPrice() {
        console.log('Nhap 0 de sap xep giam dan');
        console.log('Nhap 1 de sap xep tang dan');
        const answer = question('Nhap : ')
        const result = this.books.sort((a, b) => {
            if (answer == 1)
                return a.price - b.price
            else
                return b.price - a.price
        })
        console.log(result);
    }

    addBook() {
        const amount = +question('Nhap so sach ban muon them: ');

        for (let i = 0; i < amount; i++) {
            console.clear();
            const id = +question('Nhap so sach ban muon them: ');
            const name = question('Nhap so sach ban muon them: ');
            const price = +question('Nhap so sach ban muon them: ');
            const provider = +question('Nhap so sach ban muon them: ');

            const book = new Book(id, name, price, provider);

            this.books.push(book);
        }
        console.log(this.books);
        return this.books
    }

    removeBook() {
        const idBook = +question('Nhap id sach can xoa: ')

        const result = this.books.splice(idBook, 1);
        console.log(this.books);
        console.log('Sach da xoa:', result);
    }

    updateBook() {
        const idBook = +question('Nhap id sach can chinh sua: ')

        const result = this.books.find(book => book.id == idBook)
        console.log(result);
        const ChangeProp = question('Nhap thong tin can sua: ')
        const ChangeInfo = question('Nhap gia tri: ')

        for (const key in result) {
            if (key == ChangeProp) {
                console.log(result[key], ChangeInfo);
                return result[key] = ChangeInfo
            }
        }
    }
    printData() {
        console.log(this.books.sort())
    }
}
