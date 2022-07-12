import { Component, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { KanbanComponent,CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('search')textBoxObj!: TextBoxComponent;
    @ViewChild('kanban')kanbanObj!: KanbanComponent;
  
  items : MenuItem[];
    
  candidate: City[];

  selectedCandidate: any;

  data: KanbanData[];

  

  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Name',
};
  constructor() {
    
    this.candidate = [
      {name: 'Amirdharshan A'},
      {name: 'Akash P'},
      {name: 'Vijay Bhupathi V'},
  ];

    this.items = [
      {label: 'Jobs'},
      {label: 'Full-stack Engineer'},
  ];

  this.data = [
    {
        Name: 'Amirdharshan A',
        Status: 'Open',
        Summary: 'Intellectyx Data science private limited'
    },
    {
        Name: 'Akash P',
        Status: 'Contacted',
        Summary: 'Centre'
    },
    {
        Name: 'Vijay Bhupathi V',
        Status: 'Written test',
        Summary: 'Topclass Entertainment LLP'
    },
    {
        Name: 'Arun Kumar',
        Status: 'Technical round',
        Summary: 'Vidhya Skill School'
    },
    {
        Name: 'Dinesh Kumar',
        Status: 'Culture fit round',
        Summary: 'Wipro Technologies'
    },
    {
        Name: 'Vimal Kumar',
        Status: 'Open',
        Summary: 'Sirius Compute Solutions'
    },
    {
        Name: 'Gayathri L',
        Status: 'Contacted',
        Summary: 'Katomaran Technologies Pvt Ltd'
    },
    {
        Name: 'M janasri',
        Status: 'Written test',
        Summary: 'TCS'
    },
    {
        Name: 'Midhun Krishna',
        Status: 'Technical round',
        Summary: 'Cognizant'
    },
    {
        Name: 'Pradeep K',
        Status: 'Culture fit round',
        Summary: 'Cognizant Technology Solutions'
    },
    {
        Name: 'Jayakrishnan Duraisamy',
        Status: 'Open',
        Summary: 'Lakeba IT Solutions'
    },
    {
        Name: 'S Suresh',
        Status: 'Contacted',
        Summary: 'Synopsis'
    },
    {
        Name: 'Mohamad Mubarak',
        Status: 'Written test',
        Summary: 'API improvements.'
    },
    {
        Name: 'Gowri Shankar S',
        Status: 'Technical round',
        Summary: 'BM Technovations'
    },
    {
        Name: 'Hemachandru K',
        Status: 'Culture fit round',
        Summary: 'Paypal Client'
    },
    {
        Name: 'Affan Ahmed Syed',
        Status: 'Open',
        Summary: 'Smart parking',
    },
    {
        Name: 'Arun Prakash',
        Status: 'Contacted',
        Summary: 'IIT Madras'
    },
    {
        Name: 'Jithin Sajay A',
        Status: 'Written test',
        Summary: 'Analyze SQL server 2008 connection.'
    },
    {
        Name: 'Sruthi Radhakrishnan',
        Status: 'Culture fit round',
        Summary: 'Konnectify'
    }
];
  }
  searchClick(e: KeyboardEvent): void {
    let searchValue: string = (<HTMLInputElement>e.target).value;
    let searchQuery: Query = new Query();
    if (searchValue !== '') {
        searchQuery = new Query().search(searchValue, ['Name'], 'contains', true);
    }
    this.kanbanObj.query = searchQuery;
    
}
}
interface City {
  name: string,
}
interface KanbanData{
  Name: string,
  Status: string,
  Summary: string
}