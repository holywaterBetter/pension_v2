import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { GoogleSpreadsheet } from 'google-spreadsheet';
// const gs_creds = require('../assets/whayang-pension-ce91db3c274f.json'); // 키 생성 후 다운된 json파일을 지정합니다.
// const doc = new GoogleSpreadsheet(
//   '1eEwk95kqwlvS7MhQAtCr0rZU73hKeyUqrRUKfKKHLqs'
// );

@Injectable()
export class GoogleSheetService {
  constructor(private http: HttpClient) {}

  test() {
    console.warn('test');
    const id = '1eEwk95kqwlvS7MhQAtCr0rZU73hKeyUqrRUKfKKHLqs';
    const url = `https://spreadsheets.google.com/feeds/list/${id}/edit#gid=0`;

    this.http.get(url).pipe(
      map((data) => {
        console.warn('data', data);
      })
    );
  }

  //   fetchSheets(
  //     docId: string
  //   ): Observable<Array<{ title: string; docId: string; sheetId: string }>> {
  //     return this.http
  //       .get<any>(
  //         `https://spreadsheets.google.com/feeds/worksheets/${docId}/public/full?alt=json`
  //       )
  //       .pipe(
  //         map((data) => {
  //           if (data.feed && data.feed.entry && data.feed.entry.length) {
  //             return data.feed.entry.map((e) => ({
  //               title: e.title.$t,
  //               docId: docId,
  //               sheetId: e.id.$t.match(/[^/]*$/)[0],
  //             }));
  //           }
  //           return [];
  //         })
  //       );
  //   }

  //   fetchData(docId: string, sheetId: string): Observable<any> {
  //     return this.http
  //       .get<any>(
  //         `https://spreadsheets.google.com/feeds/list/${docId}/${sheetId}/public/full?alt=json`
  //       )
  //       .pipe(
  //         map((data) => {
  //           if (data.feed && data.feed.entry && data.feed.entry.length) {
  //             return data.feed.entry.map((e) => this.sheetEntryToObject(e));
  //           }
  //           return [];
  //         })
  //       );
  //   }

  //   private sheetEntryToObject(entry: any): any {
  //     const result = {};
  //     for (let prop in entry) {
  //       if (prop.startsWith('gsx$')) {
  //         const propName = prop.replace('gsx$', '');
  //         // result[propName] = entry[prop].$t;
  //         result;
  //       }
  //     }

  //     return result;
  //   }
}
