import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckOutOthersService {
  constructor() {}

  checkOutOtherServices: any = [
    {
      icon: '/assets/svg/students-icon-blue.svg',
      title: 'Student',
      titleLink:
        'https://www.bmo.com/main/personal/bank-accounts/student-banking/',
      titleAriaLabel: 'learn more about special offers for students',
      description: 'Students and recent grads can get $0 Monthly Plan Fee',
    },
    {
      icon: '/assets/svg/cdcb-resource-blue.svg',
      title: 'Canadian Defence Community',
      titleLink:
        'https://www.bmo.com/main/personal/bank-accounts/canadian-defence/',
      titleAriaLabel: 'learn more about special offers for students',
      description:
        'Exclusive savings for members of the Canadian Defence Community.',
    },
    {
      icon: '/assets/svg/seniors-icon-blue.svg',
      title: 'Seniors',
      titleLink:
        'https://www.bmo.com/main/personal/bank-accounts/seniors-banking/',
      titleAriaLabel: 'learn more about special offers for seniors',
      description: 'Can get $0 Monthly Plan Fee if you’re 60 or older.',
    },
    {
      icon: '/assets/svg/maple-leaf-blue.svg',
      title: 'Newcomers to Canada',
      titleLink:
        'https://www.bmo.com/main/personal/bank-accounts/newcomers-banking/',
      titleAriaLabel: 'learn more about special offers for newcomers to Canada',
      description:
        'The BMO NewStart Program can help make your arrival easier.',
    },
    {
      icon: '/assets/svg/teens-icon-blue.svg',
      title: 'Kids & Teens',
      titleLink:
        'https://www.bmo.com/main/personal/bank-accounts/kids-and-teens/',
      titleAriaLabel: 'learn more about special offers for kids and teens',
      description: 'Anyone 18 or under can get $0 Monthly Plan Fee.',
    },
    {
      icon: '/assets/svg/avatar-blue.svg',
      title: 'Indigenous',
      titleLink: 'https://www.bmo.com/main/personal/indigenous-banking/',
      titleAriaLabel: 'Learn more about deals for Indigenous',
      description:
        'We offer personalized support and special pricing for Indigenous communities.',
    },
  ];
}
