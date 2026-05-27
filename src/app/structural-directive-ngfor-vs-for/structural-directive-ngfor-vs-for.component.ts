import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  // imports: [CommonModule], @for structural directive we don't need to import CommonModule where as *ngFor Requires CommonModule
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss',
})
export class StructuralDirectiveNgforVsForComponent {
  employees: Employee[] = [
    {
      id: 100,
      name: 'John Doe',
      department: 'R&D',
      email: 'john.doe@example.com',
    },
    {
      id: 101,
      name: 'Jane Smith',
      department: 'R&D',
      email: 'jane.smith@example.com',
    },
    {
      id: 102,
      name: 'Bob Johnson',
      department: 'Q&A',
      email: 'bob.johnson@example.com',
    },
    {
      id: 103,
      name: 'Alice Williams',
      department: 'HR',
      email: 'alice.williams@example.com',
    },
    {
      id: 104,
      name: 'Charlie Brown',
      department: 'HR',
      email: 'charlie.brown@example.com',
    },
  ];

  companyList: string[] = [
    'Google',
    'Microsoft',
    'Apple',
    'Amazon',
    'Facebook',
  ];
}
