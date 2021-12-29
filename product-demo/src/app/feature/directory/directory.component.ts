import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  constructor(private configService: ConfigService) {}
  configData: any;
  ngOnInit(): void {
    this.configService.getConfig().subscribe(
      (res: any) => {
        this.configData = res;
        console.log('this.configData', res);
      },
      () => {},
      () => {}
    );
  }
}
