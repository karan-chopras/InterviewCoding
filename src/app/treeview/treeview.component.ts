import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {
  
    
  constructor() { }
  employees
  ngOnInit(): void {
     this.employees=[
      {
        "id": 6,
        "name": "Job1",
        "parentId": 0,
        "chainJob": "ONDCDVOZHRAVACO",
        "index": 1,
        "external": false,
        "children": [
          {
            "id": 7,
            "name": "Job2",
            "parentId": 6,
            "chainJob": "WUPVMXKCRYRUVNR",
            "index": 1,
            "external": false,
           
          },
          {
            "id": 9,
            "name": "Job4",
            "parentId": 6,
            "chainJob": "WWFLTFYNTEBVHYQ",
            "index": 1,
            "external": false,
           
          },
         {
            "id": 10,
            "name": "Job5",
            "parentId": 6,
            "chainJob": "WWFLTFYNTEBVHYQ",
            "index": 1,
            "external": false,
           
          }
        ]
      },
      {
        "id": 11,
        "name": "Job6",
        "parentId": 0,
        "chainJob": "ONDCDVOZHRAVACO",
        "index": 1,
        "external": false,
        "children": [
          {
            "id": 12,
            "name": "Job7",
            "parentId": 6,
            "chainJob": "WUPVMXKCRYRUVNR",
            "index": 1,
            "external": false,
           
          },
          {
            "id": 13,
            "name": "Job8",
            "parentId": 6,
            "chainJob": "WWFLTFYNTEBVHYQ",
            "index": 1,
            "external": false,
           
          },
         {
            "id": 14,
            "name": "Job9",
            "parentId": 6,
            "chainJob": "WWFLTFYNTEBVHYQ",
            "index": 1,
            "external": false,
           
          }
        ]
      },
      {
        "id": 15,
        "name": "Job10",
        "parentId": 0,
        "chainJob": "ONDCDVOZHRAVACO",
        "index": 1,
        "external": false,
        "children": [
          {
            "id": 16,
            "name": "Job11",
            "parentId": 6,
            "chainJob": "WUPVMXKCRYRUVNR",
            "index": 1,
            "external": false,
           
          },
          {
            "id": 17,
            "name": "Job12",
            "parentId": 6,
            "chainJob": "WWFLTFYNTEBVHYQ",
            "index": 1,
            "external": false,
           
          },
         {
            "id": 18,
            "name": "Job13",
            "parentId": 6,
            "chainJob": "WWFLTFYNTEBVHYQ",
            "index": 1,
            "external": false,
           
          }
        ]
      },
      ]
  }
  
}
