import { Component, OnInit } from '@angular/core';

interface Person {
  id: string,
  name: string,
  address: string,
  phone: string,
  age: number
}

@Component({
  selector: 'app-danh-gia-nha-cung-ung',
  templateUrl: './danh-gia-nha-cung-ung.component.html',
  styleUrls: ['./danh-gia-nha-cung-ung.component.css']
})
export class DanhGiaNhaCungUngComponent implements OnInit {

  title: string = 'Bảng đánh giá nhà cung ứng';
  cols = [
    {
      header: 'Mã',
      field: 'id',
      element: `<input type="text" pInputText/>`
    },
    { header: 'Tên', field: 'name' },
    { header: 'Địa chỉ', field: 'address' },
    { header: 'SĐT', field: 'phone' },
    { header: 'Tuổi', field: 'age' },
  ]
  data?: Person[]

  constructor() {
    this.data = [
      {
        id: "P001",
        name: "Nguyễn Công Huy",
        address: "Cầu Giấy",
        phone: "0987654321",
        age: 23
      },
      {
        id: "P002",
        name: "Đặng Tuấn Huy",
        address: "Mỗ Lao",
        phone: "0987654321",
        age: 22
      },
      {
        id: "P001",
        name: "Lê Quốc Đạt",
        address: "Định Công",
        phone: "0987654321",
        age: 29
      },
    ];
  }

  ngOnInit(): void {
  }

}
