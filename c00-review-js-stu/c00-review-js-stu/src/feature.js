// Viết các hàm xử lý chức năng ở đây
// Không import data ở đây

import { question } from "readline-sync";
import { removeDiacritics } from "../ultis/removeDiacritics.js";



export function filterByProvider(booksData) {
    const ArrClue = new Set();

    for (const value of booksData) {
        if (!ArrClue.has(value.provider)) {
            ArrClue.add(value.provider);
        }
    }

    console.log('Goi y: ', [...ArrClue].join(', '));

    const provider = question('nhap provider: ')

    const result = booksData.filter((d) => d.provider == provider)
    console.log(result);
}

export function searchByName(booksData, keyword) {
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

export function sortByPrice(booksData) {
    console.log('Nhap 0 de sap xep giam dan');
    console.log('Nhap 1 de sap xep tang dan');
    const answer = question('Nhap : ')

    const result = booksData.sort((a, b) => {
        if (answer == 1)
            return a.price - b.price
        else
            return b.price - a.price
    })
    console.log(result);
}

export function addBook(booksData) {
    const amount = +question('Nhap so sach ban muon them: ');

    for (let i = 0; i < amount; i++) {
        console.clear();
        const book = {
            id: +question('Nhap id sach: '),
            name: question('Nhap ten sach: '),
            price: +question('Nhap gia sach: '),
            provider: question('Nhap NXB sach: '),
        }

        booksData.push(book);
    }
    console.log(booksData);
    return booksData
}

export function removeBook(booksData) {
    const idBook = +question('Nhap id sach can xoa: ')
    const idDelBook = booksData.find(book => book.id === idBook)

    const result = booksData.splice(idDelBook, 1);
    console.log(booksData);
    console.log(result);
}

export function updateBook(booksData) {
    const idBook = +question('Nhap id sach can chinh sua: ')

    const result = booksData.find(book => book.id === idBook)
    console.log(result);
    const ChangeProp = question('Nhap thong tin can sua: ')
    const ChangeInfo = question('Nhap gia tri: ')

    for (const key in result) {
        if (key == ChangeProp) {
            return result[key] = ChangeInfo
        }
    }
}

export function printData(booksData) {
    console.log(booksData.sort());
}
