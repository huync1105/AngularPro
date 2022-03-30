import { Component, OnInit } from '@angular/core';
import { TaiSanService } from 'src/app/services/tai-san.service';

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
    { header: 'Mã',field: 'id' },
    { header: 'Tên', field: 'name' },
    { header: 'Địa chỉ', field: 'address' },
    { header: 'SĐT', field: 'phone' },
    { header: 'Tuổi', field: 'age' },
  ]
  data?: Person[];

  constructor(
    private taiSanService: TaiSanService,
  ) {

  }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.taiSanService.GetListPerSons().subscribe((res:any)=> {
      this.data = res;
    })
  }

}
